import { notFound } from "next/navigation";
import { products } from "@/lib/data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AddToCart } from "@/components/cart/AddToCart";

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <section className="py-8">
      <div className="container-max">
        <Breadcrumbs
          items={[
            { label: "Galerie", href: "/shop" },
            { label: product.category, href: `/shop/${product.category}` },
            { label: product.name },
          ]}
        />
        <div className="grid lg:grid-cols-2 gap-8 mt-6">
          <div className="card overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-auto" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="badge bg-brand-100">Format: {product.format}</span>
              <span className="badge bg-brand-100">Technique: {product.technique}</span>
              <span className="badge bg-brand-100">Orientation: {product.orientation}</span>
              <span className="badge bg-brand-100">Couleur: {product.dominantColor}</span>
              <span className="badge bg-brand-100">Support: {product.support}</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-2xl font-bold">{product.price.toFixed(2)} €</span>
              <AddToCart product={product} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
