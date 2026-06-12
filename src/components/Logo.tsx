import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${company.name} home`}>
      <Image
        src={light ? "/logo-mark-light.svg" : "/logo-mark.svg"}
        alt=""
        width={44}
        height={44}
        className="h-9 w-9 shrink-0 sm:h-11 sm:w-11"
        priority
      />
      <span className="leading-none">
        <span className={`block font-display text-lg font-bold tracking-tight sm:text-xl ${light ? "text-white" : "text-ink"}`}>
          DIRECT STAFF <span className="text-gold">INC.</span>
        </span>
        <span className={`mt-1 block font-mono text-[0.6rem] uppercase tracking-eyebrow ${light ? "text-white/70" : "text-steel"}`}>
          Executive &amp; Technical Search
        </span>
      </span>
    </Link>
  );
}
