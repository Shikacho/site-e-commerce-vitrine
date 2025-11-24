"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

type Cat = { slug: string; label: string };

export function CategoryPills({ categories, to = "/shop" }: { categories: Cat[]; to?: string }) {
  const sp = useSearchParams();

  const urlWith = (slug?: string) => {
    const params = new URLSearchParams(sp.toString());
    if (!slug) params.delete("category"); else params.set("category", slug);
    const qs = params.toString();
    return `${to}${qs ? `?${qs}` : ""}`;
  };

  const base =
    "px-3 py-1.5 rounded-full text-sm transition outline-none " +
    "border border-slate-300 bg-transparent text-slate-800 " +
    "hover:bg-indigo-50 hover:text-indigo-700 " +
    "focus-visible:ring-2 focus-visible:ring-indigo-400/40";

  return (
    <div className="flex flex-wrap gap-2">
      <Link href={urlWith(undefined)} className={base}>
        Tout
      </Link>
      {categories.map((c) => (
        <Link key={c.slug} href={urlWith(c.slug)} className={base}>
          {c.label}
        </Link>
      ))}
    </div>
  );
}