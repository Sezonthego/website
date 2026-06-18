"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export function CookieBanner() {
  const t = useTranslations("Cookies");
  const locale = useLocale();

  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
  
    if (consent === "accepted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleChoice = (value: "accepted" | "ignored") => {
    localStorage.setItem("cookie-consent", value);
  
    if (value === "accepted") {
      window.gtag?.("consent", "update", {
        analytics_storage: "granted",
      });
    }
  
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div
      className="
        fixed
        bottom-5
        left-1/2
        z-[999]

        w-[calc(100%-2rem)]
        max-w-[540px]
        -translate-x-1/2

        border
        border-brand-border

        bg-brand-ivory

        p-5

        shadow-[0_20px_60px_rgba(10,3,0,0.14)]
      "
    >
      <h3
        className="
          font-body
          text-[20px]
          font-medium
          tracking-[-0.02em]
          text-brand-cocoa
        "
      >
        {t("title")}
      </h3>

      <p
  className="
    mt-3
    font-body
    text-[13px]
    font-light
    leading-[1.6]
    text-brand-muted
    pb-4
  "
>
  {t("description")}{" "}

  <Link
    href={`/${locale}/privacy`}
    className="
      font-medium
      text-brand-cocoa
      underline
      underline-offset-4
      transition-colors
      hover:text-brand-orange
    "
  >
    {t("privacy")}
  </Link>
</p>

      <div
        className="
          mt-5

          flex
          flex-col
          gap-3

          sm:flex-row
          sm:items-center
        "
      >
     <button
  type="button"
  onClick={() => handleChoice("accepted")}
  className="
    flex
    h-10
    items-center
    justify-center

    bg-brand-orange

    px-5

    font-body
    text-[12px]
    font-medium
    uppercase
    tracking-[-0.01em]

    text-brand-ivory

    transition-colors
    hover:bg-brand-orange/90
  "
>
  {t("accept")}
</button>


<button
  type="button"
  onClick={() => handleChoice("ignored")}
  className="
    flex
    h-10
    items-center
    justify-center

    border
    border-brand-border

    px-5

    font-body
    text-[12px]
    font-medium
    uppercase

    text-brand-cocoa

    transition-colors

    hover:border-brand-orange
    hover:text-brand-orange
  "
>
  {t("ignore")}
</button>
      </div>
    </div>
  );
}