import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import CTASection from "./components/CTASection";

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Offer />
        <CTASection />
      </main>
      <footer className="border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} CENDRES — Wendy Maréchal</p>
          <div className="flex items-center gap-4">
            <a href="#offre" className="hover:text-neutral-900">Offre</a>
            <a href="#methode" className="hover:text-neutral-900">Méthode</a>
            <a href="#contact" className="hover:text-neutral-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
