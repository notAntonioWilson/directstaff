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
            <a
              href={company.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Direct Staff on Facebook"
              className="inline-flex h-9 w-9 items-center justify-center border border-white/20 text-white/80 transition hover:border-gold hover:text-gold-light"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.03 4.39 11.03 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
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
            Direct Staff is an equal opportunity employer. We recruit, hire, train, assign, promote,
            compensate, and make all other employment decisions on the basis of ability, qualifications,
            and business needs, not on the basis of any characteristic protected by law. The Company
            prohibits discrimination and harassment against any applicant or employee on the basis of race,
            color, religion, national origin, sex (including pregnancy, childbirth, and related medical
            conditions), sexual orientation, gender identity or expression, age, height, weight, familial
            status, marital status, disability, genetic information, military or veteran status, or any
            other status protected under federal law, the Michigan Elliott-Larsen Civil Rights Act, the
            Persons with Disabilities Civil Rights Act, or other applicable state or local law.
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
