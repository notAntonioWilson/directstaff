import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { industries, stats, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Direct Staff Inc.",
  description:
    "For more than 30 years, Direct Staff has served the North American engineering and design community with experienced, diverse technical staffing across automotive, defense, engineering, and industrial sectors.",
};

const values = [
  { t: "People first", d: "We believe people are the key success factor in virtually every venture. Every placement is treated as a long-term relationship, not a transaction to close." },
  { t: "Technical depth", d: "Our recruiters understand the disciplines they staff. That understanding is what separates a qualified shortlist from a stack of resumes." },
  { t: "Accountability", d: "We stand behind our placements. When you work with Direct Staff, you work with a team that stays engaged long after the contract is signed." },
  { t: "Discretion", d: "Confidentiality is built into how we operate, for the companies that trust us with their hiring and the candidates who trust us with their careers." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Direct Staff"
        title="Three decades in the engineering capital of the world."
        intro="Direct Staff serves the North American engineering and design community with experienced, diverse technical talent, advanced processes, and a standard of work that has made us a leader in technical staffing for more than 30 years."
      />

      {/* Philosophy */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink">
              Our philosophy is integral to our success.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                Direct Staff serves the North American engineering and design community with the most
                experienced and diverse technical services, integrating highly qualified technical staff,
                advanced technologies, and robust processes. Our experience in engineering and design has
                established us as a leader in the technical staffing industry.
              </p>
              <p>
                We work with a broad base of large and small client firms across the automotive, defense,
                industrial, and manufacturing sectors. Some need a single specialist for a critical seat.
                Others need an entire technical workforce stood up against a program deadline. We are built
                to serve both, and everything in between.
              </p>
              <p>
                People are the key success factor in virtually every venture. We bring deep specialization
                to the industries that engineer and build the modern world, and we treat every placement,
                contract or direct, as the beginning of a long-term relationship rather than the end of a
                search.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo src={img.about} alt="Direct Staff technical team" className="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Heritage timeline-style band */}
      <section className="blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>Three decades of staffing</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-ink">
            Built on tenure, relationships, and a standard of work.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold text-plum-900">A foundation in technical work</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Direct Staff was established to serve the engineering and design community at the heart of
                North American manufacturing. From the start, the focus was technical talent for technical
                industries, not general staffing.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold text-plum-900">Three decades of relationships</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Over more than 30 years, the firm has built a network of candidates and clients that spans
                generations of programs. That network is the asset behind every shortlist we deliver.
              </p>
            </div>
            <div className="border-t-2 border-gold pt-6">
              <h3 className="font-display text-xl font-bold text-plum-900">A leader in the field today</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">
                Direct Staff continues to place engineers, designers, and technical experts nationwide,
                across automotive, defense, engineering and design, and industrial and manufacturing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-plum-950 text-white">
        <div className="wrap grid grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="border-r border-white/10 py-12 last:border-0">
              <div className="font-display text-5xl font-bold text-gold">{s.value}</div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            The principles behind every placement.
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.t} className="border-l-2 border-gold pl-6">
                <h3 className="font-display text-2xl font-bold text-plum-900">{v.t}</h3>
                <p className="mt-3 text-base leading-relaxed text-steel">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries recap */}
      <section className="blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            Matching unique challenges with unique minds.
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {industries.map((i) => (
              <div key={i.slug} className="flex gap-6 border-l-2 border-gold pl-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-plum-900">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{i.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/contact" className="bg-plum-900 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
