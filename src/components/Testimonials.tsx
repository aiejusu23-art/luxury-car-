import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Jean-Pierre M.",
    vehicle: "Mercedes-Benz S-Class",
    rating: 5,
    comment: "Service exceptionnel ! J'ai trouvé la voiture de mes rêves en un temps record. L'équipe est professionnelle et à l'écoute."
  },
  {
    name: "Marie-Claire D.",
    vehicle: "BMW 7 Series",
    rating: 5,
    comment: "Transparence totale sur l'historique du véhicule. Le processus d'achat était simple et rassurant. Je recommande vivement !"
  },
  {
    name: "Antoine K.",
    vehicle: "Range Rover Sport",
    rating: 5,
    comment: "Une expérience VIP du début à la fin. La qualité des véhicules proposés est irréprochable. Merci à toute l'équipe !"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos clients <span className="gold-text">témoignent</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Découvrez les expériences de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover-glow animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.comment}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.vehicle}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
