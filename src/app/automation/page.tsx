import { Metadata } from "next";
import KineticBand from "@/components/lux/motion/KineticBand";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import FlowDemo from "@/components/lux/demos/FlowDemo";
import TiltCard from "@/components/fx/TiltCard";
import Magnetic from "@/components/lux/motion/Magnetic";
import { CALENDLY } from "@/components/lux/links";
import StepTabs, { type Step } from "@/components/lux/sections/StepTabs";
import OrbitHub from "@/components/lux/sections/OrbitHub";
import PillMarquee from "@/components/lux/sections/PillMarquee";
import { MockBooking, MockChat, MockCode, MockDashboard, MockPipeline } from "@/components/lux/demos/Mocks";

export const metadata: Metadata = {
  title: "Business Automation, CRM & Lead Generation",
  description:
    "Custom AI automation workflows, CRM automation, lead generation pipelines and AI content systems that save time and scale revenue.",
  alternates: { canonical: "https://www.vaslix.com/automation" },
};

const TRACKS = [
  {
    icon: "rocket_launch",
    title: "Sales & marketing",
    items: ["Automated follow-up systems", "Sales pipeline automation", "AI content generation", "Lead management"],
  },
  {
    icon: "settings_suggest",
    title: "Operations & customer success",
    items: ["CRM automation", "Client onboarding systems", "Internal business tools", "Reporting & analytics"],
  },
];

const ENGINES = [
  {
    icon: "person_search",
    title: "Lead generation & data scraping",
    desc: "Targeted lead pipelines using advanced extraction and enrichment across LinkedIn and niche business directories.",
    tags: ["Email scraping", "LinkedIn lead gen", "Lead enrichment", "Niche targeting"],
    image: "/leads.png",
  },
  {
    icon: "auto_awesome",
    title: "AI content generation",
    desc: "Automate social media content, ad creatives and personalised marketing copy that converts.",
    tags: ["Social content", "Ad creatives", "Email campaigns", "Personalised outreach"],
    image: "/ads.png",
  },
];

const STEPS: Step[] = [
  {
    icon: "search_insights",
    title: "Audit your workflow",
    desc: "We map every manual step — where leads wait, where data is re-typed, where follow-ups slip.",
    preview: (
      <MockPipeline
        title="Where time is lost today"
        cols={[
          { name: "Manual", items: ["Copy leads to sheet", "Reply on WhatsApp", "Chase invoices"] },
          { name: "Slow", items: ["Follow-up after 2 days", "Weekly report"] },
          { name: "Automate", items: ["All of it", "Instantly"] },
        ]}
      />
    ),
  },
  {
    icon: "architecture",
    title: "Design the system",
    desc: "A clear blueprint of triggers, AI steps and hand-offs — reviewed with your team before we build.",
    preview: (
      <MockCode
        file="blueprint.flow"
        lines={["on  new_lead(source: any)", "  ai.qualify(budget, need, timeline)", "  crm.upsert(contact, deal)", "  if score > 70 → book_call()", "  else → nurture(7 days)", "  notify(team, summary)"]}
      />
    ),
  },
  {
    icon: "construction",
    title: "Build & train",
    desc: "We engineer the automations and train AI on your data, tone and FAQs.",
    preview: (
      <MockChat
        title="Trained on your business"
        lines={[
          { from: "user", text: "Do you deliver on weekends?" },
          { from: "bot", text: "Yes — Saturday and Sunday, 10 AM to 6 PM. Want me to schedule yours?" },
        ]}
      />
    ),
  },
  {
    icon: "cable",
    title: "Integrate your stack",
    desc: "Connect CRM, calendar, email, WhatsApp and sheets so data lands where your team already works.",
    preview: <MockBooking title="Synced to your calendar" slots={["Discovery call · Booked", "Demo · Pending", "Follow-up · Scheduled"]} />,
  },
  {
    icon: "monitoring",
    title: "Monitor & improve",
    desc: "Live dashboards show what the system is doing — and we keep tuning it as you grow.",
    preview: <MockDashboard title="Automation health" />,
  },
];

const INTEGRATIONS = [
  [
    { icon: "forum", label: "WhatsApp Business" },
    { icon: "mail", label: "Gmail" },
    { icon: "calendar_month", label: "Google Calendar" },
    { icon: "table_chart", label: "Google Sheets" },
    { icon: "database", label: "CRM" },
    { icon: "call", label: "Voice calls" },
  ],
  [
    { icon: "shopping_bag", label: "Shopify" },
    { icon: "account_tree", label: "n8n workflows" },
    { icon: "description", label: "Docs & PDFs" },
    { icon: "campaign", label: "Meta Ads" },
    { icon: "sms", label: "SMS" },
    { icon: "webhook", label: "Webhooks & APIs" },
  ],
  [
    { icon: "psychology", label: "LLMs" },
    { icon: "person_search", label: "LinkedIn lead gen" },
    { icon: "insights", label: "Analytics" },
    { icon: "notifications", label: "Team alerts" },
    { icon: "receipt_long", label: "Invoices" },
    { icon: "language", label: "Website forms" },
  ],
];

