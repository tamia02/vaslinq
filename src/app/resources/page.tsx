import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageBackdrop from "@/components/fx/PageBackdrop";
import TiltCard from "@/components/fx/TiltCard";
import Reveal from "@/components/fx/Reveal";
import { ScrollProgress, ParallaxFloat, HeroIntro, HeroItem } from "@/components/fx/MotionFx";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources & AI Automation Blog | Vaslix",
  description: "Learn how to leverage AI chatbots, voice agents, and lead generation automation to scale your business.",
  alternates: {
    canonical: 'https://vaslix.com/resources',
  },
};

export default function ResourcesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vaslix.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resources",
            "item": "https://vaslix.com/resources"
          }
        ]
      }
    ]
  };

  const articles = [
    {
      title: "How much does an AI WhatsApp chatbot cost?",
      category: "Pricing & ROI",
      excerpt: "A complete breakdown of setup costs, monthly maintenance, and the ROI you can expect from automating lead qualification.",
      date: "Oct 12, 2026"
    },
    {
      title: "AI Voice Agent vs Human Receptionist",
      category: "Comparison",
      excerpt: "We analyze the operational differences, language capabilities, and cost efficiency of AI voice agents versus traditional front-desk staffing.",
      date: "Oct 05, 2026"
    },
    {
      title: "How long does automation setup take?",
      category: "Implementation",
      excerpt: "From discovery call to deployment: the timeline for building a custom CRM sync and AI lead capture system.",
      date: "Sep 28, 2026"
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="relative overflow-hidden pt-20">
        <ScrollProgress />
        <PageBackdrop />
        <section className="relative py-section-gap px-margin-page overflow-hidden">
          <ParallaxFloat speed={-1} className="absolute -top-40 right-10 w-[600px] h-[600px] -z-10">
            <div className="ambient-blob ambient-violet inset-0"></div>
          </ParallaxFloat>
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <HeroIntro>
              <HeroItem>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md mb-8">
                  <span className="font-bold text-[10px] text-primary tracking-widest uppercase">Blog & Insights</span>
                </div>
              </HeroItem>
              <HeroItem>
                <h1 className="headline-sheen text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tighter">
                  Automation <span className="headline-accent">Resources.</span>
                </h1>
              </HeroItem>
              <HeroItem>
                <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
                  Actionable guides, cost breakdowns, and strategy for scaling with AI infrastructure.
                </p>
              </HeroItem>
            </HeroIntro>
          </div>
        </section>

        <section className="py-section-gap px-margin-page max-w-container-max mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Reveal key={i} delay={i * 100}>
                <TiltCard max={5} className="glass-card p-8 rounded-[32px] border-white/10 flex flex-col h-full group hover:border-primary/40 transition-colors cursor-pointer">
                  <div className="text-xs font-bold text-primary tracking-widest uppercase mb-4">{article.category}</div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">{article.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed flex-1 mb-6">{article.excerpt}</p>
                  <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-auto">
                    <div className="text-xs font-medium text-on-surface-variant">{article.date}</div>
                    <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
