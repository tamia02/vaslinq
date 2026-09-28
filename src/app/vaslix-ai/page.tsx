import { Metadata } from "next";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import { BUSINESS, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vaslix AI — Coming Soon at ai.vaslix.com",
  description:
    "Vaslix AI is the upcoming self-serve platform from Vaslix, the Lucknow AI agency — the AI agents and automations we build for clients, ready to launch yourself. Join the waitlist.",
  alternates: { canonical: `${SITE_URL}/vaslix-ai` },
};

const WAITLIST_MAIL = `mailto:${BUSINESS.email}?subject=${encodeURIComponent("Vaslix AI — waitlist")}&body=${encodeURIComponent(
  "Hi Vaslix team,\n\nPlease add me to the Vaslix AI early-access list.\n\nName:\nCompany:\nWhat I'd like to automate:\n"
)}`;
const WAITLIST_WA = `https://wa.me/919453283929?text=${encodeURIComponent("Hi! Please add me to the Vaslix AI waitlist.")}`;

const PILLARS = [
  { icon: "smart_toy", title: "Launch AI agents", desc: "Spin up the kind of WhatsApp, voice and website agents we build for clients." },
  { icon: "account_tree", title: "Automate workflows", desc: "Connect leads, CRM, calendar and follow-ups without writing code." },
  { icon: "monitoring", title: "See every result", desc: "One dashboard for conversations, bookings and what your automations did." },
];

export default function VaslixAiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Vaslix AI",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://ai.vaslix.com",
    publisher: { "@id": `${SITE_URL}/#organization` },
    releaseNotes: "Coming soon — join the waitlist.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Coming soon · ai.vaslix.com"
        shape="orb"
        sceneLabel="Liquid glass orb"
        lines={["Vaslix AI.", <>Our platform, <span key="a" className="serif-accent">self-serve.</span></>]}
        sub="We're turning the AI agents and automations we build for clients into a platform you can launch yourself. Be first in line."
      >
        <a href={WAITLIST_MAIL} className="lux-btn lux-btn-primary">
          Join the waitlist
          <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
        </a>
        <a href={WAITLIST_WA} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-ghost">
          Via WhatsApp
        </a>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="What's coming" lines={["Everything we build,", <><span key="a" className="serif-accent">in your hands.</span></>]} />
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
            Early-access members get priority onboarding. Need something built now?{" "}
            <a href="/contact" className="font-semibold text-violet">Talk to the Vaslix team</a>.
          </p>
        </FadeIn>
      </section>
    </>
  );
}
