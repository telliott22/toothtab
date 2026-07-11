// Client-side init (Next.js runs this at startup). Cookieless, EU-hosted PostHog.
// No-ops until a real NEXT_PUBLIC_POSTHOG_KEY is set in .env.production, so builds never break.
import posthog from "posthog-js";

const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://eu.i.posthog.com";

if (key && key.startsWith("phc_")) {
  posthog.init(key, {
    api_host: host,
    person_profiles: "identified_only",
    persistence: "memory", // cookieless — no consent banner needed
    capture_pageview: true,
    capture_pageleave: true,
    autocapture: true,
  });
}
