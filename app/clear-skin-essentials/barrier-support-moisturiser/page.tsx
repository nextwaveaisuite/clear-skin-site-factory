export const metadata = {
  title: "Barrier Support Moisturiser — Clear Skin Essentials",
  description:
    "A lightweight, fragrance-free moisturiser designed to support the skin barrier and reduce moisture loss.",
};

export default function BarrierSupportMoisturiser() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Moisturiser</p>
        <h1>Barrier Support Moisturiser</h1>
        <p className="lead">
          A lightweight, fragrance-free moisturiser designed to support the skin
          barrier and maintain hydration without feeling heavy.
        </p>
        <p className="muted">
          Suitable for sensitive and acne-prone skin.
        </p>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>Who it’s for</h2>
          <ul className="list">
            <li>Sensitive or easily irritated skin</li>
            <li>Acne-prone skin needing gentle hydration</li>
            <li>Skin experiencing dryness or tightness</li>
            <li>Barrier-compromised skin</li>
          </ul>
        </div>

        <div className="card">
          <h2>How it works</h2>
          <p className="muted">
            Designed to help reduce moisture loss and support skin comfort without
            clogging pores or overwhelming sensitive skin.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>How to use</h2>
        <ul className="list">
          <li>Apply to clean skin morning and evening</li>
          <li>Use alone or after serum</li>
          <li>Suitable for daily use</li>
        </ul>
      </section>

      <section className="card">
        <div className="notice">
          <strong>Status:</strong> In development. Launch details will be announced
          through Clear Skin Australia.
        </div>
      </section>
    </div>
  );
}
