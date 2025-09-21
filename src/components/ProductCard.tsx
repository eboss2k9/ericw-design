import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-border">
      <CardContent className="p-3 sm:p-4">
        <div className="aspect-square bg-muted rounded-lg mb-3 sm:mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="space-y-2">
          <Badge variant="secondary" className="text-xs">
            {product.category}
          </Badge>
          
          <h3 className="font-semibold text-sm sm:text-base text-luxury-dark group-hover:text-luxury-accent transition-colors">
            {product.name}
          </h3>
          
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-2 gap-2">
            <span className="text-lg font-bold text-luxury-dark">
              ${product.price}
            </span>
            
            <Button 
              variant="outline" 
              size="sm"
              className="w-full sm:w-auto"
              onClick={() => {
                const subject = `Quote Request for ${product.name}`;
                const body = `Hello,\n\nI would like to request a quote for:\n\nProduct: ${product.name}\nCategory: ${product.category}\nPrice: $${product.price}\n\nPlease provide bulk pricing and availability.\n\nThank you!`;
                window.location.href = `mailto:chuckwester1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              }}
            >
              Get Quote
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;