import { PageHero } from "./PageHero";

export function LegalLayout({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} />
      <section className="bg-white py-16 lg:py-20">
        <div className="wrap max-w-3xl">
          <p className="mb-10 text-sm text-steel">Last updated: {updated}</p>
          <div className="legal-body space-y-8">{children}</div>
        </div>
      </section>
    </>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-bold text-plum-900">{heading}</h2>
      <div className="mt-3 space-y-3 text-base leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}
