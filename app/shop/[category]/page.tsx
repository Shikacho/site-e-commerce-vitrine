import { notFound } from "next/navigation";
import { FilterBar } from "@/components/FilterBar";
import { ProductGrid } from "@/components/ProductGrid";
import { getFilteredProducts } from "@/lib/filters";
import { products, categories } from "@/lib/data";

export default function CategoryPage({ params, searchParams }: { params: { category: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  const cat = decodeURIComponent(params.category);
  const exists = categories.some(c => c.slug === cat);
  if (!exists) return notFound();
  const sp = Object.fromEntries(Object.entries(searchParams).map(([k,v]) => [k, Array.isArray(v) ? v.join(",") : v ?? ""])) as Record<string,string>;
  const items = getFilteredProducts(products.filter(p => p.category === cat), sp);

  return (
    <section className="py-8">
      <div className="container-max">
        <h1 className="text-3xl font-semibold capitalize">{cat.replace("-", " ")}</h1>
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          <FilterBar category={cat} />
          <ProductGrid items={items} />
        </div>
      </div>
    </section>
  );
}
