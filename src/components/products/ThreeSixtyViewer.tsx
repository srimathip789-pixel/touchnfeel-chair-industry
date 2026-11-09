"use client";

import { useState } from "react";
import Image from "next/image";
import { Move3D, ZoomIn, Info } from "lucide-react";

interface ThreeSixtyViewerProps {
  images?: string[];
  fallbackImage: string;
  productName: string;
}

export default function ThreeSixtyViewer({ images, fallbackImage, productName }: ThreeSixtyViewerProps) {
  // This is a simplified 360 viewer. 
  // In a real implementation, this would use a library or track mouse drag to cycle through an array of images.
  const has360 = images && images.length > 0;
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const displayImage = has360 ? images[currentImageIndex] : fallbackImage;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!has360) return;
    
    // Calculate index based on mouse X position relative to container
    const { left, width } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const percentage = x / width;
    
    // Map percentage to array index
    const index = Math.floor(percentage * images.length);
    // Ensure index is within bounds
    const safeIndex = Math.max(0, Math.min(index, images.length - 1));
    
    setCurrentImageIndex(safeIndex);
  };

  return (
    <div className="relative aspect-square w-full bg-secondary/20 rounded-3xl overflow-hidden group border border-border/50">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      
      <div 
        className="absolute inset-0 flex items-center justify-center p-8 cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <Image
          src={displayImage}
          alt={`${productName} view ${currentImageIndex + 1}`}
          fill
          className="object-contain p-8 drop-shadow-2xl transition-transform duration-300"
          style={{ transform: isHovering && !has360 ? 'scale(1.05)' : 'scale(1)' }}
          priority
        />
      </div>

      {/* Badges / Controls */}
      <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
        {has360 ? (
          <div className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border flex items-center gap-2 text-xs font-bold text-foreground">
            <Move3D className="w-3.5 h-3.5 text-emerald-500" /> 
            <span>360° Drag to Rotate</span>
          </div>
        ) : (
          <div className="bg-background/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-border flex items-center gap-2 text-xs font-bold text-foreground shadow-sm">
            <Info className="w-3.5 h-3.5 text-emerald-500" /> 
            <span>Hover to zoom</span>
          </div>
        )}
        
        <button className="bg-background/80 backdrop-blur-md p-2 rounded-full border border-border hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors pointer-events-auto shadow-sm">
          <ZoomIn className="w-4 h-4" />
        </button>
      </div>

      {/* Progress indicator for 360 */}
      {has360 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 rounded-full transition-all ${idx === currentImageIndex ? 'w-4 bg-emerald-500' : 'w-1.5 bg-border'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
