import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { MapPin, Clock, Briefcase, Users, Send, Upload, DollarSign, GraduationCap } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useToast } from '../hooks/use-toast';

// Datos de empleos disponibles
const jobListings = [
  {
    id: 1,
    title: 'Supervisor de Limpieza',
    department: 'Operaciones',
    location: 'Santo Domingo, RD',
    type: 'Tiempo Completo',
    salary: 'RD$ 35,000 - 45,000',
    experience: '2-3 años',
    description: 'Buscamos un supervisor experimentado para liderar nuestro equipo de limpieza en proyectos comerciales e industriales.',
    responsibilities: [
      'Supervisar equipos de trabajo de 5-10 personas',
      'Garantizar el cumplimiento de estándares de calidad',
      'Coordinar horarios y asignaciones de personal',
      'Realizar inspecciones de calidad',
      'Manejar inventario de productos y equipos'
    ],
    requirements: [
      'Experiencia mínima de 2 años en supervisión',
      'Conocimiento en productos de limpieza industrial',
      'Habilidades de liderazgo y comunicación',
      'Licencia de conducir vigente',
      'Disponibilidad de horarios'
    ],
    benefits: ['Seguro médico', 'Bonos por rendimiento', 'Capacitación continua'],
    urgent: true
  },
  {
    id: 2,
    title: 'Técnico en Limpieza Industrial',
    department: 'Técnico',
    location: 'Santiago, RD',
    type: 'Tiempo Completo',
    salary: 'RD$ 25,000 - 32,000',
    experience: '1-2 años',
    description: 'Técnico especializado en limpieza de instalaciones industriales y manejo de equipos especializados.',
    responsibilities: [
      'Operar equipos de limpieza industrial',
      'Aplicar productos químicos según protocolos',
      'Mantener registros de actividades',
      'Cumplir normas de seguridad ocupacional',
      'Reportar incidencias y necesidades'
    ],
    requirements: [
      'Bachillerato completo',
      'Experiencia en limpieza industrial',
      'Conocimiento básico de química',
      'Certificaciones de seguridad (preferible)',
      'Capacidad física para el trabajo'
    ],
    benefits: ['Seguro médico', 'Uniforme incluido', 'Transporte'],
    urgent: false
  },
  {
    id: 3,
    title: 'Vendedor de Productos de Limpieza',
    department: 'Ventas',
    location: 'Santo Domingo, RD',
    type: 'Tiempo Completo',
    salary: 'RD$ 30,000 + Comisiones',
    experience: '1-3 años',
    description: 'Representante de ventas para productos de limpieza dirigido a clientes comerciales e institucionales.',
    responsibilities: [
      'Desarrollar cartera de clientes B2B',
      'Presentar productos y soluciones',
      'Negociar contratos y precios',
      'Mantener relaciones con clientes existentes',
      'Cumplir metas de ventas mensuales'
    ],
    requirements: [
      'Licenciatura en áreas comerciales',
      'Experiencia en ventas B2B',
      'Excelentes habilidades de comunicación',
      'Conocimiento de productos químicos (preferible)',
      'Licencia de conducir y vehículo propio'
    ],
    benefits: ['Comisiones atractivas', 'Seguro médico', 'Celular corporativo'],
    urgent: true
  },
  {
    id: 4,
    title: 'Operario de Limpieza',
    department: 'Operaciones',
    location: 'Múltiples ubicaciones',
    type: 'Tiempo Completo',
    salary: 'RD$ 20,000 - 25,000',
    experience: 'Sin experiencia',
    description: 'Personal operativo para servicios de limpieza en oficinas, comercios y residencias.',
    responsibilities: [
      'Realizar labores de limpieza general',
      'Mantener orden en áreas asignadas',
      'Usar equipos y productos correctamente',
      'Seguir protocolos de seguridad',
      'Reportar novedades al supervisor'
    ],
    requirements: [
      'Secundaria completa',
      'Disponibilidad de horarios',
      'Responsabilidad y puntualidad',
      'Buena presentación personal',
      'Capacidad de trabajo en equipo'
    ],
    benefits: ['Seguro médico', 'Uniforme', 'Oportunidad de crecimiento'],
    urgent: false
  },
  {
    id: 5,
    title: 'Coordinador de Logística',
    department: 'Logística',
    location: 'Santo Domingo, RD',
    type: 'Tiempo Completo',
    salary: 'RD$ 40,000 - 50,000',
    experience: '3-5 años',
    description: 'Coordinador para gestión de inventarios, distribución y logística de productos y equipos.',
    responsibilities: [
      'Gestionar inventario de productos',
      'Coordinar entregas y distribución',
      'Optimizar rutas de transporte',
      'Controlar costos logísticos',
      'Supervisar almacenes y bodegas'
    ],
    requirements: [
      'Ingeniería Industrial o carrera afín',
      'Experiencia en logística y distribución',
      'Conocimiento en sistemas ERP',
      'Habilidades analíticas',
      'Licencia de conducir'
    ],
    benefits: ['Seguro médico familiar', 'Bonos de productividad', 'Capacitación'],
    urgent: false
  },
  {
    id: 6,
    title: 'Especialista en Seguridad Ocupacional',
    department: 'Recursos Humanos',
    location: 'Santo Domingo, RD',
    type: 'Tiempo Completo',
    salary: 'RD$ 45,000 - 55,000',
    experience: '2-4 años',
    description: 'Especialista en implementar y supervisar programas de seguridad y salud ocupacional.',
    responsibilities: [
      'Desarrollar programas de seguridad',
      'Realizar capacitaciones de seguridad',
      'Investigar accidentes laborales',
      'Auditar cumplimiento de normas',
      'Mantener certificaciones de seguridad'
    ],
    requirements: [
      'Ingeniería en Seguridad Industrial',
      'Certificaciones en seguridad ocupacional',
      'Conocimiento de normativas laborales',
      'Habilidades de capacitación',
      'Experiencia en empresas de servicios'
    ],
    benefits: ['Seguro médico premium', 'Certificaciones pagadas', 'Flexibilidad horaria'],
    urgent: true
  }
];

