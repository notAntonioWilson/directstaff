import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/ui";
import { DualForm } from "@/components/DualForm";
import { FAQ } from "@/components/FAQ";
import { solutions, industries, stats, img, company } from "@/lib/site";

const process = [
  { n: "01", t: "Source", d: "We draw on three decades of relationships and an active technical network to find candidates who fit the role, not just the keywords." },
  { n: "02", t: "Screen", d: "Every candidate is technically screened and vetted before they reach you. You see qualified people, not a stack of resumes to sort." },
  { n: "03", t: "Select", d: "We present a focused shortlist, typically within 48 hours, with the context you need to make a confident decision." },
  { n: "04", t: "Service", d: "We stay engaged through onboarding and beyond, standing behind every placement and adjusting as your program evolves." },
];

const differentiators = [
  { t: "Three decades of specialization", d: "Direct Staff has operated in the engineering capital of the world for over 30 years. That tenure means established relationships, a deep bench, and an understanding of technical work that newer firms cannot replicate." },
  { t: "Technical screening, not keyword matching", d: "Our recruiters understand the disciplines they staff. Candidates are evaluated on capability and fit before they ever reach your desk." },
  { t: "Contract and direct under one partner", d: "Whether you need flexible contract capacity or a permanent hire, you work with one accountable team that knows your program." },
  { t: "Built for technical industries", d: "Automotive, defense, engineering and design, industrial and manufacturing. We staff the sectors that engineer and build the modern world." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-plum-950 text-white">
        <div className="absolute inset-0">
          <Photo src={img.hero} alt="Engineers on a technical program floor" priority grade="hero" className="h-full w-full" />
        </div>
        <div className="relative wrap grid gap-12 py-14 lg:grid-cols-12 lg:items-center lg:py-16">
          <div className="lg:col-span-7">
            <Eyebrow className="text-gold-light">
              North American engineering &amp; technical staffing
            </Eyebrow>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The talent that
              <br />
              <span className="text-gold">engineers</span> what&apos;s next.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              For more than 30 years, Direct Staff has placed the engineers, designers, and technical
              experts that move the automotive, defense, and industrial sectors forward. We are a
              technical staffing partner built on tenure, relationships, and a standard of work that has
              made us a leader in the field.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" />Contract staffing</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" />Direct hire</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-gold" />Nationwide placement</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/15 bg-plum-950/60 p-7 backdrop-blur">
              <Eyebrow className="text-gold-light">Get started</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold">Tell us what you need</h2>
              <p className="mt-2 text-sm text-white/70">
                Hiring technical talent, or looking for your next role? Choose below.
              </p>
              <div className="mt-6">
                <DualForm variant="onPlum" defaultMode="hire" />
              </div>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="relative border-t border-white/10">
          <div className="wrap grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className={`py-5 sm:py-6 ${idx % 2 === 0 ? "border-r border-white/10" : ""} md:border-r md:last:border-r-0 ${idx < 2 ? "border-b border-white/10 md:border-b-0" : ""} pl-0 md:pl-0`}
              >
                <div className="font-display text-3xl font-bold text-gold sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-sm text-white/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HERITAGE / 30+ YEARS */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Eyebrow>Three decades in the field</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
              Over 30 years staffing the work that builds the modern world.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                Direct Staff was founded in the automotive capital of the world and has spent more than
                three decades placing technical talent across the industries that engineer and manufacture
                it. That longevity is not a vanity number. It is a network, a reputation, and a depth of
                understanding that a younger firm simply has not had time to build.
              </p>
              <p>
                In thirty years the tools have changed, the programs have changed, and the technologies have
                changed. What has not changed is the principle the firm was built on: people are the key
                success factor in virtually every venture, and the right placement is a long-term
                relationship rather than a transaction.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-display text-2xl font-bold text-plum-900">What three decades buys you</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <span className="block font-semibold text-ink">An established network</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">Relationships with candidates and clients built across generations of programs, so the right person is often already known to us.</span>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Proven processes</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">A sourcing and screening method refined over thirty years, not improvised for each search.</span>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Industry fluency</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">Recruiters who understand automotive, defense, engineering, and industrial work well enough to screen on real capability.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solutions" className="scroll-mt-28 blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Solutions</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
                Two ways we put the right people to work.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-steel">
                Flexible contract capacity or permanent placement, delivered by one team that knows your
                program and your industry.
              </p>
            </div>
            <Link href="/solutions" className="shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-plum-900 hover:text-plum-700">
              All solutions →
            </Link>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-10">
            {solutions.map((s) => (
              <article key={s.slug} className="group border border-line bg-white">
                <Photo src={s.image} alt={s.title} className="aspect-[16/10]" />
                <div className="p-8">
                  <h3 className="font-display text-2xl font-bold text-plum-900">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-steel">{s.short}</p>
                  <Link href={`/solutions/${s.slug}`} className="mt-6 inline-block text-sm font-bold uppercase tracking-wide text-plum-700 group-hover:text-gold-dark">
                    Learn more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>How we work</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
            Source, screen, select, service.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            A disciplined process refined over three decades. Every engagement runs through the same four
            stages, so you always know what to expect.
          </p>
          <div className="mt-10 grid gap-px bg-line md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.n} className="bg-white p-8">
                <div className="font-mono text-sm text-gold-dark">{p.n}</div>
                <h3 className="mt-4 font-display text-2xl font-bold text-plum-900">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-steel">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="scroll-mt-28 bg-plum-950 py-14 text-white lg:py-16">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow className="text-gold-light">Industries</Eyebrow>
              <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-5xl">
                Deep specialization where it counts.
              </h2>
            </div>
            <Link href="/industries" className="shrink-0 border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-gold-light hover:text-gold">
              All industries →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="group relative block aspect-[4/3] overflow-hidden sm:aspect-[3/4]">
                <Photo src={i.image} alt={i.title} className="absolute inset-0 h-full w-full" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="font-display text-2xl font-bold text-white">{i.title}</h3>
                  <p className="mt-1 text-sm text-white/75">{i.blurb}</p>
                  <span className="mt-3 text-xs font-bold uppercase tracking-wide text-gold-light opacity-0 transition group-hover:opacity-100">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY DIRECT STAFF */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>Why Direct Staff</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-5xl">
            What sets a thirty-year staffing partner apart.
          </h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2">
            {differentiators.map((d) => (
              <div key={d.t} className="border-l-2 border-gold pl-6">
                <h3 className="font-display text-2xl font-bold text-plum-900">{d.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-steel">{d.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        eyebrow="Questions"
        items={[
          { q: "What does Direct Staff do?", a: "Direct Staff is a technical and engineering staffing firm. For more than 30 years we have placed engineers, designers, and technical professionals into both contract and direct-hire roles across the automotive, defense, engineering, and industrial sectors." },
          { q: "I am hiring. How do I request talent?", a: "Use the Hire Talent button or the form above. Tell us the role and skill set you need, and a recruiter follows up to scope it and return a vetted shortlist, typically within 48 hours. There is no obligation." },
          { q: "I am looking for work. How do I get started?", a: "Use the Find a Job button or switch the form above to Find Work and submit your resume. It goes straight to our recruiters, and when your background matches an open or upcoming search, we reach out directly. It is always free for candidates." },
          { q: "What is the difference between contract and direct hire?", a: "With contract staffing, the professional is a Direct Staff employee placed on-site at the client, fully benefited. With direct hire, we run the search and the candidate is hired directly as the client's employee. Many clients use both." },
          { q: "Which industries and areas do you serve?", a: "We specialize in automotive, defense, engineering and design, and industrial and manufacturing. Based in Sterling Heights, Michigan, we place talent for clients nationwide." },
          { q: "How quickly can you deliver candidates?", a: "For most technical roles we return a vetted shortlist within 48 hours, drawn from three decades of relationships across the engineering and design community." },
        ]}
      />

      {/* CLOSING CTA */}
      <section className="relative overflow-hidden bg-plum-900 text-white">
        <div className="absolute inset-0">
          <Photo src={img.cta} alt="" grade="cta" className="h-full w-full" />
        </div>
        <div className="relative wrap grid gap-12 py-16 lg:grid-cols-12 lg:items-center lg:py-20">
          {/* Written section */}
          <div className="lg:col-span-6">
            <Eyebrow className="text-gold-light">Get started</Eyebrow>
            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight sm:text-5xl">
              Your next hire, or your next role, starts here.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Whether you are building a technical team or advancing your career, Direct Staff is the
              bridge between capability and opportunity. Three decades of relationships across the
              engineering and design community, put to work for you.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-gold" />Vetted shortlists, typically within 48 hours</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-gold" />Contract staffing and direct hire under one partner</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 bg-gold" />No obligation, fully confidential</li>
            </ul>
            <a href={company.phoneHref} className="mt-7 inline-block font-display text-2xl font-bold text-gold-light hover:text-gold">
              {company.phone}
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-6 lg:col-start-8">
            <div className="border border-white/15 bg-plum-950/60 p-7 backdrop-blur">
              <Eyebrow className="text-gold-light">Reach out</Eyebrow>
              <h3 className="mt-3 font-display text-2xl font-bold">Tell us what you need</h3>
              <p className="mt-2 text-sm text-white/70">
                Hiring technical talent, or looking for your next role? Choose below.
              </p>
              <div className="mt-6">
                <DualForm variant="onPlum" defaultMode="hire" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

