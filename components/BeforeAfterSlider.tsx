"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal, Sparkles } from "lucide-react";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
  beforeTitle?: string;
  afterTitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeTitle = "Before (Raw Frame)",
  afterTitle = "After Apexitse Finishing",
}: BeforeAfterProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      let percentage = (x / rect.width) * 100;
      if (percentage < 0) percentage = 0;
      if (percentage > 100) percentage = 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 select-none group cursor-ew-resize"
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={afterTitle}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-4 right-4 bg-slate-900/90 text-orange-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-orange-500/30 backdrop-blur-md flex items-center gap-1.5 shadow-lg">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{afterTitle}</span>
        </div>
      </div>

      {/* Before Image (Clipped overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <div className="relative w-full h-full min-w-[300px] sm:min-w-[500px]">
          <Image
            src={beforeImage}
            alt={beforeTitle}
            fill
            className="object-cover brightness-75 contrast-125 grayscale-[30%]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute top-4 left-4 bg-slate-900/90 text-slate-300 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-slate-700 backdrop-blur-md shadow-lg">
            {beforeTitle}
          </div>
        </div>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-amber-500 to-orange-600 shadow-[0_0_15px_rgba(249,115,22,0.8)] z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-orange-500 text-orange-400 flex items-center justify-center shadow-xl shadow-black/80">
          <MoveHorizontal className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}
