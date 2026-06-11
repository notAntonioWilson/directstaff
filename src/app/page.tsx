import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/ui";
import { RequestTalentForm } from "@/components/RequestTalentForm";
import { solutions, industries, stats, img } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-plum-950 text-white">
        <div className="absolute inset-0">
          <Photo src={img.hero} alt="Engineers on a technical program floor" priority grade="hero" className="h-full w-full" />
        </div>
        <div className="relative wrap grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <Eyebrow className="text-gold-light">
              North American engineering &amp; technical staffing
            </Eyebrow>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The talent that
              <br />
              <span className="text-gold">engineers</span> what&apos;s next.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80">
              For over 30 years, Direct Staff has placed the engineers, designers, and technical
              experts that move the automotive, defense, and industrial sectors forward.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="/employers" className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-plum-950 hover:bg-paper">
                For Employers
              </Link>
              <Link href="/job-seekers" className="border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10">
                For Job Seekers
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-plum-950/60 p-7 backdrop-blur">
              <Eyebrow className="text-gold-light">Start a search</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold">Request technical talent</h2>
              <p className="mt-2 text-sm text-white/70">
                Tell us the role. We&apos;ll return a vetted shortlist, typically within 48 hours.
              </p>
              <div className="mt-6">
                <RequestTalentForm variant="onPlum" />
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="relative border-t border-white/10">
          <div className="wrap grid grid-cols-2 gap-px md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="py-8">
                <div className="font-display text-4xl font-bold text-gold">{s.value}</div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="scroll-mt-28 bg-white py-20 lg:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Solutions</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Two ways we put the right people to work.
              </h2>
            </div>
            <Link href="/employers" className="shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-plum-900 hover:text-plum-700">
              All solutions →
            </Link>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
            {solutions.map((s) => (
              <article key={s.slug} className="group border border-line">
                <Photo src={s.image} alt={s.title} className="aspect-[4/3]" />
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-plum-900">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-steel">{s.short}</p>
                  <Link href={`/solutions/${s.slug}`} className="mt-5 inline-block text-sm font-bold uppercase tracking-wide text-plum-700 group-hover:text-gold-dark">
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-28 blueprint bg-paper py-20 lg:py-28">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Industries</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Deep specialization where it counts.
              </h2>
            </div>
            <Link href="/about" className="shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-plum-900 hover:text-plum-700">
              Our story →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <article key={i.slug} className="group relative aspect-[3/4] overflow-hidden">
                <Photo src={i.image} alt={i.title} className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{i.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{i.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-plum-900 text-white">
        <div className="absolute inset-0">
          <Photo src={img.cta} alt="" grade="cta" className="h-full w-full" />
        </div>
        <div className="relative wrap py-24 text-center">
          <Eyebrow className="justify-center text-gold-light">Get started</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            Your next hire, or your next role, starts here.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">
            Whether you&apos;re building a technical team or advancing your career, Direct Staff is the
            bridge between capability and opportunity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/employers" className="bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-plum-950 hover:bg-paper">
              Hire talent
            </Link>
            <Link href="/job-seekers" className="border border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-white/10">
              Find a role
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
