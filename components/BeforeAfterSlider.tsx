"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, CheckCircle2, Building2, Award } from "lucide-react";

interface SingleImageShowcaseProps {
  beforeImage?: string;
  afterImage?: string;
  image?: string;
  beforeTitle?: string;
  afterTitle?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  image,
  afterTitle = "Finished Architectural Excellence",
  title,
  subtitle = "High-precision structural metal fabrication, glass fittings, and Alucobond ACP cladding delivered to industrial standards."
}: SingleImageShowcaseProps) {
  const displayImage = image || afterImage || beforeImage || "/images/glass_balustrade.png";
  const displayTitle = title || afterTitle;


  return (
    <div className="relative w-full h-[400px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group bg-slate-950">
      {/* Single High-Resolution Image */}
      <Image
        src={displayImage}
        alt={displayTitle}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        sizes="(max-width: 768px) 100vw, 100vw"
        priority
      />

      {/* Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

      {/* Top Badge Overlay */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <span className="bg-slate-900/90 text-[#2BA2DD] text-xs font-mono font-bold uppercase tracking-wider px-4 py-2 rounded-full border border-[#2BA2DD]/30 backdrop-blur-md flex items-center gap-2 shadow-lg">
          <Sparkles className="w-4 h-4 text-[#CA3333]" />
          <span>Finishing Mastery Showcase</span>
        </span>
      </div>

      {/* Bottom Architectural Info Card */}

    </div>
  );
}
