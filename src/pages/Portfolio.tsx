import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Users, 
  TrendingUp, 
  Award,
  Zap,
  Target,
  Clock,
  Sparkles
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import cjamsNarrative from "@/assets/cjams_narrative.jpg";
import cjamsCertificate from "@/assets/cjams_certificate.jpg";
import cjamsDashboard from "@/assets/cjams_dashboard.jpg";
import polyplexusConjecture from "@/assets/polyplexus_conjecture.png";
import polyplexusProfile from "@/assets/polyplexus_profile.png";
import polyplexusSignin from "@/assets/polyplexus_signin.png";
import styletrailHome from "@/assets/styletrail_home.jpg";
import styletrailListing from "@/assets/styletrail_listing.jpg";
import styletrailBookings from "@/assets/styletrail_bookings.jpg";
import uaCameraScreen from "@/assets/ua_camera_screen.png";
import uaGlobalAlert from "@/assets/ua_global_alert.png";
import uaOnboarding from "@/assets/ua_onboarding.png";
import uaMenuPopup from "@/assets/ua_menu_popup.png";
import workbenchHomepage from "@/assets/workbench_homepage.jpg";
import workbenchPartners from "@/assets/workbench_partners.jpg";
import workbenchWhatWeDo from "@/assets/workbench_whatwedo.jpg";

