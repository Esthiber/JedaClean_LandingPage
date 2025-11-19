import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Search, Star, Award, CheckCircle, Building2, Sparkles } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Datos de productos por categorías
const productCategories = [
  {
    id: 'detergentes',
    name: 'Detergentes',
    description: 'Productos de limpieza para todo tipo de superficies',
    products: [
      {
        id: 1,
        name: 'JEDA Pro Multiusos',
        brand: 'JEDA',
        description: 'Detergente concentrado para limpieza profunda de todas las superficies',
        image: 'https://placehold.co/300x300/22C55E/FFFFFF?text=JEDA\nPro\nMultiusos',
        features: ['Biodegradable', 'Alta concentración', 'pH neutro'],
        certifications: ['ISO 9001', 'Eco-friendly']
      },
      {
        id: 2,
        name: 'CleanMax Industrial',
        brand: 'CleanMax',
        description: 'Detergente industrial de alto rendimiento para espacios comerciales',
        image: 'https://placehold.co/300x300/3B82F6/FFFFFF?text=CleanMax\nIndustrial',
        features: ['Desengrasante', 'Antibacterial', 'Larga duración'],
        certifications: ['FDA Approved', 'ISO 14001']
      }
    ]
  },
  {
    id: 'desinfectantes',
    name: 'Desinfectantes',
    description: 'Soluciones de desinfección profesional',
    products: [
      {
        id: 3,
        name: 'BioShield Hospital',
        brand: 'BioShield',
        description: 'Desinfectante hospitalario de amplio espectro',
        image: 'https://placehold.co/300x300/EF4444/FFFFFF?text=BioShield\nHospital',
        features: ['99.9% efectivo', 'Uso hospitalario', 'Secado rápido'],
        certifications: ['FDA', 'WHO Approved']
      },
      {
        id: 4,
        name: 'SafeGuard Plus',
        brand: 'SafeGuard',
        description: 'Desinfectante multiuso para oficinas y hogares',
        image: 'https://placehold.co/300x300/8B5CF6/FFFFFF?text=SafeGuard\nPlus',
        features: ['Aroma fresco', 'No tóxico', 'Acción prolongada'],
        certifications: ['EPA Registered', 'Green Seal']
      }
    ]
  },
  {
    id: 'especializados',
    name: 'Productos Especializados',
    description: 'Soluciones específicas para necesidades particulares',
    products: [
      {
        id: 5,
        name: 'GlassShine Pro',
        brand: 'CrystalClear',
        description: 'Limpiador especializado para cristales y espejos',
        image: 'https://placehold.co/300x300/06B6D4/FFFFFF?text=GlassShine\nPro',
        features: ['Sin rayas', 'Secado instantáneo', 'Brillo duradero'],
        certifications: ['Quality Assured', 'Professional Grade']
      },
      {
        id: 6,
        name: 'FloorCare Elite',
        brand: 'FloorMaster',
        description: 'Cera y pulimento para pisos de alto tráfico',
        image: 'https://placehold.co/300x300/F59E0B/FFFFFF?text=FloorCare\nElite',
        features: ['Protección UV', 'Anti-deslizante', 'Larga duración'],
        certifications: ['GREENGUARD', 'LEED Compliant']
      }
    ]
  }
];

