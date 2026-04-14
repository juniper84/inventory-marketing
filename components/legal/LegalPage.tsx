import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";

export function LegalPage({
  namespace,
  sectionKeys,
}: {
  namespace: string;
  sectionKeys: readonly string[];
}) {
  const t = useTranslations(namespace);
  return (
    <Container as="section" className="pt-16 pb-20 md:pt-24">
      <div className="grid gap-12 lg:grid-cols-[1fr_3fr]">
        <aside className="hidden lg:block sticky top-24 self-start">
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-4">
            Contents
          </p>
          <ul className="grid gap-2 text-sm">
            {sectionKeys.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-muted hover:text-ink transition"
                >
                  {t(`sections.${key}.title`)}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <article className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-gold mb-3">
            {t("lastUpdated")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-tight mb-5">
            {t("title")}
          </h1>
          <p className="text-muted text-lg leading-relaxed mb-12">
            {t("intro")}
          </p>

          <div className="space-y-10">
            {sectionKeys.map((key) => (
              <section key={key} id={key} className="scroll-mt-24">
                <h2 className="font-display text-2xl text-gold mb-3">
                  {t(`sections.${key}.title`)}
                </h2>
                <p className="text-muted leading-relaxed">
                  {t(`sections.${key}.body`)}
                </p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </Container>
  );
}
