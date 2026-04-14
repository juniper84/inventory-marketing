"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

type Status = "idle" | "sending" | "success" | "error";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

export function ContactForm({ locale }: { locale: string }) {
  const t = useTranslations("contactPage.form");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim() || undefined,
      businessName: String(data.get("businessName") ?? "").trim() || undefined,
      message: String(data.get("message") ?? "").trim(),
      locale,
      website: String(data.get("website") ?? ""),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setErrorMessage(t("error"));
      return;
    }

    setStatus("sending");
    setErrorMessage(null);

    try {
      const res = await fetch(`${API_BASE}/marketing/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`status ${res.status}`);
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage(t("error"));
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-gold/40 bg-gradient-to-br from-gold/15 via-transparent to-transparent p-10 shadow-elevated">
        <div className="flex items-center gap-3 mb-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path
                d="M3.5 9.5l3.5 3.5 7.5-7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h2 className="font-display text-xl text-gold">{t("title")}</h2>
        </div>
        <p className="text-muted leading-relaxed">{t("success")}</p>
      </div>
    );
  }

  const baseInput =
    "rounded-xl border border-gold/20 bg-black/30 px-4 py-3 text-ink placeholder:text-muted/40 focus:border-gold/60 focus:outline-none transition";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-gold/20 bg-card/70 p-8 shadow-elevated"
      noValidate
    >
      <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
        {t("title")}
      </h2>
      <p className="text-muted mb-6 text-sm">{t("subtitle")}</p>

      <div className="grid gap-4">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.16em] text-muted">
            {t("name")}
          </label>
          <input id="name" name="name" type="text" required minLength={2} maxLength={100} className={baseInput} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-1.5">
            <label htmlFor="email" className="text-xs uppercase tracking-[0.16em] text-muted">
              {t("email")}
            </label>
            <input id="email" name="email" type="email" required maxLength={200} className={baseInput} />
          </div>
          <div className="grid gap-1.5">
            <label htmlFor="phone" className="text-xs uppercase tracking-[0.16em] text-muted">
              {t("phone")}
            </label>
            <input id="phone" name="phone" type="tel" maxLength={40} className={baseInput} />
          </div>
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="businessName" className="text-xs uppercase tracking-[0.16em] text-muted">
            {t("business")}
          </label>
          <input id="businessName" name="businessName" type="text" maxLength={150} className={baseInput} />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-muted">
            {t("message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={4000}
            placeholder={t("messagePlaceholder")}
            className={baseInput}
          />
        </div>

        {/* Honeypot — hidden from real users */}
        <div
          aria-hidden
          className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
          style={{ position: "absolute", left: "-9999px" }}
        >
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className={cn(
            "mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition",
            status === "sending"
              ? "bg-gold/60 text-[#1a1206] opacity-70 cursor-not-allowed"
              : "bg-gold text-[#1a1206] shadow-gold hover:-translate-y-0.5 hover:shadow-gold-strong",
          )}
        >
          {status === "sending" ? t("sending") : t("submit")}
        </button>

        {status === "error" && errorMessage && (
          <p className="text-sm text-rose-300/90" role="alert">
            {errorMessage}
          </p>
        )}
      </div>
    </form>
  );
}
