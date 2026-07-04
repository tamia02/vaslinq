"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  max?: number;
};

export default function TiltCard({ children, className = "", max = 7 }: Props) {
  const reduced = useReducedMotion();

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const go = useMotionValue(0);

  const springCfg = { stiffness: 200, damping: 18, mass: 0.6 };
  const srx = useSpring(rx, springCfg);
  const sry = useSpring(ry, springCfg);
  const sgo = useSpring(go, { stiffness: 160, damping: 24 });

  const glare = useMotionTemplate`radial-gradient(440px circle at ${gx}% ${gy}%, rgba(255,255,255,0.14), transparent 55%)`;

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    rx.set(-py * max);
    ry.set(px * max);
    gx.set((px + 0.5) * 100);
    gy.set((py + 0.5) * 100);
    go.set(1);
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    go.set(0);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      whileHover={reduced ? undefined : { scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      style={
        reduced
          ? undefined
          : {
              rotateX: srx,
              rotateY: sry,
              transformPerspective: 950,
              transformStyle: "preserve-3d",
            }
      }
    >
      {children}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
        style={{ background: glare, opacity: sgo }}
      />
    </motion.div>
  );
}
