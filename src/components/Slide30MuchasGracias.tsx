import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import logoFidesnet from 'figma:asset/f4df3621a1d1bd007e2c03c245e5548ac614c5da.png';
import logoPewma from 'figma:asset/e284ca26abcddf88dfebaf24f56f2d7460e1f2de.png';

export function Slide30MuchasGracias() {
  return (
    <div 
      className="relative w-full h-full overflow-hidden flex flex-col justify-center items-center p-20"
      style={{
        background: 'linear-gradient(135deg, #02023F 0%, #1E3A8A 50%, #02023F 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.6) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.6) 0%, transparent 70%)' }}
        />
      </div>

      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Content */}
      <div className="relative text-center px-20 -mt-16">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="relative">
            <img src={logoWhite} alt="Nevra+" className="h-32 drop-shadow-2xl" />
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 opacity-30 blur-2xl"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,246,0.8) 0%, transparent 70%)',
                zIndex: -1
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="text-8xl mb-6 leading-tight text-white"
        >
          ¡Muchas Gracias!
        </h1>

        {/* Decorative accent */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-3xl max-w-3xl mx-auto leading-relaxed mb-12">
          El futuro del cumplimiento normativo comienza hoy
        </p>

        {/* CTA Button - Elegant version */}
        <a 
          href="https://nevranet.com/#contacto"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block group"
        >
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#3B82F6] via-[#06B6D4] to-[#A855F7] rounded-2xl blur opacity-40 group-hover:opacity-60 transition-opacity" />
            <div className="relative bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-2xl px-10 py-5 group-hover:bg-white/15 group-hover:border-white/30 transition-all">
              <p className="text-white text-2xl">
                Agendar una Demo →
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* Partner Logos */}
      <div className="absolute bottom-20 left-0 right-0 flex items-center justify-center gap-8">
        <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
          <img src={logoPewma} alt="Pewma" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="relative">
          <div className="text-white/70 text-xl flex items-center px-4">en alianza con</div>
          <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
        
        <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/10">
          <img src={logoFidesnet} alt="Fidesnet" className="h-10 opacity-90 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
}