// app/about/page.tsx
export const metadata = {
  title: "About — Clear Skin Australia",
  description: "Our approach: calm, barrier-first skincare guidance for Australian conditions.",
};

export default function AboutPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">About</p>
        <h1>Clear, calm skincare — built for Australian conditions</h1>
        <p className="lead">
          Clear Skin Australia is an independent skincare education platform focused on
          simple routines that support the skin barrier — especially for sensitive or
          reactive-prone skin.
        </p>
      </section>

      <section className="card">
        <h2>Our philosophy</h2>
        <ul className="list">
          <li><strong>Barrier-first:</strong> comfort, hydration, and consistency beat harsh “quick fixes”.</li>
          <li><strong>Plain-English guidance:</strong> routines and product types explained without hype.</li>
          <li><strong>Australian context:</strong> heat, humidity, UV exposure, and everyday lifestyle.</li>
        </ul>
        <p className="muted">
          We keep content conservative and practical. Patch testing matters. If you have a medical concern,
          please speak with a qualified professional.
        </p>
      </section>

      <section className="card">
        <h2>Clear Skin Essentials</h2>
        <p className="muted">
          We’re developing our own fragrance-free product line designed around gentle,
          barrier-supporting skincare. Updates will appear on the site as the range progresses.
        </p>
      </section>
    </div>
  );
}
