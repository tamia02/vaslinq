import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import Magnetic from "@/components/lux/motion/Magnetic";
import { CALENDLY } from "@/components/lux/links";
import { FEATURED, MORE_WORK } from "@/components/lux/work";
import StickyStack, { type StackItem } from "@/components/lux/sections/StickyStack";
import PillMarquee from "@/components/lux/sections/PillMarquee";
import { MockShot } from "@/components/lux/demos/Mocks";

export const metadata: Metadata = {
  title: "Custom Software, SaaS Platforms & 3D Websites",
  description:
    "Custom web applications, SaaS platforms, premium e-commerce, interactive 3D websites, CRM systems and AI-driven Meta Ads for startups and brands.",
  alternates: { canonical: "https://www.vaslix.com/software" },
};

const BUILDS = [
  { icon: "dashboard", title: "SaaS platforms", desc: "Multi-user products with auth, dashboards, billing and credit systems — like launchOS.", span: "md:col-span-7" },
  { icon: "shopping_bag", title: "Premium e-commerce", desc: "Custom storefronts with wishlists, profiles and checkout that feel like the brand.", span: "md:col-span-5" },
  { icon: "view_in_ar", title: "3D & interactive web", desc: "Cinematic, motion-rich sites that make brands impossible to ignore.", span: "md:col-span-4" },
  { icon: "hub", title: "Internal tools & CRMs", desc: "Dashboards, pipelines and ops tools built around your team.", span: "md:col-span-4" },
  { icon: "language", title: "Marketing websites", desc: "Fast, SEO-ready sites engineered to turn visitors into leads.", span: "md:col-span-4" },
];

const QUALITIES = [
  { value: "3D / Interactive", label: "Design type" },
  { value: "Ultra-fast", label: "Performance" },
  { value: "Revenue-focused", label: "UX strategy" },
  { value: "AI-first", label: "Integration" },
];

const CRM = [
  { label: "Lead tracking", value: "Real-time pipeline" },
  { label: "Team dashboards", value: "Unified command" },
  { label: "Automated reminders", value: "Zero missed leads" },
  { label: "Sales analytics", value: "Smart forecasting" },
];

const STACK_ROWS = [
  [
    { icon: "code", label: "Next.js" },
    { icon: "code", label: "React" },
    { icon: "data_object", label: "TypeScript" },
    { icon: "palette", label: "Tailwind CSS" },
    { icon: "view_in_ar", label: "Three.js" },
    { icon: "animation", label: "Framer Motion" },
  ],
  [
    { icon: "shopping_bag", label: "Shopify" },
    { icon: "account_tree", label: "n8n" },
    { icon: "forum", label: "WhatsApp Business API" },
    { icon: "psychology", label: "LLMs" },
    { icon: "webhook", label: "REST APIs" },
    { icon: "cloud", label: "Vercel" },
  ],
];

const bySlug = (slug: string) => [...FEATURED, ...MORE_WORK].find((p) => p.slug === slug)!;
const host = (u: string) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const SHIPPED: StackItem[] = [
  {
    eyebrow: "AI SaaS platform",
    title: "launchOS — idea to launch plan.",
    desc: bySlug("launchos").blurb,
    chips: [
      { icon: "psychology", label: "10 AI analysis engines" },
      { icon: "dashboard", label: "Project dashboard" },
      { icon: "lock", label: "Accounts & auth" },
      { icon: "toll", label: "Credit subscriptions" },
    ],
    tone: "#e4ebff",
    visual: <MockShot src="/work/launchos.jpg" alt="launchOS by Vaslix" url={host(bySlug("launchos").url)} />,
  },
  {
    eyebrow: "Two-sided marketplace",
    title: "Software Hub — instant, escrow-safe.",
    desc: bySlug("pool-softwarehub").blurb,
    chips: [
      { icon: "verified_user", label: "Escrow on every order" },
      { icon: "bolt", label: "Instant code delivery" },
      { icon: "groups", label: "Shared seat passes" },
      { icon: "storefront", label: "Reseller portal & API" },
    ],
    tone: "#ffecd6",
    visual: <MockShot src="/work/pool-softwarehub.jpg" alt="Software Hub by Vaslix" url="pool.softwarehub.tech" />,
  },
  {
    eyebrow: "Custom e-commerce",
    title: "Aandré Amelie — luxury, online.",
    desc: bySlug("aandreamelie").blurb,
    chips: [
      { icon: "spa", label: "Shop by concern" },
      { icon: "favorite", label: "Wishlist & profiles" },
      { icon: "shopping_cart", label: "Custom checkout" },
      { icon: "auto_stories", label: "Editorial journal" },
    ],
    tone: "#fde4f2",
    visual: <MockShot src="/work/aandreamelie.jpg" alt="Aandré Amelie by Vaslix" url={host(bySlug("aandreamelie").url)} />,
  },
  {
    eyebrow: "3D & motion",
    title: "Cinematic experiences that stop the scroll.",
    desc: bySlug("pagani").blurb + " The same craft powers the site you're on right now.",
    chips: [
      { icon: "view_in_ar", label: "Real-time 3D" },
      { icon: "animation", label: "Scroll storytelling" },
      { icon: "speed", label: "Performance-tuned" },
      { icon: "devices", label: "Fully responsive" },
    ],
    tone: "#ece8ff",
    visual: <MockShot src="/work/pagani.jpg" alt="Pagani experience by Vaslix" url="3D showcase" />,
  },
];

