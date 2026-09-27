"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

export type Step = { icon: string; title: string; desc: string; preview: ReactNode };

const OUT_QUART = [0.25, 1, 0.5, 1] as const;
const DURATION = 5500;

// Vertical step list with a linked preview pane. Auto-advances while in view;
// clicking a step takes over. Active step gets a sliding violet bar.
export default function StepTabs({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || !inView || reduced) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % steps.length), DURATION);
    return () => clearTimeout(t);
  }, [active, auto, inView, reduced, steps.length]);

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <ul className="lg:col-span-5" role="tablist" aria-orientation="vertical">
        {steps.map((s, i) => {
          const on = i === active;
          return (
            <li key={s.title} className="relative border-b border-line last:border-0">
              {on && (
                <motion.span
                  layoutId="step-bar"
                  className="absolute -left-px bottom-3 top-3 w-[3px] rounded-full bg-violet"
                  transition={{ type: "spring", stiffness: 400, damping: 35 }}
                />
              )}
              <button
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                className="flex w-full items-start gap-4 py-5 pl-6 pr-2 text-left"
              >
                <span className={`material-symbols-outlined mt-0.5 text-[22px] transition-colors ${on ? "text-violet" : "text-ink-mute"}`} aria-hidden="true">
                  {s.icon}
                </span>
                <span className="flex-1">
                  <span className={`block text-[18px] font-semibold tracking-[-0.01em] transition-colors ${on ? "text-ink" : "text-ink-mute"}`}>{s.title}</span>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.span
                        className="block overflow-hidden"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                      >
                        <span className="block pt-2 leading-[1.6] text-ink-mute">{s.desc}</span>
                        {auto && !reduced && (
                          <span className="mt-4 block h-[2px] overflow-hidden rounded-full bg-line">
                            <motion.span
                              key={`p-${active}-${inView}`}
                              className="block h-full bg-violet"
                              initial={{ width: "0%" }}
                              animate={{ width: inView ? "100%" : "0%" }}
                              transition={{ duration: DURATION / 1000, ease: "linear" }}
                            />
                          </span>
                        )}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <motion.span
                  className="material-symbols-outlined mt-0.5 text-[20px] text-ink-mute"
                  animate={{ rotate: on ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                  aria-hidden="true"
                >
                  expand_more
                </motion.span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="relative overflow-hidden rounded-[32px] border border-white bg-gradient-to-br from-[#e9f7f1] via-lilac to-[#e4ebff] p-6 sm:p-10 lg:col-span-7">
        <div aria-hidden="true" className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.35)_0,rgba(255,255,255,0.35)_1px,transparent_1px,transparent_80px)]" />
        <div className="relative grid min-h-[420px] place-items-center rounded-[24px] border border-white/60 bg-white/45 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="flex w-full justify-center"
              initial={reduced ? false : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: OUT_QUART }}
            >
              {steps[active].preview}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
