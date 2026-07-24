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

export default function HeroFilm() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [chapterIdx, setChapterIdx] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduced) return;

    const onTimeUpdate = () => {
      if (!video.duration) return;
      const progress = video.currentTime / video.duration;
      const idx = CHAPTERS.reduce((acc, ch, i) => (progress >= ch.at ? i : acc), 0);
      setChapterIdx(idx);
    };

    video.addEventListener("timeupdate", onTimeUpdate);
    return () => video.removeEventListener("timeupdate", onTimeUpdate);
  }, [reduced]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#0a0f0e]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src="/vaslix-film.mp4"
        autoPlay={!reduced}
        muted
        loop
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
              opacity: reduced ? (i === 0 ? 1 : 0) : chapterIdx === i ? 1 : 0,
              y: reduced ? 0 : chapterIdx === i ? 0 : 16,
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
    </section>
  );
}
