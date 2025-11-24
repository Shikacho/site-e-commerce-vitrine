import { Palette, Brush, Hammer, Leaf, Truck, BadgeCheck, Sparkles, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <section className="py-10">
        <div className="container-max">
          <div className="frame p-6 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-full px-3 py-1">
                <Sparkles className="w-3.5 h-3.5" /> Atelier artisanal
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Mur en Couleur
              </h1>
              <p className="mt-3 text-lg text-slate-700">
                Nous concevons, imprimons et encadrons des tableaux prêts à accrocher.
                Fabrication à la commande, finitions propres, matériaux durables.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="badge bg-slate-900 text-white">Bois FSC</span>
                <span className="badge bg-slate-100 text-slate-800">Encres pigmentaires</span>
                <span className="badge bg-slate-100 text-slate-800">Acrylique anti-reflet</span>
              </div>

              <div className="mt-8 flex gap-3">
                <Link href="/shop" className="btn-primary">Découvrir la galerie</Link>
                <Link href="/contact" className="btn-outline">Nous contacter</Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl">
              <img src="/images/cadre-photo-personnalise-01-HD.jpg" alt="Mur de cadres" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-max">
          <div className="frame p-6">
            <header className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Qui sommes-nous ?</h2>
              <p className="text-slate-600 mt-1">Atelier d’encadrement & impression — chaque pièce est assemblée à la commande.</p>
            </header>

            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <p className="text-slate-700">
                  Basé en Île-de-France, l’atelier réunit encadreurs, imprimeurs et designers.
                  Nous produisons en petites séries et contrôlons chaque détail : planéité, coupe, alignement, rendu des couleurs.
                </p>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-slate-900" /> Bois certifié, colles sans solvants</li>
                  <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-slate-900" /> Profils ICC & épreuves contrôlées</li>
                  <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-slate-900" /> Acrylique anti-reflet</li>
                  <li className="flex items-center gap-2"><BadgeCheck className="w-4 h-4 text-slate-900" /> Emballage antichoc & suivi</li>
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Stat value="2019" label="Création" />
                <Stat value="1 500+" label="pièces livrées" />
                <Stat value="48 h" label="impression" />
                <Stat value="4,8/5" label="avis clients" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-max">
          <div className="frame p-6">
            <header className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Nos services</h2>
              <p className="text-slate-600 mt-1">De la sélection d’image à la pose des attaches, tout est géré en interne.</p>
            </header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Feature icon={<Hammer className="w-5 h-5" />} title="Encadrements" desc="Chêne, noyer ou noir satiné. Ajustage propre, assemblage solide." />
              <Feature icon={<Palette className="w-5 h-5" />} title="Couleurs fidèles" desc="Impression giclée sur papiers beaux-arts 230–300g, profils ICC." />
              <Feature icon={<Leaf className="w-5 h-5" />} title="Responsable" desc="Bois FSC, colles sans solvants, chutes revalorisées." />
              <Feature icon={<Truck className="w-5 h-5" />} title="Expédition" desc="Coins renforcés, calage antichoc. Livraison suivie 3–5 j." />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-max">
          <div className="frame p-6">
            <header className="mb-4">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">Étapes de fabrication</h2>
              <p className="text-slate-600 mt-1">Un circuit court pensé pour la qualité et des délais maîtrisés.</p>
            </header>

            <ol className="grid sm:grid-cols-2 gap-4">
              {[
                { step: "1. Sélection & retouches", desc: "Cohérence visuelle, recadrage, équilibre des teintes." },
                { step: "2. Impression giclée", desc: "Encres pigmentaires, papier adapté au sujet." },
                { step: "3. Encadrement", desc: "Coupe, assemblage, passe-partout si besoin, acrylique anti-reflet." },
                { step: "4. Contrôle & expédition", desc: "Vérifs finales, emballage protégé, suivi." },
              ].map((s, i) => (
                <li key={i} className="rounded-xl border border-slate-200 p-4">
                  <div className="font-medium text-slate-900">{s.step}</div>
                  <p className="text-sm text-slate-600 mt-1">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="container-max grid lg:grid-cols-3 gap-6">
          <div className="frame p-6 lg:col-span-2">
            <header className="mb-3">
              <h2 className="text-2xl font-semibold text-slate-900">Engagements</h2>
            </header>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" /> Retour 30 jours.</li>
              <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" /> Réimpression si casse transport.</li>
              <li className="flex items-start gap-2"><BadgeCheck className="w-4 h-4 mt-0.5 text-slate-900" /> Séries numérotées (sélection).</li>
            </ul>
          </div>

          <div className="frame p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold">Un projet sur mesure ?</h3>
              <p className="text-sm text-slate-600 mt-1">Formats spécifiques, grandes séries, hôtels/restaurants… On s’adapte.</p>
            </div>
            <Link href="/contact" className="btn-primary mt-4 inline-flex items-center">
              Demander un devis <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl bg-slate-900 text-white p-4">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-xs opacity-80">{label}</div>
    </div>
  );
}

function Feature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">{icon}</div>
        <div className="font-medium">{title}</div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
