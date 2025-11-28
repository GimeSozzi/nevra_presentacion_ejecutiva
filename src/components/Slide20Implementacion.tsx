import { Calendar, CheckCircle2 } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide20Implementacion() {
  const meses = [
    {
      numero: '1',
      titulo: 'PREPARACIÓN',
      items: [
        'Kick-off y análisis',
        'Migración de datos',
        'Capacitación equipo core'
      ],
      color: '#3B82F6',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      numero: '2',
      titulo: 'CONFIGURACIÓN',
      items: [
        'Personalización white label',
        'Integraciones con sistemas existentes',
        'Testing exhaustivo'
      ],
      color: '#06B6D4',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      numero: '3',
      titulo: 'LANZAMIENTO',
      items: [
        'Go-live controlado',
        'Soporte intensivo',
        'Optimización'
      ],
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
        <div className="text-center mb-16">
          <h2 className="text-[#02023F] text-6xl leading-tight mb-4">
            De la Decisión al <span className="text-[#3B82F6]">Go-Live</span>
          </h2>
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl px-10 py-4 shadow-xl">
            <Calendar className="w-8 h-8 text-white" />
            <p className="text-white text-4xl">90 DÍAS DE IMPLEMENTACIÓN</p>
          </div>
        </div>

        {/* Timeline - 3 meses */}
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {meses.map((mes, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div 
                className="relative bg-white rounded-3xl p-10 border-2 hover:scale-[1.02] transition-all duration-300 shadow-2xl overflow-hidden h-full"
                style={{ borderColor: mes.color }}
              >
                {/* Number badge */}
                <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${mes.color} 0%, ${mes.color}cc 100%)` 
                  }}
                >
                  <span className="text-white text-3xl">M{mes.numero}</span>
                </div>

                {/* Content */}
                <h3 
                  className="text-3xl mb-6 tracking-tight"
                  style={{ color: mes.color }}
                >
                  {mes.titulo}
                </h3>
                
                <ul className="space-y-4">
                  {mes.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 
                        className="w-6 h-6 flex-shrink-0 mt-1" 
                        style={{ color: mes.color }}
                      />
                      <span className="text-[#374151] text-xl leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-1.5"
                  style={{ 
                    background: `linear-gradient(90deg, ${mes.color} 0%, ${mes.color}60 50%, ${mes.color} 100%)`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}