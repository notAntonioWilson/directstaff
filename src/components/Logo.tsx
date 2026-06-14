import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/site";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="group flex items-center" aria-label={`${company.name} home`}>
      <Image
        src={light ? "/ds-logo-white.png" : "/ds-logo.png"}
        alt={company.name}
        width={860}
        height={128}
        className="h-8 w-auto sm:h-9"
        priority
      />
    </Link>
  );
}
