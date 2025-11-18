export default function FAQPage() {
  return (
    <section className="py-10">
      <div className="container-max">
        <div className="frame p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">FAQ</h1>
          <p className="text-slate-600 mt-2">
            Les questions qui reviennent le plus souvent sur Mur en Couleur.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <h2 className="font-semibold">Quel est le délai de fabrication ?</h2>
              <p className="mt-1">
                L’impression et l’encadrement sont généralement réalisés sous 48h ouvrées.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Les tableaux arrivent-ils prêts à accrocher ?</h2>
              <p className="mt-1">
                Oui, chaque pièce est livrée avec système d’accroche déjà monté au dos.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Puis-je commander un format sur mesure ?</h2>
              <p className="mt-1">
                Oui, pour les projets spécifiques (hôtels, bureaux, restaurants), contactez-nous via la page Contact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
