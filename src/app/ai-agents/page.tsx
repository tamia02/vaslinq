import { Metadata } from "next";
import KineticBand from "@/components/lux/motion/KineticBand";
import PageHero from "@/components/lux/sections/PageHero";
import SectionHead from "@/components/lux/sections/SectionHead";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import ChatDemo from "@/components/lux/demos/ChatDemo";
import VoiceDemo from "@/components/lux/demos/VoiceDemo";
import Magnetic from "@/components/lux/motion/Magnetic";
import StickyStack, { type StackItem } from "@/components/lux/sections/StickyStack";
import { MockBooking, MockChat, MockDashboard } from "@/components/lux/demos/Mocks";
import { CALENDLY } from "@/components/lux/links";

export const metadata: Metadata = {
  title: "AI Chat & Voice Agents for Business",
  description:
    "Human-like AI voice agents, WhatsApp chatbots and website assistants that answer customers, qualify leads and book appointments 24/7 in Hindi, English, Arabic and more.",
  alternates: { canonical: "https://www.vaslix.com/ai-agents" },
};

const WA_FEATURES = ["LLM trained on your business", "CRM syncing", "Voice note support", "Multi-language"];
const VOICE_FEATURES = [
  { icon: "mic", text: "Human-like AI voice & conversations" },
  { icon: "event_available", text: "Books appointments & handles support" },
  { icon: "sync_alt", text: "Real-time lead tracking & CRM sync" },
];
const WEB_FEATURES = [
  { icon: "search", text: "Product recommendation" },
  { icon: "help", text: "FAQ automation" },
  { icon: "leaderboard", text: "Lead capture" },
  { icon: "calendar_month", text: "Appointment booking" },
];

const INDUSTRIES: StackItem[] = [
  {
    eyebrow: "Real estate",
    title: "Qualify every property lead in seconds.",
    desc: "Your agent replies the moment an enquiry lands, captures budget and location, and books site visits straight into your team's calendar.",
    chips: [
      { icon: "home_work", label: "Budget & location capture" },
      { icon: "event_available", label: "Site-visit booking" },
      { icon: "database", label: "CRM sync" },
      { icon: "notifications_active", label: "Follow-up nudges" },
    ],
    tone: "#ece8ff",
    visual: (
      <MockChat
        title="Property assistant"
        lines={[
          { from: "user", text: "Looking for a 3BHK near the metro" },
          { from: "bot", text: "Great choice! What's your budget range and preferred move-in month?" },
          { from: "user", text: "Around 1.2 Cr, by March" },
          { from: "bot", text: "I have 4 matches. Shall I book a site visit this Saturday at 11 AM?" },
        ]}
      />
    ),
  },
  {
    eyebrow: "Clinics & healthcare",
    title: "Never miss a patient call again.",
    desc: "A voice agent picks up after hours and during rush, answers routine questions and books appointments in the patient's own language.",
    chips: [
      { icon: "call", label: "After-hours calls" },
      { icon: "calendar_month", label: "Appointment booking" },
      { icon: "translate", label: "Regional languages" },
      { icon: "help", label: "FAQ answers" },
    ],
    tone: "#fde4f2",
    visual: <MockBooking title="Dr. Mehta · Dental clinic" slots={["Tomorrow · 10:30 AM · Booked", "Tomorrow · 12:00 PM", "Friday · 4:15 PM"]} />,
  },
  {
    eyebrow: "Education",
    title: "Admissions that answer at midnight.",
    desc: "Parents ask about fees, hostels and timings at all hours. Your agent answers in English or Hinglish and hands serious leads to a counsellor.",
    chips: [
      { icon: "school", label: "Fee & hostel queries" },
      { icon: "chat", label: "Hinglish conversations" },
      { icon: "support_agent", label: "Counsellor handoff" },
      { icon: "star", label: "Lead scoring" },
    ],
    tone: "#e3f6d0",
    visual: (
      <MockChat
        title="Admissions desk"
        lines={[
          { from: "user", text: "class 6 admission open hai?" },
          { from: "bot", text: "Haan ji! Admissions for Class VI are open. Day scholar ya hostel?" },
          { from: "user", text: "hostel, fees kitni hai" },
          { from: "bot", text: "I've shared the full fee sheet. Want a campus visit this week?" },
        ]}
      />
    ),
  },
  {
    eyebrow: "E-commerce & D2C",
    title: "A shop assistant that actually sells.",
    desc: "Recommends products, answers order questions and recovers abandoned carts on WhatsApp — while your dashboard shows exactly what it earned.",
    chips: [
      { icon: "shopping_bag", label: "Product recommendations" },
      { icon: "local_shipping", label: "Order status" },
      { icon: "remove_shopping_cart", label: "Cart recovery" },
      { icon: "forum", label: "WhatsApp support" },
    ],
    tone: "#ffecd6",
    visual: <MockDashboard title="Assistant performance" />,
  },
];

