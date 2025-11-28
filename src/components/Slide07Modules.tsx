import { CheckCircle, FolderOpen, Activity, FileText, Gauge, Shield, Brain, Settings, Users, Building2, TrendingUp, BarChart3, Blocks, User, ScrollText } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide07Modules() {
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

      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#02023F] text-5xl leading-tight">
            Dos portales, <span className="text-[#3B82F6]">una plataforma modular e</span> integral
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="flex items-start justify-center gap-12">
          {/* LEFT SIDE - PORTAL CLIENTE */}
          <div className="flex-[0.8] max-w-md">
            {/* Portal Header */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#3B82F6] to-[#3B82F6]/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white rounded-xl p-8 border-2 border-[#3B82F6] shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-lg">
                    <User className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[#02023F] text-3xl">Portal Cliente</h3>
                </div>
              </div>
            </div>

            {/* Onboarding Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E5E7EB] shadow-lg h-[520px] flex flex-col">
              <h4 className="text-[#3B82F6] text-2xl mb-6">Onboarding Digital</h4>
              <div className="space-y-6 flex-1 flex flex-col justify-center">
                {/* Persona Humana */}
                <div className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-[#A78BFA]/10 to-transparent border-l-4 border-[#8B5CF6]">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#A78BFA] to-[#8B5CF6] flex items-center justify-center shadow-md flex-shrink-0">
                    <User className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#02023F] text-xl">Persona Humana</p>
                    <p className="text-[#6B7280] text-base">Registro individual simplificado</p>
                  </div>
                </div>

                {/* Persona Jurídica */}
                <div className="flex items-center gap-5 p-5 rounded-xl bg-gradient-to-r from-[#5B8FF9]/10 to-transparent border-l-4 border-[#3B76E0]">
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#5B8FF9] to-[#3B76E0] flex items-center justify-center shadow-md flex-shrink-0">
                    <Building2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p className="text-[#02023F] text-xl">Persona Jurídica</p>
                    <p className="text-[#6B7280] text-base">Estructura corporativa completa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PORTAL INTERNO */}
          <div className="flex-[1.6] max-w-3xl">
            {/* Portal Header */}
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-br from-[#06B6D4] to-[#06B6D4]/50 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
              <div className="relative bg-white rounded-xl p-8 border-2 border-[#06B6D4] shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-lg">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[#02023F] text-3xl">Portal Interno</h3>
                </div>
              </div>
            </div>

            {/* Modules Grid */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#E5E7EB] shadow-lg h-[520px] flex flex-col">
              <h4 className="text-[#06B6D4] text-2xl mb-6">Módulos</h4>
              <div className="grid grid-cols-4 gap-3 flex-1 content-center">
                {/* Legajos - icono Users (personas) */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#06B6D4] to-[#0891B2] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <Users className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Legajos</p>
                </div>

                {/* Gestor Documental - icono FolderOpen */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <FolderOpen className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Gestor<br/>Documental</p>
                </div>

                {/* Matrices de Riesgo - icono Shield */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <Shield className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Matrices de<br/>Riesgo</p>
                </div>

                {/* Monitoreo - icono BarChart3 */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#06B6D4] to-[#0891B2] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <BarChart3 className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Monitoreo<br/>Continuo</p>
                </div>

                {/* Monitoreo Predictivo - icono TrendingUp */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#A855F7] to-[#9333EA] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <TrendingUp className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Monitoreo<br/>Predictivo</p>
                </div>

                {/* Gobernanza IA - icono Activity (pulso/onda) */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#A855F7] to-[#9333EA] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <Activity className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Gobernanza<br/>IA (XAI)</p>
                </div>

                {/* Blockchain - icono Blocks */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <Blocks className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Blockchain<br/>Inmutable</p>
                </div>

                {/* Configuración - icono Settings */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#06B6D4] to-[#0891B2] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <Settings className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Configuración<br/>Sistema</p>
                </div>

                {/* Perfil Documental y Transaccional - icono ScrollText */}
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#3B82F6] to-[#2563EB] shadow-md mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all">
                    <ScrollText className="w-10 h-10 text-white" strokeWidth={2.5} />
                  </div>
                  <p className="text-[#374151] text-base leading-tight">Perfil Documental<br/>y Transaccional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl px-10 py-5 border border-[#E5E7EB] shadow-lg">
            <p className="text-[#374151] text-xl">
              Flujo de datos en <span className="text-[#3B82F6]">tiempo real</span> entre portales con trazabilidad completa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}