"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LogoMark } from "../Logo";

const INNER = [
  { icon: "forum", label: "WhatsApp AI" },
  { icon: "graphic_eq", label: "Voice agent" },
  { icon: "language", label: "Website" },
];
const OUTER = [
  { icon: "database", label: "CRM" },
  { icon: "event_available", label: "Calendar" },
  { icon: "forward_to_inbox", label: "Follow-ups" },
  { icon: "monitoring", label: "Analytics" },
  { icon: "payments", label: "Payments" },
];

function Ring({ items, radius, duration, reverse = false }: { items: typeof INNER; radius: number; duration: number; reverse?: boolean }) {
  const reduced = useReducedMotion();
  const spin = reduced ? {} : { rotate: reverse ? -360 : 360 };
  const counter = reduced ? {} : { rotate: reverse ? 360 : -360 };
  const t = { duration, repeat: Infinity, ease: "linear" as const };
  return (
    <motion.div className="absolute left-1/2 top-1/2" style={{ width: radius * 2, height: radius * 2, marginLeft: -radius, marginTop: -radius }} animate={spin} transition={t}>
      <div className="absolute inset-0 rounded-full border border-violet/25" />
      {items.map((it, i) => {
        const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        return (
          <div key={it.label} className="absolute" style={{ left: radius + Math.cos(a) * radius, top: radius + Math.sin(a) * radius }}>
            <motion.div className="-translate-x-1/2 -translate-y-1/2" animate={counter} transition={t}>
              <motion.span
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white bg-white/90 px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_10px_30px_-12px_rgba(58,34,199,0.45)]"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 18, delay: 0.2 + i * 0.1 }}
              >
                <span className="material-symbols-outlined text-[16px] text-violet" aria-hidden="true">{it.icon}</span>
                {it.label}
              </motion.span>
            </motion.div>
          </div>
        );
      })}
    </motion.div>
  );
}

// "One brain, every channel" hub: Vaslix core with orbiting capabilities.
export default function OrbitHub() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[560px] scale-[0.6] sm:scale-90 lg:scale-100" role="img" aria-label="Vaslix connects WhatsApp, voice, website, CRM, calendar, follow-ups, analytics and payments">
      <div aria-hidden="true" className="absolute inset-[18%] rounded-full bg-[conic-gradient(from_0deg,rgba(91,61,245,0.22),rgba(167,139,250,0.05),rgba(91,61,245,0.22))] blur-2xl" />
      <Ring items={INNER} radius={130} duration={40} />
      <Ring items={OUTER} radius={250} duration={70} reverse />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="absolute inset-[-14px] animate-ping rounded-[34px] border border-violet/30" style={{ animationDuration: "2.8s" }} />
        <LogoMark size={96} className="relative drop-shadow-[0_24px_40px_rgba(58,34,199,0.5)]" />
      </div>
    </div>
  );
}
