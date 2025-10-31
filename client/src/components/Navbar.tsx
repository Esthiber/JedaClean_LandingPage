import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Productos", href: "#productos" },
  { label: "Equipos", href: "#equipos" },
  { label: "Clientes", href: "#clientes" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Empleos", href: "#empleos" },
  { label: "Tienda", href: "#tienda" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
                onClick={() => handleNavClick(item.href)}
                className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors"
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
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
                onClick={() => handleNavClick(item.href)}
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
