import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import CostEstimator from "@/components/CostEstimator";
import PartnerCta from "@/components/PartnerCta";
import { bySlug, moneyFull } from "@/lib/data/procedures";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Wisdom teeth removal: cost, recovery & FAQ",
  description:
    "Everything people ask about wisdom teeth removal — what it costs (simple vs impacted, with and without insurance), how long recovery takes, dry socket, and how to know if you need them out.",
  path: "/wisdom-teeth-removal",
});

const faqs = [
  { q: "How much does wisdom teeth removal cost?", a: "A single erupted wisdom tooth runs about $75–$250; an impacted one $250–$800. All four together typically cost $1,000–$3,000, or up to $4,000 with IV or general sedation. See our full wisdom teeth cost breakdown for the details." },
  { q: "Does insurance cover wisdom teeth removal?", a: "Dental insurance usually covers part of it, especially for impacted teeth, which count as a surgical procedure. But annual maximums (often $1,000–$1,500) mean you may still pay $150–$1,500 out of pocket, particularly for all four with sedation." },
  { q: "How long is recovery after wisdom teeth removal?", a: "Most people feel much better after 3–4 days and are back to normal within a week or two. Swelling peaks around day 2–3. Full healing of the sockets takes several weeks. Everyone is different — follow your surgeon's aftercare instructions." },
  { q: "What is dry socket?", a: "Dry socket is when the blood clot that should protect the healing socket is dislodged too early, exposing bone and causing sharp pain a few days after surgery. It's a common reason people call back. Not smoking, avoiding straws, and following aftercare lowers the risk. If you think you have it, call your dentist." },
  { q: "Do I actually need my wisdom teeth removed?", a: "Not always. Dentists typically recommend removal when wisdom teeth are impacted, causing pain, crowding, decay or gum problems, or are hard to keep clean. Some people keep healthy, well-positioned wisdom teeth for life. Only a dentist who has examined you and your X-rays can say — this page is general information, not advice." },
  { q: "Is wisdom teeth removal painful?", a: "The extraction itself is done under local anesthetic (numbing) or sedation, so you shouldn't feel pain during it. Afterwards there's soreness and swelling for a few days, usually managed with over-the-counter or prescribed pain relief." },
  { q: "Should I be put to sleep for it?", a: "It depends on how many teeth, how impacted they are, and your comfort. Simple cases are often done awake with local anesthetic; more complex or multiple extractions frequently use IV sedation or general anesthetic — which adds $250–$900 to the cost. Discuss the options with your oral surgeon." },
  { q: "What can I eat after wisdom teeth removal?", a: "Stick to soft, cool foods for the first day or two — yogurt, smoothies (spoon, not straw), mashed potato, soup that isn't too hot, scrambled eggs. Avoid crunchy, spicy or very hot foods and don't use a straw, as suction can dislodge the clot." },
];

export default function WisdomTeeth() {
  const p = bySlug("wisdom-teeth-removal")!;
  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="text-xs font-bold uppercase tracking-wide text-teal-600">Extractions &amp; surgery</div>
      <h1 className="mt-1 font-display text-4xl font-extrabold text-slate-900">Wisdom teeth removal</h1>
      <p className="mt-4 text-lg text-slate-600">
        The plain-English guide to what wisdom teeth removal costs, how recovery goes, and the questions everyone
        asks before the appointment. This is general information to help you plan — not dental advice.
      </p>

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {[
          ["One tooth", `${moneyFull(75)}–${moneyFull(800)}`],
          ["All four", `${moneyFull(1000)}–${moneyFull(4000)}`],
          ["Recovery", "3–7 days"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-card">
            <div className="text-xs uppercase tracking-wide text-slate-500">{k}</div>
            <div className="mt-1 font-display text-lg font-bold text-slate-900">{v}</div>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <Link href="/cost/wisdom-teeth-removal" className="text-sm font-semibold text-teal-600 hover:underline">
          → Full wisdom teeth cost breakdown (impacted, sedation, with insurance)
        </Link>
      </div>

      <PartnerCta kind="findDentist" />

      <section className="prose-tab mt-4">
        <h2>What drives the cost</h2>
        <p>
          Two things move the price more than anything else: whether the tooth is <strong>erupted</strong> (through
          the gum, a simple extraction) or <strong>impacted</strong> (still in the bone, a surgical extraction), and
          what kind of <strong>sedation</strong> you have. Local anesthetic is included in the price; IV or general
          sedation is billed separately and is a big reason four impacted teeth can approach $4,000.
        </p>
        <p>
          Removing all four at once is usually more cost-effective than four separate visits, and it means a single
          recovery period.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="font-display text-2xl font-bold text-slate-900">Calculate your cost</h2>
        <div className="mt-4"><CostEstimator initialSlug="wisdom-teeth-removal" /></div>
      </section>

      <section className="prose-tab mt-10">
        <h2>Wisdom teeth removal — FAQ</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <PartnerCta kind="discountPlan" />

      <p className="mt-8 rounded-xl bg-slate-100 p-4 text-sm text-slate-600">
        <strong>Important:</strong> This page is general cost and recovery information, not medical or dental advice,
        and doesn't replace an exam. Whether you need your wisdom teeth removed — and how — is a decision for a
        licensed dentist or oral surgeon who has seen your X-rays. If you have severe pain, swelling that affects
        breathing or swallowing, or a high fever, seek urgent care.
      </p>
    </div>
  );
}
