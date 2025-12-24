// app/disclosure/page.tsx
export const metadata = {
  title: "Disclosure — Clear Skin Australia",
  description: "Affiliate disclosure and editorial policy for Clear Skin Australia.",
};

export default function DisclosurePage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Disclosure</p>
        <h1>Affiliate & editorial disclosure</h1>
        <p className="lead">
          Clear Skin Australia is reader-supported. Some links on this site may be affiliate links.
          If you click a link and make a purchase, we may earn a commission at no extra cost to you.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          This helps us keep the site running and continue publishing free skincare guides and reviews.
        </p>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>How we recommend products</h2>
          <ul className="list">
            <li>We prioritize routine fit (simple, barrier-first, realistic)</li>
            <li>We match products to the page intent (acne, sensitive skin, etc.)</li>
            <li>We avoid medical claims and “cure” language</li>
            <li>Availability in Australia matters</li>
          </ul>
        </div>

        <div className="card">
          <h2>What affiliate links mean</h2>
          <ul className="list">
            <li>Commission does not increase your price</li>
            <li>We may link to multiple retailers if available</li>
            <li>Not every product mentioned is affiliate-linked</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Advertising & sponsored content</h2>
        <p className="muted">
          If we ever publish sponsored content, it will be clearly labeled as sponsored.
          We do not sell “guaranteed rankings” or edit our opinions in exchange for payment.
        </p>

        <div className="notice" style={{ marginTop: 14 }}>
          <strong>Important note:</strong> General skincare information only. No medical advice,
          diagnosis, or treatment. Patch test and consult a qualified professional for medical concerns.
        </div>
      </section>
    </div>
  );
}
