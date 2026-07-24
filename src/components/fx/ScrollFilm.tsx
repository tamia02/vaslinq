"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const FRAME_COUNT = 336;
const frameSrc = (i: number) => `/film-frames/f${String(i + 1).padStart(4, "0")}.webp`;

const CHAPTERS = [
  { at: 0.0, title: "Signals become systems.", sub: "Every conversation, call, and click — read in real time." },
  { at: 0.2, title: "Signals in.", sub: "Messages, calls, and leads flow into one intelligence core." },
  { at: 0.4, title: "Systems connect.", sub: "One core becomes a network of automated workflows." },
  { at: 0.6, title: "Infrastructure rises.", sub: "Dashboards, CRMs, and pipelines assemble themselves." },
  { at: 0.82, title: "One infrastructure. Built to grow you.", sub: "This is Vaslix." },
];

export default function ScrollFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIdxRef = useRef(0);
  const reduced = useReducedMotion();

  const [chapterIdx, setChapterIdx] = useState(0);
  const [pin, setPin] = useState<"before" | "during" | "after">("before");
  const [loaded, setLoaded] = useState(0);
  const [ready, setReady] = useState(false);

  const lastDrawnRef = useRef(0);

  const drawFrame = (idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // If the requested frame isn't loaded yet, fall back to the nearest
    // already-loaded frame instead of leaving the canvas blank/frozen.
    let useIdx = idx;
    if (!imagesRef.current[useIdx]?.complete || imagesRef.current[useIdx].naturalWidth === 0) {
      let found = -1;
      for (let d = 1; d < FRAME_COUNT; d++) {
        const back = idx - d;
        const fwd = idx + d;
        if (back >= 0 && imagesRef.current[back]?.complete && imagesRef.current[back].naturalWidth > 0) {
          found = back;
          break;
        }
        if (fwd < FRAME_COUNT && imagesRef.current[fwd]?.complete && imagesRef.current[fwd].naturalWidth > 0) {
          found = fwd;
          break;
        }
      }
      if (found === -1) return;
      useIdx = found;
    }
    lastDrawnRef.current = useIdx;

    const img = imagesRef.current[useIdx];
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cw = canvas.clientWidth;
    const ch = canvas.clientHeight;
    if (canvas.width !== cw * dpr || canvas.height !== ch * dpr) {
      canvas.width = cw * dpr;
      canvas.height = ch * dpr;
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const ir = img.naturalWidth / img.naturalHeight;
    const cr = cw / ch;
    let sx = 0, sy = 0, sw = img.naturalWidth, sh = img.naturalHeight;
    if (ir > cr) {
      sw = img.naturalHeight * cr;
      sx = (img.naturalWidth - sw) / 2;
    } else {
      sh = img.naturalWidth / cr;
      sy = (img.naturalHeight - sh) / 2;
    }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, cw, ch);
  };

  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT);

    const frameToLoad = reduced ? [0] : Array.from({ length: FRAME_COUNT }, (_, i) => i);

    frameToLoad.forEach((i) => {
      const img = new Image();
      img.src = frameSrc(i);
      img.onload = () => {
        if (cancelled) return;
        count += 1;
        setLoaded(count);
        if (i === 0) drawFrame(0);
        if (count >= frameToLoad.length) setReady(true);
      };
      img.onerror = () => {
        if (cancelled) return;
        count += 1;
        setLoaded(count);
        if (count >= frameToLoad.length) setReady(true);
      };
      imgs[i] = img;
    });

    imagesRef.current = imgs;
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const resize = () => drawFrame(frameIdxRef.current);
    window.addEventListener("resize", resize);

    if (reduced) {
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));

        const idx = Math.min(FRAME_COUNT - 1, Math.round(progress * (FRAME_COUNT - 1)));
        frameIdxRef.current = idx;
        drawFrame(idx);

        const chIdx = CHAPTERS.reduce((acc, ch, i) => (progress >= ch.at ? i : acc), 0);
        setChapterIdx(chIdx);
        setPin(rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "during");
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, [reduced, ready]);

  return (
    <section ref={wrapRef} className="relative" style={{ height: reduced ? "100vh" : "260vh" }}>
      <div
        className="h-screen w-full overflow-hidden bg-[#0a0f0e]"
        style={
          reduced
            ? { position: "relative" }
            : pin === "before"
            ? { position: "absolute", top: 0, left: 0, right: 0 }
            : pin === "after"
            ? { position: "absolute", bottom: 0, left: 0, right: 0 }
            : { position: "fixed", top: 0, left: 0, right: 0 }
        }
      >
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0e]/70 via-transparent to-[#0a0f0e]/90" />
        <div className="absolute inset-0 hero-noise opacity-20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-margin-page text-center">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={ch.title}
              className="absolute inset-x-0 bottom-24 px-margin-page"
              initial={false}
              animate={{
                opacity: chapterIdx === i ? 1 : 0,
                y: chapterIdx === i ? 0 : 16,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="headline-sheen font-bold text-3xl md:text-5xl tracking-tight mb-3 drop-shadow-[0_10px_40px_rgba(15,118,110,0.35)]">
                {ch.title}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto">
                {ch.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {!reduced && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {CHAPTERS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  chapterIdx === i ? "w-8 bg-primary shadow-[0_0_10px_#5eead4]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        )}

        {loaded === 0 && (
          <div className="absolute inset-0 flex items-center justify-center z-30 bg-[#0a0f0e]">
            <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}
