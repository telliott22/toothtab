// US self-pay ("cash") dental cost ranges, compiled from published fee surveys, dental-school
// clinic fee schedules and insurer cost estimators (2025-26). These are national ballparks — real
// prices vary widely by city, dentist and materials. `ins` = typical *out-of-pocket* with a common
// PPO dental plan after coverage (null = usually not covered by dental insurance).
// Nothing here is dental advice; it is cost information to help people budget and ask better questions.

export type Category =
  | "Preventive"
  | "Fillings & restorative"
  | "Root canals & crowns"
  | "Extractions & surgery"
  | "Implants & replacement"
  | "Orthodontics"
  | "Cosmetic";

export interface Procedure {
  slug: string;
  name: string;
  category: Category;
  unit: string; // e.g. "per tooth", "per arch", "full set"
  low: number;
  avg: number;
  high: number;
  insLow: number | null; // typical out-of-pocket WITH insurance
  insHigh: number | null;
  aliases?: string[];
  cpcTier?: 1 | 2 | 3; // internal: 3 = highest-value keyword cluster
  summary: string;
  affects: string[];
  faqs: { q: string; a: string }[];
  related: string[];
}

export const procedures: Procedure[] = [
  // ---------------- Preventive ----------------
  {
    slug: "dental-checkup",
    name: "Dental checkup & exam",
    category: "Preventive",
    unit: "per visit",
    low: 50, avg: 110, high: 250,
    insLow: 0, insHigh: 40,
    aliases: ["dental exam", "check up", "dentist visit cost"],
    summary:
      "A routine exam is the cheapest thing you'll do at the dentist — and the one most likely to be fully covered. Most plans pay 100% for two checkups a year, so your out-of-pocket is often $0.",
    affects: ["Whether X-rays are taken that day", "New-patient exams cost more than recall visits", "Big-city practices charge more"],
    faqs: [
      { q: "How much is a dental checkup without insurance?", a: "A basic exam typically runs $50–$250 self-pay, averaging around $110. Adding a cleaning and X-rays brings a full new-patient visit closer to $200–$400." },
      { q: "Is a dental exam covered by insurance?", a: "Almost always. Most dental plans cover two preventive exams a year at 100%, so you usually pay nothing beyond your premium." },
    ],
    related: ["teeth-cleaning", "dental-x-rays", "dental-filling"],
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth cleaning",
    category: "Preventive",
    unit: "per visit",
    low: 75, avg: 130, high: 250,
    insLow: 0, insHigh: 50,
    aliases: ["dental cleaning", "prophylaxis", "hygienist"],
    summary:
      "A standard cleaning (prophylaxis) for healthy gums is inexpensive and usually covered twice a year. If you have gum disease you'll need a deep cleaning instead, which costs much more.",
    affects: ["Regular vs. deep cleaning", "How long since your last visit", "Whether it's bundled with an exam"],
    faqs: [
      { q: "How much does a teeth cleaning cost without insurance?", a: "A routine cleaning is about $75–$250 out of pocket, averaging $130. A deep cleaning for gum disease costs far more — see scaling and root planing." },
      { q: "How often should I get a cleaning?", a: "Most people are advised to have a professional cleaning every six months; some with gum issues need them more often. Two a year are usually fully insured." },
    ],
    related: ["deep-cleaning", "dental-checkup", "dental-x-rays"],
  },
  {
    slug: "dental-x-rays",
    name: "Dental X-rays",
    category: "Preventive",
    unit: "per set",
    low: 25, avg: 130, high: 300,
    insLow: 0, insHigh: 60,
    aliases: ["dental radiographs", "bitewings", "panoramic x-ray"],
    summary:
      "X-rays range from a couple of bitewings to a full-mouth or panoramic set. They're inexpensive and usually covered on a set schedule (e.g. bitewings yearly, full set every few years).",
    affects: ["A few bitewings vs. a full-mouth series", "Panoramic or 3D/CBCT scans cost more", "Frequency limits on your plan"],
    faqs: [
      { q: "How much are dental X-rays without insurance?", a: "Bitewings run $25–$75, a full-mouth series $60–$150, and a panoramic X-ray $60–$150. A 3D CBCT scan (often for implants) can be $150–$400." },
    ],
    related: ["dental-checkup", "teeth-cleaning"],
  },
  {
    slug: "deep-cleaning",
    name: "Deep cleaning (scaling & root planing)",
    category: "Preventive",
    unit: "full mouth",
    low: 350, avg: 900, high: 1750,
    insLow: 100, insHigh: 700,
    aliases: ["scaling and root planing", "srp", "periodontal cleaning", "gum cleaning"],
    cpcTier: 2,
    summary:
      "A deep cleaning treats gum disease by cleaning below the gumline, and is billed per quadrant (quarter of the mouth). Full-mouth treatment is typically $350–$1,750 depending on how many quadrants need it.",
    affects: ["Number of quadrants treated (usually billed per quadrant)", "Severity of gum disease", "Whether local anesthetic and follow-ups are included"],
    faqs: [
      { q: "How much does a deep cleaning cost?", a: "Scaling and root planing is usually $150–$400 per quadrant, so a full mouth (four quadrants) runs about $350–$1,750. Insurance often covers part of it as a basic procedure." },
      { q: "Why is a deep cleaning so much more than a regular cleaning?", a: "A regular cleaning polishes above the gumline; a deep cleaning removes tartar from the roots below the gum, usually needs numbing, and is often split across two appointments." },
    ],
    related: ["teeth-cleaning", "dental-checkup"],
  },

  // ---------------- Fillings & restorative ----------------
  {
    slug: "dental-filling",
    name: "Dental filling",
    category: "Fillings & restorative",
    unit: "per tooth",
    low: 100, avg: 250, high: 600,
    insLow: 20, insHigh: 200,
    aliases: ["cavity filling", "composite filling", "tooth filling cost"],
    cpcTier: 2,
    summary:
      "A tooth-colored composite filling is one of the most common dental procedures. Price depends mostly on how many surfaces of the tooth are involved.",
    affects: ["Number of surfaces (1-surface is cheapest)", "Composite (tooth-coloured) vs. amalgam (silver)", "Front tooth vs. back molar"],
    faqs: [
      { q: "How much is a filling without insurance?", a: "A composite filling is about $150–$450 for one or two surfaces, up to $600 for a large multi-surface filling. Silver amalgam fillings are a bit cheaper." },
      { q: "Does insurance cover fillings?", a: "Yes — fillings are a 'basic' procedure most plans cover around 70–80% after any deductible, so out-of-pocket is often $20–$200." },
    ],
    related: ["root-canal", "dental-crown", "tooth-extraction"],
  },
  {
    slug: "dental-bonding",
    name: "Dental bonding",
    category: "Cosmetic",
    unit: "per tooth",
    low: 100, avg: 350, high: 700,
    insLow: null, insHigh: null,
    aliases: ["tooth bonding", "composite bonding", "chipped tooth repair"],
    summary:
      "Bonding uses tooth-coloured resin to repair a chip, gap or discoloured tooth in a single visit. It's the cheapest cosmetic fix, though it doesn't last as long as veneers.",
    affects: ["Number of teeth", "Cosmetic (often not covered) vs. repairing a chipped/decayed tooth (may be)", "Dentist's cosmetic experience"],
    faqs: [
      { q: "How much does dental bonding cost per tooth?", a: "Bonding is roughly $100–$700 per tooth, averaging about $350. Cosmetic bonding usually isn't covered by insurance; bonding to fix a damaged tooth sometimes is." },
    ],
    related: ["veneers", "teeth-whitening", "dental-filling"],
  },

  // ---------------- Root canals & crowns ----------------
  {
    slug: "root-canal",
    name: "Root canal",
    category: "Root canals & crowns",
    unit: "per tooth",
    low: 700, avg: 1200, high: 1800,
    insLow: 200, insHigh: 900,
    aliases: ["root canal treatment", "endodontic treatment", "root canal cost"],
    cpcTier: 3,
    summary:
      "A root canal removes infected pulp to save a tooth. Cost rises from front teeth to molars because back teeth have more canals. You'll usually need a crown afterwards, which is a separate cost.",
    affects: ["Front tooth (cheapest) vs. molar (most canals, priciest)", "General dentist vs. endodontist specialist", "Whether a crown and build-up are added afterwards"],
    faqs: [
      { q: "How much does a root canal cost?", a: "Front teeth are about $700–$1,100, premolars $800–$1,200, and molars $1,000–$1,800. Add $1,000–$2,500 if you also need a crown, which is usual." },
      { q: "Is a root canal cheaper than pulling the tooth?", a: "Extraction is cheaper up front ($75–$300), but replacing a missing tooth with an implant or bridge later usually costs far more than saving it now." },
    ],
    related: ["dental-crown", "tooth-extraction", "dental-filling"],
  },
  {
    slug: "dental-crown",
    name: "Dental crown",
    category: "Root canals & crowns",
    unit: "per tooth",
    low: 800, avg: 1300, high: 2500,
    insLow: 400, insHigh: 1400,
    aliases: ["tooth crown", "cap", "crown cost", "zirconia crown"],
    cpcTier: 3,
    summary:
      "A crown caps a damaged or root-canalled tooth. Material drives the price: porcelain-fused-to-metal is cheapest, all-ceramic/zirconia and gold cost more.",
    affects: ["Material (metal, porcelain-fused, all-ceramic/zirconia, gold)", "Front vs. back tooth", "Same-day CEREC vs. lab-made"],
    faqs: [
      { q: "How much is a dental crown without insurance?", a: "Crowns run about $800–$2,500 each, averaging $1,300. All-ceramic and zirconia crowns sit at the higher end; porcelain-fused-to-metal is cheaper." },
      { q: "Does dental insurance cover crowns?", a: "Crowns are a 'major' procedure, so plans usually cover about 50% after deductible, leaving $400–$1,400 out of pocket — until you hit your annual maximum." },
    ],
    related: ["root-canal", "dental-bridge", "dental-implants"],
  },

  // ---------------- Extractions & surgery ----------------
  {
    slug: "tooth-extraction",
    name: "Tooth extraction",
    category: "Extractions & surgery",
    unit: "per tooth",
    low: 75, avg: 250, high: 600,
    insLow: 20, insHigh: 250,
    aliases: ["tooth removal", "pulling a tooth", "simple extraction"],
    cpcTier: 2,
    summary:
      "A simple extraction of a visible tooth is inexpensive; a surgical extraction (tooth broken or below the gum) costs more. Molars and surgical cases are at the top of the range.",
    affects: ["Simple (visible tooth) vs. surgical extraction", "Front tooth vs. molar", "Sedation beyond local anesthetic"],
    faqs: [
      { q: "How much does it cost to have a tooth pulled?", a: "A simple extraction is about $75–$300; a surgical extraction is $180–$600. Molars cost more than front teeth, and sedation adds to the bill." },
      { q: "How much to have a molar extracted?", a: "A molar extraction typically runs $180–$600 depending on whether it's simple or surgical. Impacted molars (including wisdom teeth) cost more — see wisdom teeth removal." },
    ],
    related: ["wisdom-teeth-removal", "dental-implants", "dental-bridge"],
  },
  {
    slug: "wisdom-teeth-removal",
    name: "Wisdom teeth removal",
    category: "Extractions & surgery",
    unit: "all four",
    low: 300, avg: 1800, high: 4000,
    insLow: 150, insHigh: 1500,
    aliases: ["wisdom tooth extraction", "third molar removal", "impacted wisdom teeth"],
    cpcTier: 3,
    summary:
      "Cost depends heavily on whether the teeth are erupted (simple) or impacted in the bone (surgical), and on sedation. A single simple one can be under $300; four impacted teeth with sedation can reach $4,000.",
    affects: ["Erupted vs. impacted (bony) teeth", "Number of teeth removed", "Sedation: local, IV or general anesthetic", "Oral surgeon vs. general dentist"],
    faqs: [
      { q: "How much does it cost to get wisdom teeth removed?", a: "A single erupted wisdom tooth is $75–$250; an impacted one is $250–$800. All four together typically run $1,000–$3,000, or up to $4,000 with IV/general sedation." },
      { q: "Does insurance cover wisdom teeth removal?", a: "Dental insurance often covers part of it (impacted extractions are a major/surgical benefit), but annual maximums mean you may still pay $150–$1,500 out of pocket." },
      { q: "Is sedation included in the price?", a: "Not usually. Local anesthetic (numbing) is included, but IV sedation or general anesthesia is billed separately — often $250–$900 — and is a big part of why four impacted teeth get expensive." },
    ],
    related: ["tooth-extraction", "emergency-dentist", "dental-implants"],
  },

  // ---------------- Implants & replacement ----------------
  {
    slug: "dental-implants",
    name: "Dental implant",
    category: "Implants & replacement",
    unit: "per tooth",
    low: 1500, avg: 4000, high: 6000,
    insLow: 1000, insHigh: 5000,
    aliases: ["tooth implant", "single dental implant", "implant cost", "dental implant cost"],
    cpcTier: 3,
    summary:
      "A single implant replaces one tooth with a titanium post, abutment and crown. The post alone is $1,500–$3,000; the full restoration (post + abutment + crown) usually totals $3,000–$5,000, and can run higher with bone grafting.",
    affects: ["Post only vs. full post + abutment + crown", "Whether a bone graft or sinus lift is needed", "Specialist (periodontist/oral surgeon) vs. general dentist", "Where you live"],
    faqs: [
      { q: "How much does a dental implant cost?", a: "A single tooth implant typically totals $3,000–$5,000 all-in (post, abutment and crown). The implant post by itself is $1,500–$3,000; bone grafting can add $200–$3,000." },
      { q: "Does insurance cover dental implants?", a: "Many dental plans still treat implants as elective and cover little or nothing, though more plans now pay a share. Even when covered, low annual maximums mean most of the cost falls on you." },
      { q: "Why are implants so expensive?", a: "You're paying for surgery, a titanium implant, a custom abutment and a crown, often across several visits and months of healing — plus imaging and sometimes bone grafting." },
    ],
    related: ["full-mouth-implants", "dental-bridge", "dentures"],
  },
  {
    slug: "full-mouth-implants",
    name: "Full mouth dental implants (All-on-4)",
    category: "Implants & replacement",
    unit: "per arch",
    low: 15000, avg: 24000, high: 50000,
    insLow: 12000, insHigh: 45000,
    aliases: ["all on 4", "all-on-4", "full mouth implants", "implant dentures", "full arch implants"],
    cpcTier: 3,
    summary:
      "Full-arch implant systems (often called All-on-4) replace a whole row of teeth on four to six implants. Cost is per arch; doing both upper and lower roughly doubles it.",
    affects: ["One arch vs. both (upper and lower)", "Number of implants and material of the fixed bridge", "Extractions, bone grafting and sedation", "Practice and region"],
    faqs: [
      { q: "How much do full mouth dental implants cost?", a: "All-on-4 style full-arch implants run about $15,000–$30,000 per arch, and premium cases up to $50,000. Full-mouth (both arches) is commonly $30,000–$60,000+." },
      { q: "Are full mouth implants cheaper than individual implants?", a: "Yes — replacing every tooth with single implants would cost far more. All-on-4 supports a full arch on just four to six implants, which is why it's the go-to for full-mouth cases." },
    ],
    related: ["dental-implants", "dentures", "dental-bridge"],
  },
  {
    slug: "dental-bridge",
    name: "Dental bridge",
    category: "Implants & replacement",
    unit: "3-unit",
    low: 1500, avg: 3500, high: 5500,
    insLow: 700, insHigh: 3000,
    aliases: ["tooth bridge", "fixed bridge", "3 unit bridge"],
    cpcTier: 2,
    summary:
      "A bridge replaces a missing tooth by anchoring a false tooth to crowns on the neighbouring teeth. A standard three-unit bridge is priced per unit; more missing teeth means more units and more cost.",
    affects: ["Number of units (teeth) in the bridge", "Material (porcelain-fused-to-metal vs. all-ceramic/zirconia)", "Traditional vs. implant-supported bridge"],
    faqs: [
      { q: "How much does a dental bridge cost?", a: "A traditional three-unit bridge runs about $1,500–$5,500, averaging $3,500. Insurance often covers roughly half as a major procedure, up to your annual maximum." },
    ],
    related: ["dental-implants", "dental-crown", "dentures"],
  },
  {
    slug: "dentures",
    name: "Dentures",
    category: "Implants & replacement",
    unit: "per arch",
    low: 600, avg: 1800, high: 8000,
    insLow: 300, insHigh: 3000,
    aliases: ["false teeth", "full dentures", "partial dentures", "denture cost"],
    cpcTier: 2,
    summary:
      "Dentures span a wide range: an economy full denture can be a few hundred dollars, while premium, natural-looking dentures run into the thousands. Partial dentures (replacing some teeth) are cheaper than full sets.",
    affects: ["Full vs. partial denture", "Economy, mid-range or premium materials", "One arch vs. both", "Any extractions needed first"],
    faqs: [
      { q: "How much do dentures cost?", a: "A full denture is about $1,000–$3,500 per arch for standard quality, with premium sets up to $8,000. Partial dentures run $700–$1,800. A basic/economy full set can start near $600." },
      { q: "Does insurance help with dentures?", a: "Most plans cover dentures as a major service at around 50%, but annual maximums (often $1,000–$1,500) cap how much they'll pay in a year." },
    ],
    related: ["full-mouth-implants", "dental-bridge", "dental-implants"],
  },

  // ---------------- Orthodontics ----------------
  {
    slug: "braces",
    name: "Braces",
    category: "Orthodontics",
    unit: "full treatment",
    low: 3000, avg: 5000, high: 7500,
    insLow: 2000, insHigh: 6000,
    aliases: ["metal braces", "orthodontics", "braces cost"],
    cpcTier: 2,
    summary:
      "Traditional metal braces straighten teeth over 1–3 years. Total treatment is usually $3,000–$7,500 depending on complexity and how long you're in braces.",
    affects: ["Complexity and length of treatment", "Metal vs. ceramic (tooth-coloured) brackets", "Adult vs. child (some plans only cover children)"],
    faqs: [
      { q: "How much do braces cost?", a: "Metal braces typically run $3,000–$7,500 for full treatment, averaging around $5,000. Ceramic braces cost a bit more." },
      { q: "Does insurance cover braces?", a: "Many plans include a lifetime orthodontic benefit (often $1,000–$2,000), sometimes only for patients under 18. That benefit is separate from your annual maximum." },
    ],
    related: ["invisalign", "teeth-whitening"],
  },
  {
    slug: "invisalign",
    name: "Invisalign & clear aligners",
    category: "Orthodontics",
    unit: "full treatment",
    low: 2000, avg: 5000, high: 8000,
    insLow: 1500, insHigh: 6500,
    aliases: ["clear aligners", "invisible braces", "invisalign cost"],
    cpcTier: 2,
    summary:
      "Clear aligners straighten teeth with a series of removable trays. In-office Invisalign is comparable to braces; mail-order 'at-home' aligners are cheaper but suit only mild cases.",
    affects: ["In-office Invisalign vs. mail-order at-home aligners", "How much movement is needed", "Number of trays / length of treatment"],
    faqs: [
      { q: "How much does Invisalign cost?", a: "In-office Invisalign is typically $3,000–$8,000, similar to braces. At-home clear aligner brands run about $1,200–$2,500 but only handle mild crowding." },
      { q: "Is Invisalign covered by insurance?", a: "If your plan has an orthodontic benefit, it usually applies to Invisalign the same as braces — commonly a $1,000–$2,000 lifetime benefit." },
    ],
    related: ["braces", "teeth-whitening"],
  },

  // ---------------- Cosmetic ----------------
  {
    slug: "veneers",
    name: "Veneers",
    category: "Cosmetic",
    unit: "per tooth",
    low: 250, avg: 1500, high: 2500,
    insLow: null, insHigh: null,
    aliases: ["porcelain veneers", "composite veneers", "veneers cost"],
    cpcTier: 3,
    summary:
      "Veneers are thin shells bonded to the front of teeth for a cosmetic makeover. Porcelain veneers are the premium, longest-lasting option; composite veneers are cheaper. Priced per tooth, and rarely covered by insurance.",
    affects: ["Porcelain (premium) vs. composite (cheaper)", "Number of teeth (a 'smile' is often 6–8)", "Cosmetic dentist's experience"],
    faqs: [
      { q: "How much do veneers cost per tooth?", a: "Porcelain veneers run about $900–$2,500 per tooth; composite veneers $250–$1,500. A full set of 8 porcelain veneers can be $8,000–$20,000." },
      { q: "Does insurance cover veneers?", a: "No — veneers are considered cosmetic, so dental insurance almost never contributes. Many patients use financing or a payment plan." },
    ],
    related: ["teeth-whitening", "dental-bonding", "dental-crown"],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth whitening",
    category: "Cosmetic",
    unit: "per treatment",
    low: 100, avg: 450, high: 1000,
    insLow: null, insHigh: null,
    aliases: ["teeth bleaching", "professional whitening", "zoom whitening"],
    cpcTier: 2,
    summary:
      "Professional whitening is faster and stronger than store-bought kits. In-office (e.g. Zoom) is the priciest and quickest; custom take-home trays from your dentist are a cheaper middle ground.",
    affects: ["In-office vs. custom take-home trays", "Single session vs. a package", "How stained your teeth are to start"],
    faqs: [
      { q: "How much does professional teeth whitening cost?", a: "In-office whitening is about $300–$1,000; custom take-home trays from a dentist $200–$600. Over-the-counter kits are $20–$100 but work more slowly." },
    ],
    related: ["veneers", "dental-bonding", "dental-checkup"],
  },
  {
    slug: "night-guard",
    name: "Night guard (for grinding)",
    category: "Fillings & restorative",
    unit: "each",
    low: 100, avg: 450, high: 800,
    insLow: 50, insHigh: 400,
    aliases: ["mouth guard", "occlusal guard", "bruxism guard", "teeth grinding guard"],
    summary:
      "A custom night guard protects your teeth from grinding (bruxism). A dentist-made guard fits better and lasts longer than a boil-and-bite from the drugstore.",
    affects: ["Custom dentist-made vs. over-the-counter", "Hard vs. soft material", "Whether it's for grinding or a bite/TMJ issue"],
    faqs: [
      { q: "How much is a custom night guard?", a: "A dentist-made night guard is about $200–$800; drugstore boil-and-bite versions are $15–$40 but fit less well and wear out faster. Some insurance plans help with a custom guard." },
    ],
    related: ["dental-crown", "dental-checkup"],
  },
];

export const bySlug = (slug: string) => procedures.find((p) => p.slug === slug);

export const categories: Category[] = [
  "Preventive",
  "Fillings & restorative",
  "Root canals & crowns",
  "Extractions & surgery",
  "Implants & replacement",
  "Orthodontics",
  "Cosmetic",
];

export const byCategory = (c: Category) => procedures.filter((p) => p.category === c);

export const money = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(n % 1000 === 0 ? 0 : 1)}k` : `$${n}`;

export const moneyFull = (n: number) => `$${n.toLocaleString("en-US")}`;
