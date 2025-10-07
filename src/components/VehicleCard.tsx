import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Gauge, Fuel } from "lucide-react";

interface VehicleCardProps {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  image: string;
}

const VehicleCard = ({ id, brand, model, year, price, mileage, fuel, image }: VehicleCardProps) => {
  return (
    <Card className="overflow-hidden hover-glow group bg-card border-border">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {brand} {model}
          </h3>
          <p className="text-3xl font-bold gold-text">
            {price.toLocaleString('fr-FR')} FCFA
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Gauge className="w-4 h-4" />
            <span>{mileage.toLocaleString('fr-FR')} km</span>
          </div>
          <div className="flex items-center gap-2">
            <Fuel className="w-4 h-4" />
            <span>{fuel}</span>
          </div>
        </div>

        <Link to={`/vehicle/${id}`}>
          <Button variant="luxury" className="w-full">
            Voir les détails
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;
