"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { LogoMark, Wordmark } from "./Logo";
import Magnetic from "./motion/Magnetic";
import { CALENDLY, EMAIL, WHATSAPP } from "./links";
import { BUSINESS, addressLine } from "@/lib/site";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/software", label: "Custom Software & SaaS" },
      { href: "/ai-agents", label: "AI Chat & Voice Agents" },
      { href: "/automation", label: "Business Automation" },
      { href: "/software#growth", label: "Meta Ads & Creatives" },
    ],
  },
  {
    title: "Studio",
    links: [
      { href: "/work", label: "Work" },
      { href: "/about", label: "About" },
      { href: "/insights", label: "Insights" },
      { href: "/contact", label: "Contact" },
      { href: "/ai-agency-uttar-pradesh", label: "AI agency in Uttar Pradesh" },
      { href: "/vaslix-ai", label: "Vaslix AI · soon" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: WHATSAPP, label: "WhatsApp" },
      { href: CALENDLY, label: "Book a call" },
      { href: "https://www.linkedin.com/company/vaslix", label: "LinkedIn" },
      { href: "https://clutch.co/profile/vaslix", label: "Clutch" },
    ],
  },
];

function IndiaClock() {
  const [now, setNow] = useState<string | null>(null);
  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(new Date());
    setNow(fmt());
    const t = setInterval(() => setNow(fmt()), 30_000);
    return () => clearInterval(t);
  }, []);
  return <span className="tabular-nums">{now ?? "--:--"} IST</span>;
}

export default function LuxFooter() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const markY = useTransform(scrollYProgress, [0.3, 1], ["40%", "0%"]);
  const glow = useTransform(scrollYProgress, [0.2, 1], [0.2, 1]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <footer ref={ref} className="relative isolate overflow-hidden border-t border-line bg-paper">
      {/* aurora glow rising from the bottom */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[70%]"
        style={{
          opacity: reduced ? 1 : glow,
          background:
            "radial-gradient(60% 70% at 50% 100%, rgba(91,61,245,0.28), transparent 70%), radial-gradient(35% 50% at 15% 100%, rgba(167,139,250,0.3), transparent 70%), radial-gradient(35% 50% at 85% 100%, rgba(58,34,199,0.22), transparent 70%)",
        }}
      />
      <div aria-hidden="true" className="lux-grid -z-10 opacity-70" />

      {/* Big CTA */}
      <div className="mx-auto max-w-6xl px-6 pt-24 sm:px-8 lg:pt-32">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="lux-eyebrow">Start a project</p>
            <h2 className="display mt-5 text-[clamp(44px,7vw,104px)] font-bold">
              Have an idea?
              <br />
              <span className="serif-accent">Let&apos;s build it.</span>
            </h2>
          </div>
          <Magnetic strength={0.4}>
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative grid h-40 w-40 shrink-0 place-items-center rounded-full bg-ink text-center text-[15px] font-semibold text-white shadow-[0_30px_60px_-20px_rgba(17,14,36,0.6)] transition-colors duration-500 hover:bg-violet sm:h-48 sm:w-48"
            >
              <span className="relative z-10 flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-[28px] transition-transform duration-500 group-hover:-rotate-45" aria-hidden="true">arrow_forward</span>
                Book a discovery call
              </span>
            </a>
          </Magnetic>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-y border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={copy}
            className="group flex items-center gap-3 text-left text-[clamp(20px,2.4vw,30px)] font-semibold tracking-[-0.02em] transition-colors hover:text-violet"
            aria-label={`Copy ${EMAIL}`}
          >
            {EMAIL}
            <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink-mute transition-colors group-hover:border-violet group-hover:text-violet">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">{copied ? "check" : "content_copy"}</span>
            </span>
            <span className={`text-[14px] font-medium text-violet transition-opacity ${copied ? "opacity-100" : "opacity-0"}`} aria-live="polite">
              {copied ? "Copied" : ""}
            </span>
          </button>
          <div className="flex items-center gap-5 text-[14px] text-ink-mute">
            <span className="flex items-center gap-2 rounded-full border border-line bg-paper/80 px-4 py-2 font-medium text-ink">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#22c55e] opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
              </span>
              Available for new projects
            </span>
            <span className="hidden sm:inline">
              Lucknow · <IndiaClock />
            </span>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Vaslix home">
            <LogoMark size={40} />
            <Wordmark className="text-[21px]" />
          </Link>
          <p className="mt-5 max-w-xs leading-relaxed text-ink-mute">
            AI agency in Lucknow, Uttar Pradesh — custom software and AI automation for brands across UP, India and worldwide.
          </p>
          <address className="mt-6 space-y-1 text-[14px] not-italic leading-relaxed text-ink-soft">
            <span className="flex items-start gap-2">
              <span className="material-symbols-outlined mt-0.5 text-[18px] text-violet" aria-hidden="true">location_on</span>
              <span>{addressLine()}</span>
            </span>
            <a href={`tel:${BUSINESS.phone.replace(/-/g, "")}`} className="flex items-center gap-2 hover:text-violet">
              <span className="material-symbols-outlined text-[18px] text-violet" aria-hidden="true">call</span>
              {BUSINESS.phoneDisplay}
            </a>
          </address>
        </div>
        {COLUMNS.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-[12px] font-bold uppercase tracking-[0.16em] text-ink-mute">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => {
                const cls = "group inline-flex items-center gap-1.5 text-[15px] font-medium text-ink transition-colors hover:text-violet";
                const inner = (
                  <>
                    <span className="relative">
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-violet transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </>
                );
                return (
                  <li key={l.label}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href} className={cls}>{inner}</Link>
                    ) : (
                      <a href={l.href} target="_blank" rel="noopener noreferrer" className={cls}>
                        {inner}
                        <span className="material-symbols-outlined text-[14px] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true">north_east</span>
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>

      {/* Giant wordmark rising on scroll */}
      <div className="relative overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="lux-wordmark select-none text-center will-change-transform"
          style={reduced ? undefined : { y: markY }}
        >
          Vaslix
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-3 px-6 pb-8 text-[13px] text-ink-mute sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <span>© {new Date().getFullYear()} Vaslix. All rights reserved.</span>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center gap-2 self-start font-medium text-ink transition-colors hover:text-violet sm:self-auto"
        >
          Back to top
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_upward</span>
        </button>
      </div>
    </footer>
  );
}