export default function AiAgentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    provider: { "@type": "Organization", name: "Vaslix", url: "https://www.vaslix.com" },
    name: "AI Chatbots & Voice Agents",
    description:
      "Smart WhatsApp chatbots and human-like AI voice agents for inbound/outbound calls, CRM syncing and multi-language support.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        eyebrow="AI Agents"
        shape="crystal"
        sceneLabel="Faceted glass crystal representing an AI agent"
        lines={["Agents that answer,", "qualify and book", <span key="a" className="serif-accent">around the clock.</span>]}
        sub="WhatsApp, voice and website agents trained on your business. They reply instantly, speak your customers' language and hand your team only the conversations that matter."
      >
        <Magnetic>
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary">
            Get your AI agent
            <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
        </Magnetic>
      </PageHero>

      <section className="mx-auto max-w-6xl px-4 pt-24 sm:px-8 lg:pt-32">
        <SectionHead
          className="px-2 sm:px-0"
          eyebrow="By industry"
          lines={["Trained for how", <>your customers <span key="a" className="serif-accent">really talk.</span></>]}
          sub="Every agent is built around your business — here's how they work across the industries we serve."
        />
        <div className="mt-14">
          <StickyStack items={INDUSTRIES} />
        </div>
      </section>

      {/* WhatsApp */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div>
          <SectionHead
            eyebrow="01 — WhatsApp"
            lines={["An AI receptionist", <>on <span key="a" className="serif-accent">WhatsApp.</span></>]}
            sub="An assistant trained specifically for your business. It answers FAQs, handles objections, books appointments and collects leads 24/7 — in Hinglish too."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {WA_FEATURES.map((f, i) => (
              <FadeIn as="li" key={f} delay={i * 60} className="flex items-center gap-2 text-[15px] font-medium">
                <span className="material-symbols-outlined text-[20px] text-violet" aria-hidden="true">check_circle</span>
                {f}
              </FadeIn>
            ))}
          </ul>
        </div>
        <FadeIn delay={120}>
          <ChatDemo />
        </FadeIn>
      </section>

      {/* Voice */}
      <section className="bg-paper py-24 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
          <FadeIn className="order-2 lg:order-1">
            <VoiceDemo />
          </FadeIn>
          <div className="order-1 lg:order-2">
            <SectionHead
              eyebrow="02 — Voice"
              lines={["A voice agent", <>that sounds <span key="a" className="serif-accent">human.</span></>]}
              sub="Handles inbound and outbound calls like a real person. Supports Hindi, English, Arabic and regional languages."
            />
            <ul className="mt-8 space-y-4">
              {VOICE_FEATURES.map((f, i) => (
                <FadeIn as="li" key={f.text} delay={i * 70} className="flex items-center gap-4">
                  <span className="lux-icon !h-11 !w-11 !rounded-xl">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">{f.icon}</span>
                  </span>
                  <span className="text-[16px] font-medium">{f.text}</span>
                </FadeIn>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Website chatbot */}
      <section className="mx-auto grid max-w-6xl items-center gap-16 px-6 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
        <div>
          <SectionHead
            eyebrow="03 — Website"
            lines={["A chatbot that", <>actually <span key="a" className="serif-accent">understands.</span></>]}
            sub="Integrated directly into your website and trained on your catalogue and data — it understands intent, recommends products and captures leads."
          />
          <ul className="mt-8 grid grid-cols-2 gap-3">
            {WEB_FEATURES.map((f, i) => (
              <FadeIn as="li" key={f.text} delay={i * 60} className="flex items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 text-[14px] font-medium">
                <span className="material-symbols-outlined text-[20px] text-violet" aria-hidden="true">{f.icon}</span>
                {f.text}
              </FadeIn>
            ))}
          </ul>
        </div>
        <FadeIn delay={120}>
          <div className="lux-card !rounded-[32px] p-6 sm:p-8">
            <div className="flex items-center gap-3 border-b border-line pb-5">
              <span className="lux-icon !h-10 !w-10 !rounded-xl">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">smart_toy</span>
              </span>
              <div>
                <div className="text-[15px] font-semibold">Store assistant</div>
                <div className="text-[12px] text-ink-mute">Trained on your catalogue</div>
              </div>
            </div>
            <div className="space-y-4 pt-6">
              <p className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-tr-sm bg-ink px-4 py-3 text-[14px] text-white">I want chips under ₹100.</p>
              <div className="max-w-[88%] rounded-2xl rounded-tl-sm bg-pearl px-4 py-3 text-[14px] leading-[1.5] text-ink-soft">
                Here are 3 options under ₹100 — the classic salted is our bestseller:
              </div>
              <div className="grid grid-cols-3 gap-3">
                {["Classic Salted", "Masala Magic", "Sour Cream"].map((n, i) => (
                  <div key={n} className="rounded-2xl border border-line bg-paper p-3">
                    <div className="aspect-square rounded-xl bg-gradient-to-br from-lilac to-white" />
                    <div className="mt-2 text-[12px] font-semibold leading-tight">{n}</div>
                    <div className="text-[12px] text-violet">₹{[20, 30, 50][i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      <KineticBand words={["Answer", "Qualify", "Book", "24/7"]} />

      <CtaBand title={<>Ready to hire your first <span className="font-serif font-normal italic">AI employee?</span></>} />
    </>
  );
}
