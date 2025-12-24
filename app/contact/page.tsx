// app/contact/page.tsx
export const metadata = {
  title: "Contact — Clear Skin Australia",
  description: "Contact Clear Skin Australia.",
};

export default function ContactPage() {
  return (
    <div className="stack">
      <section className="card">
        <p className="kicker">Contact</p>
        <h1>Get in touch</h1>
        <p className="lead">
          For general enquiries, partnerships, or corrections, you can reach us here.
        </p>

        <div className="notice">
          <strong>Note:</strong> We can’t provide medical advice or diagnose skin conditions.
          If you’re dealing with a medical issue, please consult a qualified professional.
        </div>
      </section>

      <section className="card">
        <h2>Email</h2>
        <p className="muted">
          Add your business email here when ready (recommended: a dedicated address for the brand).
        </p>
        <ul className="list">
          <li>
            <strong>General:</strong> contact@clearskinaustralia.com (suggested)
          </li>
          <li>
            <strong>Partnerships:</strong> partnerships@clearskinaustralia.com (suggested)
          </li>
        </ul>
        <p className="muted">
          If you’re not ready to set these up yet, keep this page live and swap the addresses later.
        </p>
      </section>
    </div>
  );
}
