import { partners, type PartnerKey } from "@/lib/data/partners";

const copy: Record<PartnerKey, { title: string; body: string }> = {
  findDentist: {
    title: "Need to see a dentist?",
    body: "Compare local dentists, check who takes your insurance, and book an appointment online.",
  },
  discountPlan: {
    title: "No insurance? A discount plan can cut the bill",
    body: "Dental savings plans give members reduced rates at participating dentists — often 10–60% off — for a low yearly fee.",
  },
  financing: {
    title: "Spread the cost",
    body: "Bigger treatments like implants and braces can be financed in monthly payments instead of paid upfront.",
  },
  tourism: {
    title: "Compare overseas clinic quotes",
    body: "Get free quotes from vetted dental clinics in Turkey, Hungary and Mexico — many travellers save 50–70% versus US prices, even including the trip.",
  },
};

export default function PartnerCta({ kind }: { kind: PartnerKey }) {
  const p = partners[kind];
  const c = copy[kind];
  return (
    <aside className="my-8 rounded-2xl border border-teal-200 bg-teal-50 p-5 sm:p-6">
      <div className="text-base font-bold text-slate-900">{c.title}</div>
      <p className="mt-1 text-sm text-slate-600">{c.body}</p>
      <a
        href={p.href}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-3 inline-block rounded-lg bg-teal-600 px-4 py-2 text-sm font-semibold text-white hover:bg-teal-700"
      >
        {p.label} →
      </a>
      <div className="mt-2 text-xs text-slate-400">Advertiser link — we may earn a commission at no cost to you.</div>
    </aside>
  );
}
