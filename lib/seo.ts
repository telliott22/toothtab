import type { Metadata } from "next";
import { site } from "./site";

interface PageMetaArgs {
  title: string;
  description: string;
  path: string; // leading slash
}

export function pageMeta({ title, description, path }: PageMetaArgs): Metadata {
  const url = `${site.url}${path === "/" ? "" : path}`;
  const fullTitle = path === "/" ? `${site.name} — ${site.tagline}` : `${title} | ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemListJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: it.url,
    })),
  };
}

// Structured pricing data for a procedure page — helps search engines show price ranges.
export function serviceCostJsonLd(name: string, low: number, high: number, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType: "Dental procedure",
    url: `${site.url}${path}`,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: low,
      highPrice: high,
    },
  };
}
