"use client";

import { useState, useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { X } from "lucide-react";

const LOCALE_NAMES: Record<string, string> = {
  en: "English",
  ru: "Русский",
  pl: "Polski",
};

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export default function LocaleSuggestion() {
  const locale = useLocale();
  const t = useTranslations("localeSuggestion");
  const router = useRouter();
  const pathname = usePathname();
  const [suggestedLocale, setSuggestedLocale] = useState<string | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const suggested = getCookie("suggested-locale");
    const wasDismissed = getCookie("locale-suggestion-dismissed");
    if (suggested && suggested !== locale && !wasDismissed) {
      setSuggestedLocale(suggested);
    }
  }, [locale]);

  if (!suggestedLocale || dismissed) return null;

  const handleAccept = () => {
    router.replace(pathname, { locale: suggestedLocale as "en" | "ru" | "pl" });
  };

  const handleDismiss = () => {
    setDismissed(true);
    document.cookie = "locale-suggestion-dismissed=1; path=/; max-age=2592000";
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-bottom-4 fade-in duration-500">
      <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2.5 shadow-lg backdrop-blur-sm">
        <span className="text-sm text-muted-foreground">
          {t("message", { language: LOCALE_NAMES[suggestedLocale] || suggestedLocale })}
        </span>
        <button
          onClick={handleAccept}
          className="text-sm font-medium text-primary hover:underline cursor-pointer"
        >
          {t("accept")}
        </button>
        <button
          onClick={handleDismiss}
          className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
