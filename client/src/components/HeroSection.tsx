import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/stock_images/cleaning_service_mod_8e94cd9c.jpg";

const slides = [
  {
    title: "Tu día más fácil",
    subtitle: "Soluciones de limpieza, mantenimiento y outsourcing para tu casa o negocio.",
    cta1: "Cotiza",
    cta2: "Ver Servicios",
  },
  {
    title: "¿Quiénes somos?",
    subtitle: "Empresa líder en servicios de limpieza profesional con años de experiencia y personal capacitado.",
    cta1: "Conoce más",
    cta2: "Ver Servicios",
  },
  {
    title: "Servicios de Calidad",
    subtitle: "Limpieza del hogar, piscinas, tanques de agua, cisternas y más. Todo lo que necesitas.",
    cta1: "Cotiza ahora",
    cta2: "Ver Servicios",
  },
  {
    title: "Confianza y Profesionalismo",
    subtitle: "Personal capacitado y verificado para brindarte el mejor servicio de limpieza.",
    cta1: "Contáctanos",
    cta2: "Ver Servicios",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleCta1Click = () => {
    console.log("CTA 1 clicked:", slides[currentSlide].cta1);
    const contacto = document.querySelector("#contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCta2Click = () => {
    console.log("CTA 2 clicked:", slides[currentSlide].cta2);
    const servicios = document.querySelector("#servicios");
    if (servicios) {
      servicios.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-700 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-heading"
            data-testid="text-hero-title"
          >
            {slide.title}
          </h1>
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
            data-testid="text-hero-subtitle"
          >
            {slide.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 text-lg font-semibold w-full sm:w-auto"
              onClick={handleCta1Click}
              data-testid="button-hero-cta1"
            >
              {slide.cta1}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-lg font-semibold bg-white/10 hover:bg-white/20 backdrop-blur-md border-white/30 text-white w-full sm:w-auto"
              onClick={handleCta2Click}
              data-testid="button-hero-cta2"
            >
              {slide.cta2}
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsAnimating(true);
                setTimeout(() => {
                  setCurrentSlide(index);
                  setIsAnimating(false);
                }, 300);
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              data-testid={`button-slide-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
