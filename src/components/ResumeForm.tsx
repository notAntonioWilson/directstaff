"use client";

import { useState } from "react";
import { submitToWebhook } from "@/lib/submitForm";

export function ResumeForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const field =
    "w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-steel/70 focus:border-plum-700 focus:outline-none";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
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
      <div className="border border-line bg-white p-8">
        <p className="eyebrow text-gold-dark">Resume submitted</p>
        <h3 className="mt-2 font-display text-2xl font-bold text-ink">Thank you.</h3>
        <p className="mt-2 text-sm text-steel">
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
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-steel">Resume</span>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="w-full border border-line bg-white px-4 py-3 text-sm text-steel file:mr-4 file:border-0 file:bg-plum-900 file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-wide file:text-white"
          aria-label="Upload resume"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-plum-900 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700 disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Submit resume"}
      </button>
      <p className="text-center text-xs text-steel">
        Uploading your resume is quick and provides your information to our recruiters instantly.
      </p>
    </form>
  );
}
