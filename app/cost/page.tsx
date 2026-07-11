import Link from "next/link";
import CostEstimator from "@/components/CostEstimator";
import JsonLd from "@/components/JsonLd";
import { categories, byCategory, moneyFull } from "@/lib/data/procedures";
import { pageMeta, itemListJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Dental cost estimator — prices for every procedure",
  description:
    "A free dental cost estimator for the US. See the price range for implants, crowns, root canals, extractions, dentures, braces and more — with and without insurance.",
  path: "/cost",
});

export default function CostHub() {
  return (
    <div>
      <JsonLd data={itemListJsonLd(
        categories.flatMap((c) => byCategory(c)).map((p) => ({ name: p.name, url: `${site.url}/cost/${p.slug}` })),
      )} />

      <h1 className="font-display text-4xl font-extrabold text-slate-900">Dental cost estimator</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">
        Pick any procedure to see its US price range, then open the full guide for what drives the cost and how to
        pay less. Toggle insurance to see a typical out-of-pocket estimate.
      </p>

      <div className="mx-auto mt-8 max-w-2xl">
        <CostEstimator />
      </div>

      <div className="mt-14 space-y-10">
        {categories.map((c) => (
          <section key={c}>
            <h2 className="font-display text-2xl font-bold text-slate-900">{c}</h2>
            <div className="mt-3 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
              <table className="w-full text-sm">
                <thead className="bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Procedure</th>
                    <th className="px-4 py-3">Unit</th>
                    <th className="px-4 py-3 text-right">Cash price</th>
                    <th className="px-4 py-3 text-right">With insurance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {byCategory(c).map((p) => (
                    <tr key={p.slug} className="hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <Link href={`/cost/${p.slug}`} className="font-semibold text-teal-700 hover:underline">{p.name}</Link>
                      </td>
                      <td className="px-4 py-3 text-slate-500">{p.unit}</td>
                      <td className="px-4 py-3 text-right text-slate-700">{moneyFull(p.low)}–{moneyFull(p.high)}</td>
                      <td className="px-4 py-3 text-right text-slate-700">
                        {p.insLow != null ? `${moneyFull(p.insLow)}–${moneyFull(p.insHigh!)}` : <span className="text-slate-400">rarely covered</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
      </div>

      <p className="mt-10 text-xs text-slate-400">
        Ranges are US national ballparks compiled from public fee data and vary widely by location and provider.
        With-insurance figures are typical out-of-pocket estimates on a PPO plan, not guarantees. Nothing here is
        dental advice.
      </p>
    </div>
  );
}
