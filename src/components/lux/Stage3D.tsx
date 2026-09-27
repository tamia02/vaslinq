"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Shape } from "./HeroScene";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

type Props = { scene: "hero" | "orbs"; className?: string; label: string; shape?: Shape };

// Real-time WebGL is reserved for capable desktops. Everyone else (phones,
// low-core CPUs, data-saver, reduced motion) gets a pre-rendered snapshot of
// the same object with a gentle CSS float — visually near-identical, and it
// never loads three.js. The snapshot also doubles as the desktop placeholder
// so there is no pop-in while the scene compiles.
function canRunLive() {
  if (typeof window === "undefined") return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  return (
    window.matchMedia("(min-width: 1024px)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
    (nav.hardwareConcurrency ?? 8) > 4 &&
    (nav.deviceMemory ?? 8) >= 4 &&
    !nav.connection?.saveData
  );
}

export default function Stage3D({ scene, className = "", label, shape = "knot" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = !!useReducedMotion();
  const [live, setLive] = useState(false);
  const [active, setActive] = useState(false);
  const [ready, setReady] = useState(false);
  const src = scene === "orbs" ? "/3d/orbs.webp" : `/3d/${shape}.webp`;

  useEffect(() => {
    if (scene !== "hero" || !canRunLive()) return;
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setLive(true);
      },
      { rootMargin: "100px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, [scene]);

  return (
    <div ref={ref} className={className} role="img" aria-label={label}>
      <img
        src={src}
        alt=""
        decoding="async"
        fetchPriority={scene === "hero" ? "high" : "auto"}
        className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${reduced ? "" : "lux-float"} ${
          ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {live && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroScene active={active} reduced={reduced} shape={shape} onReady={() => setTimeout(() => setReady(true), 250)} />
        </div>
      )}
    </div>
  );
}
