import { Play } from 'lucide-react';
import logoWhite from 'figma:asset/37d51be629c998410a53f167906d4c237897c17d.png';

interface VideoFrameProps {
  title: string;
  badge: string;
  videoUrl?: string;
}

export function VideoFrame({ title, badge, videoUrl }: VideoFrameProps) {
  return (
    <div className="relative w-full h-full bg-[#02023F] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#02023F] via-[#1E3A8A]/50 to-[#02023F]" />
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#3B82F6]/15 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#06B6D4]/15 blur-3xl" />

      {/* Logo en esquina superior derecha */}
      <div className="absolute top-8 right-8 z-10">
        <img src={logoWhite} alt="Nevra+" className="h-12" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center p-20">
        {/* Title */}
        <div className="mb-8 w-full">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-[#3B82F6]/30 inline-block">
            <h2 className="text-white text-4xl">{title}</h2>
          </div>
        </div>

        {/* Video Container */}
        <div className="relative w-full max-w-6xl aspect-video rounded-2xl overflow-hidden border-2 border-[#3B82F6]/40 shadow-2xl bg-black/30 backdrop-blur-sm">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 flex items-center justify-center hover:bg-white/20 transition-all cursor-pointer">
                  <Play className="w-12 h-12 text-white ml-2" fill="white" />
                </div>
                <p className="text-white/70 text-xl">Inserte su video aquí</p>
              </div>
            </div>
          )}
        </div>

        {/* Badge */}
        <div className="mt-8 w-full flex justify-center">
          <div className="bg-gradient-to-r from-[#3B82F6]/30 to-[#06B6D4]/30 backdrop-blur-md rounded-2xl px-10 py-4 border-2 border-[#3B82F6]/60 shadow-xl">
            <p className="text-white text-2xl text-center">{badge}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
