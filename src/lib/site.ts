// Single source of truth for business identity (NAP), used by metadata,
// JSON-LD and the footer. Keep this identical to the Google Business Profile.

export const SITE_URL = "https://www.vaslix.com";

export const BUSINESS = {
  name: "Vaslix",
  legalName: "Vaslix",
  tagline: "AI Agency — Custom Software & AI Automation",
  email: "hello@vaslix.com",
  phone: "+91-9453283929",
  phoneDisplay: "+91 94532 83929",
  founder: "Tasmiya Siddiqui",
  address: {
    country: "IN",
    countryName: "India",
  },
  areaServed: ["India", "Worldwide"],
  sameAs: [
    "https://www.linkedin.com/company/vaslix",
    "https://clutch.co/profile/vaslix",
    "https://www.goodfirms.co/company/vaslix",
  ],
};

export const addressLine = () => BUSINESS.address.countryName;

// Site-wide structured data: Organization + LocalBusiness + WebSite.
export function siteJsonLd() {
  const a = BUSINESS.address;
  const postal = { "@type": "PostalAddress", addressCountry: a.country };
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: BUSINESS.name,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        email: BUSINESS.email,
        telephone: BUSINESS.phone,
        address: postal,
        founder: { "@type": "Person", name: BUSINESS.founder, jobTitle: "Founder & AI Strategist" },
        sameAs: BUSINESS.sameAs,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#localbusiness`,
        name: `${BUSINESS.name} — AI Agency`,
        url: SITE_URL,
        image: `${SITE_URL}/og.png`,
        logo: `${SITE_URL}/logo.png`,
        description:
          "Vaslix is an AI agency building custom software, SaaS platforms, AI WhatsApp and voice agents, and business automation for companies in India and worldwide.",
        telephone: BUSINESS.phone,
        email: BUSINESS.email,
        address: postal,
        areaServed: [
          { "@type": "Country", name: "India" },
          { "@type": "Place", name: "Worldwide" },
        ],
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
        knowsAbout: [
          "Artificial intelligence",
          "AI agents",
          "WhatsApp chatbots",
          "AI voice agents",
          "Business process automation",
          "Custom software development",
          "SaaS development",
          "CRM automation",
          "Lead generation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI & software services",
          itemListElement: [
            "AI WhatsApp chatbots",
            "AI voice calling agents",
            "Website AI chatbots",
            "Business & CRM automation",
            "Custom software & SaaS development",
            "Premium websites & 3D web experiences",
          ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
        },
        sameAs: BUSINESS.sameAs,
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BUSINESS.name,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
    ],
  };
}
