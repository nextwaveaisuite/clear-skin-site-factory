// app/about/page.tsx
export const metadata = {
  title: "About — Clear Skin Australia",
  description:
    "Plain-language information about Clear Skin Australia and our approach.",
};

export default function AboutPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">About</p>
        <h1>Plain-language skincare guidance for Aussie conditions</h1>
        <p className="lead">
          Clear Skin Australia is an independent skincare education site focused
          on what works in Australian conditions — heat, humidity, UV exposure,
          and the day-to-day realities that can trigger sensitive or acne-prone
          skin.
        </p>
        <p className="muted" style={{ marginTop: 10 }}>
          We aim to simplify routines, explain ingredients in plain English, and
          help people choose calmer, more comfortable skincare without hype or
          medical claims.
        </p>
      </section>

      <section className="card">
        <h2>Our approach</h2>
        <div className="pillRow">
          <span className="pill">Barrier-first routines</span>
          <span className="pill">Fragrance-aware guidance</span>
          <span className="pill">Simple product selection</span>
          <span className="pill">Australian-relevant context</span>
        </div>

        <div className="notice">
          <strong>Important note:</strong> The information on this website is
          general only and is not medical advice. We do not diagnose skin
          conditions. Always patch test and speak with a qualified professional
          if you have medical concerns.
        </div>
      </section>

      <section className="card">
        <h2>Clear Skin Essentials</h2>
        <p className="muted">
          We’re building our own product line: <strong>Clear Skin Essentials</strong>{" "}
          — designed around simple, fragrance-free, barrier-supporting skincare
          for everyday Australian life. We’ll share updates on the site as it
          develops.
        </p>
      </section>
    </div>
  );
}
