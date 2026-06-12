import { Eyebrow } from "./ui";

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-plum-950 text-white">
      <div className="absolute inset-0 blueprint opacity-30" aria-hidden />
      <div className="relative wrap py-14 lg:py-16">
        <Eyebrow className="text-gold-light">{eyebrow}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl">
          {title}
        </h1>
        {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80">{intro}</p>}
      </div>
    </section>
  );
}
