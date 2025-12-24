export const metadata = {
  title: "Clear Skin Essentials — Fragrance-Free Skincare by Clear Skin Australia",
  description:
    "Clear Skin Essentials is a fragrance-free, barrier-first skincare range developed by Clear Skin Australia for sensitive and acne-prone skin.",
};

export default function ClearSkinEssentialsHub() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Our Products</p>
        <h1>Clear Skin Essentials</h1>
        <p className="lead">
          Clear Skin Essentials is a small, focused skincare range developed by Clear
          Skin Australia for sensitive, reactive, and acne-prone skin in Australian
          conditions.
        </p>
        <p className="muted">
          Every product follows a barrier-first philosophy — fragrance-free, simple,
          and designed to support calm, consistent routines rather than aggressive
          treatments.
        </p>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>Why Clear Skin Essentials</h2>
          <ul className="list">
            <li>Fragrance-free and essential oil–free</li>
            <li>Designed for sensitive and acne-prone skin</li>
            <li>Barrier-first formulations</li>
            <li>Minimal routines that are easy to maintain</li>
            <li>Developed with Australian climate conditions in mind</li>
          </ul>
        </div>

        <div className="card">
          <h2>Our approach</h2>
          <ul className="list">
            <li>No hype or miracle claims</li>
            <li>No unnecessary ingredients</li>
            <li>Focus on skin comfort and consistency</li>
            <li>Education-first, product-second</li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Products in the range</h2>
        <ul className="list">
          <li>
            <a href="/clear-skin-essentials/gentle-balance-cleanser/">
              Gentle Balance Cleanser
            </a>{" "}
            — a low-foaming, fragrance-free cleanser
          </li>
          <li>
            <a href="/clear-skin-essentials/barrier-support-moisturiser/">
              Barrier Support Moisturiser
            </a>{" "}
            — lightweight hydration for sensitive skin
          </li>
        </ul>
      </section>

      <section className="card">
        <div className="notice">
          <strong>Availability:</strong> Clear Skin Essentials is currently in
          development. Join the site updates to be notified when products become
          available.
        </div>
      </section>
    </div>
  );
}
