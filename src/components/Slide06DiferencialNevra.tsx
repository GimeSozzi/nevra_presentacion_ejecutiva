import { Brain, Shield, Zap } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide06DiferencialNevra() {
  const diferenciales = [
    {
      icon: Brain,
      titulo: 'IA como Agente Autónomo',
      descripcion: 'No es un asistente. Es un analista 24/7 que valida, rechaza y aprende con validación humana.',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      titulo: 'Blockchain Inmutable',
      descripcion: 'Cada acción queda sellada con timestamp verificable. Imposible alterar retroactivamente.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      titulo: 'Automatización Real',
      descripcion: 'No es un CRM glorificado. Son procesos complejos ejecutados de forma completamente autónoma.',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
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
            ¿Por qué Nevra es <span className="text-[#3B82F6]">diferente?</span>
          </h2>
          <p className="text-[#6B7280] text-3xl">
            No es software tradicional. Es una arquitectura completamente nueva.
          </p>
        </div>

        {/* Diferenciales Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {diferenciales.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="group relative">
                <div 
                  className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col"
                  style={{ borderColor: item.color }}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-[#02023F] text-3xl mb-5 leading-tight">
                    {item.titulo}
                  </h3>
                  <p className="text-[#6B7280] text-xl leading-relaxed">
                    {item.descripcion}
                  </p>

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
  );
}