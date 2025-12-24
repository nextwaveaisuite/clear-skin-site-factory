// app/page.tsx
export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero card">
        <p className="kicker">Independent Australian skincare guide</p>
        <h1>Clear skin starts with the right Australian skincare</h1>
        <p className="lead">
          Clear Skin Australia is focused on skincare that works with Australian
          conditions — heat, humidity, UV exposure, and reactive or acne-prone
          skin. We break down routines, brands, and product types so you can make
          calmer, more confident choices without hype or medical claims.
        </p>

        <div className="ctaRow">
          <a className="btn primary" href="/best-australian-skincare-clear-skin/">
            Start with the Best Australian Skincare guide
          </a>
          <a className="btn" href="/skincare/acne/">
            Acne hub
          </a>
          <a className="btn" href="/skincare/sensitive-skin/">
            Sensitive skin hub
          </a>
        </div>
      </section>

      <section className="grid2">
        <div className="card">
          <h2>Where to start</h2>
          <ul className="list">
            <li>
              <a href="/best-australian-skincare-clear-skin/">
                Best Australian Skincare for Clear Skin
              </a>{" "}
              — main comparison + recommendations
            </li>
            <li>
              <a href="/skincare/acne/">Acne Skincare Hub</a> — breakouts, adult
              acne, acne-prone routines
            </li>
            <li>
              <a href="/skincare/sensitive-skin/">Sensitive Skin Hub</a> — reactive
              skin, barrier-first routines
            </li>
          </ul>
        </div>

        <div className="card">
          <h2>Featured brand reviews</h2>
          <p className="muted">
            Formulation approach, who each brand suits, and where it fits in a
            simple routine.
          </p>
          <ul className="list">
            <li>
              <a href="/reviews/skin-virtue/">Skin Virtue review</a>
            </li>
            <li>
              <a href="/reviews/seadragon-organic/">Seadragon Organic review</a>
            </li>
            <li>
              <a href="/reviews/natio/">Natio skincare review</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Our approach</h2>
        <div className="pillRow">
          <span className="pill">Australian-relevant (climate + UV)</span>
          <span className="pill">Barrier-first routines</span>
          <span className="pill">Simple product selection</span>
          <span className="pill">Affiliate-supported, independently written</span>
        </div>

        <div className="notice">
          <strong>Important note:</strong> General skincare information only. No
          medical advice, diagnosis, or treatment. Patch test and consult a
          qualified professional for medical concerns.
        </div>
      </section>
    </div>
  );
}
