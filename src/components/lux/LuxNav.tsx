"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { CALENDLY, NAV, SERVICES } from "./links";
import { LogoMark, Wordmark } from "./Logo";
import { FEATURED } from "./work";

const featured = FEATURED[0];

export default function LuxNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Read scroll once per frame (framer batches it) and only touch React state
  // when the threshold actually flips — a raw scroll listener re-rendered the
  // whole nav on every scroll event.
  const { scrollY } = useScroll();
  const scrolledRef = useRef(false);
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    if (next !== scrolledRef.current) {
      scrolledRef.current = next;
      setScrolled(next);
    }
  });

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMega(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mega]);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMega(false), 160);
  };

  const inServices = SERVICES.some((s) => pathname.startsWith(s.href));
  const activeKey = inServices ? "services" : NAV.find((l) => pathname.startsWith(l.href))?.href ?? null;
  const pill = hover ?? activeKey;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4">
      <nav
        aria-label="Primary"
        className={`relative mx-auto flex max-w-6xl items-center justify-between rounded-full py-2 pl-2.5 pr-2 transition-all duration-500 ${
          scrolled || open || mega ? "lux-nav-glass" : "bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-2.5 rounded-full pr-2" aria-label="Vaslix home">
          <LogoMark size={34} className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />
          <Wordmark className="text-[23px] text-ink" />
        </Link>

        <ul className="hidden items-center lg:flex" onPointerLeave={() => setHover(null)}>
          <li className="relative" onPointerEnter={openMega} onPointerLeave={closeMega}>
            {pill === "services" && (
              <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-lilac" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
            )}
            <button
              type="button"
              aria-expanded={mega}
              aria-controls="lux-mega"
              onClick={() => setMega((v) => !v)}
              onPointerEnter={() => setHover("services")}
              className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                inServices || hover === "services" || mega ? "text-violet" : "text-ink-soft"
              }`}
            >
              Services
              <motion.span className="material-symbols-outlined text-[18px]" animate={{ rotate: mega ? 180 : 0 }} transition={{ duration: 0.3 }} aria-hidden="true">
                expand_more
              </motion.span>
            </button>
          </li>
          {NAV.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <li key={l.href} className="relative">
                {pill === l.href && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 rounded-full bg-lilac" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                )}
                <Link
                  href={l.href}
                  onPointerEnter={() => setHover(l.href)}
                  aria-current={active ? "page" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-[14px] font-medium transition-colors ${
                    active || hover === l.href ? "text-violet" : "text-ink-soft"
                  }`}
                >
                  {l.label}
                  {l.badge && (
                    <span className="ml-1.5 rounded-full bg-violet px-1.5 py-0.5 align-[2px] text-[9px] font-bold uppercase tracking-wider text-white">
                      {l.badge}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary !min-h-[44px] !px-5 !text-[14px] hidden sm:inline-flex">
            Book a call
            <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-line bg-white/80 text-ink lg:hidden"
            aria-expanded={open}
            aria-controls="lux-mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{open ? "close" : "menu"}</span>
          </button>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {mega && (
            <motion.div
              id="lux-mega"
              className="absolute left-0 right-0 top-[calc(100%+10px)] hidden lg:block"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onPointerEnter={openMega}
              onPointerLeave={closeMega}
            >
              <div className="grid grid-cols-[1.4fr_1fr] overflow-hidden rounded-[28px] border border-white bg-white/95 shadow-[0_40px_80px_-30px_rgba(58,34,199,0.35)]">
                <div className="p-6">
                  <p className="border-b border-line pb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-mute">What we build</p>
                  <ul className="mt-3 space-y-1">
                    {SERVICES.map((s, i) => (
                      <motion.li key={s.href} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.05 }}>
                        <Link href={s.href} className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-pearl">
                          <span className="lux-icon !h-12 !w-12 !rounded-2xl">
                            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{s.icon}</span>
                          </span>
                          <span className="flex-1">
                            <span className="block text-[16px] font-semibold text-ink group-hover:text-violet">{s.label}</span>
                            <span className="block text-[13px] text-ink-mute">{s.desc}</span>
                          </span>
                          <span className="material-symbols-outlined text-[18px] text-ink-mute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" aria-hidden="true">arrow_forward</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <Link href="/work" className="group flex flex-col bg-pearl p-6">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-mute">Latest work</p>
                  <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-white">
                    <img src={featured.image} alt="" className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <p className="mt-4 text-[16px] font-semibold text-ink">{featured.name}</p>
                  <p className="text-[13px] text-ink-mute">{featured.kind}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-violet">
                    See all projects
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1" aria-hidden="true">chevron_right</span>
                  </span>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="lux-mobile-menu"
            className="lux-glass mx-auto mt-3 max-h-[calc(100svh-110px)] max-w-6xl overflow-y-auto rounded-3xl p-3 lg:hidden"
            initial={{ opacity: 0, y: -12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="px-4 pt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-mute">Services</p>
            <ul className="mt-1 flex flex-col">
              {SERVICES.map((s, i) => (
                <motion.li key={s.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 + i * 0.04 }}>
                  <Link
                    href={s.href}
                    className={`flex min-h-[56px] items-center gap-3 rounded-2xl px-4 ${pathname.startsWith(s.href) ? "bg-lilac text-violet" : "text-ink hover:bg-lilac"}`}
                  >
                    <span className="material-symbols-outlined text-[20px] text-violet" aria-hidden="true">{s.icon}</span>
                    <span className="text-[17px] font-semibold">{s.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mx-4 my-2 h-px bg-line" />
            <ul className="flex flex-col">
              {NAV.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.17 + i * 0.04 }}>
                  <Link
                    href={l.href}
                    className={`flex min-h-[52px] items-center justify-between rounded-2xl px-4 text-[17px] font-semibold ${
                      pathname.startsWith(l.href) ? "bg-lilac text-violet" : "text-ink hover:bg-lilac"
                    }`}
                  >
                    <span>
                      {l.label}
                      {l.badge && <span className="ml-2 rounded-full bg-violet px-2 py-0.5 align-[3px] text-[10px] font-bold uppercase tracking-wider text-white">{l.badge}</span>}
                    </span>
                    <span className="material-symbols-outlined text-[18px] text-ink-mute" aria-hidden="true">arrow_forward</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <a href={CALENDLY} target="_blank" rel="noopener noreferrer" className="lux-btn lux-btn-primary mt-2 w-full">
              Book a discovery call
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
