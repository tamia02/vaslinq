"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { introDelay } from "./Preloader";

type Props = {
  lines: ReactNode[];
  as?: "h1" | "h2";
  className?: string;
  /** Extra delay in seconds. Hero headings also wait for the intro curtain. */
  delay?: number;
  hero?: boolean;
};

// Masked line reveal: each line slides up from behind its own clip.
export default function RevealLines({ lines, as = "h2", className = "", delay = 0, hero = false }: Props) {
  const reduced = useReducedMotion();
  const [wait, setWait] = useState(0);
  useEffect(() => {
    if (hero) setWait(introDelay());
  }, [hero]);
  const Tag = as;

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          {reduced ? (
            <span className="block">{line}</span>
          ) : (
            <motion.span
              className="block"
              initial={{ y: "105%", rotate: 2 }}
              {...(hero
                ? { animate: { y: "0%", rotate: 0 } }
                : { whileInView: { y: "0%", rotate: 0 }, viewport: { once: true, margin: "0px 0px -40px 0px" } })}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: wait + delay + i * 0.09 }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </Tag>
  );
}
