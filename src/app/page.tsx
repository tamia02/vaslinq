import { Metadata } from "next";
import Link from "next/link";
import Stage3D from "@/components/lux/Stage3D";
import FadeIn from "@/components/lux/FadeIn";
import ContactForm from "@/components/lux/ContactForm";
import TiltCard from "@/components/fx/TiltCard";
import RevealLines from "@/components/lux/motion/RevealLines";
import Magnetic from "@/components/lux/motion/Magnetic";
import WorkShowcase from "@/components/lux/sections/WorkShowcase";
import Showreel from "@/components/lux/sections/Showreel";
import ClientStories from "@/components/lux/sections/ClientStories";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import ContactLinks from "@/components/lux/sections/ContactLinks";
import CountUp from "@/components/lux/motion/CountUp";
import KineticBand from "@/components/lux/motion/KineticBand";
import { CALENDLY } from "@/components/lux/links";
import StepTabs, { type Step } from "@/components/lux/sections/StepTabs";
import { MockCode, MockDashboard, MockShot } from "@/components/lux/demos/Mocks";

export const metadata: Metadata = {
  title: { absolute: "AI Agency in Lucknow, Uttar Pradesh | Vaslix" },
  description:
    "Vaslix is an AI agency in Lucknow, Uttar Pradesh building AI WhatsApp & voice agents, business automation and custom software for companies across UP and India.",
  alternates: { canonical: "https://www.vaslix.com" },
};

const CAPABILITIES = [
  "Custom Software",
  "SaaS Platforms",
  "AI WhatsApp Agents",
  "AI Voice Agents",
  "CRM Automation",
  "E-commerce Builds",
  "Lead Generation",
  "3D Web Experiences",
];

const PILLARS = [
  {
    n: "01",
    href: "/software",
    title: "Custom Software & SaaS",
    cta: "Explore software",
    icon: "deployed_code",
    desc: "Web apps, SaaS platforms, dashboards and premium storefronts — engineered around how your business actually works.",
    points: ["SaaS & dashboards", "E-commerce", "3D websites"],
  },
  {
    n: "02",
    href: "/ai-agents",
    title: "AI Chat & Voice Agents",
    cta: "Explore AI agents",
    icon: "graphic_eq",
    desc: "WhatsApp, website and voice agents that answer, qualify and book around the clock — in Hindi, English, Arabic and more.",
    points: ["WhatsApp AI", "Voice calling", "Website chatbot"],
  },
  {
    n: "03",
    href: "/automation",
    title: "Business Automation",
    cta: "Explore automation",
    icon: "account_tree",
    desc: "Follow-ups, CRM sync, onboarding, lead pipelines and reporting — the busywork, handled by systems instead of people.",
    points: ["CRM & pipelines", "Lead gen", "AI content"],
  },
];

const PROCESS: Step[] = [
  {
    icon: "travel_explore",
    title: "Discover",
    desc: "A focused call to map where your team loses hours, leads and revenue — and what to build first.",
    preview: (
      <MockCode
        file="discovery-notes.md"
        lines={["## Goals", "- reply to every lead in < 1 min", "- stop re-typing data into the CRM", "", "## Build first", "- WhatsApp agent + CRM sync", "- founder dashboard"]}
      />
    ),
  },
  {
    icon: "draw",
    title: "Design",
    desc: "A clear blueprint and interface design, scoped with fixed deliverables before a line of code.",
    preview: <MockShot src="/work/aandreamelie.jpg" alt="Interface design example" url="design review · v2" />,
  },
  {
    icon: "terminal",
    title: "Build",
    desc: "We engineer, integrate with your stack and ship in weeks — with demos along the way.",
    preview: (
      <MockCode
        file="agent.ts"
        lines={["export const agent = createAgent({", '  channel: "whatsapp",', "  knowledge: await loadDocs(),", "  onQualified: crm.createDeal,", "  onBooked: calendar.schedule,", "});"]}
      />
    ),
  },
  {
    icon: "rocket_launch",
    title: "Launch & scale",
    desc: "We go live, monitor, tune and extend the system as your business grows.",
    preview: <MockDashboard title="Live since launch" />,
  },
];

const TRUSTED = ["launchOS", "Software Hub", "Aandré Amelie", "Kusho", "AARC Bookkeeping", "Laptop House"];

