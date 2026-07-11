import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PartnerCta from "@/components/PartnerCta";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Dental work with no insurance: how to pay less",
  description:
    "No dental insurance? Practical ways to lower the bill — dental discount plans, dental school clinics, community health centers, payment plans and financing, cash discounts, and shopping around. What each one saves and its catch.",
  path: "/dental-work-with-no-insurance",
});

const faqs = [
  { q: "How can I get dental work done with no insurance?", a: "Common routes are: a dental discount (savings) plan for reduced rates, a dental school clinic or community health center for low-cost care, a payment plan or financing to spread the cost, asking for a cash-pay discount, and comparing quotes from a few offices. The best mix depends on the treatment and how urgent it is." },
  { q: "What is a dental discount plan?", a: "A dental savings plan isn't insurance — you pay a yearly membership fee (often $100–$200) and get set discounts, frequently 10–60%, at participating dentists, with no annual maximum or waiting periods. It works best if you'll actually use participating providers, so check that dentists near you take the plan before joining." },
  { q: "Are dental schools cheaper?", a: "Yes — dental school teaching clinics often charge far less (sometimes 30–50% off) because supervised students do the work. The trade-offs are longer appointments and limited availability, but the care is overseen by licensed faculty. Search for accredited dental schools in your state." },
  { q: "Can I pay for dental work in installments?", a: "Often, yes. Many practices offer in-house payment plans, and third-party medical financing lets you spread larger treatments (implants, braces) over months — sometimes interest-free for a promotional period. Read the terms: deferred-interest plans can charge back-interest if you don't clear the balance in time." },
  { q: "Do dentists give discounts for paying cash?", a: "Many do. Some offices have a published cash or 'membership' discount, and others will reduce the price if you ask, especially for treatment paid upfront. It never hurts to ask what the cash price is and whether there's a discount." },
  { q: "Is it cheaper to fix a problem early?", a: "Almost always. A small filling is far cheaper than the root canal and crown you'd need if decay reaches the nerve, and saving a tooth now beats paying for an implant or bridge later. Regular checkups — often the one thing that's affordable out of pocket — catch problems while they're small." },
];

const options = [
  { h: "Dental discount plans", s: "10–60% off at member dentists for a low yearly fee. Not insurance, but no annual cap or waiting periods.", tag: "Best for predictable savings" },
  { h: "Dental school clinics", s: "Supervised students do the work at big discounts. Slower, limited slots, faculty-overseen.", tag: "Best for lowest price" },
  { h: "Community health centers", s: "Federally-funded centers offer sliding-scale fees based on income.", tag: "Best on a tight budget" },
  { h: "Payment plans & financing", s: "Spread big treatments over months — in-house plans or medical financing.", tag: "Best for implants & braces" },
  { h: "Cash / membership discount", s: "Ask the office for their cash price or in-house membership rate.", tag: "Always worth asking" },
  { h: "Shop around", s: "Prices vary a lot between offices — get two or three quotes for major work.", tag: "Best for big-ticket work" },
];

export default function NoInsurance() {
  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />

      <h1 className="font-display text-4xl font-extrabold text-slate-900">Dental work with no insurance</h1>
      <p className="mt-4 text-lg text-slate-600">
        No coverage doesn't have to mean paying the sticker price. Here are the practical ways people lower the bill —
        what each saves, and the catch to watch for.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <div key={o.h} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wide text-teal-600">{o.tag}</div>
            <div className="mt-1 font-display text-lg font-bold text-slate-900">{o.h}</div>
            <p className="mt-1 text-sm text-slate-600">{o.s}</p>
          </div>
        ))}
      </div>

      <PartnerCta kind="discountPlan" />

      <section className="prose-tab mt-4">
        <h2>Which one should you use?</h2>
        <ul>
          <li><strong>Routine care (cleanings, fillings):</strong> a discount plan or a cash discount usually does the job.</li>
          <li><strong>Big treatments (implants, braces, dentures):</strong> combine a discount plan with financing to spread the cost.</li>
          <li><strong>Very tight budget:</strong> a dental school clinic or community health center will be cheapest.</li>
          <li><strong>Urgent pain:</strong> see our <Link href="/emergency-dentist">emergency dentist guide</Link> first, then sort out payment.</li>
        </ul>
      </section>

      <PartnerCta kind="financing" />

      <section className="prose-tab mt-4">
        <h2>No-insurance dental — FAQ</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/cost" className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700">See what procedures cost →</Link>
        <Link href="/emergency-dentist" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">Dental emergency?</Link>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        General cost information only — not financial, medical or dental advice. Discount plans, financing terms and
        clinic eligibility vary; check the details before you commit.
      </p>
    </div>
  );
}
