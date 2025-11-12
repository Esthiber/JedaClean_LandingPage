import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Product } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="aspect-video bg-muted relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {!product.inStock && (
            <Badge variant="destructive" className="absolute top-3 right-3">
              Agotado
            </Badge>
          )}
          {product.inStock && (
            <Badge variant="secondary" className="absolute top-3 left-3">
              {product.category}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-3">
          <CardTitle className="text-lg leading-tight line-clamp-2">
            {product.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.inStock && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                Disponible
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          variant={product.inStock ? "default" : "secondary"}
        >
          {product.inStock ? (
            <>
              <ShoppingCart className="h-4 w-4 mr-2" />
              Agregar al Carrito
            </>
          ) : (
            "No Disponible"
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
