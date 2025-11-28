import { Shield } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide11TransicionInterno() {
  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay with electric accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A] to-[#02023F]" />
      
      {/* Electric glow circles */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#06B6D4]/20 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] rounded-full bg-[#0891B2]/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center">
        {/* Icon */}
        <div className="mb-12 relative">
          <div className="absolute -inset-6 bg-gradient-to-r from-[#06B6D4] via-[#0891B2] to-[#06B6D4] rounded-full blur-2xl opacity-50 animate-pulse" />
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-[#06B6D4] to-[#0891B2] flex items-center justify-center shadow-2xl">
            <Shield className="w-20 h-20 text-white" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-8xl leading-tight text-center mb-8">
          Ahora: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] to-[#0891B2]">Portal Interno</span>
        </h2>

        {/* Subtitle */}
        <div className="bg-gradient-to-r from-[#06B6D4]/30 to-[#0891B2]/30 backdrop-blur-md rounded-2xl px-16 py-8 border-2 border-[#06B6D4]/60 shadow-2xl">
          <p className="text-white text-4xl text-center">
            Centro de Comando AML para su equipo de Compliance
          </p>
        </div>
      </div>
    </div>
  );
}