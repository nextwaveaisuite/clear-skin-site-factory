// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Clear Skin Australia",
  description: "Australian skincare guides, reviews, and recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="commission-factory-verification"
          content="3564607bf56643cb9831d03c1a662fa0"
        />
      </head>
      <body>
        <div className="site">
          <header className="siteHeader">
            <div className="container">
              <a className="brand" href="/">
                Clear Skin Australia
              </a>
              <nav className="nav">
                <a href="/best-australian-skincare-clear-skin/">Best Skincare</a>
                <a href="/skincare/acne/">Acne</a>
                <a href="/skincare/sensitive-skin/">Sensitive</a>
                <a href="/disclosure/">Disclosure</a>
              </nav>
            </div>
          </header>

          <main className="siteMain">{children}</main>

          <footer className="siteFooter">
            <div className="container">
              <p className="fineprint">
                © {new Date().getFullYear()} Clear Skin Australia • Affiliate-supported • General
                information only (not medical advice).
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
