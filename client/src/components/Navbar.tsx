import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import CartDropdown from "@/components/CartDropdown";

const navItems = [
  { label: "Servicios", href: "#servicios", isRoute: false },
  { label: "Productos", href: "/productos", isRoute: true },
  { label: "Clientes", href: "/clientes", isRoute: true },
  { label: "Equipo", href: "/equipo", isRoute: true },
  { label: "Nosotros", href: "/nosotros", isRoute: true },
  { label: "Empleos", href: "/empleos", isRoute: true },
  { label: "Tienda", href: "/tienda", isRoute: true },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleNavClick = (href: string, isRoute: boolean = false) => {
    setIsMobileMenuOpen(false);
    
    if (isRoute) {
      // For route navigation, simply navigate to the new page
      setLocation(href);
    } else {
      // For anchor links, we need to handle different scenarios
      if (location === "/") {
        // If we're already on home page, scroll directly to the section
        scrollToElement(href);
      } else {
        // If we're on a different page, navigate to home first, then scroll
        navigateToHomeAndScroll(href);
      }
    }
  };

  const scrollToElement = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navigateToHomeAndScroll = (selector: string) => {
    setLocation("/");
    // Use multiple attempts to ensure the element is found after navigation
    let attempts = 0;
    const maxAttempts = 10;
    
    const tryScroll = () => {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(tryScroll, 100);
      }
    };
    
    setTimeout(tryScroll, 150);
  };

  const handleContactClick = () => {
    setIsMobileMenuOpen(false);
    
    if (location === "/") {
      scrollToElement("#contacto");
    } else {
      navigateToHomeAndScroll("#contacto");
    }
  };

  // Helper function to check if a nav item should be highlighted
  const isActiveRoute = (href: string, isRoute: boolean) => {
    if (isRoute) {
      return location === href;
    }
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setLocation("/")}
            className="text-xl font-bold font-heading text-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-md transition-colors"
            data-testid="button-home"
          >
            Servicios de Limpieza JEDA
          </button>

          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.isRoute)}
                className={`text-sm font-medium hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors ${
                  isActiveRoute(item.href, item.isRoute)
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`button-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <CartDropdown />
            <Button
              onClick={handleContactClick}
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
                className={`block w-full text-left px-3 py-2 text-base font-medium hover-elevate active-elevate-2 rounded-md transition-colors ${
                  isActiveRoute(item.href, item.isRoute)
                    ? "text-primary bg-primary/10 border border-primary/20"
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                }`}
                data-testid={`button-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleContactClick}
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
