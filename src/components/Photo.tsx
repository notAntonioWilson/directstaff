import Image from "next/image";

type Grade = "plum" | "hero" | "cta" | "none";

/**
 * Photographic block with brand grade overlay.
 * Drop a real image at the given /public path and it renders automatically.
 * A branded placeholder texture sits underneath so nothing ever looks broken.
 */
export function Photo({
  src,
  alt,
  className = "",
  grade = "plum",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  grade?: Grade;
  priority?: boolean;
}) {
  const gradeClass =
    grade === "hero" ? "grade-hero" : grade === "cta" ? "grade-cta" : grade === "plum" ? "grade-plum" : "";
  return (
    <div className={`relative overflow-hidden bg-plum-900 ${gradeClass} ${className}`}>
      <div className="absolute inset-0 blueprint opacity-40" aria-hidden />
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
