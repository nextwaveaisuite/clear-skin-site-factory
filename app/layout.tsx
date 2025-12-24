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
          <header className="header">
            <div className="container headerInner">
              <a href="/" className="brand">
                <span className="brandName">Clear Skin Australia</span>
                <span className="brandTag">Skincare guides for Aussie conditions</span>
              </a>

              <nav className="nav">
                <a href="/best-australian-skincare-clear-skin/">Best</a>
                <a href="/skincare/acne/">Acne</a>
                <a href="/skincare/sensitive-skin/">Sensitive</a>
                <a href="/reviews/skin-virtue/">Reviews</a>
                <a href="/disclosure/">Disclosure</a>
              </nav>
            </div>
          </header>

          <main className="container main">{children}</main>

          <footer className="footer">
            <div className="container footerInner">
              <div className="footerLinks">
                <a href="/about/">About</a>
                <a href="/contact/">Contact</a>
                <a href="/disclosure/">Disclosure</a>
              </div>
              <div className="footerNote">
                © {new Date().getFullYear()} Clear Skin Australia
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
