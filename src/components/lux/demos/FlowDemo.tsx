"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

const NODES = [
  { icon: "person_add", label: "New lead", sub: "Ad · Website · WhatsApp" },
  { icon: "psychology", label: "AI qualifies", sub: "Budget, need, timeline" },
  { icon: "database", label: "CRM updated", sub: "Contact + deal created" },
  { icon: "forward_to_inbox", label: "Follow-ups", sub: "Email · WhatsApp · SMS" },
  { icon: "event_available", label: "Call booked", sub: "Synced to your calendar" },
];

// Animated pipeline: nodes light up in sequence while a pulse travels the wire.
export default function FlowDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();
  const on = inView || !!reduced;

  return (
    <div ref={ref} className="lux-card relative overflow-hidden !rounded-[32px] p-6 sm:p-10">
      <div aria-hidden="true" className="lux-grid opacity-60" />
      <ol className="relative grid gap-4 md:grid-cols-5 md:gap-3">
        {/* connecting wire */}
        <div aria-hidden="true" className="absolute left-[10%] right-[10%] top-[34px] hidden h-[2px] bg-line md:block">
          <motion.div
            className="h-full origin-left bg-gradient-to-r from-violet-deep via-violet to-[#a78bfa]"
            initial={{ scaleX: 0 }}
            animate={on ? { scaleX: 1 } : {}}
            transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
          />
          {!reduced && on && (
            <motion.span
              className="absolute -top-[5px] h-3 w-3 rounded-full bg-violet shadow-[0_0_16px_4px_rgba(91,61,245,0.5)]"
              initial={{ left: "0%" }}
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
            />
          )}
        </div>
        {NODES.map((n, i) => (
          <motion.li
            key={n.label}
            className="relative flex items-center gap-4 md:flex-col md:text-center"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={on ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 + i * 0.42 }}
          >
            <motion.span
              className="lux-icon relative z-10 !h-[68px] !w-[68px] !rounded-[22px]"
              animate={on && !reduced ? { boxShadow: ["0 10px 24px -10px rgba(91,61,245,0.45)", "0 0 0 8px rgba(91,61,245,0.12)", "0 10px 24px -10px rgba(91,61,245,0.45)"] } : {}}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.42 }}
            >
              <span className="material-symbols-outlined text-[30px]" aria-hidden="true">{n.icon}</span>
            </motion.span>
            <div>
              <div className="text-[16px] font-bold tracking-[-0.01em] md:mt-4">{n.label}</div>
              <div className="text-[13px] text-ink-mute">{n.sub}</div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
