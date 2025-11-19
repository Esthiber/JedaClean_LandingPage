import { ShoppingCart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type Product, useCart } from "@/contexts/CartContext";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const { isInCart, getItemQuantity, addToCart, removeFromCart } = useCart();
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
              RD$ {product.price.toLocaleString('es-DO')}
            </span>
            {product.inStock && (
              <Badge variant="outline" className="text-green-600 border-green-600">
                Disponible
              </Badge>
            )}
          </div>
          {isInCart(product.id) && (
            <div className="flex items-center justify-center gap-2 p-2 bg-blue-50 rounded-lg">
              <span className="text-sm text-blue-700 font-medium">
                En carrito: {getItemQuantity(product.id)}
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        {product.inStock ? (
          isInCart(product.id) ? (
            <div className="w-full flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeFromCart(product.id)}
                className="flex-shrink-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="flex-1 text-center font-medium">
                {getItemQuantity(product.id)}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => addToCart(product)}
                className="flex-shrink-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <Button 
              className="w-full" 
              onClick={() => onAddToCart(product)}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Agregar al Carrito
            </Button>
          )
        ) : (
          <Button 
            className="w-full" 
            disabled
            variant="secondary"
          >
            No Disponible
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
