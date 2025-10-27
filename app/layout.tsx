import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartContext";

export const metadata: Metadata = {
  title: "Mur en Couleur — Tableaux prêts à accrocher",
  description: "Galerie en ligne : tableaux contemporains prêts à accrocher. Formats A4 à 70×100, finitions premium, expédition rapide.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <CartProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
