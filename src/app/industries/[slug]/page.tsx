import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Eyebrow } from "@/components/ui";
import { RequestTalentForm } from "@/components/RequestTalentForm";
import { industries, solutions } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) return { title: "Industries | Direct Staff Inc." };
  return {
    title: `${i.title} Staffing | Direct Staff Inc.`,
    description: i.intro,
  };
}

export default function IndustryPage({ params }: { params: { slug: string } }) {
  const i = industries.find((x) => x.slug === params.slug);
  if (!i) notFound();

  const others = industries.filter((x) => x.slug !== i.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-plum-950 text-white">
        <div className="absolute inset-0">
          <Photo src={i.image} alt={i.title} grade="hero" priority className="h-full w-full" />
        </div>
        <div className="relative wrap py-16 lg:py-20">
          <nav className="mb-8 flex items-center gap-2 text-xs text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-gold-light">Home</Link>
            <span>/</span>
            <Link href="/industries" className="hover:text-gold-light">Industries</Link>
            <span>/</span>
            <span className="text-white/90">{i.title}</span>
          </nav>
          <Eyebrow className="text-gold-light">Industries</Eyebrow>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            {i.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{i.intro}</p>
        </div>
      </section>

      {/* Body + form */}
      <section className="bg-white py-14 lg:py-16">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Eyebrow>Overview</Eyebrow>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/85">
              <p>{i.overview}</p>
              <p>{i.detail}</p>
            </div>

            <h2 className="mt-12 font-display text-2xl font-bold text-plum-900">Roles we place in {i.title.toLowerCase()}</h2>
            <p className="mt-3 text-sm text-steel">
              A representative sample of the technical and engineering positions we staff in this sector:
            </p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {i.roles.map((r) => (
                <li key={r} className="flex gap-3 border-l-2 border-gold pl-4 text-sm text-ink">
                  {r}
                </li>
              ))}
            </ul>

            {/* Solutions applied to this industry */}
            <h2 className="mt-12 font-display text-2xl font-bold text-plum-900">How we staff this sector</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {solutions.map((s) => (
                <Link key={s.slug} href={`/solutions/${s.slug}`} className="group border border-line p-5 hover:border-plum-700">
                  <h3 className="font-display text-lg font-bold text-plum-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-steel">{s.short}</p>
                  <span className="mt-3 inline-block text-xs font-bold uppercase tracking-wide text-plum-700 group-hover:text-gold-dark">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Sticky form */}
          <div className="lg:col-span-5">
            <div className="sticky top-32 border border-line bg-paper p-7">
              <Eyebrow>Start a search</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink">Request {i.title.toLowerCase()} talent</h2>
              <p className="mt-2 text-sm text-steel">
                Tell us the role. A recruiter who knows this sector follows up to scope it and return a
                shortlist.
              </p>
              <div className="mt-6">
                <RequestTalentForm variant="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="blueprint bg-paper py-14 lg:py-16">
        <div className="wrap">
          <Eyebrow>More industries</Eyebrow>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <Link key={o.slug} href={`/industries/${o.slug}`} className="group border border-line bg-white p-6 hover:border-plum-700">
                <h3 className="font-display text-xl font-bold text-plum-900">{o.title}</h3>
                <p className="mt-2 text-sm text-steel">{o.blurb}</p>
                <span className="mt-4 inline-block text-xs font-bold uppercase tracking-wide text-plum-700 group-hover:text-gold-dark">Explore →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
