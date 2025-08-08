import { Button } from "@/components/ui/button";
import heroStudio from "@/assets/hero-studio.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroStudio} 
          alt="GL Productions Studio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-studio-dark/90 via-studio-dark/70 to-studio-dark/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text animate-pulse">
          GL PRODUCTIONS
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground font-light">
          Crafting the Sound of Papua New Guinea
        </p>
        <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
          From the heart of Port Moresby, Dr Wiz brings reggae, dancehall, and PNG's authentic voice to the global stage. Every beat tells a story, every track builds a legacy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Listen to Our Sound
          </Button>
          <Button variant="studio" size="lg" className="text-lg px-8 py-4">
            Work With Us
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-studio-orange rounded-full flex justify-center">
          <div className="w-1 h-3 bg-studio-orange rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;