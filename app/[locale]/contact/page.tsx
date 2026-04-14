import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactHeroAside } from "@/components/contact/ContactHeroAside";
import { whatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "contactPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: { en: "/en/contact", sw: "/sw/contact" },
    },
  };
}

function Hero() {
  const t = useTranslations("contactPage.hero");
  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
      aside={<ContactHeroAside />}
    />
  );
}

function ContactSplit({ locale }: { locale: string }) {
  const t = useTranslations("contactPage");
  const askMessage = useTranslations("hero")("ctaQuestion");

  return (
    <Container as="section" className="py-12 md:py-16">
      <div className="grid gap-10 md:grid-cols-[1.1fr_1fr]">
        <div
          className="reveal"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          <ContactForm locale={locale} />
        </div>

        <div
          className="reveal space-y-4"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          <h2 className="font-display text-xl text-gold mb-2">
            {t("direct.title")}
          </h2>

          <div className="rounded-2xl border border-gold/20 bg-card/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
              {t("direct.whatsapp")}
            </p>
            <a
              href={whatsappUrl(askMessage)}
              target="_blank"
              rel="noreferrer"
              className="font-display text-ink hover:text-gold transition text-lg"
            >
              +255 788 533 632
            </a>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-card/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
              {t("direct.call")}
            </p>
            <a
              href="tel:+255758144662"
              className="block font-display text-ink hover:text-gold transition text-lg"
            >
              +255 758 144 662
            </a>
            <a
              href="tel:+255794732426"
              className="block font-display text-ink hover:text-gold transition text-lg mt-1"
            >
              +255 794 732 426
            </a>
          </div>

          <div className="rounded-2xl border border-gold/20 bg-card/70 p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
              {t("direct.email")}
            </p>
            <a
              href="mailto:support@newvisioninventory.com"
              className="block text-ink hover:text-gold transition"
            >
              support@newvisioninventory.com
            </a>
            <a
              href="mailto:info@newvisioninventory.com"
              className="block text-ink hover:text-gold transition mt-1"
            >
              info@newvisioninventory.com
            </a>
          </div>

          <p className="text-xs text-muted/80 px-1">{t("direct.hours")}</p>
        </div>
      </div>
    </Container>
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell locale={locale}>
      <Hero />
      <ContactSplit locale={locale} />
    </PageShell>
  );
}
