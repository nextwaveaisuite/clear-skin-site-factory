import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear Skin Australia",
  description:
    "Clear Skin Australia provides honest reviews and guides to help Australians achieve clear, healthy skin.",
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
      <body>{children}</body>
    </html>
  );
}
