import { Clock, AlertTriangle, DollarSign, FolderOpen } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide02Problema() {
  const problemas = [
    {
      icon: Clock,
      titulo: 'Onboarding Manual Lento',
      descripcion: '15-30 días para aprobar un cliente corporativo. Múltiples idas y vueltas de documentación.',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: FolderOpen,
      titulo: 'Legajos Fragmentados',
      descripcion: 'PDFs dispersos, emails, carpetas físicas. Sin visibilidad real del estado del cliente.',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: AlertTriangle,
      titulo: 'Revisión 100% Humana',
      descripcion: '8 horas por análisis de DDC. Más del 60% terminan siendo falsos positivos.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: DollarSign,
      titulo: 'Análisis Reactivo',
      descripcion: 'Detectan después que ocurre el problema. Sin trazabilidad auditable inmutable.',
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl" />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col">
        {/* Título arriba */}
        <div className="pt-8 pb-12">
          <h2 className="text-white text-6xl leading-tight text-center">
            Sistemas Tradicionales:<br />
            <span className="text-[#EF4444]">Lentos, Costosos</span> y llenos de <span className="text-[#F59E0B]">Fricción</span>
          </h2>
        </div>

        {/* Grid de 4 cards (2x2) */}
        <div className="flex-1 flex items-center pb-32">
          <div className="grid grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
            {problemas.map((problema, index) => {
              const Icon = problema.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  <div 
                    className="relative bg-white/10 backdrop-blur-sm border-2 rounded-2xl p-6 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col items-center"
                    style={{ borderColor: problema.color }}
                  >
                    {/* Icon with gradient background */}
                    <div className="mb-5">
                      <div 
                        className={`w-16 h-16 rounded-xl flex items-center justify-center bg-gradient-to-br ${problema.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col items-center text-center">
                      <h3 className="text-white text-xl mb-4">{problema.titulo}</h3>
                      <p className="text-white/80 leading-relaxed">{problema.descripcion}</p>
                    </div>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ 
                        background: `linear-gradient(90deg, ${problema.color} 0%, ${problema.color}60 50%, ${problema.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 w-auto max-w-4xl">
        <div className="bg-gradient-to-r from-[#3B82F6]/20 via-[#06B6D4]/20 to-[#3B82F6]/20 backdrop-blur-sm rounded-2xl px-10 py-6 border-2 border-[#3B82F6]/50">
          <p className="text-white text-2xl text-center">
            El desafío: ser más rápidos que el riesgo, bajando costos y sin perder rigor regulatorio.
          </p>
        </div>
      </div>
    </div>
  );
}