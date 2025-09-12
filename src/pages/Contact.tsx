import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-luxury-dark mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to elevate your business with premium sportswear? 
            Get in touch with our team for personalized service and bulk pricing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-luxury-dark">
                  <MapPin className="h-5 w-5 mr-2" />
                  Warehouse Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  1245 Industrial Boulevard<br />
                  Commerce District, Suite 200<br />
                  Los Angeles, CA 90021<br />
                  United States
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-luxury-dark">
                  <Phone className="h-5 w-5 mr-2" />
                  Phone Number
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="font-medium">Main Office:</span> +1 (555) 123-4567<br />
                  <span className="font-medium">B2B Sales:</span> +1 (555) 123-4568<br />
                  <span className="font-medium">Customer Service:</span> +1 (555) 123-4569
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-luxury-dark">
                  <Mail className="h-5 w-5 mr-2" />
                  Email Addresses
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="font-medium">General Inquiries:</span> info@decris.com<br />
                  <span className="font-medium">B2B Sales:</span> sales@decris.com<br />
                  <span className="font-medium">Customer Support:</span> support@decris.com
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-luxury-dark">
                  <Clock className="h-5 w-5 mr-2" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <span className="font-medium">Monday - Friday:</span> 8:00 AM - 6:00 PM PST<br />
                  <span className="font-medium">Saturday:</span> 9:00 AM - 4:00 PM PST<br />
                  <span className="font-medium">Sunday:</span> Closed
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Newsletter */}
          <div className="space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-luxury-dark">Get a Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Company Name" />
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Order Quantity (approx.)" />
                <Textarea 
                  placeholder="Tell us about your requirements, preferred products, timeline, and any special customization needs..."
                  className="min-h-[120px]"
                />
                <Button className="w-full">
                  Submit Quote Request
                </Button>
                <p className="text-sm text-muted-foreground">
                  Our B2B team will respond within 24 hours with a personalized quote.
                </p>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card>
              <CardHeader>
                <CardTitle className="text-luxury-dark">Newsletter Signup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Stay updated with our latest collections, exclusive B2B offers, and industry insights.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Your email address" type="email" className="flex-1" />
                  <Button>Subscribe</Button>
                </div>
                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" id="newsletter-consent" />
                  <label htmlFor="newsletter-consent" className="text-sm text-muted-foreground">
                    I agree to receive marketing communications from Decris Luxury Sportclothing. 
                    You can unsubscribe at any time.
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="bg-luxury-light">
              <CardContent className="p-6">
                <h3 className="font-semibold text-luxury-dark mb-2">Need Immediate Assistance?</h3>
                <p className="text-muted-foreground mb-4">
                  For urgent B2B inquiries or large volume orders, contact our dedicated sales team directly.
                </p>
                <Button variant="outline" className="w-full">
                  Call B2B Sales Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;