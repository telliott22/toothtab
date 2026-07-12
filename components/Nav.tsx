import Link from "next/link";
import { site } from "@/lib/site";

function ToothMark() {
  return (
    <span className="grid h-7 w-7 place-items-center rounded-lg bg-teal-600 text-white shadow-sm" aria-hidden>
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M12 2.5c-2 0-3 .9-4.6.9C5.2 3.4 3.5 4.9 3.5 8c0 2.2.7 4.2 1.3 6.6.4 1.6.6 3.4 1 4.9.3 1.1.9 2 1.7 2 1.1 0 1.3-1.3 1.6-2.8.3-1.6.6-3.2 1.4-3.2s1.1 1.6 1.4 3.2c.3 1.5.5 2.8 1.6 2.8.8 0 1.4-.9 1.7-2 .4-1.5.6-3.3 1-4.9.6-2.4 1.3-4.4 1.3-6.6 0-3.1-1.7-4.6-3.9-4.6-1.6 0-2.6-.9-4.6-.9Z" />
      </svg>
    </span>
  );
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={site.name}>
          <ToothMark />
          <span className="font-display text-lg font-bold tracking-tight text-slate-900">
            DentalCost<span className="text-teal-600">Tab</span>
          </span>
        </Link>
        <nav className="flex items-center gap-0.5 text-sm sm:gap-3">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-2 py-1 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
