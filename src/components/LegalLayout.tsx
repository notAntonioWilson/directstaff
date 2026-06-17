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

          <div className="mt-12 border-t border-line pt-8">
            <h2 className="font-display text-2xl font-bold text-plum-900">Equal Opportunity Employer</h2>
            <p className="mt-3 text-base leading-relaxed text-ink/85">
              Direct Staff is proud to be an equal opportunity employer and encourages all individuals to
              join our team. Direct Staff provides equal employment opportunities to all employees and
              applicants without regard to race, color, religion, national origin, sex (including
              pregnancy, childbirth, and related medical conditions), sexual orientation, gender identity
              or expression, age, height, weight, familial status, marital status, disability, genetic
              information, military or veteran status, or any other status protected by applicable law.
              Our equal opportunity commitment applies to all aspects of employment including recruiting,
              hiring, training, promotion and compensation.
            </p>
          </div>
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
