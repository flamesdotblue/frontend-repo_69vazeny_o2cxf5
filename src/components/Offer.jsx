import { CheckCircle2, Layout, LineChart, HeartHandshake } from "lucide-react";

export default function Offer() {
  return (
    <section id="offre" className="relative py-16 md:py-24 border-t border-neutral-200 bg-white">
      <div className="absolute inset-x-0 -top-24 h-24 bg-gradient-to-b from-red-600/5 to-transparent pointer-events-none" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-neutral-900">
            Une offre unique: comptabilité d'excellence + coaching de dirigeant
          </h2>
          <p className="mt-4 text-neutral-600">
            Structure financière solide, clarté mentale, décisions alignées. Nous combinons
            accompagnement opérationnel et travail sur la posture pour des résultats durables.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-neutral-200 p-6 bg-white">
            <div className="h-10 w-10 rounded-md bg-red-600/10 text-red-700 grid place-items-center mb-4">
              <Layout />
            </div>
            <h3 className="font-semibold text-neutral-900">Structuration</h3>
            <p className="text-neutral-600 text-sm mt-2">
              Mise en place des fondations: organisation, suivi de trésorerie, prévisonnels, KPIs.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Process clairs</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Tableaux de bord lisibles</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Décisions rapides</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 p-6 bg-white">
            <div className="h-10 w-10 rounded-md bg-red-600/10 text-red-700 grid place-items-center mb-4">
              <HeartHandshake />
            </div>
            <h3 className="font-semibold text-neutral-900">Coaching réel</h3>
            <p className="text-neutral-600 text-sm mt-2">
              Travail sur la posture, la clarté et le leadership. Tu n'es plus seul face aux choix.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Confiance et alignement</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Prise de recul</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Cadre bienveillant</li>
            </ul>
          </div>

          <div className="rounded-xl border border-neutral-200 p-6 bg-white">
            <div className="h-10 w-10 rounded-md bg-red-600/10 text-red-700 grid place-items-center mb-4">
              <LineChart />
            </div>
            <h3 className="font-semibold text-neutral-900">Impact business</h3>
            <p className="text-neutral-600 text-sm mt-2">
              Des chiffres fiables et un dirigeant solide: croissance plus saine, décisions assumées.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-700">
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Marges mieux pilotées</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Trésorerie sécurisée</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="text-red-600" size={18}/> Vision long terme</li>
            </ul>
          </div>
        </div>

        <div id="methode" className="mt-12 grid md:grid-cols-3 gap-6">
          {["Diagnostic", "Plan d'actions", "Accompagnement"].map((step, i) => (
            <div key={step} className="rounded-xl border border-neutral-200 p-6 bg-neutral-50">
              <p className="text-xs tracking-wide uppercase text-neutral-500">Étape {i + 1}</p>
              <p className="mt-1 font-medium text-neutral-900">{step}</p>
              <p className="mt-2 text-sm text-neutral-600">
                {i === 0 && "On clarifie ta situation: chiffres, organisation, objectifs, blocages."}
                {i === 1 && "On priorise et structure: outils, process, calendrier, indicateurs clés."}
                {i === 2 && "On tient le cap: points réguliers, ajustements, coaching ciblé."}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 p-6 md:p-8 bg-white">
          <h3 className="text-lg font-semibold text-neutral-900">Coaching solo</h3>
          <p className="mt-2 text-neutral-600">
            Pour les entrepreneurs non-clients du cabinet qui ressentent un besoin d'alignement personnel.
            Séances individuelles axées clarté, décisions et passage à l'action.
          </p>
          <a href="#contact" className="mt-4 inline-block text-red-700 font-medium hover:underline">
            En savoir plus
          </a>
        </div>
      </div>
    </section>
  );
}
