import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-studio-orange to-studio-blue bg-clip-text">
          Ready to Create Something Amazing?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Whether you're an established artist or just starting your musical journey, GL Productions is here to bring your vision to life with authentic PNG flavor and global appeal.
        </p>
        
        <Card className="bg-[var(--gradient-card)] border-studio-orange/20 p-8 mb-12 shadow-[var(--shadow-deep)]">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-bold text-studio-orange mb-2">Studio Sessions</h3>
              <p className="text-muted-foreground text-sm">Professional recording and production in Port Moresby</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-studio-blue mb-2">Remote Production</h3>
              <p className="text-muted-foreground text-sm">Collaborate with us from anywhere in the Pacific</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-studio-orange mb-2">Artist Development</h3>
              <p className="text-muted-foreground text-sm">Mentorship and career guidance for emerging talent</p>
            </div>
          </div>
        </Card>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            Book a Session
          </Button>
          <Button variant="studio" size="lg" className="text-lg px-8 py-4">
            Send Demo
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 text-muted-foreground">
          <div className="text-center">
            <p className="font-medium text-studio-orange">Email</p>
            <p className="text-sm">info@glproductions.pg</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-studio-blue">Location</p>
            <p className="text-sm">Port Moresby, PNG</p>
          </div>
          <div className="text-center">
            <p className="font-medium text-studio-orange">Follow</p>
            <p className="text-sm">@GLProductionsPNG</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;