import { cn } from "@/lib/utils";

const variants = [
  "from-brand-orange/20 via-brand-peach to-brand-ivory",
  "from-brand-indigo/15 via-brand-peach to-brand-ivory",
  "from-brand-orange/12 via-[#ffe8d6] to-brand-ivory",
] as const;

export function BlogPlaceholderImage({
  variant = 0,
  className,
}: {
  variant?: number;
  className?: string;
}) {
  const gradient = variants[variant % variants.length];

  return (
    <div
      className={cn(
        "relative aspect-[16/10] w-full overflow-hidden bg-brand-peach",
        className
      )}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute inset-0 bg-linear-to-br",
          gradient
        )}
      />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(10,3,0,0.04) 1px, transparent 1px), linear-gradient(rgba(10,3,0,0.04) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,79,0,0.12),transparent_55%)]" />
    </div>
  );
}
