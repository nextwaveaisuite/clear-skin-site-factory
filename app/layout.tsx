// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Skin Australia",
  description: "Australian skincare guides, reviews, and routines for clearer skin.",
  other: {
    "commission-factory-verification": "3564607bf56643cb9831d03c1a662fa0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
