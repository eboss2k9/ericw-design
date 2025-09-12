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

        <div className="flex justify-center">
          {/* Contact Information */}
          <div className="space-y-8 max-w-2xl w-full">
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

        </div>
      </div>
    </div>
  );
};

export default Contact;