// Dental tourism destinations. Prices are typical self-pay clinic prices abroad (USD) vs. common US
// self-pay prices, compiled from published clinic price lists and dental-tourism aggregators (2025-26).
// Ballparks only — real prices vary by clinic, city, materials and case. Not a quote or medical advice.

export interface Destination {
  slug: string;
  country: string;
  flag: string;
  hub: string; // where most clinics cluster
  savings: string; // headline savings vs US
  blurb: string;
  why: string[];
  considerations: string[];
  // procedure name → [typical abroad price, typical US price] in USD
  prices: { name: string; abroad: string; us: string }[];
}

export const destinations: Destination[] = [
  {
    slug: "turkey",
    country: "Turkey",
    flag: "🇹🇷",
    hub: "Istanbul & Antalya",
    savings: "60–70% less than the US",
    blurb:
      "Turkey is the world's biggest dental-tourism hub — especially for full-mouth veneer and crown makeovers (the look people call \"Turkey teeth\") and for implants. Package deals often bundle the treatment, hotel and airport transfers.",
    why: [
      "The lowest headline prices of the major destinations",
      "Clinics geared to international patients, with all-inclusive packages",
      "High volume of implant and veneer/crown cases",
      "Short trips marketed for a \"smile makeover\" in a few days",
    ],
    considerations: [
      "\"Turkey teeth\" often means crowns or veneers that involve shaving down healthy teeth — understand exactly what's proposed",
      "Very fast timelines can mean less healing time between stages",
      "Check the dentist's credentials and read independent reviews, not just the clinic's own",
      "Factor in follow-up care back home if something needs adjusting",
    ],
    prices: [
      { name: "Single dental implant", abroad: "$500–$900", us: "$3,000–$5,000" },
      { name: "Porcelain veneer (per tooth)", abroad: "$150–$300", us: "$900–$2,500" },
      { name: "Crown (per tooth)", abroad: "$150–$300", us: "$800–$2,500" },
      { name: "All-on-4 (per arch)", abroad: "$3,000–$6,000", us: "$15,000–$30,000" },
    ],
  },
  {
    slug: "hungary",
    country: "Hungary",
    flag: "🇭🇺",
    hub: "Budapest & Sopron",
    savings: "50–60% less than the US",
    blurb:
      "Hungary is the dental-tourism capital of Europe, with a decades-long reputation for implants and crowns. Budapest and the border town of Sopron draw patients from across Europe for EU-standard care at a fraction of Western prices.",
    why: [
      "Long-established reputation and EU regulatory standards",
      "Strong for implants, crowns and full-mouth restoration",
      "Easy to reach for European patients (Sopron sits on the Austrian border)",
      "Many clinics offer written guarantees on their work",
    ],
    considerations: [
      "Prices are higher than Turkey, but still far below the US",
      "Implant cases often need two trips a few months apart",
      "Confirm what the guarantee actually covers and for how long",
      "Budget for travel and accommodation across multiple visits",
    ],
    prices: [
      { name: "Single dental implant", abroad: "$700–$1,100", us: "$3,000–$5,000" },
      { name: "Porcelain veneer (per tooth)", abroad: "$300–$450", us: "$900–$2,500" },
      { name: "Crown (per tooth)", abroad: "$300–$450", us: "$800–$2,500" },
      { name: "All-on-4 (per arch)", abroad: "$6,000–$9,000", us: "$15,000–$30,000" },
    ],
  },
  {
    slug: "mexico",
    country: "Mexico",
    flag: "🇲🇽",
    hub: "Los Algodones, Tijuana & Cancún",
    savings: "50–65% less than the US",
    blurb:
      "For US patients, Mexico is the most convenient option — border towns like Los Algodones (nicknamed \"Molar City\") and Tijuana are a short hop from California and Arizona, so you can drive down for implants, crowns or dentures.",
    why: [
      "Closest option for US patients — often a same-day drive across the border",
      "Huge concentration of clinics in border towns geared to Americans",
      "Good for implants, crowns, dentures and full-mouth work",
      "English widely spoken at patient-facing clinics",
    ],
    considerations: [
      "Quality varies widely — stick to established, well-reviewed clinics",
      "Border-town logistics (parking, crossing times) take planning",
      "Complex implant cases may still need more than one visit",
      "Check what happens if you need a repair once you're home",
    ],
    prices: [
      { name: "Single dental implant", abroad: "$750–$1,300", us: "$3,000–$5,000" },
      { name: "Porcelain veneer (per tooth)", abroad: "$300–$500", us: "$900–$2,500" },
      { name: "Crown (per tooth)", abroad: "$250–$450", us: "$800–$2,500" },
      { name: "All-on-4 (per arch)", abroad: "$8,000–$11,000", us: "$15,000–$30,000" },
    ],
  },
];

export const destBySlug = (slug: string) => destinations.find((d) => d.slug === slug);
