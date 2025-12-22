// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section>
        <h1>Clear Skin Starts With the Right Australian Skincare</h1>
        <p>
          Clear Skin Australia is an independent guide focused on skincare that
          works with Australian conditions — heat, humidity, UV exposure, and
          sensitive or acne-prone skin.
        </p>
        <p>
          We break down routines, brands, and product types so you can make
          calmer, more confident choices without hype or medical claims.
        </p>
      </section>

      <hr />

      <section>
        <h2>Where to Start</h2>
        <ul>
          <li>
            <Link href="/best-australian-skincare-clear-skin/">
              Best Australian Skincare for Clear Skin
            </Link>{" "}
            — our main comparison and recommendations
          </li>
          <li>
            <Link href="/skincare/acne/">Acne Skincare Hub</Link> — guidance for
            breakouts, adult acne, and acne-prone skin
          </li>
          <li>
            <Link href="/skincare/sensitive-skin/">
              Sensitive Skin Hub
            </Link>{" "}
            — routines for reactive and easily irritated skin
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Featured Brand Reviews</h2>
        <p>
          These reviews focus on formulation approach, who each brand suits,
          and where they fit within a simple routine.
        </p>
        <ul>
          <li>
            <Link href="/reviews/skin-virtue/">Skin Virtue Review</Link>
          </li>
          <li>
            <Link href="/reviews/seadragon-organic/">
              Seadragon Organic Review
            </Link>
          </li>
          <li>
            <Link href="/reviews/natio/">Natio Skincare Review</Link>
          </li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Our Approach</h2>
        <ul>
          <li>Australian-relevant guidance (climate, UV, lifestyle)</li>
          <li>Barrier-first routines over aggressive actives</li>
          <li>Simple product selection that’s easy to stick to</li>
          <li>Affiliate-supported, independently written content</li>
        </ul>
      </section>

      <hr />

      <section>
        <h2>Important Note</h2>
        <p>
          Clear Skin Australia provides general skincare information only. We do
          not offer medical advice or diagnose skin conditions. Always patch
          test products and consult a qualified professional for medical
          concerns.
        </p>
      </section>
    </>
  );
        }
                                                                     
