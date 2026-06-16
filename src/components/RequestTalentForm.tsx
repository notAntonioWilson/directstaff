"use client";

import { useState } from "react";
import { submitToWebhook } from "@/lib/submitForm";

export function RequestTalentForm({ variant = "light" }: { variant?: "light" | "onPlum" }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onPlum = variant === "onPlum";

  const field =
    "w-full border bg-transparent px-4 py-3 text-sm placeholder:text-current/50 focus:outline-none " +
    (onPlum
      ? "border-white/25 text-white placeholder:text-white/50 focus:border-gold"
      : "border-line text-ink focus:border-plum-700");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("company_website")) return; // honeypot
    setSubmitting(true);
    await submitToWebhook({
      tag: "hiring",
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      work_email: data.get("work_email"),
      company: data.get("company"),
      role_needed: data.get("role_needed"),
      staffing_type: "",
      source_page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`border p-8 ${onPlum ? "border-white/25 text-white" : "border-line text-ink"}`}>
        <p className="eyebrow text-gold">Request received</p>
        <h3 className="mt-2 font-display text-2xl font-bold">We&apos;ll be in touch.</h3>
        <p className={`mt-2 text-sm ${onPlum ? "text-white/70" : "text-steel"}`}>
          A Direct Staff recruiter will follow up, typically within one business day, to scope the role
          and return a vetted shortlist.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" />
      <div className="grid grid-cols-2 gap-3">
        <input name="first_name" className={field} placeholder="First name" required aria-label="First name" />
        <input name="last_name" className={field} placeholder="Last name" required aria-label="Last name" />
      </div>
      <input name="work_email" className={field} type="email" placeholder="Work email" required aria-label="Work email" />
      <input name="company" className={field} placeholder="Company" aria-label="Company" />
      <input name="role_needed" className={field} placeholder="Role or skill set needed" aria-label="Role needed" />
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gold py-4 text-sm font-bold uppercase tracking-wide text-plum-950 hover:bg-gold-light disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get my shortlist"}
      </button>
      <p className={`text-center text-xs ${onPlum ? "text-white/50" : "text-steel"}`}>
        No obligation. Your information stays confidential.
      </p>
    </form>
  );
}
