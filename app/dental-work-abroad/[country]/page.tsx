import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import PartnerCta from "@/components/PartnerCta";
import { destinations, destBySlug } from "@/lib/data/tourism";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const revalidate = 86400;
export function generateStaticParams() {
  return destinations.map((d) => ({ country: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const d = destBySlug(country);
  if (!d) return {};
  return pageMeta({
    title: `Dental work in ${d.country}: cost, savings & how it works`,
    description: `Getting dental work in ${d.country} — implant, veneer and crown prices vs the US (${d.savings}), where the clinics are, how it works, and what to watch out for.`,
    path: `/dental-work-abroad/${d.slug}`,
  });
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const d = destBySlug(country);
  if (!d) notFound();

  const faqs = [
    { q: `How much does dental work cost in ${d.country}?`, a: `${d.country} is typically ${d.savings.toLowerCase()}. For example, a single implant runs ${d.prices[0].abroad} versus ${d.prices[0].us} in the US. Exact prices depend on the clinic, city and your specific case.` },
    { q: `Is it safe to get dental work in ${d.country}?`, a: `It can be at reputable clinics, but quality varies. Vet the individual dentist's credentials, read independent reviews, understand exactly what's proposed, and check the guarantee and follow-up options. This is general information, not medical advice.` },
    { q: `Where do most people go for dental work in ${d.country}?`, a: `Most clinics that cater to international patients cluster around ${d.hub}.` },
  ];

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />

      <nav className="text-sm text-slate-500">
        <Link href="/dental-work-abroad" className="hover:text-teal-600">← All destinations</Link>
      </nav>

      <div className="mt-3 flex items-center gap-3">
        <span className="text-4xl" aria-hidden>{d.flag}</span>
        <div>
          <h1 className="font-display text-4xl font-extrabold text-slate-900">Dental work in {d.country}</h1>
          <div className="text-sm font-semibold text-teal-700">{d.savings} · {d.hub}</div>
        </div>
      </div>

      <p className="mt-4 text-lg text-slate-600">{d.blurb}</p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
            <tr>
              <th className="px-4 py-3">Procedure</th>
              <th className="px-4 py-3 text-right">{d.country}</th>
              <th className="px-4 py-3 text-right">United States</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {d.prices.map((p) => (
              <tr key={p.name}>
                <td className="px-4 py-3 font-medium text-slate-700">{p.name}</td>
                <td className="px-4 py-3 text-right font-semibold text-teal-700">{p.abroad}</td>
                <td className="px-4 py-3 text-right text-slate-500">{p.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PartnerCta kind="tourism" />

      <section className="prose-tab mt-4">
        <h2>Why people choose {d.country}</h2>
        <ul>{d.why.map((w) => (<li key={w}>{w}</li>))}</ul>
        <h2>What to watch out for</h2>
        <ul>{d.considerations.map((c) => (<li key={c}>{c}</li>))}</ul>
      </section>

      <section className="prose-tab mt-8">
        <h2>Dental work in {d.country} — FAQ</h2>
        {faqs.map((f) => (<div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>))}
      </section>

      <section className="mt-8">
        <h2 className="font-display text-xl font-bold text-slate-900">Other destinations</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {destinations.filter((x) => x.slug !== d.slug).map((x) => (
            <Link key={x.slug} href={`/dental-work-abroad/${x.slug}`} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-400 hover:text-teal-700">
              {x.flag} {x.country}
            </Link>
          ))}
          <Link href="/cost/dental-implants" className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-400 hover:text-teal-700">US implant cost</Link>
        </div>
      </section>

      <p className="mt-8 text-xs text-slate-400">
        General cost information only, not medical or dental advice. Prices are typical clinic ballparks and vary by
        case; confirm directly with the clinic and understand the treatment before you travel.
      </p>
    </article>
  );
}
