import { Brain, Shield, Zap, Link, Bot, Activity, TrendingUp } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide19DiferenciadoresUnicos() {
  const diferenciadores = [
    {
      icon: Bot,
      titulo: 'Agente IA 24/7',
      descripcion: 'Opera sin intervención humana. Valida, rechaza o solicita aclaraciones. 365 días al año.',
      color: '#A855F7'
    },
    {
      icon: Brain,
      titulo: 'IA Explicable (XAI)',
      descripcion: 'No es una caja negra. Cada decisión es auditable y justificable ante reguladores.',
      color: '#3B82F6'
    },
    {
      icon: Shield,
      titulo: 'Blockchain Integrado',
      descripcion: 'No es un add-on. Es parte del core. Trazabilidad inmutable desde el primer día.',
      color: '#8B5CF6'
    },
    {
      icon: Activity,
      titulo: 'Monitoreo Continuo',
      descripcion: 'Vigilancia 24/7 de todas las transacciones y comportamientos. Sin periodos ciegos.',
      color: '#06B6D4'
    },
    {
      icon: TrendingUp,
      titulo: 'Monitoreo Predictivo con IA',
      descripcion: 'No solo detecta problemas. Los anticipa. Alertas antes de que el riesgo se materialice.',
      color: '#10B981'
    },
    {
      icon: Zap,
      titulo: 'Onboarding White Label',
      descripcion: 'Su marca, su identidad. El cliente nunca ve una marca externa. Es 100% su entidad.',
      color: '#F59E0B'
    },
    {
      icon: Link,
      titulo: 'Gobernanza de tus datos',
      descripcion: 'Tus datos e información, tu gobernanza. 100% transparente.',
      color: '#EF4444'
    }
  ];

  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay with electric accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A] to-[#02023F]" />
      
      {/* Electric glow circles */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3B82F6]/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#A855F7]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-white text-6xl leading-tight">
            Lo Que Hace a Nevra <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]">Único</span>
          </h2>
        </div>

        {/* Grid de diferenciadores - 4 arriba, 3 abajo */}
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Primera fila: 4 columnas */}
          <div className="grid grid-cols-4 gap-6">
            {diferenciadores.slice(0, 4).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-7 border-2 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl h-full flex flex-col"
                    style={{ borderColor: item.color }}
                  >
                    {/* Icon */}
                    <div className="mb-5">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white text-xl mb-3">{item.titulo}</h3>
                    <p className="text-white/80 text-sm leading-relaxed flex-1">{item.descripcion}</p>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ 
                        background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}60 50%, ${item.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Segunda fila: 3 columnas centradas */}
          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {diferenciadores.slice(4, 7).map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index + 4} className="group relative">
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-7 border-2 hover:bg-white/15 hover:scale-[1.02] transition-all duration-300 shadow-2xl h-full flex flex-col"
                    style={{ borderColor: item.color }}
                  >
                    {/* Icon */}
                    <div className="mb-5">
                      <div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-white text-xl mb-3">{item.titulo}</h3>
                    <p className="text-white/80 text-sm leading-relaxed flex-1">{item.descripcion}</p>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5"
                      style={{ 
                        background: `linear-gradient(90deg, ${item.color} 0%, ${item.color}60 50%, ${item.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}