// app/about/page.tsx
export const metadata = {
  title: "About — Clear Skin Australia",
  description: "About Clear Skin Australia and how we create our skincare guides.",
};

export default function AboutPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">About</p>
        <h1>Clear Skin Australia</h1>
        <p className="lead">
          Clear Skin Australia is an independent skincare guide focused on what works
          for Australian conditions — heat, humidity, UV exposure, and the reality of
          reactive or acne-prone skin.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          We publish routine guidance, brand reviews, and product-type explainers to help
          you make calmer, more confident choices without hype or medical claims.
        </p>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>What you’ll find here</h2>
          <ul className="list">
            <li>Simple routine building (cleanser → moisturiser → sunscreen)</li>
            <li>Barrier-first guidance (less irritation, more consistency)</li>
            <li>Brand reviews (who it suits, what it’s good for, where to buy)</li>
            <li>Australian-relevant context (UV, climate, lifestyle)</li>
          </ul>
        </div>

        <div className="card">
          <h2>What we don’t do</h2>
          <ul className="list">
            <li>No diagnosis or treatment advice</li>
            <li>No “miracle cure” claims</li>
            <li>No paid rankings that override our editorial judgement</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <div className="notice">
          <strong>Important note:</strong> Information on this site is general only and
          not medical advice. Always patch test products and consult a qualified
          professional for medical concerns.
        </div>
      </section>
    </div>
  );
}
