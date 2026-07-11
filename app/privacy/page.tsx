import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Privacy policy",
  description: "How ToothTab handles data and analytics.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <div className="mx-auto max-w-2xl prose-tab">
      <h1 className="font-display text-4xl font-extrabold text-slate-900">Privacy policy</h1>
      <p>Last updated: 2026. {site.name} respects your privacy and collects as little as possible.</p>
      <h2>Analytics</h2>
      <p>
        We use privacy-friendly, cookieless analytics to understand which pages are useful — measured in aggregate.
        We don't set advertising cookies of our own, we don't ask you to log in, and we don't sell personal data.
      </p>
      <h2>The cost estimator</h2>
      <p>
        The estimator runs entirely in your browser. The procedure and insurance options you pick are not sent to us
        or stored — there's no form to submit and no personal information required to use it.
      </p>
      <h2>Advertising & affiliate links</h2>
      <p>
        Pages may contain advertising and affiliate links. If we run display ads, the ad provider may use cookies as
        described in its own policy. If you click an affiliate or advertiser link, that third party's privacy policy
        applies once you leave {site.name}.
      </p>
      <h2>Contact</h2>
      <p>Questions about privacy? Reach us through the details on our <a href="/about">about page</a>.</p>
    </div>
  );
}
