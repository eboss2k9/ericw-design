import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowRight, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      id: "styletrail",
      title: "StyleTrail",
      client: "StyleTrail, LLC",
      about: "StyleTrail is an online marketplace that helps beauty space owners monetize their available space and provides professional work environments to barbers, hair stylists, and all other beauty professionals.",
      platform: "Web Application",
      industry: "Beauty",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: "workbench",
      title: "Workbench Platform",
      client: "Workbench Platform, Inc",
      about: "Workbench's content platform packages your content into custom, engaging learning and get-active experiences that drive continuously fresh content and value to education and consumer learners, makers, and doers.",
      platform: "Web Application",
      industry: "STEM, Education",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: "polyplexus",
      title: "Polyplexus",
      client: "Balti Virtual",
      about: "Polyplexus is an online platform under development in the GS3 program. The goal of Polyplexus is to reshape today's approaches to science by effectively and efficiently engaging cross-disciplinary researchers and research sponsors to dramatically accelerate the process of non-obvious hypothesis generation.",
      platform: "Web Application",
      industry: "Augmented Reality, Virtual Reality",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: "under-armor",
      title: "Under Armor",
      client: "Under Armour",
      about: "The Holotats app produces temporary tattoos in an Augmented Reality format that come to life using a free app (iOS & Android) that inspires creativity and enhances imagination!",
      platform: "iOS, Android",
      industry: "Augmented Reality, Virtual Reality",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    {
      id: "cjams",
      title: "CJAMS",
      client: "DHS",
      about: "The Cjams project is a complete overhaul of the current DHS process for the state of Maryland including all DHS agencies(Foster Care, Adult Services, Child Welfare, Licensing and Monitoring).",
      platform: "Web Application",
      industry: "Government",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                WELCOME
              </h1>
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                I'm Eric D. Warner a UX Designer and Product design Leader.
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                In my 17 years of experience I have designed User Interfaces and experiences, planned, supported, and implemented features and roadmaps, and led cross-functional teams at startup companies and large companies such as DHS (Department of Human Services) and Under Armour.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Resume.pdf
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Resume.docx
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Eric D. Warner" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <p className="text-lg text-muted-foreground mb-8">
            My resume can be found in PDF and Word format below. I can provide any references if needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Resume.pdf
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="h-4 w-4" />
              Resume.docx
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my work across various industries and platforms, from beauty marketplaces to government systems.
            </p>
          </div>

          <div className="space-y-16">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden">
                <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`p-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <h3 className="text-3xl font-bold text-foreground mb-4">{project.title}</h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Client</h4>
                          <p className="text-muted-foreground">{project.client}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">About</h4>
                          <p className="text-muted-foreground leading-relaxed">{project.about}</p>
                        </div>
                        <div className="flex gap-6">
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Platform</h4>
                            <Badge variant="secondary">{project.platform}</Badge>
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">Industry</h4>
                            <Badge variant="outline">{project.industry}</Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <Button className="gap-2">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <div className="grid grid-cols-2 gap-4 p-8">
                      {project.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="aspect-[4/3] bg-muted rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${project.title} screenshot ${imgIndex + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Get in touch</h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="aspect-[16/10] bg-background rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197642.23823012237!2d-76.76058314852548!3d39.284622471581436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20MD!5e0!3m2!1sen!2sus!4v1625863122021!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{border: 0}} 
                allowFullScreen 
                loading="lazy"
                className="rounded-lg"
              />
            </div>
            
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Email</h3>
                  </div>
                  <a 
                    href="mailto:e.warner86@gmail.com?subject=Let's Chat!" 
                    className="text-primary hover:underline text-lg"
                  >
                    e.warner86@gmail.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Phone</h3>
                  </div>
                  <a 
                    href="tel:2677016209" 
                    className="text-primary hover:underline text-lg"
                  >
                    (267) 701-6209
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Location</h3>
                  </div>
                  <span className="text-lg text-muted-foreground">Baltimore, Maryland</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ExternalLink className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">Elsewhere</h3>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://twitter.com/eboss2k9" className="text-primary hover:underline">Twitter</a>
                    <a href="https://www.facebook.com/e.warner86" className="text-primary hover:underline">Facebook</a>
                    <a href="https://www.linkedin.com/in/warnereric/" className="text-primary hover:underline">LinkedIn</a>
                    <a href="https://github.com/eboss2k9" className="text-primary hover:underline">GitHub</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © Eric Warner's Creative Studio, LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;