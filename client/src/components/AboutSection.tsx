import { Check, Shield, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Confianza y Seguridad",
    description: "Personal verificado y capacitado",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Servicios a tiempo garantizados",
  },
  {
    icon: Users,
    title: "Equipo Profesional",
    description: "Expertos en limpieza y mantenimiento",
  },
];

const benefits = [
  "Personal capacitado y uniformado",
  "Productos de limpieza profesionales",
  "Equipos modernos y especializados",
  "Servicio flexible según tus necesidades",
  "Garantía de satisfacción",
  "Cobertura en toda la zona",
];

export default function AboutSection() {
  const handleContactClick = () => {
    console.log("Contact button clicked");
    const contacto = document.querySelector("#contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="nosotros" className="py-20 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-heading" data-testid="text-about-title">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="text-about-description">
              Somos una empresa dedicada a brindar servicios de limpieza profesional con
              los más altos estándares de calidad. Nuestro compromiso es hacer tu día más
              fácil, cuidando de tu hogar o negocio como si fuera el nuestro.
            </p>

            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3" data-testid={`item-benefit-${index}`}>
                  <div className="mt-1">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="rounded-full px-8"
              onClick={handleContactClick}
              data-testid="button-about-contact"
            >
              Solicita tu cotización
            </Button>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover-elevate active-elevate-2 transition-all"
                  data-testid={`card-feature-${index}`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-2 font-heading" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
