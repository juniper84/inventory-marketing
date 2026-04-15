import { useTranslations } from "next-intl";
import { Container } from "./ui/Container";
import { LangToggle } from "./LangToggle";
import { MegaMenu } from "./MegaMenu";
import { Link } from "@/i18n/routing";
import { appUrl } from "@/lib/app-url";

export function Nav({ locale }: { locale: string }) {
  const t = useTranslations("nav");

  const navLinkClass =
    "relative text-sm text-muted transition hover:text-ink py-1 " +
    "after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-px " +
    "after:bg-gold after:origin-left after:scale-x-0 hover:after:scale-x-100 " +
    "after:transition-transform after:duration-300";

  return (
    <Container as="header" className="pt-6 md:pt-8 pb-2">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 font-display tracking-wider group"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold font-bold transition group-hover:border-gold/60 group-hover:bg-gold/15">
            NV
          </span>
          <span className="text-gold text-base">New Vision Inventory</span>
        </Link>

        <div className="flex flex-wrap items-center gap-5 md:gap-7">
          <MegaMenu triggerLabel={t("features")} />
          <Link href="/pricing" className={navLinkClass}>
            {t("pricing")}
          </Link>
          <Link href="/about" className={navLinkClass}>
            {t("about")}
          </Link>
          <Link href="/contact" className={navLinkClass}>
            {t("contact")}
          </Link>

          <span className="hidden md:block h-6 w-px bg-white/10" aria-hidden />

          <a
            href={appUrl(locale, "login")}
            className="text-sm text-muted transition hover:text-ink"
          >
            {t("signIn")}
          </a>
          <a
            href={appUrl(locale, "signup")}
            className="inline-flex items-center gap-1.5 rounded-full bg-gold px-4 py-2 text-sm font-semibold text-[#1a1206] shadow-gold transition hover:-translate-y-0.5 hover:shadow-gold-strong"
          >
            {t("ctaStartTrial")}
            <span aria-hidden className="transition">→</span>
          </a>
          <LangToggle />
        </div>
      </nav>
    </Container>
  );
}
