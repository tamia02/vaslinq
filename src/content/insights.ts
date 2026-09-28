export type Section = { id: string; heading: string; paragraphs: string[]; bullets?: string[] };

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  description: string;
  published: string; // ISO date
  readMins: number;
  icon: string;
  takeaways: string[];
  sections: Section[];
  cta: { label: string; href: string };
};

export const ARTICLES: Article[] = [
  {
    slug: "ai-whatsapp-chatbot-cost-india",
    title: "What an AI WhatsApp chatbot really costs",
    category: "Pricing & ROI",
    excerpt: "The real cost drivers behind an AI WhatsApp chatbot — setup, conversations, integrations and upkeep — and how to judge the return.",
    description:
      "How much does an AI WhatsApp chatbot cost in India? A clear breakdown of the cost drivers — setup, WhatsApp conversation fees, integrations, languages and maintenance — and how to measure ROI.",
    published: "2026-09-28",
    readMins: 6,
    icon: "payments",
    takeaways: [
      "Cost is driven by scope — channels, integrations, languages and how much the bot must know.",
      "Meta charges WhatsApp Business conversation fees separately from whoever builds your bot.",
      "Judge it against the leads you currently lose to slow replies, not against zero.",
    ],
    sections: [
      {
        id: "why-no-single-price",
        heading: "Why there's no single price tag",
        paragraphs: [
          "“How much does a WhatsApp chatbot cost?” is a bit like asking what a website costs. A bot that answers ten FAQs is a very different build from one that qualifies leads, checks stock, books appointments and writes everything into your CRM.",
          "So instead of a number, it's more useful to understand what you're actually paying for. Once you know the drivers, you can scope a first version that pays for itself — and grow from there.",
        ],
      },
      {
        id: "cost-drivers",
        heading: "The five things that drive the cost",
        paragraphs: ["Almost every quote you receive will be shaped by these factors:"],
        bullets: [
          "Knowledge — how much the bot must understand: FAQs only, or your full catalogue, fee structures, policies and documents.",
          "Actions — whether it only answers, or also books appointments, creates CRM records, sends payment links or hands off to staff.",
          "Integrations — every system it connects to (CRM, calendar, Google Sheets, your website, payment gateway) adds build and testing work.",
          "Languages — English only, or Hindi and Hinglish too. Multilingual bots need more careful prompt design and testing.",
          "Volume and upkeep — how many conversations it handles, and how often its knowledge needs updating as your business changes.",
        ],
      },
      {
        id: "meta-fees",
        heading: "WhatsApp's own conversation fees",
        paragraphs: [
          "Separate from the build, Meta charges for conversations on the official WhatsApp Business Platform. Rates depend on the conversation category (for example marketing, utility or service) and the customer's country, and Meta updates its pricing from time to time.",
          "For most businesses these fees are modest compared with the value of the conversations — but they should be in your budget from day one, and a good partner will show you how to keep them efficient.",
        ],
      },
      {
        id: "roi",
        heading: "How to think about the return",
        paragraphs: [
          "The right comparison isn't “chatbot vs nothing”. It's “chatbot vs the enquiries we currently answer late, or never.” Parents messaging a school at 11 PM, buyers comparing three property agents, patients calling after clinic hours — every slow reply is a lead that quietly goes elsewhere.",
          "A simple way to estimate value: take the enquiries you receive in a month, estimate how many go unanswered or are answered too late, and multiply by what a converted customer is worth to you. That number usually makes the decision obvious.",
        ],
      },
      {
        id: "start-small",
        heading: "Start focused, then expand",
        paragraphs: [
          "The most cost-effective path is a focused first version: one channel, your most common questions, and one key action — usually qualifying the lead and booking a call or visit. Once it's live and you can see real conversations, you add integrations and languages where they clearly earn their keep.",
          "At Vaslix every project is scoped individually after a free discovery call, with fixed deliverables and no hidden fees.",
        ],
      },
    ],
    cta: { label: "Explore AI agents", href: "/ai-agents" },
  },
  {
    slug: "ai-voice-agent-vs-human-receptionist",
    title: "AI voice agent vs human receptionist",
    category: "Comparison",
    excerpt: "Where AI voice agents beat a front desk, where people are still essential, and why the best setup is usually both.",
    description:
      "AI voice agent or human receptionist? An honest comparison of availability, languages, consistency, empathy and cost — and how clinics, schools and agencies combine both.",
    published: "2026-09-28",
    readMins: 5,
    icon: "record_voice_over",
    takeaways: [
      "AI voice agents shine at availability, consistency and handling many calls at once.",
      "People remain essential for complex, emotional or high-stakes conversations.",
      "The winning setup: AI answers every call, and hands the right ones to your team.",
    ],
    sections: [
      {
        id: "the-real-question",
        heading: "The real question isn't “AI or people”",
        paragraphs: [
          "Most businesses don't lose customers because their receptionist is bad. They lose them because the phone rings when nobody can pick up — after hours, during lunch, when three calls arrive at once.",
          "An AI voice agent is best understood as a way to make sure every call is answered, not as a replacement for your front desk.",
        ],
      },
      {
        id: "where-ai-wins",
        heading: "Where an AI voice agent wins",
        paragraphs: ["Voice agents are strongest at the repetitive, time-sensitive parts of the job:"],
        bullets: [
          "Availability — answers at 2 AM, on Sundays and during holidays.",
          "Capacity — handles many callers at once, so nobody hears a busy tone.",
          "Consistency — gives the same accurate answer about timings, fees or directions every time.",
          "Languages — can switch between English, Hindi and Hinglish mid-conversation.",
          "Instant action — books the appointment and updates your calendar or CRM while still on the call.",
        ],
      },
      {
        id: "where-people-win",
        heading: "Where people are still essential",
        paragraphs: [
          "Some calls need judgment, empathy and authority: an upset customer, a sensitive medical question, a negotiation, a complicated complaint. These are exactly the calls your team should have more time for.",
          "A well-built voice agent recognises these moments and transfers the caller — with a summary — instead of trying to handle everything itself.",
        ],
      },
      {
        id: "cost",
        heading: "Cost: fixed salary vs usage",
        paragraphs: [
          "A receptionist is a fixed monthly cost covering fixed hours. A voice agent's cost is mostly setup plus usage, and it covers every hour of the day.",
          "For many clinics, schools and agencies the best value comes from combining them: the AI handles first response, after-hours and overflow; people handle the conversations that truly need them.",
        ],
      },
      {
        id: "getting-started",
        heading: "A sensible way to start",
        paragraphs: [
          "Start with after-hours and overflow calls. You'll immediately recover calls that used to be missed, without changing anything about how your team works during the day. Then expand to first-line answering once you've heard real conversations.",
        ],
      },
    ],
    cta: { label: "See AI voice agents", href: "/ai-agents" },
  },
  {
    slug: "how-long-does-automation-setup-take",
    title: "How long does automation take to set up?",
    category: "Implementation",
    excerpt: "From discovery call to live system: the stages of an automation project and what decides how fast you go live.",
    description:
      "How long does business automation take to set up? The five stages from discovery to launch, what speeds a project up, and what slows it down.",
    published: "2026-09-28",
    readMins: 5,
    icon: "schedule",
    takeaways: [
      "Focused automations and AI agents typically go live in weeks, not months.",
      "Speed depends mostly on scope, integrations and how quickly feedback comes back.",
      "Launching a focused first version beats waiting for a perfect big-bang system.",
    ],
    sections: [
      {
        id: "short-answer",
        heading: "The short answer",
        paragraphs: [
          "Most focused automation projects — a WhatsApp lead agent connected to your CRM, or an automated follow-up system — go live in a matter of weeks. Larger custom software builds take longer and are planned in phases.",
          "What matters more than the calendar is the path. Here's how a typical project runs.",
        ],
      },
      {
        id: "stages",
        heading: "The five stages",
        paragraphs: ["Every Vaslix project moves through the same stages:"],
        bullets: [
          "Discover — a focused call to map where time and leads are being lost, and what to build first.",
          "Design — a clear blueprint of triggers, AI steps and hand-offs, agreed with your team before building.",
          "Build & train — we engineer the automations and train the AI on your data, tone and FAQs.",
          "Integrate — we connect your CRM, calendar, WhatsApp, email and sheets, and test real scenarios end to end.",
          "Launch & improve — we go live, watch real conversations and keep tuning.",
        ],
      },
      {
        id: "what-speeds-it-up",
        heading: "What speeds a project up",
        paragraphs: ["A few things consistently make projects faster:"],
        bullets: [
          "A clear first goal — “reply to every lead within a minute” beats “automate everything”.",
          "Ready access to tools — logins and API access for your CRM, WhatsApp Business and calendar.",
          "Quick feedback — someone on your side who can review flows and test within a day or two.",
          "Existing content — FAQs, price lists and policies the AI can learn from.",
        ],
      },
      {
        id: "what-slows-it-down",
        heading: "What slows it down",
        paragraphs: [
          "Delays almost always come from scope creep, waiting on third-party approvals (like WhatsApp Business verification), or unclear ownership on the client side. None of these are technical — a good discovery call surfaces them early.",
        ],
      },
      {
        id: "phase-it",
        heading: "Phase it for faster value",
        paragraphs: [
          "Rather than a single large launch, go live with the highest-value automation first, then add the next piece. You start recovering time and leads within weeks, and every later phase is shaped by real usage.",
        ],
      },
    ],
    cta: { label: "Explore automation", href: "/automation" },
  },
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
