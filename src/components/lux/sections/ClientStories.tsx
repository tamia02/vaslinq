"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FEATURED, MORE_WORK } from "../work";
import RevealLines from "../motion/RevealLines";

const STORIES = [...FEATURED, MORE_WORK[0], MORE_WORK[1]];

// Stacked, auto-advancing story cards. Shows the client's approved quote when
// one exists in work.ts; otherwise tells the story of what we built for them.
export default function ClientStories() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef);
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = STORIES.length;

  useEffect(() => {
    if (reduced || paused || !inView) return;
    const t = setInterval(() => setI((v) => (v + 1) % n), 6000);
    return () => clearInterval(t);
  }, [reduced, paused, inView, n]);

  const s = STORIES[i];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-paper py-28 lg:py-36" aria-roledescription="carousel" aria-label="Client stories">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
          <p className="lux-eyebrow">Client stories</p>
          <RevealLines
            className="display mt-4 text-[clamp(36px,4.6vw,60px)] font-bold"
            lines={["Brands that trust", <><span className="serif-accent">Vaslix</span> to build.</>]}
          />
          <p className="mt-6 max-w-md text-[18px] leading-[1.65] text-ink-soft">
            From founders shipping AI SaaS to heritage retailers going online — every build is custom, and every one is live.
          </p>

          <div className="mt-10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setI((v) => (v - 1 + n) % n)}
              className="grid h-12 w-12 place-items-center rounded-full border border-line bg-paper transition hover:border-violet hover:text-violet"
              aria-label="Previous story"
            >
              <span className="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            </button>
            <button
              type="button"
              onClick={() => setI((v) => (v + 1) % n)}
              className="grid h-12 w-12 place-items-center rounded-full bg-ink text-white transition hover:bg-violet"
              aria-label="Next story"
            >
              <span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
            </button>
            <div className="ml-4 flex gap-1.5" role="tablist" aria-label="Choose story">
              {STORIES.map((st, k) => (
                <button
                  key={st.slug}
                  role="tab"
                  aria-selected={k === i}
                  aria-label={st.name}
                  onClick={() => setI(k)}
                  className="grid h-6 place-items-center"
                >
                  <span className={`block h-1.5 rounded-full transition-all duration-500 ${k === i ? "w-8 bg-violet" : "w-1.5 bg-line"}`} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="relative lg:col-span-7"
          onPointerEnter={() => setPaused(true)}
          onPointerLeave={() => setPaused(false)}
        >
          {/* Back cards give the stack its depth */}
          <div aria-hidden="true" className="lux-card absolute inset-0 origin-bottom translate-y-8 scale-[0.9] !rounded-[32px] opacity-50" />
          <div aria-hidden="true" className="lux-card absolute inset-0 origin-bottom translate-y-4 scale-[0.95] !rounded-[32px] opacity-80" />

          <div className="lux-card relative z-10 min-h-[460px] overflow-hidden !rounded-[32px] p-8 sm:p-11" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.slug}
                initial={reduced ? false : { opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduced ? undefined : { opacity: 0, y: -24, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-full flex-col"
              >
                <span className="font-serif text-[96px] leading-[0.6] text-violet/25" aria-hidden="true">&ldquo;</span>
                <blockquote className="mt-2 text-[clamp(20px,2.1vw,27px)] font-medium leading-[1.45] tracking-[-0.015em] text-ink">
                  {s.quote ? s.quote.text : s.blurb}
                </blockquote>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-6 pt-10">
                  <div className="flex items-center gap-4">
                    <div className="h-14 w-20 overflow-hidden rounded-xl border border-line">
                      <img src={s.image} alt="" className="h-full w-full object-cover object-top" />
                    </div>
                    <div>
                      <div className="text-[17px] font-bold tracking-[-0.01em]">{s.quote ? s.quote.author : s.name}</div>
                      <div className="text-[14px] text-ink-mute">{s.quote ? s.quote.role : s.industry}</div>
                    </div>
                  </div>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-violet"
                  >
                    See it live
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">north_east</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {!reduced && !paused && (
              <motion.div
                key={`bar-${i}`}
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-[3px] bg-violet"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
