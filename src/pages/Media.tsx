import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Media = () => {
  const mediaFeatures = [
    {
      title: "Baltimore Magazine",
      description: "35 of Baltimore's most unstoppable beauty products and professionals",
      url: "https://www.baltimoremagazine.com/section/styleshopping/best-baltimore-beauty-products-salons-spas/"
    },
    {
      title: "Technical.ly Baltimore",
      description: "Baltipreneurs accelerator and creative tech innovation",
      url: "https://technical.ly/baltimore/2019/11/13/loyola-first-baltipreneurs-accelerator-cohort/"
    },
    {
      title: "Technical.ly Delaware", 
      description: "Pivot creative tech startup app innovation",
      url: "https://technical.ly/delaware/2019/04/18/pivot-creative-tech-styletrail-startup-app-destiny-gordon/"
    },
    {
      title: "Authority Magazine",
      description: "Leadership interview on avoiding micromanaging for company success",
      url: "https://medium.com/authority-magazine/how-avoiding-micromanaging-can-help-your-company-thrive-6d7ee8206774"
    },
    {
      title: "Black Enterprise",
      description: "Featured quotes for inspiration and motivation",
      url: "https://www.blackenterprise.com/32-quotes-to-get-inspired/"
    },
    {
      title: "Black News",
      description: "Black entrepreneur launches new beauty app innovation",
      url: "https://www.google.com/amp/www.blacknews.com/news/black-entrepreneur-launches-new-beauty-app-that-allows-you-to-live-like-a-celebrity-stylist/amp/"
    },
    {
      title: "Thrive Global",
      description: "Interview on leadership and company culture transformation", 
      url: "https://thriveglobal.com/stories/how-avoiding-micromanaging-can-help-your-company-thrive/"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-luxury-dark text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Media Coverage
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Featured across leading publications and recognized for innovation in business, technology, and entrepreneurship.
          </p>
        </div>
      </section>

      {/* Media Coverage Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-luxury-dark mb-3 group-hover:text-luxury-accent transition-colors text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <Button variant="outline" size="sm" asChild>
                    <a href={feature.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;