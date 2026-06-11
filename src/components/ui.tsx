import Link from "next/link";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`eyebrow flex items-center gap-3 text-gold-dark ${className}`}>
      <span className="h-px w-8 bg-gold" aria-hidden />
      {children}
    </p>
  );
}

export function CTAButtons({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const primary =
    variant === "light"
      ? "bg-white text-plum-950 hover:bg-paper"
      : "bg-plum-900 text-white hover:bg-plum-700";
  const secondary =
    variant === "light"
      ? "border border-white/40 text-white hover:bg-white/10"
      : "border border-plum-900 text-plum-900 hover:bg-plum-900 hover:text-white";

  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      <Link href="/employers" className={`px-8 py-4 text-sm font-bold uppercase tracking-wide ${primary}`}>
        Request talent
      </Link>
      <Link href="/job-seekers" className={`px-8 py-4 text-sm font-bold uppercase tracking-wide ${secondary}`}>
        Submit resume
      </Link>
    </div>
  );
}
