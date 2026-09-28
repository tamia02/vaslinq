import { Metadata } from "next";
import KineticBand from "@/components/lux/motion/KineticBand";
import Link from "next/link";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import Faq, { type QA } from "@/components/lux/sections/Faq";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import Magnetic from "@/components/lux/motion/Magnetic";
import { CALENDLY } from "@/components/lux/links";
import { BUSINESS, SITE_URL, addressLine } from "@/lib/site";

const PATH = "/ai-agency-uttar-pradesh";

export const metadata: Metadata = {
  title: { absolute: "AI Agency in Uttar Pradesh | Vaslix, Lucknow" },
  description:
    "Lucknow-based AI agency serving all of Uttar Pradesh — Kanpur, Noida, Varanasi, Prayagraj, Agra. Hindi & English AI agents, automation and custom software.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    title: "AI Agency in Uttar Pradesh — Vaslix, Lucknow",
    description: "AI agents that speak Hindi & Hinglish, business automation and custom software for UP businesses.",
    url: `${SITE_URL}${PATH}`,
  },
};

const WHY = [
  {
    icon: "translate",
    title: "AI that speaks like your customers",
    desc: "Our WhatsApp and voice agents handle Hindi, English and Hinglish naturally — the way customers across UP actually message and call.",
  },
  {
    icon: "location_on",
    title: "Based in Lucknow",
    desc: "A local team in the state capital, on your time zone, who understand how businesses in Uttar Pradesh sell, hire and operate.",
  },
  {
    icon: "support_agent",
    title: "Direct founder access",
    desc: "You work directly with the people building your system — no account-manager relay, no offshore hand-offs.",
  },
  {
    icon: "public",
    title: "Global-grade engineering",
    desc: "The same studio that ships SaaS platforms and storefronts for international brands builds for your business in UP.",
  },
];

const INDUSTRIES = [
  {
    icon: "school",
    title: "Education & coaching",
    where: "Lucknow · Prayagraj · Kanpur · Varanasi",
    desc: "WhatsApp admission agents that answer fee, batch and hostel questions at any hour, score leads and hand serious parents to counsellors.",
  },
  {
    icon: "local_hospital",
    title: "Clinics & hospitals",
    where: "Lucknow · Kanpur · Gorakhpur",
    desc: "Voice agents that pick up every call, book appointments in Hindi or English and send reminders — so no patient goes to voicemail.",
  },
  {
    icon: "apartment",
    title: "Real estate",
    where: "Lucknow · Noida · Ghaziabad",
    desc: "Instant replies to property enquiries from portals and ads, budget and location qualification, and site visits booked straight to your calendar.",
  },
  {
    icon: "storefront",
    title: "Retail & D2C",
    where: "Kanpur · Lucknow · Agra",
    desc: "Fast storefronts, WhatsApp commerce and product-recommendation chatbots — like the bilingual site we built for Laptop House in Kanpur.",
  },
  {
    icon: "factory",
    title: "Manufacturing & exports",
    where: "Kanpur · Agra · Moradabad · Aligarh",
    desc: "B2B lead generation, CRM automation and follow-up systems that keep enquiries from buyers in India and abroad moving.",
  },
  {
    icon: "travel_explore",
    title: "Hospitality & tourism",
    where: "Varanasi · Agra · Lucknow · Ayodhya",
    desc: "Multilingual booking assistants that answer guests on WhatsApp and the web, day and night, in their own language.",
  },
];

const SERVICES = [
  { href: "/ai-agents", icon: "graphic_eq", title: "AI WhatsApp & voice agents", desc: "Answer, qualify and book customers 24/7." },
  { href: "/automation", icon: "account_tree", title: "Business & CRM automation", desc: "Follow-ups, pipelines, reporting — on autopilot." },
  { href: "/software", icon: "deployed_code", title: "Custom software & SaaS", desc: "Web apps, dashboards, marketplaces and storefronts." },
];

