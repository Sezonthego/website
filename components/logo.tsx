import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export const Logo = ({
  className,
}: {
  className?: string;
  tone?: "dark" | "light";
}) => {
  return (
    <Link
      href="/"
      aria-label="Weforge home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src="/image/weforge-cocas.svg"
        alt="Weforge"
        width={150}
        height={40}
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <img
      src="/logo-dark.svg"
      alt="Weforge"
      className={className}
    />
  );
};