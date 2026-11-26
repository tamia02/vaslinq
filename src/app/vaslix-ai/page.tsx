import { Metadata } from "next";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vaslix AI: on hold",
  description:
    "Vaslix AI, a self-serve version of our AI agents, is on hold. We still build custom AI agents and automations for clients.",
  alternates: { canonical: `${SITE_URL}/vaslix-ai` },
  robots: { index: false, follow: true },
};

const PILLARS = [
  { icon: "smart_toy", title: "AI agents for your business", desc: "WhatsApp, voice and website agents, built and run by us for your team." },
  { icon: "account_tree", title: "Automated workflows", desc: "Leads, CRM, calendar and follow-ups connected without manual work." },
  { icon: "monitoring", title: "Clear results", desc: "A view of conversations, bookings and what your automations did." },
];

export default function VaslixAiPage() {
  return (
    <>
      <PageHero
        eyebrow="Vaslix AI · on hold"
        shape="orb"
        sceneLabel="Liquid glass orb"
        lines={["Vaslix AI.", <>Built for you, <span key="a" className="serif-accent">by us.</span></>]}
        sub="A self-serve version of our AI agents is on hold for now. We still build custom AI agents and automations for clients."
      >
        <a href="/ai-agents" className="lux-btn lux-btn-primary">
          See our AI agents
          <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
        </a>
        <a href="/contact" className="lux-btn lux-btn-ghost">
          Talk to the team
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <FadeIn>
          <img src="/brand/vaslix-ai-logo.svg" alt="Vaslix AI" className="mb-8 h-10 w-auto" />
        </FadeIn>
        <SectionHead eyebrow="What we do" lines={["Everything we build,", <><span key="a" className="serif-accent">for your business.</span></>]} />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <FadeIn as="li" key={p.title} delay={i * 80} className="h-full">
              <TiltCard max={5} className="lux-card group h-full p-8">
                <span className="lux-icon">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{p.icon}</span>
                </span>
                <h3 className="mt-8 text-[22px] font-bold tracking-[-0.02em]">{p.title}</h3>
                <p className="mt-2 leading-[1.65] text-ink-mute">{p.desc}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
        <FadeIn className="mt-10">
          <p className="text-center text-[15px] text-ink-mute">
            Need something built? <a href="/contact" className="font-semibold text-violet">Talk to the Vaslix team</a>.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
