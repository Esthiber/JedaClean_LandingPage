import { useState } from "react";
import { Building2, Users, Star, Calendar, MapPin, Phone, Mail, ExternalLink, Filter, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";

interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  services: string[];
  contractStart: string;
  rating: number;
  testimonial: string;
  contact: {
    person: string;
    phone: string;
    email: string;
  };
  description: string;
  size: "Pequeña" | "Mediana" | "Grande" | "Corporativa";
  featured: boolean;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Banco Central de República Dominicana",
    logo: "https://via.placeholder.com/120x80/0052CC/FFFFFF?text=BCRD",
    industry: "Financiero",
    location: "Zona Colonial, Santo Domingo",
    services: ["Limpieza Diaria", "Desinfección", "Mantenimiento de Pisos"],
    contractStart: "2023-01-15",
    rating: 5,
    testimonial: "Servicios JEDA ha transformado nuestras instalaciones. Su equipo es profesional y confiable, manteniendo los más altos estándares de limpieza que requiere una institución financiera.",
    contact: {
      person: "María Rodriguez",
      phone: "+1 809-234-5678",
      email: "maria.rodriguez@bancentral.gov.do"
    },
    description: "Institución financiera líder que requiere servicios de limpieza especializados para áreas de alta seguridad y atención al cliente.",
    size: "Corporativa",
    featured: true
  },
  {
    id: 2,
    name: "Hospital General Plaza de la Salud",
    logo: "https://via.placeholder.com/120x80/DC2626/FFFFFF?text=HGPS",
    industry: "Salud",
    location: "Ensanche La Fe, Santo Domingo",
    services: ["Limpieza Hospitalaria", "Desinfección UV", "Manejo de Residuos Médicos"],
    contractStart: "2022-08-10",
    rating: 5,
    testimonial: "La calidad del servicio de JEDA es excepcional. Cumplen con todos los protocolos hospitalarios y han sido fundamentales durante la pandemia.",
    contact: {
      person: "Dr. Carlos Mendoza",
      phone: "+1 809-345-6789",
      email: "carlos.mendoza@hgps.com.do"
    },
    description: "Centro médico especializado que requiere servicios de limpieza con protocolos estrictos de bioseguridad y manejo de desechos médicos.",
    size: "Grande",
    featured: true
  },
  {
    id: 3,
    name: "Ágora Mall",
    logo: "https://via.placeholder.com/120x80/7C3AED/FFFFFF?text=AM",
    industry: "Retail",
    location: "Bella Vista, Santo Domingo",
    services: ["Limpieza de Áreas Comunes", "Mantenimiento de Baños", "Limpieza de Vidrieras"],
    contractStart: "2023-03-01",
    rating: 4,
    testimonial: "JEDA mantiene nuestro centro comercial impecable las 24 horas. Su flexibilidad de horarios y calidad del servicio es incomparable.",
    contact: {
      person: "Ana García",
      phone: "+1 809-456-7890",
      email: "ana.garcia@agoramall.com.do"
    },
    description: "Centro comercial de alta afluencia que necesita servicios de limpieza continua durante y después del horario comercial.",
    size: "Grande",
    featured: false
  },
  {
    id: 4,
    name: "Torre Empresarial AIRD",
    logo: "https://via.placeholder.com/120x80/1F2937/FFFFFF?text=AIRD",
    industry: "Tecnología",
    location: "Piantini, Santo Domingo",
    services: ["Limpieza de Oficinas", "Mantenimiento de Equipos", "Servicios Nocturnos"],
    contractStart: "2022-11-20",
    rating: 5,
    testimonial: "La profesionalidad de JEDA se refleja en cada detalle. Nuestras oficinas siempre están perfectas para recibir clientes internacionales.",
    contact: {
      person: "Roberto Silva",
      phone: "+1 809-567-8901",
      email: "roberto.silva@aird.org.do"
    },
    description: "Torre empresarial moderna que alberga múltiples empresas tecnológicas que requieren servicios de limpieza especializados para equipos sensibles.",
    size: "Corporativa",
    featured: true
  },
  {
    id: 5,
    name: "Restaurante Adrian Tropical",
    logo: "https://via.placeholder.com/120x80/059669/FFFFFF?text=AT",
    industry: "Gastronomía",
    location: "Zona Colonial, Santo Domingo",
    services: ["Limpieza de Cocina", "Desengrase Industrial", "Sanitización"],
    contractStart: "2023-05-15",
    rating: 4,
    testimonial: "En el sector gastronómico, la limpieza es fundamental. JEDA entiende nuestras necesidades específicas y siempre cumple.",
    contact: {
      person: "Chef Rafael Vásquez",
      phone: "+1 809-678-9012",
      email: "rafael@adriantropical.com.do"
    },
    description: "Restaurante emblemático dominicano que necesita servicios especializados de limpieza para cocinas industriales y áreas de comensales.",
    size: "Mediana",
    featured: false
  },
  {
    id: 6,
    name: "Colegio San Judas Tadeo",
    logo: "https://via.placeholder.com/120x80/DC2626/FFFFFF?text=SJT",
    industry: "Educación",
    location: "Naco, Santo Domingo",
    services: ["Limpieza de Aulas", "Sanitización", "Mantenimiento de Patios"],
    contractStart: "2023-02-01",
    rating: 5,
    testimonial: "La seguridad de nuestros estudiantes es primordial. JEDA utiliza productos seguros y mantiene nuestras instalaciones impecables.",
    contact: {
      person: "Directora Elena Vargas",
      phone: "+1 809-789-0123",
      email: "elena.vargas@sanjudas.edu.do"
    },
    description: "Institución educativa que requiere servicios de limpieza seguros para niños y adolescentes, con horarios flexibles.",
    size: "Mediana",
    featured: false
  },
  {
    id: 7,
    name: "Zona Franca Industrial Multimodal Caucedo",
    logo: "https://via.placeholder.com/120x80/F59E0B/FFFFFF?text=ZFC",
    industry: "Manufacturera",
    location: "Boca Chica, Santo Domingo",
    services: ["Limpieza Industrial", "Mantenimiento de Maquinaria", "Control de Polvo"],
    contractStart: "2022-06-30",
    rating: 4,
    testimonial: "JEDA entiende las necesidades específicas de nuestro sector industrial. Su servicio especializado mantiene nuestra producción sin interrupciones.",
    contact: {
      person: "Ing. Pedro Morales",
      phone: "+1 809-890-1234",
      email: "pedro.morales@caucedozf.com.do"
    },
    description: "Complejo industrial que alberga múltiples empresas manufactureras que necesitan servicios de limpieza especializados para ambientes de producción.",
    size: "Grande",
    featured: false
  },
  {
    id: 8,
    name: "Dirección General de Impuestos Internos (DGII)",
    logo: "https://via.placeholder.com/120x80/1E40AF/FFFFFF?text=DGII",
    industry: "Gubernamental",
    location: "Gazcue, Santo Domingo",
    services: ["Limpieza de Oficinas", "Desinfección", "Mantenimiento General"],
    contractStart: "2023-01-01",
    rating: 5,
    testimonial: "Como entidad pública, requerimos servicios confiables y transparentes. JEDA cumple con todos nuestros estándares gubernamentales.",
    contact: {
      person: "Lic. Carmen Torres",
      phone: "+1 809-901-2345",
      email: "carmen.torres@dgii.gov.do"
    },
    description: "Oficinas gubernamentales que requieren servicios de limpieza con certificaciones especiales y cumplimiento de normativas públicas.",
    size: "Corporativa",
    featured: true
  },
  {
    id: 9,
    name: "Hotel Sheraton Santo Domingo",
    logo: "https://via.placeholder.com/120x80/8B4513/FFFFFF?text=SSD",
    industry: "Hotelería",
    location: "Malecón, Santo Domingo",
    services: ["Limpieza de Habitaciones", "Áreas Comunes", "Lavandería", "Desinfección"],
    contractStart: "2022-12-01",
    rating: 5,
    testimonial: "En la industria hotelera, la limpieza impecable es fundamental. JEDA nos ayuda a mantener los estándares internacionales que nuestros huéspedes esperan.",
    contact: {
      person: "Gerente General Luis Martínez",
      phone: "+1 809-221-6666",
      email: "luis.martinez@sheraton.com.do"
    },
    description: "Hotel de lujo ubicado en el Malecón que requiere servicios de limpieza de alta calidad las 24 horas para habitaciones y áreas públicas.",
    size: "Grande",
    featured: false
  },
  {
    id: 10,
    name: "Universidad Autónoma de Santo Domingo (UASD)",
    logo: "https://via.placeholder.com/120x80/FFD700/000000?text=UASD",
    industry: "Educación",
    location: "Ciudad Universitaria, Santo Domingo",
    services: ["Limpieza de Aulas", "Laboratorios", "Bibliotecas", "Áreas Deportivas"],
    contractStart: "2023-08-01",
    rating: 4,
    testimonial: "Como la universidad más grande del país, necesitamos un servicio confiable y eficiente. JEDA ha demostrado estar a la altura del desafío.",
    contact: {
      person: "Directora de Servicios Generales María José Peña",
      phone: "+1 809-535-8273",
      email: "mariajose.pena@uasd.edu.do"
    },
    description: "La universidad más antigua del continente americano que requiere servicios de limpieza para múltiples facultades y facilidades académicas.",
    size: "Corporativa",
    featured: false
  },
  {
    id: 11,
    name: "Aeropuerto Internacional Las Américas",
    logo: "https://via.placeholder.com/120x80/1E90FF/FFFFFF?text=AILA",
    industry: "Transporte",
    location: "Punta Caucedo, Santo Domingo",
    services: ["Limpieza de Terminales", "Áreas de Seguridad", "Restaurantes", "Mantenimiento General"],
    contractStart: "2022-05-15",
    rating: 5,
    testimonial: "La imagen de nuestro país comienza en el aeropuerto. JEDA nos ayuda a dar la mejor primera impresión a los visitantes internacionales.",
    contact: {
      person: "Director de Operaciones Carlos Jiménez",
      phone: "+1 809-947-2225",
      email: "carlos.jimenez@aerodom.com"
    },
    description: "Principal aeropuerto internacional del país que maneja millones de pasajeros anuales y requiere limpieza especializada 24/7.",
    size: "Corporativa",
    featured: true
  },
  {
    id: 12,
    name: "Centro Médico Dr. Canela",
    logo: "https://via.placeholder.com/120x80/32CD32/FFFFFF?text=CDC",
    industry: "Salud",
    location: "La Esperilla, Santo Domingo",
    services: ["Limpieza Hospitalaria Especializada", "Esterilización", "Manejo de Residuos Médicos"],
    contractStart: "2023-04-01",
    rating: 5,
    testimonial: "La bioseguridad es nuestra prioridad. JEDA cumple con todos los protocolos internacionales de limpieza hospitalaria.",
    contact: {
      person: "Dra. Patricia Canela",
      phone: "+1 809-567-2424",
      email: "patricia.canela@centrocanela.com.do"
    },
    description: "Centro médico privado de especialidades que requiere los más altos estándares de limpieza y desinfección hospitalaria.",
    size: "Mediana",
    featured: false
  }
];

