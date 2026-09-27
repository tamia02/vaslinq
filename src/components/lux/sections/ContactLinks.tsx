import FadeIn from "../FadeIn";
import { CALENDLY, EMAIL, WHATSAPP } from "../links";

export default function ContactLinks() {
  return (
    <ul className="mt-10 space-y-3">
      {[
        { icon: "mail", k: "Email us", v: EMAIL, href: `mailto:${EMAIL}` },
        { icon: "calendar_month", k: "Schedule a call", v: "Quick discovery call", href: CALENDLY },
        { icon: "chat", k: "WhatsApp", v: "+91 94532 83929", href: WHATSAPP },
      ].map((c, i) => (
        <FadeIn as="li" key={c.k} delay={i * 80}>
          <a
            href={c.href}
            {...(c.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="group flex items-center gap-5 rounded-2xl border border-transparent p-3 transition-colors hover:border-line hover:bg-paper"
          >
            <span className="lux-icon !h-12 !w-12 !rounded-2xl">
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">{c.icon}</span>
            </span>
            <span>
              <span className="block text-[12px] font-bold uppercase tracking-[0.14em] text-ink-mute">{c.k}</span>
              <span className="block text-[18px] font-semibold">{c.v}</span>
            </span>
          </a>
        </FadeIn>
      ))}
    </ul>
  );
}
