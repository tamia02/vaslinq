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
import { CALENDLY, EMAIL } from "@/components/lux/links";
import { FEATURED } from "@/components/lux/work";
import StepTabs, { type Step } from "@/components/lux/sections/StepTabs";
import { MockCode, MockDashboard, MockShot } from "@/components/lux/demos/Mocks";

export const metadata: Metadata = {
  title: "Vaslix | Custom Software & AI Automation Studio",
  description:
    "Vaslix builds custom software, SaaS platforms, AI chat & voice agents and business automation for ambitious brands in India and worldwide.",
  alternates: { canonical: "https://vaslix.com" },
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

const PROMISES = [
  { big: "24/7", label: "AI agents that never miss a lead or a customer" },
  { big: "100%", label: "Custom-built — no templates, no lock-in" },
  { big: "Weeks", label: "From discovery call to a live product" },
  { big: "Global", label: "Serving founders and brands in India and abroad" },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Vaslix",
        url: "https://vaslix.com",
        logo: "https://vaslix.com/logo.png",
        sameAs: [
          "https://www.linkedin.com/company/vaslix",
          "https://clutch.co/profile/vaslix",
          "https://www.goodfirms.co/company/vaslix",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          email: EMAIL,
          telephone: "+91-9453283929",
          contactType: "customer service",
        },
      },
      {
        "@type": "Service",
        provider: { "@type": "Organization", name: "Vaslix" },
        name: "Custom Software & AI Automation",
        description: "Custom software, SaaS platforms, AI chat/voice agents and business automation for brands worldwide.",
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ─────────── Hero ─────────── */}
      <section className="relative isolate pt-32 sm:pt-36 lg:min-h-[100svh] lg:pt-28">
        <div aria-hidden="true" className="lux-halo -z-10" />
        <div aria-hidden="true" className="lux-grid -z-10" />
        <div aria-hidden="true" className="lux-grain -z-10" />

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
                "Custom software",
                "& AI that runs",
                <span key="a" className="serif-accent text-[1.08em]">while you sleep.</span>,
              ]}
            />
            <FadeIn hero delay={450}>
              <p className="mt-6 max-w-lg text-[18px] leading-[1.65] text-ink-soft">
                Vaslix designs and builds SaaS platforms, premium websites, AI chat &amp; voice agents and
                automation for ambitious brands — so your team focuses on growth, not busywork.
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
            <FadeIn hero delay={650} className="mt-10 flex items-center gap-4 text-[14px] text-ink-mute">
              <div className="flex -space-x-3" aria-hidden="true">
                {FEATURED.map((p) => (
                  <span key={p.slug} className="h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-pearl shadow-sm">
                    <img src={p.image} alt="" className="h-full w-full object-cover object-top" />
                  </span>
                ))}
              </div>
              <span>Trusted by founders &amp; brands across SaaS, D2C, finance and healthcare.</span>
            </FadeIn>
          </div>

          <div className="relative h-[380px] sm:h-[460px] lg:col-span-6 lg:h-[640px]">
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
              <div className="display text-[clamp(40px,4.5vw,60px)] font-bold text-ink">{p.big}</div>
              <p className="mt-3 max-w-[220px] text-[15px] leading-[1.55] text-ink-mute">{p.label}</p>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* ─────────── Client stories ─────────── */}
      <ClientStories />

      {/* ─────────── Process ─────────── */}
      <section className="mx-auto max-w-6xl px-6 pt-28 sm:px-8 lg:pt-36">
        <SectionHead eyebrow="How we work" lines={["From first call", <>to <span key="a" className="serif-accent">live product.</span></>]} />
        <FadeIn className="mt-14">
          <StepTabs steps={PROCESS} />
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
