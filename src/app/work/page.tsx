import { Metadata } from "next";
import KineticBand from "@/components/lux/motion/KineticBand";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import ClientStories from "@/components/lux/sections/ClientStories";
import FadeIn from "@/components/lux/FadeIn";
import { FEATURED, MORE_WORK } from "@/components/lux/work";
import PillTabs, { type TabItem } from "@/components/lux/sections/PillTabs";

export const metadata: Metadata = {
  title: "Work & Case Studies",
  description:
    "Custom software, SaaS platforms, e-commerce stores and AI automation systems Vaslix has designed and shipped for founders and brands.",
  alternates: { canonical: "https://www.vaslix.com/work" },
};

const CASES = [
  {
    stat: "90s",
    statLabel: "Lead response time",
    industry: "Real estate agency",
    title: "Reduced lead response time from 4 hours to 90 seconds.",
    desc: "A custom AI WhatsApp chatbot connected directly to their CRM automated first-touch qualification — engaging prospects instantly, collecting property preferences and booking site visits around the clock.",
    tags: ["WhatsApp bot", "CRM sync"],
  },
  {
    stat: "+30%",
    statLabel: "Call recovery",
    industry: "Healthcare clinic",
    title: "Recovered 30% of missed inbound patient calls.",
    desc: "An AI voice agent now handles after-hours and overflow calls — scheduling appointments in multiple regional languages and answering routine FAQs without extending front-desk hours.",
    tags: ["AI voice agent", "Multi-language"],
  },
];

