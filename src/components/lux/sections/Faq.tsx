"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export type QA = { q: string; a: string };

export default function Faq({ items }: { items: QA[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <li key={it.q}>
            <h3>
              <button
                type="button"
                className="flex min-h-[72px] w-full items-center justify-between gap-6 py-5 text-left text-[18px] font-semibold tracking-[-0.01em] transition-colors hover:text-violet"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                {it.q}
                <motion.span
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line"
                  animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#5b3df5" : "#ffffff", color: isOpen ? "#ffffff" : "#110e24" }}
                  transition={{ type: "spring", stiffness: 400, damping: 26 }}
                  aria-hidden="true"
                >
                  <span className="material-symbols-outlined text-[20px]">add</span>
                </motion.span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-3xl pb-6 leading-[1.7] text-ink-mute">{it.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
