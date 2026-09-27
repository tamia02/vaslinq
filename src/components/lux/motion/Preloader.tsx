"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

const EXPO = [0.16, 1, 0.3, 1] as const;
const WIPE = [0.76, 0, 0.24, 1] as const;
const COLUMNS = 6;

// Syntax-tokenised "build script" the intro types out. [text, className]
const CODE: [string, string][][] = [
  [["import", "text-violet"], [" { agents, automate } ", "text-ink"], ["from", "text-violet"], [' "@vaslix/core"', "text-[#0f9d6b]"], [";", "text-ink-mute"]],
  [],
  [["const", "text-violet"], [" business", "text-ink"], [" = ", "text-ink-mute"], ["await", "text-violet"], [" build", "text-[#2f5bff]"], ["({", "text-ink-mute"]],
  [["  software", "text-ink"], [": ", "text-ink-mute"], ['"custom"', "text-[#0f9d6b]"], [",", "text-ink-mute"]],
  [["  agents", "text-ink"], [": ", "text-ink-mute"], ['["whatsapp", "voice"]', "text-[#0f9d6b]"], [",", "text-ink-mute"]],
  [["  runs", "text-ink"], [": ", "text-ink-mute"], ['"while-you-sleep"', "text-[#0f9d6b]"], [",", "text-ink-mute"]],
  [["});", "text-ink-mute"]],
  [],
  [["business", "text-ink"], [".", "text-ink-mute"], ["launch", "text-[#2f5bff]"], ["();", "text-ink-mute"]],
];
const TOTAL_CHARS = CODE.reduce((n, line) => n + line.reduce((m, [t]) => m + t.length, 0) + 1, 0);

const LOG = ["design system", "ai agents online", "automations wired", "deployed"];

type Phase = "code" | "brand" | "done";

