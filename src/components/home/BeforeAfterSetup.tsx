"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface BeforeAfterSetupProps {
  beforeImage?: string;
  afterImage?: string;
}

export default function BeforeAfterSetup({ beforeImage, afterImage }: BeforeAfterSetupProps) {
  const [isHovered, setIsHovered] = useState(false);

  if (!beforeImage || !afterImage) {
    return null;
  }

  return (
    <section className="py-24 bg-zinc-900 border-t border-zinc-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Transform Your Workspace</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">See the difference our ergonomic and stylish chairs can make to an office environment.</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div 
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl cursor-ew-resize group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <Image src={afterImage} alt="New Office Setup" fill className="object-cover" />
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div 
              className="absolute inset-0 bg-zinc-950 flex items-center justify-center border-r-2 border-emerald-500 transition-all duration-700 ease-in-out"
              style={{ clipPath: isHovered ? 'inset(0 100% 0 0)' : 'inset(0 50% 0 0)' }}
            >
              <Image src={beforeImage} alt="Old Office Setup" fill className="object-cover" />
            </div>

            {/* Divider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-emerald-500 transition-all duration-700 ease-in-out z-10 flex items-center justify-center"
              style={{ left: isHovered ? '0%' : '50%' }}
            >
              {!isHovered && (
                <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-emerald-600 absolute -translate-x-1/2">
                  <ArrowRight className="w-6 h-6 animate-pulse" />
                </div>
              )}
            </div>
            
            {/* Labels */}
            <div className="absolute top-6 left-6 bg-black/60 backdrop-blur text-white px-4 py-2 rounded-lg font-semibold tracking-wider text-sm transition-opacity duration-300 z-20" style={{ opacity: isHovered ? 0 : 1 }}>
              BEFORE
            </div>
            <div className="absolute top-6 right-6 bg-emerald-500/80 backdrop-blur text-white px-4 py-2 rounded-lg font-semibold tracking-wider text-sm z-20">
              AFTER
            </div>
          </div>
          <p className="text-center text-zinc-500 text-sm mt-6">Hover over the image to see the transformation.</p>
        </div>
      </div>
    </section>
  );
}
