import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #070707 0%, #0d0b08 55%, #080707 100%)",
          color: "#f6f2e8",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 20% 0%, rgba(215, 176, 91, 0.18), transparent 60%), radial-gradient(circle at 80% 10%, rgba(147, 122, 71, 0.15), transparent 60%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            zIndex: 1,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "rgba(215, 176, 91, 0.12)",
              border: "2px solid rgba(215, 176, 91, 0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#d7b05b",
              fontSize: 32,
              fontWeight: 700,
              letterSpacing: "0.04em",
            }}
          >
            NV
          </div>
          <div
            style={{
              color: "#d7b05b",
              fontSize: 30,
              fontWeight: 600,
              letterSpacing: "0.04em",
              display: "flex",
            }}
          >
            New Vision Inventory
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24, zIndex: 1 }}>
          <div
            style={{
              color: "#d7b05b",
              fontSize: 22,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Inventory · POS · Reports
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.1,
              maxWidth: "92%",
              letterSpacing: "-0.01em",
              display: "flex",
            }}
          >
            {t("title")}
          </div>
          <div
            style={{
              fontSize: 26,
              color: "#cbbf9e",
              lineHeight: 1.4,
              maxWidth: "84%",
              display: "flex",
            }}
          >
            {params.locale === "sw"
              ? "Imejengwa kwa biashara za Tanzania. Offline-tayari. Ledger-kwanza."
              : "Built for Tanzanian businesses. Offline-ready. Ledger-first."}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
