import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "pl"],
  defaultLocale: "pl",
  localePrefix: "always",
  localeDetection: false,
});

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};