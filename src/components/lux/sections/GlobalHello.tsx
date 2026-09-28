"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { GREETINGS } from "../countries";

// Hero pill: a greeting that cycles through languages, each with its flag.
export default function GlobalHello() {
  const reduced = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % GREETINGS.length), 2200);
    return () => clearInterval(t);
  }, [reduced]);

  const g = GREETINGS[i];

  return (
    <Link href="#worldwide" className="lux-pill lux-glass group !py-1.5 !pl-1.5" aria-label="We work with businesses worldwide">
      <span className="relative flex h-7 items-center overflow-hidden rounded-full bg-lilac pl-1 pr-3">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={g.code + g.word}
            className="flex items-center gap-2"
            initial={{ y: 14, opacity: 0, filter: "blur(4px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: -14, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            <img src={`/flags/${g.code}.svg`} alt="" width={22} height={16} className="h-4 w-[22px] rounded-[3px] object-cover shadow-[0_0_0_1px_rgba(17,14,36,0.08)]" />
            <span lang={g.lang} dir={g.dir} className="font-intl text-[13px] font-bold text-violet">
              {g.word}
            </span>
          </motion.span>
        </AnimatePresence>
      </span>
      <span>We build for teams worldwide</span>
      <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-0.5" aria-hidden="true">
        arrow_forward
      </span>
    </Link>
  );
}
