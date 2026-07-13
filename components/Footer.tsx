import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 text-sm text-slate-500">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <div className="font-display text-base font-bold text-slate-900">
              DentalCost<span className="text-teal-600">Tab</span>
            </div>
            <p className="mt-2">{site.tagline}. Independent, plain-English cost information — so you can budget before you're in the chair.</p>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="mb-2 font-semibold text-slate-800">Popular costs</div>
              <ul className="space-y-1">
                <li><Link href="/cost/dental-implants" className="hover:text-teal-600">Dental implants</Link></li>
                <li><Link href="/cost/root-canal" className="hover:text-teal-600">Root canal</Link></li>
                <li><Link href="/cost/dental-crown" className="hover:text-teal-600">Crowns</Link></li>
                <li><Link href="/wisdom-teeth-removal" className="hover:text-teal-600">Wisdom teeth</Link></li>
                <li><Link href="/cost" className="hover:text-teal-600">All procedures →</Link></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 font-semibold text-slate-800">Site</div>
              <ul className="space-y-1">
                <li><Link href="/emergency-dentist" className="hover:text-teal-600">Emergency dentist</Link></li>
                <li><Link href="/dental-work-abroad" className="hover:text-teal-600">Dental work abroad</Link></li>
                <li><Link href="/dental-work-with-no-insurance" className="hover:text-teal-600">No insurance</Link></li>
                <li><Link href="/about" className="hover:text-teal-600">About</Link></li>
                <li><Link href="/privacy" className="hover:text-teal-600">Privacy</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-3 text-xs text-slate-400">
          Part of the CostTab family: <a href="https://homecosttab.com" rel="noopener" className="hover:text-teal-600">HomeCostTab</a> · <a href="https://cosmeticcosttab.com" rel="noopener" className="hover:text-teal-600">CosmeticCostTab</a>
        </p>
        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} {site.name}. Costs shown are general US estimates compiled from public
          fee data and vary by location, dentist and materials — they are not quotes. Nothing on this site is
          medical or dental advice; always consult a licensed dentist about your own care. Some outbound links
          may earn us a commission at no cost to you.
        </p>
      </div>
    </footer>
  );
}
