export const CALENDLY = "https://calendly.com/tasmiyasiddiqui457/quick-discovery-call";
export const WHATSAPP = "https://wa.me/919453283929";
export const EMAIL = "hello@vaslix.com";

// Vaslix AI (voice-agent SaaS) lives at ai.vaslix.com. Flip AI_APP_LIVE to
// true once the app is deployed: CTAs switch from "join waitlist" to "open app".
export const AI_APP_URL = "https://ai.vaslix.com";
export const AI_APP_LIVE = false;

export const SERVICES = [
  { href: "/software", label: "Custom Software", icon: "deployed_code", desc: "SaaS, marketplaces, e-commerce & 3D web" },
  { href: "/ai-agents", label: "AI Agents", icon: "graphic_eq", desc: "WhatsApp, voice & website agents" },
  { href: "/automation", label: "Automation", icon: "account_tree", desc: "CRM, pipelines, follow-ups & lead gen" },
];

export const NAV: { href: string; label: string; badge?: string }[] = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
  { href: "/vaslix-ai", label: "Vaslix AI", badge: "Soon" },
];
