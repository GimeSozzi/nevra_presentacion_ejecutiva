import { Smartphone, CheckCircle2, Zap, Shield, Clock } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';
import portalClienteScreenshot from 'figma:asset/f92a84e915c8b06f4ff1594aa0d9a6fc6169ec9d.png';

export function Slide09ExperienciaMobile() {
  const features = [
    {
      icon: Smartphone,
      text: 'Registro desde cualquier dispositivo',
      color: '#3B82F6'
    },
    {
      icon: CheckCircle2,
      text: 'Validación de documentos con IA',
      color: '#06B6D4'
    },
    {
      icon: Zap,
      text: 'Biometría facial en segundos',
      color: '#A855F7'
    },
    {
      icon: Shield,
      text: 'Seguridad end-to-end',
      color: '#10B981'
    }
  ];

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
      <div className="relative h-full grid grid-cols-2 gap-16 items-center">
        {/* Left - Mobile Preview Placeholder */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-8 bg-gradient-to-r from-[#3B82F6]/20 to-[#06B6D4]/20 rounded-[3rem] blur-2xl" />
            
            {/* Phone mockup */}
            <div className="relative w-80 h-[640px] bg-white rounded-[3rem] border-8 border-[#02023F] shadow-2xl overflow-hidden">
              {/* Screen content - Portal Cliente Screenshot */}
              <img 
                src={portalClienteScreenshot} 
                alt="Portal Cliente Nevra" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right - Features */}
        <div>
          <h2 className="text-[#02023F] text-6xl mb-4 leading-tight">
            Experiencia <span className="text-[#3B82F6]">Multiplataforma</span>
          </h2>
          <p className="text-[#374151] text-2xl mb-12 leading-relaxed">
            Sus clientes completan el onboarding desde desktop, tablet o smartphone.
          </p>

          {/* Features list */}
          <div className="space-y-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 group">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300"
                    style={{ background: feature.color }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <p className="text-[#374151] text-xl">{feature.text}</p>
                </div>
              );
            })}
          </div>

          {/* Stat box */}
          <div className="mt-12 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-4 justify-center">
              <Clock className="w-10 h-10 text-white" />
              <p className="text-white text-3xl text-center">
                Desde inicio hasta aprobación en sólo <span className="font-bold">minutos</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}