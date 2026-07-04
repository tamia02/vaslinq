"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function Reveal({ children, className = "", delay = 0 }: Props) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 56, rotateX: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 17,
        mass: 0.9,
        delay: delay / 1000,
      }}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  );
}
