import Link from "next/link";
import { Logo } from "./Logo";
import { company, solutions, industries } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-plum-950 text-white">
      <div className="wrap grid gap-10 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            North American engineering and design staffing. For over 30 years, Direct Staff has
            connected technical talent with the programs that depend on it.
          </p>
          <a
            href={company.phoneHref}
            className="mt-5 inline-block font-display text-2xl font-bold text-gold-light hover:text-gold"
          >
            {company.phone}
          </a>
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
