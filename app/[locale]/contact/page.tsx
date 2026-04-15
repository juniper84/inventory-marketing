import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { Container } from "@/components/ui/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { whatsappUrl } from "@/lib/whatsapp";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contactPage.metadata" });
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
  const askMessage = useTranslations("hero")("ctaQuestion");
  return (
    <Container as="section" className="pt-16 pb-8 md:pt-24 md:pb-12">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <p
            className="reveal text-xs uppercase tracking-[0.28em] text-gold mb-6"
            style={{ ["--delay" as never]: "0.05s" }}
          >
            {t("eyebrow")}
          </p>
          <h1
            className="reveal font-display text-5xl md:text-7xl leading-[1] tracking-tight mb-6"
            style={{ ["--delay" as never]: "0.1s" }}
          >
            {t("title")}
          </h1>
          <p
            className="reveal text-muted text-base md:text-lg max-w-2xl leading-relaxed"
            style={{ ["--delay" as never]: "0.2s" }}
          >
            {t("subtitle")}
          </p>
        </div>

        <div
          className="reveal relative rounded-3xl border border-gold/30 bg-gradient-to-br from-gold/15 via-gold/5 to-transparent p-7 md:p-8 shadow-elevated"
          style={{ ["--delay" as never]: "0.25s" }}
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gold/80 mb-3">
            {t("phoneLabel")}
          </p>
          <a
            href={whatsappUrl(askMessage)}
            target="_blank"
            rel="noreferrer"
            className="block font-display text-2xl md:text-3xl text-ink hover:text-gold transition tracking-tight leading-tight mb-1"
          >
            +255 788 533 632
          </a>
          <p className="text-sm text-muted mb-5">WhatsApp</p>

          <div className="h-px bg-white/10 mb-5" />

          <a
            href="tel:+255758144662"
            className="block font-display text-xl md:text-2xl text-ink hover:text-gold transition tracking-tight"
          >
            +255 758 144 662
          </a>
          <a
            href="tel:+255794732426"
            className="block font-display text-xl md:text-2xl text-ink hover:text-gold transition tracking-tight mt-1"
          >
            +255 794 732 426
          </a>
          <p className="text-xs text-muted mt-3">{t("phoneHoursLine")}</p>
        </div>
      </div>
    </Container>
  );
}

function FormAndEmail({ locale }: { locale: string }) {
  const t = useTranslations("contactPage");
  return (
    <Container as="section" className="py-12 md:py-20">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div
          className="reveal"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          <ContactForm locale={locale} />
        </div>

        <div
          className="reveal space-y-6 md:pt-4"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-2">
              {t("direct.email")}
            </p>
            <div className="space-y-1">
              <a
                href="mailto:support@newvisioninventory.com"
                className="block font-display text-lg text-ink hover:text-gold transition"
              >
                support@newvisioninventory.com
              </a>
              <a
                href="mailto:info@newvisioninventory.com"
                className="block font-display text-lg text-ink hover:text-gold transition"
              >
                info@newvisioninventory.com
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <p className="text-xs uppercase tracking-[0.22em] text-gold mb-2">
              {t("direct.hours")}
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Dar es Salaam, Tanzania<br />
              East Africa Time (EAT)
            </p>
          </div>
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
      <div className="border-t border-white/5 bg-[#050403]">
        <FormAndEmail locale={locale} />
      </div>
    </PageShell>
  );
}
