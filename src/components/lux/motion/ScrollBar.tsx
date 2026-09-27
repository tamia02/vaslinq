"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-violet-deep via-violet to-[#a78bfa]"
      style={{ scaleX }}
    />
  );
}
