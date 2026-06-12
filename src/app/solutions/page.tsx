import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { FAQ } from "@/components/FAQ";
import { solutions, industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions | Direct Staff Inc.",
  description:
    "Direct Staff provides contract staffing and direct hire for technical and engineering roles across automotive, defense, engineering, and industrial sectors. Explore our staffing solutions.",
};

export default function SolutionsIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Staffing built around how technical work actually gets done."
        intro="For more than 30 years, Direct Staff has matched companies with the engineers, designers, and technical professionals their programs depend on. Whether you need flexible contract capacity or a permanent hire, we deliver vetted talent through one accountable team."
      />

      {/* Intro narrative */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>How we help</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Two staffing models, one standard of work.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                Every company that builds technical products eventually faces the same problem: the work
                arrives faster than the right people can be found. A program ramps, a launch date is set,
                a key engineer leaves, or new business is won, and suddenly the need for qualified talent
                is immediate. Direct Staff exists to solve that problem, quickly and reliably.
              </p>
              <p>
                We offer two core staffing models. Contract staffing gives you flexible, fully managed
                capacity for the duration of your need, with the professional placed on-site as a Direct
                Staff employee. Direct hire runs a full search to place a permanent employee directly into
                your organization. Many clients use both, depending on whether the need is temporary or
                lasting. In every case you work with one team that learns your program and stays
                accountable for the result.
              </p>
              <p>
                What ties both models together is a screening standard built over three decades. Our
                recruiters understand the disciplines they staff, so the candidates we present are
                evaluated on genuine technical capability and fit, not keyword matches. That is the
                difference between a shortlist you can act on and a stack of resumes you have to sort.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-display text-2xl font-bold text-plum-900">Why it works</h3>
              <ul className="mt-6 space-y-5">
                <li>
                  <span className="block font-semibold text-ink">Speed</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">A vetted shortlist typically within 48 hours, drawn from an established network.</span>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Technical fluency</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">Recruiters who understand the work and screen on real capability.</span>
                </li>
                <li>
                  <span className="block font-semibold text-ink">Accountability</span>
                  <span className="mt-1 block text-sm leading-relaxed text-steel">One team, engaged from the first call through onboarding and beyond.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Solution cards */}
      <section className="blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>Our solutions</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Choose the model that fits the need.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:gap-10">
            {solutions.map((s) => (
              <article key={s.slug} className="group flex flex-col border border-line bg-white">
                <Photo src={s.image} alt={s.title} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-bold text-plum-900">{s.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-steel">{s.intro}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.slice(0, 3).map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-ink">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/solutions/${s.slug}`} className="mt-6 inline-block border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-plum-900 hover:text-plum-700">
                    Explore {s.title} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries served */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>Where we apply them</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            The sectors our solutions serve.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel">
            Both staffing models are applied across the technical industries we specialize in. Each has
            its own demands, and our recruiters know them.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="group border border-line bg-white p-6 hover:border-plum-700">
                <h3 className="font-display text-xl font-bold text-plum-900">{i.title}</h3>
                <p className="mt-2 text-sm text-steel">{i.blurb}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-plum-700 group-hover:text-gold-dark">View industry →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="Solutions"
        items={[
          { q: "Which solution is right for me?", a: "If your need is temporary, tied to a program, or you want to scale capacity up and down without adding permanent headcount, contract staffing is usually the fit. If you are filling a lasting seat on your team, direct hire is the model. If you are not sure, tell us about the need and we will recommend the right approach." },
          { q: "Can I use both contract and direct hire?", a: "Yes, and many clients do. It is common to bring on contract professionals to meet immediate demand while running a direct-hire search for permanent roles in parallel. You work with one team across both." },
          { q: "How fast can you deliver?", a: "For most technical roles, we return a vetted shortlist within 48 hours. The exact timeline depends on the seniority and specialization of the role, but speed is central to how we operate." },
          { q: "What does it cost to get started?", a: "Requesting talent costs nothing and carries no obligation. We scope the role with you and present candidates, and you only move forward if they are right for your program." },
        ]}
      />
    </>
  );
}
