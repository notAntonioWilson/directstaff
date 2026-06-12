import { Eyebrow } from "./ui";

export function FAQ({ items, eyebrow = "Questions" }: { items: { q: string; a: string }[]; eyebrow?: string }) {
  return (
    <section className="blueprint bg-paper py-20 lg:py-24">
      <div className="wrap">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink">
          Common questions, answered.
        </h2>
        <div className="mt-12 divide-y divide-line border-y border-line">
          {items.map((it) => (
            <details key={it.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-xl font-bold text-plum-900">{it.q}</span>
                <span className="text-2xl text-gold transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
