"use client";

import { useState, useRef, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  StockLedgerIcon,
  POSIcon,
  OfflineIcon,
  ReportsIcon,
  MultiBranchIcon,
} from "@/components/icons/FeatureIcons";
import { cn } from "@/lib/cn";

const ITEMS = [
  { key: "stock", href: "/features/stock-ledger", Icon: StockLedgerIcon },
  { key: "pos", href: "/features/pos", Icon: POSIcon },
  { key: "offline", href: "/features/offline-mode", Icon: OfflineIcon },
  { key: "reports", href: "/features/reports", Icon: ReportsIcon },
  { key: "branches", href: "/features/multi-branch", Icon: MultiBranchIcon },
] as const;

export function MegaMenu({ triggerLabel }: { triggerLabel: string }) {
  const [open, setOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const tFeatures = useTranslations("featuresPage");
  const tNav = useTranslations("nav");

  function scheduleClose() {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setOpen(false), 120);
  }

  function cancelClose() {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "flex items-center gap-1.5 text-sm transition",
          open ? "text-ink" : "text-muted hover:text-ink",
        )}
      >
        {triggerLabel}
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          className={cn("transition", open && "rotate-180")}
          aria-hidden
        >
          <path
            d="M2 3.5L5 6.5L8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-4 w-[min(92vw,720px)] -translate-x-1/2 overflow-hidden rounded-3xl border border-gold/30 bg-[#0a0907]/95 backdrop-blur-xl shadow-elevated"
        >
          <div className="px-7 pt-6 pb-3 border-b border-white/5">
            <p className="text-[0.62rem] uppercase tracking-[0.2em] text-gold mb-1.5">
              {tNav("exploreFeatures")}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              {tNav("megaSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
            {ITEMS.map(({ key, href, Icon }) => (
              <Link
                key={key}
                href={href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className="group flex items-start gap-4 bg-[#0a0907] p-5 transition hover:bg-gold/8"
              >
                <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent text-gold transition group-hover:scale-105">
                  <Icon size={24} />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-sm text-gold leading-tight">
                    {tFeatures(`${key}.shortTitle`)}
                  </span>
                  <span className="block text-xs text-muted leading-snug mt-1 line-clamp-2">
                    {tFeatures(`${key}.pitch`)}
                  </span>
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/features"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between px-7 py-4 bg-gold/5 text-sm text-gold hover:bg-gold/10 transition"
          >
            <span className="font-display tracking-wide">
              {tNav("seeAllFeatures")}
            </span>
            <span aria-hidden className="transition group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      )}
    </div>
  );
}
