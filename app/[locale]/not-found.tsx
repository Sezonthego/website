"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname.startsWith("/pl")) {
      router.replace("/pl");
    } else {
      router.replace("/en");
    }
  }, [pathname, router]);

  return null;
}