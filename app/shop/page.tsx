import { Suspense } from "react";
import { FilterBar } from "@/components/FilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { getFilteredProducts } from "@/lib/filters";
import { products } from "@/lib/data";

export default function ShopPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
  const sp = Object.fromEntries(Object.entries(searchParams).map(([k,v]) => [k, Array.isArray(v) ? v.join(",") : v ?? ""])) as Record<string,string>;
  const items = getFilteredProducts(products, sp);
  return (
    <section className="py-8">
      <div className="container-max">
        <h1 className="text-3xl font-semibold">Galerie</h1>
        <p className="text-gray-600 mt-1">Affinez par catégorie, format, technique, orientation, couleur et prix.</p>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          <FilterBar />
          <Suspense>
            <ProductGrid items={items} />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
