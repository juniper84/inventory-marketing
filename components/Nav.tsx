import { useTranslations } from "next-intl";
import { Container } from "./ui/Container";
import { LangToggle } from "./LangToggle";
import { Link } from "@/i18n/routing";
import { appUrl } from "@/lib/app-url";

export function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");

  return (
    <Container as="header" className="pt-8 md:pt-10">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 font-display tracking-wider">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold font-bold">
            NV
          </span>
          <span className="text-gold text-base">New Vision Inventory</span>
        </Link>
        <div className="flex flex-wrap items-center gap-4 md:gap-5 text-sm text-muted">
          <Link href="/features" className="hover:text-ink transition">
            {t("features")}
          </Link>
          <Link href="/pricing" className="hover:text-ink transition">
            {t("pricing")}
          </Link>
          <Link href="/about" className="hover:text-ink transition">
            {t("about")}
          </Link>
          <Link href="/contact" className="hover:text-ink transition">
            {t("contact")}
          </Link>
          <a
            href={appUrl(locale, "login")}
            className="rounded-full border border-gold/25 px-4 py-2 text-ink transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40"
          >
            {t("signIn")}
          </a>
          <LangToggle />
        </div>
      </nav>
    </Container>
  );
}
