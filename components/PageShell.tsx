import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  locale,
  children,
}: {
  locale: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav locale={locale} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
