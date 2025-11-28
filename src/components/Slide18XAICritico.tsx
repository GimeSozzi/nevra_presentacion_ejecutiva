import { CheckCircle2, XCircle, Eye, Sparkles } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide18XAICritico() {
  const problemas = [
    'IA de caja negra',
    'No puedes explicar decisiones',
    'Sin trazabilidad de datos',
    'Auditorías imposibles',
    'Sin gobernanza de IA ni datos'
  ];

  const nevraFeatures = [
    {
      titulo: 'Cada decisión documentada automáticamente',
      detalle: 'Registro completo del proceso de análisis'
    },
    {
      titulo: 'Árboles de decisión visuales',
      detalle: 'Visualiza el razonamiento paso a paso'
    },
    {
      titulo: 'Factores ponderados con porcentajes',
      detalle: 'Transparencia total en el scoring'
    },
    {
      titulo: 'Reportes listos para auditoría',
      detalle: 'Exporta justificaciones en un clic'
    },
    {
      titulo: 'Gobernanza integrada de IA y datos',
      detalle: 'Control del ciclo de vida, linaje de datos y políticas centralizadas'
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

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#02023F] text-6xl leading-tight">
            IA Explicable: <span className="text-[#3B82F6]">Requisito Regulatorio</span>
          </h2>
        </div>

        {/* Two Columns Comparison - Asymmetric 35/65 */}
        <div className="grid grid-cols-[35%_65%] gap-8 max-w-7xl mx-auto">
          {/* Left Column - Problema (más pequeña, menos destacada) */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#EF4444]/30 shadow-lg">
            <h3 className="text-[#EF4444] text-2xl mb-6">
              IA Tradicional
            </h3>
            <div className="space-y-4">
              {problemas.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <XCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-0.5" />
                  <p className="text-[#6B7280] text-lg leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Solución Nevra (DESTACADA) */}
          <div className="relative">
            {/* Badge Nevra */}
            <div className="absolute -top-4 left-8 z-20">
              <div className="bg-gradient-to-r from-[#3B82F6] to-[#A855F7] rounded-full px-6 py-2 shadow-lg">
                <p className="text-white text-sm tracking-wide flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  NEVRA RESUELVE
                </p>
              </div>
            </div>

            {/* Card con gradient border y glow */}
            <div 
              className="relative rounded-3xl p-1 shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #A855F7 100%)',
              }}
            >
              <div 
                className="relative bg-white rounded-[22px] p-10"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 50%, #F5F3FF 100%)'
                }}
              >
                <h3 className="text-[#02023F] text-4xl mb-8 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#A855F7] flex items-center justify-center shadow-lg">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  XAI Nevra
                </h3>
                <div className="space-y-5">
                  {nevraFeatures.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle2 className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1 drop-shadow-md" strokeWidth={2.5} />
                      <div>
                        <p className="text-[#02023F] text-xl leading-relaxed">
                          <span className="font-semibold">{item.titulo}</span>
                        </p>
                        <p className="text-[#6B7280] text-lg mt-1">{item.detalle}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Glow effect interno */}
                <div 
                  className="absolute inset-0 rounded-[22px] opacity-20 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(59,130,246,0.3)'
                  }}
                />
              </div>

              {/* Glow effect externo */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-40 blur-xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #3B82F6 0%, #06B6D4 50%, #A855F7 100%)',
                  zIndex: -1
                }}
              />
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 relative z-10">
          <div className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl px-12 py-6 shadow-2xl">
            <p className="text-white text-3xl">
              No es tecnología opcional. Es <span className="font-bold">compliance obligatorio</span> que viene.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}