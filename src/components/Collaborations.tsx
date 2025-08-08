const Collaborations = () => {
  const collaborations = [
    {
      artist: "Darkaside",
      project: "Decade of Crisis",
      description: "Long-term partnership creating conscious reggae with social impact"
    },
    {
      artist: "Island Voices Collective",
      project: "PNG Unity Album",
      description: "Multi-artist collaboration celebrating cultural diversity across PNG"
    },
    {
      artist: "Pacific Rising",
      project: "Ocean Rhythms",
      description: "Cross-Pacific collaboration bringing island sounds to global audiences"
    },
    {
      artist: "Local PNG Artists",
      project: "Emerging Talent Series",
      description: "Ongoing mentorship and production support for up-and-coming PNG musicians"
    }
  ];

  return (
    <section className="py-20 px-6 bg-studio-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-blue to-studio-orange bg-clip-text">
            Artist Collaborations
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building bridges between artists, cultures, and sounds to create something truly extraordinary.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {collaborations.map((collab, index) => (
            <div 
              key={collab.artist}
              className="bg-[var(--gradient-card)] rounded-lg p-6 border border-studio-blue/20 hover:border-studio-blue/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-studio-orange to-studio-blue rounded-full flex items-center justify-center text-studio-dark font-bold text-lg">
                  {collab.artist[0]}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-studio-blue group-hover:text-studio-orange transition-colors">
                    {collab.artist}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">{collab.project}</p>
                </div>
              </div>
              <p className="text-foreground leading-relaxed">{collab.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;