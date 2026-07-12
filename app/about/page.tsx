import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About DentalCostTab",
  description: "Why DentalCostTab exists and how we put our dental cost estimates together.",
  path: "/about",
});

export default function About() {
  return (
    <div className="mx-auto max-w-2xl prose-tab">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">About {site.name}</h1>
      <p>
        Dental prices are famously opaque. Most people have no idea whether a quote is fair, what a procedure costs a
        few miles away, or how much insurance will really knock off — until they're already in the chair. {site.name}{" "}
        exists to fix that: a simple, honest estimate of what dental work costs in the US, before you commit.
      </p>
      <h2>Where our numbers come from</h2>
      <p>
        Our ranges are compiled from publicly available dental fee surveys, dental-school and clinic fee schedules,
        and insurer cost estimators, then sanity-checked against what real patients report paying. They're national
        ballparks, not quotes — dental prices vary a lot by city, individual dentist, materials and your specific
        plan. Always confirm the real price with a dental office.
      </p>
      <h2>How we stay free</h2>
      <p>
        {site.name} is free to use. We keep the lights on through advertising and through commissions when readers
        choose services we link to — for example dental-savings plans, financing or appointment booking. That never
        changes the prices you'd pay, and it never changes what we tell you. See our{" "}
        <a href="/affiliate-disclosure">affiliate disclosure</a>.
      </p>
      <h2>Not dental advice</h2>
      <p>
        We publish cost and general information to help you budget and ask better questions. We are not dentists, and
        nothing here is medical or dental advice or a diagnosis. For anything about your own teeth and treatment, talk
        to a licensed dentist.
      </p>
    </div>
  );
}
