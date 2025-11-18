export default function LivraisonRetoursPage() {
  return (
    <section className="py-10">
      <div className="container-max">
        <div className="frame p-6 max-w-3xl mx-auto">
          <h1 className="text-3xl font-semibold">Livraison & retours</h1>
          <p className="text-slate-600 mt-2">
            Informations principales concernant la livraison et les retours.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-700">
            <div>
              <h2 className="font-semibold">Délais de livraison</h2>
              <p className="mt-1">
                Une fois la pièce fabriquée (en général sous 48h), la livraison prend 2 à 3 jours ouvrés en France métropolitaine.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Frais de port</h2>
              <p className="mt-1">
                Les frais de port sont calculés en fonction du format et du nombre de tableaux dans la commande.
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Retours</h2>
              <p className="mt-1">
                Vous disposez de 30 jours après réception pour demander un retour, sous réserve que le tableau soit en parfait état.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
