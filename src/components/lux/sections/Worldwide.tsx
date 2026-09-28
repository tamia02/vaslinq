"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import RevealLines from "../motion/RevealLines";
import FadeIn from "../FadeIn";
import { COUNTRIES } from "../countries";

function LocalTime({ tz }: { tz: string }) {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () => new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: tz }).format(new Date());
    setT(fmt());
    const id = setInterval(() => setT(fmt()), 30_000);
    return () => clearInterval(id);
  }, [tz]);
  return <span className="tabular-nums">{t ?? "--:--"}</span>;
}

// "One studio, clients anywhere": flag cards with a local greeting and clock.
export default function Worldwide() {
  const reduced = useReducedMotion();
  return (
    <section id="worldwide" className="relative scroll-mt-28 overflow-hidden py-28 lg:py-36">
      <div aria-hidden="true" className="lux-halo -z-10 opacity-70" />
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <FadeIn>
              <p className="lux-eyebrow">Worldwide</p>
            </FadeIn>
            <RevealLines
              className="display mt-4 text-[clamp(36px,4.6vw,60px)] font-bold"
              lines={["One studio.", <span key="a" className="serif-accent">Clients anywhere.</span>]}
            />
          </div>
          <FadeIn delay={100} className="lg:col-span-5">
            <p className="text-[18px] leading-[1.65] text-ink-soft">
              We work remotely across time zones — and your AI agents greet customers in their own language, from
              Hindi and Arabic to Malay and English.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {COUNTRIES.map((c, i) => (
            <FadeIn as="li" key={c.code} delay={(i % 3) * 70} className="h-full">
              <motion.article
                className="lux-card group relative flex h-full flex-col overflow-hidden p-5 sm:p-7"
                whileHover={reduced ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                {/* soft wash of the flag behind the card on hover */}
                <img
                  src={`/flags/${c.code}.svg`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-8 h-40 w-auto rotate-[-8deg] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-40"
                />
                <div className="relative flex items-center justify-between">
                  <img
                    src={`/flags/${c.code}.svg`}
                    alt={`Flag of ${c.name}`}
                    width={56}
                    height={42}
                    className="h-9 w-12 rounded-[8px] object-cover shadow-[0_8px_18px_-8px_rgba(17,14,36,0.35),0_0_0_1px_rgba(17,14,36,0.06)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 sm:h-[42px] sm:w-14"
                  />
                  <span className="flex items-center gap-1.5 text-[12px] font-medium text-ink-mute">
                    <span className="material-symbols-outlined text-[15px]" aria-hidden="true">schedule</span>
                    <LocalTime tz={c.tz} />
                  </span>
                </div>
                <p
                  lang={c.lang}
                  dir={c.dir}
                  className={`font-intl relative mt-7 text-[clamp(24px,3vw,38px)] font-bold leading-[1.15] tracking-[-0.02em] text-ink ${c.dir === "rtl" ? "text-left" : ""}`}
                >
                  {c.hello}
                </p>
                <p className="relative mt-1 font-serif text-[16px] italic text-violet sm:text-[18px]">{c.meaning}</p>
                <p className="relative mt-auto pt-6 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink-mute">{c.name}</p>
              </motion.article>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
