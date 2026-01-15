const WHATSAPP_NUMBER = "255788533632";

const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="brand">
            <span className="brand-mark">NV</span>
            <span className="brand-name">New Vision Inventory</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
            <a className="nav-ghost" href="https://app.newvisioninventory.com/en/login">
              Sign in
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Built for Tanzanian businesses</p>
            <h1>
              Know your stock. Sell faster. Grow with confidence.
            </h1>
            <p className="subhead">
              New Vision Inventory brings inventory, POS, purchases, and reports
              into one clear system—simple on day one, powerful as you scale.
            </p>
            <div className="hero-actions">
              <a
                className="btn primary"
                href="https://app.newvisioninventory.com/en/signup"
              >
                Start free trial
              </a>
              <a
                className="btn glow"
                href={whatsappUrl("Hello, I would like to purchase the BUSINESS plan.")}
                target="_blank"
                rel="noreferrer"
              >
                Buy on WhatsApp
              </a>
              <a
                className="btn ghost"
                href={whatsappUrl("Hello, I have a question about New Vision Inventory.")}
                target="_blank"
                rel="noreferrer"
              >
                Ask a question
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>3 in 1</strong>
                <span>Inventory + POS + Reports</span>
              </div>
              <div>
                <strong>Offline ready</strong>
                <span>Business & Enterprise tiers</span>
              </div>
              <div>
                <strong>Secure</strong>
                <span>Roles + audit logs</span>
              </div>
            </div>
          </div>
          <div className="hero-panel">
            <div className="panel-glow" />
            <div className="panel-card">
              <p className="panel-title">Live inventory pulse</p>
              <div className="panel-metric">
                <span>Low stock alerts</span>
                <strong>Instant</strong>
              </div>
              <div className="panel-metric">
                <span>Daily sales snapshot</span>
                <strong>Ready</strong>
              </div>
              <div className="panel-metric">
                <span>Branch performance</span>
                <strong>Clear</strong>
              </div>
              <p className="panel-note">
                Track stock, sales, and purchases from one calm dashboard.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section id="features" className="section">
        <div className="section-head">
          <h2>Everything you need, without the overwhelm</h2>
          <p>
            Start with the essentials. Unlock advanced controls as your business
            grows.
          </p>
        </div>
        <div className="feature-grid">
          {[
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
          ].map((feature, index) => (
            <div className="feature-card" key={feature.title} style={{ "--delay": `${index * 0.08}s` } as React.CSSProperties}>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section emphasis">
        <div className="split">
          <div>
            <h2>Made for busy teams</h2>
            <p>
              Whether you run a shop, a pharmacy, or a growing retail chain, your
              data stays organized across branches and users. You always know
              what’s in stock, what sold, and what needs attention.
            </p>
          </div>
          <ul className="checklist">
            <li>Branch‑level visibility and controls</li>
            <li>Barcode lookup and printing</li>
            <li>Customer and supplier tracking</li>
            <li>Exports for compliance and audits</li>
          </ul>
        </div>
      </section>

      <section id="pricing" className="section pricing">
        <div className="section-head">
          <h2>Simple monthly pricing</h2>
          <p>Pick a plan that matches your scale. Upgrade anytime.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Starter</h3>
            <p className="price">40,000 TZS<span>/month</span></p>
            <ul>
              <li>1 branch, 5 users</li>
              <li>5,000 products</li>
              <li>15,000 monthly transactions</li>
              <li>Core inventory + POS + reports</li>
            </ul>
            <a
              className="btn primary"
              href={whatsappUrl("Hello, I would like to purchase the STARTER plan.")}
              target="_blank"
              rel="noreferrer"
            >
              Buy on WhatsApp
            </a>
          </div>
          <div className="price-card featured">
            <div className="badge">Most popular</div>
            <h3>Business</h3>
            <p className="price">75,000 TZS<span>/month</span></p>
            <ul>
              <li>Up to 5 branches, 15 users</li>
              <li>30,000 products</li>
              <li>40,000 monthly transactions</li>
              <li>Offline mode + reminders</li>
            </ul>
            <a
              className="btn primary"
              href={whatsappUrl("Hello, I would like to purchase the BUSINESS plan.")}
              target="_blank"
              rel="noreferrer"
            >
              Buy on WhatsApp
            </a>
          </div>
          <div className="price-card">
            <h3>Enterprise</h3>
            <p className="price">150,000 TZS<span>/month</span></p>
            <ul>
              <li>Unlimited scale</li>
              <li>Full offline + unlimited devices</li>
              <li>Advanced controls + priority support</li>
              <li>Custom guidance for large teams</li>
            </ul>
            <a
              className="btn primary"
              href={whatsappUrl("Hello, I would like to purchase the ENTERPRISE plan.")}
              target="_blank"
              rel="noreferrer"
            >
              Buy on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div>
          <h2>Ready to see it in action?</h2>
          <p>Start your trial in minutes. No technical setup required.</p>
        </div>
        <a
          className="btn primary"
          href="https://app.newvisioninventory.com/en/signup"
        >
          Start free trial
        </a>
      </section>

      <section id="contact" className="section contact">
        <div className="section-head">
          <h2>Talk to us</h2>
          <p>Questions, demos, or onboarding help—reach us fast.</p>
        </div>
        <div className="contact-grid">
          <div>
            <h3>WhatsApp</h3>
            <a
              href={whatsappUrl("Hello, I have a question about New Vision Inventory.")}
              target="_blank"
              rel="noreferrer"
            >
              +255 788 533 632
            </a>
          </div>
          <div>
            <h3>Call</h3>
            <p>+255 758 144 662</p>
            <p>+255 794 732 426</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>support@newvisioninventory.com</p>
            <p>info@newvisioninventory.com</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© 2026 New Vision Inventory</span>
        <span>Built for modern retail operations</span>
      </footer>
    </div>
  );
}
