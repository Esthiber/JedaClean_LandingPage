import { useState } from "react";
import { Building2, Target, Eye, Heart, Award, Users, Calendar, MapPin, Phone, Mail, ExternalLink, ChevronRight, Star, Shield, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Milestone {
  year: string;
  title: string;
  description: string;
  impact: string;
}

interface Value {
  icon: any;
  title: string;
  description: string;
  examples: string[];
}

interface Achievement {
  metric: string;
  value: string;
  description: string;
  icon: any;
}

const milestones: Milestone[] = [
  {
    year: "2017",
    title: "Fundación de JEDA",
    description: "Diógenes Romano, Ángel Sánchez y Julio González fundan JEDA Servicios de Limpieza con la visión de revolucionar la industria de limpieza en República Dominicana.",
    impact: "3 fundadores, 1 sueño compartido"
  },
  {
    year: "2018",
    title: "Primeros Grandes Contratos",
    description: "Obtención de contratos con instituciones gubernamentales y empresas corporativas, estableciendo JEDA como referente de calidad.",
    impact: "10+ clientes corporativos"
  },
  {
    year: "2019",
    title: "Certificación ISO 9001",
    description: "Primera empresa dominicana de limpieza en obtener certificación internacional de calidad, marcando un hito en la industria.",
    impact: "Estándares internacionales implementados"
  },
  {
    year: "2020",
    title: "Liderazgo en Pandemia",
    description: "Durante COVID-19, JEDA se convierte en líder nacional en protocolos de desinfección y bioseguridad, salvaguardando la salud pública.",
    impact: "500+ espacios sanitizados durante la pandemia"
  },
  {
    year: "2021",
    title: "Expansión Tecnológica",
    description: "Lanzamiento de la plataforma digital JEDA App y implementación de IoT para monitoreo en tiempo real de servicios.",
    impact: "100% digitalización de procesos"
  },
  {
    year: "2022",
    title: "Innovación Sostenible",
    description: "Incorporación de Esthiber Valentín como CIO e inicio de línea de productos ecológicos biodegradables.",
    impact: "4to fundador, enfoque verde"
  },
  {
    year: "2023",
    title: "Reconocimiento Nacional",
    description: "Premio a la Excelencia Empresarial otorgado por la Cámara de Comercio de Santo Domingo por innovación y calidad.",
    impact: "Empresa del año en servicios"
  },
  {
    year: "2024",
    title: "Expansión Regional",
    description: "Apertura de operaciones en Santiago y Puerto Plata, consolidando presencia nacional en República Dominicana.",
    impact: "3 ciudades principales cubiertas"
  },
  {
    year: "2025",
    title: "Líder del Mercado",
    description: "Consolidación como la empresa líder en servicios de limpieza profesional en República Dominicana con proyección internacional.",
    impact: "12+ empleados, 12+ clientes activos"
  }
];

const companyValues: Value[] = [
  {
    icon: Shield,
    title: "Calidad Inquebrantable",
    description: "Mantenemos los más altos estándares de calidad en cada servicio, superando las expectativas de nuestros clientes.",
    examples: ["Certificación ISO 9001", "Auditorías internas regulares", "Protocolos de calidad documentados", "Capacitación continua del equipo"]
  },
  {
    icon: Heart,
    title: "Compromiso Humano",
    description: "Valoramos a nuestro equipo como el activo más importante, promoviendo un ambiente de respeto, crecimiento y bienestar.",
    examples: ["Programa JEDA Crece de desarrollo profesional", "Beneficios competitivos", "Ambiente laboral positivo", "Reconocimiento al mérito"]
  },
  {
    icon: Leaf,
    title: "Responsabilidad Ambiental",
    description: "Implementamos prácticas sostenibles y productos ecológicos, contribuyendo a la preservación del medio ambiente.",
    examples: ["Productos biodegradables", "Tecnología verde", "Reducción de huella de carbono", "Educación ambiental"]
  },
  {
    icon: Star,
    title: "Innovación Continua",
    description: "Adoptamos las últimas tecnologías y metodologías para ofrecer soluciones innovadoras y eficientes.",
    examples: ["JEDA App digital", "IoT en servicios", "Automatización de procesos", "I+D constante"]
  },
  {
    icon: Users,
    title: "Orientación al Cliente",
    description: "Ponemos al cliente en el centro de todo lo que hacemos, adaptándonos a sus necesidades específicas.",
    examples: ["Servicio personalizado", "Atención 24/7", "Flexibilidad de horarios", "Comunicación constante"]
  },
  {
    icon: Award,
    title: "Excelencia Operacional",
    description: "Optimizamos continuamente nuestros procesos para lograr la máxima eficiencia y efectividad.",
    examples: ["Lean Six Sigma", "KPIs de rendimiento", "Mejora continua", "Benchmarking internacional"]
  }
];

const achievements: Achievement[] = [
  {
    metric: "8+",
    value: "Años de Experiencia",
    description: "Desde 2017 liderando el mercado dominicano",
    icon: Calendar
  },
  {
    metric: "12+",
    value: "Clientes Activos",
    description: "Empresas que confían en nuestros servicios",
    icon: Building2
  },
  {
    metric: "500+",
    value: "Espacios Sanitizados",
    description: "Durante la pandemia COVID-19",
    icon: Shield
  },
  {
    metric: "95%",
    value: "Satisfacción del Cliente",
    description: "Calificación promedio de nuestros servicios",
    icon: Star
  },
  {
    metric: "11",
    value: "Sectores Atendidos",
    description: "Desde salud hasta tecnología",
    icon: Target
  },
  {
    metric: "100%",
    value: "Procesos Digitalizados",
    description: "Tecnología en cada aspecto del servicio",
    icon: ExternalLink
  }
];

export default function About() {
  const [selectedYear, setSelectedYear] = useState("2025");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold font-heading text-foreground mb-6">
                Acerca de JEDA
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Somos más que una empresa de limpieza. Somos pioneros en la transformación de espacios, 
                creadores de ambientes saludables y guardianes de la excelencia en cada servicio que brindamos.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Badge variant="outline" className="text-lg py-2 px-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  Fundada en 2017
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  República Dominicana
                </Badge>
                <Badge variant="outline" className="text-lg py-2 px-4">
                  <Award className="h-4 w-4 mr-2" />
                  Certificación ISO 9001
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold font-heading mb-6">
                  Nuestra Historia
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    JEDA nació en 2017 del sueño compartido de tres visionarios: <strong>Diógenes Romano</strong>, 
                    <strong>Ángel Sánchez</strong> y <strong>Julio González</strong>, quienes identificaron la necesidad 
                    de elevar los estándares de la industria de limpieza en República Dominicana.
                  </p>
                  <p className="leading-relaxed">
                    Desde nuestros humildes inicios, hemos crecido hasta convertirnos en la empresa líder del sector, 
                    siempre manteniendo nuestro compromiso con la calidad, innovación y servicio excepcional.
                  </p>
                  <p className="leading-relaxed">
                    En 2022, <strong>Esthiber Valentín</strong> se unió como cuarto fundador, aportando su expertise en 
                    innovación sostenible y consolidando nuestro enfoque hacia un futuro más verde y tecnológico.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <achievement.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                      <div className="text-2xl font-bold text-foreground mb-1">
                        {achievement.metric}
                      </div>
                      <div className="text-sm font-medium mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.description}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <Tabs defaultValue="mission" className="w-full">
              <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
                <TabsTrigger value="mission" className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Misión
                </TabsTrigger>
                <TabsTrigger value="vision" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Visión
                </TabsTrigger>
                <TabsTrigger value="values" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Valores
                </TabsTrigger>
              </TabsList>

              <TabsContent value="mission">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                      <Target className="h-8 w-8 text-primary" />
                      Nuestra Misión
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-lg text-center text-muted-foreground leading-relaxed">
                      Transformar espacios en ambientes saludables, seguros y productivos a través de servicios de limpieza 
                      de excelencia, utilizando tecnología avanzada, productos ecológicos y un equipo humano altamente capacitado. 
                      Nos comprometemos a superar las expectativas de nuestros clientes mientras contribuimos al bienestar de la 
                      sociedad dominicana y la preservación del medio ambiente.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                      <div className="text-center">
                        <Shield className="h-12 w-12 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold mb-2">Excelencia</h4>
                        <p className="text-sm text-muted-foreground">Calidad superior en cada servicio</p>
                      </div>
                      <div className="text-center">
                        <Leaf className="h-12 w-12 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold mb-2">Sostenibilidad</h4>
                        <p className="text-sm text-muted-foreground">Productos y prácticas ecológicas</p>
                      </div>
                      <div className="text-center">
                        <Users className="h-12 w-12 mx-auto mb-3 text-primary" />
                        <h4 className="font-semibold mb-2">Compromiso</h4>
                        <p className="text-sm text-muted-foreground">Equipo dedicado y profesional</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="vision">
                <Card className="max-w-4xl mx-auto">
                  <CardHeader className="text-center">
                    <CardTitle className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                      <Eye className="h-8 w-8 text-primary" />
                      Nuestra Visión
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-8">
                    <p className="text-lg text-center text-muted-foreground leading-relaxed mb-8">
                      Ser reconocidos como la empresa líder en servicios de limpieza profesional en el Caribe para 2030, 
                      estableciendo el estándar de excelencia en la industria a través de la innovación continua, 
                      prácticas sostenibles y un compromiso inquebrantable con la satisfacción del cliente.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Expansión Regional</h4>
                          <p className="text-sm text-muted-foreground">Presencia en todo el Caribe para 2030</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                        <Star className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Liderazgo en Innovación</h4>
                          <p className="text-sm text-muted-foreground">Pioneros en tecnología y sostenibilidad</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
                        <Award className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Estándar de Excelencia</h4>
                          <p className="text-sm text-muted-foreground">Referente de calidad en la industria</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="values">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyValues.map((value, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                      <CardHeader className="text-center pb-4">
                        <value.icon className="h-12 w-12 mx-auto mb-3 text-primary" />
                        <CardTitle className="text-xl">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-4 text-center">
                          {value.description}
                        </p>
                        <div className="space-y-2">
                          {value.examples.map((example, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <ChevronRight className="h-3 w-3 text-primary" />
                              <span>{example}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4">
                Nuestra Trayectoria
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un recorrido de 8 años marcado por hitos importantes, crecimiento sostenido y 
                la consolidación como líderes del mercado dominicano.
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden lg:block"></div>
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col lg:gap-8`}>
                    {/* Content */}
                    <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <Badge className="mb-3">{milestone.year}</Badge>
                          <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                          <p className="text-muted-foreground mb-3 leading-relaxed">
                            {milestone.description}
                          </p>
                          <div className="text-sm font-medium text-primary">
                            {milestone.impact}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 hidden lg:block">
                      <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                    </div>
                    
                    {/* Spacer */}
                    <div className="lg:w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Stats */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Logros</h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto">
                Números que reflejan nuestro compromiso con la excelencia y el crecimiento sostenido en el mercado dominicano.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="h-12 w-12 mx-auto mb-4 text-primary-foreground/90" />
                  <div className="text-4xl font-bold mb-2">{achievement.metric}</div>
                  <div className="text-xl font-semibold mb-2">{achievement.value}</div>
                  <div className="text-primary-foreground/80">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-bold font-heading mb-6">
              ¿Quieres ser parte de JEDA?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Únete a nuestro equipo de profesionales comprometidos con la excelencia, 
              o permítenos transformar tus espacios con nuestros servicios de calidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                <Users className="h-5 w-5 mr-2" />
                Únete al Equipo
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                <Phone className="h-5 w-5 mr-2" />
                Solicita una Cotización
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}