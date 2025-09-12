import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
            About Decris Luxury Sportclothing
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Crafting premium athletic wear that combines performance, comfort, and luxury 
            for the modern athlete and fashion-conscious individual.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Company Story */}
          <div>
            <h2 className="text-3xl font-semibold text-luxury-dark mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded with a vision to revolutionize the sportswear industry, Decris Luxury 
                Sportclothing emerged from a passion for creating athletic wear that doesn't 
                compromise on style or performance. Our journey began with a simple belief: 
                athletes and active individuals deserve clothing that performs as beautifully 
                as it looks.
              </p>
              <p>
                From our humble beginnings, we've grown into a trusted name in luxury 
                sportswear, serving businesses and individuals who demand excellence in 
                every thread. Our commitment to quality craftsmanship and innovative design 
                has made us a preferred partner for retailers, fitness centers, and corporate 
                clients worldwide.
              </p>
              <p>
                Today, Decris continues to push boundaries in athletic wear, combining 
                cutting-edge fabric technology with timeless design principles to create 
                pieces that transition seamlessly from workout to lifestyle.
              </p>
            </div>
          </div>

          {/* Company Values */}
          <div>
            <h2 className="text-3xl font-semibold text-luxury-dark mb-6">Our Values</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-luxury-dark mb-2">Quality First</h3>
                  <p className="text-muted-foreground">
                    We use only the finest materials and employ rigorous quality control 
                    processes to ensure every piece meets our exacting standards.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-luxury-dark mb-2">Innovation</h3>
                  <p className="text-muted-foreground">
                    Constantly pushing the envelope in fabric technology and design to 
                    deliver sportswear that enhances performance and comfort.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-luxury-dark mb-2">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Committed to responsible manufacturing practices and sustainable 
                    materials that protect our planet for future generations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Company Culture */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-luxury-dark mb-8 text-center">
            Our Culture
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-dark">T</span>
                </div>
                <h3 className="font-semibold text-luxury-dark mb-2">Team Excellence</h3>
                <p className="text-muted-foreground">
                  Our diverse team of designers, engineers, and craftspeople work 
                  collaboratively to bring innovative ideas to life.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-dark">C</span>
                </div>
                <h3 className="font-semibold text-luxury-dark mb-2">Customer Focus</h3>
                <p className="text-muted-foreground">
                  Every decision we make is guided by our commitment to exceeding 
                  customer expectations and building lasting relationships.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-luxury-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-luxury-dark">I</span>
                </div>
                <h3 className="font-semibold text-luxury-dark mb-2">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparency, honesty, and ethical practices form the foundation 
                  of all our business relationships and operations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-muted rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-luxury-dark mb-8 text-center">
            By the Numbers
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-luxury-dark mb-2">500+</div>
              <div className="text-muted-foreground">B2B Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-dark mb-2">50K+</div>
              <div className="text-muted-foreground">Products Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-dark mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-luxury-dark mb-2">99%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;