"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Two rows of oversized type that slide in opposite directions as the band
// scrolls past — outlined row over a solid violet row.
export default function KineticBand({ words }: { words: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["4%", "-28%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-30%", "2%"]);
  const line = [...words, ...words, ...words].join("  ·  ");

  return (
    <div ref={ref} aria-hidden="true" className="relative select-none overflow-hidden py-10 sm:py-16">
      <motion.p
        className="whitespace-nowrap text-[clamp(56px,11vw,160px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-transparent will-change-transform [-webkit-text-stroke:1.5px_rgba(91,61,245,0.35)]"
        style={reduced ? undefined : { x: x1 }}
      >
        {line}
      </motion.p>
      <motion.p
        className="whitespace-nowrap bg-gradient-to-r from-violet-deep via-violet to-[#a78bfa] bg-clip-text text-[clamp(56px,11vw,160px)] font-extrabold leading-[0.95] tracking-[-0.05em] text-transparent will-change-transform"
        style={reduced ? undefined : { x: x2 }}
      >
        <span className="font-serif font-normal italic tracking-[-0.02em]">{line}</span>
      </motion.p>
    </div>
  );
}
