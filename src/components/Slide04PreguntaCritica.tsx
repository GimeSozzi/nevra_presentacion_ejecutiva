import { Sparkles } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

export function Slide04PreguntaCritica() {
  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden">
      {/* Spotlight effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(6,182,212,0.1) 30%, rgba(168,85,247,0.05) 60%, transparent 70%)' 
          }}
        />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-[#3B82F6] blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-[#06B6D4] blur-sm animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-[#A855F7] blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 rounded-full bg-[#3B82F6] blur-sm animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-20">
        {/* Icon */}
        <div className="mb-12">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#06B6D4] flex items-center justify-center shadow-2xl animate-pulse">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Main Question */}
        <h2 className="text-white text-7xl leading-tight text-center max-w-5xl mb-8">
          ¿Y si existiera un sistema que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#A855F7]">trabaje 24/7</span>,
        </h2>
        <h2 className="text-white text-7xl leading-tight text-center max-w-5xl mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#06B6D4] via-[#A855F7] to-[#3B82F6]">aprenda constantemente</span>,
        </h2>
        <h2 className="text-white text-7xl leading-tight text-center max-w-5xl">
          y sea <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#06B6D4]">100% auditable</span>?
        </h2>
      </div>
    </div>
  );
}
