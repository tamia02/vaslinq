"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Counts the leading number of `value` (e.g. "9+", "24/7") up from zero when
// it scrolls into view; the rest of the string is kept as a suffix.
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px 10% 0px" });
  const reduced = useReducedMotion();
  const m = value.match(/^(\d+)(.*)$/);
  const target = m ? parseInt(m[1], 10) : 0;
  const suffix = m ? m[2] : value;
  const [n, setN] = useState(m ? target : 0);

  useEffect(() => {
    if (!m || reduced) return;
    setN(0);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!m || reduced || !inView) return;
    const c = animate(0, target, { duration: 1.4, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {m ? n : ""}
      {suffix}
    </span>
  );
}
