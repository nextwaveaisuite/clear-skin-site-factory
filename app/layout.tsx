import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Skin Australia",
  description: "Australian skincare guides for clear, calm skin."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial", margin: 0 }}>
        <header style={{ padding: "16px 20px", borderBottom: "1px solid #eee" }}>
          <a href="/" style={{ textDecoration: "none", color: "inherit", fontWeight: 700 }}>
            Clear Skin Australia
          </a>
        </header>
        <main style={{ maxWidth: 880, margin: "0 auto", padding: "24px 20px" }}>{children}</main>
        <footer style={{ padding: "24px 20px", borderTop: "1px solid #eee", color: "#555" }}>
          <small>© {new Date().getFullYear()} Clear Skin Australia</small>
        </footer>
      </body>
    </html>
  );
}
