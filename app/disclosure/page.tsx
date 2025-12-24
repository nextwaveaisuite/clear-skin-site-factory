// app/disclosure/page.tsx
export const metadata = {
  title: "Disclosure — Clear Skin Australia",
  description:
    "Affiliate and editorial disclosure for Clear Skin Australia (plain language).",
};

export default function DisclosurePage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Disclosure</p>
        <h1>How this site makes money</h1>
        <p className="lead">
          Clear Skin Australia may earn a commission when you click certain links
          and make a purchase. This helps support the site and allows us to keep
          publishing skincare guides and reviews.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          This does not change our process: we aim to write clearly, avoid hype,
          and recommend products based on suitability, formulation approach, and
          routine fit — especially for sensitive or acne-prone skin.
        </p>
      </section>

      <section className="card">
        <h2>Affiliate links</h2>
        <ul className="list">
          <li>
            Some links are affiliate links. If you buy through them, we may earn
            a commission at no extra cost to you.
          </li>
          <li>
            Not every link is an affiliate link. Sometimes we link for reference
            or convenience.
          </li>
          <li>
            We do not accept payment for positive reviews. If we ever publish
            sponsored content, it will be clearly labelled.
          </li>
        </ul>
      </section>

      <section className="card">
        <h2>Editorial independence</h2>
        <p className="muted">
          Our content is written to help readers make calmer, more confident
          choices. Brands do not get to approve our opinions. If a brand provides
          information or a product, that does not guarantee a positive outcome
          or recommendation.
        </p>

        <div className="notice" style={{ marginTop: 14 }}>
          <strong>Important note:</strong> General skincare information only. No
          medical advice, diagnosis, or treatment. Patch test and consult a
          qualified professional for medical concerns.
        </div>
      </section>
    </div>
  );
}
