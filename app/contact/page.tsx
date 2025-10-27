export default function ContactPage() {
  return (
    <section className="py-10">
      <div className="container-max max-w-xl">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-gray-600 mt-2">Une question sur une œuvre ou une commande ? Écrivez-nous.</p>
        <form className="card p-6 mt-6 grid gap-4">
          <div><label className="text-sm text-gray-600">Nom</label><input className="mt-1 w-full rounded-xl border-gray-300" placeholder="Votre nom" /></div>
          <div><label className="text-sm text-gray-600">Email</label><input type="email" className="mt-1 w-full rounded-xl border-gray-300" placeholder="vous@exemple.com" /></div>
          <div><label className="text-sm text-gray-600">Message</label><textarea className="mt-1 w-full rounded-xl border-gray-300" rows={5} placeholder="Votre message..." /></div>
          <button className="btn-primary w-fit">Envoyer</button>
        </form>
      </div>
    </section>
  );
}
