import type { ReactNode } from "react";
import RevealLines from "../motion/RevealLines";
import FadeIn from "../FadeIn";
import Stage3D from "../Stage3D";
import type { Shape } from "../HeroScene";

type Props = {
  eyebrow: string;
  lines: ReactNode[];
  sub: ReactNode;
  shape?: Shape;
  sceneLabel?: string;
  children?: ReactNode;
};

const TRUST = ["Custom-built", "Live in weeks", "India & worldwide"];

// Inner-page hero: inset tinted panel, masked headline, white CTA card with a
// trust row, and an optional real-time 3D object.
export default function PageHero({ eyebrow, lines, sub, shape, sceneLabel = "Decorative 3D glass object", children }: Props) {
  return (
    <section className="lux-hero-panel pt-28 pb-14 sm:pt-32 lg:pb-20">
      <div aria-hidden="true" className="lux-halo -z-10" />
      <div aria-hidden="true" className="lux-grid -z-10" />
      <div className={`mx-auto grid max-w-6xl items-center gap-8 px-6 sm:px-8 ${shape ? "lg:grid-cols-12" : ""}`}>
        <div className={shape ? "lg:col-span-7" : "max-w-4xl"}>
          <FadeIn hero>
            <span className="lux-pill lux-glass !py-1.5 !pl-1.5">
              <span className="lux-pill-dot">Vaslix</span>
              {eyebrow}
            </span>
          </FadeIn>
          <RevealLines hero as="h1" className="display mt-6 text-[clamp(42px,6vw,82px)] font-bold" lines={lines} delay={0.05} />
          <FadeIn hero delay={250}>
            <p className="mt-7 max-w-xl text-[18px] leading-[1.65] text-ink-soft">{sub}</p>
          </FadeIn>
          {children && (
            <FadeIn hero delay={350} className="mt-9">
              <div className="inline-flex max-w-full flex-col gap-4 rounded-[24px] border border-white bg-white/85 p-3 pr-5 shadow-[0_20px_50px_-30px_rgba(58,34,199,0.45)] sm:flex-row sm:items-center">
                {children}
                <ul className="flex flex-wrap gap-x-4 gap-y-1 px-2 text-[13px] font-medium text-ink-soft sm:px-0">
                  {TRUST.map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-violet" aria-hidden="true">verified</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          )}
        </div>
        {shape && (
          <div className="relative order-first -mb-2 h-[240px] sm:h-[360px] lg:order-none lg:col-span-5 lg:mb-0 lg:h-[500px]">
            <Stage3D scene="hero" shape={shape} className="absolute inset-0 lg:-right-12" label={sceneLabel} />
          </div>
        )}
      </div>
    </section>
  );
}
