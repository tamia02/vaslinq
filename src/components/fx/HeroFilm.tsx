"use client";

import Link from "next/link";
import { HeroIntro, HeroItem, Magnetic } from "@/components/fx/MotionFx";

export default function HeroFilm() {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#0a0f0e]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/vaslix-film.mp4"
        poster="/vaslix-film-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f0e]/60 via-[#0a0f0e]/50 to-[#0a0f0e]/90" />
      <div className="absolute inset-0 hero-noise opacity-20" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-margin-page pt-20 pb-24 sm:pb-0">
        <HeroIntro className="flex flex-col items-center">
          <HeroItem>
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 rounded-full border border-primary/25 bg-primary/10 backdrop-blur-md mb-6 sm:mb-8 shadow-[0_0_24px_rgba(94,234,212,0.12)]">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#5eead4]"></span>
              <span className="font-semibold text-[10px] tracking-widest text-primary">System Health: Nominal</span>
            </div>
          </HeroItem>
          <HeroItem>
            <h1 className="headline-sheen font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl max-w-4xl mb-4 sm:mb-8 leading-tight tracking-tighter drop-shadow-[0_10px_40px_rgba(15,118,110,0.35)]">
              Building AI Systems That <span className="headline-accent font-bold">Actually Grow Businesses</span>
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
              Vaslix helps businesses automate communication, generate leads, improve conversions, and reduce manual work using AI-powered systems.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xs sm:max-w-none mx-auto">
              <Magnetic>
                <Link href="/solutions" className="btn-sheen bg-primary text-on-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all shadow-[0_10px_40px_-10px_rgba(94,234,212,0.5)] hover:shadow-[0_0_35px_rgba(94,234,212,0.55)]">
                  Explore Our Services
                  <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </Magnetic>
              <Magnetic>
                <a href="https://calendly.com/tasmiyasiddiqui457/quick-discovery-call" target="_blank" rel="noopener noreferrer" className="btn-sheen border border-outline-variant bg-white/5 backdrop-blur-md text-on-surface font-bold px-8 py-4 rounded-full transition-all hover:bg-white/10 hover:border-primary/40 flex items-center justify-center">
                  Book Strategy Call
                </a>
              </Magnetic>
            </div>
          </HeroItem>
        </HeroIntro>
      </div>
    </section>
  );
}
