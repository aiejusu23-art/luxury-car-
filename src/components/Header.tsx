import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Luxury Car Gabon Showcase</span>
            <img
              className="h-8 w-auto"
              src="/src/assets/logo.png"
              alt="Luxury Car Gabon Showcase Logo"
            />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Accueil
            </Link>
            <Link to="/catalog" className="text-foreground hover:text-primary transition-colors">
              Véhicules
            </Link>
            <Link to="/sell" className="text-foreground hover:text-primary transition-colors">
              Vendre
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+24100000000" className="text-foreground hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+241 00 00 00 00</span>
            </a>
            <Button variant="premium" size="lg">
              Contactez-nous
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-foreground hover:text-primary transition-colors py-2">
                Accueil
              </Link>
              <Link to="/catalog" className="text-foreground hover:text-primary transition-colors py-2">
                Véhicules
              </Link>
              <Link to="/sell" className="text-foreground hover:text-primary transition-colors py-2">
                Vendre
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors py-2">
                Contact
              </Link>
              <Button variant="premium" className="w-full">
                Contactez-nous
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