export default function SoftwarePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "Organization", name: "Vaslix", url: "https://www.vaslix.com" },
    name: "Custom Software, SaaS Platforms & 3D Websites",
    description: "Custom web applications, SaaS platforms, interactive 3D websites, CRM systems and AI-driven Meta Ads.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Custom Software"
        shape="block"
        sceneLabel="Glass cube representing a software product"
        lines={["Software built", <>around <span key="a" className="serif-accent">your business.</span></>]}
        sub="From AI SaaS platforms to premium storefronts and 3D experiences — we design and engineer products that command attention and scale with you."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Magnetic>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary">
              Start your build
              <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
            </a>
          </Magnetic>
          <Link href="/work" className="lux-btn lux-btn-ghost">See shipped products</Link>
        </div>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        <SectionHead eyebrow="What we build" lines={["Products, not", <><span key="a" className="serif-accent">templates.</span></>]} />
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          {BUILDS.map((b, i) => (
            <FadeIn key={b.title} delay={(i % 3) * 80} className={b.span}>
              <TiltCard max={4} className="lux-card group flex h-full flex-col p-8 sm:p-9">
                <span className="lux-icon">
                  <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{b.icon}</span>
                </span>
                <h3 className="mt-8 text-[22px] font-bold tracking-[-0.02em]">{b.title}</h3>
                <p className="mt-2 leading-[1.65] text-ink-mute">{b.desc}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Qualities */}
      <section className="border-y border-line bg-paper">
        <ul className="mx-auto grid max-w-6xl grid-cols-2 lg:grid-cols-4">
          {QUALITIES.map((q, i) => (
            <FadeIn as="li" key={q.label} delay={i * 70} className="border-line px-6 py-10 sm:px-8 [&:not(:last-child)]:border-r">
              <div className="text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-mute">{q.label}</div>
              <div className="mt-2 text-[24px] font-bold tracking-[-0.02em]">{q.value}</div>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Recently shipped — sticky stack */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-8 lg:py-32">
        <div className="flex flex-col gap-6 px-2 sm:px-0 md:flex-row md:items-end md:justify-between">
          <SectionHead eyebrow="Recently shipped" lines={["Live, in production,", <><span key="a" className="serif-accent">earning.</span></>]} />
          <FadeIn>
            <Link href="/work" className="lux-btn lux-btn-ghost">All projects</Link>
          </FadeIn>
        </div>
        <div className="mt-14">
          <StickyStack items={SHIPPED} />
        </div>
      </section>

      {/* CRM */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:items-center">
          <SectionHead
            eyebrow="CRM & operations"
            lines={["Systems your team", <><span key="a" className="serif-accent">actually uses.</span></>]}
            sub="Custom CRMs and operations tools built around your specific workflow — not the other way round."
          />
          <FadeIn delay={100}>
            <ul className="lux-card divide-y divide-line !rounded-[28px] !bg-pearl">
              {CRM.map((c) => (
                <li key={c.label} className="flex items-center justify-between gap-6 px-7 py-6">
                  <span className="text-ink-mute">{c.label}</span>
                  <span className="text-[17px] font-semibold">{c.value}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* Growth */}
      <section id="growth" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="Growth infrastructure" lines={["Meta ads &", <><span key="a" className="serif-accent">AI creatives.</span></>]} />
        <div className="mt-14 grid gap-6 md:grid-cols-12">
          <FadeIn className="md:col-span-7">
            <article className="lux-card group h-full overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img src="/ads.png" alt="AI-generated ad creatives" loading="lazy" className="lux-tint h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
              </div>
              <div className="p-8 sm:p-9">
                <h3 className="text-[22px] font-bold tracking-[-0.02em]">High-converting ad infrastructure</h3>
                <p className="mt-2 leading-[1.65] text-ink-mute">
                  Strategy-first Meta campaigns designed to maximise ROAS and scale lead volume, using dynamic AI-generated visual assets.
                </p>
              </div>
            </article>
          </FadeIn>
          <FadeIn delay={100} className="md:col-span-5">
            <article className="lux-card flex h-full flex-col p-8 sm:p-9">
              <span className="lux-icon">
                <span className="material-symbols-outlined text-[28px]" aria-hidden="true">auto_awesome</span>
              </span>
              <h3 className="mt-8 text-[22px] font-bold tracking-[-0.02em]">AI-generated creatives</h3>
              <p className="mt-2 leading-[1.65] text-ink-mute">
                Visual assets and copy generated by specialised AI agents for rapid testing and optimisation across every channel.
              </p>
            </article>
          </FadeIn>
        </div>
      </section>

      {/* Stack */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHead eyebrow="Our stack" lines={["Modern tools,", <><span key="a" className="serif-accent">production-grade.</span></>]} />
        </div>
        <FadeIn className="mt-12">
          <PillMarquee rows={STACK_ROWS} />
        </FadeIn>
      </section>

      <CtaBand title={<>Have a product in mind? <span className="font-serif font-normal italic">Let&apos;s ship it.</span></>} />
    </>
  );
}
