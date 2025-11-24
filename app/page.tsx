import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CategoryPills } from "@/components/CategoryPills";
import { categories } from "@/lib/data";

export default function HomePage() {
  return (
  
    <section className="bg-white">
      <div className="container-max pt-16 pb-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Votre galerie, chez vous.
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Tableaux contemporains prêts à accrocher — formats A4 à 70×100, finitions premium, expédition rapide.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Link href="/shop" className="btn-primary">
                Découvrir la galerie <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/about" className="btn-outline">À propos</Link>
            </div>
            <p className="small mt-4">Impression premium · Emballage protégé · Retours sous 30 jours</p>
            <div className="mt-8">
              <CategoryPills categories={categories} />
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