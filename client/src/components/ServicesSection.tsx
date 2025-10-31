import { Home, Droplets, Container, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Home,
    title: "Limpieza del Hogar",
    description: "Servicio completo de limpieza residencial para mantener tu hogar impecable.",
  },
  {
    icon: Droplets,
    title: "Piscinas",
    description: "Mantenimiento y limpieza profesional de piscinas para que disfrutes del agua cristalina.",
  },
  {
    icon: Container,
    title: "Tanques de Agua",
    description: "Limpieza y desinfección de tanques de agua potable con productos certificados.",
  },
  {
    icon: Sparkles,
    title: "Cisternas",
    description: "Servicio especializado en limpieza profunda de cisternas y sistemas de almacenamiento.",
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading" data-testid="text-services-title">
            Lo que hacemos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Ofrecemos soluciones de limpieza y mantenimiento para cada necesidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer"
                onClick={() => console.log(`Service clicked: ${service.title}`)}
                data-testid={`card-service-${index}`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center font-heading" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
