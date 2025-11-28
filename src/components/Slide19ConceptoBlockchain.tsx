import { Link, XCircle, CheckCircle2, Shield, Sparkles } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide19ConceptoBlockchain() {
  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 25%, #F1F5F9 50%, #FFFFFF 75%, #F8FAFC 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
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
            Blockchain <span className="text-[#A855F7]">Inmutable</span>
          </h2>
          <p className="text-[#6B7280] text-3xl">
            Trazabilidad que nadie puede alterar retroactivamente
          </p>
        </div>

        {/* Two column comparison - Asymmetric 35/65 */}
        <div className="grid grid-cols-[35%_65%] gap-8 max-w-7xl mx-auto">
          {/* Left - Problema (más pequeña, menos destacada) */}
          <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-[#EF4444]/30 shadow-lg">
            <h3 className="text-[#EF4444] text-2xl mb-6">
              Sistema Tradicional
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <p className="text-[#6B7280] text-lg leading-relaxed">Bases de datos editables</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <p className="text-[#6B7280] text-lg leading-relaxed">Logs pueden borrarse</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <p className="text-[#6B7280] text-lg leading-relaxed">Fechas modificables</p>
              </div>
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-[#EF4444] flex-shrink-0 mt-0.5" />
                <p className="text-[#6B7280] text-lg leading-relaxed">Sin prueba forense absoluta</p>
              </div>
            </div>
          </div>

          {/* Right - Solución Nevra (DESTACADA) */}
          <div className="relative">
            {/* Badge Nevra */}
            <div className="absolute -top-4 left-8 z-20">
              <div className="bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-full px-6 py-2 shadow-lg">
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
                background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)',
              }}
            >
              <div 
                className="relative bg-white rounded-[22px] p-10"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FAF5FF 50%, #FDF2F8 100%)'
                }}
              >
                <h3 className="text-[#02023F] text-4xl mb-8 flex items-center gap-3">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#A855F7] to-[#EC4899] flex items-center justify-center shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  Blockchain Nevra
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1 drop-shadow-md" strokeWidth={2.5} />
                    <p className="text-[#02023F] text-xl leading-relaxed">
                      <span className="font-semibold">Registros criptográficamente sellados</span> - Imposible modificar sin dejar rastro
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1 drop-shadow-md" strokeWidth={2.5} />
                    <p className="text-[#02023F] text-xl leading-relaxed">
                      <span className="font-semibold">Timestamps verificables externamente</span> - Prueba de qué sabías y cuándo lo sabías
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1 drop-shadow-md" strokeWidth={2.5} />
                    <p className="text-[#02023F] text-xl leading-relaxed">
                      <span className="font-semibold">Imposible alterar retroactivamente</span> - Cada bloque enlazado al anterior matemáticamente
                    </p>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#10B981] flex-shrink-0 mt-1 drop-shadow-md" strokeWidth={2.5} />
                    <p className="text-[#02023F] text-xl leading-relaxed">
                      <span className="font-semibold">Cadena de custodia perfecta</span> - Auditable por reguladores / revisores y auditores externos
                    </p>
                  </div>
                </div>

                {/* Glow effect interno */}
                <div 
                  className="absolute inset-0 rounded-[22px] opacity-20 pointer-events-none"
                  style={{
                    boxShadow: 'inset 0 0 60px rgba(168,85,247,0.3)'
                  }}
                />
              </div>

              {/* Glow effect externo */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-40 blur-xl pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, #A855F7 0%, #EC4899 50%, #3B82F6 100%)',
                  zIndex: -1
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom impact */}
        <div className="text-center mt-16 relative z-10">
          <div className="inline-block bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-2xl px-12 py-6 shadow-2xl">
            <p className="text-white text-3xl">
              Prueba forense <span className="font-bold">irrefutable</span> ante reguladores/revisores y auditorías externas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}