import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";

const navItems = [
  { label: "Servicios", href: "#servicios", isRoute: false },
  { label: "Productos", href: "#productos", isRoute: false },
  { label: "Equipos", href: "#equipos", isRoute: false },
  { label: "Clientes", href: "#clientes", isRoute: false },
  { label: "Nosotros", href: "#nosotros", isRoute: false },
  { label: "Empleos", href: "#empleos", isRoute: false },
  { label: "Tienda", href: "/tienda", isRoute: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();
  const { getTotalItems } = useCart();

  const handleNavClick = (href: string, isRoute: boolean = false) => {
    setIsMobileMenuOpen(false);
    if (isRoute) {
      setLocation(href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold font-heading text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors" data-testid="link-home">
              Servicios de Limpieza JEDA
            </a>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLocation("/tienda")}
              className="relative mr-2"
            >
              <ShoppingCart className="h-5 w-5" />
              {getTotalItems() > 0 && (
                <Badge 
                  variant="destructive" 
                  className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 text-xs"
                >
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            <Button
              onClick={() => handleNavClick("#contacto")}
              className="rounded-full"
              data-testid="button-contactanos"
            >
              Contáctanos
            </Button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-foreground hover-elevate active-elevate-2 rounded-md"
                data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contacto")}
              className="w-full rounded-full mt-4"
              data-testid="button-mobile-contactanos"
            >
              Contáctanos
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
