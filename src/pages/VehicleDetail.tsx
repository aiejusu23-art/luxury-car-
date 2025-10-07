import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Gauge, Fuel, Cog, Palette, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-car.jpg";

const VehicleDetail = () => {
  const { id } = useParams();

  // Mock data - dans une vraie app, ceci viendrait d'une API
  const vehicle = {
    id: id,
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    price: 35000000,
    mileage: 15000,
    fuel: "Essence",
    transmission: "Automatique",
    color: "Noir Obsidienne",
    images: [heroImage, heroImage, heroImage],
    description: "Mercedes-Benz S-Class en excellent état. Véhicule entretenu en concession officielle avec historique complet. Intérieur cuir Nappa, système audio Burmester, toit panoramique, sièges massants, caméra 360°.",
    features: [
      "Climatisation automatique",
      "Sièges en cuir",
      "Système de navigation",
      "Caméra de recul",
      "Capteurs de stationnement",
      "Régulateur de vitesse adaptatif",
      "Assistance au maintien de voie",
      "Toit panoramique",
      "Système audio premium",
      "Sièges chauffants et ventilés"
    ]
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/catalog" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <div className="relative h-96 rounded-lg overflow-hidden border border-border">
                <img 
                  src={vehicle.images[0]} 
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {vehicle.images.slice(0, 3).map((img, index) => (
                  <div key={index} className="relative h-24 rounded-lg overflow-hidden border border-border cursor-pointer hover-glow">
                    <img 
                      src={img} 
                      alt={`${vehicle.brand} ${vehicle.model} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2 text-foreground">
                  {vehicle.brand} {vehicle.model}
                </h1>
                <p className="text-4xl font-bold gold-text mb-6">
                  {vehicle.price.toLocaleString('fr-FR')} FCFA
                </p>
              </div>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Année</p>
                        <p className="font-semibold text-foreground">{vehicle.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Gauge className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Kilométrage</p>
                        <p className="font-semibold text-foreground">{vehicle.mileage.toLocaleString('fr-FR')} km</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Fuel className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Carburant</p>
                        <p className="font-semibold text-foreground">{vehicle.fuel}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Cog className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Transmission</p>
                        <p className="font-semibold text-foreground">{vehicle.transmission}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 col-span-2">
                      <Palette className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-muted-foreground">Couleur</p>
                        <p className="font-semibold text-foreground">{vehicle.color}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" size="lg" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Appeler
                </Button>
                <Button variant="luxury" size="lg" className="flex-1">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {vehicle.description}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Équipements</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetail;
