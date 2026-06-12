import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { ResumeForm } from "@/components/ResumeForm";
import { FAQ } from "@/components/FAQ";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "For Job Seekers | Direct Staff Inc.",
  description:
    "Submit your resume to Direct Staff. We place engineers, designers, and technical professionals into contract and direct roles nationwide.",
};

const steps = [
  { t: "Submit your resume", d: "Send us your background and discipline. It reaches our recruiters instantly." },
  { t: "We match you", d: "When your skills fit an open or upcoming search, a recruiter reaches out directly." },
  { t: "You get placed", d: "Contract or direct, we represent you through the process and stand behind the placement." },
];

export default function JobSeekersPage() {
  return (
    <>
      <PageHero
        eyebrow="For Job Seekers"
        title="Your next role moves your career forward."
        intro="Direct Staff places engineers, designers, and technical professionals into the programs that build the modern world. Submit your resume and we'll match you when the right search opens."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <div className="mt-8 space-y-8">
              {steps.map((s, idx) => (
                <div key={s.t} className="flex gap-5 border-t border-line pt-8 first:border-0 first:pt-0">
                  <span className="font-display text-4xl font-bold text-gold">{idx + 1}</span>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-plum-900">{s.t}</h2>
                    <p className="mt-2 text-base leading-relaxed text-steel">{s.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Eyebrow>Disciplines we place</Eyebrow>
              <div className="mt-5 flex flex-wrap gap-3">
                {industries.map((i) => (
                  <span key={i.slug} className="border border-line px-4 py-2 text-sm font-semibold text-ink">
                    {i.title}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-line bg-paper p-7">
              <Eyebrow>Upload your resume</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">Get in front of recruiters.</h2>
              <p className="mt-2 text-sm text-steel">Quick, confidential, and goes straight to our team.</p>
              <div className="mt-6">
                <ResumeForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="For job seekers"
        items={[
          { q: "Does it cost anything to submit my resume?", a: "No. Submitting your resume to Direct Staff is always free. We are paid by the companies that hire, never by candidates." },
          { q: "What happens after I submit?", a: "Your information goes directly to our recruiters. If your background matches an open or upcoming search, a recruiter reaches out to discuss the opportunity and represent you through the process." },
          { q: "What kinds of roles do you place?", a: "We place engineers, designers, and technical professionals across automotive, defense, engineering and design, and industrial and manufacturing, in both contract and direct positions." },
          { q: "Will my information be kept confidential?", a: "Yes. We treat your information with discretion and only share it with prospective employers in connection with opportunities relevant to you." },
          { q: "I don't see a role posted that fits me. Should I still submit?", a: "Absolutely. Many of our searches are filled before they are ever posted. Having your resume on file means we can reach out the moment a fitting role opens." },
        ]}
      />
    </>
  );
}
