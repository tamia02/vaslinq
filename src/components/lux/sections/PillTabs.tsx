"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

export type TabItem = {
  label: string;
  title: string;
  points: string[];
  image: string;
  url: string;
  facts: { k: string; v: string }[];
};

// Tinted panel with a sliding white pill tab bar and a fade-up content swap.
export default function PillTabs({ tabs }: { tabs: TabItem[] }) {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();
  const t = tabs[i];

  return (
    <div className="rounded-[32px] bg-[color-mix(in_oklab,#5b3df5_9%,#f6f5fb)] p-5 sm:p-10">
      <div className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1" role="tablist">
        {tabs.map((tb, k) => (
          <button
            key={tb.label}
            type="button"
            role="tab"
            aria-selected={k === i}
            onClick={() => setI(k)}
            className={`relative min-h-[44px] shrink-0 rounded-full px-5 text-[14px] font-semibold transition-colors ${k === i ? "text-ink" : "text-ink-mute hover:text-ink"}`}
          >
            {k === i && (
              <motion.span layoutId="tab-pill" className="absolute inset-0 rounded-full bg-white shadow-sm" transition={{ type: "spring", stiffness: 400, damping: 35 }} />
            )}
            <span className="relative">{tb.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={t.label}
          role="tabpanel"
          initial={reduced ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="mt-8 grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <h3 className="display text-[clamp(26px,2.8vw,38px)] font-bold">{t.title}</h3>
            <ul className="mt-6 space-y-3">
              {t.points.map((p) => (
                <li key={p} className="flex gap-3 leading-[1.6] text-ink-soft">
                  <span className="material-symbols-outlined mt-0.5 text-[20px] text-violet" aria-hidden="true">check</span>
                  {p}
                </li>
              ))}
            </ul>
            <a href={t.url} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary mt-8">
              See it live
              <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">north_east</span>
            </a>
          </div>
          <a href={t.url} target="_blank" rel="noopener noreferrer" className="group block overflow-hidden rounded-[24px] border border-white bg-white p-1.5 shadow-[0_30px_60px_-30px_rgba(58,34,199,0.4)]">
            <img src={t.image} alt={`${t.title} screenshot`} loading="lazy" className="aspect-[16/10] w-full rounded-[18px] object-cover object-top transition-transform duration-[1.2s] group-hover:scale-[1.03]" />
          </a>
          <dl className="grid grid-cols-3 gap-6 border-t border-ink/10 pt-6 lg:col-span-2">
            {t.facts.map((f) => (
              <div key={f.k}>
                <dt className="text-[13px] text-ink-mute">{f.k}</dt>
                <dd className="mt-1 text-[clamp(18px,2vw,26px)] font-bold tracking-[-0.02em]">{f.v}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
