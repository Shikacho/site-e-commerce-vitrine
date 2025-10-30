"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "./cart/CartContext";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "/shop", label: "Galerie" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];
  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-slate-950 text-slate-200 border-b border-slate-800">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div className="leading-tight">
            <div className="font-semibold text-white">Mur en Couleur</div>
            <div className="text-[11px] text-slate-400">Art prêt à accrocher</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={
                "relative px-1 py-2 text-sm transition " +
                (isActive(n.href)
                  ? "text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-indigo-400"
                  : "text-slate-300 hover:text-white")
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/cart" className="relative p-2 rounded-xl hover:bg-slate-900">
            <ShoppingBag className="w-5 h-5 text-slate-200" />
            {count() > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-400 text-slate-900 text-[10px] leading-none px-1.5 py-0.5 rounded-full font-semibold">
                {count()}
              </span>
            )}
          </Link>
          <button
            className="md:hidden p-2 rounded-xl hover:bg-slate-900"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5 text-slate-200" /> : <Menu className="w-5 h-5 text-slate-200" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950">
          <nav className="container-max py-2 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={
                  "px-2 py-3 rounded-xl transition " +
                  (isActive(n.href) ? "bg-slate-900 text-white" : "text-slate-300 hover:bg-slate-900 hover:text-white")
                }
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
