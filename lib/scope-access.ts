import { createHash, timingSafeEqual } from "node:crypto";

export const SCOPE_ACCESS_COOKIE = "weforge_scope_access";
export const SCOPE_ACCESS_MAX_AGE = 60 * 60 * 12;

function digest(value: string) {
  return createHash("sha256").update(value).digest();
}

export function isScopeAccessConfigured() {
  return Boolean(process.env.SCOPE_FORM_PASSWORD);
}

export function isValidScopePassword(candidate: string) {
  const password = process.env.SCOPE_FORM_PASSWORD;

  if (!password) {
    return false;
  }

  return timingSafeEqual(digest(candidate), digest(password));
}

export function getScopeAccessToken() {
  const password = process.env.SCOPE_FORM_PASSWORD;

  if (!password) {
    return null;
  }

  return createHash("sha256")
    .update(`weforge-scope-access:${password}`)
    .digest("base64url");
}

export function hasScopeAccess(cookieValue: string | undefined) {
  const expectedToken = getScopeAccessToken();

  if (!cookieValue || !expectedToken) {
    return false;
  }

  return timingSafeEqual(digest(cookieValue), digest(expectedToken));
}
