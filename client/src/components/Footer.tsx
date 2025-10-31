import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const quickLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
  { label: "Empleos", href: "#empleos" },
];

const services = [
  "Limpieza del Hogar",
  "Piscinas",
  "Tanques de Agua",
  "Cisternas",
];

export default function Footer() {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-foreground mb-4 font-heading" data-testid="text-footer-brand">
              Servicios de Limpieza JEDA
            </h3>
            <p className="text-muted-foreground mb-4">
              Tu día más fácil con nuestros servicios profesionales de limpieza y mantenimiento.
            </p>
            <div className="flex gap-3">
              <button
                className="w-10 h-10 rounded-full bg-primary/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                onClick={() => console.log("Facebook clicked")}
                data-testid="button-social-facebook"
              >
                <Facebook className="w-5 h-5 text-primary" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-primary/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                onClick={() => console.log("Instagram clicked")}
                data-testid="button-social-instagram"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-primary/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                onClick={() => console.log("WhatsApp clicked")}
                data-testid="button-social-whatsapp"
              >
                <SiWhatsapp className="w-5 h-5 text-primary" />
              </button>
              <button
                className="w-10 h-10 rounded-full bg-primary/10 hover-elevate active-elevate-2 flex items-center justify-center transition-all"
                onClick={() => console.log("Twitter clicked")}
                data-testid="button-social-twitter"
              >
                <Twitter className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-heading">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`button-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-heading">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-muted-foreground" data-testid={`text-footer-service-${index}`}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 font-heading">Contacto</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li data-testid="text-footer-phone">(809) 000-0000</li>
              <li data-testid="text-footer-email">info@limpiezajeda.com</li>
              <li data-testid="text-footer-location">
                Santo Domingo,<br />
                República Dominicana
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            © {new Date().getFullYear()} Servicios de Limpieza JEDA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
