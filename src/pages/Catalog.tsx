import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VehicleCard from "@/components/VehicleCard";
import SearchBar from "@/components/SearchBar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import carBmw from "@/assets/car-bmw.jpg";
import carRange from "@/assets/car-range.jpg";
import carPorsche from "@/assets/car-porsche.jpg";
import heroImage from "@/assets/hero-car.jpg";

const vehicles = [
  {
    id: 1,
    brand: "Mercedes-Benz",
    model: "S-Class",
    year: 2022,
    price: 35000000,
    mileage: 15000,
    fuel: "Essence",
    image: heroImage
  },
  {
    id: 2,
    brand: "BMW",
    model: "Série 7",
    year: 2023,
    price: 42000000,
    mileage: 8000,
    fuel: "Hybride",
    image: carBmw
  },
  {
    id: 3,
    brand: "Range Rover",
    model: "Sport",
    year: 2022,
    price: 38000000,
    mileage: 12000,
    fuel: "Diesel",
    image: carRange
  },
  {
    id: 4,
    brand: "Porsche",
    model: "911",
    year: 2023,
    price: 55000000,
    mileage: 5000,
    fuel: "Essence",
    image: carPorsche
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "GLE",
    year: 2023,
    price: 40000000,
    mileage: 10000,
    fuel: "Diesel",
    image: heroImage
  },
  {
    id: 6,
    brand: "BMW",
    model: "X7",
    year: 2022,
    price: 45000000,
    mileage: 18000,
    fuel: "Essence",
    image: carBmw
  }
];

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-background to-card/50">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Notre <span className="gold-text">catalogue</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in">
            {vehicles.length} véhicules de luxe disponibles
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Catalog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-semibold mb-6 text-foreground">Filtres</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Marque
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Toutes" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="all">Toutes</SelectItem>
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
                      Prix max (FCFA)
                    </label>
                    <Slider defaultValue={[50000000]} max={100000000} step={5000000} />
                    <p className="text-xs text-muted-foreground mt-2">
                      Jusqu'à 50 000 000 FCFA
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Kilométrage max
                    </label>
                    <Slider defaultValue={[50000]} max={200000} step={10000} />
                    <p className="text-xs text-muted-foreground mt-2">
                      Jusqu'à 50 000 km
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Année
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Toutes" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="all">Toutes</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2021">2021</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Carburant
                    </label>
                    <Select>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue placeholder="Tous" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        <SelectItem value="all">Tous</SelectItem>
                        <SelectItem value="essence">Essence</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="hybride">Hybride</SelectItem>
                        <SelectItem value="electrique">Électrique</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </aside>

            {/* Vehicle Grid */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {vehicles.map((vehicle, index) => (
                  <div 
                    key={vehicle.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <VehicleCard {...vehicle} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalog;