export default function AutomationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "Organization", name: "Vaslix", url: "https://www.vaslix.com" },
    name: "Custom AI Automation Systems",
    description:
      "Fully customised automation systems for business workflows, including sales pipelines, CRM automation and AI content generation.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="Automation"
        shape="ring"
        sceneLabel="Glass ring representing a continuous automated loop"
        lines={["Your busywork,", <>running on <span key="a" className="serif-accent">autopilot.</span></>]}
        sub="We build fully customised automation systems around your workflow — from sales pipelines to client onboarding — so manual work stops eating your week."
      >
        <Magnetic>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary">
            Map my automations
            <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
        </Magnetic>
      </PageHero>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow="How it flows"
          lines={["One lead in.", <>Everything else, <span key="a" className="serif-accent">automatic.</span></>]}
          sub="A typical pipeline we deploy — every step tailored to your tools and team."
        />
        <FadeIn className="mt-14">
          <FlowDemo />
        </FadeIn>
      </section>

      <section className="overflow-hidden bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 sm:px-8 lg:grid-cols-2">
          <SectionHead
            eyebrow="One brain, every channel"
            lines={["Everything connected", <>to <span key="a" className="serif-accent">one system.</span></>]}
            sub="Your chat, voice, website, CRM and calendar stop living in silos. We wire them into a single automated brain that never drops a hand-off."
          />
          <FadeIn>
            <OrbitHub />
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="How we automate" lines={["From audit to", <><span key="a" className="serif-accent">autopilot.</span></>]} />
        <FadeIn className="mt-14">
          <StepTabs steps={STEPS} />
        </FadeIn>
      </section>

      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionHead eyebrow="Tailored workflows" lines={["Built for how", <>your team <span key="a" className="serif-accent">really works.</span></>]} />
            </div>
            <FadeIn delay={100} className="lg:col-span-5">
              <div className="lux-card !rounded-3xl p-6">
                <div className="text-[12px] font-bold uppercase tracking-[0.14em] text-ink-mute">Connects with your stack</div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {["CRM", "WhatsApp", "Gmail", "Calendar", "Sheets", "Slack", "Shopify"].map((t) => (
                    <li key={t} className="rounded-full bg-pearl px-3 py-1 text-[13px] font-medium text-ink-soft">{t}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {TRACKS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 100}>
                <TiltCard max={4} className="lux-card group h-full !bg-pearl p-8 sm:p-10">
                  <span className="lux-icon">
                    <span className="material-symbols-outlined text-[28px]" aria-hidden="true">{t.icon}</span>
                  </span>
                  <h3 className="mt-8 text-[24px] font-bold tracking-[-0.02em]">{t.title}</h3>
                  <ul className="mt-6 space-y-3">
                    {t.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-[16px] text-ink-soft">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 sm:px-8 lg:py-32">
        <SectionHead eyebrow="Growth engines" lines={["Pipelines that", <><span key="a" className="serif-accent">fill themselves.</span></>]} />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {ENGINES.map((e, i) => (
            <FadeIn key={e.title} delay={i * 100}>
              <article className="lux-card group h-full overflow-hidden">
                <div className="h-56 overflow-hidden">
                  <img src={e.image} alt="" loading="lazy" className="lux-tint h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                </div>
                <div className="p-8 sm:p-9">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-violet" aria-hidden="true">{e.icon}</span>
                    <h3 className="text-[22px] font-bold tracking-[-0.02em]">{e.title}</h3>
                  </div>
                  <p className="mt-3 leading-[1.65] text-ink-mute">{e.desc}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {e.tags.map((t) => (
                      <li key={t} className="rounded-full border border-line bg-pearl px-3 py-1 text-[12px] font-medium text-ink-soft">{t}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-6">
          <div className="lux-card flex flex-col items-start gap-6 !rounded-3xl p-8 sm:flex-row sm:items-center sm:p-10">
            <span className="lux-icon">
              <span className="material-symbols-outlined text-[28px]" aria-hidden="true">trending_up</span>
            </span>
            <div>
              <h3 className="text-[22px] font-bold tracking-[-0.02em]">Revenue-focused, always</h3>
              <p className="mt-1 text-ink-mute">Every system is built to increase leads, improve conversions and save operational time.</p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SectionHead eyebrow="Integrations" lines={["Works with the tools", <>you <span key="a" className="serif-accent">already use.</span></>]} />
        </div>
        <FadeIn className="mt-12">
          <PillMarquee rows={INTEGRATIONS} />
        </FadeIn>
      </section>

      <KineticBand words={["Capture", "Qualify", "Follow up", "Close"]} />

      <CtaBand title={<>Stop doing work a <span className="font-serif font-normal italic">system</span> should do.</>} />
    </>
  );
}
