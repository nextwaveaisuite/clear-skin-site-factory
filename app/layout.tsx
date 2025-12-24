// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Skin Australia",
  description: "Australian skincare guides, reviews, and recommendations.",
  verification: {
    other: {
      "commission-factory-verification": "3564607bf56643cb9831d03c1a662fa0",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container">
            <a className="brand" href="/">
              Clear Skin Australia
            </a>

            <nav className="nav">
              <a href="/best-australian-skincare-clear-skin/">Best Skincare</a>
              <a href="/skincare/acne/">Acne Hub</a>
              <a href="/skincare/sensitive-skin/">Sensitive Skin</a>
              <a href="/reviews/skin-virtue/">Reviews</a>
              <a href="/disclosure/">Disclosure</a>
            </nav>
          </div>
        </header>

        <main className="container content">{children}</main>

        <footer className="site-footer">
          <div className="container">
            <p className="muted">
              © {new Date().getFullYear()} Clear Skin Australia • Affiliate-supported,
              independently written content.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
