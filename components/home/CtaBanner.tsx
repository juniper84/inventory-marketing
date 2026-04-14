import { useTranslations } from "next-intl";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { appUrl } from "@/lib/app-url";

export function CtaBanner({ locale }: { locale: string }) {
  const t = useTranslations("cta");
  return (
    <Container as="section" className="py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 rounded-3xl border border-gold/25 p-8 md:p-10 bg-gradient-to-br from-gold/12 via-transparent to-transparent shadow-elevated">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-2">
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
