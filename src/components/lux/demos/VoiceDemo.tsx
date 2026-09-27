"use client";

import { useEffect, useState } from "react";

const LANGS = ["English", "हिन्दी", "العربية", "Regional"];
const HEIGHTS = [18, 34, 52, 28, 64, 40, 22, 58, 36, 70, 30, 48, 24, 60, 38, 20, 44, 66, 32, 50, 26, 56, 36, 18];

// Live-call card: animated waveform, ticking timer and rotating language chip.
export default function VoiceDemo() {
  const [sec, setSec] = useState(47);
  const [lang, setLang] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSec((s) => s + 1), 1000);
    const l = setInterval(() => setLang((v) => (v + 1) % LANGS.length), 2400);
    return () => {
      clearInterval(t);
      clearInterval(l);
    };
  }, []);

  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");

  return (
    <div className="lux-card relative overflow-hidden !rounded-[32px] p-8 sm:p-10">
      <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet/15 blur-3xl" />
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-[#22c55e]" />
          </span>
          <span className="text-[14px] font-semibold">Live call · Inbound</span>
        </div>
        <span className="font-mono text-[14px] tabular-nums text-ink-mute">{mm}:{ss}</span>
      </div>

      <div className="relative mt-10 flex h-24 items-center justify-center gap-[5px]" aria-hidden="true">
        {HEIGHTS.map((h, i) => (
          <span
            key={i}
            className="wave-bar w-[6px] rounded-full bg-gradient-to-t from-violet-deep to-[#a78bfa]"
            style={{ height: h, animationDelay: `${(i % 8) * 0.09}s`, animationDuration: `${0.9 + (i % 5) * 0.12}s` }}
          />
        ))}
      </div>

      <div className="relative mt-10 space-y-3">
        <p className="rounded-2xl rounded-tl-sm bg-pearl px-4 py-3 text-[14px] leading-[1.5] text-ink-soft">
          <span className="font-semibold text-ink">Caller:</span> Kal subah ka appointment mil sakta hai?
        </p>
        <p className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-violet px-4 py-3 text-[14px] leading-[1.5] text-white">
          <span className="font-semibold">AI agent:</span> Ji bilkul — 10:30 AM available hai. Main aapke naam se book kar deti hoon.
        </p>
      </div>

      <div className="relative mt-8 flex items-center justify-between border-t border-line pt-6">
        <span className="text-[13px] text-ink-mute">Speaking</span>
        <span key={lang} className="rounded-full bg-lilac px-3 py-1 text-[13px] font-semibold text-violet">{LANGS[lang]}</span>
      </div>
    </div>
  );
}
