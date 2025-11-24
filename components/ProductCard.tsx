import Link from 'next/link';
import { Product } from '@/lib/types';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.slug}`} className="card border-slate-100 hover:shadow-lg transition block">

      <div className="aspect-[4/5] bg-slate-50 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div className="p-4">
        <h3 className="font-medium card-title">{product.name}</h3>
        <div className="mt-1 text-xs text-gray-600 card-meta">
          {product.technique} · {product.format} · {product.orientation}
        </div>

        {product.description && (
          <p className="mt-2 text-sm text-slate-700 card-desc">
            {product.description}
          </p>
        )}

        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-800">{product.price.toFixed(2)} €</span>
          <span className="badge bg-slate-100 text-slate-800">{product.support}</span>
        </div>
      </div>
    </Link>
  );
}