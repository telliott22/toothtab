import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PartnerCta from "@/components/PartnerCta";
import { destinations } from "@/lib/data/tourism";
import { pageMeta, faqJsonLd, itemListJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Dental work abroad: cost, savings & best countries (2026)",
  description:
    "Dental tourism explained: how much you save on implants, veneers and crowns abroad, the best countries (Turkey, Hungary, Mexico), how it works, and the risks to weigh before you book.",
  path: "/dental-work-abroad",
});

const faqs = [
  { q: "How much can you save on dental work abroad?", a: "Most dental tourists save roughly 50–70% versus US self-pay prices, even after flights and accommodation, because clinic and labor costs are far lower overseas. A single implant that's $3,000–$5,000 in the US can be $500–$1,300 in Turkey, Hungary or Mexico." },
  { q: "Where is the best place to get dental work abroad?", a: "It depends on your priorities. Turkey has the lowest prices and the biggest clinics for veneer/crown makeovers and implants; Hungary offers EU-standard care with a long track record; and Mexico is the most convenient for US patients, often a short drive across the border. Compare clinics, not just countries." },
  { q: "Is dental tourism safe?", a: "It can be, at reputable clinics — but quality varies a lot. Vet the individual dentist's credentials, read independent reviews, ask exactly what the treatment involves, understand the guarantee, and plan for follow-up care at home. This page is general information, not medical advice." },
  { q: "What are 'Turkey teeth'?", a: "\"Turkey teeth\" is the nickname for full-mouth crown or veneer makeovers done cheaply in Turkey. The catch is that crowns often require shaving down healthy teeth, which is irreversible — so it's important to understand whether you're getting veneers (minimal prep) or crowns, and why." },
  { q: "Do I need more than one trip for implants abroad?", a: "Often, yes. Implants usually need a few months of healing between placing the post and fitting the crown, so many patients make two trips. Some clinics offer faster protocols; ask how many visits your specific case needs before booking travel." },
];

export default function Abroad() {
  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={itemListJsonLd(destinations.map((d) => ({ name: `Dental work in ${d.country}`, url: `${site.url}/dental-work-abroad/${d.slug}` })))} />

      <h1 className="font-display text-4xl font-extrabold text-slate-900">Dental work abroad</h1>
      <p className="mt-4 text-lg text-slate-600">
        Implants, veneers and full-mouth work cost a fraction overseas — many people save <strong>50–70%</strong>{" "}
        versus US prices, even including the trip. Here's how dental tourism works, the leading destinations, and the
        risks to weigh before you book.
      </p>

      <PartnerCta kind="tourism" />

      <div className="mt-4 grid gap-4">
        {destinations.map((d) => (
          <div key={d.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-2xl font-bold text-slate-900">
                  <span className="mr-2" aria-hidden>{d.flag}</span>
                  <Link href={`/dental-work-abroad/${d.slug}`} className="hover:text-teal-700">{d.country}</Link>
                </div>
                <div className="text-sm text-slate-500">{d.hub}</div>
              </div>
              <span className="whitespace-nowrap rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-700 ring-1 ring-teal-200">{d.savings}</span>
            </div>
            <p className="mt-2 text-slate-600">{d.blurb}</p>
            <Link href={`/dental-work-abroad/${d.slug}`} className="mt-3 inline-block text-sm font-semibold text-teal-600 hover:underline">
              {d.country} prices &amp; how it works →
            </Link>
          </div>
        ))}
      </div>

      <section className="prose-tab mt-10">
        <h2>How dental tourism works</h2>
        <ul>
          <li>You send X-rays or photos and get a written treatment plan and quote from clinics abroad.</li>
          <li>You book the trip around the treatment — simple work is a few days; implants often need two visits.</li>
          <li>Clinics that cater to travellers usually bundle transfers and hotels, and speak English.</li>
          <li>You budget for follow-up care back home in case anything needs adjusting.</li>
        </ul>
        <h2>Weigh the risks</h2>
        <ul>
          <li>Quality varies — vet the individual dentist, not just the country or clinic brand.</li>
          <li>Understand exactly what's proposed — crowns shave down healthy teeth; veneers need less.</li>
          <li>Know what the guarantee covers, and who fixes problems once you're home.</li>
          <li>Very fast timelines can shortcut proper healing.</li>
        </ul>
      </section>

      <section className="prose-tab mt-8">
        <h2>Dental tourism — FAQ</h2>
        {faqs.map((f) => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/cost/dental-implants" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">US implant costs →</Link>
        <Link href="/cost" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">Full cost calculator</Link>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        General cost information only, not medical or dental advice. Prices abroad are typical clinic ballparks and
        vary by case; always confirm with the clinic and understand the treatment before you travel.
      </p>
    </div>
  );
}
