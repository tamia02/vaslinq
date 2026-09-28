import { Metadata } from "next";
import PageHero from "@/components/lux/sections/PageHero";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";

export const metadata: Metadata = {
  title: "Insights — AI, Automation & Software",
  description: "Guides on AI chatbots, voice agents, automation and custom software — costs, comparisons and implementation timelines.",
  alternates: { canonical: "https://www.vaslix.com/insights" },
};

const ARTICLES = [
  {
    title: "How much does an AI WhatsApp chatbot cost?",
    category: "Pricing & ROI",
    excerpt: "A complete breakdown of setup costs, monthly maintenance and the ROI you can expect from automating lead qualification.",
    icon: "payments",
  },
  {
    title: "AI voice agent vs human receptionist",
    category: "Comparison",
    excerpt: "The operational differences, language capabilities and cost efficiency of AI voice agents versus traditional front-desk staffing.",
    icon: "record_voice_over",
  },
  {
    title: "How long does automation setup take?",
    category: "Implementation",
    excerpt: "From discovery call to deployment: the timeline for building a custom CRM sync and AI lead-capture system.",
    icon: "schedule",
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        lines={["Notes on AI,", <>automation & <span key="a" className="serif-accent">software.</span></>]}
        sub="Practical guides for founders and operators deciding what to automate — and what it really costs."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8">
        <ul className="grid gap-6 md:grid-cols-3">
          {ARTICLES.map((a, i) => (
            <FadeIn as="li" key={a.title} delay={i * 90} className="h-full">
              <TiltCard max={4} className="lux-card group flex h-full flex-col overflow-hidden">
                <div className="relative grid aspect-[16/10] place-items-center overflow-hidden bg-gradient-to-br from-lilac via-white to-pearl">
                  <span className="material-symbols-outlined text-[64px] text-violet transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[-6deg]" aria-hidden="true">
                    {a.icon}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-violet">{a.category}</span>
                  <h2 className="mt-3 text-[21px] font-bold leading-[1.3] tracking-[-0.02em]">{a.title}</h2>
                  <p className="mt-3 flex-1 leading-[1.6] text-ink-mute">{a.excerpt}</p>
                  <span className="mt-6 text-[13px] font-semibold text-ink-mute">Full article coming soon</span>
                </div>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </section>
      <CtaBand title={<>Rather talk it through? <span className="font-serif font-normal italic">Let&apos;s chat.</span></>} />
    </>
  );
}
