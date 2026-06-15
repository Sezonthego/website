import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function AnnouncementBanner() {
  return (
    <Link
      href="/contact"
      className="
        pointer-events-auto
        flex
        w-full
        min-h-10
        items-center
        justify-center
        gap-2
        bg-brand-cocoa
        px-4
        text-center
        font-body
        text-[13px]
        font-medium
        text-brand-ivory
        transition-colors
        hover:bg-brand-orange
      "
    >
      <span>
        Free recruitment audit — discover what&apos;s limiting enrollment
      </span>

      <ArrowRight className="size-4 stroke-[1.8]" />
    </Link>
  );
}