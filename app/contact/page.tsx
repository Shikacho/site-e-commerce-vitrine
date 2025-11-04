"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", topic: "", message: "", consent: false });
  const [errors, setErrors] = useState<{[k: string]: string}>({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e: {[k: string]: string} = {};
    if (!form.name.trim()) e.name = "Veuillez renseigner votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide.";
    if (!form.message.trim()) e.message = "Votre message est vide.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    // Ici tu brancheras ton envoi (email/API). Pour la démo :
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section className="py-10">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
          {/* Formulaire */}
          <div>
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="text-gray-600 mt-2">
              Une question sur une œuvre ou une commande ? Écrivez-nous, on répond vite.
            </p>

            <form onSubmit={onSubmit} className="card p-6 mt-6 grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">Nom</label>
                  <input
                    className="input mt-1"
                    placeholder="Votre nom"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    autoComplete="name"
                  />
                  {errors.name ? <p className="error">{errors.name}</p> : <p className="help">Comment doit-on vous appeler ?</p>}
                </div>
                <div>
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input mt-1"
                    placeholder="vous@exemple.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    autoComplete="email"
                  />
                  {errors.email ? <p className="error">{errors.email}</p> : <p className="help">On ne partagera jamais votre email.</p>}
                </div>
              </div>

              <div>
                <label className="label">Sujet</label>
                <select
                  className="input mt-1"
                  value={form.topic}
                  onChange={(e) => setForm({ ...form, topic: e.target.value })}
                >
                  <option value="">— Sélectionnez un sujet —</option>
                  <option value="commande">Suivi de commande</option>
                  <option value="devis">Devis sur mesure</option>
                  <option value="oeuvre">Question sur une œuvre</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="label">Message</label>
                <textarea
                  className="textarea mt-1"
                  rows={6}
                  placeholder="Détaillez votre besoin…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
                {errors.message ? <p className="error">{errors.message}</p> : <p className="help">Ajoutez un lien produit si besoin.</p>}
              </div>

              <label className="flex items-start gap-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-1"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                />
                <span className="text-slate-600">
                  J’accepte que mes informations soient utilisées pour me répondre.
                </span>
              </label>

              <button type="submit" className="btn-primary w-fit">
                <Send className="w-4 h-4 mr-2" /> Envoyer
              </button>

              {sent && (
                <div className="rounded-xl border border-green-200 bg-green-50 text-green-800 px-4 py-3 text-sm">
                  Merci ! Votre message a bien été envoyé (démonstration).
                </div>
              )}
            </form>
          </div>

          {/* Carte d'infos */}
          <aside className="card p-6">
            <h2 className="text-lg font-semibold">Informations</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-900" />
                contact@murencouleur.fr
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-900" />
                01 23 45 67 89 (lun–ven, 9h–18h)
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-900" />
                Atelier — 12 rue des Artisans, 75000 Paris
              </li>
            </ul>

            <div className="mt-6 rounded-2xl bg-slate-900 text-white p-4">
              <div className="text-sm opacity-80">Délai moyen de réponse</div>
              <div className="text-2xl font-bold">Sous 24 h</div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
