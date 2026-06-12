import Link from "next/link";
import { company } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${company.name} home`}>
      <span className="grid h-9 w-9 sm:h-11 sm:w-11 place-items-center bg-plum-900 font-display text-base sm:text-lg font-bold tracking-tight text-white">
        DS
      </span>
      <span className="leading-none">
        <span className={`block font-display text-lg sm:text-xl font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          DIRECT STAFF <span className="text-gold">INC.</span>
        </span>
        <span className={`mt-1 block font-mono text-[0.6rem] uppercase tracking-eyebrow ${light ? "text-white/70" : "text-steel"}`}>
          Executive &amp; Technical Search
        </span>
      </span>
    </Link>
  );
}
