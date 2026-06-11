import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { RequestTalentForm } from "@/components/RequestTalentForm";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Employers | Direct Staff Inc.",
  description:
    "Request vetted technical talent. Contract staffing, direct hire, and managed workforce solutions for automotive, defense, and industrial programs.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Employers"
        title="Build the technical team your program depends on."
        intro="Tell us the role. We return a vetted shortlist, typically within 48 hours, drawn from three decades of relationships across the engineering and design community."
      />

      <section className="bg-white py-20 lg:py-24">
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
    </>
  );
}
