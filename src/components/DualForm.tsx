"use client";

import { useState } from "react";
import { submitToWebhook } from "@/lib/submitForm";

type Mode = "hire" | "work";

export function DualForm({
  variant = "onPlum",
  defaultMode = "hire",
}: {
  variant?: "onPlum" | "light";
  defaultMode?: Mode;
}) {
  const [mode, setMode] = useState<Mode>(defaultMode);
  const onPlum = variant === "onPlum";

  return (
    <div>
      {/* Toggle */}
      <div
        role="tablist"
        aria-label="Choose what you need"
        className={`mb-6 grid grid-cols-2 ${onPlum ? "border border-white/20" : "border border-line"}`}
      >
        <TabButton active={mode === "hire"} onClick={() => setMode("hire")} onPlum={onPlum} id="tab-hire" controls="panel-hire">
          I&apos;m Hiring
        </TabButton>
        <TabButton active={mode === "work"} onClick={() => setMode("work")} onPlum={onPlum} id="tab-work" controls="panel-work">
          I Want Work
        </TabButton>
      </div>

      {mode === "hire" ? (
        <div role="tabpanel" id="panel-hire" aria-labelledby="tab-hire">
          <HireForm onPlum={onPlum} />
        </div>
      ) : (
        <div role="tabpanel" id="panel-work" aria-labelledby="tab-work">
          <WorkForm onPlum={onPlum} />
        </div>
      )}
    </div>
  );
}

function TabButton({
  active,
  onClick,
  onPlum,
  children,
  id,
  controls,
}: {
  active: boolean;
  onClick: () => void;
  onPlum: boolean;
  children: React.ReactNode;
  id: string;
  controls: string;
}) {
  const base = "py-3 text-sm font-bold uppercase tracking-wide transition";
  const activeCls = onPlum ? "bg-gold text-plum-950" : "bg-plum-900 text-white";
  const idleCls = onPlum
    ? "bg-transparent text-white/70 hover:text-white"
    : "bg-transparent text-steel hover:text-ink";
  return (
    <button
      role="tab"
      id={id}
      aria-controls={controls}
      aria-selected={active}
      onClick={onClick}
      className={`${base} ${active ? activeCls : idleCls}`}
    >
      {children}
    </button>
  );
}

function fieldCls(onPlum: boolean) {
  return (
    "w-full border bg-transparent px-4 py-3 text-sm focus:outline-none " +
    (onPlum
      ? "border-white/25 text-white placeholder:text-white/50 focus:border-gold"
      : "border-line text-ink placeholder:text-steel/70 focus:border-plum-700")
  );
}

function HireForm({ onPlum }: { onPlum: boolean }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const field = fieldCls(onPlum);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot: bot filled hidden field
    setSubmitting(true);
    await submitToWebhook({
      tag: "hiring",
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      work_email: data.get("work_email"),
      company: data.get("company"),
      role_needed: data.get("role_needed"),
      staffing_type: data.get("staffing_type"),
      source_page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`border p-7 ${onPlum ? "border-white/25 text-white" : "border-line text-ink"}`}>
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
      <input name="role_needed" className={field} placeholder="Role or skill set needed" aria-label="Role or skill set needed" />
      <select name="staffing_type" className={field} aria-label="Type of staffing" defaultValue="">
        <option value="" disabled className="text-ink">Type of staffing needed…</option>
        <option className="text-ink">Contract staffing</option>
        <option className="text-ink">Permanent placement</option>
        <option className="text-ink">Not sure yet</option>
      </select>
      <button type="submit" disabled={submitting} className="w-full bg-gold py-4 text-sm font-bold uppercase tracking-wide text-plum-950 hover:bg-gold-light disabled:opacity-60">
        {submitting ? "Sending…" : "Get my shortlist"}
      </button>
      <p className={`text-center text-xs ${onPlum ? "text-white/50" : "text-steel"}`}>
        No obligation. Your information stays confidential.
      </p>
    </form>
  );
}

function WorkForm({ onPlum }: { onPlum: boolean }) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const field = fieldCls(onPlum);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company_website")) return; // honeypot
    const resume = data.get("resume");
    const resumeName = resume instanceof File && resume.name ? resume.name : "";
    setSubmitting(true);
    await submitToWebhook({
      tag: "get_hired",
      first_name: data.get("first_name"),
      last_name: data.get("last_name"),
      email: data.get("email"),
      phone: data.get("phone"),
      discipline: data.get("discipline"),
      resume_filename: resumeName,
      source_page: typeof window !== "undefined" ? window.location.pathname : "",
    });
    setSubmitting(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`border p-7 ${onPlum ? "border-white/25 text-white" : "border-line text-ink"}`}>
        <p className="eyebrow text-gold">Resume submitted</p>
        <h3 className="mt-2 font-display text-2xl font-bold">Thank you.</h3>
        <p className={`mt-2 text-sm ${onPlum ? "text-white/70" : "text-steel"}`}>
          Your information is now with our recruiters. If your background matches an open or upcoming
          search, we&apos;ll reach out directly.
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
      <input name="email" className={field} type="email" placeholder="Email" required aria-label="Email" />
      <input name="phone" className={field} type="tel" placeholder="Phone" aria-label="Phone" />
      <input name="discipline" className={field} placeholder="Discipline (e.g. mechanical design, controls)" aria-label="Discipline" />
      <label className="block">
        <span className={`mb-1 block text-xs font-semibold uppercase tracking-wide ${onPlum ? "text-white/70" : "text-steel"}`}>Resume</span>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          aria-label="Upload resume"
          className={
            "w-full border px-4 py-3 text-sm file:mr-4 file:border-0 file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-wide " +
            (onPlum
              ? "border-white/25 text-white/70 file:bg-gold file:text-plum-950"
              : "border-line text-steel file:bg-plum-900 file:text-white")
          }
        />
      </label>
      <button type="submit" disabled={submitting} className={`w-full py-4 text-sm font-bold uppercase tracking-wide disabled:opacity-60 ${onPlum ? "bg-white text-plum-950 hover:bg-paper" : "bg-plum-900 text-white hover:bg-plum-700"}`}>
        {submitting ? "Sending…" : "Submit resume"}
      </button>
      <p className={`text-center text-xs ${onPlum ? "text-white/50" : "text-steel"}`}>
        Quick, confidential, and goes straight to our recruiters.
      </p>
    </form>
  );
}
