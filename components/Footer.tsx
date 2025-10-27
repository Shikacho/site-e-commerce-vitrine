import Link from "next/link";
export function Footer() {
  return (
    <footer className="mt-16 bg-brand-700 text-brand-50">
      <div className="container-max py-12 grid md:grid-cols-3 gap-8 text-sm">
        <div><h3 className="font-semibold">Mur en Couleur</h3><p className="mt-2 text-brand-100">Votre galerie, chez vous.</p></div>
        <div><h3 className="font-semibold">Navigation</h3><ul className="mt-2 space-y-1">
          <li><Link className="hover:underline" href="/shop">Galerie</Link></li>
          <li><Link className="hover:underline" href="/about">À propos</Link></li>
          <li><Link className="hover:underline" href="/contact">Contact</Link></li>
        </ul></div>
        <div><h3 className="font-semibold">Légal</h3><ul className="mt-2 space-y-1">
          <li><a className="hover:underline" href="#">CGU</a></li>
          <li><a className="hover:underline" href="#">Confidentialité</a></li>
        </ul></div>
      </div>
      <div className="py-4 text-center text-xs text-brand-100/80">© {new Date().getFullYear()} Mur en Couleur — Tous droits réservés.</div>
    </footer>
  );
}
