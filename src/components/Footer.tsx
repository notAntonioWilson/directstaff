import Link from "next/link";
import { Logo } from "./Logo";
import { company, solutions, industries } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-plum-950 text-white">
      <div className="wrap grid gap-10 py-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            North American engineering and design staffing. For over 30 years, Direct Staff has
            connected technical talent with the programs that depend on it.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={company.phoneHref}
              className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 text-sm font-bold text-gold-light transition hover:border-gold hover:text-gold"
              aria-label={`Call ${company.phone}`}
            >
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
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition hover:border-gold hover:text-gold-light"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
          </div>
        </div>

        <FooterCol title="Solutions" links={solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` }))} />
        <FooterCol title="Industries" links={industries.map((i) => ({ label: i.title, href: `/industries/${i.slug}` }))} />
        <FooterCol
          title="Company"
          links={[
            { label: "About", href: "/about" },
            { label: "For Employers", href: "/employers" },
            { label: "For Job Seekers", href: "/job-seekers" },
            { label: "Contact", href: "/contact" },
          ]}
        />
        <div className="md:col-span-2">
          <h3 className="eyebrow text-gold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{company.location}</li>
            <li>Serving {company.serves}</li>
            <li>
              <a href={company.phoneHref} className="hover:text-gold-light">{company.phone}</a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold-light">Request talent →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-5">
          <p className="text-xs leading-relaxed text-white/55">
            Direct Staff, Inc. is proud to be an equal opportunity employer. We promote and afford equal
            treatment and service to all employees and applicants for employment. All employees and
            applicants are given an equal employment opportunity without regard to race, religion, color,
            national origin, age, gender, marital status, or disability.
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Legal">
            <Link href="/privacy-policy" className="hover:text-gold-light">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-gold-light">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-gold-light">Disclaimer</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="md:col-span-2">
      <h3 className="eyebrow text-gold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.label}>
            <Link href={l.href} className="hover:text-gold-light">{l.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
