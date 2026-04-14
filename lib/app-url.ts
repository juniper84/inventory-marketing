export const APP_BASE_URL = "https://app.newvisioninventory.com";

export function appUrl(locale: string, path: string = ""): string {
  const normalizedLocale = locale === "sw" ? "sw" : "en";
  const trimmed = path.startsWith("/") ? path.slice(1) : path;
  return `${APP_BASE_URL}/${normalizedLocale}${trimmed ? `/${trimmed}` : ""}`;
}
