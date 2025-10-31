import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("¡Gracias por contactarnos! Te responderemos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-heading" data-testid="text-contact-title">
            Contáctanos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            Estamos listos para atender tus necesidades de limpieza
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Correo electrónico
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    data-testid="input-email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(809) 000-0000"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntanos qué servicio necesitas..."
                    rows={4}
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full"
                  data-testid="button-submit"
                >
                  Enviar mensaje
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid="card-phone">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">Teléfono</h3>
                  <p className="text-muted-foreground">(809) 000-0000</p>
                  <p className="text-muted-foreground">(829) 000-0000</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid="card-email">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">Email</h3>
                  <p className="text-muted-foreground">info@limpiezajeda.com</p>
                  <p className="text-muted-foreground">cotizaciones@limpiezajeda.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate active-elevate-2 transition-all" data-testid="card-location">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 font-heading">Ubicación</h3>
                  <p className="text-muted-foreground">Santo Domingo, República Dominicana</p>
                  <p className="text-muted-foreground">Cobertura nacional</p>
                </div>
              </div>
            </Card>

            <div className="bg-primary/5 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-foreground mb-2 font-heading">Horario de atención</h3>
              <p className="text-muted-foreground">Lunes a Viernes: 7:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Sábados: 8:00 AM - 2:00 PM</p>
              <p className="text-muted-foreground">Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
