import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { FAQ } from "@/components/FAQ";
import { industries, solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries | Direct Staff Inc.",
  description:
    "Direct Staff provides deep technical staffing specialization across automotive, defense, engineering and design, and industrial and manufacturing. Explore the industries we serve.",
};

export default function IndustriesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Deep specialization in the industries that build the modern world."
        intro="People are the key success factor in virtually every venture. For more than 30 years, Direct Staff has brought that conviction to the technical sectors that engineer and manufacture the products the world depends on."
      />

      {/* Narrative intro */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Our focus</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
              Specialization is what makes a shortlist worth acting on.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                General staffing firms treat every role the same way. Direct Staff does not. We built our
                business inside the technical industries we serve, and that focus is the reason our
                recruiters can tell the difference between candidates who merely list the right keywords
                and candidates who can actually do the work.
              </p>
              <p>
                Each of the sectors we specialize in has its own language, standards, and demands. The
                rigor of a defense program is not the rhythm of an automotive launch, and the realities of
                a manufacturing floor are not the realities of a design office. Understanding those
                distinctions is what lets us match unique challenges with the right people, and it is why
                clients in these industries return to us search after search.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border-l-2 border-gold pl-8">
              <h3 className="font-display text-2xl font-bold text-plum-900">Our industries at a glance</h3>
              <ul className="mt-6 space-y-4">
                {industries.map((i) => (
                  <li key={i.slug}>
                    <Link href={`/industries/${i.slug}`} className="group block">
                      <span className="font-display text-lg font-bold text-plum-900 group-hover:text-plum-700">{i.title}</span>
                      <span className="block text-sm text-steel">{i.blurb}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry cards */}
      <section className="blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>The sectors we serve</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
            Explore each industry.
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {industries.map((i) => (
              <article key={i.slug} className="group flex flex-col overflow-hidden border border-line bg-white">
                <Photo src={i.image} alt={i.title} className="aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl font-bold text-plum-900">{i.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-steel">{i.intro}</p>
                  <Link href={`/industries/${i.slug}`} className="mt-6 inline-block border-b-2 border-gold pb-1 text-sm font-bold uppercase tracking-wide text-plum-900 hover:text-plum-700">
                    Explore {i.title} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions cross-link */}
      <section className="bg-plum-950 py-14 text-white lg:py-16">
        <div className="wrap">
          <Eyebrow className="text-gold-light">How we serve them</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            The same two models, applied to every sector.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((s) => (
              <Link key={s.slug} href={`/solutions/${s.slug}`} className="group flex items-center justify-between border border-white/15 p-7 hover:border-gold">
                <div>
                  <h3 className="font-display text-2xl font-bold">{s.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/70">{s.short}</p>
                </div>
                <span className="ml-4 text-2xl text-gold transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        eyebrow="Industries"
        items={[
          { q: "Why does industry specialization matter in staffing?", a: "Because technical roles are not interchangeable. An automotive CAE analyst and a defense systems engineer require different evaluation. A recruiter who understands the sector can screen on genuine capability, which means the candidates you see are actually qualified, not just keyword matches." },
          { q: "Do you only place in these four industries?", a: "These are our areas of deep specialization, where our experience and network are strongest. Many of the engineering disciplines we staff transfer across sectors, so if your need is adjacent to these industries, it is worth a conversation." },
          { q: "Can you staff both engineering office and plant floor roles?", a: "Yes. Particularly in industrial and manufacturing, we staff the full spectrum, from the automation and process engineers in the office to the skilled technical roles on the production line." },
          { q: "How do I get started for my industry?", a: "Tell us the role and the sector, and a recruiter who understands that industry will follow up to scope the need and return a vetted shortlist." },
        ]}
      />
    </>
  );
}
