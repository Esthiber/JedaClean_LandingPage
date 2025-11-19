import { useState } from "react";
import { ShoppingCart, Plus, Minus, Search, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useCart, type Product } from "@/contexts/CartContext";
import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const products: Product[] = [
  {
    id: 1,
    name: "Detergente Multiusos JEDA Pro",
    description: "Detergente concentrado biodegradable para limpieza general de oficinas y hogares. Fórmula pH neutro, segura para todas las superficies.",
    price: 25.99,
    image: "https://placehold.co/400x300/059669/FFFFFF?text=Detergente\nMultiusos\nJEDA+Pro",
    category: "Detergentes",
    inStock: true
  },
  {
    id: 2,
    name: "Desinfectante Hospitalario Ultra",
    description: "Desinfectante de grado hospitalario que elimina 99.9% de virus y bacterias. Ideal para áreas críticas y espacios comerciales de alta demanda.",
    price: 35.50,
    image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Desinfectante\nHospitalario\nUltra",
    category: "Desinfectantes",
    inStock: true
  },
  {
    id: 3,
    name: "Limpiador de Cristales Sin Rayas",
    description: "Fórmula avanzada con tecnología antirayas que garantiza superficies de vidrio cristalinas. No deja residuos ni manchas.",
    price: 18.75,
    image: "https://placehold.co/400x300/0EA5E9/FFFFFF?text=Limpiador\nde+Cristales\nSin+Rayas",
    category: "Limpiadores",
    inStock: true
  },
  {
    id: 4,
    name: "Cera Acrílica Industrial Plus",
    description: "Cera acrílica de alta durabilidad para pisos de alto tráfico. Protección UV incluida, ideal para oficinas y centros comerciales.",
    price: 42.00,
    image: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Cera+Acr%C3%ADlica\nIndustrial\nPlus",
    category: "Ceras",
    inStock: false
  },
  {
    id: 5,
    name: "Ambientador Profesional Lavanda",
    description: "Ambientador de larga duración con aceites esenciales naturales de lavanda. Neutraliza olores por hasta 30 días.",
    price: 12.99,
    image: "https://placehold.co/400x300/8B5CF6/FFFFFF?text=Ambientador\nProfesional\nLavanda",
    category: "Ambientadores",
    inStock: true
  },
  {
    id: 6,
    name: "Kit Limpieza Oficina Completo",
    description: "Kit profesional con detergente, desinfectante, limpiador de cristales y ambientador. Incluye paños de microfibra y guantes.",
    price: 89.99,
    image: "https://placehold.co/400x300/1E40AF/FFFFFF?text=Kit+Limpieza\nOficina\nCompleto",
    category: "Kits",
    inStock: true
  },
  {
    id: 7,
    name: "Detergente Enzimático Bio",
    description: "Detergente con enzimas naturales para manchas difíciles. Especial para alfombras y tapicería. Biodegradable 100%.",
    price: 32.50,
    image: "https://placehold.co/400x300/16A34A/FFFFFF?text=Detergente\nEnzimatico\nBio",
    category: "Detergentes",
    inStock: true
  },
  {
    id: 8,
    name: "Desengrasante Industrial Heavy",
    description: "Desengrasante de alta potencia para cocinas industriales y talleres. Remueve grasa carbonizada y aceites pesados.",
    price: 28.75,
    image: "https://placehold.co/400x300/F59E0B/FFFFFF?text=Desengrasante\nIndustrial\nHeavy",
    category: "Desengrasantes",
    inStock: true
  },
  {
    id: 9,
    name: "Limpiador Multiuso Ecológico",
    description: "Limpiador certificado eco-friendly, sin químicos tóxicos. Seguro para uso cerca de alimentos y niños.",
    price: 22.99,
    image: "https://placehold.co/400x300/10B981/FFFFFF?text=Limpiador\nMultiuso\nEcologico",
    category: "Limpiadores",
    inStock: true
  },
  {
    id: 10,
    name: "Kit Sanitización COVID-19",
    description: "Kit especializado para protocolo sanitización COVID-19. Incluye desinfectante, alcohol gel y equipo de protección personal.",
    price: 125.00,
    image: "https://placehold.co/400x300/DC2626/FFFFFF?text=Kit\nSanitizacion\nCOVID-19",
    category: "Kits",
    inStock: true
  }
];

const categories = ["Todos", "Detergentes", "Desinfectantes", "Limpiadores", "Ceras", "Ambientadores", "Desengrasantes", "Kits"];

export default function Store() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { cart, addToCart, removeFromCart, removeItemCompletely, getTotalItems, getTotalPrice } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Todos" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold font-heading text-foreground mb-2">
                Tienda JEDA
              </h1>
              <p className="text-lg text-muted-foreground">
                Productos profesionales de limpieza para tu negocio
              </p>
            </div>
            
            {/* Cart Button */}
            <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="lg" className="relative">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Carrito
                  {getTotalItems() > 0 && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 text-xs"
                    >
                      {getTotalItems()}
                    </Badge>
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Carrito de Compras</DialogTitle>
                </DialogHeader>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                      <p className="text-muted-foreground">Tu carrito está vacío</p>
                      <p className="text-sm text-gray-500">Agrega productos para comenzar</p>
                    </div>
                  ) : (
                    cart.map(item => (
                      <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{item.name}</h4>
                          <p className="text-primary font-semibold">RD$ {item.price.toLocaleString('es-DO')}</p>
                          <p className="text-xs text-gray-500">
                            Subtotal: RD$ {(item.price * item.quantity).toLocaleString('es-DO')}
                          </p>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-2 text-sm font-medium w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-6 w-6"
                              onClick={() => addToCart(item)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItemCompletely(item.id)}
                            className="text-red-500 hover:text-red-700 hover:bg-red-50 h-6 px-2 text-xs"
                          >
                            <Trash2 className="h-3 w-3 mr-1" />
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                {cart.length > 0 && (
                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex justify-between items-center font-semibold text-lg">
                      <span>Total ({getTotalItems()} items):</span>
                      <span className="text-blue-600">RD$ {getTotalPrice().toLocaleString('es-DO')}</span>
                    </div>
                    <Button 
                      className="w-full"
                      onClick={() => {
                        setIsCartOpen(false);
                        setLocation('/checkout');
                      }}
                    >
                      Proceder al Pago
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
