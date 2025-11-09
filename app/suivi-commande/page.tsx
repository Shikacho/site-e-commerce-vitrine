export default function SuiviCommandePage() {
  return (
    <section className="py-10">
      <div className="container-max">
        <div className="frame p-6 max-w-xl mx-auto">
          <h1 className="text-3xl font-semibold">Suivi de commande</h1>
          <p className="text-slate-600 mt-2">
            Entrez votre numéro de commande pour obtenir des informations de suivi.
          </p>

          <form className="mt-6 grid gap-4 text-sm">
            <div>
              <label className="label">Numéro de commande</label>
              <input
                className="input mt-1"
                placeholder="Ex : MC-2025-00123"
              />
            </div>
            <button className="btn-primary w-fit">Rechercher</button>
            <p className="help">
              Le suivi détaillé sera disponible une fois votre colis expédié.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
