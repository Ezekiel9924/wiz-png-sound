import Hero from "@/components/Hero";
import About from "@/components/About";
import Genres from "@/components/Genres";
import FeaturedProductions from "@/components/FeaturedProductions";
import Collaborations from "@/components/Collaborations";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <Genres />
      <FeaturedProductions />
      <Collaborations />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-studio-dark border-t border-studio-orange/20 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-studio-orange to-studio-blue rounded-full"></div>
            <span className="text-xl font-bold text-transparent bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text">
              GL PRODUCTIONS
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © 2024 GL Productions. Crafting the authentic sound of Papua New Guinea.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;