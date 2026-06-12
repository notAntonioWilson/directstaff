import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { DualForm } from "@/components/DualForm";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | Direct Staff Inc.",
  description: "Contact Direct Staff Inc. to request technical talent or discuss a search. Sterling Heights, Michigan. Serving clients nationwide.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about the role you need filled."
        intro="Reach us directly, or send the details below and a Direct Staff recruiter will follow up, typically within one business day."
      />

      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Reach us</Eyebrow>
            <dl className="mt-8 space-y-8">
              <div className="border-l-2 border-gold pl-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Phone</dt>
                <dd className="mt-1">
                  <a href={company.phoneHref} className="font-display text-3xl font-bold text-plum-900 hover:text-plum-700">
                    {company.phone}
                  </a>
                </dd>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Location</dt>
                <dd className="mt-1 text-lg text-ink">{company.location}</dd>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Reach</dt>
                <dd className="mt-1 text-lg text-ink">Serving clients {company.serves.toLowerCase()}</dd>
              </div>
              <div className="border-l-2 border-gold pl-6">
                <dt className="text-xs font-semibold uppercase tracking-wide text-steel">Connect</dt>
                <dd className="mt-1">
                  <a href={company.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg text-plum-700 underline hover:text-plum-900">
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-7">
            <div className="border border-line bg-paper p-8">
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">How can we help?</h2>
              <p className="mt-2 text-sm text-steel">
                Hiring technical talent, or looking for your next role? Choose below and we&apos;ll route
                you to the right team.
              </p>
              <div className="mt-6 max-w-xl">
                <DualForm variant="light" defaultMode="hire" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