const FAQS: QA[] = [
  {
    q: "Which AI agency in Uttar Pradesh should I choose?",
    a: "Look for a team that builds custom systems rather than reselling templates, can show live products, and supports Hindi and English. Vaslix is a Lucknow-based AI agency that designs and builds AI WhatsApp and voice agents, business automation and custom software — see our Work page for live client projects.",
  },
  {
    q: "What does an AI agency do for a business?",
    a: "An AI agency builds systems that do repetitive work for you: agents that reply to customers and qualify leads on WhatsApp or phone, automations that update your CRM and send follow-ups, and custom software such as dashboards and portals that tie it all together.",
  },
  {
    q: "Do you work with businesses outside Lucknow?",
    a: "Yes. We're based in Lucknow and work with businesses across Uttar Pradesh — including Kanpur, Noida, Ghaziabad, Varanasi, Prayagraj, Agra, Meerut and Gorakhpur — as well as clients elsewhere in India and abroad.",
  },
  {
    q: "Can your AI agents speak Hindi?",
    a: "Yes. Our chat and voice agents handle Hindi, English and mixed Hinglish conversations, and can be extended to Arabic and other regional languages.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most AI agent and automation projects go live in a matter of weeks. Larger custom software builds are scoped with a clear timeline after a free discovery call.",
  },
  {
    q: "How much does it cost to hire an AI agency in UP?",
    a: "Every project is scoped individually based on channels, integrations and features. Book a free discovery call and we'll send a clear proposal with fixed deliverables — no hidden fees.",
  },
];

