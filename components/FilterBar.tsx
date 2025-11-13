"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { categories, formats, techniques, orientations, supports, colors } from "@/lib/data";

function useQuery() {
  const sp = useSearchParams();
  return useMemo(() => Object.fromEntries(sp.entries()), [sp]);
}

function getNum(v: string | undefined, fallback: number) {
  const n = Number(v);
  return Number.isFinite(n) ? n : fallback;
}

const PRICE_MIN = 0;
const PRICE_MAX = 250;
const STEP = 1;

export function FilterBar({ category }: { category?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const query = useQuery();

  // --- local state pour le double slider de prix
  const [minPrice, setMinPrice] = useState(() => getNum(query.min as any, PRICE_MIN));
  const [maxPrice, setMaxPrice] = useState(() => getNum(query.max as any, PRICE_MAX));

  // sync quand on change d’URL (back/forward)
  useEffect(() => {
    setMinPrice(getNum(query.min as any, PRICE_MIN));
    setMaxPrice(getNum(query.max as any, PRICE_MAX));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query.min, query.max]);

  // util pour (dé)finir des params dans l’URL
  function pushParams(next: Record<string, string | undefined>) {
    const params = new URLSearchParams(query as any);
    Object.entries(next).forEach(([k, v]) => {
      if (!v) params.delete(k);
      else params.set(k, v);
    });
    const qs = params.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname);
  }

  function setParam(key: string, value: string) {
    pushParams({ [key]: value || undefined });
  }

  // appliquer min/max dans l’URL
  function applyPrice(pMin = minPrice, pMax = maxPrice) {
    const next: Record<string, string | undefined> = {};
    next.min = pMin <= PRICE_MIN ? undefined : String(pMin);
    next.max = pMax >= PRICE_MAX ? undefined : String(pMax);
    pushParams(next);
  }

  // garde le curseur gauche sous le droit
  function onMinChange(v: number) {
    setMinPrice(Math.min(v, maxPrice - STEP));
  }
  function onMaxChange(v: number) {
    setMaxPrice(Math.max(v, minPrice + STEP));
  }

  // presets rapides
  const presets = [
    { label: "Tous", min: PRICE_MIN, max: PRICE_MAX },
    { label: "< 100 €", min: PRICE_MIN, max: 100 },
    { label: "100–150 €", min: 100, max: 150 },
    { label: "> 150 €", min: 150, max: PRICE_MAX },
  ];

  // style de la piste (visuel du range) — pur Tailwind inline
  const trackStyle =
    "pointer-events-none absolute h-1 rounded-full top-1/2 -translate-y-1/2 bg-slate-200";
  const fillStyle =
    "pointer-events-none absolute h-1 rounded-full top-1/2 -translate-y-1/2 bg-slate-900";

  // % pour la partie remplie
  const leftPct = ((minPrice - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100;
  const rightPct = ((PRICE_MAX - maxPrice) / (PRICE_MAX - PRICE_MIN)) * 100;

  return (
    <aside className="card p-4 h-fit sticky top-24 bg-white">
      <h3 className="font-semibold mb-3">Filtres</h3>

      {!category && (
        <div className="mb-4">
          <label className="text-sm text-gray-600">Catégorie</label>
          <select
            className="input mt-1"
            value={(query as any).category ?? ""}
            onChange={(e) => setParam("category", e.target.value)}
          >
            <option value="">Toutes</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mb-4">
        <label className="text-sm text-gray-600">Format</label>
        <select
          className="input mt-1"
          value={(query as any).format ?? ""}
          onChange={(e) => setParam("format", e.target.value)}
        >
          <option value="">Tous</option>
          {formats.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Technique</label>
        <select
          className="input mt-1"
          value={(query as any).technique ?? ""}
          onChange={(e) => setParam("technique", e.target.value)}
        >
          <option value="">Toutes</option>
          {techniques.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Orientation</label>
        <select
          className="input mt-1"
          value={(query as any).orientation ?? ""}
          onChange={(e) => setParam("orientation", e.target.value)}
        >
          <option value="">Toutes</option>
          {orientations.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Support</label>
        <select
          className="input mt-1"
          value={(query as any).support ?? ""}
          onChange={(e) => setParam("support", e.target.value)}
        >
          <option value="">Tous</option>
          {supports.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Couleur dominante</label>
        <select
          className="input mt-1"
          value={(query as any).dominantColor ?? ""}
          onChange={(e) => setParam("dominantColor", e.target.value)}
        >
          <option value="">Toutes</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* ---- Prix : double slider + presets ---- */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Prix</label>

        <div className="mt-2">
          <div className="relative h-6">
            {/* piste */}
            <div className={trackStyle} style={{ left: 0, right: 0 }} />
            {/* remplissage entre min et max */}
            <div className={fillStyle} style={{ left: `${leftPct}%`, right: `${rightPct}%` }} />

            {/* slider min */}
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={STEP}
              value={minPrice}
              onChange={(e) => onMinChange(Number(e.target.value))}
              onMouseUp={() => applyPrice()}
              onTouchEnd={() => applyPrice()}
              className="absolute left-0 top-0 w-full h-6 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-900 [&::-webkit-slider-thumb]:cursor-pointer"
            />
            {/* slider max */}
            <input
              type="range"
              min={PRICE_MIN}
              max={PRICE_MAX}
              step={STEP}
              value={maxPrice}
              onChange={(e) => onMaxChange(Number(e.target.value))}
              onMouseUp={() => applyPrice()}
              onTouchEnd={() => applyPrice()}
              className="absolute left-0 top-0 w-full h-6 appearance-none bg-transparent [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-900 [&::-webkit-slider-thumb]:cursor-pointer"
            />
          </div>

          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="badge bg-slate-100 text-slate-800">Min {minPrice} €</span>
            <span className="badge bg-slate-100 text-slate-800">Max {maxPrice} €</span>
          </div>

          {/* presets */}
          <div className="mt-3 flex flex-wrap gap-2">
            {presets.map((p) => (
              <button
                key={p.label}
                type="button"
                onClick={() => {
                  setMinPrice(p.min);
                  setMaxPrice(p.max);
                  applyPrice(p.min, p.max);
                }}
                className="px-3 py-1 rounded-xl border border-slate-200 text-xs hover:bg-slate-50"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-5 flex gap-2">
        <button
          type="button"
          onClick={() => {
            setMinPrice(PRICE_MIN);
            setMaxPrice(PRICE_MAX);
            // on efface tous les filtres
            router.push(pathname);
          }}
          className="btn-outline w-full"
        >
          Réinitialiser
        </button>
        <button
          type="button"
          onClick={() => applyPrice()}
          className="btn-primary w-full"
        >
          Appliquer
        </button>
      </div>
    </aside>
  );
}
