import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Slide01Portada } from './components/Slide01Portada';
import { Slide02Problema } from './components/Slide02Problema';
import { Slide04PreguntaCritica } from './components/Slide04PreguntaCritica';
import { Slide05Nevra3Pilares } from './components/Slide05Nevra3Pilares';
import { Slide05Arquitectura } from './components/Slide05Arquitectura';
import { Slide07Modules } from './components/Slide07Modules';
import { Slide06DiferencialNevra } from './components/Slide06DiferencialNevra';
import { Slide08ConceptoOnboarding } from './components/Slide08ConceptoOnboarding';
import { Slide09ExperienciaMobile } from './components/Slide09ExperienciaMobile';
import { Slide13ConceptoLegajo } from './components/Slide13ConceptoLegajo';
import { Slide15ConceptoMatrices } from './components/Slide15ConceptoMatrices';
import { Slide19ConceptoBlockchain } from './components/Slide19ConceptoBlockchain';
import { Slide10ImpactoMedible } from './components/Slide10ImpactoMedible';
import { Slide19DiferenciadoresUnicos } from './components/Slide19DiferenciadoresUnicos';
import { Slide16CTA } from './components/Slide16CTA';
import { Slide30MuchasGracias } from './components/Slide30MuchasGracias';

// VERSIÓN EJECUTIVA - Para enviar después del evento
// Presentación condensada: 16 slides
// Elimina: Videos de demo, transiciones, detalles técnicos profundos
// Conserva: Problema, solución, capacidades core, valor, diferenciadores, CTA
const slides = [
  // PROBLEMA (2 slides)
  Slide01Portada,              // 1. Portada
  Slide02Problema,             // 2. Problemas Operativos
  
  // SOLUCIÓN NEVRA (5 slides)
  Slide04PreguntaCritica,      // 3. Pregunta Crítica
  Slide05Nevra3Pilares,        // 4. Nevra - 3 Pilares
  Slide05Arquitectura,         // 5. Arquitectura Dual
  Slide07Modules,              // 6. Módulos de la Plataforma
  Slide06DiferencialNevra,     // 7. ¿Por qué Nevra es diferente?
  
  // CAPACIDADES PRINCIPALES (5 slides)
  Slide08ConceptoOnboarding,   // 8. Onboarding Inteligente (concepto)
  Slide09ExperienciaMobile,    // 9. Experiencia Multiplataforma
  Slide13ConceptoLegajo,       // 10. Legajo Digital 360° (concepto)
  Slide15ConceptoMatrices,     // 11. Matrices Inteligentes (concepto)
  Slide19ConceptoBlockchain,   // 12. Blockchain Inmutable (concepto)
  
  // VALOR Y DIFERENCIACIÓN (2 slides)
  Slide10ImpactoMedible,       // 13. Impacto Medible
  Slide19DiferenciadoresUnicos,// 14. Diferenciadores Únicos
  
  // CIERRE (2 slides)
  Slide16CTA,                  // 15. Próximos Pasos - Agenda tu Demo
  Slide30MuchasGracias,        // 16. Muchas Gracias
];

// Dimensiones fijas de la slide (16:9)
const SLIDE_WIDTH = 1920;
const SLIDE_HEIGHT = 1080;

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);

  // Establecer título de la página
  useEffect(() => {
    document.title = 'Nevra - Presentación Ejecutiva';
  }, []);

  // Calcular escala para ajustar la slide a la ventana
  useEffect(() => {
    const updateScale = () => {
      const scaleX = window.innerWidth / SLIDE_WIDTH;
      const scaleY = window.innerHeight / SLIDE_HEIGHT;
      const newScale = Math.min(scaleX, scaleY);
      setScale(newScale);
    };

    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToNext = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goToPrevious = () => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <div className="relative w-full h-screen bg-[#02023F] overflow-hidden flex items-center justify-center">
      {/* Slide Container with fixed size and scaling */}
      <div 
        className="relative bg-white"
        style={{
          width: `${SLIDE_WIDTH}px`,
          height: `${SLIDE_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
      >
        <CurrentSlideComponent />
      </div>

      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        disabled={currentSlide === 0}
        className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        disabled={currentSlide === slides.length - 1}
        className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all disabled:opacity-30 disabled:cursor-not-allowed group z-10"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10 bg-[#02023F]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all rounded-full ${
              index === currentSlide
                ? 'w-8 h-2 bg-[#3B82F6]'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Ir a slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 bg-[#02023F]/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 z-10">
        <span className="text-white/90 text-sm">
          {currentSlide + 1} / {slides.length}
        </span>
      </div>
    </div>
  );
}