import Link from "next/link";
import type { SVGProps } from "react";

import { cn } from "@/lib/utils";

const logoTone = {
  dark: {
    primary: "#0A0300",
    secondary: "rgba(10, 3, 0, 0.58)",
  },
  light: {
    primary: "#FFFEFA",
    secondary: "rgba(255, 243, 230, 0.72)",
  },
} as const;

export const Logo = ({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) => {
  return (
    <Link
      href="/"
      aria-label="WeForge Clinical home"
      className={cn("inline-flex shrink-0 items-center", className)}
    >
      <LogoWordmark tone={tone} />
    </Link>
  );
};

const LogoWordmark = ({ tone }: { tone: "dark" | "light" }) => {
  const colors = logoTone[tone];

  return (
    <svg
      aria-hidden="true"
      className="h-8 w-auto"
      viewBox="0 0 190 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={colors.primary}>
        <path d="M2.5 11.5H11L16.5 32H8.25L2.5 11.5Z" />
        <path d="M13.25 11.5H21.5L24.25 25.5L18.75 32L13.25 11.5Z" />
        <path d="M23.75 11.5H32.5L23.75 32H18.75L23.75 11.5Z" />
      </g>
      <circle cx="27.5" cy="7" r="3.5" fill="#FF4F00" />
      <text
        x="42"
        y="27"
        fill={colors.primary}
        fontFamily="var(--font-poppins), Arial, sans-serif"
        fontSize="25"
        fontWeight="700"
        letterSpacing="-0.4"
      >
        weforge
      </text>
      <text
        x="143"
        y="27"
        fill={colors.secondary}
        fontFamily="var(--font-poppins), Arial, sans-serif"
        fontSize="12"
        fontStyle="italic"
        fontWeight="500"
      >
        clinical
      </text>
    </svg>
  );
};

export const LogoIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-10", className)}
      aria-hidden="true"
      {...props}
    >
      <g fill="currentColor">
        <path d="M5 13H13.25L18.25 32H10L5 13Z" />
        <path d="M15 13H23L25.5 26L20.25 32L15 13Z" />
        <path d="M25 13H33.5L25 32H20.25L25 13Z" />
      </g>
      <circle cx="28.5" cy="8" r="4" fill="#FF4F00" />
    </svg>
  );
};
