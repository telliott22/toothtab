# DentalCostTab — dentalcosttab.com

Free US dental **cost estimator** and plain-English cost guides. What dental work
actually costs — implants, crowns, root canals, extractions, wisdom teeth, dentures,
braces and more — with and without insurance.

## Stack
- Next.js 15 (App Router, TypeScript, Tailwind), light clinical theme
- Content-is-data: all pricing in `lib/data/procedures.ts` (single source)
- Interactive `CostEstimator` client component (procedure × insurance → range)
- PostHog (EU, cookieless) via `instrumentation-client.ts`
- Vercel Analytics

## Pages
- `/` — home with the estimator + most-searched costs
- `/cost` — estimator hub with a full price table by category
- `/cost/[slug]` — money page per procedure (Service + FAQ JSON-LD)
- `/wisdom-teeth-removal` — cost + recovery + FAQ hub
- `/emergency-dentist` — what to do now + costs (lead-gen)
- `/dental-work-with-no-insurance` — how to pay less (discount plans, financing)

## Monetization
- Display (AdSense — dental CPCs are high) once traffic arrives
- Lead-gen / affiliate via `lib/data/partners.ts` (swap placeholder hrefs for
  approved links: find-a-dentist marketplace, dental discount plans, financing)

## YMYL guardrails
Cost information only, not dental advice. Prominent disclaimers on every content
page; FAQ answers avoid clinical directives; emergency page routes true emergencies
to the ER/911.

## Dev
```
npm install
npm run dev
npm run build
```
