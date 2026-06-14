import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/weforge",
    icon: IconBrandLinkedin,
  },
  {
    label: "X (Twitter)",
    href: "https://x.com/weforge",
    icon: IconBrandTwitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/weforge",
    icon: IconBrandInstagram,
  },
] as const;

export function SocialBanner() {
  return (
    <div
      className="pointer-events-auto border-b border-brand-border/20 bg-brand-cocoa text-brand-ivory"
      aria-label="Social media"
    >
      <div className="mx-auto flex h-10 max-w-[100rem] items-center justify-between gap-4 px-5 sm:justify-center sm:gap-6 xl:px-0">
        <p className="font-body text-xs font-medium tracking-wide text-brand-peach/80 sm:text-sm">
          Follow WeForge
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-brand-peach/80 transition-colors hover:text-brand-orange"
            >
              <Icon className="size-4" stroke={1.75} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
