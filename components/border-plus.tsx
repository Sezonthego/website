import { cn } from "@/lib/utils";

export function BorderPlus({
  className,
}: {
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        `
        pointer-events-none
        absolute
        z-20
        size-[21px]
        bg-brand-ivory

       before:absolute
before:left-1/2
before:top-1/2
before:h-3
before:w-[2px]
before:-translate-x-1/2
before:-translate-y-1/2
before:bg-brand-border

after:absolute
after:left-1/2
after:top-1/2
after:h-[2px]
after:w-3
after:-translate-x-1/2
after:-translate-y-1/2
after:bg-brand-border
        `,
        className
      )}
    />
  );
}