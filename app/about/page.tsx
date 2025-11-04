import { Palette, Brush, Hammer, Leaf, Truck, BadgeCheck, Sparkles } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="container-max py-14">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" /> Atelier artisanal français
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Mur en Couleur — Atelier & encadrements faits main
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Nous créons, imprimons et encadrons des tableaux prêts à accrocher. 
                Chaque pièce est réalisée à la commande dans notre atelier — avec des matériaux durables et un contrôle qualité exigeant.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="badge bg-slate-900 text-white">Bois FSC</span>
                <span className="badge bg-slate-100 text-slate-800">Encres pigmentaires</span>
                <span className="badge bg-slate-100 text-slate-800">Verre acrylique anti-reflet</span>
              </div>

              <div className="mt-8 flex gap-3">
                <Link href="/shop" className="btn-primary">Découvrir la galerie</Link>
                <Link href="/contact" className="btn-outline">Nous contacter</Link>
              </div>
            </div>

            <div className="card overflow-hidden">
              <img
                src="/images/hero-wall.jpg"
                alt="Mur de cadres et outils d’atelier"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="card p-6">
                <h2 className="text-2xl font-semibold">Notre atelier</h2>
                <p className="mt-3 text-slate-700">
                  Basé en Île-de-France, notre atelier réunit des artisans encadreurs, 
                  des imprimeurs et des designers. Nous fabriquons des pièces uniques et 
                  des petites séries avec la même exigence : des tableaux qui vivent bien 
                  au quotidien (couleurs stables, assemblage solide, finitions nettes).
                </p>

                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <Hammer className="w-5 h-5 text-slate-900" />
                      <div className="font-medium">Encadrements faits main</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Cadres en chêne, noyer ou noir satiné, ajustés au millimètre, montage sous verre acrylique anti-reflet.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <Palette className="w-5 h-5 text-slate-900" />
                      <div className="font-medium">Couleurs fidèles dans le temps</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Impression pigmentaire (giclée) sur papiers beaux-arts 230–300g, profil ICC calibré.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <Leaf className="w-5 h-5 text-slate-900" />
                      <div className="font-medium">Matériaux responsables</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Bois certifié FSC, colles sans solvants, chutes triées et revalorisées.
                    </p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-200">
                    <div className="flex items-center gap-3">
                      <Truck className="w-5 h-5 text-slate-900" />
                      <div className="font-medium">Expédition protégée</div>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">
                      Emballages antichocs et coins renforcés. Livraison suivie sous 3–5 jours ouvrés.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-6 mt-6">
                <h3 className="text-xl font-semibold">Notre savoir-faire, étape par étape</h3>
                <ol className="mt-4 space-y-3 text-slate-700">
                  <li>
                    <span className="font-semibold">1. Sélection & retouches</span> — Nos visuels sont harmonisés 
                    pour une cohérence parfaite en galerie (contrastes, teintes, textures).
                  </li>
                  <li>
                    <span className="font-semibold">2. Impression giclée</span> — Encres pigmentaires sur papier 
                    coton ou baryté, résistance lumière accrue.
                  </li>
                  <li>
                    <span className="font-semibold">3. Cadre sur mesure</span> — Coupe, assemblage, ponçage et 
                    teinte. Pose de passe-partout selon format.
                  </li>
                  <li>
                    <span className="font-semibold">4. Contrôle & signature</span> — Vérification de la planéité, 
                    poussières, alignement. Cachet d’atelier apposé au dos.
                  </li>
                </ol>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="card p-6">
                <h4 className="text-sm font-semibold tracking-wide text-slate-500">
                  Chiffres clés
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-slate-900 text-white p-4">
                    <div className="text-2xl font-bold">2019</div>
                    <div className="text-xs opacity-80">Création de l’atelier</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900 text-white p-4">
                    <div className="text-2xl font-bold">1 500+</div>
                    <div className="text-xs opacity-80">pièces livrées</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900 text-white p-4">
                    <div className="text-2xl font-bold">48 h</div>
                    <div className="text-xs opacity-80">délais d’impression</div>
                  </div>
                  <div className="rounded-2xl bg-slate-900 text-white p-4">
                    <div className="text-2xl font-bold">4,8/5</div>
                    <div className="text-xs opacity-80">avis clients</div>
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-sm font-semibold tracking-wide text-slate-500">
                  Engagements
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" />
                    Garantie “satisfait ou remboursé” 30 jours.
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" />
                    Réimpression offerte en cas de casse au transport.
                  </li>
                  <li className="flex items-start gap-2">
                    <BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" />
                    Édition numérotée pour certaines séries.
                  </li>
                </ul>

                <Link href="/contact" className="btn-primary mt-5 inline-flex">
                  Demander un devis sur mesure
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-10 bg-slate-50 border-t border-slate-200">
        <div className="container-max">
          <h3 className="text-xl font-semibold">Matières & techniques</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <Brush className="w-5 h-5 text-slate-900" />
                <div className="font-medium">Papiers beaux-arts</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Coton mat ou baryté satiné 230–300g. Rend très bien les aplats et les dégradés.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <Hammer className="w-5 h-5 text-slate-900" />
                <div className="font-medium">Cadres en bois</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Chêne naturel, noir satiné ou noyer. Coupe et assemblage en atelier.
              </p>
            </div>
            <div className="p-5 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-slate-900" />
                <div className="font-medium">Finitions durables</div>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Verre acrylique anti-reflet, attaches métal et dos kraft. Conçu pour durer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