const Jobs: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    coverLetter: '',
    experience: '',
    availability: ''
  });
  const [filterDepartment, setFilterDepartment] = useState('all');
  const { toast } = useToast();

  const departments = ['all', 'Operaciones', 'Técnico', 'Ventas', 'Logística', 'Recursos Humanos'];

  const filteredJobs = filterDepartment === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department === filterDepartment);

  const handleApplyClick = (job: any) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, resume: file }));
    }
  };

  const handleSubmitApplication = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.resume) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa todos los campos obligatorios.",
        variant: "destructive"
      });
      return;
    }

    // Simular envío de aplicación
    toast({
      title: "¡Aplicación enviada!",
      description: `Tu aplicación para ${selectedJob?.title} ha sido enviada exitosamente.`,
    });

    // Limpiar formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: '',
      experience: '',
      availability: ''
    });
    setIsModalOpen(false);
  };

  const getSalaryIcon = (salary: string) => {
    return <DollarSign className="w-4 h-4 text-green-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Únete a nuestro <span className="text-blue-600">Equipo</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre oportunidades de crecimiento profesional en JEDA. Buscamos personas apasionadas y comprometidas con la excelencia en servicios de limpieza.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <div className="flex items-center gap-2 text-blue-600">
              <Users className="w-5 h-5" />
              <span className="font-semibold">+50 empleados</span>
            </div>
            <div className="flex items-center gap-2 text-green-600">
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">{jobListings.length} vacantes activas</span>
            </div>
            <div className="flex items-center gap-2 text-purple-600">
              <GraduationCap className="w-5 h-5" />
              <span className="font-semibold">Capacitación continua</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Oportunidades Disponibles</h2>
            <Select value={filterDepartment} onValueChange={setFilterDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filtrar por departamento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los departamentos</SelectItem>
                {departments.slice(1).map(dept => (
                  <SelectItem key={dept} value={dept}>{dept}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 relative">
                {job.urgent && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500 text-white z-10">
                    Urgente
                  </Badge>
                )}
                
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </CardTitle>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <Badge variant="outline">{job.department}</Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      {getSalaryIcon(job.salary)}
                      <span className="font-semibold">{job.salary}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <CardDescription className="mb-4 text-sm leading-relaxed">
                    {job.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Experiencia requerida:</h4>
                      <Badge variant="secondary">{job.experience}</Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700 mb-2">Beneficios:</h4>
                      <div className="flex flex-wrap gap-1">
                        {job.benefits.slice(0, 2).map((benefit, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {benefit}
                          </Badge>
                        ))}
                        {job.benefits.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{job.benefits.length - 2} más
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => handleApplyClick(job)}
                    className="w-full mt-6 group-hover:bg-blue-600 transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Aplicar Ahora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Aplicar para: {selectedJob?.title}
            </DialogTitle>
            <DialogDescription>
              Completa el formulario para enviar tu aplicación. Todos los campos marcados con * son obligatorios.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            {/* Información personal */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Información Personal</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="tu@email.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (809) 000-0000"
                />
              </div>
            </div>

            {/* Currículum */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Documentos</h3>
              
              <div className="space-y-2">
                <Label htmlFor="resume">Currículum Vitae (PDF) *</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="cursor-pointer"
                  />
                  <Upload className="w-5 h-5 text-gray-400" />
                </div>
                {formData.resume && (
                  <p className="text-sm text-green-600">
                    ✓ Archivo seleccionado: {formData.resume.name}
                  </p>
                )}
              </div>
            </div>

            {/* Información adicional */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Información Adicional</h3>
              
              <div className="space-y-2">
                <Label htmlFor="experience">Experiencia relevante</Label>
                <Select value={formData.experience} onValueChange={(value) => handleInputChange('experience', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu nivel de experiencia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sin-experiencia">Sin experiencia</SelectItem>
                    <SelectItem value="1-2-anos">1-2 años</SelectItem>
                    <SelectItem value="3-5-anos">3-5 años</SelectItem>
                    <SelectItem value="5-mas-anos">Más de 5 años</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="availability">Disponibilidad</Label>
                <Select value={formData.availability} onValueChange={(value) => handleInputChange('availability', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu disponibilidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inmediata">Inmediata</SelectItem>
                    <SelectItem value="1-semana">En 1 semana</SelectItem>
                    <SelectItem value="2-semanas">En 2 semanas</SelectItem>
                    <SelectItem value="1-mes">En 1 mes</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Carta de presentación (opcional)</Label>
                <Textarea
                  id="coverLetter"
                  value={formData.coverLetter}
                  onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                  placeholder="Cuéntanos por qué te interesa esta posición..."
                  rows={4}
                />
              </div>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSubmitApplication}>
              <Send className="w-4 h-4 mr-2" />
              Enviar Aplicación
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué trabajar en <span className="text-blue-600">JEDA</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos un ambiente de trabajo profesional con oportunidades de crecimiento y beneficios competitivos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Desarrollo Profesional</h4>
              <p className="text-gray-600">Capacitación continua y oportunidades de crecimiento dentro de la empresa</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Ambiente Colaborativo</h4>
              <p className="text-gray-600">Equipo unido y ambiente de trabajo positivo y respetuoso</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Beneficios Competitivos</h4>
              <p className="text-gray-600">Salarios justos, seguro médico, bonos de rendimiento y más beneficios</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;