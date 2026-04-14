import { useTranslations } from "next-intl";
import { Container } from "./ui/Container";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tFeatures = useTranslations("featuresPage");

  return (
    <footer className="mt-20 border-t border-white/5 pt-14 pb-10">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold font-bold">
                NV
              </span>
              <span className="font-display text-gold text-base tracking-wider">
                New Vision Inventory
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              {t("blurb")}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t("productHeading")}
            </h4>
            <ul className="grid gap-2.5 text-sm text-muted">
              <li>
                <Link href="/features" className="hover:text-ink transition">
                  {tNav("features")}
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-ink transition">
                  {tNav("pricing")}
                </Link>
              </li>
              <li>
                <Link
                  href="/features/offline-mode"
                  className="hover:text-ink transition"
                >
                  {tFeatures("offline.shortTitle")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t("companyHeading")}
            </h4>
            <ul className="grid gap-2.5 text-sm text-muted">
              <li>
                <Link href="/about" className="hover:text-ink transition">
                  {tNav("about")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ink transition">
                  {tNav("contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-4">
              {t("legalHeading")}
            </h4>
            <ul className="grid gap-2.5 text-sm text-muted">
              <li>
                <Link href="/privacy" className="hover:text-ink transition">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ink transition">
                  {t("terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-xs text-muted">
          <span>{t("copyright")}</span>
          <span>{t("tagline")}</span>
        </div>
      </Container>
    </footer>
  );
}
