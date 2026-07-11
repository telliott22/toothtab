// Outbound monetization slots. Swap these hrefs for your real affiliate/referral links once
// the programs are approved (e.g. dental marketplaces, discount-plan networks, financing).
// Every outbound link on the site uses rel="sponsored nofollow noopener".
export const partners = {
  // "Find a dentist" marketplace (book an appointment / emergency). Placeholder → replace.
  findDentist: {
    label: "Find a dentist near you",
    href: "https://www.example.com/find-a-dentist", // TODO: Opencare / Zocdoc / etc. affiliate link
  },
  // Discount dental plans — real affiliate program exists (e.g. DentalPlans.com).
  discountPlan: {
    label: "Compare dental discount plans",
    href: "https://www.example.com/dental-discount-plans", // TODO: DentalPlans.com affiliate link
  },
  // Financing for larger treatment (implants, ortho).
  financing: {
    label: "See dental financing options",
    href: "https://www.example.com/dental-financing", // TODO: CareCredit / Sunbit affiliate link
  },
} as const;

export type PartnerKey = keyof typeof partners;
