import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Tops and Shorts",
    "Long Sleeves",
    "Hoodies and Sweaters",
    "Joggers",
    "Shoes",
    "Kits",
    "Toddlers/Infants"
  ];

  // Mock products data - replace with real data later
  const products = [
    { id: "1", name: "Premium Athletic Tank", category: "Tops and Shorts", price: 45, image: "/placeholder.svg", description: "High-performance moisture-wicking tank top for intense workouts" },
    { id: "2", name: "Performance Shorts", category: "Tops and Shorts", price: 55, image: "/placeholder.svg", description: "Lightweight shorts with 4-way stretch technology" },
    { id: "3", name: "Long Sleeve Pro Tee", category: "Long Sleeves", price: 65, image: "/placeholder.svg", description: "Premium long sleeve with UV protection and quick-dry fabric" },
    { id: "4", name: "Luxury Hoodie", category: "Hoodies and Sweaters", price: 120, image: "/placeholder.svg", description: "Premium cotton blend hoodie with luxury finish" },
    { id: "5", name: "Performance Joggers", category: "Joggers", price: 85, image: "/placeholder.svg", description: "Tapered joggers with moisture management technology" },
    { id: "6", name: "Training Sneakers", category: "Shoes", price: 140, image: "/placeholder.svg", description: "High-performance training shoes with superior grip" },
    { id: "7", name: "Complete Training Kit", category: "Kits", price: 180, image: "/placeholder.svg", description: "Full training set including top, shorts, and accessories" },
    { id: "8", name: "Toddler Sport Set", category: "Toddlers/Infants", price: 35, image: "/placeholder.svg", description: "Soft cotton sport set designed for active toddlers" },
    // Add more products to reach 25-30...
    { id: "9", name: "Compression Top", category: "Tops and Shorts", price: 50, image: "/placeholder.svg", description: "Advanced compression technology for muscle support" },
    { id: "10", name: "Thermal Long Sleeve", category: "Long Sleeves", price: 70, image: "/placeholder.svg", description: "Thermal regulation technology for cold weather training" },
    { id: "11", name: "Zip-Up Sweater", category: "Hoodies and Sweaters", price: 95, image: "/placeholder.svg", description: "Elegant zip-up sweater for casual and athletic wear" },
    { id: "12", name: "Track Pants", category: "Joggers", price: 75, image: "/placeholder.svg", description: "Classic track pants with modern performance features" },
    { id: "13", name: "Running Shoes", category: "Shoes", price: 160, image: "/placeholder.svg", description: "Lightweight running shoes with advanced cushioning" },
    { id: "14", name: "Team Kit Pro", category: "Kits", price: 220, image: "/placeholder.svg", description: "Professional team kit with customization options" },
    { id: "15", name: "Infant Onesie Set", category: "Toddlers/Infants", price: 25, image: "/placeholder.svg", description: "Comfortable onesie set for active infants" },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-luxury-dark mb-2">All Products</h1>
          <p className="text-muted-foreground">
            Discover our complete collection of luxury sportswear designed for performance and style.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Button variant="outline" className="md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filters
          </Button>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;