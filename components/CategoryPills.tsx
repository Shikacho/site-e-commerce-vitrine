"use client";

import Link from "next/link";

type Cat = { slug: string; label: string };

export function CategoryPills({ categories, to = "/shop" }: { categories: Cat[]; to?: string }) {
  const base =
    "px-3 py-1.5 rounded-full text-sm transition outline-none " +
    "border border-slate-300 bg-transparent text-slate-800 " +
    "hover:bg-indigo-50 hover:text-indigo-700 " +
    "focus-visible:ring-2 focus-visible:ring-indigo-400/40";

  return (
    <div className="flex flex-wrap gap-2">
      <Link href={to} className={base}>Tout</Link>
      {categories.map((c) => (
        <Link key={c.slug} href={`${to}?category=${encodeURIComponent(c.slug)}`} className={base}>
          {c.label}
        </Link>
      ))}
    </div>
  );
}
