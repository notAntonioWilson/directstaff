import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Eyebrow } from "@/components/ui";
import { Photo } from "@/components/Photo";
import { industries, stats, img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About | Direct Staff Inc.",
  description:
    "Direct Staff has served the North American engineering and design community for over 30 years with experienced, diverse technical staffing.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Direct Staff"
        title="Three decades in the engineering capital of the world."
        intro="Direct Staff serves the North American engineering and design community with experienced, diverse technical talent, advanced processes, and a standard of work that has made us a leader in technical staffing."
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-ink">
              Our philosophy is integral to our success.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-steel">
              <p>
                Direct Staff serves the North American engineering and design community with the most
                experienced and diverse technical services, integrating highly qualified technical
                staff, advanced technologies, and robust processes.
              </p>
              <p>
                Our experience in engineering and design has established us as a leader in the technical
                staffing industry. Direct Staff works with a broad base of large and small client firms
                across the automotive, defense, industrial, and manufacturing sectors.
              </p>
              <p>
                People are the key success factor in virtually every venture. We bring deep
                specialization to the industries that engineer and build the modern world, and we treat
                every placement, contract or direct, as a long-term relationship rather than a
                transaction.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo src={img.about} alt="Direct Staff technical team" className="aspect-[4/5]" />
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

      {/* Industries recap */}
      <section className="blueprint bg-paper py-20 lg:py-24">
        <div className="wrap">
          <Eyebrow>Where we work</Eyebrow>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
            Matching unique challenges with unique minds.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {industries.map((i) => (
              <div key={i.slug} className="flex gap-6 border-l-2 border-gold pl-6">
                <div>
                  <h3 className="font-display text-2xl font-bold text-plum-900">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{i.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/contact" className="bg-plum-900 px-8 py-4 text-sm font-bold uppercase tracking-wide text-white hover:bg-plum-700">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
