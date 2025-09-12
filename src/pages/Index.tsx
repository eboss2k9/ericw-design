import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Truck, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-sportswear.jpg";

const Index = () => {
  // Featured products for homepage
  const featuredProducts = [
    { id: "1", name: "Premium Athletic Tank", category: "Tops and Shorts", price: 45, image: "/placeholder.svg", description: "High-performance moisture-wicking tank top for intense workouts" },
    { id: "2", name: "Luxury Hoodie", category: "Hoodies and Sweaters", price: 120, image: "/placeholder.svg", description: "Premium cotton blend hoodie with luxury finish" },
    { id: "3", name: "Performance Joggers", category: "Joggers", price: 85, image: "/placeholder.svg", description: "Tapered joggers with moisture management technology" },
    { id: "4", name: "Training Sneakers", category: "Shoes", price: 140, image: "/placeholder.svg", description: "High-performance training shoes with superior grip" },
  ];

  const categories = [
    { name: "Tops and Shorts", count: "12+ Items" },
    { name: "Long Sleeves", count: "8+ Items" },
    { name: "Hoodies and Sweaters", count: "10+ Items" },
    { name: "Joggers", count: "6+ Items" },
    { name: "Shoes", count: "15+ Items" },
    { name: "Kits", count: "5+ Items" },
    { name: "Toddlers/Infants", count: "8+ Items" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Sportswear Collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-luxury-dark/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
            B2B Luxury Sportswear
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            DECRIS
            <span className="block text-3xl md:text-4xl font-light tracking-wide">
              LUXURY SPORTCLOTHING
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Premium athletic wear designed for performance, crafted for luxury. 
            Wholesale solutions for retailers and businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="bg-white text-luxury-dark hover:bg-white/90">
              View Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:text-black hover:bg-transparent">
              Get B2B Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-luxury-dark mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Finest materials and craftsmanship</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-luxury-dark mb-2">Fast Shipping</h3>
              <p className="text-muted-foreground text-sm">Quick delivery for bulk orders</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-luxury-dark mb-2">Award Winning</h3>
              <p className="text-muted-foreground text-sm">Industry recognized designs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-luxury-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-luxury-dark mb-2">B2B Focus</h3>
              <p className="text-muted-foreground text-sm">Dedicated business solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our comprehensive range of luxury sportswear across all categories, 
              from athletic wear to casual comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {categories.map((category, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild size="lg">
              <Link to="/products">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our best-selling items that combine performance, style, and luxury craftsmanship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-luxury-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Decris?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of businesses worldwide who trust Decris for their premium sportswear needs. 
            Get personalized B2B pricing and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:text-black hover:bg-transparent" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
