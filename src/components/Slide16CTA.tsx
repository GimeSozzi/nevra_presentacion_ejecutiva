import { Mail, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import logoFidesnet from 'figma:asset/f4df3621a1d1bd007e2c03c245e5548ac614c5da.png';
import logoPewma from 'figma:asset/e284ca26abcddf88dfebaf24f56f2d7460e1f2de.png';
import favicon from 'figma:asset/4df7b099b4eff8d432d79ca1226597434891f38e.png';
import logoNevraPlus from 'figma:asset/40168840387f0e1710eebc7237b80bfc0483a25a.png';

export function Slide16CTA() {
  const nextSteps = [
    {
      icon: Mail,
      title: 'Demo personalizada',
      description: 'Profundizar en casos de uso concretos de su entidad (segmentos, riesgos, regulaciones locales).',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Calendar,
      title: 'Piloto acotado',
      description: 'Implementación modular al inicio para medir el impacto real.',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: ArrowRight,
      title: 'Roadmap conjunto',
      description: 'Definir, junto con su equipo, una hoja de ruta escalonada para implementación en el sujeto obligado.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #02023F 0%, #1E3A8A 50%, #02023F 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.6) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.5) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoWhite} alt="Nevra+" className="h-14" />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="flex items-end justify-center gap-6">
              <h2 className="text-white text-7xl leading-tight">
                El futuro es
              </h2>
              <img src={logoWhite} alt="Nevra+" className="h-28 drop-shadow-2xl mb-4" />
            </div>
          </div>

          {/* Next Steps Title */}
          <div className="text-center mb-10">
            <p className="text-white/70 text-2xl">
              Tres caminos para comenzar a transformar el cumplimiento normativo en su institución
            </p>
          </div>

          {/* Next Steps Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {nextSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-6 border-2 border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 h-full flex flex-col shadow-2xl">
                    {/* Number badge */}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
                      style={{ 
                        background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}cc 100%)` 
                      }}
                    >
                      <span className="text-white text-lg">{index + 1}</span>
                    </div>

                    {/* Icon with gradient background */}
                    <div className="mb-6">
                      <div 
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl bg-gradient-to-br ${step.gradient}`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-2xl mb-3"
                      style={{ color: step.color }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/90 text-base leading-relaxed flex-1">
                      {step.description}
                    </p>

                    {/* Bottom accent */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-3xl"
                      style={{ 
                        background: `linear-gradient(90deg, ${step.color} 0%, ${step.color}60 50%, ${step.color} 100%)`
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="max-w-4xl mx-auto w-full">
            <a 
              href="https://nevranet.com/#contacto"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-3xl p-1 shadow-2xl hover:shadow-[#3B82F6]/40 transition-all hover:scale-[1.02]">
                <div className="bg-[#02023F] rounded-[22px] px-12 py-6 group-hover:bg-[#02023F]/90 transition-all">
                  <div className="flex items-center justify-center gap-6">
                    <img src={favicon} alt="Nevra" className="h-14 w-14 rounded-xl group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-start">
                      <p className="text-white/70 text-xl">Visítanos en</p>
                      <p className="text-white text-4xl tracking-wide">nevranet.com</p>
                    </div>
                    <div className="ml-4 flex items-center gap-3">
                      <div className="h-12 w-px bg-white/20" />
                      <div className="flex flex-col items-start">
                        <Sparkles className="w-6 h-6 text-[#3B82F6] mb-1 group-hover:text-[#06B6D4] transition-colors" />
                        <span className="text-[#3B82F6] group-hover:text-[#06B6D4] transition-colors text-xl">Agendar una Demo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Footer - Logos Alianzas */}
        <div className="flex items-center justify-center gap-8">
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <img src={logoPewma} alt="Pewma" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
          
          <div className="relative">
            <div className="text-white/70 text-xl flex items-center px-4">en alianza con</div>
            <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
          
          <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
            <img src={logoFidesnet} alt="Fidesnet" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </div>
  );
}