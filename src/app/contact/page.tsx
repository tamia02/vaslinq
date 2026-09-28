import { Metadata } from "next";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import ContactLinks from "@/components/lux/sections/ContactLinks";
import Faq, { type QA } from "@/components/lux/sections/Faq";
import ContactForm from "@/components/lux/ContactForm";
import FadeIn from "@/components/lux/FadeIn";

export const metadata: Metadata = {
  title: "Contact — Request a Strategy Briefing",
  description: "Talk to Vaslix about custom software, AI WhatsApp & voice agents and automation. Email, WhatsApp or book a free discovery call.",
  alternates: { canonical: "https://www.vaslix.com/contact" },
};

const FAQS: QA[] = [
  {
    q: "How is a project priced?",
    a: "Every build is scoped individually. After a short discovery call we send a clear proposal with fixed deliverables and timeline — no hidden fees.",
  },
  {
    q: "Do you build custom software, or only AI bots?",
    a: "Both. Alongside AI agents and automation we design and build SaaS platforms, e-commerce stores, dashboards and interactive websites — see our Work page for live examples.",
  },
  {
    q: "Which languages can the AI agents speak?",
    a: "Our voice and chat agents support English, Hindi, Arabic and regional languages, and handle mixed-language (Hinglish) conversations naturally.",
  },
  {
    q: "Can it connect to the tools we already use?",
    a: "Yes. We integrate with your CRM, calendar, email, WhatsApp Business and other tools so leads and bookings land exactly where your team already works.",
  },
  {
    q: "How long does a project take?",
    a: "Most automation and AI agent projects go live in a matter of weeks. Larger custom software builds are scoped with a clear timeline in your discovery call.",
  },
];

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Contact"
        lines={["Let's talk about", <>what you&apos;re <span key="a" className="serif-accent">building.</span></>]}
        sub="Tell us where you're losing time or what you want to launch. We'll map the fastest route to a live system."
      />
      <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-8 lg:pb-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <FadeIn>
              <h2 className="text-[24px] font-bold tracking-[-0.02em]">Reach us directly</h2>
            </FadeIn>
            <ContactLinks />
          </div>
          <FadeIn delay={100} className="lg:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-28 sm:px-8 lg:grid-cols-12 lg:pb-36">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="FAQ" lines={["Questions,", <span key="a" className="serif-accent">answered.</span>]} />
        </div>
        <FadeIn className="lg:col-span-8">
          <Faq items={FAQS} />
        </FadeIn>
      </section>
    </>
  );
}
