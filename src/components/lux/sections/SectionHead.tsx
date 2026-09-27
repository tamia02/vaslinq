import type { ReactNode } from "react";
import RevealLines from "../motion/RevealLines";
import FadeIn from "../FadeIn";

export default function SectionHead({
  eyebrow,
  lines,
  sub,
  className = "",
}: {
  eyebrow: string;
  lines: ReactNode[];
  sub?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <FadeIn>
        <p className="lux-eyebrow">{eyebrow}</p>
      </FadeIn>
      <RevealLines className="display mt-4 text-[clamp(36px,4.6vw,60px)] font-bold" lines={lines} />
      {sub && (
        <FadeIn delay={120}>
          <p className="mt-5 max-w-2xl text-[18px] leading-[1.65] text-ink-soft">{sub}</p>
        </FadeIn>
      )}
    </div>
  );
}
