// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Skin Australia",
  description: "Australian skincare guides for clear, calm skin."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU">
      <body>
        <header>
          <a href="/" style={{ fontWeight: 800 }}>
            Clear Skin Australia
          </a>
        </header>

        <main>{children}</main>

        <footer>
          <small>© {new Date().getFullYear()} Clear Skin Australia</small>
        </footer>
      </body>
    </html>
  );
}
