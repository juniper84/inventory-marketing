import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

const LIST_KEYS = ["branches", "barcodes", "customers", "exports"] as const;

export function Emphasis() {
  const t = useTranslations("emphasis");

  return (
    <Container as="section" className="py-12">
      <div className="grid gap-10 rounded-3xl border border-gold/20 bg-black/30 p-8 md:p-12 md:grid-cols-2 shadow-elevated">
        <div className="reveal" style={{ ["--delay" as never]: "0.1s" }}>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
            {t("title")}
          </h2>
          <p className="text-muted leading-relaxed">{t("body")}</p>
        </div>
        <ul
          className="reveal grid gap-3 content-center"
          style={{ ["--delay" as never]: "0.2s" }}
        >
          {LIST_KEYS.map((key) => (
            <li key={key} className="checklist-bullet text-muted">
              {t(`list.${key}`)}
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
