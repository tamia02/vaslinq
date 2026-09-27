"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { introDelay } from "./motion/Preloader";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li";
  /** Above-the-fold: play on mount, after the intro curtain lifts. */
  hero?: boolean;
};

// Blur-fade entrance: rises a little, sharpens into focus, plays once.
export default function FadeIn({ children, className = "", delay = 0, as = "div", hero = false }: Props) {
  const reduced = useReducedMotion();
  const [wait, setWait] = useState(0);
  useEffect(() => {
    if (hero) setWait(introDelay());
  }, [hero]);
  const Tag = as === "li" ? motion.li : motion.div;

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const target = { opacity: 1, y: 0 };
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 56 }}
      {...(hero ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 0.1 } })}
      transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: wait + delay / 1000 }}
    >
      {children}
    </Tag>
  );
}
