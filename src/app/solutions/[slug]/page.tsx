import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/ui";
import { RequestTalentForm } from "@/components/RequestTalentForm";
import { solutions, industries } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) return { title: "Solutions | Direct Staff Inc." };
  return {
    title: `${s.title} | Direct Staff Inc.`,
    description: s.short,
  };
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
  const s = solutions.find((x) => x.slug === params.slug);
  if (!s) notFound();

  const other = solutions.filter((x) => x.slug !== s.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-950 text-white">
        <div className="absolute inset-0">
          <Photo src={s.image} alt={s.title} grade="hero" priority className="h-full w-full" />
        </div>
        <div className="relative wrap py-20 lg:py-28">
          <nav className="mb-8 flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-light">Home</Link>
            <span>/</span>
            <Link href="/employers" className="hover:text-gold-light">Solutions</Link>
            <span>/</span>
            <span className="text-white/90">{s.title}</span>
          </nav>
          <Eyebrow className="text-gold-light">Solutions</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
            {s.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{s.intro}</p>
        </div>
      </section>

      {/* Body + form */}
      <section className="bg-white py-20 lg:py-24">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>How it works</Eyebrow>
            <p className="mt-6 text-lg leading-relaxed text-ink">{s.body}</p>

            <h2 className="mt-12 font-display text-2xl font-bold text-plum-900">What you get</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.points.map((p) => (
                <li key={p} className="flex gap-3 border-l-2 border-gold pl-4 text-sm text-ink">
                  {p}
                </li>
              ))}
            </ul>

            {"areas" in s && Array.isArray((s as { areas?: string[] }).areas) && (
              <>
                <h2 className="mt-12 font-display text-2xl font-bold text-plum-900">Opportunity areas</h2>
                <p className="mt-3 text-sm text-steel">Direct opportunities span a broad range of technical and professional disciplines:</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {(s as { areas: string[] }).areas.map((a) => (
                    <span key={a} className="border border-line px-4 py-2 text-sm font-semibold text-ink">
                      {a}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Sticky form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-line bg-paper p-7">
              <Eyebrow>Start a search</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">{s.cta}</h2>
              <p className="mt-2 text-sm text-steel">
                Tell us the role. A recruiter follows up to scope it and return a shortlist.
              </p>
              <div className="mt-6">
                <RequestTalentForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries strip */}
      <section className="blueprint bg-paper py-16">
        <div className="wrap">
          <Eyebrow>Where we place</Eyebrow>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((i) => (
              <div key={i.slug} className="border-l-2 border-gold bg-white px-5 py-4">
                <h3 className="font-display text-lg font-bold text-plum-900">{i.title}</h3>
                <p className="mt-1 text-xs text-steel">{i.blurb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other solution */}
      <section className="bg-plum-950 py-16 text-white">
        <div className="wrap">
          <Eyebrow className="text-gold-light">More ways we staff</Eyebrow>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {other.map((o) => (
              <Link
                key={o.slug}
                href={`/solutions/${o.slug}`}
                className="group flex items-center justify-between border border-white/15 p-7 hover:border-gold"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold">{o.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-white/70">{o.short}</p>
                </div>
                <span className="ml-4 text-2xl text-gold transition group-hover:translate-x-1">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
