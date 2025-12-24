// app/contact/page.tsx
export const metadata = {
  title: "Contact — Clear Skin Australia",
  description: "Contact Clear Skin Australia for feedback, corrections, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead">
          For corrections, feedback, or brand/affiliate enquiries, you can reach us by email.
        </p>

        <div className="notice" style={{ marginTop: 14 }}>
          <strong>Email:</strong>{" "}
          <a href="mailto:hello@clearskinaustralia.com">hello@clearskinaustralia.com</a>
          <div style={{ marginTop: 8 }}>
            If you don’t have email on the domain set up yet, use your Gmail placeholder here
            later (we can swap it in anytime).
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Partnerships</h2>
        <p className="muted">
          We’re open to affiliate partnerships and product gifting, but we only recommend
          products we believe suit the page intent and audience needs.
        </p>
        <ul className="list">
          <li>Please include your brand/site link, product range, and affiliate platform used.</li>
          <li>We do not accept payment for rankings or “guaranteed positive” reviews.</li>
        </ul>
      </section>
    </div>
  );
}
