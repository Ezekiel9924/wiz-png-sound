const Genres = () => {
  const genres = [
    {
      name: "Reggae",
      description: "Rooted in conscious messaging and authentic island vibes",
      icon: "🎵"
    },
    {
      name: "Dancehall",
      description: "High-energy beats that move crowds across the Pacific",
      icon: "🔥"
    },
    {
      name: "Pop",
      description: "Radio-ready anthems with PNG soul and global appeal",
      icon: "⭐"
    },
    {
      name: "PNG Traditional",
      description: "Honoring ancestral sounds with modern production",
      icon: "🌺"
    }
  ];

  return (
    <section className="py-20 px-6 bg-studio-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-blue to-studio-orange bg-clip-text">
            Our Sound Universe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't just produce music – we craft sonic experiences that capture the spirit of Papua New Guinea while speaking to hearts worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {genres.map((genre, index) => (
            <div 
              key={genre.name}
              className="group bg-[var(--gradient-card)] rounded-lg p-6 text-center border border-studio-orange/10 hover:border-studio-orange/30 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[var(--shadow-glow)]"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">{genre.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-studio-orange">{genre.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{genre.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Genres;