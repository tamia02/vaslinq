"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Remounts on every navigation. The first render is covered by the intro
// preloader; later route changes get a staggered column wipe (matching the
// intro curtain) and the new page rises into place.
let firstRender = true;
const COLUMNS = 5;
const WIPE = [0.76, 0, 0.24, 1] as const;

export default function Template({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  // Module state must only advance in the browser — on the server it would
  // persist across requests and break hydration for every later visitor.
  const isClient = typeof window !== "undefined";
  const animateIn = isClient && !firstRender && !reduced;
  if (isClient) firstRender = false;

  return (
    <>
      {animateIn && (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[150] flex">
          {Array.from({ length: COLUMNS }).map((_, i) => (
            <motion.div
              key={i}
              className="relative h-full flex-1 bg-violet"
              initial={{ y: "0%" }}
              animate={{ y: "-100%" }}
              transition={{ duration: 0.7, ease: WIPE, delay: 0.05 + i * 0.045 }}
            >
              <motion.div
                className="absolute inset-0 bg-pearl"
                initial={{ y: "0%" }}
                animate={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: WIPE, delay: i * 0.045 }}
              />
            </motion.div>
          ))}
        </div>
      )}
      <motion.div
        initial={animateIn ? { opacity: 0, y: 60 } : false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.5, 1], delay: animateIn ? 0.3 : 0 }}
      >
        {children}
      </motion.div>
    </>
  );
}
