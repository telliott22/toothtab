"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { procedures, categories, moneyFull, type Procedure } from "@/lib/data/procedures";

type Coverage = "none" | "insured";

function Bar({ low, avg, high }: { low: number; avg: number; high: number }) {
  // position the average within the low–high range
  const pct = high > low ? Math.round(((avg - low) / (high - low)) * 100) : 50;
  return (
    <div className="mt-2">
      <div className="relative h-3 rounded-full bg-gradient-to-r from-teal-200 via-teal-400 to-cost-high/70">
        <div
          className="absolute -top-1 h-5 w-1.5 -translate-x-1/2 rounded-full bg-slate-900 shadow"
          style={{ left: `${pct}%` }}
          aria-hidden
        />
      </div>
      <div className="mt-1 flex justify-between text-xs text-slate-500">
        <span>Low {moneyFull(low)}</span>
        <span className="font-semibold text-slate-700">Typical {moneyFull(avg)}</span>
        <span>High {moneyFull(high)}</span>
      </div>
    </div>
  );
}

export default function CostEstimator({ initialSlug }: { initialSlug?: string }) {
  const [slug, setSlug] = useState(initialSlug ?? procedures[0].slug);
  const [coverage, setCoverage] = useState<Coverage>("none");

  const p = useMemo<Procedure>(
    () => procedures.find((x) => x.slug === slug) ?? procedures[0],
    [slug],
  );

  const insured = coverage === "insured";
  const covered = p.insLow != null && p.insHigh != null;
  const [low, high] = insured && covered ? [p.insLow!, p.insHigh!] : [p.low, p.high];
  const avg = insured && covered ? Math.round((p.insLow! + p.insHigh!) / 2) : p.avg;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-glow sm:p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-slate-800">Procedure</span>
          <select
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full rounded-lg border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-800 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-200"
          >
            {categories.map((c) => (
              <optgroup key={c} label={c}>
                {procedures.filter((x) => x.category === c).map((x) => (
                  <option key={x.slug} value={x.slug}>{x.name} ({x.unit})</option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>

        <div className="block">
          <span className="text-sm font-semibold text-slate-800">Do you have dental insurance?</span>
          <div className="mt-1 grid grid-cols-2 gap-2">
            {(["none", "insured"] as Coverage[]).map((c) => {
              const active = coverage === c;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCoverage(c)}
                  aria-pressed={active}
                  className={`rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors ${
                    active
                      ? "border-teal-500 bg-teal-50 text-teal-700"
                      : "border-slate-300 bg-slate-50 text-slate-600 hover:border-teal-400"
                  }`}
                >
                  {c === "none" ? "No / paying cash" : "Yes, PPO plan"}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-5 ring-1 ring-slate-200" aria-live="polite">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <div className="text-xs font-bold uppercase tracking-wide text-teal-600">
              Estimated cost · {p.unit}
            </div>
            <div className="mt-1 font-display text-3xl font-extrabold text-slate-900">
              {moneyFull(low)}<span className="text-slate-400"> – </span>{moneyFull(high)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500">Typical</div>
            <div className="font-display text-xl font-bold text-teal-600">{moneyFull(avg)}</div>
          </div>
        </div>

        <Bar low={low} avg={avg} high={high} />

        {insured && !covered && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800 ring-1 ring-amber-200">
            {p.name} is usually considered cosmetic or elective, so most dental plans don't cover it — the cash range is shown.
          </p>
        )}
        {insured && covered && (
          <p className="mt-3 text-xs text-slate-500">
            Out-of-pocket estimate with a typical PPO plan after coverage. Your real cost depends on your deductible,
            coverage percentage and annual maximum.
          </p>
        )}

        <div className="mt-4">
          <div className="text-sm font-semibold text-slate-800">What changes the price</div>
          <ul className="mt-2 space-y-1.5 text-sm text-slate-600">
            {p.affects.map((a) => (
              <li key={a} className="flex gap-2"><span className="font-bold text-teal-500">›</span>{a}</li>
            ))}
          </ul>
        </div>

        <div className="mt-5 flex flex-wrap gap-3 text-sm">
          <Link href={`/cost/${p.slug}`} className="rounded-lg bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700">
            Full {p.name.toLowerCase()} cost guide →
          </Link>
          <Link href="/dental-work-with-no-insurance" className="rounded-lg border border-slate-300 px-4 py-2 font-semibold text-slate-700 hover:border-teal-500">
            Paying with no insurance
          </Link>
        </div>
      </div>

      <p className="mt-3 text-xs text-slate-400">
        National ballpark ranges for the US. Not a quote and not dental advice — always confirm with a dentist.
      </p>
    </div>
  );
}
