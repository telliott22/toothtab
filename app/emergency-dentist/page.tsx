import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import PartnerCta from "@/components/PartnerCta";
import { moneyFull } from "@/lib/data/procedures";
import { pageMeta, faqJsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Emergency dentist: what to do now & what it costs",
  description:
    "Think you have a dental emergency? What counts as one, what to do right now for a knocked-out tooth, abscess or severe pain, what an emergency dental visit costs, and how to find an emergency or 24-hour dentist near you.",
  path: "/emergency-dentist",
});

const faqs = [
  { q: "What counts as a dental emergency?", a: "Common dental emergencies include a knocked-out or badly broken tooth, uncontrolled bleeding, severe or worsening toothache, a swollen face or gum (possible abscess/infection), and injuries to the mouth. Anything with spreading swelling, difficulty breathing or swallowing, or a high fever is urgent — go to an emergency room or call 911." },
  { q: "How much does an emergency dentist cost?", a: "An emergency exam (often with an X-ray) usually runs $100–$300 just to be seen. The treatment is extra and depends on the problem — a simple extraction from $75, a root canal $700–$1,800, and so on. After-hours or weekend visits can carry an added fee." },
  { q: "What should I do if my tooth gets knocked out?", a: "Handle it by the crown (the white part), not the root. If it's dirty, rinse gently with milk or saline — don't scrub. Try to place it back in the socket; if you can't, keep it in milk or between your cheek and gum, and get to a dentist as fast as possible. A tooth reimplanted within an hour has the best chance. This is general information — seek professional care immediately." },
  { q: "How do I find an emergency dentist near me?", a: "Search for dentists offering same-day or emergency appointments and call ahead to confirm they can see you and take your insurance. Many practices keep slots for emergencies. Booking marketplaces let you filter for same-day availability. For life-threatening swelling, bleeding or trauma, go to an ER instead." },
  { q: "Can I go to the ER for a toothache?", a: "An emergency room can help with severe swelling, infection, trauma and pain relief, but hospitals usually can't do dental treatment like fillings, extractions or root canals — they'll stabilise you and refer you to a dentist. For the actual fix, you'll still need a dentist. If there's facial swelling affecting breathing or swallowing, the ER is the right place." },
  { q: "What can I do for tooth pain until I'm seen?", a: "Over-the-counter pain relievers used as directed, a cold compress on the outside of the cheek, and rinsing with warm salt water can ease symptoms temporarily. These don't treat the cause — they just buy time until a dentist can see you. If pain is severe or you have swelling or fever, don't wait." },
];

export default function Emergency() {
  return (
    <div className="mx-auto max-w-3xl">
      <JsonLd data={faqJsonLd(faqs)} />

      <div className="rounded-2xl border border-amber-300 bg-amber-50 p-5">
        <div className="font-display text-lg font-bold text-amber-900">If this is life-threatening, don't wait</div>
        <p className="mt-1 text-sm text-amber-800">
          Swelling that affects breathing or swallowing, uncontrolled bleeding, or a serious facial injury need an
          emergency room or <strong>911</strong> — not a dental office.
        </p>
      </div>

      <h1 className="mt-6 font-display text-4xl font-extrabold text-slate-900">Emergency dentist</h1>
      <p className="mt-4 text-lg text-slate-600">
        What counts as a dental emergency, what to do in the first few minutes, what it costs to be seen, and how to
        find same-day help. General information to help you act — not a substitute for professional care.
      </p>

      <PartnerCta kind="findDentist" />

      <section className="prose-tab mt-4">
        <h2>Is it actually an emergency?</h2>
        <p>Get seen the same day for:</p>
        <ul>
          <li>A knocked-out or badly broken tooth</li>
          <li>Severe, throbbing toothache that won't ease</li>
          <li>A swollen face, jaw or gum — a possible abscess or infection</li>
          <li>Bleeding that won't stop</li>
          <li>A lost filling or crown causing sharp pain</li>
        </ul>
        <p>
          Swelling spreading to your eye or neck, trouble breathing or swallowing, or a high fever means an infection
          may be spreading — treat that as a medical emergency and go to the ER.
        </p>

        <h2>What an emergency visit costs</h2>
        <p>
          Just being seen — an emergency exam, usually with an X-ray — typically costs <strong>{moneyFull(100)}–{moneyFull(300)}</strong>.
          The treatment is separate and depends on what's wrong:
        </p>
        <ul>
          <li><Link href="/cost/tooth-extraction">Tooth extraction</Link> — from {moneyFull(75)}</li>
          <li><Link href="/cost/root-canal">Root canal</Link> — {moneyFull(700)}–{moneyFull(1800)}</li>
          <li><Link href="/cost/dental-crown">Crown</Link> to rebuild a broken tooth — {moneyFull(800)}–{moneyFull(2500)}</li>
        </ul>
        <p>After-hours, weekend and holiday visits sometimes add a fee. If you have no insurance, see our guide below.</p>
      </section>

      <PartnerCta kind="discountPlan" />

      <section className="prose-tab mt-4">
        <h2>Emergency dentist — FAQ</h2>
        {faqs.map((f) => (
          <div key={f.q}>
            <h3>{f.q}</h3>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/dental-work-with-no-insurance" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">Paying with no insurance →</Link>
        <Link href="/cost" className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-teal-500">Full cost estimator →</Link>
      </div>

      <p className="mt-8 text-xs text-slate-400">
        DentalCostTab provides general information, not medical or dental advice, and cannot diagnose or treat you. In an
        emergency, contact a dentist, an emergency room, or 911.
      </p>
    </div>
  );
}
