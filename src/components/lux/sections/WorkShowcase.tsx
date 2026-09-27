"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FEATURED, type Project } from "../work";
import RevealLines from "../motion/RevealLines";

function BrowserCard({ p, index, wide = false }: { p: Project; index: number; wide?: boolean }) {
  return (
    <article className={`group w-full ${wide ? "grid grid-cols-[1.45fr_1fr] items-center gap-12" : "flex flex-col"}`}>
      <a
        href={p.url}
        target="_blank"
        rel="noopener noreferrer"
        className="lux-card block overflow-hidden !rounded-[26px] p-2"
        aria-label={`Visit ${p.name} live site`}
      >
        <div className="flex items-center gap-1.5 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 truncate rounded-full bg-pearl px-3 py-1 text-[11px] text-ink-mute">
            {p.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-pearl">
          <img
            src={p.image}
            alt={`${p.name} website built by Vaslix`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: `radial-gradient(circle at 50% 120%, ${p.tone}55, transparent 60%)` }}
          />
          <span className="lux-glass absolute bottom-4 right-4 inline-flex translate-y-3 items-center gap-2 rounded-full px-4 py-2 text-[13px] font-semibold text-ink opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            Visit live site
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">north_east</span>
          </span>
        </div>
      </a>
      <div className={wide ? "" : "mt-6 flex items-start justify-between gap-6 px-1"}>
        <div>
          <p className="text-[13px] font-semibold text-violet">
            {String(index + 1).padStart(2, "0")} — {p.kind}
          </p>
          <h3 className="mt-2 text-[26px] font-bold tracking-[-0.03em] sm:text-[30px]">{p.name}</h3>
          <p className="mt-1 text-[14px] text-ink-mute">{p.industry}</p>
        </div>
        <ul className={`flex-wrap gap-2 ${wide ? "mt-5 flex" : "hidden justify-end sm:flex"}`}>
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-[12px] font-medium text-ink-soft">{t}</li>
          ))}
        </ul>
        {wide && <p className="mt-5 leading-[1.65] text-ink-mute">{p.blurb}</p>}
        {wide && (
          <a href={p.url} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-ghost mt-7">
            Visit live site
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">north_east</span>
          </a>
        )}
      </div>
      {!wide && <p className="mt-3 max-w-xl px-1 leading-[1.65] text-ink-mute">{p.blurb}</p>}
    </article>
  );
}

// Desktop: section pins while the project rail glides sideways with scroll.
// Mobile / reduced motion: a simple vertical stack.
export default function WorkShowcase({ heading = true }: { heading?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(FEATURED.length - 1) * 100 / FEATURED.length}%`]);
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const head = heading && (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="lux-eyebrow">Selected work</p>
        <RevealLines
          className="display mt-4 text-[clamp(36px,4.6vw,64px)] font-bold"
          lines={["Products we've", <><span className="serif-accent">shipped</span> for clients.</>]}
        />
      </div>
      <a href="/work" className="lux-btn lux-btn-ghost self-start md:self-auto">
        All projects
        <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
      </a>
    </div>
  );

  return (
    <section id="work" className="relative scroll-mt-24">
      {/* Mobile + reduced motion */}
      <div className={`mx-auto max-w-6xl px-6 py-24 sm:px-8 ${reduced ? "" : "lg:hidden"}`}>
        {head}
        <div className="mt-14 flex flex-col gap-20">
          {FEATURED.map((p, i) => (
            <BrowserCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>

      {/* Desktop pinned rail */}
      {!reduced && (
        <div ref={ref} className="relative hidden lg:block" style={{ height: `${FEATURED.length * 85}vh` }}>
          <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
            <div className="mx-auto w-full max-w-6xl px-8">{head}</div>
            <motion.div className="mt-10 flex" style={{ x, width: `${FEATURED.length * 100}%` }}>
              {FEATURED.map((p, i) => (
                <div key={p.slug} className="flex justify-center px-8 xl:px-0" style={{ width: `${100 / FEATURED.length}%` }}>
                  <div className="w-full max-w-6xl">
                    <BrowserCard p={p} index={i} wide />
                  </div>
                </div>
              ))}
            </motion.div>
            <div className="mx-auto mt-8 h-[2px] w-full max-w-6xl bg-line px-8">
              <motion.div className="h-full bg-violet" style={{ width: progress }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
