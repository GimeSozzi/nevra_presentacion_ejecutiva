import { Users, Shield, Brain, ArrowRight, Database, Zap } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide05Arquitectura() {
  return (
    <div className="relative w-full h-full overflow-hidden p-20"
      style={{
        background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 50%, #F3F4F6 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)' }}
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
            Una arquitectura pensada para el<br />
            <span className="text-[#3B82F6]">sujeto obligado</span> y para su <span className="text-[#06B6D4]">cliente</span>
          </h2>
        </div>

        {/* Diagram */}
        <div className="flex items-center justify-center gap-8">
          {/* Portal Cliente */}
          <div className="flex-1 max-w-md relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/50 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-10 border-2 border-[#3B82F6] shadow-2xl hover:shadow-[#3B82F6]/20 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#3B82F6]/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#02023F] text-3xl">Portal Cliente</h3>
              </div>
              <p className="text-[#3B82F6] text-xl mb-6">Onboarding Digital</p>
              <ul className="space-y-4">
                {['Registro y validación CUIT', 'Carga de datos empresariales', 'Upload de documentación', 'Verificación biométrica'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#374151] text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Central Stack - IA + Blockchain */}
          <div className="flex flex-col gap-8 relative">
            {/* Animated connection line */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gradient-to-b from-[#06B6D4] via-[#8B5CF6] to-[#A855F7] opacity-20" />
            </div>

            {/* IA Layer */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#06B6D4] to-[#14B8A6] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-xl px-10 py-8 border-2 border-[#06B6D4] shadow-xl hover:shadow-[#06B6D4]/20 transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#02023F] text-xl">Capa de IA</p>
                    <p className="text-[#374151]">Extracción, análisis y scoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Flow indicator */}
            <div className="flex items-center justify-center gap-2 py-2">
              <Zap className="w-6 h-6 text-[#8B5CF6] motion-safe:animate-pulse" />
              <ArrowRight className="w-6 h-6 text-[#8B5CF6]" />
              <Database className="w-6 h-6 text-[#A855F7] motion-safe:animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Blockchain Layer */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#A855F7] to-[#9333EA] rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative bg-white rounded-xl px-10 py-8 border-2 border-[#A855F7] shadow-xl hover:shadow-[#A855F7]/20 transition-all hover:scale-105">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#A855F7] to-[#9333EA] flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-[#02023F] text-xl">Blockchain</p>
                    <p className="text-[#374151]">Huella digital inmutable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Portal Interno */}
          <div className="flex-1 max-w-md relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#06B6D4] to-[#06B6D4]/50 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
            <div className="relative bg-white rounded-2xl p-10 border-2 border-[#06B6D4] shadow-2xl hover:shadow-[#06B6D4]/20 transition-all hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-8 pb-6 border-b-2 border-[#06B6D4]/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[#02023F] text-3xl">Portal Interno</h3>
              </div>
              <p className="text-[#06B6D4] text-xl mb-6">Oficial de Cumplimiento</p>
              <ul className="space-y-4">
                {['Legajo digital 360°', 'Matrices de riesgo', 'Aprobación y trazabilidad', 'Monitoreo continuo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#374151] text-lg">
                    <div className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-10 py-5 border border-[#E5E7EB] shadow-lg">
            <p className="text-[#374151] text-2xl">
              <span className="text-[#3B82F6]">APIs abiertas</span> para integrarse con el core de la organización
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}