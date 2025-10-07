import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import VehicleCard from "@/components/VehicleCard";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import carBmw from "@/assets/car-bmw.jpg";
import carRange from "@/assets/car-range.jpg";
import carPorsche from "@/assets/car-porsche.jpg";
import heroImage from "@/assets/hero-car.jpg";

const featuredVehicles = [
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
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Search Section */}
      <section className="py-12 -mt-20 relative z-20">
        <div className="container mx-auto px-4">
          <SearchBar />
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Véhicules <span className="gold-text">populaires</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez notre sélection de véhicules premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredVehicles.map((vehicle, index) => (
              <div 
                key={vehicle.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <VehicleCard {...vehicle} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
