import { useState } from "react";
import { Users, MapPin, Mail, Phone, Calendar, Award, ChevronDown, ChevronUp, Star, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  department: string;
  photo: string;
  email: string;
  phone: string;
  location: string;
  joinDate: string;
  experience: number;
  specialties: string[];
  bio: string;
  achievements: string[];
  isFounder: boolean;
  education: string;
  certifications: string[];
}

const teamMembers: TeamMember[] = [
  // Fundadores
  {
    id: 1,
    name: "Diógenes Romano",
    position: "CEO y Fundador",
    department: "Dirección Ejecutiva",
    photo: "https://via.placeholder.com/300x300/1E40AF/FFFFFF?text=DR",
    email: "diogenes.romano@jeda.com.do",
    phone: "+1 809-555-0101",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2017-04-28",
    experience: 15,
    specialties: ["Liderazgo Empresarial", "Estrategia Corporativa", "Gestión de Calidad"],
    bio: "Visionario fundador de JEDA con más de 15 años de experiencia en la industria de servicios de limpieza. Diógenes ha liderado la transformación digital de la empresa y establecido los estándares de calidad que nos distinguen en el mercado dominicano.",
    achievements: [
      "Fundador y CEO de JEDA Servicios de Limpieza",
      "Pionero en servicios de limpieza ecológica en RD",
      "Certificación en Gestión de Calidad ISO 9001",
      "Líder empresarial reconocido por la Cámara de Comercio"
    ],
    isFounder: true,
    education: "MBA en Administración de Empresas, PUCMM",
    certifications: ["ISO 9001 Lead Auditor", "Gestión Empresarial Avanzada"]
  },
  {
    id: 2,
    name: "Ángel Sánchez",
    position: "CTO y Co-fundador",
    department: "Tecnología",
    photo: "https://via.placeholder.com/300x300/059669/FFFFFF?text=AS",
    email: "angel.sanchez@jeda.com.do",
    phone: "+1 809-555-0102",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2017-04-28",
    experience: 12,
    specialties: ["Desarrollo de Software", "Sistemas de Gestión", "Automatización"],
    bio: "Co-fundador y Chief Technology Officer de JEDA. Ángel ha sido fundamental en la implementación de sistemas tecnológicos avanzados que optimizan nuestras operaciones y mejoran la experiencia del cliente.",
    achievements: [
      "Co-fundador de JEDA y arquitecto de sistemas",
      "Desarrollo del sistema de gestión integral JEDA App",
      "Implementación de IoT en servicios de limpieza",
      "Certificación en Transformación Digital"
    ],
    isFounder: true,
    education: "Ingeniería en Sistemas, INTEC",
    certifications: ["AWS Certified Solutions Architect", "Scrum Master Certified"]
  },
  {
    id: 3,
    name: "Julio González",
    position: "COO y Co-fundador",
    department: "Operaciones",
    photo: "https://via.placeholder.com/300x300/DC2626/FFFFFF?text=JG",
    email: "julio.gonzalez@jeda.com.do",
    phone: "+1 809-555-0103",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2017-04-28",
    experience: 14,
    specialties: ["Gestión Operacional", "Logística", "Control de Calidad"],
    bio: "Co-fundador y Director de Operaciones de JEDA. Julio supervisa todas las operaciones diarias y ha establecido los protocolos de calidad que garantizan la excelencia en cada servicio que brindamos.",
    achievements: [
      "Co-fundador y COO de JEDA",
      "Creador del sistema de calidad JEDA Excellence",
      "Reducción del 40% en tiempos de servicio",
      "Certificación en Lean Six Sigma Black Belt"
    ],
    isFounder: true,
    education: "Ingeniería Industrial, UNPHU",
    certifications: ["Lean Six Sigma Black Belt", "Project Management Professional (PMP)"]
  },
  {
    id: 4,
    name: "Esthiber Valentín",
    position: "CIO y Co-fundador",
    department: "Innovación",
    photo: "https://via.placeholder.com/300x300/7C3AED/FFFFFF?text=EV",
    email: "esthiber.valentin@jeda.com.do",
    phone: "+1 809-555-0104",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2022-05-62",
    experience: 8,
    specialties: ["Innovación Tecnológica", "Investigación y Desarrollo", "Sostenibilidad"],
    bio: "Co-fundador más reciente y Chief Innovation Officer de JEDA. Esthiber lidera las iniciativas de innovación y sostenibilidad, desarrollando nuevas soluciones ecológicas y tecnologías disruptivas para el sector.",
    achievements: [
      "Co-fundador e impulsor de innovación en JEDA",
      "Desarrollo de productos de limpieza biodegradables",
      "Implementación de tecnología verde",
      "Reconocimiento por innovación empresarial sostenible"
    ],
    isFounder: true,
    education: "Ingeniería Química, UASD",
    certifications: ["Certified Innovation Management Professional", "Green Chemistry Specialist"]
  },
  
  // Equipo de Dirección
  {
    id: 5,
    name: "Carmen Mercedes Díaz",
    position: "Directora de Recursos Humanos",
    department: "Recursos Humanos",
    photo: "https://via.placeholder.com/300x300/F59E0B/FFFFFF?text=CD",
    email: "carmen.diaz@jeda.com.do",
    phone: "+1 809-555-0201",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2018-03-15",
    experience: 10,
    specialties: ["Gestión de Talento", "Desarrollo Organizacional", "Relaciones Laborales"],
    bio: "Directora de Recursos Humanos con amplia experiencia en gestión del talento humano. Carmen lidera el desarrollo profesional de nuestro equipo y mantiene un ambiente laboral positivo y productivo.",
    achievements: [
      "Implementación del programa de desarrollo profesional JEDA Crece",
      "Reducción del 60% en rotación de personal",
      "Certificación en Gestión del Talento Humano",
      "Creación del programa de bienestar laboral"
    ],
    isFounder: false,
    education: "Licenciatura en Psicología Industrial, UCSD",
    certifications: ["SHRM-CP", "Coaching Organizacional Certificado"]
  },
  {
    id: 6,
    name: "Roberto Antonio Mejía",
    position: "Director Financiero (CFO)",
    department: "Finanzas",
    photo: "https://via.placeholder.com/300x300/0EA5E9/FFFFFF?text=RM",
    email: "roberto.mejia@jeda.com.do",
    phone: "+1 809-555-0202",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2018-01-10",
    experience: 12,
    specialties: ["Gestión Financiera", "Análisis de Inversiones", "Planificación Estratégica"],
    bio: "Director Financiero con sólida experiencia en gestión financiera empresarial. Roberto supervisa todas las operaciones financieras y ha sido clave en el crecimiento sostenible de JEDA.",
    achievements: [
      "Incremento del 200% en rentabilidad desde su incorporación",
      "Implementación de sistema ERP financiero",
      "Certificación CPA y MBA en Finanzas",
      "Obtención de líneas de crédito preferenciales"
    ],
    isFounder: false,
    education: "CPA, MBA en Finanzas, PUCMM",
    certifications: ["Certified Public Accountant (CPA)", "Financial Risk Manager (FRM)"]
  },

  // Supervisores y Coordinadores
  {
    id: 7,
    name: "Ana Luisa Fernández",
    position: "Supervisora de Calidad",
    department: "Calidad",
    photo: "https://via.placeholder.com/300x300/10B981/FFFFFF?text=AF",
    email: "ana.fernandez@jeda.com.do",
    phone: "+1 809-555-0301",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2019-06-20",
    experience: 8,
    specialties: ["Control de Calidad", "Auditorías Internas", "Mejora Continua"],
    bio: "Supervisora de Calidad encargada de mantener los altos estándares de servicio que caracterizan a JEDA. Ana garantiza que cada servicio cumpla con nuestros protocolos de excelencia.",
    achievements: [
      "Certificación ISO 9001 para JEDA",
      "Desarrollo del programa de auditorías internas",
      "Implementación de KPIs de calidad",
      "Reducción del 80% en quejas de clientes"
    ],
    isFounder: false,
    education: "Ingeniería Industrial, UTESA",
    certifications: ["ISO 9001 Lead Auditor", "Six Sigma Green Belt"]
  },
  {
    id: 8,
    name: "Miguel Ángel Santos",
    position: "Coordinador de Logística",
    department: "Operaciones",
    photo: "https://via.placeholder.com/300x300/8B5CF6/FFFFFF?text=MS",
    email: "miguel.santos@jeda.com.do",
    phone: "+1 809-555-0302",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2020-02-14",
    experience: 6,
    specialties: ["Logística", "Gestión de Inventarios", "Optimización de Rutas"],
    bio: "Coordinador de Logística responsable de la eficiente distribución de recursos y equipos. Miguel asegura que nuestros equipos tengan todo lo necesario para brindar un servicio excepcional.",
    achievements: [
      "Optimización de rutas con reducción del 30% en tiempos",
      "Implementación de sistema de inventario automatizado",
      "Certificación en Supply Chain Management",
      "Reducción del 25% en costos logísticos"
    ],
    isFounder: false,
    education: "Ingeniería Logística, UNAPEC",
    certifications: ["Certified Supply Chain Professional (CSCP)", "Logistics Management Certification"]
  },

  // Especialistas Técnicos
  {
    id: 9,
    name: "Yolanda Patricia Cruz",
    position: "Especialista en Limpieza Hospitalaria",
    department: "Operaciones Especializadas",
    photo: "https://via.placeholder.com/300x300/EC4899/FFFFFF?text=YC",
    email: "yolanda.cruz@jeda.com.do",
    phone: "+1 809-555-0401",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2019-09-05",
    experience: 9,
    specialties: ["Limpieza Hospitalaria", "Bioseguridad", "Manejo de Residuos Médicos"],
    bio: "Especialista en limpieza hospitalaria con certificación internacional. Yolanda lidera nuestros servicios en el sector salud, garantizando el cumplimiento de todos los protocolos de bioseguridad.",
    achievements: [
      "Certificación internacional en limpieza hospitalaria",
      "Implementación de protocolos COVID-19",
      "Capacitación del 100% del equipo en bioseguridad",
      "Cero incidentes en servicios hospitalarios"
    ],
    isFounder: false,
    education: "Técnico Superior en Enfermería, UTECO",
    certifications: ["Certified Healthcare Environmental Services Professional", "Infection Prevention Specialist"]
  },
  {
    id: 10,
    name: "Francisco Javier Herrera",
    position: "Técnico en Equipos Industriales",
    department: "Mantenimiento",
    photo: "https://via.placeholder.com/300x300/F97316/FFFFFF?text=FH",
    email: "francisco.herrera@jeda.com.do",
    phone: "+1 809-555-0402",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2020-08-12",
    experience: 7,
    specialties: ["Mantenimiento Industrial", "Reparación de Equipos", "Sistemas de Limpieza"],
    bio: "Técnico especializado en mantenimiento y reparación de equipos de limpieza industrial. Francisco garantiza que nuestros equipos operen al máximo rendimiento.",
    achievements: [
      "Reducción del 50% en tiempo de inactividad de equipos",
      "Implementación de mantenimiento predictivo",
      "Certificación en sistemas hidráulicos",
      "Desarrollo de programa de mantenimiento preventivo"
    ],
    isFounder: false,
    education: "Técnico Industrial, INFOTEP",
    certifications: ["Industrial Maintenance Technician", "Hydraulic Systems Specialist"]
  },

  // Representantes de Ventas y Atención al Cliente
  {
    id: 11,
    name: "Maritza Elena Jiménez",
    position: "Gerente de Ventas",
    department: "Ventas",
    photo: "https://via.placeholder.com/300x300/EF4444/FFFFFF?text=MJ",
    email: "maritza.jimenez@jeda.com.do",
    phone: "+1 809-555-0501",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2018-11-28",
    experience: 11,
    specialties: ["Ventas Corporativas", "Desarrollo de Clientes", "Negociación"],
    bio: "Gerente de Ventas con amplia experiencia en el sector corporativo. Maritza ha sido fundamental en el crecimiento de nuestra cartera de clientes empresariales.",
    achievements: [
      "Incremento del 300% en ventas corporativas",
      "Desarrollo de 50+ cuentas empresariales",
      "Certificación en ventas consultivas",
      "Premio a la excelencia en ventas 2023"
    ],
    isFounder: false,
    education: "Licenciatura en Mercadeo, UASD",
    certifications: ["Certified Sales Professional (CSP)", "Key Account Management"]
  },
  {
    id: 12,
    name: "Andrés Felipe Castillo",
    position: "Coordinador de Atención al Cliente",
    department: "Atención al Cliente",
    photo: "https://via.placeholder.com/300x300/06B6D4/FFFFFF?text=AC",
    email: "andres.castillo@jeda.com.do",
    phone: "+1 809-555-0502",
    location: "Santo Domingo, República Dominicana",
    joinDate: "2021-01-18",
    experience: 5,
    specialties: ["Atención al Cliente", "Resolución de Conflictos", "CRM"],
    bio: "Coordinador de Atención al Cliente dedicado a garantizar la satisfacción total de nuestros clientes. Andrés lidera el equipo de servicio al cliente con enfoque en la excelencia.",
    achievements: [
      "Incremento del 95% en satisfacción del cliente",
      "Implementación de sistema CRM avanzado",
      "Reducción del 70% en tiempo de respuesta",
      "Certificación en Customer Experience Management"
    ],
    isFounder: false,
    education: "Licenciatura en Comunicación, PUCMM",
    certifications: ["Customer Experience Professional (CXP)", "Conflict Resolution Specialist"]
  }
];

