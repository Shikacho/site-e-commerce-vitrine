import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      {/* Bandeau principal */}
      <div className="container-max py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marque */}
        <div>
          <h3 className="text-lg font-semibold">Mur en Couleur</h3>
          <p className="mt-3 text-slate-400">
            Votre galerie, chez vous. Tableaux prêts à accrocher, finitions premium.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-300">Navigation</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/shop" className="text-slate-300 hover:text-white transition">Galerie</Link></li>
            <li><Link href="/about" className="text-slate-300 hover:text-white transition">À propos</Link></li>
            <li><Link href="/contact" className="text-slate-300 hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Aide */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-300">Aide</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-slate-300 hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition">Livraison & retours</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition">Suivi de commande</a></li>
          </ul>
        </div>

        {/* Légal */}
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-slate-300">Légal</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="text-slate-300 hover:text-white transition">CGU</a></li>
            <li><a href="#" className="text-slate-300 hover:text-white transition">Confidentialité</a></li>
            {/* <li><a href="#" className="text-slate-300 hover:text-white transition">Mentions légales</a></li> */}
          </ul>
        </div>
      </div>

      {/* Baseline */}
      <div className="border-t border-white/10">
        <div className="container-max py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Mur en Couleur — Tous droits réservés.</div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">FR</span>
            <a href="#" className="hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-white transition">Politique de retour</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
