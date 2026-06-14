import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { RequestTalentForm } from "@/components/RequestTalentForm";
import { FAQ } from "@/components/FAQ";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers | Direct Staff Inc.",
  description:
    "Request vetted technical talent. Contract staffing and permanent placement for automotive, defense, and industrial programs.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Build the technical team your program depends on."
        intro="Tell us the role. We return a vetted shortlist, typically within 48 hours, drawn from three decades of relationships across the engineering and design community."
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          {/* Solutions detail */}
          <div className="lg:col-span-7">
            <Eyebrow>How we staff</Eyebrow>
            <div className="mt-8 space-y-10">
              {solutions.map((s, idx) => (
                <div key={s.slug} className="border-t border-line pt-8 first:border-0 first:pt-0">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-gold-dark">0{idx + 1}</span>
                    <h2 className="font-display text-3xl font-bold text-plum-900">{s.title}</h2>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-steel">{s.body}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm text-ink">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-gold" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky request form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-line bg-paper p-7">
              <Eyebrow>Start a search</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">Request technical talent</h2>
              <p className="mt-2 text-sm text-steel">
                No obligation. A recruiter follows up to scope the role and return a shortlist.
              </p>
              <div className="mt-6">
                <RequestTalentForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why employers choose us */}
      <section className="bg-plum-950 py-14 text-white lg:py-16">
        <div className="wrap">
          <Eyebrow className="text-gold-light">Why employers partner with us</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">
            A staffing partner that understands the work.
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-3">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold">Speed without compromise</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                A vetted shortlist typically within 48 hours. We move quickly because three decades of
                relationships mean we usually know where the right person is before you finish describing
                the role.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold">Pre-screened candidates only</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Every candidate is technically evaluated before they reach you. You spend your time
                interviewing qualified people, not filtering a pile of resumes.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold">One accountable team</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Contract or direct, you work with one team that learns your program, your standards, and
                your culture, and stays engaged through onboarding and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="For employers"
        items={[
          { q: "How quickly can you deliver candidates?", a: "For most technical roles we return a vetted shortlist within 48 hours. Timelines can vary with the seniority and specialization of the role, but speed is a core part of how we operate." },
          { q: "What is the difference between contract staffing and permanent placement?", a: "With contract staffing, the professional is a Direct Staff employee placed on-site at your facility, fully benefited, with payroll and insurance handled by us. With permanent placement, we run the search and the candidate is hired directly as your employee. Many clients use both depending on the need." },
          { q: "Which industries do you specialize in?", a: "Automotive, defense, engineering and design, and industrial and manufacturing. Our recruiters understand these disciplines, which is what allows us to screen candidates on real capability rather than keywords." },
          { q: "Do you place nationwide?", a: "Yes. While Direct Staff is based in Sterling Heights, Michigan, we place technical talent nationwide for our clients." },
          { q: "Is there any obligation to request talent?", a: "None. Requesting a shortlist costs nothing and carries no commitment. You only engage if the candidates are right for your program." },
        ]}
      />
    </>
  );
}
