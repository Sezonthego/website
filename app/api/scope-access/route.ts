import { NextResponse } from "next/server";

import {
  getScopeAccessToken,
  isScopeAccessConfigured,
  isValidScopePassword,
  SCOPE_ACCESS_COOKIE,
  SCOPE_ACCESS_MAX_AGE,
} from "@/lib/scope-access";

type Locale = "en" | "pl";

export async function POST(request: Request) {
  let formData: FormData;

  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const locale: Locale = formData.get("locale") === "pl" ? "pl" : "en";
  const password = formData.get("password");
  const scopeFormUrl = new URL(`/${locale}/scope-form`, request.url);

  if (!isScopeAccessConfigured()) {
    scopeFormUrl.searchParams.set("access", "unavailable");
    return NextResponse.redirect(scopeFormUrl, 303);
  }

  if (typeof password !== "string" || !isValidScopePassword(password)) {
    scopeFormUrl.searchParams.set("access", "invalid");
    return NextResponse.redirect(scopeFormUrl, 303);
  }

  const token = getScopeAccessToken();
  if (!token) {
    scopeFormUrl.searchParams.set("access", "unavailable");
    return NextResponse.redirect(scopeFormUrl, 303);
  }

  const response = NextResponse.redirect(scopeFormUrl, 303);
  response.cookies.set(SCOPE_ACCESS_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SCOPE_ACCESS_MAX_AGE,
  });

  return response;
}
