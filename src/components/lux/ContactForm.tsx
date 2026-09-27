"use client";

import { useState, type FormEvent } from "react";

// No backend yet: compose the inquiry into the visitor's mail client.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const message = String(data.get("message") ?? "");
    const body = `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\n${message}`;
    window.location.href = `mailto:hello@vaslix.in?subject=${encodeURIComponent(
      `Strategy briefing — ${company || name}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form onSubmit={onSubmit} className="lux-card p-7 sm:p-10">
      <h3 className="text-2xl font-bold tracking-[-0.02em]">Request a strategy briefing</h3>
      <p className="mt-2 text-ink-mute">Tell us where you&apos;re losing time.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="cf-name" className="text-[13px] font-semibold text-ink-soft">Full name</label>
          <input id="cf-name" name="name" required autoComplete="name" className="lux-field" placeholder="Jane Carter" />
        </div>
        <div className="space-y-2">
          <label htmlFor="cf-email" className="text-[13px] font-semibold text-ink-soft">Business email</label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className="lux-field" placeholder="jane@company.com" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="cf-company" className="text-[13px] font-semibold text-ink-soft">Company</label>
          <input id="cf-company" name="company" autoComplete="organization" className="lux-field" placeholder="Company name" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="cf-message" className="text-[13px] font-semibold text-ink-soft">What would you like to automate?</label>
          <textarea id="cf-message" name="message" rows={4} className="lux-field resize-none" placeholder="e.g. qualify WhatsApp leads and book calls automatically" />
        </div>
      </div>

      <button type="submit" className="lux-btn lux-btn-primary mt-8 w-full">
        {sent ? "Opening your email app…" : "Send briefing request"}
        <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
      </button>
    </form>
  );
}
