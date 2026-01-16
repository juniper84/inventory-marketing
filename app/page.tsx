'use client';

import { useEffect, useMemo, useState } from "react";

const WHATSAPP_NUMBER = "255788533632";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

type MarketingCopy = {
  nav: {
    features: string;
    pricing: string;
    contact: string;
    signIn: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subhead: string;
    ctaTrial: string;
    ctaWhatsapp: string;
    ctaQuestion: string;
    stats: Array<{ value: string; label: string }>;
  };
  heroPanel: {
    title: string;
    metrics: Array<{ label: string; value: string }>;
    note: string;
  };
  status: Array<{ label: string }>;
  cube: {
    title: string;
    faces: Array<{ title: string; stat: string; note: string }>;
  };
  features: {
    title: string;
    subtitle: string;
    items: Array<{ title: string; body: string }>;
  };
  emphasis: {
    title: string;
    body: string;
    list: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    badge: string;
    tiers: Array<{
      name: string;
      price: string;
      suffix: string;
      bullets: string[];
      cta: string;
      ctaMessage: string;
      featured?: boolean;
    }>;
  };
  cta: {
    title: string;
    body: string;
    button: string;
  };
  contact: {
    title: string;
    subtitle: string;
    whatsapp: string;
    call: string;
    email: string;
  };
  footer: {
    left: string;
    right: string;
  };
};

