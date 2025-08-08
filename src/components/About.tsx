import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text">
            About Dr Wiz & GL Productions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-studio-orange to-studio-blue mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="bg-[var(--gradient-card)] border-studio-orange/20 p-8 shadow-[var(--shadow-deep)]">
            <h3 className="text-2xl font-bold mb-4 text-studio-orange">The Vision</h3>
            <p className="text-foreground mb-4 leading-relaxed">
              From the vibrant streets of Port Moresby to recording studios worldwide, GL Productions represents the authentic sound of Papua New Guinea. Founded by Dr Wiz (Ruben Genolagani), we're not just a production house – we're cultural ambassadors.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to bridge the gap between PNG's rich musical heritage and contemporary global sounds, creating tracks that honor our roots while pushing creative boundaries.
            </p>
          </Card>
          
          <Card className="bg-[var(--gradient-card)] border-studio-blue/20 p-8 shadow-[var(--shadow-deep)]">
            <h3 className="text-2xl font-bold mb-4 text-studio-blue">The Producer</h3>
            <p className="text-foreground mb-4 leading-relaxed">
              Dr Wiz brings decades of experience across reggae, dancehall, pop, and traditional PNG genres. As both producer and label owner, he's shaped the sound of countless artists while staying true to his Pacific Island roots.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With tracks like "Decade of Crisis" (Darkaside) and numerous collaborations under his belt, Dr Wiz continues to elevate PNG music on the international stage.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;