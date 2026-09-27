import type { ReactNode } from "react";
import FadeIn from "../FadeIn";
import Stage3D from "../Stage3D";
import Magnetic from "../motion/Magnetic";
import { CALENDLY, WHATSAPP } from "../links";

export default function CtaBand({
  title = <>Ready to put your growth on <span className="font-serif font-normal italic">autopilot?</span></>,
  sub = "Let's map your custom software and automation roadmap in a free discovery call.",
}: { title?: ReactNode; sub?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8 lg:py-32">
      <FadeIn>
        <div className="lux-band grid items-center gap-4 p-8 sm:p-14 lg:grid-cols-2">
          <div aria-hidden="true" className="lux-grain opacity-40" />
          <div className="relative">
            <h2 className="display text-[clamp(34px,4.4vw,56px)] font-bold">{title}</h2>
            <p className="mt-5 max-w-md text-[18px] leading-[1.6] text-white/85">{sub}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-light">
                  Book discovery call
                  <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
                </a>
              </Magnetic>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-outline-light">
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <Stage3D scene="orbs" className="relative h-[280px] sm:h-[360px]" label="Floating iridescent spheres" />
        </div>
      </FadeIn>
    </section>
  );
}
