"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/* ---------- Scroll progress bar (fixed, top) ---------- */

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[70] origin-left bg-gradient-to-r from-primary via-[#9a7fe8] to-tertiary"
      style={{ scaleX, boxShadow: "0 0 12px rgba(207,188,255,0.55)" }}
    />
  );
}

/* ---------- Magnetic hover (buttons attract the cursor) ---------- */

export function Magnetic({
  children,
  className = "",
  strength = 0.3,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 180, damping: 14, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 180, damping: 14, mass: 0.4 });

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={className}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduced ? undefined : { x: sx, y: sy }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Scroll-linked parallax drift ---------- */

export function ParallaxFloat({
  children,
  className = "",
  speed = 1,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60 * speed, -60 * speed]);

  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/* ---------- Hero entrance: staggered 3D rise ---------- */

const heroContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const heroItem: Variants = {
  hidden: { opacity: 0, y: 46, rotateX: 22, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 16, mass: 0.9 },
  },
};

export function HeroIntro({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={heroContainer}
      initial="hidden"
      animate="show"
      style={{ transformPerspective: 1100 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroItem({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div variants={heroItem} className={className} style={{ transformPerspective: 1000 }}>
      {children}
    </motion.div>
  );
}