const Portfolio = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const impactStats = [
    { label: "User Satisfaction", value: "94%", icon: Users },
    { label: "Conversion Increase", value: "67%", icon: TrendingUp },
    { label: "Years Experience", value: "17+", icon: Award },
    { label: "Projects Delivered", value: "50+", icon: Zap }
  ];

  const projects = [
    {
      id: "styletrail",
      title: "StyleTrail Marketplace",
      client: "StyleTrail, LLC",
      about: "Revolutionary beauty space marketplace connecting professionals with available workspaces. Led complete UX overhaul resulting in 300% increase in bookings.",
      platform: "Web Application",
      industry: "Beauty & Wellness",
      images: [styletrailHome, styletrailListing, styletrailBookings],
      impact: {
        userGrowth: "300%",
        satisfaction: "4.8/5",
        revenue: "$2.4M ARR"
      },
      tags: ["User Research", "Marketplace Design", "Mobile UX"],
      featured: true
    },
    {
      id: "workbench",
      title: "Workbench Learning Platform",
      client: "Workbench Platform, Inc",
      about: "Transformed educational content delivery through engaging, personalized learning experiences. Designed adaptive learning paths that increased completion rates by 85%.",
      platform: "Web Application",
      industry: "EdTech & STEM",
      images: [workbenchHomepage, workbenchPartners, workbenchWhatWeDo],
      impact: {
        engagement: "85%",
        retention: "78%",
        learningEfficiency: "60%"
      },
      tags: ["Educational UX", "Adaptive Design", "Analytics"]
    },
    {
      id: "polyplexus",
      title: "Polyplexus Research Platform",
      client: "Balti Virtual",
      about: "Pioneered cross-disciplinary research collaboration platform under GS3 program. Created intuitive workflows that accelerated hypothesis generation by 40%.",
      platform: "Web Application",
      industry: "Research & Science",
      images: [polyplexusConjecture, polyplexusProfile, polyplexusSignin],
      impact: {
        researchSpeed: "40%",
        collaboration: "250%",
        publications: "65%"
      },
      tags: ["Research UX", "Collaboration Tools", "Data Visualization"]
    },
    {
      id: "under-armor",
      title: "Under Armour HoloTats AR",
      client: "Under Armour",
      about: "Designed immersive AR tattoo experience that brings temporary tattoos to life. Created magical moments that drove 500K+ app downloads and viral social engagement.",
      platform: "iOS & Android",
      industry: "Sports & AR",
      images: [uaCameraScreen, uaGlobalAlert, uaOnboarding, uaMenuPopup],
      impact: {
        downloads: "500K+",
        engagement: "92%",
        socialShares: "2.1M"
      },
      tags: ["AR/VR Design", "Mobile UX", "Brand Experience"],
      featured: true
    },
    {
      id: "cjams",
      title: "CJAMS Government System",
      client: "Minnesota DHS",
      about: "Complete redesign of critical government services affecting thousands of families. Streamlined complex workflows resulting in 50% reduction in processing time.",
      platform: "Web Application",
      industry: "Government & Public Service",
      images: [cjamsDashboard, cjamsNarrative, cjamsCertificate],
      impact: {
        efficiency: "50%",
        userSatisfaction: "89%",
        errorReduction: "73%"
      },
      tags: ["Government UX", "Accessibility", "Service Design"]
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navigation />
      
      {/* Hero Section with EWCS Brand Colors */}
      <section className="relative min-h-screen flex items-center px-4 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="absolute inset-0 bg-brand-secondary/30"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-white text-sm font-medium">Available for New Projects</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
                UX that 
                <span className="bg-gradient-to-r from-brand-primary to-white bg-clip-text text-transparent">
                  {" "}drives results
                </span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                17 years crafting user experiences that don't just look good — they deliver measurable business impact.
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {impactStats.map((stat, index) => (
                  <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <stat.icon className="h-6 w-6 text-brand-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-brand-secondary hover:bg-white/90 shadow-lg">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-white hover:bg-white hover:text-brand-secondary"
                >
                  View Case Studies
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/placeholder.svg" 
                  alt="Eric D. Warner - UX Design Leader" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-brand-primary rounded-full p-3 shadow-lg animate-pulse">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-brand-primary rounded-full p-3 shadow-lg animate-pulse" style={{animationDelay: '1s'}}>
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-background to-muted">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              My Design Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data-driven design thinking that turns complex problems into intuitive solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Research & Discovery", desc: "Deep user research, competitive analysis, and stakeholder alignment" },
              { step: "02", title: "Strategy & Planning", desc: "Information architecture, user flows, and technical requirements" },
              { step: "03", title: "Design & Prototype", desc: "Wireframes, high-fidelity designs, and interactive prototypes" },
              { step: "04", title: "Test & Iterate", desc: "User testing, analytics review, and continuous optimization" }
            ].map((process, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-brand-primary">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold text-brand-primary mb-4 group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{process.title}</h3>
                  <p className="text-muted-foreground">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Case studies showcasing measurable impact across industries
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl ${
                  project.featured ? 'ring-2 ring-brand-primary/20' : ''
                }`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      {project.featured && (
                        <Badge className="bg-brand-primary text-white">Featured</Badge>
                      )}
                      <Badge variant="outline">{project.platform}</Badge>
                      <Badge variant="secondary">{project.industry}</Badge>
                    </div>
                    
                    <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">Client</h4>
                        <p className="text-muted-foreground">{project.client}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2 text-lg">Challenge & Solution</h4>
                        <p className="text-muted-foreground leading-relaxed text-lg">{project.about}</p>
                      </div>
                    </div>

                    {/* Impact Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-8 p-4 bg-muted rounded-lg">
                      {Object.entries(project.impact).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-brand-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Link to={`/case-studies/${project.id}`}>
                      <Button 
                        className="self-start group-hover:shadow-lg transition-all"
                      >
                        <Clock className="h-4 w-4 mr-2" />
                        View Full Case Study
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>

                  {/* Images */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-gradient-to-br from-muted to-muted/50`}>
                    <div className="grid grid-cols-2 gap-4 p-8 h-full">
                      {project.images.map((image, imgIndex) => (
                        <div 
                          key={imgIndex} 
                          className={`rounded-lg overflow-hidden shadow-md transition-all duration-500 ${
                            hoveredProject === project.id ? 'hover:scale-105 hover:shadow-xl' : ''
                          } ${imgIndex === 0 ? 'col-span-2' : ''}`}
                          style={{
                            aspectRatio: imgIndex === 0 ? '16/10' : '4/3'
                          }}
                        >
                          <img 
                            src={image} 
                            alt={`${project.title} interface ${imgIndex + 1}`}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
      <section className="py-20 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Ready to transform your user experience? Let's discuss your project.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  content: "e.warner86@gmail.com",
                  href: "mailto:e.warner86@gmail.com?subject=Let's Collaborate!",
                  description: "Typically respond within 24 hours"
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "(267) 701-6209",
                  href: "tel:2677016209",
                  description: "Available for calls Mon-Fri 9AM-5PM EST"
                },
                {
                  icon: MapPin,
                  title: "Location",
                  content: "Maple Grove, Minnesota",
                  description: "Open to remote & hybrid opportunities"
                }
              ].map((contact, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">{contact.title}</h3>
                      {contact.href ? (
                        <a 
                          href={contact.href} 
                          className="text-white/90 hover:text-white transition-colors text-lg font-medium"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <span className="text-white/90 text-lg">{contact.content}</span>
                      )}
                      <p className="text-white/70 text-sm mt-1">{contact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Social Links */}
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-white/20 rounded-full p-3">
                      <ExternalLink className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">Connect Online</h3>
                  </div>
                  <div className="flex gap-4">
                    {[
                      { name: "LinkedIn", url: "https://www.linkedin.com/in/warnereric/" },
                      { name: "GitHub", url: "https://github.com/eboss2k9" },
                      { name: "Twitter", url: "https://twitter.com/eboss2k9" }
                    ].map((social) => (
                      <a 
                        key={social.name}
                        href={social.url} 
                        className="text-white/90 hover:text-white transition-colors px-3 py-1 bg-white/10 rounded-full text-sm font-medium hover:bg-white/20"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-brand-dark border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/80">
            © 2025 Eric Warner's Creative Studio, LLC. Designing experiences that matter.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;