const departments = ["Todos", "Dirección Ejecutiva", "Tecnología", "Operaciones", "Innovación", "Recursos Humanos", "Finanzas", "Calidad", "Operaciones Especializadas", "Mantenimiento", "Ventas", "Atención al Cliente"];

export default function Team() {
  const [selectedDepartment, setSelectedDepartment] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");
  const [showOnlyFounders, setShowOnlyFounders] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [expandedBios, setExpandedBios] = useState<Set<number>>(new Set());

  const filteredMembers = teamMembers.filter(member => {
    const matchesDepartment = selectedDepartment === "Todos" || member.department === selectedDepartment;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFounder = !showOnlyFounders || member.isFounder;
    
    return matchesDepartment && matchesSearch && matchesFounder;
  });

  const founders = teamMembers.filter(member => member.isFounder);

  const toggleBio = (memberId: number) => {
    const newExpanded = new Set(expandedBios);
    if (newExpanded.has(memberId)) {
      newExpanded.delete(memberId);
    } else {
      newExpanded.add(memberId);
    }
    setExpandedBios(newExpanded);
  };

  const calculateYearsOfService = (joinDate: string) => {
    const join = new Date(joinDate);
    const now = new Date();
    const years = now.getFullYear() - join.getFullYear();
    return years;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading text-foreground mb-4">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Conoce a los profesionales que hacen posible la excelencia en cada servicio. 
              Un equipo comprometido con la calidad, innovación y satisfacción del cliente.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{teamMembers.length}+</div>
                <div className="text-muted-foreground">Miembros del Equipo</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{founders.length}</div>
                <div className="text-muted-foreground">Fundadores</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Briefcase className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">{departments.length - 1}</div>
                <div className="text-muted-foreground">Departamentos</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">8+</div>
                <div className="text-muted-foreground">Años de Trayectoria</div>
              </CardContent>
            </Card>
          </div>

          {/* Founders Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold font-heading mb-6 flex items-center">
              <Star className="h-6 w-6 mr-2 text-yellow-500" />
              Fundadores de JEDA
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {founders.map(founder => (
                <Card key={founder.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img src={founder.photo} alt={founder.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-bold text-lg mb-1">{founder.name}</h3>
                    <p className="text-primary font-medium mb-2">{founder.position}</p>
                    <Badge variant="outline" className="mb-3">Desde {founder.joinDate.split('-')[0]}</Badge>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {founder.bio}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3 w-full"
                      onClick={() => setSelectedMember(founder)}
                    >
                      Ver Perfil
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-8" />

          {/* Filters Section */}
          <div className="mb-8 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-medium">Filtros:</span>
              </div>
              <Input
                placeholder="Buscar miembros del equipo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-xs"
              />
              <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="Departamento" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map(dept => (
                    <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button
                variant={showOnlyFounders ? "default" : "outline"}
                onClick={() => setShowOnlyFounders(!showOnlyFounders)}
                size="sm"
              >
                Solo Fundadores
              </Button>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map(member => (
              <Card key={member.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                      <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg flex items-center gap-2">
                        {member.name}
                        {member.isFounder && (
                          <Badge className="text-xs bg-yellow-500 hover:bg-yellow-600">Fundador</Badge>
                        )}
                      </CardTitle>
                      <p className="text-primary font-medium text-sm">{member.position}</p>
                      <Badge variant="outline" className="text-xs mt-1">{member.department}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-1" />
                      {member.location}
                    </div>
                    
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {calculateYearsOfService(member.joinDate)} años en JEDA
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-1">Especialidades:</div>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties.slice(0, 2).map((specialty, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {specialty}
                          </Badge>
                        ))}
                        {member.specialties.length > 2 && (
                          <Badge variant="secondary" className="text-xs">
                            +{member.specialties.length - 2} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="w-full justify-between p-0 h-auto"
                          onClick={() => toggleBio(member.id)}
                        >
                          <span className="text-sm">Biografía</span>
                          {expandedBios.has(member.id) ? 
                            <ChevronUp className="h-4 w-4" /> : 
                            <ChevronDown className="h-4 w-4" />
                          }
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                          {member.bio}
                        </p>
                      </CollapsibleContent>
                    </Collapsible>

                    <div className="pt-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        onClick={() => setSelectedMember(member)}
                      >
                        Ver Perfil Completo
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                No se encontraron miembros del equipo que coincidan con los filtros seleccionados.
              </p>
            </div>
          )}

          {/* Member Detail Modal */}
          <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              {selectedMember && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-4">
                      <img src={selectedMember.photo} alt={selectedMember.name} className="w-16 h-16 rounded-full object-cover" />
                      <div>
                        <div className="flex items-center gap-2">
                          {selectedMember.name}
                          {selectedMember.isFounder && (
                            <Badge className="bg-yellow-500 hover:bg-yellow-600">Fundador</Badge>
                          )}
                        </div>
                        <div className="text-primary font-medium text-lg">{selectedMember.position}</div>
                      </div>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-1">Información Personal</div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              {selectedMember.location}
                            </div>
                            <div className="flex items-center gap-2">
                              <Mail className="h-4 w-4" />
                              {selectedMember.email}
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="h-4 w-4" />
                              {selectedMember.phone}
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              Se unió: {new Date(selectedMember.joinDate).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Departamento</div>
                          <Badge variant="outline">{selectedMember.department}</Badge>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Experiencia</div>
                          <div className="text-sm">{selectedMember.experience} años en la industria</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Educación</div>
                          <div className="text-sm">{selectedMember.education}</div>
                        </div>

                        <div>
                          <div className="text-sm font-medium text-muted-foreground mb-2">Certificaciones</div>
                          <div className="space-y-1">
                            {selectedMember.certifications.map((cert, index) => (
                              <Badge key={index} variant="secondary" className="text-xs mr-1 mb-1">
                                {cert}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Especialidades</div>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline">{specialty}</Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Biografía Profesional</div>
                      <p className="text-sm leading-relaxed">{selectedMember.bio}</p>
                    </div>

                    <div>
                      <div className="text-sm font-medium text-muted-foreground mb-2">Principales Logros</div>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <Award className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
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