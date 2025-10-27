import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100" />
      <div className="absolute -top-24 right-10 h-56 w-56 rounded-full bg-red-600/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-700 mb-4">
            <Sparkles size={14} className="text-red-600" />
            Rigueur comptable + Coaching d'entrepreneurs
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900">
            Clarifie tes chiffres. Aligne ta posture. Fais croître ton entreprise.
          </h1>
          <p className="mt-5 text-neutral-600 text-lg leading-relaxed">
            CENDRES, cabinet fondé par Wendy Maréchal, allie expertise comptable et coaching
            pour t'accompagner sur deux axes: la structuration de ton activité et ta posture de dirigeant.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-red-600 text-white px-5 py-3 font-medium shadow-sm hover:bg-red-700 transition"
            >
              Réserver un appel découverte
              <ArrowRight size={18} />
            </a>
            <a
              href="#offre"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-neutral-300 bg-white text-neutral-800 px-5 py-3 font-medium hover:border-neutral-400 transition"
            >
              Découvrir l'offre
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2"><ShieldCheck className="text-red-600" size={18}/> Méthode éprouvée</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-red-600" size={18}/> Contact humain</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-red-600" size={18}/> Implication réelle</div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] md:aspect-square rounded-2xl bg-gradient-to-br from-neutral-100 via-white to-neutral-200 border border-neutral-200 shadow-sm overflow-hidden">
            <div className="absolute inset-0 p-6 md:p-10 grid">
              <div className="self-start">
                <p className="text-sm text-neutral-500">Bilan express</p>
                <ul className="mt-2 text-sm text-neutral-700 list-disc ml-5 space-y-1">
                  <li><span className="font-medium">Forces :</span> positionnement différenciant, posture hybride, excellente connaissance des dirigeants.</li>
                  <li><span className="font-medium">Faiblesses :</span> coaching encore peu connu, besoin de clarifier les livrables.</li>
                  <li><span className="font-medium">Angles morts :</span> la cible ignore qu'un expert-comptable peut aller aussi loin dans l'accompagnement.</li>
                </ul>
              </div>
              <div className="self-end">
                <div className="rounded-xl border border-neutral-200 bg-white/80 p-4">
                  <p className="text-neutral-800 font-medium">Niveau de conscience du marché : 2 à 3</p>
                  <p className="text-neutral-600 text-sm mt-1">Le marché connaît le problème (solitude, manque de clarté) mais ignore l'existence d'une solution combinant compta et coaching.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
