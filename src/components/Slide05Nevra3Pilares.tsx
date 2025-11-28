import { Brain, Shield, Palette } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';
import logoNevra from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide05Nevra3Pilares() {
  const pilares = [
    {
      icon: Brain,
      titulo: 'IA 24/7',
      subtitulos: ['Explicable', 'Aprende', 'Predice'],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      titulo: 'Blockchain',
      subtitulos: ['Inmutable', 'Auditable', 'Verificable'],
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Palette,
      titulo: 'White Label',
      subtitulos: ['Personalizable', 'Su marca', 'Su identidad'],
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 25%, #F1F5F9 50%, #FFFFFF 75%, #F8FAFC 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-20 left-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Header - Logo grande */}
        <div className="text-center mb-8">
          <img src={logoNevra} alt="Nevra" className="h-32 mx-auto mb-8" />
          <h2 className="text-[#02023F] text-5xl leading-tight">
            La Primera Plataforma Modular AML con<br />
            <span className="text-[#3B82F6]">Inteligencia Artificial Explicable</span> y <span className="text-[#06B6D4]">Blockchain Integrado</span>
          </h2>
        </div>

        {/* 3 Pilares */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-8 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col items-center"
                  style={{ borderColor: pilar.color }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${pilar.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center text-center">
                    <h3 
                      className="text-4xl mb-6 tracking-tight"
                      style={{ color: pilar.color }}
                    >
                      {pilar.titulo}
                    </h3>
                    <div className="space-y-2">
                      {pilar.subtitulos.map((sub, i) => (
                        <p key={i} className="text-[#374151] text-xl">{sub}</p>
                      ))}
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${pilar.color} 0%, ${pilar.color}60 50%, ${pilar.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center relative z-10">
          <div className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl px-12 py-6 shadow-2xl">
            <p className="text-white text-4xl">
              "De días a minutos"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}