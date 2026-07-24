"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const CHAPTERS = [
  { at: 0.0, title: "Signals become systems.", sub: "Every conversation, call, and click — read in real time." },
  { at: 0.2, title: "Signals in.", sub: "Messages, calls, and leads flow into one intelligence core." },
  { at: 0.4, title: "Systems connect.", sub: "One core becomes a network of automated workflows." },
  { at: 0.6, title: "Infrastructure rises.", sub: "Dashboards, CRMs, and pipelines assemble themselves." },
  { at: 0.82, title: "One infrastructure. Built to grow you.", sub: "This is Vaslix." },
];

export default function ScrollFilm() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [chapterIdx, setChapterIdx] = useState(0);
  const [ready, setReady] = useState(false);
  const [pin, setPin] = useState<"before" | "during" | "after">("before");

  useEffect(() => {
    const wrap = wrapRef.current;
    const video = videoRef.current;
    if (!wrap || !video) return;

    if (reduced) {
      video.muted = true;
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    const onCanPlay = () => setReady(true);
    video.addEventListener("loadedmetadata", onCanPlay);

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const total = rect.height - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(1, total)));
        if (video.duration) {
          video.currentTime = progress * video.duration;
        }
        setPin(rect.top > 0 ? "before" : rect.bottom <= window.innerHeight ? "after" : "during");
        const idx = CHAPTERS.reduce(
          (acc, ch, i) => (progress >= ch.at ? i : acc),
          0
        );
        setChapterIdx(idx);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      video.removeEventListener("loadedmetadata", onCanPlay);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  return (
    <section ref={wrapRef} className="relative" style={{ height: reduced ? "100vh" : "500vh" }}>
      <div
        className="h-screen w-full overflow-hidden bg-[#0a0f0e]"
        style={
          reduced
            ? { position: "relative" }
            : pin === "before"
            ? { position: "absolute", top: 0, left: 0, right: 0 }
            : pin === "after"
            ? { position: "absolute", bottom: 0, left: 0, right: 0 }
            : { position: "fixed", top: 0, left: 0, right: 0 }
        }
      >
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/vaslix-film.mp4"
          poster="/vaslix-film-poster.jpg"
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0e]/70 via-transparent to-[#0a0f0e]/90" />
        <div className="absolute inset-0 hero-noise opacity-20" />

        <div className="relative z-10 flex h-full flex-col items-center justify-end pb-24 px-margin-page text-center">
          {CHAPTERS.map((ch, i) => (
            <motion.div
              key={ch.title}
              className="absolute inset-x-0 bottom-24 px-margin-page"
              initial={false}
              animate={{
                opacity: chapterIdx === i ? 1 : 0,
                y: chapterIdx === i ? 0 : 16,
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="headline-sheen font-bold text-3xl md:text-5xl tracking-tight mb-3 drop-shadow-[0_10px_40px_rgba(15,118,110,0.35)]">
                {ch.title}
              </h2>
              <p className="text-on-surface-variant text-base md:text-lg max-w-xl mx-auto">
                {ch.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {!reduced && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {CHAPTERS.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  chapterIdx === i ? "w-8 bg-primary shadow-[0_0_10px_#5eead4]" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        )}

        {!ready && !reduced && (
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="w-10 h-10 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
          </div>
        )}
      </div>
    </section>
  );
}
