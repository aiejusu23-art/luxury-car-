import { Shield, Award, Users, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantie Qualité",
    description: "Tous nos véhicules sont rigoureusement inspectés et certifiés"
  },
  {
    icon: Award,
    title: "Sélection Premium",
    description: "Uniquement des marques de luxe reconnues mondialement"
  },
  {
    icon: Users,
    title: "Service VIP",
    description: "Un accompagnement personnalisé du début à la fin"
  },
  {
    icon: CheckCircle,
    title: "Transparence",
    description: "Historique complet et traçabilité de chaque véhicule"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Pourquoi choisir <span className="gold-text">Luxury Car Gabon</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une expérience d'achat automobile exceptionnelle, basée sur la confiance et l'excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
