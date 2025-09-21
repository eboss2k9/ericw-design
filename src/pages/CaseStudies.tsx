import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Users, 
  Target, 
  TrendingUp,
  CheckCircle,
  Lightbulb,
  Zap,
  Eye,
  BarChart3
} from "lucide-react";
import { Link, useParams, Navigate } from "react-router-dom";
import cjamsHeader from "@/assets/cjams_header_design.png";
import polyplexusHeader from "@/assets/polyplexus_header_design.png";
import styletrailHeader from "@/assets/styletrail_header_design.png";
import underaHeader from "@/assets/undera_header_design.png";
import workbenchHeader from "@/assets/workbench_header_design.png";
import cjamsNarrative from "@/assets/cjams_narrative.jpg";
import cjamsCertificate from "@/assets/cjams_certificate.jpg";
import cjamsDashboard from "@/assets/cjams_dashboard.jpg";

const CaseStudies = () => {
  const { id } = useParams();

  const caseStudies = {
    styletrail: {
      title: "StyleTrail Marketplace Transformation",
      client: "StyleTrail, LLC",
      duration: "8 months",
      team: "4 designers, 6 developers",
      role: "Lead UX Designer & Design System Architect",
      challenge: "StyleTrail needed to transform from a basic booking platform into a comprehensive marketplace that connects beauty professionals with available workspace. The existing platform had low user engagement (12% monthly active users) and poor conversion rates (2.3%).",
      solution: "I led a complete user experience overhaul focused on trust-building, streamlined booking flows, and community features. Created a design system that scaled across web and mobile platforms while ensuring accessibility compliance.",
      process: [
        {
          phase: "Research & Discovery",
          duration: "6 weeks",
          activities: [
            "Conducted 45 user interviews with beauty professionals",
            "Analyzed competitor platforms and market gaps",
            "Created detailed user personas and journey maps",
            "Audited existing platform for usability issues"
          ]
        },
        {
          phase: "Strategy & Planning",
          duration: "4 weeks", 
          activities: [
            "Developed information architecture and user flows",
            "Created wireframes for key user journeys",
            "Established design system foundations",
            "Aligned stakeholders on project vision and metrics"
          ]
        },
        {
          phase: "Design & Prototype",
          duration: "12 weeks",
          activities: [
            "Designed high-fidelity mockups for 40+ screens",
            "Built interactive prototypes for user testing",
            "Created comprehensive design system",
            "Developed responsive design patterns"
          ]
        },
        {
          phase: "Testing & Iteration",
          duration: "8 weeks",
          activities: [
            "Conducted 3 rounds of usability testing",
            "A/B tested key conversion flows",
            "Refined designs based on user feedback",
            "Prepared design handoff documentation"
          ]
        }
      ],
      keyFeatures: [
        "Trust-building verification system for professionals",
        "Smart matching algorithm for workspace recommendations", 
        "Integrated messaging and review system",
        "Mobile-first booking experience",
        "Community features and professional networking"
      ],
      results: [
        { metric: "User Engagement", before: "12%", after: "67%", improvement: "+458%" },
        { metric: "Conversion Rate", before: "2.3%", after: "8.9%", improvement: "+287%" },
        { metric: "Monthly Bookings", before: "450", after: "1,800", improvement: "+300%" },
        { metric: "User Satisfaction", before: "3.2/5", after: "4.8/5", improvement: "+50%" },
        { metric: "Revenue Growth", before: "$45K/mo", after: "$180K/mo", improvement: "+300%" }
      ],
      testimonial: {
        quote: "Eric's design leadership transformed our platform from a struggling startup into a thriving marketplace. His user-centered approach and attention to detail resulted in metrics we never thought possible.",
        author: "Sarah Chen",
        role: "CEO, StyleTrail LLC"
      },
      tags: ["User Research", "Marketplace Design", "Mobile UX", "Design Systems"],
      images: [styletrailHeader, "/placeholder.svg", "/placeholder.svg"]
    },
    workbench: {
      title: "Workbench Learning Platform Revolution",
      client: "Workbench Platform, Inc",
      duration: "12 months",
      team: "6 designers, 8 developers, 3 researchers",
      role: "Senior UX Designer & Research Lead",
      challenge: "Workbench's educational platform struggled with low course completion rates (23%) and poor learner engagement. The platform's complex interface overwhelmed users, particularly in STEM subjects where visual learning is crucial.",
      solution: "Designed an adaptive learning experience that personalizes content delivery based on learning patterns. Introduced interactive elements, progress visualization, and collaborative features that transformed passive content consumption into active learning.",
      process: [
        {
          phase: "User Research",
          duration: "8 weeks",
          activities: [
            "Interviewed 60+ educators and 200+ students",
            "Analyzed learning behavior data and drop-off points",
            "Conducted cognitive load assessments",
            "Researched learning science best practices"
          ]
        },
        {
          phase: "Design Strategy",
          duration: "6 weeks",
          activities: [
            "Developed adaptive learning framework",
            "Created modular content architecture",
            "Designed personalization algorithms",
            "Established accessibility guidelines"
          ]
        },
        {
          phase: "Prototyping",
          duration: "16 weeks",
          activities: [
            "Built interactive learning modules",
            "Created adaptive assessment tools",
            "Designed collaborative workspaces",
            "Developed progress tracking systems"
          ]
        },
        {
          phase: "Testing & Optimization",
          duration: "12 weeks",
          activities: [
            "Conducted longitudinal learning studies",
            "A/B tested personalization features",
            "Optimized for different learning styles",
            "Refined based on educator feedback"
          ]
        }
      ],
      keyFeatures: [
        "Adaptive learning paths based on user behavior",
        "Interactive STEM simulations and visualizations",
        "Collaborative project workspaces",
        "Real-time progress analytics for educators",
        "Accessibility-first design for inclusive learning"
      ],
      results: [
        { metric: "Course Completion", before: "23%", after: "78%", improvement: "+239%" },
        { metric: "Learning Retention", before: "31%", after: "82%", improvement: "+165%" },
        { metric: "Student Satisfaction", before: "3.4/5", after: "4.7/5", improvement: "+38%" },
        { metric: "Educator Adoption", before: "120", after: "2,400", improvement: "+1,900%" },
        { metric: "Platform Revenue", before: "$180K/yr", after: "$2.1M/yr", improvement: "+1,067%" }
      ],
      testimonial: {
        quote: "Eric's research-driven approach to learning UX has revolutionized how our students engage with STEM content. The completion rates speak for themselves.",
        author: "Dr. Michael Rodriguez",
        role: "Head of Product, Workbench Platform"
      },
      tags: ["Educational UX", "Adaptive Design", "Analytics", "Accessibility"],
      images: [workbenchHeader, "/placeholder.svg", "/placeholder.svg"]
    },
    polyplexus: {
      title: "Polyplexus Research Collaboration Platform",
      client: "Balti Virtual (GS3 Program)",
      duration: "10 months",
      team: "3 designers, 5 developers, 2 researchers",
      role: "Lead UX Designer & Innovation Strategist",
      challenge: "Research collaboration in cross-disciplinary teams was fragmented across multiple tools, leading to inefficient hypothesis generation and knowledge silos. The GS3 program needed a unified platform to accelerate scientific discovery.",
      solution: "Created an innovative research collaboration platform that visualizes connections between disparate research areas, facilitates hypothesis generation through AI-assisted insights, and streamlines the research workflow from ideation to publication.",
      process: [
        {
          phase: "Research Ecosystem Analysis",
          duration: "6 weeks",
          activities: [
            "Studied workflows of 30+ research teams",
            "Mapped existing tool fragmentation",
            "Analyzed collaboration pain points",
            "Researched knowledge discovery patterns"
          ]
        },
        {
          phase: "Innovation Workshop",
          duration: "4 weeks",
          activities: [
            "Co-designed with leading researchers",
            "Prototyped AI-assisted research tools",
            "Developed visual knowledge mapping",
            "Created collaboration frameworks"
          ]
        },
        {
          phase: "Platform Design",
          duration: "20 weeks",
          activities: [
            "Designed complex data visualization tools",
            "Created hypothesis generation workflows",
            "Built collaborative research spaces",
            "Developed publication pipeline tools"
          ]
        },
        {
          phase: "Research Validation",
          duration: "10 weeks",
          activities: [
            "Beta tested with 12 research teams",
            "Measured hypothesis generation efficiency",
            "Tracked collaboration metrics",
            "Refined based on researcher feedback"
          ]
        }
      ],
      keyFeatures: [
        "AI-powered cross-disciplinary insight discovery",
        "Visual knowledge graph for research connections",
        "Collaborative hypothesis generation tools",
        "Integrated research workflow management",
        "Publication-ready result visualization"
      ],
      results: [
        { metric: "Hypothesis Generation Speed", before: "2.3 weeks", after: "3.2 days", improvement: "+40% faster" },
        { metric: "Cross-team Collaboration", before: "12%", after: "73%", improvement: "+508%" },
        { metric: "Research Publications", before: "15/year", after: "58/year", improvement: "+287%" },
        { metric: "Discovery Insights", before: "3/month", after: "24/month", improvement: "+700%" },
        { metric: "Platform Adoption", before: "0", after: "450 researchers", improvement: "New platform" }
      ],
      testimonial: {
        quote: "Eric's design thinking approach has fundamentally changed how we approach scientific discovery. The platform has accelerated our research timeline beyond our expectations.",
        author: "Dr. Amanda Foster",
        role: "Research Director, GS3 Program"
      },
      tags: ["Research UX", "Collaboration Tools", "Data Visualization", "AI Integration"],
      images: [polyplexusHeader, "/placeholder.svg", "/placeholder.svg"]
    },
    "under-armor": {
      title: "Under Armour HoloTats AR Experience",
      client: "Under Armour",
      duration: "6 months",
      team: "5 designers, 4 AR developers, 2 brand specialists",
      role: "Lead AR/VR UX Designer",
      challenge: "Under Armour wanted to create a breakthrough AR experience that would engage younger audiences and drive brand awareness. The challenge was designing an intuitive AR interface that would work across diverse mobile devices while creating magical, shareable moments.",
      solution: "Designed an immersive AR tattoo experience that brings temporary tattoos to life through smartphone cameras. Created an intuitive interface that makes complex AR technology feel effortless while encouraging social sharing and brand engagement.",
      process: [
        {
          phase: "AR Experience Research",
          duration: "4 weeks",
          activities: [
            "Analyzed successful AR campaigns",
            "Studied mobile AR usability patterns",
            "Researched target audience preferences",
            "Tested AR technology limitations"
          ]
        },
        {
          phase: "Concept Development",
          duration: "6 weeks",
          activities: [
            "Ideated magical AR interactions",
            "Designed tattoo animation concepts",
            "Created brand integration strategies",
            "Developed social sharing features"
          ]
        },
        {
          phase: "AR Interface Design",
          duration: "12 weeks",
          activities: [
            "Designed AR scanning interface",
            "Created immersive animation sequences",
            "Built social sharing workflows",
            "Optimized for various screen sizes"
          ]
        },
        {
          phase: "User Testing & Polish",
          duration: "8 weeks",
          activities: [
            "Tested AR tracking accuracy",
            "Refined gesture interactions",
            "Optimized for different lighting conditions",
            "Polished animation timing"
          ]
        }
      ],
      keyFeatures: [
        "Instant AR tattoo recognition and tracking",
        "Interactive 3D animations tied to brand themes",
        "One-tap social media sharing integration",
        "Cross-platform compatibility (iOS/Android)",
        "Branded content discovery and collection"
      ],
      results: [
        { metric: "App Downloads", before: "0", after: "500K+", improvement: "New app launch" },
        { metric: "User Engagement", before: "N/A", after: "92%", improvement: "High retention" },
        { metric: "Social Shares", before: "0", after: "2.1M", improvement: "Viral content" },
        { metric: "Brand Awareness", before: "23%", after: "67%", improvement: "+191%" },
        { metric: "App Store Rating", before: "N/A", after: "4.6/5", improvement: "Top rated" }
      ],
      testimonial: {
        quote: "Eric created an AR experience that perfectly captured our brand spirit while pushing the boundaries of mobile technology. The viral success exceeded all our expectations.",
        author: "Jessica Park",
        role: "Digital Innovation Director, Under Armour"
      },
      tags: ["AR/VR Design", "Mobile UX", "Brand Experience", "Social Integration"],
      images: [underaHeader, "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
    },
    cjams: {
      title: "CJAMS Government System Redesign",
      client: "Maryland Department of Human Services",
      duration: "18 months",
      team: "8 designers, 12 developers, 4 researchers",
      role: "Lead UX Designer & Accessibility Champion",
      challenge: "The existing DHS system was causing significant delays in critical services affecting thousands of families. Case workers struggled with complex workflows, leading to 50% longer processing times and decreased service quality for vulnerable populations.",
      solution: "Led a comprehensive redesign of the government services platform, focusing on streamlined workflows, accessibility compliance, and improved case management. Created a human-centered design that reduced cognitive load while ensuring regulatory compliance.",
      process: [
        {
          phase: "Stakeholder Research",
          duration: "8 weeks",
          activities: [
            "Interviewed 50+ case workers and supervisors",
            "Observed day-in-the-life workflows",
            "Analyzed compliance requirements",
            "Studied service delivery pain points"
          ]
        },
        {
          phase: "System Architecture",
          duration: "12 weeks",
          activities: [
            "Mapped complex workflow dependencies",
            "Designed modular system components",
            "Created accessibility standards",
            "Established design system governance"
          ]
        },
        {
          phase: "Interface Design",
          duration: "24 weeks",
          activities: [
            "Designed 100+ interface screens",
            "Created accessible form patterns",
            "Built workflow automation tools",
            "Developed mobile companion app"
          ]
        },
        {
          phase: "Implementation Support",
          duration: "28 weeks",
          activities: [
            "Conducted user acceptance testing",
            "Provided training materials",
            "Monitored adoption metrics",
            "Iterated based on real-world usage"
          ]
        }
      ],
      keyFeatures: [
        "Streamlined case management workflows",
        "WCAG 2.1 AA accessibility compliance",
        "Automated form validation and guidance",
        "Mobile access for field workers",
        "Integrated document management system"
      ],
      results: [
        { metric: "Processing Time", before: "14.2 days", after: "7.1 days", improvement: "+50% faster" },
        { metric: "User Satisfaction", before: "2.8/5", after: "4.5/5", improvement: "+61%" },
        { metric: "Error Reduction", before: "23%", after: "6%", improvement: "+74% fewer errors" },
        { metric: "Training Time", before: "40 hours", after: "12 hours", improvement: "+70% reduction" },
        { metric: "System Uptime", before: "91%", after: "99.2%", improvement: "+9% improvement" }
      ],
      testimonial: {
        quote: "Eric's dedication to accessibility and user-centered design has transformed how we serve Maryland families. The efficiency gains have allowed us to help more people faster.",
        author: "Robert Williams",
        role: "Director of IT Services, Maryland DHS"
      },
      tags: ["Government UX", "Accessibility", "Service Design", "Workflow Optimization"],
      images: [cjamsHeader, cjamsDashboard, cjamsNarrative, cjamsCertificate]
    }
  };

  const currentStudy = id ? caseStudies[id as keyof typeof caseStudies] : null;

  if (id && !currentStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  if (!id) {
    // Case Studies Overview Page
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="absolute inset-0 bg-brand-secondary/30"></div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Case Studies
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Deep dives into design challenges, processes, and measurable outcomes that drive business success
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12">
              {Object.entries(caseStudies).map(([key, study]) => (
                <Card key={key} className="group hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  <div className="aspect-[16/10] bg-muted overflow-hidden">
                    <img 
                      src={study.images[0]} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline">{study.client}</Badge>
                      <Badge variant="secondary">{study.duration}</Badge>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-brand-primary transition-colors">
                      {study.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {study.challenge.substring(0, 150)}...
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Link to={`/case-studies/${key}`}>
                      <Button className="group-hover:shadow-lg transition-all">
                        <Eye className="h-4 w-4 mr-2" />
                        View Full Case Study
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Individual Case Study Page
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-6 px-4 border-b">
        <div className="container mx-auto max-w-6xl">
          <Link to="/case-studies" className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Case Studies
          </Link>
        </div>
      </section>

      {/* Case Study Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-background to-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="outline">{currentStudy.client}</Badge>
                <Badge variant="secondary">{currentStudy.duration}</Badge>
                <Badge className="bg-brand-primary text-white">{currentStudy.role}</Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {currentStudy.title}
              </h1>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Duration</h3>
                  <p className="text-muted-foreground">{currentStudy.duration}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Team Size</h3>
                  <p className="text-muted-foreground">{currentStudy.team}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {currentStudy.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
              <img 
                src={currentStudy.images[0]} 
                alt={currentStudy.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Target className="h-6 w-6 text-brand-primary" />
                  The Challenge
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {currentStudy.challenge}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-brand-primary" />
                  The Solution
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {currentStudy.solution}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Design Process
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {currentStudy.process.map((phase, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-brand-primary mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{phase.phase}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{phase.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-brand-primary mt-0.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Key Features Delivered
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {currentStudy.keyFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-brand-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-4 bg-gradient-to-br from-brand-primary to-brand-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Measurable Impact
            </h2>
            <p className="text-white/90 text-lg">
              Data-driven results that demonstrate real business value
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentStudy.results.map((result, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{result.metric}</h3>
                  <div className="space-y-1">
                    <div className="text-sm text-white/70">Before: {result.before}</div>
                    <div className="text-sm text-white/70">After: {result.after}</div>
                    <div className="text-xl font-bold text-white">{result.improvement}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            "{currentStudy.testimonial.quote}"
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div className="text-left">
              <div className="font-semibold text-foreground">{currentStudy.testimonial.author}</div>
              <div className="text-muted-foreground">{currentStudy.testimonial.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation to other studies */}
      <section className="py-12 px-4 border-t">
        <div className="container mx-auto max-w-4xl">
          <div className="flex justify-between items-center">
            <Link to="/case-studies" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
              ← View All Case Studies
            </Link>
            <Link to="/portfolio#contact" className="text-brand-primary hover:text-brand-primary/80 transition-colors">
              Let's Work Together →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;