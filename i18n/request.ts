import { getRequestConfig } from "next-intl/server";

const locales = ["en", "pl"];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale =
    requested && locales.includes(requested)
      ? requested
      : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});