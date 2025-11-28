import { MessageCircle } from 'lucide-react';
import logoBlue from 'figma:asset/2ea72b0dcf0eee577b3030f20b3826bf2c827779.png';

export function Slide29Preguntas() {
  return (
    <div 
      className="relative w-full h-full overflow-hidden flex items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 25%, #EFF6FF 50%, #F5F3FF 75%, #FAF5FF 100%)'
      }}
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.4) 0%, transparent 70%)' }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)' }}
        />
      </div>

      {/* Logo */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoBlue} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative text-center px-20 -mt-8">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div 
            className="relative w-24 h-24 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)'
            }}
          >
            <MessageCircle className="w-12 h-12 text-white" strokeWidth={2} />
            
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-50 blur-xl"
              style={{
                background: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 50%, #A855F7 100%)',
                zIndex: -1
              }}
            />
          </div>
        </div>

        {/* Title */}
        <h1 
          className="text-7xl mb-6 leading-tight"
          style={{
            background: 'linear-gradient(135deg, #02023F 0%, #3B82F6 50%, #A855F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          ¿Preguntas?
        </h1>

        {/* Subtitle */}
        <p className="text-[#6B7280] text-3xl max-w-3xl mx-auto leading-relaxed">
          Estamos aquí para resolver todas tus dudas
        </p>
      </div>
    </div>
  );
}