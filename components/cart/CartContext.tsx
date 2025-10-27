"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/types";
type CartItem = Product & { qty: number };
type CartContextType = { items: CartItem[]; add:(p:Product,qty?:number)=>void; remove:(id:string)=>void; updateQty:(id:string,qty:number)=>void; clear:()=>void; count:()=>number; total:()=>number; };
const CartCtx = createContext<CartContextType | null>(null); const KEY="cart-murencouleur-local-v1";
export function CartProvider({children}:{children:React.ReactNode}){ const [items,setItems]=useState<CartItem[]>([]);
  useEffect(()=>{ try{const raw=localStorage.getItem(KEY); if(raw) setItems(JSON.parse(raw));}catch{} },[]);
  useEffect(()=>{ try{localStorage.setItem(KEY, JSON.stringify(items));}catch{} },[items]);
  const api = useMemo<CartContextType>(()=>({
    items,
    add:(p,qty=1)=>{ setItems(prev=>{ const i=prev.findIndex(x=>x.id===p.id); if(i>=0){const next=[...prev]; next[i]={...next[i], qty: next[i].qty+qty}; return next;} return [...prev, {...p, qty}]}); },
    remove:(id)=>setItems(prev=>prev.filter(p=>p.id!=id)),
    updateQty:(id,qty)=>setItems(prev=>prev.map(p=>p.id===id?{...p, qty: Math.max(1,qty)}:p)),
    clear:()=>setItems([]),
    count:()=>items.reduce((a,it)=>a+it.qty,0),
    total:()=>items.reduce((a,it)=>a+it.price*it.qty,0),
  }),[items]);
  return <CartCtx.Provider value={api}>{children}</CartCtx.Provider>;
}
export function useCart(){ const ctx=useContext(CartCtx); if(!ctx) throw new Error("useCart must be used within CartProvider"); return ctx; }
