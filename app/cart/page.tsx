"use client";
import { useCart } from "@/components/cart/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { items, remove, updateQty, total } = useCart();

  return (
    <section className="py-10">
      <div className="container-max">
        <h1 className="text-3xl font-semibold">Panier</h1>
        {items.length === 0 ? (
          <div className="mt-6">
            <p className="text-gray-600">Votre panier est vide.</p>
            <Link href="/shop" className="btn-primary mt-4 inline-block">Continuer mes achats</Link>
          </div>
        ) : (
          <div className="mt-6 grid lg:grid-cols-[1fr_360px] gap-6">
            <div className="card divide-y">
              {items.map((it) => (
                <div key={it.id} className="p-4 flex gap-4 items-center">
                  <img src={it.image} className="w-28 h-36 object-cover rounded-xl border" alt={it.name} />
                  <div className="flex-1">
                    <div className="font-medium">{it.name}</div>
                    <div className="text-sm text-gray-600">{it.format} · {it.technique} · {it.orientation}</div>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm text-gray-600">Qté</label>
                      <input type="number" min={1} value={it.qty} onChange={(e)=>updateQty(it.id, Number(e.target.value)||1)} className="w-16 rounded-xl border-gray-300" />
                      <button onClick={()=>remove(it.id)} className="text-brand-600 hover:underline ml-2">Retirer</button>
                    </div>
                  </div>
                  <div className="font-semibold whitespace-nowrap">{(it.price*it.qty).toFixed(2)} €</div>
                </div>
              ))}
            </div>
            <aside className="card p-6 h-fit">
              <div className="text-lg font-semibold">Récapitulatif</div>
              <div className="mt-4 flex items-center justify-between">
                <span>Sous-total</span>
                <span className="font-semibold">{total().toFixed(2)} €</span>
              </div>
              <button className="btn-primary w-full mt-6">Passer au paiement</button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
