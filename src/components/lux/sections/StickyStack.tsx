"use client";

import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type StackItem = {
  eyebrow: string;
  title: string;
  desc: string;
  chips: { icon: string; label: string }[];
  tone: string;
  visual: ReactNode;
};

function Card({ item, i, n, progress, fx }: { item: StackItem; i: number; n: number; progress: MotionValue<number>; fx: boolean }) {
  const reduced = useReducedMotion() || !fx;
  // Each card shrinks back a little as later cards slide over it.
  const target = 1 - (n - 1 - i) * 0.035;
  const scale = useTransform(progress, [i / n, 1], [1, target]);
  const dim = useTransform(progress, [i / n, 1], [0, (n - 1 - i) * 0.05]);

  return (
    <div className="sticky" style={{ top: `calc(104px + ${i * 16}px)` }}>
      <motion.article
        className="relative origin-top overflow-hidden rounded-[32px] will-change-transform border border-white/60 shadow-[0_30px_80px_-40px_rgba(17,14,36,0.35)]"
        style={{ background: item.tone, scale: reduced ? 1 : scale }}
      >
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ink" style={{ opacity: reduced ? 0 : dim }} />
        <div className="grid items-center gap-10 p-8 sm:p-12 lg:min-h-[540px] lg:grid-cols-2 lg:p-14">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-[0.16em] text-ink/60">{item.eyebrow}</p>
            <h3 className="display mt-4 text-[clamp(28px,3.2vw,44px)] font-bold">{item.title}</h3>
            <p className="mt-4 max-w-md text-[17px] leading-[1.65] text-ink/75">{item.desc}</p>
            <ul className="mt-8 grid max-w-md grid-cols-1 gap-2.5 sm:grid-cols-2">
              {item.chips.map((c) => (
                <li key={c.label} className="flex items-center gap-2.5 rounded-xl border border-ink/15 bg-white/70 px-3 py-2.5 text-[13.5px] font-medium text-ink">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-violet shadow-sm">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">{c.icon}</span>
                  </span>
                  {c.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center rounded-[26px] bg-white/50 p-6 sm:p-10">{item.visual}</div>
        </div>
      </motion.article>
    </div>
  );
}

// Thunai-style stacking panels: each pins below the nav and the next slides
// over it; earlier panels ease back in scale for depth.
export default function StickyStack({ items }: { items: StackItem[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  // The scale-back depth effect is desktop-only; on phones the cards still pin
  // and stack, just without per-frame transforms on large panels.
  const [fx, setFx] = useState(false);
  useEffect(() => setFx(window.matchMedia("(min-width: 1024px)").matches), []);
  return (
    <div ref={ref} className="relative flex flex-col gap-[14vh] pb-[6vh]">
      {items.map((it, i) => (
        <Card key={it.title} item={it} i={i} n={items.length} progress={scrollYProgress} fx={fx} />
      ))}
    </div>
  );
}
