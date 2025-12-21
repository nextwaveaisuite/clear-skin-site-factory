# build.py
import json
import os
from datetime import datetime, timezone
from typing import Dict, List, Any

ROOT = os.path.dirname(os.path.abspath(__file__))

def load_json(path: str) -> Dict[str, Any]:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def ensure_dir(path: str) -> None:
    os.makedirs(path, exist_ok=True)

def slug_to_title(url: str) -> str:
    if url == "/":
        return "Home"
    parts = [p for p in url.strip("/").split("/") if p]
    return parts[-1].replace("-", " ").title()

def fm_escape(s: str) -> str:
    return s.replace('"', '\\"')

def build_frontmatter(page: Dict[str, Any], site: Dict[str, Any]) -> str:
    title = site.get("name", "Home") if page["url"] == "/" else slug_to_title(page["url"])
    meta = fm_escape(", ".join(page.get("secondary_keywords", [])[:6]))
    now = datetime.now(timezone.utc).isoformat()

    return "\n".join([
        "---",
        f'title: "{fm_escape(title)}"',
        f'role: "{page["role"]}"',
        f'url: "{page["url"]}"',
        f'primary_keyword: "{fm_escape(page.get("primary_keyword",""))}"',
        f'secondary_keywords: "{meta}"',
        f'geo: "{site.get("geo","")}"',
        f'generated_at: "{now}"',
        "---",
        ""
    ])

def pick_anchor(edge: Dict[str, Any]) -> str:
    anchors = edge.get("anchor_variants") or []
    return anchors[0] if anchors else "learn more"

def link_block(out_edges: List[Dict[str, Any]], id_to_page: Dict[str, Dict[str, Any]], heading: str) -> str:
    if not out_edges:
        return ""
    lines = [f"## {heading}", ""]
    for e in out_edges:
        to_page = id_to_page.get(e["to"])
        if not to_page:
            continue
        lines.append(f"- [{pick_anchor(e)}]({to_page['url']})")
    lines.append("")
    return "\n".join(lines)

def h1_for(page: Dict[str, Any], site: Dict[str, Any]) -> str:
    if page["url"] == "/":
        return "Clear Skin Starts With the Right Australian Skincare"
    pk = (page.get("primary_keyword") or "").strip()
    if pk and len(pk) < 70:
        return pk.title()
    return slug_to_title(page["url"])

def role_scaffold(page: Dict[str, Any], site: Dict[str, Any]) -> str:
    role = page["role"]
    h1 = h1_for(page, site)

    if role == "MONEY_PAGE":
        return "\n\n".join([
            f"# {h1}",
            "Finding skincare that supports clear skin can be overwhelming. This page compares Australian options designed for local conditions.",
            "## Quick Picks",
            "- **Best Overall:** Skin Virtue\n- **Best Natural:** Seadragon Organic\n- **Best Budget:** Natio\n- **Best Retailer to Compare:** Adore Beauty",
            "## Comparison Table",
            "> Add a table comparing brand, best for, price range, and verdict.",
            "## Ranked Recommendations",
            "### 1) Skin Virtue\nWhy it’s recommended + who it’s best for.\n\n### 2) Seadragon Organic\nWhy it’s recommended + who it’s best for.\n\n### 3) Natio\nWhy it’s recommended + who it’s best for.\n\n### 4) Adore Beauty\nWhere to compare options.",
            "## How to Choose",
            "- Prioritise barrier support\n- Avoid harsh stripping products\n- Choose routines you can stick to",
            "## FAQ",
            "**How long until I see results?**\nMost people notice changes in 4–8 weeks with consistent use.\n\n**Is Australian skincare better for Australian conditions?**\nOften yes, because it’s designed for local UV and climate stressors.",
            "## Final Recommendation",
            "Start simple, be consistent, and choose products your skin tolerates well."
        ])

    if role == "HUB":
        return "\n\n".join([
            f"# {h1}",
            "This hub page helps you make calm, confident choices using Australian-focused guidance.",
            "## Causes & Triggers (AU context)",
            "- UV exposure\n- Heat and humidity\n- Hard/chlorinated water\n- Overuse of actives",
            "## How to Choose",
            "- Keep routines simple\n- Prioritise hydration and barrier support\n- Avoid unnecessary fragrance",
            "## Best Brands",
            "- Skin Virtue\n- Seadragon Organic\n- Natio",
            "## Simple Routine (AM/PM)",
            "**Morning:** gentle cleanser → hydration → moisturiser → sunscreen\n\n**Night:** cleanser → treatment (if tolerated) → moisturiser",
            "## FAQ",
            "**What if my skin reacts to everything?**\nStart with fewer products and patch test new items."
        ])

    if role == "SUB_HUB":
        return "\n\n".join([
            f"# {h1}",
            "This sub-hub goes deeper into a specific version of the skin concern and points you to the best next steps.",
            "## Why it’s Different",
            "- Often linked to sensitivity, stress, or hormones\n- Frequently worsened by over-drying products",
            "## Key Triggers",
            "- Heat/sweat\n- Irritation\n- UV and dehydration",
            "## Best Options",
            "- Skin Virtue (gentle, barrier-first)\n- Seadragon Organic (natural approach)\n- Natio (budget-friendly start)",
            "## Routine + Mistakes to Avoid",
            "- Avoid over-cleansing\n- Don’t add multiple actives at once\n- Give changes 4–8 weeks",
            "## FAQ",
            "**How long to calm flare-ups?**\nMany people notice improvement within 2–6 weeks with a consistent routine."
        ])

    if role == "REVIEW_PAGE":
        return "\n\n".join([
            f"# {h1}",
            "This is an honest, Australian-focused review to help you decide if the brand matches your skin.",
            "## Quick Verdict",
            "- **Best for:** sensitive/reactive skin, adult acne linked to irritation\n- **Not ideal for:** people wanting strong, aggressive actives",
            "## What It Is",
            "Brand overview and where it fits in the Australian skincare landscape.",
            "## Ingredient / Formulation Approach",
            "Barrier-first, gentle, consistent-use approach (avoid strong claims).",
            "## Range Overview",
            "- Cleanser\n- Serum\n- Moisturiser\n- Targeted treatments",
            "## Who It Suits",
            "- Sensitive skin\n- Adult acne\n- Dry/dehydrated skin",
            "## Pros & Cons",
            "**Pros:** well tolerated, simple routines\n\n**Cons:** not the cheapest, may be too gentle for some",
            "## Alternatives",
            "- Seadragon Organic\n- Natio",
            "## FAQ",
            "**Is it good for sensitive skin?**\nOften yes, depending on your triggers and routine."
        ])

    if role == "TRUST_PAGE":
        return "\n\n".join([
            f"# {slug_to_title(page['url'])}",
            "Plain-language information about this site.",
            "## Contact / Details",
            "Add your preferred contact method and business details here."
        ])

    return "\n\n".join([
        f"# {h1}",
        "This guide helps you choose a product type for your concern using simple criteria and Australia-relevant considerations.",
        "## What to Look For",
        "- Gentle formulas\n- Low irritation risk\n- Consistent daily use",
        "## Top Picks",
        "- Option 1\n- Option 2\n- Option 3",
        "## Common Mistakes",
        "- Over-cleansing\n- Switching products too fast\n- Skipping sunscreen",
        "## FAQ",
        "**How do I patch test?**\nTry a small amount on a discreet area for a few days before full use."
    ])