const copy: Record<string, MarketingCopy> = {
  en: {
    nav: {
      features: "Features",
      pricing: "Pricing",
      contact: "Contact",
      signIn: "Sign in",
    },
    hero: {
      eyebrow: "Built for Tanzanian businesses",
      headline: "Know your stock. Sell faster. Grow with confidence.",
      subhead:
        "New Vision Inventory brings inventory, POS, purchases, and reports into one clear system—simple on day one, powerful as you scale.",
      ctaTrial: "Start free trial",
      ctaWhatsapp: "Buy on WhatsApp",
      ctaQuestion: "Ask a question",
      stats: [
        { value: "3 in 1", label: "Inventory + POS + Reports" },
        { value: "Offline ready", label: "Business & Enterprise tiers" },
        { value: "Secure", label: "Roles + audit logs" },
      ],
    },
    heroPanel: {
      title: "Live inventory pulse",
      metrics: [
        { label: "Low stock alerts", value: "Instant" },
        { label: "Daily sales snapshot", value: "Ready" },
        { label: "Branch performance", value: "Clear" },
      ],
      note: "Track stock, sales, and purchases from one calm dashboard.",
    },
    status: [
      { label: "Live uptime tracking" },
      { label: "Offline ready" },
      { label: "Audit‑logged actions" },
    ],
    cube: {
      title: "System focus cube",
      faces: [
        { title: "Stock", stat: "Realtime", note: "Counts, alerts, reorder points." },
        { title: "POS", stat: "Fast", note: "Drafts, receipts, refunds." },
        { title: "Reports", stat: "Clear", note: "VAT, P&L, staff performance." },
        { title: "Offline", stat: "Stable", note: "Sync when the signal returns." },
      ],
    },
    features: {
      title: "Everything you need, without the overwhelm",
      subtitle: "Start with the essentials. Unlock advanced controls as your business grows.",
      items: [
        {
          title: "Smart stock control",
          body: "Adjustments, counts, and low‑stock alerts keep shelves healthy.",
        },
        {
          title: "Fast POS sales",
          body: "Drafts, receipts, refunds, and returns all in one flow.",
        },
        {
          title: "Purchases + receiving",
          body: "Track suppliers, purchase orders, and receiving with confidence.",
        },
        {
          title: "Powerful reports",
          body: "Sales, VAT, P&L, staff, and customer insights—ready when you need them.",
        },
        {
          title: "Offline mode",
          body: "Keep selling even with unstable internet. Sync when you’re back online.",
        },
        {
          title: "Secure & accountable",
          body: "Role‑based access plus audit logs for every critical action.",
        },
      ],
    },
    emphasis: {
      title: "Made for busy teams",
      body:
        "Whether you run a shop, a pharmacy, or a growing retail chain, your data stays organized across branches and users. You always know what’s in stock, what sold, and what needs attention.",
      list: [
        "Branch‑level visibility and controls",
        "Barcode lookup and printing",
        "Customer and supplier tracking",
        "Exports for compliance and audits",
      ],
    },
    pricing: {
      title: "Simple monthly pricing",
      subtitle: "Pick a plan that matches your scale. Upgrade anytime.",
      badge: "Most popular",
      tiers: [
        {
          name: "Starter",
          price: "40,000 TZS",
          suffix: "/month",
          bullets: [
            "1 branch, 5 users",
            "5,000 products",
            "15,000 monthly transactions",
            "Core inventory + POS + reports",
          ],
          cta: "Buy on WhatsApp",
          ctaMessage: "Hello, I would like to purchase the STARTER plan.",
        },
        {
          name: "Business",
          price: "75,000 TZS",
          suffix: "/month",
          bullets: [
            "Up to 5 branches, 15 users",
            "30,000 products",
            "40,000 monthly transactions",
            "Offline mode + reminders",
          ],
          cta: "Buy on WhatsApp",
          ctaMessage: "Hello, I would like to purchase the BUSINESS plan.",
          featured: true,
        },
        {
          name: "Enterprise",
          price: "150,000 TZS",
          suffix: "/month",
          bullets: [
            "Unlimited scale",
            "Full offline + unlimited devices",
            "Advanced controls + priority support",
            "Custom guidance for large teams",
          ],
          cta: "Buy on WhatsApp",
          ctaMessage: "Hello, I would like to purchase the ENTERPRISE plan.",
        },
      ],
    },
    cta: {
      title: "Ready to see it in action?",
      body: "Start your trial in minutes. No technical setup required.",
      button: "Start free trial",
    },
    contact: {
      title: "Talk to us",
      subtitle: "Questions, demos, or onboarding help—reach us fast.",
      whatsapp: "WhatsApp",
      call: "Call",
      email: "Email",
    },
    footer: {
      left: "© 2026 New Vision Inventory",
      right: "Built for modern retail operations",
    },
  },
  sw: {
    nav: {
      features: "Vipengele",
      pricing: "Bei",
      contact: "Wasiliana",
      signIn: "Ingia",
    },
    hero: {
      eyebrow: "Imejengwa kwa biashara za Tanzania",
      headline: "Jua stok zako. Uza haraka. Kua kwa ujasiri.",
      subhead:
        "New Vision Inventory inaunganisha stok, POS, manunuzi, na ripoti katika mfumo mmoja ulio wazi—rahisi kuanza, wenye nguvu kadri unavyokua.",
      ctaTrial: "Anza majaribio bure",
      ctaWhatsapp: "Nunua kwa WhatsApp",
      ctaQuestion: "Uliza swali",
      stats: [
        { value: "3 kwa 1", label: "Stok + POS + Ripoti" },
        { value: "Offline tayari", label: "Business & Enterprise" },
        { value: "Salama", label: "Ruhusa + audit logs" },
      ],
    },
    heroPanel: {
      title: "Mwendo wa stok moja kwa moja",
      metrics: [
        { label: "Tahadhari za stok ndogo", value: "Mara moja" },
        { label: "Muhtasari wa mauzo ya siku", value: "Tayari" },
        { label: "Utendaji wa matawi", value: "Wazi" },
      ],
      note: "Fuatilia stok, mauzo, na manunuzi katika dashibodi tulivu.",
    },
    status: [
      { label: "Ufuatiliaji wa mfumo moja kwa moja" },
      { label: "Offline tayari" },
      { label: "Kila hatua ina audit log" },
    ],
    cube: {
      title: "Mchemraba wa mfumo",
      faces: [
        { title: "Stok", stat: "Moja kwa moja", note: "Hesabu, tahadhari, reorder." },
        { title: "POS", stat: "Haraka", note: "Drafti, risiti, marejesho." },
        { title: "Ripoti", stat: "Wazi", note: "VAT, P&L, utendaji wa watu." },
        { title: "Offline", stat: "Imara", note: "Sync ikirudi mtandao." },
      ],
    },
    features: {
      title: "Kila unachohitaji bila kuchanganyikiwa",
      subtitle: "Anza na muhimu. Fungua nguvu zaidi kadri unavyokua.",
      items: [
        {
          title: "Udhibiti wa stok kwa akili",
          body: "Marekebisho, hesabu, na tahadhari za low‑stock.",
        },
        {
          title: "POS ya haraka",
          body: "Drafti, risiti, marejesho vyote kwa mtiririko mmoja.",
        },
        {
          title: "Manunuzi + kupokea",
          body: "Dhibiti wasambazaji, PO, na kupokea kwa uhakika.",
        },
        {
          title: "Ripoti zenye nguvu",
          body: "Mauzo, VAT, P&L, wafanyakazi, na wateja.",
        },
        {
          title: "Hali ya offline",
          body: "Uza hata mtandao ukiyumba. Sync ukirudi online.",
        },
        {
          title: "Salama & inayowajibika",
          body: "Ruhusa za majukumu na audit log kwa kila hatua muhimu.",
        },
      ],
    },
    emphasis: {
      title: "Imeundwa kwa timu zenye shughuli nyingi",
      body:
        "Iwe una duka, famasia, au mtandao wa matawi unaokua, taarifa zako zinabaki zikiwa zimepangwa kwa matawi na watumiaji. Unajua stok, mauzo, na yanayohitaji hatua.",
      list: [
        "Uangalizi na udhibiti kwa kila tawi",
        "Barcode lookup na uchapishaji",
        "Ufuatiliaji wa wateja na wasambazaji",
        "Exports kwa ukaguzi na ufuatiliaji",
      ],
    },
    pricing: {
      title: "Bei rahisi kwa mwezi",
      subtitle: "Chagua mpango unaofaa ukubwa wako.",
      badge: "Unaopendwa",
      tiers: [
        {
          name: "Starter",
          price: "40,000 TZS",
          suffix: "/mwezi",
          bullets: [
            "Tawi 1, watumiaji 5",
            "Bidhaa 5,000",
            "Miamala 15,000 kwa mwezi",
            "Stok + POS + ripoti",
          ],
          cta: "Nunua kwa WhatsApp",
          ctaMessage: "Habari, ningependa kununua mpango wa STARTER.",
        },
        {
          name: "Business",
          price: "75,000 TZS",
          suffix: "/mwezi",
          bullets: [
            "Hadi matawi 5, watumiaji 15",
            "Bidhaa 30,000",
            "Miamala 40,000 kwa mwezi",
            "Offline + vikumbusho",
          ],
          cta: "Nunua kwa WhatsApp",
          ctaMessage: "Habari, ningependa kununua mpango wa BUSINESS.",
          featured: true,
        },
        {
          name: "Enterprise",
          price: "150,000 TZS",
          suffix: "/mwezi",
          bullets: [
            "Kiwango kisicho na kikomo",
            "Offline kamili + vifaa bila kikomo",
            "Udhibiti wa juu + msaada wa kipaumbele",
            "Mwongozo maalum kwa timu kubwa",
          ],
          cta: "Nunua kwa WhatsApp",
          ctaMessage: "Habari, ningependa kununua mpango wa ENTERPRISE.",
        },
      ],
    },
    cta: {
      title: "Tayari kuona mfumo ukifanya kazi?",
      body: "Anza majaribio kwa dakika chache bila maandalizi ya kiufundi.",
      button: "Anza majaribio bure",
    },
    contact: {
      title: "Wasiliana nasi",
      subtitle: "Maswali, demo, au msaada wa kuanza—tupo hapa.",
      whatsapp: "WhatsApp",
      call: "Piga simu",
      email: "Barua pepe",
    },
    footer: {
      left: "© 2026 New Vision Inventory",
      right: "Imeundwa kwa uendeshaji wa kisasa wa biashara",
    },
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "sw">("en");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get("lang");
    const stored = window.localStorage.getItem("nvi_marketing_lang");
    const nextLang =
      queryLang === "sw" || queryLang === "en"
        ? queryLang
        : stored === "sw" || stored === "en"
          ? stored
          : "en";
    setLang(nextLang);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("nvi_marketing_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const copyForLang = useMemo(() => copy[lang], [lang]);
  const appLocale = lang === "sw" ? "sw" : "en";

  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">NV</span>
            <span className="brand-name">New Vision Inventory</span>
          </div>
          <div className="nav-links">
            <a href="#features">{copyForLang.nav.features}</a>
            <a href="#pricing">{copyForLang.nav.pricing}</a>
            <a href="#contact">{copyForLang.nav.contact}</a>
            <a className="nav-ghost" href={`https://app.newvisioninventory.com/${appLocale}/login`}>
              {copyForLang.nav.signIn}
            </a>
            <div className="lang-toggle">
              <button
                type="button"
                className={`lang-button ${lang === "en" ? "active" : ""}`}
                onClick={() => setLang("en")}
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-button ${lang === "sw" ? "active" : ""}`}
                onClick={() => setLang("sw")}
              >
                SW
              </button>
            </div>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow reveal" style={{ "--delay": "0.05s" } as React.CSSProperties}>
              {copyForLang.hero.eyebrow}
            </p>
            <h1 className="reveal" style={{ "--delay": "0.12s" } as React.CSSProperties}>
              {copyForLang.hero.headline}
            </h1>
            <p className="subhead reveal" style={{ "--delay": "0.2s" } as React.CSSProperties}>
              {copyForLang.hero.subhead}
            </p>
            <div className="hero-actions reveal" style={{ "--delay": "0.28s" } as React.CSSProperties}>
              <a
                className="btn primary sweep"
                href={`https://app.newvisioninventory.com/${appLocale}/signup`}
              >
                {copyForLang.hero.ctaTrial}
              </a>
              <a
                className="btn glow"
                href={whatsappUrl(copyForLang.pricing.tiers[1].ctaMessage)}
                target="_blank"
                rel="noreferrer"
              >
                {copyForLang.hero.ctaWhatsapp}
              </a>
              <a
                className="btn ghost"
                href={whatsappUrl(copyForLang.hero.ctaQuestion)}
                target="_blank"
                rel="noreferrer"
              >
                {copyForLang.hero.ctaQuestion}
              </a>
            </div>
            <div className="status-strip reveal" style={{ "--delay": "0.34s" } as React.CSSProperties}>
              {copyForLang.status.map((item) => (
                <div className="status-pill" key={item.label}>
                  <span className="pulse" />
                  {item.label}
                </div>
              ))}
            </div>
            <div className="hero-stats">
              {copyForLang.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="cube-wrap">
              <div className="cube-title">{copyForLang.cube.title}</div>
              <div className="cube-scene">
                <div className="cube">
                  {copyForLang.cube.faces.map((face, index) => (
                    <div className={`cube-face face-${index + 1}`} key={face.title}>
                      <span className="cube-label">{face.title}</span>
                      <strong>{face.stat}</strong>
                      <p>{face.note}</p>
                    </div>
                  ))}
                  <div className="cube-face face-5" />
                  <div className="cube-face face-6" />
                </div>
              </div>
            </div>
            <div className="panel-card">
              <p className="panel-title">{copyForLang.heroPanel.title}</p>
              {copyForLang.heroPanel.metrics.map((metric) => (
                <div className="panel-metric" key={metric.label}>
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
              <p className="panel-note">{copyForLang.heroPanel.note}</p>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="section">
        <div className="section-head reveal" style={{ "--delay": "0.1s" } as React.CSSProperties}>
          <h2>{copyForLang.features.title}</h2>
          <p>{copyForLang.features.subtitle}</p>
        </div>
        <div className="feature-grid">
          {copyForLang.features.items.map((feature, index) => (
            <div
              className="feature-card"
              key={feature.title}
              style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}
            >
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section emphasis">
        <div className="split reveal" style={{ "--delay": "0.1s" } as React.CSSProperties}>
          <div>
            <h2>{copyForLang.emphasis.title}</h2>
            <p>{copyForLang.emphasis.body}</p>
          </div>
          <ul className="checklist">
            {copyForLang.emphasis.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="section pricing">
        <div className="section-head reveal" style={{ "--delay": "0.1s" } as React.CSSProperties}>
          <h2>{copyForLang.pricing.title}</h2>
          <p>{copyForLang.pricing.subtitle}</p>
        </div>
        <div className="pricing-grid">
          {copyForLang.pricing.tiers.map((tier, index) => (
            <div
              className={`price-card ${tier.featured ? "featured" : ""} reveal`}
              key={tier.name}
              style={{ "--delay": `${index * 0.12}s` } as React.CSSProperties}
            >
              {tier.featured ? <div className="badge">{copyForLang.pricing.badge}</div> : null}
              <h3>{tier.name}</h3>
              <p className="price">
                {tier.price}
                <span>{tier.suffix}</span>
              </p>
              <ul>
                {tier.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <a
                className="btn primary"
                href={whatsappUrl(tier.ctaMessage)}
                target="_blank"
                rel="noreferrer"
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="section cta">
        <div>
          <h2>{copyForLang.cta.title}</h2>
          <p>{copyForLang.cta.body}</p>
        </div>
        <a
          className="btn primary sweep"
          href={`https://app.newvisioninventory.com/${appLocale}/signup`}
        >
          {copyForLang.cta.button}
        </a>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head reveal" style={{ "--delay": "0.1s" } as React.CSSProperties}>
          <h2>{copyForLang.contact.title}</h2>
          <p>{copyForLang.contact.subtitle}</p>
        </div>
        <div className="contact-grid">
          <div>
            <h3>{copyForLang.contact.whatsapp}</h3>
            <a
              href={whatsappUrl(copyForLang.hero.ctaQuestion)}
              target="_blank"
              rel="noreferrer"
            >
              +255 788 533 632
            </a>
          </div>
          <div>
            <h3>{copyForLang.contact.call}</h3>
            <p>+255 758 144 662</p>
            <p>+255 794 732 426</p>
          </div>
          <div>
            <h3>{copyForLang.contact.email}</h3>
            <p>support@newvisioninventory.com</p>
            <p>info@newvisioninventory.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>{copyForLang.footer.left}</span>
        <span>{copyForLang.footer.right}</span>
      </footer>
    </div>
  );
}
