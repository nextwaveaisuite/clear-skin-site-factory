// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.clearskinaustralia.com"),
  title: {
    default: "Clear Skin Australia",
    template: "%s | Clear Skin Australia"
  },
  description: "Australian skincare guides for clear, calm skin.",
  alternates: {
    canonical: "https://www.clearskinaustralia.com/"
  },
  openGraph: {
    title: "Clear Skin Australia",
    description: "Australian skincare guides for clear, calm skin.",
    url: "https://www.clearskinaustralia.com/",
    siteName: "Clear Skin Australia",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <header className="header">
          <div className="header-inner">
            <a className="brand" href="/">Clear Skin Australia</a>
            <nav className="nav" aria-label="Primary navigation">
              <a href="/best-australian-skincare-clear-skin/">Best Picks</a>
              <a href="/skincare/acne/">Acne</a>
              <a href="/skincare/sensitive-skin/">Sensitive Skin</a>
              <a href="/reviews/skin-virtue/">Skin Virtue</a>
              <a href="/disclosure/">Disclosure</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="footer">
          <div className="container" style={{ padding: 0 }}>
            <small>© {new Date().getFullYear()} Clear Skin Australia</small>
          </div>
        </footer>
      </body>
    </html>
  );
      }
