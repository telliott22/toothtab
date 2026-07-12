import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Affiliate disclosure",
  description: "How DentalCostTab earns money and how that affects what you read.",
  path: "/affiliate-disclosure",
});

export default function Disclosure() {
  return (
    <div className="mx-auto max-w-2xl prose-tab">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Affiliate disclosure</h1>
      <p>
        {site.name} is free for readers. To support the site, we show advertising and we participate in affiliate and
        referral programs. This means some outbound links — for example to dental-savings plans, financing providers
        or appointment-booking services — may earn us a commission if you sign up or make a purchase, at no extra cost
        to you.
      </p>
      <p>
        We label advertiser links, and mark them with <code>rel="sponsored nofollow"</code>. Earning a commission
        never changes the cost estimates or information we publish, and we don't let a partner relationship dictate
        what we recommend.
      </p>
      <p>
        Cost figures on this site are general US estimates for information only. They are not quotes, offers, or
        dental advice.
      </p>
    </div>
  );
}
