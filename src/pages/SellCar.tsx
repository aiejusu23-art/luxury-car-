import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SellCar = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    brand: "",
    model: "",
    year: "",
    mileage: "",
    price: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Demande envoyée !",
      description: "Nous vous contacterons sous 24h pour l'évaluation de votre véhicule.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Vendez votre <span className="gold-text">voiture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Un processus simple, transparent et rapide. Obtenez la meilleure offre pour votre véhicule de luxe.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { step: "1", title: "Remplissez le formulaire", desc: "Décrivez votre véhicule en quelques minutes" },
                { step: "2", title: "Évaluation gratuite", desc: "Nos experts évaluent votre véhicule" },
                { step: "3", title: "Recevez votre offre", desc: "Une proposition claire sous 24h" }
              ].map((item, index) => (
                <Card key={index} className="bg-card border-border text-center animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold gold-text">{item.step}</span>
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Informations sur votre véhicule</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Nom complet *
                      </label>
                      <Input 
                        required
                        className="bg-background border-border"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Téléphone *
                      </label>
                      <Input 
                        required
                        type="tel"
                        className="bg-background border-border"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email *
                    </label>
                    <Input 
                      required
                      type="email"
                      className="bg-background border-border"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Marque *
                      </label>
                      <Select value={formData.brand} onValueChange={(value) => setFormData({...formData, brand: value})}>
                        <SelectTrigger className="bg-background border-border">
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent className="bg-popover border-border">
                          <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
                          <SelectItem value="bmw">BMW</SelectItem>
                          <SelectItem value="range">Range Rover</SelectItem>
                          <SelectItem value="porsche">Porsche</SelectItem>
                          <SelectItem value="audi">Audi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Modèle *
                      </label>
                      <Input 
                        required
                        className="bg-background border-border"
                        value={formData.model}
                        onChange={(e) => setFormData({...formData, model: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Année *
                      </label>
                      <Input 
                        required
                        type="number"
                        className="bg-background border-border"
                        value={formData.year}
                        onChange={(e) => setFormData({...formData, year: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Kilométrage *
                      </label>
                      <Input 
                        required
                        type="number"
                        placeholder="km"
                        className="bg-background border-border"
                        value={formData.mileage}
                        onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Prix souhaité (FCFA)
                    </label>
                    <Input 
                      type="number"
                      className="bg-background border-border"
                      value={formData.price}
                      onChange={(e) => setFormData({...formData, price: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Description / État du véhicule
                    </label>
                    <Textarea 
                      className="bg-background border-border min-h-32"
                      placeholder="Décrivez l'état général, les options, l'historique d'entretien..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>

                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">
                      Ajoutez des photos de votre véhicule
                    </p>
                    <p className="text-xs text-muted-foreground">
                      (Optionnel - 10 photos maximum)
                    </p>
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SellCar;
