import { ArrowRight, Shield, Lock, Network, CheckCircle2, Database, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';
import logoFidesnet from 'figma:asset/f4df3621a1d1bd007e2c03c245e5548ac614c5da.png';
import logoPewma from 'figma:asset/e284ca26abcddf88dfebaf24f56f2d7460e1f2de.png';

export function Slide01Portada() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-[#02023F] via-[#1E3A8A] to-[#02023F] overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3B82F6 1px, transparent 1px),
            linear-gradient(to bottom, #3B82F6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#02023F]/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logoWhite} alt="Nevra+" className="h-28" />
        </div>

        {/* Main Content - Grid con contenido izquierda y animación derecha */}
        <div className="grid grid-cols-2 gap-12 items-center flex-1">
          {/* Contenido animado (texto) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h2 className="text-7xl leading-tight mb-8">
              <span className="text-white">Prevención y Cumplimiento</span><br />
              <span className="text-blue-400">Inteligente.</span>
            </h2>
            <p className="text-white/80 text-3xl leading-relaxed max-w-3xl">
              <span className="font-bold text-white">Nevra</span> es una plataforma modular que combina <span className="font-bold text-white">Inteligencia Artificial</span> y Humana + <span className="font-bold text-white">Blockchain</span> para la prevención de lavado de activos y fraude (LA/FT).
            </p>
          </motion.div>

          {/* Visualización orbital completa */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[600px]"
          >
            {/* Nodo central */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0, -5, 0]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20 border-2 border-blue-400/50 backdrop-blur-sm flex items-center justify-center"
              >
                <Shield className="w-16 h-16 text-blue-400" />
              </motion.div>
            </div>
            
            {/* Nodos orbitales */}
            {[
              { icon: Lock, angle: 0, delay: 0, radius: 180, label: "Seguridad" },
              { icon: Network, angle: 72, delay: 0.2, radius: 180, label: "Blockchain" },
              { icon: CheckCircle2, angle: 144, delay: 0.4, radius: 180, label: "Compliance" },
              { icon: Database, angle: 216, delay: 0.6, radius: 180, label: "Datos" },
              { icon: Eye, angle: 288, delay: 0.8, radius: 180, label: "Monitoreo" }
            ].map((node, index) => {
              const x = Math.cos((node.angle * Math.PI) / 180) * node.radius;
              const y = Math.sin((node.angle * Math.PI) / 180) * node.radius;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: [x, x * 1.1, x],
                    y: [y, y * 1.1, y]
                  }}
                  transition={{ 
                    opacity: { duration: 0.5, delay: node.delay },
                    scale: { duration: 0.5, delay: node.delay },
                    x: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 rounded-full bg-white/10 border border-blue-400/30 backdrop-blur-sm flex items-center justify-center">
                      <node.icon className="w-10 h-10 text-blue-300/80" />
                    </div>
                    
                    <motion.span 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: node.delay + 0.3 }}
                      className="text-blue-200/90 text-lg"
                    >
                      {node.label}
                    </motion.span>
                  </div>
                  
                  {/* Líneas de conexión */}
                  <svg
                    className="absolute top-1/2 left-1/2 pointer-events-none"
                    style={{
                      width: node.radius * 2,
                      height: node.radius * 2,
                      transform: 'translate(-50%, -50%)'
                    }}
                  >
                    <motion.line
                      x1={node.radius}
                      y1={node.radius}
                      x2={node.radius - x}
                      y2={node.radius - y}
                      stroke="rgba(96, 165, 250, 0.2)"
                      strokeWidth="1"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: node.delay + 0.5 }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer - Logos Alianzas */}
        <div className="flex items-center justify-center gap-8">
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
    </div>
  );
}