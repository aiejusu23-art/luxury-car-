import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-car.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Car" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-32">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Votre expérience <span className="gold-text">automobile d'exception</span> au Gabon
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Découvrez notre sélection premium de véhicules de luxe d'occasion. 
            Mercedes, BMW, Range Rover, Porsche et Audi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/catalog">
              <Button variant="premium" size="xl" className="w-full sm:w-auto">
                Voir les véhicules
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="luxury" size="xl" className="w-full sm:w-auto">
                Vendre ma voiture
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-glow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
