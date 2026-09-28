"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Sticky table of contents; highlights the section currently being read.
export default function ArticleToc({ items }: { items: { id: string; heading: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    items.forEach((it) => {
      const el = document.getElementById(it.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="sticky top-28">
      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-mute">On this page</p>
      <ul className="relative mt-4 border-l border-line">
        {items.map((it) => {
          const on = it.id === active;
          return (
            <li key={it.id} className="relative">
              {on && <motion.span layoutId="toc-bar" className="absolute -left-px top-0 h-full w-[2px] bg-violet" transition={{ type: "spring", stiffness: 400, damping: 35 }} />}
              <a href={`#${it.id}`} className={`block py-2 pl-4 text-[14px] leading-snug transition-colors ${on ? "font-semibold text-violet" : "text-ink-mute hover:text-ink"}`}>
                {it.heading}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
