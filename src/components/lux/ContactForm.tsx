"use client";

import { useState, type FormEvent } from "react";

const WA_NUMBER = "919453283929";

// Delivers the brief over WhatsApp (instant, always reaches the team) with the
// details pre-filled. Email is offered as a secondary route.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const compose = (form: HTMLFormElement) => {
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    return [
      "Hi Vaslix! I'd like a strategy briefing.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      company && `Company: ${company}`,
      message && `\nWhat I want to automate:\n${message}`,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(compose(e.currentTarget))}`, "_blank", "noopener");
    setSent(true);
  };

  const viaEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    const form = e.currentTarget.form;
    if (!form || !form.reportValidity()) return;
    window.location.href = `mailto:hello@vaslix.com?subject=${encodeURIComponent("Strategy briefing")}&body=${encodeURIComponent(compose(form))}`;
  };

  return (
    <form onSubmit={onSubmit} className="lux-card p-7 sm:p-10">
      <h3 className="text-2xl font-bold tracking-[-0.02em]">Request a strategy briefing</h3>
      <p className="mt-2 text-ink-mute">Tell us where you&apos;re losing time. Your brief arrives straight on our WhatsApp.</p>

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
        {sent ? "Opening WhatsApp…" : "Send brief on WhatsApp"}
        <span className="material-symbols-outlined arrow text-[18px]" aria-hidden="true">arrow_forward</span>
      </button>
      <button type="button" onClick={viaEmail} className="mt-3 w-full text-center text-[14px] font-medium text-ink-mute transition-colors hover:text-violet">
        Prefer email? Send it to hello@vaslix.com
      </button>
    </form>
  );
}
