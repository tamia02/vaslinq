"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import type { Shape } from "./HeroScene";

const scenes = {
  hero: dynamic(() => import("./HeroScene"), { ssr: false, loading: () => <div className="lux-orb-fallback" /> }),
  orbs: dynamic(() => import("./OrbScene"), { ssr: false, loading: () => <div className="lux-orb-fallback" /> }),
};

type Props = { scene: keyof typeof scenes; className?: string; label: string; shape?: Shape };

// Mounts a WebGL scene only once it nears the viewport, and pauses rendering
// whenever it scrolls away, so only one heavy canvas is ticking at a time.
export default function Stage3D({ scene, className = "", label, shape }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(false);
  const reduced = !!useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
        if (entry.isIntersecting) setMounted(true);
      },
      { rootMargin: "150px" }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const Scene = scenes[scene];

  return (
    <div ref={ref} className={className} role="img" aria-label={label}>
      {mounted ? <Scene active={active} reduced={reduced} shape={shape} /> : <div className="lux-orb-fallback" />}
    </div>
  );
}