const TABS: TabItem[] = [
  {
    label: "SaaS",
    title: "AI SaaS for founders — launchOS",
    points: ["Ten AI engines turn a one-line idea into a full launch plan", "Accounts, project dashboard and progress tracking", "Credit-based subscription tiers"],
    image: "/work/launchos.jpg",
    url: "https://www.launchos.co.in",
    facts: [{ k: "Type", v: "AI SaaS" }, { k: "Stack", v: "Next.js" }, { k: "Status", v: "Live" }],
  },
  {
    label: "Marketplace",
    title: "Digital-goods marketplace — Software Hub",
    points: ["Escrow on every order, released when the buyer confirms", "Instant code delivery with bundles and shared seat passes", "Reseller portal with product uploads and API access"],
    image: "/work/pool-softwarehub.jpg",
    url: "https://pool.softwarehub.tech/market",
    facts: [{ k: "Type", v: "Marketplace" }, { k: "Sides", v: "Buyers + resellers" }, { k: "Status", v: "Live" }],
  },
  {
    label: "D2C & e-commerce",
    title: "Premium storefronts — Aandré Amelie & Kusho",
    points: ["Cinematic product heroes and editorial brand stories", "Shop-by-concern / shop-by-need navigation", "Wishlists, profiles, checkout and WhatsApp support"],
    image: "/work/aandreamelie.jpg",
    url: "https://www.aandreamelie.com",
    facts: [{ k: "Type", v: "E-commerce" }, { k: "Brands", v: "2 live" }, { k: "Support", v: "WhatsApp" }],
  },
  {
    label: "Finance",
    title: "Lead-gen website — AARC Smart Bookkeeping",
    points: ["Services, credentials and transparent positioning for a US firm", "Free-consultation booking flow", "Built to turn visitors into qualified calls"],
    image: "/work/aarc-bookkeeping.jpg",
    url: "https://www.aarcbookkeeping.com",
    facts: [{ k: "Type", v: "Website" }, { k: "Market", v: "United States" }, { k: "Goal", v: "Consultations" }],
  },
  {
    label: "Healthcare",
    title: "Clinic experience + AI assistant — Aether Dental",
    points: ["Luxury clinic website with a calm, premium feel", "Embedded AI assistant for patient questions", "Online booking built in"],
    image: "/work/dentist-ai.jpg",
    url: "https://phenomenal-cascaron-982e78.netlify.app/",
    facts: [{ k: "Type", v: "Site + AI bot" }, { k: "Channel", v: "Web chat" }, { k: "Goal", v: "Bookings" }],
  },
  {
    label: "Education",
    title: "WhatsApp admissions automation — InquiryBoost",
    points: ["Instant replies to parent enquiries on WhatsApp", "Productised automation with its own sales page", "Built for schools, colleges and institutes"],
    image: "/work/inquiryboost.jpg",
    url: "https://inquiryboost.vercel.app/",
    facts: [{ k: "Type", v: "Automation" }, { k: "Channel", v: "WhatsApp" }, { k: "Audience", v: "Institutes" }],
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        lines={["Products we've", <><span key="a" className="serif-accent">designed & shipped.</span></>]}
        sub="SaaS platforms, premium storefronts, AI agents and automation — every one custom-built, every one live."
      />

      {/* Browse by industry */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-8 lg:py-28">
        <SectionHead className="px-2 sm:px-0" eyebrow="By industry" lines={["Pick your industry.", <>See what we <span key="a" className="serif-accent">built.</span></>]} />
        <FadeIn className="mt-12">
          <PillTabs tabs={TABS} />
        </FadeIn>
      </section>

      {/* Featured — alternating large case cards */}
      <section className="mx-auto max-w-6xl space-y-28 px-6 pb-28 sm:px-8 lg:space-y-36">
        {FEATURED.map((p, i) => (
          <article key={p.slug} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <FadeIn className={`lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-card group relative block overflow-hidden !rounded-[30px] p-2"
                aria-label={`Visit ${p.name}`}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-80"
                  style={{ background: `radial-gradient(circle at 30% 120%, ${p.tone}40, transparent 60%)` }}
                />
                <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
                  <img
                    src={p.image}
                    alt={`${p.name} — ${p.kind} by Vaslix`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </div>
              </a>
            </FadeIn>
            <div className={`lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}>
              <FadeIn>
                <p className="text-[13px] font-semibold text-violet">{String(i + 1).padStart(2, "0")} — {p.industry}</p>
                <h2 className="display mt-3 text-[clamp(34px,3.8vw,52px)] font-bold">{p.name}</h2>
                <p className="mt-2 font-serif text-[22px] italic text-ink-mute">{p.kind}</p>
              </FadeIn>
              <FadeIn delay={100}>
                <p className="mt-6 text-[17px] leading-[1.7] text-ink-soft">{p.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-paper px-3 py-1 text-[12px] font-medium text-ink-soft">{t}</li>
                  ))}
                </ul>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-ghost mt-8">
                  Visit live site
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">north_east</span>
                </a>
              </FadeIn>
            </div>
          </article>
        ))}
      </section>

      {/* More work */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHead eyebrow="More builds" lines={["AI bots, automation", <>& <span key="a" className="serif-accent">experiments.</span></>]} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {MORE_WORK.map((p, i) => (
              <FadeIn key={p.slug} delay={(i % 2) * 90}>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="lux-card group flex h-full flex-col overflow-hidden !bg-pearl">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.image} alt={`${p.name} by Vaslix`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-[20px] font-bold tracking-[-0.02em]">{p.name}</h3>
                        <p className="text-[13px] text-ink-mute">{p.industry} · {p.kind}</p>
                      </div>
                      <span className="material-symbols-outlined text-ink-mute transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" aria-hidden="true">north_east</span>
                    </div>
                    <p className="mt-3 leading-[1.6] text-ink-mute">{p.blurb}</p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="Case studies" lines={["Automation with", <><span key="a" className="serif-accent">measurable impact.</span></>]} />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 100}>
              <article className="lux-card flex h-full flex-col p-8 sm:p-10">
                <div className="flex items-end justify-between gap-6 border-b border-line pb-8">
                  <div>
                    <div className="display text-[64px] font-bold text-violet">{c.stat}</div>
                    <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-mute">{c.statLabel}</div>
                  </div>
                  <span className="rounded-full bg-lilac px-3 py-1 text-[12px] font-semibold text-violet">{c.industry}</span>
                </div>
                <h3 className="mt-8 text-[24px] font-bold leading-[1.25] tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-4 flex-1 leading-[1.7] text-ink-mute">{c.desc}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-pearl px-3 py-1 text-[12px] font-medium text-ink-soft">{t}</li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>

      <ClientStories />
      <KineticBand words={["Designed", "Built", "Shipped", "Live"]} />

      <CtaBand title={<>Your product could be <span className="font-serif font-normal italic">next.</span></>} />
    </>
  );
}