def build_page_md(page: Dict[str, Any], site: Dict[str, Any], out_edges: List[Dict[str, Any]], id_to_page: Dict[str, Dict[str, Any]]) -> str:
    fm = build_frontmatter(page, site)
    top_links = link_block(out_edges, id_to_page, "Recommended next reads")
    bottom_links = link_block(out_edges, id_to_page, "Related pages")

    disclosure = ""
    if site.get("monetisation_model") == "affiliate" and page["role"] != "TRUST_PAGE":
        disclosure = "\n---\n\n**Affiliate disclosure:** Clear Skin Australia may earn a commission from qualifying purchases at no extra cost to you.\n"

    md = fm
    if top_links:
        md += top_links + "\n"
    md += role_scaffold(page, site) + "\n\n"
    if bottom_links:
        md += bottom_links + "\n"
    md += disclosure
    return md

def main():
    cfg_dir = os.path.join(ROOT, "config")
    out_dir = os.path.join(ROOT, "output")
    pages_dir = os.path.join(out_dir, "pages")
    ensure_dir(pages_dir)

    site = load_json(os.path.join(cfg_dir, "site.json"))
    sitemap = load_json(os.path.join(cfg_dir, "sitemap.json"))
    linkmap = load_json(os.path.join(cfg_dir, "linkmap.json"))

    pages = sitemap["pages"]
    id_to_page = {p["id"]: p for p in pages}

    outgoing: Dict[str, List[Dict[str, Any]]] = {}
    for e in linkmap["edges"]:
        outgoing.setdefault(e["from"], []).append(e)

    report = {"generated_at": datetime.now(timezone.utc).isoformat(), "pages": [], "errors": []}

    for p in pages:
        url = p["url"]
        fname = "index.md" if url == "/" else url.strip("/").replace("/", "__") + ".md"
        out_path = os.path.join(pages_dir, fname)

        md = build_page_md(p, site, outgoing.get(p["id"], []), id_to_page)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(md)

        report["pages"].append({
            "id": p["id"],
            "url": url,
            "file": f"pages/{fname}",
            "outbound_links": len(outgoing.get(p["id"], []))
        })

    min_out = linkmap["policies"]["min_outbound_links_per_page"]
    for entry in report["pages"]:
        role = id_to_page[entry["id"]]["role"]
        if role != "TRUST_PAGE" and entry["outbound_links"] < min_out:
            report["errors"].append({
                "page_id": entry["id"],
                "issue": "LOW_OUTBOUND_LINKS",
                "details": f"Outbound links = {entry['outbound_links']} (target >= {min_out})"
            })

    ensure_dir(out_dir)
    with open(os.path.join(out_dir, "report.json"), "w", encoding="utf-8") as f:
        json.dump(report, f, indent=2)

    print("✅ Build complete.")
    print(f"- Pages generated: {len(pages)}")
    print(f"- Output folder: {pages_dir}")
    print(f"- Report: {os.path.join(out_dir, 'report.json')}")

if __name__ == "__main__":
    main()
