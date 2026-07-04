"use client";

import { useEffect, useRef } from "react";

const VERT = `attribute vec2 aPos;void main(){gl_Position=vec4(aPos,0.0,1.0);}`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;

float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}
float noise(vec2 p){
  vec2 i=floor(p);vec2 f=fract(p);
  vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1.0,0.0)),u.x),mix(hash(i+vec2(0.0,1.0)),hash(i+vec2(1.0,1.0)),u.x),u.y);
}
float fbm(vec2 p){
  float v=0.0;float a=0.5;
  for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.03+vec2(11.3,7.1);a*=0.5;}
  return v;
}
void main(){
  vec2 uv=(gl_FragCoord.xy-0.5*uRes)/uRes.y;
  float t=uTime*0.045;
  vec2 m=(uMouse-0.5)*0.3;
  vec2 q=vec2(fbm(uv*1.3+t),fbm(uv*1.3+vec2(5.2,1.3)-t*0.8));
  vec2 r=vec2(fbm(uv*1.3+2.2*q+vec2(1.7,9.2)+m),fbm(uv*1.3+2.2*q+vec2(8.3,2.8)-m));
  float f=fbm(uv*1.3+2.6*r);
  vec3 deep=vec3(0.05,0.045,0.07);
  vec3 violet=vec3(0.24,0.175,0.42);
  vec3 lav=vec3(0.66,0.57,0.9);
  vec3 gold=vec3(0.74,0.6,0.3);
  vec3 col=mix(deep,violet,smoothstep(0.15,0.95,f));
  col=mix(col,lav,smoothstep(0.52,1.0,q.y*f)*0.45);
  col=mix(col,gold,smoothstep(0.74,1.0,r.x*f)*0.13);
  float vig=smoothstep(1.8,0.2,length(uv));
  col*=mix(0.55,1.0,vig);
  col+=(hash(gl_FragCoord.xy)*2.0-1.0)*0.012;
  gl_FragColor=vec4(col,1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

type Particle = {
  bx: number;
  y: number;
  r: number;
  vy: number;
  sway: number;
  amp: number;
  phase: number;
  warm: boolean;
};

export default function PageBackdrop() {
  const glCanvasRef = useRef<HTMLCanvasElement>(null);
  const dotCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const glCanvas = glCanvasRef.current;
    const dotCanvas = dotCanvasRef.current;
    if (!glCanvas || !dotCanvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---------- WebGL aurora layer ---------- */
    const gl =
      glCanvas.getContext("webgl", { antialias: false, depth: false, stencil: false }) ||
      (glCanvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    let drawAurora: ((t: number, mx: number, my: number) => void) | null = null;
    let cleanupGl: (() => void) | null = null;

    if (gl) {
      const vs = compile(gl, gl.VERTEX_SHADER, VERT);
      const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      const prog = gl.createProgram();
      if (vs && fs && prog) {
        gl.attachShader(prog, vs);
        gl.attachShader(prog, fs);
        gl.linkProgram(prog);
        if (gl.getProgramParameter(prog, gl.LINK_STATUS)) {
          gl.useProgram(prog);
          const buf = gl.createBuffer();
          gl.bindBuffer(gl.ARRAY_BUFFER, buf);
          gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
          const loc = gl.getAttribLocation(prog, "aPos");
          gl.enableVertexAttribArray(loc);
          gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
          const uRes = gl.getUniformLocation(prog, "uRes");
          const uTime = gl.getUniformLocation(prog, "uTime");
          const uMouse = gl.getUniformLocation(prog, "uMouse");
          drawAurora = (t, mx, my) => {
            gl.uniform2f(uRes, glCanvas.width, glCanvas.height);
            gl.uniform1f(uTime, t);
            gl.uniform2f(uMouse, mx, my);
            gl.drawArrays(gl.TRIANGLES, 0, 3);
          };
          cleanupGl = () => {
            gl.deleteProgram(prog);
            gl.deleteShader(vs);
            gl.deleteShader(fs);
            gl.deleteBuffer(buf);
          };
        }
      }
    }

    /* ---------- Particle dust layer ---------- */
    const ctx = dotCanvas.getContext("2d");
    let parts: Particle[] = [];

    const seed = (w: number, h: number) => {
      const count = Math.min(110, Math.max(40, Math.floor((w * h) / 16000)));
      parts = Array.from({ length: count }, () => ({
        bx: Math.random() * w,
        y: Math.random() * h,
        r: 0.5 + Math.random() * 1.7,
        vy: 6 + Math.random() * 16,
        sway: 0.2 + Math.random() * 0.5,
        amp: 8 + Math.random() * 26,
        phase: Math.random() * Math.PI * 2,
        warm: Math.random() < 0.14,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = window.innerWidth;
      const h = window.innerHeight;
      glCanvas.width = Math.max(1, Math.floor(w * dpr));
      glCanvas.height = Math.max(1, Math.floor(h * dpr));
      gl?.viewport(0, 0, glCanvas.width, glCanvas.height);
      dotCanvas.width = w;
      dotCanvas.height = h;
      seed(w, h);
    };
    resize();
    window.addEventListener("resize", resize);

    const mouse = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };
    const onPointer = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
    };
    if (!reduced) window.addEventListener("pointermove", onPointer, { passive: true });

    let raf = 0;
    const start = performance.now();
    let last = start;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = ((now - start) / 1000) % 3600;

      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      drawAurora?.(t, mouse.x, mouse.y);

      if (ctx) {
        const w = dotCanvas.width;
        const h = dotCanvas.height;
        ctx.clearRect(0, 0, w, h);
        ctx.globalCompositeOperation = "lighter";
        for (const p of parts) {
          p.y -= p.vy * dt;
          if (p.y < -20) {
            p.y = h + 20;
            p.bx = Math.random() * w;
          }
          const x = p.bx + Math.sin(t * p.sway + p.phase) * p.amp;
          const tw = 0.5 + 0.5 * Math.sin(t * 1.4 + p.phase * 3.0);
          const a = (0.1 + 0.4 * tw) * (p.r > 1.6 ? 0.7 : 1);
          ctx.beginPath();
          ctx.arc(x, p.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle = p.warm
            ? `rgba(231,195,101,${a * 0.8})`
            : `rgba(207,188,255,${a})`;
          ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
      }

      if (!reduced) raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      if (!reduced) window.removeEventListener("pointermove", onPointer);
      cleanupGl?.();
    };
  }, []);

  return (
    <div className="page-backdrop" aria-hidden="true">
      <canvas ref={glCanvasRef} />
      <div className="page-dim" />
      <canvas ref={dotCanvasRef} />
      <div className="hero-noise" />
    </div>
  );
}
