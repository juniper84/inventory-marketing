"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { cn } from "@/lib/cn";
import { useTransition } from "react";

export function LangToggle() {
  const t = useTranslations("langToggle");
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<{ locale: string }>();
  const [isPending, startTransition] = useTransition();
  const current = params?.locale === "sw" ? "sw" : "en";

  function setLocale(next: "en" | "sw") {
    if (next === current) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-gold/25 bg-black/40 p-1",
        isPending && "opacity-60",
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={current === "en"}
        aria-label={t("switchToEnglish")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition",
          current === "en"
            ? "bg-gold/20 text-ink"
            : "text-muted hover:text-ink",
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("sw")}
        aria-pressed={current === "sw"}
        aria-label={t("switchToSwahili")}
        className={cn(
          "rounded-full px-3 py-1 text-xs font-medium transition",
          current === "sw"
            ? "bg-gold/20 text-ink"
            : "text-muted hover:text-ink",
        )}
      >
        SW
      </button>
    </div>
  );
}
