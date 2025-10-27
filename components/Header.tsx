"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useCart } from "./cart/CartContext";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const { count } = useCart();
  const nav = [
    { href: "/shop", label: "Galerie" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-brand-600 text-white shadow-soft">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <div>
            <div className="font-semibold leading-none">Mur en Couleur</div>
            <div className="text-xs opacity-80">Art prêt à accrocher</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={
              pathname?.startsWith(n.href) ? "text-white font-medium" : "text-white/80 hover:text-white"
            }>{n.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/cart" className="relative">
            <ShoppingBag />
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-brand-700 text-[10px] leading-none px-2 py-1 rounded-full">
                {count()}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
