"use client";

import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// A real conversation handled by one of our WhatsApp admission agents.
const MESSAGES: { from: "bot" | "user"; text: string }[] = [
  { from: "bot", text: "Hi! I'm Priya, Senior Counselor at Holyfaith Academy. Which class are we looking at for your little one?" },
  { from: "user", text: "like class 4 can you tell me" },
  { from: "bot", text: "That's a wonderful stage! What's your biggest priority — academics, hostel, or overall growth?" },
  { from: "user", text: "overall development but thoda fees structure or yhn dur rhti hun schl se" },
  { from: "bot", text: "For Class IV, the hostel admission fee is ₹17,000 with monthly fees at ₹8,500. If distance is a concern, our hostel offers a supportive, home-like environment." },
  { from: "user", text: "mujhe hostel costly lag rha haii" },
  { from: "bot", text: "Main samajh sakti hoon! ICSE board, AC hostel, coaching aur meals — sab included hai. Zyada parents kehte hain ki yeh asal mein paise bachaata hai." },
];

export default function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const scroller = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const reduced = useReducedMotion();
  const [shown, setShown] = useState(reduced ? MESSAGES.length : 0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView || reduced || shown >= MESSAGES.length) return;
    const next = MESSAGES[shown];
    const isBot = next.from === "bot";
    setTyping(isBot);
    const t = setTimeout(() => {
      setTyping(false);
      setShown((s) => s + 1);
    }, isBot ? 1400 : 900);
    return () => clearTimeout(t);
  }, [inView, shown, reduced]);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight, behavior: "smooth" });
  }, [shown, typing]);

  return (
    <div ref={ref} className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[36px] border-[10px] border-ink bg-[#efeae2] shadow-[0_50px_100px_-40px_rgba(58,34,199,0.55)]">
      <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20 text-[14px] font-bold">P</span>
        <div className="flex-1">
          <div className="text-[14px] font-semibold">Priya · Senior Counselor</div>
          <div className="text-[11px] text-white/75">{typing ? "typing…" : "online"}</div>
        </div>
        <span className="rounded-full bg-white/15 px-2 py-0.5 text-[10px] font-bold tracking-wider">AI</span>
      </div>
      <div ref={scroller} className="flex h-[440px] flex-col gap-2 overflow-y-auto px-3 py-4" data-lenis-prevent>
        <AnimatePresence initial={false}>
          {MESSAGES.slice(0, shown).map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className={`max-w-[82%] rounded-2xl px-3.5 py-2 text-[13.5px] leading-[1.45] shadow-sm ${
                m.from === "bot" ? "self-start rounded-tl-sm bg-white text-[#111]" : "self-end rounded-tr-sm bg-[#d9fdd3] text-[#111]"
              }`}
            >
              {m.text}
            </motion.div>
          ))}
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="flex gap-1 self-start rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
              aria-label="Agent is typing"
            >
              {[0, 1, 2].map((d) => (
                <span key={d} className="typing-dot h-2 w-2 rounded-full bg-[#8a8a8a]" />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
