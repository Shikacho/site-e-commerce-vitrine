export default function ConfidentialitePage() {
  return (
    <section className="py-10">
      <div className="container-max">
        <div className="frame p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">Politique de confidentialité</h1>
          <p className="text-slate-600 mt-2">
            Comment nous traitons vos données personnelles sur Mur en Couleur.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <h2 className="font-semibold">1. Données collectées</h2>
              <p className="mt-1">
                Nous collectons les informations nécessaires au traitement des commandes et aux échanges (nom, email, adresse, etc.).
              </p>
            </div>
            <div>
              <h2 className="font-semibold">2. Utilisation des données</h2>
              <p className="mt-1">
                Vos données sont utilisées uniquement pour la gestion des commandes, le support client et, si vous l’acceptez, des communications ponctuelles.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">3. Conservation & droits</h2>
              <p className="mt-1">
                Vous pouvez demander la rectification ou la suppression de vos données via la page Contact. Les données sont conservées le temps légal nécessaire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