// Marcas patrocinadoras
const sponsorBrands = [
  {
    id: 1,
    name: 'CleanTech Solutions',
    logo: 'https://placehold.co/200x100/1F2937/FFFFFF?text=CleanTech\nSolutions',
    description: 'Líder mundial en tecnología de limpieza industrial',
    partnership: 'Socio Estratégico',
    since: '2020',
    website: 'cleantech-solutions.com',
    products: ['Maquinaria industrial', 'Sistemas de dosificación', 'Tecnología IoT'],
    achievements: '50+ años de experiencia'
  },
  {
    id: 2,
    name: 'EcoClean International',
    logo: 'https://placehold.co/200x100/059669/FFFFFF?text=EcoClean\nInternational',
    description: 'Especialistas en productos ecológicos y sostenibles',
    partnership: 'Proveedor Preferido',
    since: '2021',
    website: 'ecoclean-intl.com',
    products: ['Productos biodegradables', 'Certificaciones verdes', 'Consultoría ambiental'],
    achievements: 'Certificado Carbon Neutral'
  },
  {
    id: 3,
    name: 'ProChem Industries',
    logo: 'https://placehold.co/200x100/DC2626/FFFFFF?text=ProChem\nIndustries',
    description: 'Fabricante de productos químicos especializados',
    partnership: 'Distribuidor Exclusivo',
    since: '2019',
    website: 'prochem-ind.com',
    products: ['Químicos industriales', 'Formulaciones custom', 'Control de calidad'],
    achievements: 'ISO 9001:2015 Certificado'
  },
  {
    id: 4,
    name: 'AquaPure Systems',
    logo: 'https://placehold.co/200x100/2563EB/FFFFFF?text=AquaPure\nSystems',
    description: 'Sistemas de purificación y tratamiento de agua',
    partnership: 'Alianza Técnica',
    since: '2022',
    website: 'aquapure-sys.com',
    products: ['Filtros industriales', 'Osmosis inversa', 'Tratamiento UV'],
    achievements: 'Tecnología patentada'
  },
  {
    id: 5,
    name: 'SafetyFirst Corp',
    logo: 'https://placehold.co/200x100/7C3AED/FFFFFF?text=SafetyFirst\nCorp',
    description: 'Equipos de protección personal y seguridad laboral',
    partnership: 'Socio de Seguridad',
    since: '2021',
    website: 'safetyfirst-corp.com',
    products: ['EPP profesional', 'Señalización', 'Capacitación'],
    achievements: 'OSHA Compliance Expert'
  },
  {
    id: 6,
    name: 'Innovation Labs',
    logo: 'https://placehold.co/200x100/EA580C/FFFFFF?text=Innovation\nLabs',
    description: 'Investigación y desarrollo de nuevas fórmulas',
    partnership: 'Centro de I+D',
    since: '2023',
    website: 'innovation-labs.com',
    products: ['Investigación aplicada', 'Desarrollo de fórmulas', 'Testing avanzado'],
    achievements: '20+ patentes registradas'
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('detergentes');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState<any>(null);

  // Filtrar productos por búsqueda
  const filteredCategories = productCategories.map(category => ({
    ...category,
    products: category.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros <span className="text-blue-600">Productos</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Descubre nuestra amplia gama de productos de limpieza profesional y las marcas líderes que nos respaldan
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2"
            />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
              {productCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {filteredCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.products.map((product) => (
                    <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <CardHeader className="p-0 mb-4">
                            <div className="flex justify-between items-start mb-2">
                              <CardTitle className="text-xl">{product.name}</CardTitle>
                              <Badge variant="outline">{product.brand}</Badge>
                            </div>
                            <CardDescription>{product.description}</CardDescription>
                          </CardHeader>
                          
                          <CardContent className="p-0">
                            <div className="mb-4">
                              <h4 className="font-semibold text-sm text-gray-700 mb-2">Características:</h4>
                              <div className="flex flex-wrap gap-2">
                                {product.features.map((feature, idx) => (
                                  <Badge key={idx} variant="secondary" className="text-xs">
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                    {feature}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold text-sm text-gray-700 mb-2">Certificaciones:</h4>
                              <div className="flex flex-wrap gap-2">
                                {product.certifications.map((cert, idx) => (
                                  <Badge key={idx} variant="default" className="text-xs">
                                    <Award className="w-3 h-3 mr-1" />
                                    {cert}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Sponsor Brands Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Marcas que nos <span className="text-blue-600">Patrocinan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las mejores marcas del sector para ofrecerte productos y servicios de la más alta calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorBrands.map((brand) => (
              <Card key={brand.id} className="group hover:shadow-xl transition-all duration-300 cursor-pointer">
                <Dialog>
                  <DialogTrigger asChild>
                    <div onClick={() => setSelectedBrand(brand)}>
                      <CardHeader className="text-center pb-4">
                        <div className="mx-auto mb-4 p-4 bg-white rounded-lg shadow-sm">
                          <img
                            src={brand.logo}
                            alt={brand.name}
                            className="w-full h-16 object-contain"
                          />
                        </div>
                        <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                          {brand.name}
                        </CardTitle>
                        <div className="flex items-center justify-center gap-2 mt-2">
                          <Badge className="bg-blue-100 text-blue-800">
                            {brand.partnership}
                          </Badge>
                          <Badge variant="outline">
                            Desde {brand.since}
                          </Badge>
                        </div>
                      </CardHeader>
                      
                      <CardContent>
                        <CardDescription className="text-center mb-4">
                          {brand.description}
                        </CardDescription>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-center text-sm text-gray-600">
                            <Building2 className="w-4 h-4 mr-2" />
                            {brand.website}
                          </div>
                          
                          <div className="flex items-center justify-center text-sm text-gray-600">
                            <Sparkles className="w-4 h-4 mr-2" />
                            {brand.achievements}
                          </div>
                        </div>
                        
                        <Button variant="outline" className="w-full mt-4 group-hover:bg-blue-50">
                          Ver Detalles
                        </Button>
                      </CardContent>
                    </div>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">{brand?.name}</DialogTitle>
                      <DialogDescription className="text-lg">
                        {brand?.description}
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Información de Asociación</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tipo:</span>
                            <Badge>{brand?.partnership}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Desde:</span>
                            <span>{brand?.since}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Website:</span>
                            <span className="text-blue-600">{brand?.website}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Productos y Servicios</h4>
                        <div className="flex flex-wrap gap-2">
                          {brand?.products.map((product, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="mt-4">
                          <div className="flex items-center text-sm text-gray-600">
                            <Star className="w-4 h-4 mr-2 text-yellow-500" />
                            {brand?.achievements}
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </Card>
            ))}
          </div>

          {/* Partnership Benefits */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Beneficios de Nuestras Alianzas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Calidad Garantizada</h4>
                <p className="text-gray-600">Productos certificados y probados por las mejores marcas del sector</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Innovación Constante</h4>
                <p className="text-gray-600">Acceso a las últimas tecnologías y productos innovadores</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold text-lg mb-2">Soporte Técnico</h4>
                <p className="text-gray-600">Respaldo técnico especializado y capacitación continua</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Products;