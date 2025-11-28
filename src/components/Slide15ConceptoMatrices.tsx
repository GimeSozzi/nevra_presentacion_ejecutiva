import { Grid3x3, Brain, AlertTriangle, TrendingUp } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide15ConceptoMatrices() {
  const capacidades = [
    {
      icon: Brain,
      titulo: 'Cálculo Automático',
      descripcion: 'IA evalúa de forma dinámica variables heterogéneas tales como: tipo de cliente, actividad, volumen, trazabilidad, jurisdicción, PEP, listas restrictivas, entre otras.',
      color: '#A855F7',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: AlertTriangle,
      titulo: 'DDC Ajustada',
      descripcion: 'Debida Diligencia del Cliente adaptada automáticamente al nivel de riesgo',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      titulo: 'Recalificación Dinámica',
      descripcion: 'Si el comportamiento del cliente cambia, el riesgo se actualiza en tiempo real',
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
        <div className="absolute bottom-1/3 left-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' }}
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
            Matrices de Riesgo <span className="text-[#A855F7]">Inteligentes</span>
          </h2>
          <p className="text-[#6B7280] text-3xl">
            Clasificación automatizada basada en datos reales
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {capacidades.map((cap, index) => {
            const Icon = cap.icon;
            return (
              <div key={index} className="group relative">
                <div 
                  className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col"
                  style={{ borderColor: cap.color }}
                >
                  <div className="mb-6">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${cap.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-[#02023F] text-3xl mb-4 leading-tight">{cap.titulo}</h3>
                  <p className="text-[#6B7280] text-xl leading-relaxed">{cap.descripcion}</p>

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

        {/* Comparison */}
        <div className="text-center relative z-10">
          <div className="inline-block bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-2xl px-12 py-6 shadow-2xl">
            <p className="text-white text-3xl">
              De horas manuales a <span className="font-bold">minutos automáticos</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}