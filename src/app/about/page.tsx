import { Metadata } from "next";
import KineticBand from "@/components/lux/motion/KineticBand";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import { LogoMark } from "@/components/lux/Logo";

export const metadata: Metadata = {
  title: "About — AI & Software Studio in Lucknow, Uttar Pradesh",
  description:
    "Vaslix is a Lucknow-based AI agency and software studio founded by Tasmiya Siddiqui, building AI and automation for businesses across Uttar Pradesh and India.",
  alternates: { canonical: "https://www.vaslix.com/about" },
};

const VALUES = [
  { icon: "tune", title: "Custom logic, always", desc: "Every system is tailored to your unique business model — no off-the-shelf templates." },
  { icon: "diamond", title: "Premium visual identity", desc: "Interfaces and 3D web experiences that make your brand stand out in a crowded market." },
  { icon: "cable", title: "End-to-end integration", desc: "From lead capture to CRM sync and custom software, we connect every dot." },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tasmiya Siddiqui",
    jobTitle: "Founder & AI Strategist",
    worksFor: { "@type": "Organization", name: "Vaslix" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="About Vaslix"
        shape="orb"
        sceneLabel="Liquid glass orb"
        lines={["Building the future", <>of <span key="a" className="serif-accent">business operations.</span></>]}
        sub="Vaslix is a custom software and AI automation studio creating intelligent business infrastructure for startups, luxury brands and B2B enterprises."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        <FadeIn>
          <div className="lux-card relative overflow-hidden !rounded-[36px] p-10 sm:p-16">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-violet/10 blur-3xl" />
            <p className="lux-eyebrow">Our mission</p>
            <p className="display relative mt-6 max-w-4xl text-[clamp(28px,3.4vw,46px)] font-semibold leading-[1.15]">
              To eliminate manual busywork and let businesses scale by combining{" "}
              <span className="serif-accent">custom software, human-like AI</span> and interfaces people love to use.
            </p>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:pb-32">
        <SectionHead
          eyebrow="Why Vaslix"
          lines={["We don't just build", <>bots or <span key="a" className="serif-accent">websites.</span></>]}
          sub="We build complete systems designed to increase revenue and streamline your day-to-day operations."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {VALUES.map((v, i) => (
            <FadeIn as="li" key={v.title} delay={i * 80} className="h-full">
              <TiltCard max={5} className="lux-card group h-full p-8 sm:p-9">
                <span className="lux-icon">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{v.icon}</span>
                </span>
                <h3 className="mt-8 text-[22px] font-bold tracking-[-0.02em]">{v.title}</h3>
                <p className="mt-2 leading-[1.65] text-ink-mute">{v.desc}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="lux-band relative grid aspect-[4/5] place-items-center overflow-hidden !rounded-[36px]">
              <div className="relative text-center">
                <LogoMark size={120} className="mx-auto drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]" />
                <p className="mt-8 font-serif text-[34px] italic text-white">Tasmiya Siddiqui</p>
                <p className="mt-1 text-[14px] font-medium uppercase tracking-[0.2em] text-white/75">Founder · Vaslix</p>
              </div>
            </div>
          </FadeIn>
          <div className="lg:col-span-7">
            <SectionHead eyebrow="Leadership" lines={["Tasmiya Siddiqui", <span key="a" className="serif-accent">Founder & AI Strategist</span>]} />
            <FadeIn delay={120}>
              <p className="mt-6 text-[18px] leading-[1.7] text-ink-soft">
                With a background in building complex automation pipelines, Tasmiya founded Vaslix to bridge the gap between
                high-level AI capabilities and real-world business operations. Her focus is on architecting systems that deliver
                measurable revenue impact rather than just technical novelty.
              </p>
              <p className="mt-5 text-[18px] leading-[1.7] text-ink-soft">
                She leads the studio&apos;s strategy — from custom software and SaaS builds to AI agents — ensuring every client
                receives a bespoke solution tailored to their industry&apos;s real bottlenecks.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <KineticBand words={["Lucknow", "Uttar Pradesh", "India", "Worldwide"]} />

      <CtaBand title={<>Let&apos;s build something <span className="font-serif font-normal italic">remarkable.</span></>} />
    </>
  );
}
