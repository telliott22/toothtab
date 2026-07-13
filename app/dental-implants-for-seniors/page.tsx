import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PartnerCta from "@/components/PartnerCta";
import { bySlug, moneyFull } from "@/lib/data/procedures";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = pageMeta({
  title: "Dental implants for seniors: costs, Medicare & cheaper routes",
  description:
    "What dental implants cost for seniors, why original Medicare doesn't cover them (and what does), single-tooth vs. implant dentures vs. full-mouth prices, and the practical ways older adults pay less.",
  path: "/dental-implants-for-seniors",
});

const faqs = [
  { q: "How much do dental implants cost for seniors?", a: "The same as for anyone: roughly $3,000–$6,500 per tooth all-in (implant, abutment and crown), around $4,500 typical. Implant-supported dentures commonly run $12,000–$30,000 per arch, and full-mouth fixed implants $35,000–$60,000+. Age itself doesn't change the fee — but coverage and financing options do." },
  { q: "Does Medicare cover dental implants?", a: "Original Medicare (Parts A and B) does not cover dental implants or most routine dental care. Some Medicare Advantage (Part C) plans include a dental allowance that can offset part of the cost — check the plan's dental benefit cap, which is often $1,000–$3,000 a year, well below the cost of an implant. Medicaid dental coverage for adults varies by state and rarely covers implants." },
  { q: "Are seniors too old for dental implants?", a: "No — there's no upper age limit. Success rates in healthy older adults are comparable to younger patients. What matters is jawbone density, gum health, and conditions like uncontrolled diabetes or medications that affect bone healing. A dentist evaluates all of this with a scan before recommending implants." },
  { q: "What's the cheapest tooth-replacement option for seniors?", a: "Traditional dentures are the cheapest upfront ($600–$8,000 for a full set), a dental bridge sits in the middle, and implants cost the most upfront but usually last longest. Many seniors choose implant-supported (snap-in) dentures as a middle path — far more stable than regular dentures at a fraction of full-mouth implant cost." },
  { q: "How do seniors pay for dental implants?", a: "Common routes: Medicare Advantage dental allowances, dental discount plans (10–60% off at member dentists), dental school implant clinics (30–50% cheaper), financing/payment plans, cash-pay discounts, and — for big treatment plans — accredited clinics abroad, where full-mouth work can cost 50–70% less. Compare at least two or three quotes; implant fees vary widely between offices." },
];

const options = [
  { h: "Medicare Advantage dental allowance", s: "Some Part C plans pay $1,000–$3,000/yr toward dental. It won't cover an implant fully, but it helps — check your plan's cap.", tag: "Check first" },
  { h: "Implant-supported dentures", s: "Snap-in dentures on 2–4 implants: most of the stability of full-mouth implants at a fraction of the price.", tag: "Best value for full arches" },
  { h: "Dental discount plans", s: "10–60% off at member dentists for a ~$100–200 yearly fee. No annual cap or waiting period.", tag: "Predictable savings" },
  { h: "Dental school implant clinics", s: "Supervised residents place implants at 30–50% off. Slower, but faculty-overseen.", tag: "Lowest US price" },
  { h: "Financing & payment plans", s: "Spread the cost over months or years — in-house plans or medical financing.", tag: "Cash-flow friendly" },
  { h: "Accredited clinics abroad", s: "Full-mouth implant work often costs 50–70% less in Mexico, Hungary or Turkey — see our guide.", tag: "Biggest total savings" },
];

export default function ImplantsForSeniors() {
  const implant = bySlug("dental-implants")!;
  const fullMouth = bySlug("full-mouth-implants")!;
  const dentures = bySlug("dentures")!;
  const bridge = bySlug("dental-bridge")!;

  const compare = [
    { p: implant, note: "Per tooth, all-in (post + abutment + crown)" },
    { p: fullMouth, note: "Fixed full-arch (All-on-4 style)" },
    { p: dentures, note: "Traditional removable, full set" },
    { p: bridge, note: "Per bridge (replaces 1–3 teeth)" },
  ];

  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />

      <h1 className="font-display text-4xl font-extrabold text-slate-900">Dental implants for seniors</h1>
      <p className="mt-4 text-lg text-slate-600">
        Implants work just as well for older adults as for anyone else — the hard part is paying for them,
        because original Medicare covers none of it. Here&apos;s what implants really cost, what your
        alternatives are, and the routes seniors actually use to bring the price down.
      </p>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-bold text-slate-900">What tooth replacement costs</h2>
        <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
          <table className="w-full text-sm">
            <tbody className="divide-y divide-slate-100">
              {compare.map(({ p, note }) => (
                <tr key={p.slug}>
                  <td className="px-4 py-3">
                    <Link href={`/cost/${p.slug}`} className="font-semibold text-slate-900 hover:text-teal-600">{p.name}</Link>
                    <div className="text-xs text-slate-400">{note}</div>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-slate-900">
                    {moneyFull(p.low)}–{moneyFull(p.high)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-400">Self-pay US ballparks — see each linked guide for what changes the price.</p>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-slate-900">Medicare and implants: the short version</h2>
        <div className="prose-tab mt-2">
          <p>
            <strong>Original Medicare (Parts A &amp; B) does not cover dental implants</strong> or most routine dental
            work. Two partial exceptions matter: some <strong>Medicare Advantage (Part C)</strong> plans include a
            dental allowance — typically capped at $1,000–$3,000 a year — and Medicaid adult dental benefits vary by
            state (implants are rarely included). If you're choosing between Advantage plans and know implants are
            coming, compare the dental caps before enrollment season ends.
          </p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-2xl font-bold text-slate-900">Six ways seniors pay less</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {options.map((o) => (
            <div key={o.h} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
              <div className="text-xs font-semibold uppercase tracking-wide text-teal-600">{o.tag}</div>
              <div className="mt-1 font-display text-lg font-bold text-slate-900">{o.h}</div>
              <p className="mt-1 text-sm text-slate-600">{o.s}</p>
            </div>
          ))}
        </div>
      </section>

      <PartnerCta kind="financing" />

      <section className="prose-tab mt-10">
        <h2>Dental implants for seniors — FAQ</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <PartnerCta kind="tourism" />

      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-slate-900">Related guides</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {[
            ["/cost/dental-implants", "Dental implant cost"],
            ["/cost/full-mouth-implants", "Full-mouth implants"],
            ["/cost/dentures", "Dentures cost"],
            ["/dental-work-abroad", "Dental work abroad"],
            ["/dental-work-with-no-insurance", "No insurance? Ways to pay less"],
          ].map(([href, label]) => (
            <Link key={href} href={href} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-400 hover:text-teal-700">
              {label}
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-10 text-xs text-slate-400">
        Cost information only, not dental or medical advice — implant suitability depends on your health and anatomy;
        consult a licensed dentist. Medicare/Medicaid details change; verify current coverage with your plan.
      </p>
    </div>
  );
}
