export type Project = {
  slug: string;
  name: string;
  url: string;
  industry: string;
  kind: string;
  blurb: string;
  tags: string[];
  image: string;
  /** Accent used for the card's glow — taken from the client's own palette. */
  tone: string;
  /** Real client quote. Leave undefined until the client has approved one. */
  quote?: { text: string; author: string; role: string };
};

export const FEATURED: Project[] = [
  {
    slug: "launchos",
    name: "launchOS",
    url: "https://www.launchos.co.in",
    industry: "AI SaaS · Startups",
    kind: "AI SaaS platform",
    blurb:
      "An AI operating system for founders: one line of startup idea runs through ten engines — niche, validation, MVP scope, pricing, outreach, competitors and investor readiness. We shipped the marketing site, accounts, project dashboard and credit-based subscriptions.",
    tags: ["SaaS", "AI", "Next.js", "Subscriptions"],
    image: "/work/launchos.jpg",
    tone: "#2f5bff",
  },
  {
    slug: "pool-softwarehub",
    name: "Software Hub",
    url: "https://pool.softwarehub.tech/market",
    industry: "Marketplace · Digital goods",
    kind: "Two-sided marketplace",
    blurb:
      "A marketplace for software subscriptions, activation keys, game top-ups and gift cards from verified sellers — delivered instantly and held in escrow until the buyer confirms. Includes bundles, shareable multi-tool passes and a full reseller portal with API access.",
    tags: ["Marketplace", "Escrow", "Reseller portal"],
    image: "/work/pool-softwarehub.jpg",
    tone: "#fd9910",
  },
  {
    slug: "aandreamelie",
    name: "Aandré Amelie",
    url: "https://www.aandreamelie.com",
    industry: "Beauty · Organic skincare",
    kind: "Custom e-commerce",
    blurb:
      "A custom Next.js storefront for a handmade organic skincare house — cinematic product hero, editorial brand story, shop-by-concern, wishlist, profiles, checkout and WhatsApp support.",
    tags: ["E-commerce", "Next.js", "D2C"],
    image: "/work/aandreamelie.jpg",
    tone: "#b0485f",
  },
  {
    slug: "kusho",
    name: "Kusho",
    url: "https://kusho.vercel.app",
    industry: "D2C · Sleep & comfort",
    kind: "Premium storefront",
    blurb:
      "A calm, premium storefront for an Indian comfort brand — cinematic video hero, shop-by-need navigation, interactive before/after comparison, reviews carousel and WhatsApp expert support.",
    tags: ["E-commerce", "Shopify", "D2C"],
    image: "/work/kusho.jpg",
    tone: "#8a6a45",
  },
  {
    slug: "aarc",
    name: "AARC Smart Bookkeeping",
    url: "https://www.aarcbookkeeping.com",
    industry: "Finance · Professional services",
    kind: "Lead-gen website",
    blurb:
      "A trustworthy lead-generation site for a US bookkeeping firm serving small businesses and self-employed professionals — services, pricing, credentials and a free-consultation booking flow.",
    tags: ["Website", "Lead gen", "Finance"],
    image: "/work/aarc-bookkeeping.jpg",
    tone: "#c89b3c",
  },
];

export const MORE_WORK: Project[] = [
  {
    slug: "aether-dental",
    name: "Aether Dental + AI Bot",
    url: "https://phenomenal-cascaron-982e78.netlify.app/",
    industry: "Healthcare",
    kind: "Clinic site + AI assistant",
    blurb: "A luxury dental clinic experience with an embedded AI assistant for patient questions and online booking.",
    tags: ["AI chatbot", "Booking"],
    image: "/work/dentist-ai.jpg",
    tone: "#c9a15a",
  },
  {
    slug: "inquiryboost",
    name: "InquiryBoost — WFA AI System",
    url: "https://inquiryboost.vercel.app/",
    industry: "Education",
    kind: "Automation product",
    blurb: "A WhatsApp admission-automation product for schools and institutes, with its own high-converting sales page.",
    tags: ["WhatsApp AI", "Automation"],
    image: "/work/inquiryboost.jpg",
    tone: "#22a35a",
  },
  {
    slug: "laptop-house",
    name: "Laptop House",
    url: "https://laptophouse-knp.vercel.app",
    industry: "Retail",
    kind: "Local business website",
    blurb: "A bilingual (English/Hindi) storefront for Kanpur's long-running laptop retailer and repair centre.",
    tags: ["Website", "Local SEO"],
    image: "/work/laptop-house.jpg",
    tone: "#f5a524",
  },
  {
    slug: "pagani",
    name: "Pagani Experience",
    url: "https://stately-seahorse-c66817.netlify.app/",
    industry: "Automotive concept",
    kind: "3D storytelling",
    blurb: "An interactive, cinematic scroll experience built as a luxury automotive showcase.",
    tags: ["3D", "Motion"],
    image: "/work/pagani.jpg",
    tone: "#e0e0e0",
  },
];