// First-visit intro. Pearl stage → glass editor types a build script while a
// build log ticks to 100% → the editor collapses into the Vaslix tile, the V
// draws itself → the stage splits into columns that lift away. Once per
// session (see the inline <head> script in layout.tsx); click to skip.
export default function Preloader() {
  const reduced = useReducedMotion();
  const [show, setShow] = useState(true);
  const [phase, setPhase] = useState<Phase>("code");
  const [chars, setChars] = useState(0);
  const [pct, setPct] = useState(0);

  const finish = useCallback(() => {
    try { sessionStorage.setItem("vx-intro", "1"); } catch {}
    document.documentElement.dataset.intro = "seen";
    document.documentElement.style.overflow = "";
    setShow(false);
  }, []);

  useEffect(() => {
    if (document.documentElement.dataset.intro === "seen") {
      setShow(false);
      return;
    }
    document.documentElement.style.overflow = "hidden";
    if (reduced) {
      const t = setTimeout(finish, 500);
      return () => clearTimeout(t);
    }

    const start = performance.now();
    const TYPE_START = 250;
    const TYPE_MS = 1000;
    let raf = 0;
    const tick = (now: number) => {
      const t = now - start;
      const typed = Math.min(1, Math.max(0, (t - TYPE_START) / TYPE_MS));
      setChars(Math.round(typed * TOTAL_CHARS));
      const p = Math.min(1, Math.max(0, (t - TYPE_START) / (TYPE_MS + 250)));
      setPct(Math.round((1 - Math.pow(1 - p, 2.2)) * 100));
      if (t < TYPE_START + TYPE_MS + 300) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const toBrand = setTimeout(() => setPhase("brand"), 1550);
    const done = setTimeout(finish, 2650);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(toBrand);
      clearTimeout(done);
      document.documentElement.style.overflow = "";
    };
  }, [reduced, finish]);

  // Render typed code up to `chars`.
  let budget = chars;
  const lines = CODE.map((line, li) => {
    const parts = line.map(([text, cls], ti) => {
      const take = Math.max(0, Math.min(text.length, budget));
      budget -= text.length;
      return take > 0 ? <span key={ti} className={cls}>{text.slice(0, take)}</span> : null;
    });
    budget -= 1;
    return { key: li, parts, active: budget < 0 && budget >= -1 - line.reduce((m, [t]) => m + t.length, 0) };
  });
  const caretLine = Math.max(0, lines.findIndex((l) => l.active));

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="vx-preloader"
          className="vx-preloader fixed inset-0 z-[200] cursor-pointer"
          aria-hidden="true"
          onClick={finish}
          exit={{ pointerEvents: "none" }}
        >
          {/* Split curtain: violet columns trail the pearl columns */}
          <div className="absolute inset-0 flex">
            {Array.from({ length: COLUMNS }).map((_, i) => (
              <motion.div
                key={`v${i}`}
                className="h-full flex-1 bg-violet"
                exit={{ y: "-100%" }}
                transition={{ duration: 0.85, ease: WIPE, delay: 0.12 + i * 0.05 }}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex">
            {Array.from({ length: COLUMNS }).map((_, i) => (
              <motion.div
                key={`p${i}`}
                className="h-full flex-1 bg-pearl"
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: WIPE, delay: i * 0.05 }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-0 grid place-items-center overflow-hidden"
            exit={{ opacity: 0, y: -60, filter: "blur(10px)" }}
            transition={{ duration: 0.5, ease: EXPO }}
          >
            <div className="lux-halo" />
            <div className="lux-grid" />

            <LayoutGroup>
              <AnimatePresence mode="popLayout">
                {phase === "code" ? (
                  <motion.div
                    key="editor"
                    layoutId="vx-shell"
                    className="relative w-[min(92vw,700px)] overflow-hidden border border-white bg-white/75 shadow-[0_40px_100px_-40px_rgba(58,34,199,0.45),0_0_0_1px_rgba(17,14,36,0.06)] backdrop-blur-xl"
                    style={{ borderRadius: 24 }}
                    initial={{ opacity: 0, scale: 0.92, y: 24, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: EXPO }}
                  >
                    <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                      <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                      <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                      <span className="h-3 w-3 rounded-full bg-[#28c840]" />
                      <span className="ml-3 font-mono text-[12px] text-ink-mute">launch.ts — vaslix</span>
                    </div>
                    <pre className="min-h-[260px] px-6 py-6 font-mono text-[13px] leading-[1.8] sm:text-[15.5px]">
                      {lines.map((l, i) => (
                        <div key={l.key} className="flex">
                          <span className="mr-5 w-4 select-none text-right text-ink-mute/50">{i + 1}</span>
                          <span className="whitespace-pre">
                            {l.parts}
                            {i === caretLine && <span className="ml-px inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse bg-violet" />}
                          </span>
                        </div>
                      ))}
                    </pre>
                    <div className="border-t border-line bg-pearl/70 px-5 py-3">
                      <div className="flex items-center justify-between font-mono text-[12px]">
                        <span className="flex flex-wrap gap-x-4 gap-y-1 text-ink-mute">
                          {LOG.map((s, i) => {
                            const ok = pct >= (i + 1) * 24;
                            return (
                              <span key={s} className={ok ? "text-ink" : ""}>
                                <span className={ok ? "text-[#0f9d6b]" : ""}>{ok ? "✓" : "○"}</span> {s}
                              </span>
                            );
                          })}
                        </span>
                        <span className="tabular-nums font-semibold text-violet">{pct}%</span>
                      </div>
                      <div className="mt-2.5 h-[3px] overflow-hidden rounded-full bg-line">
                        <div className="h-full rounded-full bg-gradient-to-r from-violet-deep via-violet to-[#a78bfa]" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="brand" className="relative flex flex-col items-center">
                    <motion.div
                      layoutId="vx-shell"
                      className="grid h-[112px] w-[112px] place-items-center bg-gradient-to-br from-[#1d1640] to-[#0c0a1c] shadow-[0_30px_60px_-20px_rgba(58,34,199,0.6)]"
                      style={{ borderRadius: 32 }}
                      transition={{ duration: 0.7, ease: EXPO }}
                    >
                      <svg width="112" height="112" viewBox="0 0 48 48" fill="none">
                        <defs>
                          <linearGradient id="pl-stroke" x1="10" y1="12" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#ffffff" />
                            <stop offset="1" stopColor="#b9a8ff" />
                          </linearGradient>
                        </defs>
                        <motion.path
                          d="M13 14.5 L24 34 L35 14.5"
                          stroke="url(#pl-stroke)"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
                        />
                        <motion.circle
                          cx="35" cy="14.5" r="4.2" fill="#7c5cff"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 420, damping: 12, delay: 0.85 }}
                          style={{ transformOrigin: "35px 14.5px" }}
                        />
                        <motion.circle
                          cx="35" cy="14.5" r="1.6" fill="#fff"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.95, duration: 0.2 }}
                          style={{ transformOrigin: "35px 14.5px" }}
                        />
                      </svg>
                    </motion.div>
                    {/* soft pulse ring as the node lands */}
                    <motion.span
                      className="absolute top-0 h-[112px] w-[112px] rounded-[32px] border-2 border-violet"
                      initial={{ opacity: 0.6, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.7 }}
                      transition={{ duration: 0.9, ease: EXPO, delay: 0.9 }}
                    />
                    <div className="mt-8 flex overflow-hidden text-[46px] font-extrabold tracking-[-0.045em] text-ink">
                      {"Vaslix".split("").map((l, i) => (
                        <motion.span
                          key={i}
                          initial={{ y: "110%", filter: "blur(6px)" }}
                          animate={{ y: "0%", filter: "blur(0px)" }}
                          transition={{ duration: 0.7, ease: EXPO, delay: 0.4 + i * 0.045 }}
                        >
                          {l}
                        </motion.span>
                      ))}
                    </div>
                    <motion.p
                      className="mt-1 font-serif text-[20px] italic text-violet"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.75, duration: 0.6, ease: EXPO }}
                    >
                      Software &amp; AI that runs while you sleep.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </LayoutGroup>

            <div className="absolute inset-x-6 bottom-7 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute sm:inset-x-10">
              <span>Vaslix · Build {new Date().getFullYear()}</span>
              <span>Click to skip</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Seconds the hero should wait so its entrance plays as the curtain lifts.
export function introDelay(): number {
  if (typeof document === "undefined") return 0;
  return document.documentElement.dataset.intro === "seen" ? 0 : 2.6;
}
