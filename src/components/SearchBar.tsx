import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-elegant">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Select>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="Marque" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="mercedes">Mercedes-Benz</SelectItem>
            <SelectItem value="bmw">BMW</SelectItem>
            <SelectItem value="range">Range Rover</SelectItem>
            <SelectItem value="porsche">Porsche</SelectItem>
            <SelectItem value="audi">Audi</SelectItem>
          </SelectContent>
        </Select>

        <Input 
          placeholder="Modèle" 
          className="bg-background border-border"
        />

        <Select>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="Année" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="2024">2024</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="bg-background border-border">
            <SelectValue placeholder="Prix max" />
          </SelectTrigger>
          <SelectContent className="bg-popover border-border">
            <SelectItem value="20m">20 M FCFA</SelectItem>
            <SelectItem value="30m">30 M FCFA</SelectItem>
            <SelectItem value="40m">40 M FCFA</SelectItem>
            <SelectItem value="50m">50 M FCFA</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="premium" size="lg" className="w-full">
          <Search className="w-4 h-4 mr-2" />
          Rechercher
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
