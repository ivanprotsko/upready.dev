import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const COUNTRY_TO_LOCALE: Record<string, string> = {
  RU: "ru",
  BY: "ru",
  UA: "ru",
  KZ: "ru",
  PL: "pl",
};

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  const country = request.headers.get("x-vercel-ip-country") || "";
  const suggestedLocale = COUNTRY_TO_LOCALE[country];

  if (suggestedLocale) {
    response.headers.set("x-suggested-locale", suggestedLocale);
    response.cookies.set("suggested-locale", suggestedLocale, {
      path: "/",
      maxAge: 60 * 60 * 24,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
