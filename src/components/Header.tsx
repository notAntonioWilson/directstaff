"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { company, nav, solutions, industries } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Utility bar */}
      <div className="hidden bg-plum-950 text-white md:block">
        <div className="wrap flex h-10 items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <a href={company.phoneHref} className="font-medium hover:text-gold-light">
              P: {company.phone}
            </a>
            <span className="text-white/30">|</span>
            <span className="text-white/70">{company.location}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60">Connect:</span>
            <a
              href={company.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-6 w-6 place-items-center border border-white/25 text-[0.65rem] font-bold hover:border-gold hover:text-gold"
            >
              in
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-line bg-white">
        <div className="wrap flex h-20 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            <DropNav label="Solutions" href="/#solutions" items={solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}`, note: s.short }))} />
            <DropNav label="Industries" href="/#industries" items={industries.map((i) => ({ label: i.title, href: `/#industries`, note: i.blurb }))} />
            <Link href="/employers" className="text-sm font-semibold text-ink hover:text-plum-700">For Employers</Link>
            <Link href="/job-seekers" className="text-sm font-semibold text-ink hover:text-plum-700">For Job Seekers</Link>
            <Link href="/about" className="text-sm font-semibold text-ink hover:text-plum-700">About</Link>
            <Link
              href="/contact"
              className="bg-plum-900 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden"
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
          <div className="border-t border-line lg:hidden">
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
                className="mt-4 bg-plum-900 px-6 py-3 text-center text-sm font-bold uppercase tracking-wide text-white"
              >
                Contact
              </Link>
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
      <Link href={href} className="flex items-center gap-1 text-sm font-semibold text-ink hover:text-plum-700">
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