export default function UttarPradeshPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${PATH}#webpage`,
        url: `${SITE_URL}${PATH}`,
        name: "AI Agency in Uttar Pradesh & Lucknow — Vaslix",
        about: { "@id": `${SITE_URL}/#localbusiness` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      {
        "@type": "Service",
        name: "AI agency services in Uttar Pradesh",
        serviceType: "AI agency",
        provider: { "@id": `${SITE_URL}/#localbusiness` },
        areaServed: BUSINESS.areaServed.filter((c) => c !== "India").map((name) => ({ "@type": name === "Uttar Pradesh" ? "State" : "City", name })),
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "AI Agency in Uttar Pradesh", item: `${SITE_URL}${PATH}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Lucknow · Uttar Pradesh"
        shape="crystal"
        sceneLabel="Glass crystal representing Vaslix AI"
        lines={["AI Agency in", "Lucknow, Uttar", <span key="a" className="serif-accent">Pradesh.</span>]}
        sub="Vaslix is a Lucknow-based AI agency helping businesses across UP reply faster, sell more and automate the busywork — with AI agents that speak Hindi and English, and custom software built around how you work."
      >
        <Magnetic>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary">
            Book a free call
            <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
        </Magnetic>
      </PageHero>

      {/* Why local */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead
          eyebrow="Why Vaslix"
          lines={["A local AI partner", <>with <span key="a" className="serif-accent">global standards.</span></>]}
          sub="Businesses in Uttar Pradesh deserve the same calibre of AI and software as anywhere in the world — built by people who understand the market."
        />
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <FadeIn as="li" key={w.title} delay={i * 70} className="h-full">
              <TiltCard max={4} className="lux-card group h-full p-7">
                <span className="lux-icon">
                  <span className="material-symbols-outlined text-[26px]" aria-hidden="true">{w.icon}</span>
                </span>
                <h3 className="mt-7 text-[19px] font-bold tracking-[-0.02em]">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.6] text-ink-mute">{w.desc}</p>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* Industries */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHead
            eyebrow="Across Uttar Pradesh"
            lines={["AI for the industries", <>that power <span key="a" className="serif-accent">UP.</span></>]}
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((it, i) => (
              <FadeIn as="li" key={it.title} delay={(i % 3) * 70} className="h-full">
                <article className="lux-card flex h-full flex-col !bg-pearl p-7 sm:p-8">
                  <span className="lux-icon !h-12 !w-12 !rounded-2xl">
                    <span className="material-symbols-outlined text-[24px]" aria-hidden="true">{it.icon}</span>
                  </span>
                  <h3 className="mt-6 text-[21px] font-bold tracking-[-0.02em]">{it.title}</h3>
                  <p className="mt-1 text-[13px] font-semibold text-violet">{it.where}</p>
                  <p className="mt-3 leading-[1.65] text-ink-mute">{it.desc}</p>
                </article>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* Cities */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHead
              eyebrow="Where we work"
              lines={["Headquartered in", <span key="a" className="serif-accent">Lucknow.</span>]}
              sub="We work with businesses across Uttar Pradesh — and with clients across India and abroad."
            />
          </div>
          <FadeIn className="lg:col-span-7">
            <ul className="flex flex-wrap gap-2.5">
              {BUSINESS.areaServed
                .filter((c) => c !== "India" && c !== "Uttar Pradesh")
                .map((c) => (
                  <li
                    key={c}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-[15px] font-medium ${
                      c === "Lucknow" ? "border-violet bg-violet text-white" : "border-line bg-paper text-ink"
                    }`}
                  >
                    <span className={`material-symbols-outlined text-[18px] ${c === "Lucknow" ? "text-white" : "text-violet"}`} aria-hidden="true">
                      {c === "Lucknow" ? "home_pin" : "location_on"}
                    </span>
                    {c === "Lucknow" ? "Lucknow (HQ)" : c}
                  </li>
                ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* UP work */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
          <FadeIn>
            <a
              href="https://laptophouse-knp.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-[28px] border border-line bg-white p-2 shadow-[0_24px_50px_-30px_rgba(58,34,199,0.45)]"
            >
              <img src="/work/laptop-house.jpg" alt="Laptop House Kanpur website built by Vaslix" loading="lazy" className="aspect-[16/10] w-full rounded-[22px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]" />
            </a>
          </FadeIn>
          <div>
            <SectionHead
              eyebrow="Built in UP, for UP"
              lines={["Laptop House,", <span key="a" className="serif-accent">Kanpur.</span>]}
              sub="A bilingual English/Hindi website for one of Kanpur's long-running laptop retail and repair stores — built to be found locally and to turn visits into calls."
            />
            <FadeIn className="mt-8 flex flex-wrap gap-3">
              <Link href="/work" className="lux-btn lux-btn-primary">
                See all our work
                <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="Services" lines={["Everything your business", <>needs to <span key="a" className="serif-accent">run on AI.</span></>]} />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FadeIn as="li" key={s.href} delay={i * 80}>
              <Link href={s.href} className="lux-card group flex h-full items-start gap-5 p-7">
                <span className="lux-icon !h-12 !w-12 !rounded-2xl">
                  <span className="material-symbols-outlined text-[24px]" aria-hidden="true">{s.icon}</span>
                </span>
                <span className="flex-1">
                  <span className="block text-[18px] font-bold tracking-[-0.01em] group-hover:text-violet">{s.title}</span>
                  <span className="mt-1 block text-[15px] text-ink-mute">{s.desc}</span>
                </span>
                <span className="material-symbols-outlined mt-1 text-ink-mute transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
              </Link>
            </FadeIn>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 pb-8 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHead eyebrow="FAQ" lines={["AI agency in UP,", <span key="a" className="serif-accent">answered.</span>]} />
          <FadeIn className="mt-8">
            <address className="lux-card block !rounded-3xl p-6 not-italic">
              <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-mute">Visit or call</p>
              <p className="mt-3 text-[17px] font-semibold">{BUSINESS.name}</p>
              <p className="text-ink-soft">{addressLine()}</p>
              <p className="mt-3">
                <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="font-semibold text-violet">{BUSINESS.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${BUSINESS.email}`} className="text-ink-soft hover:text-violet">{BUSINESS.email}</a>
              </p>
            </address>
          </FadeIn>
        </div>
        <FadeIn className="lg:col-span-8">
          <Faq items={FAQS} />
        </FadeIn>
      </section>

      <KineticBand words={["Lucknow", "Kanpur", "Noida", "Varanasi", "Prayagraj", "Agra"]} />

      <CtaBand title={<>Let&apos;s put AI to work for your <span className="font-serif font-normal italic">UP business.</span></>} />
    </>
  );
}
