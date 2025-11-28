import { Clock, Target, Shield, TrendingDown } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide14ImpactoOperativo() {
  const metricas = [
    {
      icon: Clock,
      titulo: 'icon',
      descripcion: 'Tiempo de DDC',
      detalle: 'De horas a minutos',
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Target,
      titulo: '100%',
      descripcion: 'Trazabilidad',
      detalle: 'Cada acción registrada',
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Shield,
      titulo: 'icon',
      descripcion: 'Falsos Positivos',
      detalle: 'IA aprende continuamente',
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
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#02023F] text-6xl leading-tight mb-4">
            Impacto <span className="text-[#3B82F6]">Operativo</span> Inmediato
          </h2>
          <p className="text-[#374151] text-2xl">
            Resultados medibles desde el primer día
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-10 max-w-6xl mx-auto">
          {metricas.map((metrica, index) => {
            const Icon = metrica.icon;
            return (
              <div 
                key={index}
                className="group relative"
              >
                {/* Card */}
                <div 
                  className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.05] transition-all duration-300 shadow-2xl overflow-hidden h-full flex flex-col items-center text-center"
                  style={{ borderColor: metrica.color }}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <div 
                      className={`w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br ${metrica.gradient} shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Number or Icon */}
                  {metrica.titulo === 'icon' ? (
                    <div className="mb-4">
                      <TrendingDown 
                        className="w-16 h-16"
                        style={{ color: metrica.color }}
                        strokeWidth={3}
                      />
                    </div>
                  ) : (
                    <h3 
                      className="text-6xl mb-4"
                      style={{ color: metrica.color }}
                    >
                      {metrica.titulo}
                    </h3>
                  )}

                  {/* Description */}
                  <p className="text-[#02023F] text-2xl mb-3">
                    {metrica.descripcion}
                  </p>

                  {/* Detail */}
                  <p className="text-[#374151] text-lg">
                    {metrica.detalle}
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
      </div>
    </div>
  );
}