import Link from "next/link";

export function Footer() {
  return (
  <footer className="mt-16 bg-slate-950 text-slate-200">
    <div className="container-max py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
    </div>

    <div className="border-t border-white/10">
      <div className="container-max py-4 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div>© {new Date().getFullYear()} Mur en Couleur — Tous droits réservés.</div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">FR</span>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
          <Link href="/politique-retour" className="hover:text-white transition">Politique de retour</Link>
        </div>
      </div>

      <div className="container-max pb-6 flex flex-col items-center gap-2">
        <a
          href="https://buymeacoffee.com/shika"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Buy Me a Coffee — shika"
          className="inline-flex items-center hover:opacity-90 transition"
        >
          <img src="/images/bmc.png" alt="" className="h-7 w-auto" />
        </a>
        <a
          href="https://buymeacoffee.com/shika"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-slate-300 hover:text-white transition"
        >
          <span className="font-medium">Site réalisé par Shika</span> — <span className="underline">Pour me soutenir</span>
        </a>
      </div>
    </div>
  </footer>
);
}
