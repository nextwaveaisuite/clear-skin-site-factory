// app/disclosure/page.tsx
export const metadata = {
  title: "Disclosure — Clear Skin Australia",
  description: "Affiliate disclosure and editorial policy.",
};

export default function DisclosurePage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Disclosure</p>
        <h1>Affiliate disclosure & editorial policy</h1>
        <p className="lead">
          Clear Skin Australia is independently written. Some links on this site may be affiliate links,
          which means we may earn a commission if you purchase through those links — at no extra cost to you.
        </p>
      </section>

      <section className="card">
        <h2>How affiliate links work</h2>
        <ul className="list">
          <li>Affiliate links help support this project and keep content free to read.</li>
          <li>We aim to recommend products based on suitability, not commission size.</li>
          <li>We do not accept payment in exchange for a guaranteed positive review.</li>
        </ul>
      </section>

      <section className="card">
        <h2>Editorial independence</h2>
        <p className="muted">
          Our content focuses on skincare routines, product types, and brands that may suit Australian
          conditions. We keep claims conservative and avoid medical promises.
        </p>
        <div className="notice">
          <strong>Important note:</strong> General skincare information only. No medical advice, diagnosis,
          or treatment. Patch test and consult a qualified professional for medical concerns.
        </div>
      </section>
    </div>
  );
}
