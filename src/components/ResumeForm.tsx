"use client";

import { useState } from "react";

export function ResumeForm() {
  const [sent, setSent] = useState(false);

  const field =
    "w-full border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-steel/70 focus:border-plum-700 focus:outline-none";

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
      <input className={field} type="email" placeholder="Email" required aria-label="Email" />
      <input className={field} type="tel" placeholder="Phone" aria-label="Phone" />
      <input className={field} placeholder="Discipline (e.g. mechanical design, controls)" aria-label="Discipline" />
      <label className="block">
        <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-steel">Resume</span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="w-full border border-line bg-white px-4 py-3 text-sm text-steel file:mr-4 file:border-0 file:bg-plum-900 file:px-4 file:py-2 file:text-xs file:font-bold file:uppercase file:tracking-wide file:text-white"
          aria-label="Upload resume"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-plum-900 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700"
      >
        Submit resume
      </button>
      <p className="text-center text-xs text-steel">
        Uploading your resume is quick and provides your information to our recruiters instantly.
      </p>
    </form>
  );
}
