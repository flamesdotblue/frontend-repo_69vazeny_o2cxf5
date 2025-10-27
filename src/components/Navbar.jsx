import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Offre", href: "#offre" },
    { label: "Méthode", href: "#methode" },
    { label: "Avis", href: "#avis" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-red-600 text-white grid place-items-center font-semibold">
            C
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-neutral-900">CENDRES</p>
            <p className="text-xs text-neutral-500">Compta • Coaching</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-neutral-600 hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-red-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-red-700 transition"
          >
            Parler à Wendy
          </a>
        </nav>

        <button
          className="md:hidden p-2 rounded-md border border-neutral-200 text-neutral-700"
          onClick={() => setOpen((o) => !o)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white/80 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-red-600 text-white px-4 py-2 font-medium shadow-sm hover:bg-red-700 transition"
            >
              Parler à Wendy
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
