export const metadata = {
  title: "Gentle Balance Cleanser — Clear Skin Essentials",
  description:
    "A fragrance-free, low-foaming cleanser designed to cleanse without disrupting the skin barrier.",
};

export default function GentleBalanceCleanser() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Cleanser</p>
        <h1>Gentle Balance Cleanser</h1>
        <p className="lead">
          A low-foaming, fragrance-free cleanser designed to gently remove impurities
          without stripping the skin barrier.
        </p>
        <p className="muted">
          Developed for sensitive, reactive, and acne-prone skin.
        </p>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>Who it’s for</h2>
          <ul className="list">
            <li>Sensitive or reactive skin</li>
            <li>Acne-prone or congestion-prone skin</li>
            <li>Skin that feels tight after cleansing</li>
            <li>Skin recovering from irritation or over-exfoliation</li>
          </ul>
        </div>

        <div className="card">
          <h2>How it works</h2>
          <p className="muted">
            Formulated to cleanse effectively while helping maintain the skin’s
            natural moisture balance. Designed for consistent daily use without
            discomfort.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>How to use</h2>
        <ul className="list">
          <li>Use morning and evening</li>
          <li>Massage onto damp skin</li>
          <li>Rinse thoroughly with lukewarm water</li>
        </ul>
      </section>

      <section className="card">
        <div className="notice">
          <strong>Status:</strong> In development. Availability details will be shared
          once finalised.
        </div>
      </section>
    </div>
  );
}
