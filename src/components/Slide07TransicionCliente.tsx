import { Users } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide07TransicionCliente() {
  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden p-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl" />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center">
        {/* Icon */}
        <div className="mb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-2xl">
              <Users className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-white text-7xl leading-tight text-center mb-6">
          Primero: <span className="text-[#3B82F6]">Portal Cliente</span>
        </h2>

        {/* Subtitle */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-12 py-6 border-2 border-[#3B82F6]/60">
          <p className="text-white/90 text-3xl text-center">
            Onboarding digital sin fricción. White Label personalizable con su marca.
          </p>
        </div>
      </div>
    </div>
  );
}