const industries = ["Todos", "Financiero", "Salud", "Retail", "Tecnología", "Gastronomía", "Educación", "Manufacturera", "Gubernamental", "Hotelería", "Transporte"];
const sizes = ["Todos", "Pequeña", "Mediana", "Grande", "Corporativa"];

export default function Clients() {
  const [selectedIndustry, setSelectedIndustry] = useState("Todos");
  const [selectedSize, setSelectedSize] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const filteredClients = clients.filter(client => {
    const matchesIndustry = selectedIndustry === "Todos" || client.industry === selectedIndustry;
    const matchesSize = selectedSize === "Todos" || client.size === selectedSize;
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFeatured = !showOnlyFeatured || client.featured;
    
    return matchesIndustry && matchesSize && matchesSearch && matchesFeatured;
  });

  const featuredClients = clients.filter(client => client.featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
              Nuestros Clientes
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Confiando en JEDA para mantener sus instalaciones impecables. 
              Desde pequeñas empresas hasta grandes corporaciones, brindamos servicios de limpieza profesional adaptados a cada necesidad.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Building2 className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{clients.length}+</div>
                <div className="text-muted-foreground">Clientes Activos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">11</div>
                <div className="text-muted-foreground">Sectores Industriales</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">4.8</div>
                <div className="text-muted-foreground">Calificación Promedio</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">2+</div>
                <div className="text-muted-foreground">Años de Experiencia</div>
              </CardContent>
            </Card>
          </div>

          {/* Featured Clients Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-500" />
              Clientes Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredClients.map(client => (
                <Card key={client.id} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedClient(client)}>
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-16 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                      <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                    </div>
                    <h3 className="font-semibold text-sm mb-2">{client.name}</h3>
                    <Badge variant="secondary" className="text-xs">{client.industry}</Badge>
                    <div className="flex justify-center mt-2">
                      {renderStars(client.rating)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* Testimonials Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
              <Quote className="h-6 w-6 mr-2 text-primary" />
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredClients.slice(0, 3).map(client => (
                <TestimonialCard
                  key={client.id}
                  clientName={client.name}
                  clientLogo={client.logo}
                  industry={client.industry}
                  testimonial={client.testimonial}
                  rating={client.rating}
                  contactPerson={client.contact.person}
                />
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* Filters Section */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                <span className="font-medium">Filtros:</span>
              </div>
              <Input
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Industria" />
                </SelectTrigger>
                <SelectContent>
                  {industries.map(industry => (
                    <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Tamaño" />
                </SelectTrigger>
                <SelectContent>
                  {sizes.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={showOnlyFeatured ? "default" : "outline"}
                onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
                size="sm"
              >
                Solo Destacados
              </Button>
            </div>
          </div>

          {/* Clients Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredClients.map(client => (
              <Card key={client.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-muted rounded flex items-center justify-center">
                        <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{client.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">{client.industry}</Badge>
                          <Badge variant="secondary" className="text-xs">{client.size}</Badge>
                          {client.featured && (
                            <Badge className="text-xs bg-yellow-500 hover:bg-yellow-600">Destacado</Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {client.location}
                    </div>
                    
                    <div className="flex items-center gap-1">
                      {renderStars(client.rating)}
                      <span className="text-sm ml-2">({client.rating}/5)</span>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-1">Servicios:</div>
                      <div className="flex flex-wrap gap-1">
                        {client.services.slice(0, 2).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {client.services.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{client.services.length - 2} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      "{client.testimonial}"
                    </p>

                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setSelectedClient(client)}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Ver Detalles
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredClients.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron clientes que coincidan con los filtros seleccionados.
              </p>
            </div>
          )}

          {/* Client Detail Modal */}
          <Dialog open={!!selectedClient} onOpenChange={() => setSelectedClient(null)}>
            <DialogContent className="max-w-2xl">
              {selectedClient && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-3">
                      <img src={selectedClient.logo} alt={selectedClient.name} className="w-12 h-8 object-contain" />
                      {selectedClient.name}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Industria</div>
                        <div>{selectedClient.industry}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Tamaño</div>
                        <div>{selectedClient.size}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Ubicación</div>
                        <div>{selectedClient.location}</div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-muted-foreground">Cliente desde</div>
                        <div>{new Date(selectedClient.contractStart).toLocaleDateString()}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Descripción</div>
                      <p className="text-sm">{selectedClient.description}</p>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Servicios Contratados</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedClient.services.map((service, index) => (
                          <Badge key={index} variant="secondary">{service}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Calificación</div>
                      <div className="flex items-center gap-2">
                        {renderStars(selectedClient.rating)}
                        <span>({selectedClient.rating}/5)</span>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="text-sm font-medium text-muted-foreground mb-2">Testimonio</div>
                      <p className="text-sm italic">"{selectedClient.testimonial}"</p>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Contacto</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          {selectedClient.contact.person}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          {selectedClient.contact.phone}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4" />
                          {selectedClient.contact.email}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </main>

      <Footer />
    </div>
  );
}
