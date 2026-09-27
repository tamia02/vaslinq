"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import RevealLines from "../motion/RevealLines";

// Showreel film that tilts up from 3D perspective into a full-width frame as
// it scrolls into view. Plays only while visible.
export default function Showreel() {
  const ref = useRef<HTMLDivElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.86, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);

  useEffect(() => {
    const v = video.current;
    if (!v) return;
    if (reduced) {
      v.pause();
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.25 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, [reduced]);

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-28 sm:px-8 lg:pt-36" aria-label="Vaslix showreel">
      <div className="px-2 text-center sm:px-0">
        <p className="lux-eyebrow">Showreel</p>
        <RevealLines
          className="display mx-auto mt-4 max-w-3xl text-[clamp(36px,4.6vw,60px)] font-bold"
          lines={["Code that runs", <>your <span key="a" className="serif-accent">business.</span></>]}
        />
      </div>
      <div ref={ref} className="mt-14" style={{ perspective: 1400 }}>
        <motion.div
          className="relative overflow-hidden rounded-[28px] border border-white bg-white p-2 shadow-[0_60px_120px_-50px_rgba(58,34,199,0.55)] sm:rounded-[36px] sm:p-3"
          style={reduced ? undefined : { rotateX, scale, y, transformOrigin: "center top" }}
        >
          <video
            ref={video}
            className="block aspect-video w-full rounded-[20px] bg-pearl sm:rounded-[26px]"
            poster="/video/showreel-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Vaslix showreel: code becomes dashboards, chat and voice agents, automated pipelines and live client products"
          >
            <source src="/video/showreel.webm" type="video/webm" />
            <source src="/video/showreel.mp4" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </section>
  );
}
