import Link from "next/link";
import CostEstimator from "@/components/CostEstimator";
import JsonLd from "@/components/JsonLd";
import { procedures, categories, byCategory, moneyFull } from "@/lib/data/procedures";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Dental cost estimator",
  description: site.description,
  path: "/",
});

const popular = ["dental-implants", "root-canal", "dental-crown", "wisdom-teeth-removal", "tooth-extraction", "dentures"];

export default function Home() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: site.name,
          url: site.url,
          description: site.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${site.url}/cost?q={query}`,
            "query-input": "required name=query",
          },
        }}
      />

      <section className="text-center">
        <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-teal-700 ring-1 ring-teal-200">
          US dental prices · updated 2026
        </span>
        <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          What does dental work <span className="text-teal-600">actually cost?</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Pick a procedure and see the real US price range — with and without insurance — before you're in the
          chair. No sign-up, no quote form.
        </p>
      </section>

      <div className="mx-auto mt-8 max-w-2xl">
        <CostEstimator />
      </div>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-slate-900">Most-searched costs</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {popular.map((slug) => {
            const p = procedures.find((x) => x.slug === slug)!;
            return (
              <Link
                key={slug}
                href={`/cost/${p.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-4 shadow-card transition-colors hover:border-teal-400"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-teal-600">{p.category}</div>
                <div className="mt-1 font-display text-lg font-bold text-slate-900 group-hover:text-teal-700">{p.name}</div>
                <div className="mt-1 text-sm text-slate-500">
                  {moneyFull(p.low)}–{moneyFull(p.high)} <span className="text-slate-400">· {p.unit}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold text-slate-900">Browse by type</h2>
        <div className="mt-4 space-y-6">
          {categories.map((c) => (
            <div key={c}>
              <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">{c}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {byCategory(c).map((p) => (
                  <Link
                    key={p.slug}
                    href={`/cost/${p.slug}`}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-teal-400 hover:text-teal-700"
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          { href: "/emergency-dentist", h: "Dental emergency?", p: "What counts as one, what to do now, and what an emergency visit costs." },
          { href: "/dental-work-with-no-insurance", h: "No insurance?", p: "Discount plans, dental schools, payment plans and other ways to pay less." },
          { href: "/wisdom-teeth-removal", h: "Wisdom teeth", p: "Cost, recovery and the common questions — in plain English." },
        ].map((x) => (
          <Link key={x.href} href={x.href} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-card hover:border-teal-400">
            <div className="font-display text-lg font-bold text-slate-900">{x.h}</div>
            <p className="mt-1 text-sm text-slate-600">{x.p}</p>
            <span className="mt-3 inline-block text-sm font-semibold text-teal-600">Read more →</span>
          </Link>
        ))}
      </section>

      <p className="mx-auto mt-14 max-w-2xl text-center text-xs text-slate-400">
        ToothTab publishes general cost information for the United States to help you budget and ask better
        questions. It is not dental advice and not a quote — your actual price depends on your dentist, location,
        materials and insurance.
      </p>
    </div>
  );
}
