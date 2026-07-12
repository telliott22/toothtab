// Single source of truth for site identity. Change the name/domain here only.
export const site = {
  name: "DentalCostTab",
  domain: "dentalcosttab.com",
  url: "https://dentalcosttab.com",
  tagline: "What dental work really costs",
  description:
    "DentalCostTab shows what dental work actually costs in the US — a plain-English cost estimator for implants, crowns, root canals, extractions and more, with and without insurance, plus how to pay when you don't have coverage.",
  locale: "en_US",
  twitter: "",
  nav: [
    { href: "/cost", label: "Cost estimator" },
    { href: "/cost/dental-implants", label: "Implants" },
    { href: "/wisdom-teeth-removal", label: "Wisdom teeth" },
    { href: "/emergency-dentist", label: "Emergency" },
    { href: "/dental-work-with-no-insurance", label: "No insurance" },
  ],
} as const;

export type Site = typeof site;
