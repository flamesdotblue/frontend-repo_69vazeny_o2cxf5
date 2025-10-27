import { Star } from "lucide-react";

export default function CTASection() {
  return (
    <section id="avis" className="relative py-16 md:py-24 bg-neutral-50 border-t border-neutral-200">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-neutral-100 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote:
                "Wendy m'a aidé à reprendre le contrôle: chiffres carrés, esprit clair. J'ai enfin arrêté de subir.",
              author: "Thomas, fondateur d'une agence",
            },
            {
              quote:
                "Je n'imaginais pas qu'un expert-comptable puisse m'accompagner aussi humainement. Puissant.",
              author: "Sarah, e-commerce",
            },
            {
              quote:
                "On parle vrai, on décide, on avance. Le combo coaching + compta a changé mon pilotage.",
              author: "Mehdi, SaaS B2B",
            },
          ].map((t, idx) => (
            <div key={idx} className="rounded-xl border border-neutral-200 bg-white p-6 flex flex-col">
              <div className="flex gap-1 text-red-600">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#dc2626" className="text-red-600" />
                ))}
              </div>
              <p className="mt-3 text-neutral-800">“{t.quote}”</p>
              <p className="mt-2 text-sm text-neutral-500">{t.author}</p>
            </div>
          ))}
        </div>

        <div id="contact" className="mt-12 rounded-2xl border border-neutral-200 bg-white p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900">Prêt à gagner en clarté et en sérénité ?</h3>
            <p className="mt-3 text-neutral-600">
              Dis-moi où tu en es et ce que tu veux obtenir. On voit ensemble si l'accompagnement est adapté à ta situation.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li>• Appel de 20 minutes pour cadrer le besoin</li>
              <li>• Sans engagement</li>
              <li>• Si on s'engage, tu repars avec un plan de route clair</li>
            </ul>
          </div>
          <div>
            <form
              className="grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                const target = e.currentTarget;
                const name = target.name.value;
                const email = target.email.value;
                const message = target.message.value;
                const subject = encodeURIComponent("Demande d'appel découverte – CENDRES");
                const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\n${message}`);
                window.location.href = `mailto:contact@cendres.co?subject=${subject}&body=${body}`;
              }}
            >
              <input
                name="name"
                required
                placeholder="Ton prénom"
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Ton email"
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Parle-moi de ta situation actuelle et de ce que tu veux obtenir..."
                className="w-full rounded-md border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-red-600/30 focus:border-red-600"
              />
              <button
                type="submit"
                className="inline-flex justify-center rounded-md bg-red-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-red-700 transition"
              >
                Réserver mon appel
              </button>
              <p className="text-xs text-neutral-500">
                En envoyant ce message, tu acceptes d'être recontacté(e) par email.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
