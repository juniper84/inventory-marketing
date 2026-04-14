import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { PageShell } from "@/components/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { appUrl } from "@/lib/app-url";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "aboutPage.metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}/about`,
      languages: { en: "/en/about", sw: "/sw/about" },
    },
  };
}

const VALUE_KEYS = ["trust", "local", "calm", "longTerm"] as const;

function Hero() {
  const t = useTranslations("aboutPage.hero");
  return (
    <PageHero
      eyebrow={t("eyebrow")}
      title={t("title")}
      subtitle={t("subtitle")}
    />
  );
}

function Story() {
  const t = useTranslations("aboutPage.story");
  return (
    <Container as="section" className="py-16">
      <div className="max-w-3xl">
        <h2
          className="reveal font-display text-3xl md:text-4xl leading-tight mb-8"
          style={{ ["--delay" as never]: "0.1s" }}
        >
          {t("title")}
        </h2>
        <div className="space-y-6 text-muted leading-relaxed text-lg">
          <p className="reveal" style={{ ["--delay" as never]: "0.15s" }}>
            {t("p1")}
          </p>
          <p className="reveal" style={{ ["--delay" as never]: "0.25s" }}>
            {t("p2")}
          </p>
          <p className="reveal" style={{ ["--delay" as never]: "0.35s" }}>
            {t("p3")}
          </p>
        </div>
      </div>
    </Container>
  );
}

function Values() {
  const t = useTranslations("aboutPage.values");
  return (
    <Container as="section" className="py-16">
      <h2
        className="reveal font-display text-3xl md:text-4xl leading-tight mb-10 max-w-2xl"
        style={{ ["--delay" as never]: "0.1s" }}
      >
        {t("title")}
      </h2>
      <div className="grid gap-5 md:grid-cols-2">
        {VALUE_KEYS.map((key, i) => (
          <article
            key={key}
            className="reveal rounded-3xl border border-gold/20 bg-card/70 p-8 shadow-elevated"
            style={{ ["--delay" as never]: `${0.1 + i * 0.1}s` }}
          >
            <h3 className="font-display text-xl text-gold mb-3">
              {t(`items.${key}.title`)}
            </h3>
            <p className="text-muted leading-relaxed">
              {t(`items.${key}.body`)}
            </p>
          </article>
        ))}
      </div>
    </Container>
  );
}

function CTABanner({ locale }: { locale: string }) {
  const t = useTranslations("cta");
  return (
    <Container as="section" className="py-16">
      <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between rounded-3xl border border-gold/25 p-8 md:p-10 bg-gradient-to-br from-gold/12 via-transparent to-transparent shadow-elevated">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl leading-tight mb-2">
            {t("title")}
          </h2>
          <p className="text-muted">{t("body")}</p>
        </div>
        <ButtonLink variant="primary" sweep href={appUrl(locale, "signup")}>
          {t("button")}
        </ButtonLink>
      </div>
    </Container>
  );
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <PageShell locale={locale}>
      <Hero />
      <Story />
      <Values />
      <CTABanner locale={locale} />
    </PageShell>
  );
}
