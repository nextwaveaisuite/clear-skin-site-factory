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
      <body>{children}</body>
    </html>
  );
}
