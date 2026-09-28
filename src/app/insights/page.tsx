import { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/lux/sections/PageHero";
import CtaBand from "@/components/lux/sections/CtaBand";
import FadeIn from "@/components/lux/FadeIn";
import TiltCard from "@/components/fx/TiltCard";
import ParallaxImage from "@/components/lux/sections/ParallaxImage";
import { ARTICLES } from "@/content/insights";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights — AI, Automation & Software Guides",
  description: "Practical guides on AI WhatsApp chatbots, voice agents, automation and custom software — costs, comparisons and implementation, from Vaslix in Lucknow.",
  alternates: { canonical: `${SITE_URL}/insights` },
};

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        lines={["Notes on AI,", <>automation & <span key="a" className="serif-accent">software.</span></>]}
        sub="Practical guides for founders and operators deciding what to automate — and what it really takes."
      />

      <section className="mx-auto max-w-6xl px-6 pt-16 sm:px-8">
        <FadeIn>
          <Link href={`/insights/${featured.slug}`} className="lux-card group grid overflow-hidden lg:grid-cols-12">
            <ParallaxImage src={`/insights/${featured.slug}.webp`} alt={featured.title} className="aspect-[16/9] lg:col-span-7 lg:aspect-auto lg:min-h-[420px]" />
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-5">
              <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-violet">Featured · {featured.category}</span>
              <h2 className="display mt-4 text-[clamp(28px,3vw,40px)] font-bold group-hover:text-violet">{featured.title}</h2>
              <p className="mt-4 leading-[1.7] text-ink-mute">{featured.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-violet">
                Read article · {featured.readMins} min
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
              </span>
            </div>
          </Link>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 pb-24 sm:px-8">
        <ul className="grid gap-6 md:grid-cols-2">
          {rest.map((a, i) => (
            <FadeIn as="li" key={a.slug} delay={i * 90} className="h-full">
              <TiltCard max={4} className="lux-card group h-full overflow-hidden">
                <Link href={`/insights/${a.slug}`} className="flex h-full flex-col">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={`/insights/${a.slug}.webp`} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-violet">{a.category}</span>
                    <h2 className="mt-3 text-[22px] font-bold leading-[1.3] tracking-[-0.02em] group-hover:text-violet">{a.title}</h2>
                    <p className="mt-3 flex-1 leading-[1.6] text-ink-mute">{a.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-violet">
                      Read article · {a.readMins} min
                      <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1" aria-hidden="true">arrow_forward</span>
                    </span>
                  </div>
                </Link>
              </TiltCard>
            </FadeIn>
          ))}
        </ul>
      </section>

      <CtaBand title={<>Rather talk it through? <span className="font-serif font-normal italic">Let&apos;s chat.</span></>} />
    </>
  );
}
