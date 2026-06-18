"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { cn } from "@/lib/utils";

export const Logo = ({
  className,
}: {
  className?: string;
  tone?: "dark" | "light";
}) => {
  const locale = useLocale();

  return (
    <Link
      href={`/${locale}`}
      aria-label="Weforge home"
      className={cn(
        "inline-flex shrink-0 items-center -ml-0.7 lg:-ml-0",
        className
      )}
    >
      <Image
        src="/brand-logo/weforge-cocas-2.svg"
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
      alt="Weforge Logo"
      className={className}
    />
  );
};