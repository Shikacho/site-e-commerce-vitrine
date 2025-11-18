export default function PolitiqueRetourPage() {
  return (
    <section className="py-10">
      <div className="container-max">
        <div className="frame p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">Politique de retour</h1>
          <p className="text-slate-600 mt-2">
            Conditions applicables aux retours et remboursements.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <h2 className="font-semibold">Délai de retour</h2>
              <p className="mt-1">
                Vous disposez de 30 jours calendaires à compter de la réception pour demander un retour.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">État du produit</h2>
              <p className="mt-1">
                Les tableaux doivent être retournés dans leur état d’origine, correctement protégés, sans choc ni rayure.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Procédure</h2>
              <p className="mt-1">
                Contactez-nous via la page Contact avec votre numéro de commande. Nous vous indiquerons l’adresse de retour et les étapes à suivre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
