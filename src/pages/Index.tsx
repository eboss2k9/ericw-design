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
      <section className="relative h-[100vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Luxury Sportswear Collection"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-luxury-dark/40"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Badge variant="secondary" className="mb-4 sm:mb-6 bg-white/10 text-white border-white/20 text-xs sm:text-sm">
            B2B Luxury Sportswear
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            DECRIS
            <span className="block text-2xl sm:text-3xl md:text-4xl font-light tracking-wide mt-2">
              LUXURY SPORTCLOTHING
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Premium athletic wear designed for performance, crafted for luxury. 
            Wholesale solutions for retailers and businesses worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="default" className="bg-white text-luxury-dark hover:bg-white/90 w-full sm:w-auto">
              View Catalog
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:text-black hover:bg-transparent w-full sm:w-auto">
              Get B2B Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Product Categories
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Explore our comprehensive range of luxury sportswear across all categories, 
              from athletic wear to casual comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
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
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link to="/products">
                View All Categories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Discover our best-selling items that combine performance, style, and luxury craftsmanship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Found Around the Web Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Found Around the Web
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Featured in publications and recognized by industry leaders for innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Baltimore Magazine
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  35 of Baltimore's most unstoppable beauty products and professionals
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.baltimoremagazine.com/section/styleshopping/best-baltimore-beauty-products-salons-spas/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Technical.ly
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Baltipreneurs accelerator and creative tech innovation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://technical.ly/baltimore/2019/11/13/loyola-first-baltipreneurs-accelerator-cohort/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Authority Magazine
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Leadership interview on avoiding micromanaging for company success
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://medium.com/authority-magazine/how-avoiding-micromanaging-can-help-your-company-thrive-6d7ee8206774" target="_blank" rel="noopener noreferrer">
                    Read Interview
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Black Enterprise
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Featured quotes for inspiration and motivation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.blackenterprise.com/32-quotes-to-get-inspired/" target="_blank" rel="noopener noreferrer">
                    Read Feature
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Afrotech
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Black founders giving advice about fundraising and entrepreneurship
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://afrotech.com/black-founders-give-black-founders-advice-about-fundraising/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Thrive Global
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Interview on leadership and company culture transformation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://thriveglobal.com/stories/how-avoiding-micromanaging-can-help-your-company-thrive/" target="_blank" rel="noopener noreferrer">
                    Read Interview
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://linktr.ee/eboss2k9" target="_blank" rel="noopener noreferrer">
                View All Links
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Media Coverage Section */}
      <section id="media" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-luxury-dark mb-4">
              Media Coverage
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              Featured across leading publications and recognized for innovation in business and technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Baltimore Magazine
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  35 of Baltimore's most unstoppable beauty products and professionals
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.baltimoremagazine.com/section/styleshopping/best-baltimore-beauty-products-salons-spas/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Technical.ly Baltimore
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Baltipreneurs accelerator and creative tech innovation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://technical.ly/baltimore/2019/11/13/loyola-first-baltipreneurs-accelerator-cohort/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Technical.ly Delaware
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Pivot creative tech startup app innovation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://technical.ly/delaware/2019/04/18/pivot-creative-tech-styletrail-startup-app-destiny-gordon/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Authority Magazine
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Leadership interview on avoiding micromanaging for company success
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://medium.com/authority-magazine/how-avoiding-micromanaging-can-help-your-company-thrive-6d7ee8206774" target="_blank" rel="noopener noreferrer">
                    Read Interview
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Black Enterprise
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Featured quotes for inspiration and motivation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.blackenterprise.com/32-quotes-to-get-inspired/" target="_blank" rel="noopener noreferrer">
                    Read Feature
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Black News
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Black entrepreneur launches new beauty app innovation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.google.com/amp/www.blacknews.com/news/black-entrepreneur-launches-new-beauty-app-that-allows-you-to-live-like-a-celebrity-stylist/amp/" target="_blank" rel="noopener noreferrer">
                    Read Article
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2 group-hover:text-luxury-accent transition-colors">
                  Thrive Global
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Interview on leadership and company culture transformation
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://thriveglobal.com/stories/how-avoiding-micromanaging-can-help-your-company-thrive/" target="_blank" rel="noopener noreferrer">
                    Read Interview
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-luxury-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Decris?
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
            Join hundreds of businesses worldwide who trust Decris for their premium sportswear needs. 
            Get personalized B2B pricing and dedicated support.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-black hover:text-black hover:bg-transparent w-full sm:w-auto" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
