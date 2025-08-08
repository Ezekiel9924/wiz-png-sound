import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FeaturedProductions = () => {
  const tracks = [
    {
      title: "Decade of Crisis",
      artist: "Darkaside",
      description: "A powerful commentary on social change, blending conscious reggae with PNG storytelling traditions.",
      genre: "Conscious Reggae"
    },
    {
      title: "Island Dreams",
      artist: "Various Artists",
      description: "A collaborative anthem celebrating PNG's natural beauty through modern pop sensibilities.",
      genre: "Island Pop"
    },
    {
      title: "Port Moresby Nights",
      artist: "GL Productions",
      description: "Urban dancehall capturing the energy and resilience of PNG's capital city.",
      genre: "Dancehall"
    },
    {
      title: "Ancestors' Call",
      artist: "Traditional Fusion",
      description: "Traditional PNG vocals meet contemporary production in this groundbreaking cultural bridge.",
      genre: "World Fusion"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text">
            Featured Productions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each track represents our commitment to authentic storytelling and innovative sound design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {tracks.map((track, index) => (
            <Card 
              key={track.title}
              className="bg-[var(--gradient-card)] border-studio-orange/20 p-6 hover:shadow-[var(--shadow-deep)] transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-studio-orange group-hover:text-studio-blue transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{track.artist}</p>
                </div>
                <span className="bg-studio-orange/20 text-studio-orange px-3 py-1 rounded-full text-xs font-medium">
                  {track.genre}
                </span>
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{track.description}</p>
              <Button variant="studio" size="sm" className="w-full">
                Listen Now
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductions;