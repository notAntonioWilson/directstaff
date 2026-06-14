import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center" aria-label={`${company.name} home`}>
      <Image
        src={light ? "/ds-logo-white.png" : "/ds-logo.png"}
        alt={company.name}
        width={3517}
        height={992}
        className="h-10 w-auto sm:h-12"
        priority
      />
    </Link>
  );
}
