import { Brain, Camera, FileCheck, TrendingUp, Zap } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide08ConceptoOnboarding() {
  const capacidades = [
    {
      icon: FileCheck,
      titulo: 'IA Documental',
      descripcion: 'Extrae, valida y cruza datos de estatutos, poderes, balances, etc.',
      stat: <TrendingUp className="w-10 h-10 mx-auto" />,
      statLabel: 'alta precisión',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Camera,
      titulo: 'Biometría Facial',
      descripcion: 'Verificación en vivo contra documento. Detección de fraude en tiempo real.',
      stat: <Zap className="w-10 h-10 mx-auto" />,
      statLabel: 'verificación instantánea',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Brain,
      titulo: 'Agente Autónomo',
      descripcion: 'Valida, rechaza o solicita aclaraciones. Opera 24/7.',
      stat: '0 días',
      statLabel: 'de espera',
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
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#02023F] text-6xl leading-tight mb-6">
            Onboarding <span className="text-[#3B82F6]">Inteligente</span>
          </h2>
          <p className="text-[#6B7280] text-3xl">
            Tres tecnologías trabajando en conjunto
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {capacidades.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div key={index} className="group relative">
                <div 
                  className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col"
                  style={{ borderColor: cap.color }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-[#02023F] text-3xl mb-4 leading-tight">
                    {cap.titulo}
                  </h3>
                  <p className="text-[#6B7280] text-lg leading-relaxed mb-6 flex-1">
                    {cap.descripcion}
                  </p>

                  {/* Stat */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-4xl mb-1" style={{ color: cap.color }}>
                      {cap.stat}
                    </p>
                    <p className="text-[#9CA3AF] text-sm uppercase tracking-wide">
                      {cap.statLabel}
                    </p>
                  </div>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${cap.color} 0%, ${cap.color}60 50%, ${cap.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Impact statement */}
        <div className="text-center relative z-10">
          <div className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl px-12 py-6 shadow-2xl">
            <p className="text-white text-3xl">
              De <span className="font-bold">días</span> manuales a <span className="font-bold">minutos</span> automatizados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}