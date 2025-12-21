// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Page not found</h1>
      <p>The page you’re looking for doesn’t exist (or hasn’t been generated yet).</p>
      <p>
        <Link href="/">Go back home</Link>
      </p>
    </>
  );
}
