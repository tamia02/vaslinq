"use client";

import { useEffect, useRef } from "react";

export default function HeroBackdrop() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointer = (e: PointerEvent) => {
      // Parallax vars for the floating orbs (-1..1).
      wrap.style.setProperty("--mx", ((e.clientX / window.innerWidth) * 2 - 1).toFixed(3));
      wrap.style.setProperty("--my", ((e.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    };
    window.addEventListener("pointermove", onPointer, { passive: true });
    return () => window.removeEventListener("pointermove", onPointer);
  }, []);

  return (
    <div ref={wrapRef} className="hero-backdrop" aria-hidden="true">
      <div className="hero-grid-overlay" />
      <div className="orb-layer orb-layer-a"><div className="orb orb-a" /></div>
      <div className="orb-layer orb-layer-b"><div className="orb orb-b" /></div>
      <div className="orb-layer orb-layer-c"><div className="orb orb-c" /></div>
    </div>
  );
}
