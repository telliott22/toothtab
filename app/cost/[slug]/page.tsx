import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CostEstimator from "@/components/CostEstimator";
import PartnerCta from "@/components/PartnerCta";
import { procedures, bySlug, moneyFull } from "@/lib/data/procedures";
import { pageMeta, faqJsonLd, serviceCostJsonLd } from "@/lib/seo";

export const revalidate = 86400;
export function generateStaticParams() {
  return procedures.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) return {};
  return pageMeta({
    title: `How much does ${p.name.toLowerCase()} cost? (${moneyFull(p.low)}–${moneyFull(p.high)})`,
    description: `${p.name} costs about ${moneyFull(p.low)}–${moneyFull(p.high)} ${p.unit} in the US${p.insLow != null ? `, or ${moneyFull(p.insLow)}–${moneyFull(p.insHigh!)} with insurance` : ""}. ${p.summary.slice(0, 90)}…`,
    path: `/cost/${p.slug}`,
  });
}

// big-ticket procedures get a financing CTA; the rest get "find a dentist"
const FINANCE = new Set(["dental-implants", "full-mouth-implants", "braces", "invisalign", "veneers", "dentures", "dental-bridge"]);

export default async function ProcedureCost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = bySlug(slug);
  if (!p) notFound();

  const covered = p.insLow != null && p.insHigh != null;
  const rows: [string, string][] = [
    ["Cash / self-pay", `${moneyFull(p.low)} – ${moneyFull(p.high)}`],
    ["Typical", moneyFull(p.avg)],
    ["With dental insurance", covered ? `${moneyFull(p.insLow!)} – ${moneyFull(p.insHigh!)} out of pocket` : "Usually not covered (cosmetic/elective)"],
    ["Priced", p.unit],
  ];

  return (
    <article className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(p.faqs)} />
      <JsonLd data={serviceCostJsonLd(p.name, p.low, p.high, `/cost/${p.slug}`)} />

      <nav className="text-sm text-slate-500">
        <Link href="/cost" className="hover:text-teal-600">← All dental costs</Link>
      </nav>

      <div className="mt-3 text-xs font-bold uppercase tracking-wide text-teal-600">{p.category}</div>
      <h1 className="mt-1 font-display text-4xl font-extrabold text-slate-900">
        How much does {p.name.toLowerCase()} cost?
      </h1>
      <p className="mt-4 text-lg text-slate-600">{p.summary}</p>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card">
        <table className="w-full text-sm">
          <tbody className="divide-y divide-slate-100">
            {rows.map(([k, v]) => (
              <tr key={k}>
                <td className="px-4 py-3 font-medium text-slate-500">{k}</td>
                <td className="px-4 py-3 text-right font-semibold text-slate-900">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="prose-tab mt-8">
        <h2>What changes the price of {p.name.toLowerCase()}</h2>
        <ul>{p.affects.map((a) => (<li key={a}>{a}</li>))}</ul>
      </div>

      <PartnerCta kind={FINANCE.has(p.slug) ? "financing" : "findDentist"} />

      <section className="mt-6">
        <h2 className="font-display text-2xl font-bold text-slate-900">Estimate your cost</h2>
        <p className="mt-1 text-slate-600">Adjust for insurance and compare with other procedures.</p>
        <div className="mt-4"><CostEstimator initialSlug={p.slug} /></div>
      </section>

      <section className="prose-tab mt-10">
        <h2>{p.name} — frequently asked questions</h2>
        {p.faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {p.category === "Implants & replacement" || p.category === "Cosmetic" ? null : (
        <PartnerCta kind="discountPlan" />
      )}

      <section className="mt-10">
        <h2 className="font-display text-xl font-bold text-slate-900">Related costs</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.related.map((r) => {
            const rp = bySlug(r);
            if (!rp) return null;
            return (
              <Link key={r} href={`/cost/${rp.slug}`} className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-400 hover:text-teal-700">
                {rp.name} · {moneyFull(rp.low)}–{moneyFull(rp.high)}
              </Link>
            );
          })}
        </div>
      </section>

      <p className="mt-10 text-xs text-slate-400">
        This is general US cost information, not a quote and not dental advice. Actual prices depend on your
        dentist, location, materials and insurance plan — always confirm directly with a dental office.
      </p>
    </article>
  );
}
