import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FadeIn from "@/components/lux/FadeIn";
import RevealLines from "@/components/lux/motion/RevealLines";
import CtaBand from "@/components/lux/sections/CtaBand";
import ArticleToc from "@/components/lux/sections/ArticleToc";
import ParallaxImage from "@/components/lux/sections/ParallaxImage";
import { ARTICLES, getArticle } from "@/content/insights";
import { BUSINESS, SITE_URL } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  const url = `${SITE_URL}/insights/${a.slug}`;
  return {
    title: a.title,
    description: a.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: a.title,
      description: a.description,
      url,
      publishedTime: a.published,
      authors: [BUSINESS.founder],
      images: [`/insights/${a.slug}-og.jpg`],
    },
    twitter: { card: "summary_large_image", images: [`/insights/${a.slug}-og.jpg`] },
  };
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const url = `${SITE_URL}/insights/${a.slug}`;
  const related = ARTICLES.filter((x) => x.slug !== a.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: a.title,
        description: a.description,
        image: `${SITE_URL}/insights/${a.slug}-og.jpg`,
        datePublished: a.published,
        dateModified: a.published,
        author: { "@type": "Person", name: BUSINESS.founder },
        publisher: { "@id": `${SITE_URL}/#organization` },
        mainEntityOfPage: url,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${SITE_URL}/insights` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="mx-auto max-w-5xl px-6 pt-32 sm:px-8 sm:pt-36">
          <FadeIn hero>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[13px] text-ink-mute">
              <Link href="/insights" className="hover:text-violet">Insights</Link>
              <span aria-hidden="true">/</span>
              <span className="font-semibold text-violet">{a.category}</span>
            </nav>
          </FadeIn>
          <RevealLines hero as="h1" className="display mt-5 max-w-4xl text-[clamp(38px,5.4vw,72px)] font-bold" lines={[a.title]} />
          <FadeIn hero delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] text-ink-mute">
              <span className="flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[12px] font-bold text-white">TS</span>
                <span className="font-semibold text-ink">{BUSINESS.founder}</span>
              </span>
              <time dateTime={a.published}>{fmt(a.published)}</time>
              <span>{a.readMins} min read</span>
            </div>
          </FadeIn>
        </header>

        <FadeIn hero delay={300} className="mx-auto mt-10 max-w-6xl px-4 sm:px-8">
          <ParallaxImage src={`/insights/${a.slug}.webp`} alt={a.title} priority className="aspect-[16/9] rounded-[28px] border border-white shadow-[0_30px_60px_-30px_rgba(58,34,199,0.45)] sm:rounded-[36px]" />
        </FadeIn>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <aside className="hidden lg:col-span-3 lg:block">
            <ArticleToc items={a.sections.map(({ id, heading }) => ({ id, heading }))} />
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            <FadeIn>
              <div className="rounded-[24px] border border-line bg-[color-mix(in_oklab,#5b3df5_7%,#ffffff)] p-6 sm:p-8">
                <p className="lux-eyebrow">Key takeaways</p>
                <ul className="mt-4 space-y-3">
                  {a.takeaways.map((t) => (
                    <li key={t} className="flex gap-3 text-[16px] leading-[1.6] text-ink-soft">
                      <span className="material-symbols-outlined mt-0.5 text-[20px] text-violet" aria-hidden="true">check_circle</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {a.sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28 pt-14">
                <FadeIn>
                  <h2 className="text-[clamp(24px,2.6vw,32px)] font-bold tracking-[-0.025em]">{s.heading}</h2>
                </FadeIn>
                {s.paragraphs.map((p, i) => (
                  <FadeIn key={i} delay={60}>
                    <p className="mt-5 text-[18px] leading-[1.8] text-ink-soft">{p}</p>
                  </FadeIn>
                ))}
                {s.bullets && (
                  <ul className="mt-6 space-y-3">
                    {s.bullets.map((b, i) => {
                      const [lead, ...rest] = b.split(" — ");
                      return (
                        <FadeIn as="li" key={b} delay={i * 50} className="flex gap-4 rounded-2xl border border-line bg-paper p-4 text-[16.5px] leading-[1.65] text-ink-soft">
                          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lilac text-[12px] font-bold text-violet">{i + 1}</span>
                          <span>
                            {rest.length ? (
                              <>
                                <strong className="font-semibold text-ink">{lead}</strong> — {rest.join(" — ")}
                              </>
                            ) : (
                              b
                            )}
                          </span>
                        </FadeIn>
                      );
                    })}
                  </ul>
                )}
              </section>
            ))}

            <FadeIn className="mt-14">
              <Link href={a.cta.href} className="lux-btn lux-btn-primary">
                {a.cta.label}
                <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </article>

      <section className="bg-paper py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <p className="lux-eyebrow">Keep reading</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((r, i) => (
              <FadeIn key={r.slug} delay={i * 80}>
                <Link href={`/insights/${r.slug}`} className="lux-card group flex h-full flex-col overflow-hidden !bg-pearl sm:flex-row">
                  <div className="aspect-[16/9] overflow-hidden sm:aspect-auto sm:w-[45%]">
                    <img src={`/insights/${r.slug}.webp`} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="text-[12px] font-bold uppercase tracking-[0.14em] text-violet">{r.category}</span>
                    <h3 className="mt-2 text-[19px] font-bold leading-[1.3] tracking-[-0.02em] group-hover:text-violet">{r.title}</h3>
                    <span className="mt-auto pt-4 text-[13px] text-ink-mute">{r.readMins} min read</span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
