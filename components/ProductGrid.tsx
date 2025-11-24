import { Product } from '@/lib/types';
import { ProductCard } from './ProductCard';

export function ProductGrid({ items }: { items: Product[] }) {
  if (items.length === 0) return <div className="text-gray-600">Aucun résultat. Ajustez les filtres.</div>;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
      {items.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
