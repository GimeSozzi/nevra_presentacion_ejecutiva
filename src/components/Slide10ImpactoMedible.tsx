import { TrendingUp, Users, DollarSign, ArrowUp, ArrowDown } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide10ImpactoMedible() {
  const metricas = [
    {
      icon: Users,
      numero: <ArrowUp className="w-24 h-24 mx-auto stroke-[3]" />,
      descripcion: 'Satisfacción del Cliente',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: TrendingUp,
      numero: <ArrowUp className="w-24 h-24 mx-auto stroke-[3]" />,
      descripcion: 'Conversión Digital',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: DollarSign,
      numero: <ArrowDown className="w-24 h-24 mx-auto stroke-[3]" />,
      descripcion: 'Costos Operativos',
      color: '#10B981',
      gradient: 'from-emerald-500 to-emerald-600'
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
          style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-[#02023F] text-6xl leading-tight">
            Resultados <span className="text-[#3B82F6]">Medibles</span>
          </h2>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {metricas.map((metrica, index) => {
            const Icon = metrica.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-12 border-2 hover:scale-[1.05] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col items-center text-center"
                  style={{ borderColor: metrica.color }}
                >
                  {/* Icon */}
                  <div className="mb-8">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${metrica.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Number */}
                  <div 
                    className="mb-6 relative"
                  >
                    <div className="absolute inset-0 blur-xl opacity-40 animate-pulse"
                      style={{ color: metrica.color }}
                    >
                      {metrica.numero}
                    </div>
                    <div className="relative group-hover:scale-110 transition-transform duration-300"
                      style={{ color: metrica.color }}
                    >
                      {metrica.numero}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#374151] text-2xl leading-relaxed">
                    {metrica.descripcion}
                  </p>

                  {/* Bottom accent */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1.5"
                    style={{ 
                      background: `linear-gradient(90deg, ${metrica.color} 0%, ${metrica.color}60 50%, ${metrica.color} 100%)`
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="text-center relative z-10">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-12 py-6 border border-[#E5E7EB] shadow-lg max-w-4xl">
            <p className="text-[#374151] text-2xl leading-relaxed">
              El módulo de onboarding reduce costos y son medibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}