import Link from "next/link";
import { ArrowRight } from "lucide-react";
import dynamic from "next/dynamic";
import { categories } from "@/lib/data";

// charge CategoryPills uniquement côté client
const CategoryPillsClient = dynamic(
  () => import("@/components/CategoryPills").then(m => m.CategoryPills),
  { ssr: false }
);

export default function HomePage() {
  return (
    <section className="bg-white">
      <div className="container-max pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Votre galerie, chez vous.</h1>
            <p className="mt-4 text-lg text-gray-700">
              Tableaux contemporains prêts à accrocher — formats A4 à 70×100, finitions premium, expédition rapide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/shop" className="btn-primary">
                Découvrir la galerie <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/about" className="btn-outline">À propos</Link>
            </div>

            <p className="mt-2 text-xs text-slate-500">
              Démonstration / portfolio — site d’exemple, aucune vente réelle.
            </p>

            <div className="mt-8">
              <CategoryPillsClient categories={categories} to="/shop" />
            </div>
          </div>

          <div className="card p-0 overflow-hidden border-0 bg-white">
            <img
              src="/images/cadre-photo-personnalise-01-HD.jpg"
              alt="Mur de cadres, galerie neutre"
              className="w-full h-auto block bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
