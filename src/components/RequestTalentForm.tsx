"use client";
// FORM DESTINATION (wire up later): submissions should be delivered to Marino@dirstaff.com

import { useState } from "react";

export function RequestTalentForm({ variant = "light" }: { variant?: "light" | "onPlum" }) {
  const [sent, setSent] = useState(false);
  const onPlum = variant === "onPlum";

  const field =
    "w-full border bg-transparent px-4 py-3 text-sm placeholder:text-current/50 focus:outline-none " +
    (onPlum
      ? "border-white/25 text-white placeholder:text-white/50 focus:border-gold"
      : "border-line text-ink focus:border-plum-700");

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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <div className="grid grid-cols-2 gap-3">
        <input className={field} placeholder="First name" required aria-label="First name" />
        <input className={field} placeholder="Last name" required aria-label="Last name" />
      </div>
      <input className={field} type="email" placeholder="Work email" required aria-label="Work email" />
      <input className={field} placeholder="Company" aria-label="Company" />
      <input className={field} placeholder="Role or skill set needed" aria-label="Role needed" />
      <button
        type="submit"
        className="w-full bg-gold py-4 text-sm font-bold uppercase tracking-wide text-plum-950 hover:bg-gold-light"
      >
        Get my shortlist
      </button>
      <p className={`text-center text-xs ${onPlum ? "text-white/50" : "text-steel"}`}>
        No obligation. Your information stays confidential.
      </p>
    </form>
  );
}