const PROMISES = [
  { big: "9+", label: "Live products & experiences shipped for clients" },
  { big: "7", label: "Industries served — SaaS, retail, finance, health, education & more" },
  { big: "24/7", label: "AI agents that never miss a lead or a customer" },
  { big: "3+", label: "Languages our agents speak — Hindi, English, Arabic" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@id": "https://www.vaslix.com/#localbusiness" },
    name: "Custom Software & AI Automation",
    serviceType: "AI agency",
    areaServed: ["Lucknow", "Uttar Pradesh", "India"],
    description: "Custom software, SaaS platforms, AI WhatsApp/voice agents and business automation from a Lucknow-based AI agency.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─────────── Hero ─────────── */}
      <section className="relative isolate pt-32 sm:pt-36 lg:min-h-[100svh] lg:pt-28">
        <div aria-hidden="true" className="lux-halo -z-10" />
        <div aria-hidden="true" className="lux-grid -z-10" />

        <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 sm:px-8 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-12">
          <div className="lg:col-span-6">
            <FadeIn hero>
              <Link href="/work" className="lux-pill lux-glass">
                <span className="lux-pill-dot">New</span>
                See the products we&apos;ve shipped
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </FadeIn>
            <RevealLines
              hero
              as="h1"
              className="display mt-7 text-[clamp(44px,6.2vw,84px)] font-bold"
              delay={0.1}
              lines={[
                <span key="loc" className="mb-4 block text-[15px] font-semibold tracking-[0.02em] text-violet sm:text-[16px]">
                  AI agency in Lucknow, Uttar Pradesh
                </span>,
                "Custom software",
                "& AI that runs",
                <span key="a" className="serif-accent text-[1.08em]">while you sleep.</span>,
              ]}
            />
            <FadeIn hero delay={450}>
              <p className="mt-6 max-w-lg text-[18px] leading-[1.65] text-ink-soft">
                Vaslix is a Lucknow-based AI agency. We design and build SaaS platforms, premium websites,
                AI chat &amp; voice agents and automation for ambitious brands across Uttar Pradesh, India
                and worldwide — so your team focuses on growth, not busywork.
              </p>
            </FadeIn>
            <FadeIn hero delay={550} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Magnetic>
                <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary w-full sm:w-auto">
                  Book a discovery call
                  <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
                </a>
              </Magnetic>
              <Link href="/work" className="lux-btn lux-btn-ghost">
                View our work
              </Link>
            </FadeIn>
            <FadeIn hero delay={650} className="mt-10">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-ink-mute">Trusted by founders &amp; brands</p>
              <ul className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
                {TRUSTED.map((n) => (
                  <li key={n} className="text-[16px] font-bold tracking-[-0.02em] text-ink/70 transition-colors hover:text-violet">
                    {n}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          <div className="relative order-first -mb-4 h-[300px] sm:h-[420px] lg:order-none lg:col-span-6 lg:mb-0 lg:h-[640px]">
            <Stage3D
              scene="hero"
              shape="knot"
              className="absolute inset-0 lg:-left-10 lg:-right-10"
              label="Iridescent glass sculpture with orbiting spheres representing AI agents"
            />
            <FadeIn hero delay={900} className="absolute left-0 top-10 hidden sm:block">
              <div className="lux-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="lux-icon !h-10 !w-10 !rounded-xl">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">bolt</span>
                </span>
                <div>
                  <div className="text-[13px] text-ink-mute">New lead</div>
                  <div className="text-[15px] font-semibold">Qualified &amp; booked</div>
                </div>
              </div>
            </FadeIn>
            <FadeIn hero delay={1050} className="absolute bottom-12 right-2 hidden sm:block">
              <div className="lux-glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet" />
                </span>
                <div className="text-[14px] font-semibold">Voice agent · live call</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─────────── Capability marquee ─────────── */}
      <section aria-label="Capabilities" className="border-y border-line bg-paper/60 py-7">
        <div className="lux-marquee">
          {[0, 1].map((k) => (
            <ul key={k} className="lux-marquee-track" aria-hidden={k === 1}>
              {CAPABILITIES.map((c) => (
                <li key={c} className="flex items-center gap-4 whitespace-nowrap text-[17px] font-semibold tracking-[-0.01em] text-ink-soft">
                  <span className="text-violet" aria-hidden="true">✦</span>
                  {c}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* ─────────── Showreel ─────────── */}
      <Showreel />

      {/* ─────────── What we do ─────────── */}
      <section id="services" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-28 sm:px-8 lg:py-36">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <SectionHead eyebrow="What we do" lines={["One studio.", <>Three ways we <span key="a" className="serif-accent">multiply</span> you.</>]} />
          </div>
          <FadeIn delay={100} className="lg:col-span-5">
            <p className="text-[18px] leading-[1.65] text-ink-soft">
              We build systems that save time, increase revenue and automate operations — engineered for
              your workflows, never templates.
            </p>
          </FadeIn>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((s, i) => (
            <FadeIn as="li" key={s.title} delay={i * 80} className="h-full">
              <TiltCard max={5} className="lux-card group flex h-full flex-col p-8 sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="lux-icon">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{s.icon}</span>
                  </span>
                  <span className="font-serif text-[28px] italic text-ink-mute/70">{s.n}</span>
                </div>
                <h3 className="mt-10 text-[24px] font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 flex-1 leading-[1.65] text-ink-mute">{s.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.points.map((pt) => (
                    <li key={pt} className="rounded-full bg-pearl px-3 py-1 text-[12px] font-medium text-ink-soft">{pt}</li>
                  ))}
                </ul>
                <Link href={s.href} className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-violet">
                  {s.cta}
                  <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
                </Link>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* ─────────── Work (pinned horizontal rail) ─────────── */}
      <WorkShowcase />

      {/* ─────────── Promises strip ─────────── */}
      <section aria-label="What you can expect" className="mx-auto max-w-6xl px-6 py-24 sm:px-8">
        <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {PROMISES.map((p, i) => (
            <FadeIn as="li" key={p.big} delay={i * 70} className="border-l border-line pl-6">
              <div className="display text-[clamp(40px,4.5vw,60px)] font-bold text-ink"><CountUp value={p.big} /></div>
              <p className="mt-3 max-w-[220px] text-[15px] leading-[1.55] text-ink-mute">{p.label}</p>
            </FadeIn>
          ))}
        </ul>
      </section>

      <KineticBand words={["Design", "Build", "Automate", "Scale"]} />

      {/* ─────────── Client stories ─────────── */}
      <ClientStories />

      {/* ─────────── Process ─────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:px-8 lg:pt-36">
        <SectionHead eyebrow="How we work" lines={["From first call", <>to <span key="a" className="serif-accent">live product.</span></>]} />
        <FadeIn className="mt-14">
          <StepTabs steps={PROCESS} />
        </FadeIn>
      </section>

      {/* ─────────── Local + product band ─────────── */}
      <section className="mx-auto grid max-w-6xl gap-6 px-6 pt-28 sm:px-8 md:grid-cols-2 lg:pt-36">
        <FadeIn>
          <Link href="/ai-agency-uttar-pradesh" className="lux-card group flex h-full flex-col p-8 sm:p-10">
            <span className="lux-icon">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">location_on</span>
            </span>
            <p className="lux-eyebrow mt-8">Made in Lucknow</p>
            <h2 className="mt-3 text-[26px] font-bold tracking-[-0.02em]">The AI agency for Uttar Pradesh businesses</h2>
            <p className="mt-3 flex-1 leading-[1.65] text-ink-mute">
              From Lucknow to Kanpur, Noida and Varanasi — AI agents that speak Hindi and Hinglish, and software built for how UP businesses really work.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 font-semibold text-violet">
              AI agency in Uttar Pradesh
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
            </span>
          </Link>
        </FadeIn>
        <FadeIn delay={90}>
          <Link href="/vaslix-ai" className="lux-band group flex h-full flex-col !rounded-[28px] p-8 sm:p-10">
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/15">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">rocket_launch</span>
            </span>
            <p className="relative mt-8 text-[12px] font-bold uppercase tracking-[0.18em] text-white/75">Coming soon · ai.vaslix.com</p>
            <h2 className="relative mt-3 text-[26px] font-bold tracking-[-0.02em]">Vaslix AI — our platform, self-serve</h2>
            <p className="relative mt-3 flex-1 leading-[1.65] text-white/85">
              We&apos;re turning the systems we build for clients into a SaaS you can launch yourself. Join the waitlist for early access.
            </p>
            <span className="relative mt-6 inline-flex items-center gap-2 font-semibold">
              Join the waitlist
              <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
            </span>
          </Link>
        </FadeIn>
      </section>

      <CtaBand />

      {/* ─────────── Contact ─────────── */}
      <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 pb-28 sm:px-8 lg:pb-36">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Contact"
              lines={["Let's build your", <span key="a" className="serif-accent">unfair advantage.</span>]}
              sub="Ready to transform your business with custom software and AI? Let's discuss your roadmap."
            />
            <ContactLinks />
          </div>
          <FadeIn delay={100} className="lg:col-span-7">
            <ContactForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
