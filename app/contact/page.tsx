// app/contact/page.tsx
export const metadata = {
  title: "Contact — Clear Skin Australia",
  description:
    "How to contact Clear Skin Australia for feedback, corrections, or partnerships.",
};

export default function ContactPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead">
          For feedback, corrections, or general questions, you can contact us
          using the details below.
        </p>

        <div className="notice" style={{ marginTop: 14 }}>
          <strong>Contact / Details:</strong>
          <div style={{ marginTop: 8 }}>
            <p className="muted">
              Email: <strong>hello@clearskinaustralia.com</strong>
            </p>
            <p className="muted">
              Website: <strong>clearskinaustralia.com</strong>
            </p>
          </div>
        </div>

        <p className="muted" style={{ marginTop: 12 }}>
          If you’re a brand reaching out, please include: product name, where it
          is sold in Australia, full ingredient list (INCI), and any testing or
          claims documentation you want us to consider.
        </p>
      </section>

      <section className="card">
        <h2>Corrections policy</h2>
        <p className="muted">
          If we’ve made an error in a review or guide, we’ll fix it. Send the
          corrected information and a source (product label photo or official
          listing) and we’ll update the page where appropriate.
        </p>
      </section>
    </div>
  );
}
