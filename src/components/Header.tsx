"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { company, nav, solutions, industries } from "@/lib/site";

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Utility bar */}
      <div className="hidden bg-plum-950 text-white md:block">
        <div className="wrap flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="text-white/70">{company.location}</span>
            <span className="text-white/30">|</span>
            <span className="text-white/70">Serving clients nationwide</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct Staff on LinkedIn"
              className="flex items-center gap-2 text-white/70 hover:text-gold-light"
            >
              <LinkedInIcon className="h-4 w-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-line bg-white">
        <div className="wrap flex h-20 items-center justify-between gap-6">
          <Logo />

          <nav className="hidden flex-1 items-center justify-center gap-10 xl:flex" aria-label="Primary">
            <DropNav label="Solutions" href="/solutions" items={solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}`, note: s.short }))} />
            <DropNav label="Industries" href="/industries" items={industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}`, note: i.blurb }))} />
            <Link href="/about" className="text-sm font-semibold uppercase tracking-wide text-ink hover:text-plum-700">About</Link>
            <a href={company.phoneHref} className="text-sm font-semibold uppercase tracking-wide text-ink hover:text-plum-700">Call</a>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 xl:flex">
            {/* Two clear CTA buttons */}
            <Link
              href="/employers"
              className="bg-plum-900 px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700"
            >
              Hire Talent
            </Link>
            <Link
              href="/job-seekers"
              className="border-2 border-plum-900 bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-plum-900 hover:bg-plum-900 hover:text-white"
            >
              Find a Job
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="border-t border-line xl:hidden">
            <nav className="wrap flex flex-col py-4" aria-label="Mobile">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-sm font-semibold text-ink"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm font-semibold text-ink"
              >
                Contact
              </Link>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <Link
                  href="/employers"
                  onClick={() => setOpen(false)}
                  className="bg-plum-900 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
                >
                  Hire Talent
                </Link>
                <Link
                  href="/job-seekers"
                  onClick={() => setOpen(false)}
                  className="border-2 border-plum-900 px-4 py-3 text-center text-sm font-bold uppercase tracking-wide text-plum-900"
                >
                  Find a Job
                </Link>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                <a href={company.phoneHref} className="flex items-center gap-2 text-sm font-bold text-plum-900">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  {company.phone}
                </a>
                <a
                  href={company.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Direct Staff on LinkedIn"
                  className="text-plum-900 hover:text-plum-700"
                >
                  <LinkedInIcon className="h-5 w-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function DropNav({
  label,
  href,
  items,
}: {
  label: string;
  href: string;
  items: { label: string; href: string; note?: string }[];
}) {
  return (
    <div className="group relative">
      <Link href={href} className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-ink hover:text-plum-700">
        {label}
        <span className="text-[0.6rem] text-steel">▾</span>
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 translate-y-1 border border-line bg-white opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
        <div className="h-1 bg-plum-900" />
        {items.map((it) => (
          <Link key={it.label} href={it.href} className="block border-b border-line px-5 py-4 last:border-0 hover:bg-paper">
            <span className="block font-display text-base font-bold text-plum-900">{it.label}</span>
            {it.note && <span className="mt-0.5 block text-xs text-steel">{it.note}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
}
