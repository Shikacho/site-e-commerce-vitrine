"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { categories, formats, techniques, orientations, supports, colors } from "@/lib/data";
function useQuery(){ const sp=useSearchParams(); return useMemo(()=>Object.fromEntries(sp.entries()),[sp]); }
export function FilterBar({ category }: { category?: string }) {
  const router=useRouter(); const pathname=usePathname(); const query=useQuery();
  function setParam(key:string, value:string){ const params=new URLSearchParams(query as any); if(!value) params.delete(key); else params.set(key,value); router.push(`${pathname}?${params.toString()}`); }
  return (<aside className="card p-4 h-fit sticky top-24 bg-white">
    <h3 className="font-semibold mb-3">Filtres</h3>
    {!category && (<div className="mb-4"><label className="text-sm text-gray-600">Catégorie</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).category ?? ""} onChange={e=>setParam("category", e.target.value)}>
        <option value="">Toutes</option>{categories.map(c=> <option key={c.slug} value={c.slug}>{c.label}</option>)}
      </select></div>)}
    <div className="mb-4"><label className="text-sm text-gray-600">Format</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).format ?? ""} onChange={e=>setParam("format", e.target.value)}>
        <option value="">Tous</option>{formats.map(s=> <option key={s} value={s}>{s}</option>)}
      </select></div>
    <div className="mb-4"><label className="text-sm text-gray-600">Technique</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).technique ?? ""} onChange={e=>setParam("technique", e.target.value)}>
        <option value="">Toutes</option>{techniques.map(m=> <option key={m} value={m}>{m}</option>)}
      </select></div>
    <div className="mb-4"><label className="text-sm text-gray-600">Orientation</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).orientation ?? ""} onChange={e=>setParam("orientation", e.target.value)}>
        <option value="">Toutes</option>{orientations.map(o=> <option key={o} value={o}>{o}</option>)}
      </select></div>
    <div className="mb-4"><label className="text-sm text-gray-600">Support</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).support ?? ""} onChange={e=>setParam("support", e.target.value)}>
        <option value="">Tous</option>{supports.map(s=> <option key={s} value={s}>{s}</option>)}
      </select></div>
    <div className="mb-4"><label className="text-sm text-gray-600">Couleur dominante</label>
      <select className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).dominantColor ?? ""} onChange={e=>setParam("dominantColor", e.target.value)}>
        <option value="">Toutes</option>{colors.map(c=> <option key={c} value={c}>{c}</option>)}
      </select></div>
    <div className="grid grid-cols-2 gap-3">
      <div><label className="text-sm text-gray-600">Prix min</label>
        <input type="number" min={0} className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).min ?? ""} onChange={e=>setParam("min", e.target.value)}/>
      </div>
      <div><label className="text-sm text-gray-600">Prix max</label>
        <input type="number" min={0} className="mt-1 w-full rounded-xl border-gray-300" value={(query as any).max ?? ""} onChange={e=>setParam("max", e.target.value)}/>
      </div>
    </div>
  </aside>);
}
