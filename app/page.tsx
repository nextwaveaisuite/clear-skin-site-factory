// app/page.tsx
export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <p className="kicker">Australian skincare, explained simply</p>
        <h1>Clear Skin Starts With the Right Australian Skincare</h1>
        <p className="lede">
          Clear Skin Australia is an independent guide focused on skincare that works with Australian
          conditions — heat, humidity, UV exposure, and sensitive or acne-prone skin.
        </p>
        <p className="lede">
          We break down routines, brands, and product types so you can make calmer, more confident
          choices without hype or medical claims.
        </p>

        <div className="ctaRow">
          <a className="btnPrimary" href="/best-australian-skincare-clear-skin/">
            Start here: Best Australian Skincare
          </a>
          <a className="btnGhost" href="/disclosure/">
            How we’re funded
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Where to Start</h2>
        <div className="grid">
          <a className="card" href="/best-australian-skincare-clear-skin/">
            <h3>Best Australian Skincare for Clear Skin</h3>
            <p>Main comparison + recommendations (simple picks that suit Aussie life).</p>
          </a>

          <a className="card" href="/skincare/acne/">
            <h3>Acne Skincare Hub</h3>
            <p>Guidance for breakouts, adult acne, and acne-prone routines.</p>
          </a>

          <a className="card" href="/skincare/sensitive-skin/">
            <h3>Sensitive Skin Hub</h3>
            <p>Barrier-first routines for reactive, easily irritated skin.</p>
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Featured Brand Reviews</h2>
        <p className="muted">
          Reviews focus on formulation approach, who each brand suits, and where they fit within a
          simple routine.
        </p>

        <div className="grid">
          <a className="card" href="/reviews/skin-virtue/">
            <h3>Skin Virtue Review</h3>
            <p>Who it suits, what it’s like in real routines, and where to buy.</p>
          </a>

          <a className="card" href="/reviews/seadragon-organic/">
            <h3>Seadragon Organic Review</h3>
            <p>Clean-leaning skincare — what to consider before you buy.</p>
          </a>

          <a className="card" href="/reviews/natio/">
            <h3>Natio Skincare Review</h3>
            <p>Everyday Australian staple — best picks for different skin types.</p>
          </a>
        </div>
      </section>

      <section className="section split">
        <div className="panel">
          <h2>Our Approach</h2>
          <ul className="list">
            <li>Australian-relevant guidance (climate, UV, lifestyle)</li>
            <li>Barrier-first routines over aggressive actives</li>
            <li>Simple product selection that’s easy to stick to</li>
            <li>Affiliate-supported, independently written content</li>
          </ul>
        </div>

        <div className="panel note">
          <h2>Important Note</h2>
          <p className="muted">
            Clear Skin Australia provides general skincare information only. We do not offer medical
            advice or diagnose skin conditions. Always patch test products and consult a qualified
            professional for medical concerns.
          </p>
        </div>
      </section>
    </div>
  );
}
