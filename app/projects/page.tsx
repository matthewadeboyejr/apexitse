"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
}

export default function ProjectsPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryImages: GalleryItem[] = [
    { id: 1, src: "/images/product1.jpeg", alt: "Apexitse Project Showcase 1" },
    { id: 2, src: "/images/prouduct2.jpeg", alt: "Apexitse Project Showcase 2" },
    { id: 3, src: "/images/prouduct3.jpeg", alt: "Apexitse Project Showcase 3" },
    { id: 4, src: "/images/prouduct4.jpeg", alt: "Apexitse Project Showcase 4" },
    { id: 5, src: "/images/prouduct5.jpeg", alt: "Apexitse Project Showcase 5" },
    { id: 6, src: "/images/prouduct6.jpeg", alt: "Apexitse Project Showcase 6" },
    { id: 7, src: "/images/prouduct7.jpeg", alt: "Apexitse Project Showcase 7" },
    { id: 8, src: "/images/prouduct8.jpeg", alt: "Apexitse Project Showcase 8" },
    { id: 9, src: "/images/prouduct9.jpeg", alt: "Apexitse Project Showcase 9" },
    { id: 10, src: "/images/prouduct10.jpeg", alt: "Apexitse Project Showcase 10" },
    { id: 11, src: "/images/prouduct11.jpeg", alt: "Apexitse Project Showcase 11" },
    { id: 12, src: "/images/prouduct12.jpeg", alt: "Apexitse Project Showcase 12" },
    { id: 13, src: "/images/prouduct13.jpeg", alt: "Apexitse Project Showcase 13" },
    { id: 14, src: "/images/prouduct14.jpeg", alt: "Apexitse Project Showcase 14" },
    { id: 15, src: "/images/prouduct15.jpeg", alt: "Apexitse Project Showcase 15" },
    { id: 16, src: "/images/prouduct16.jpeg", alt: "Apexitse Project Showcase 16" },
    { id: 17, src: "/images/prouduct17.jpeg", alt: "Apexitse Project Showcase 17" },
    { id: 18, src: "/images/prouduct18.jpeg", alt: "Apexitse Project Showcase 18" },
    { id: 19, src: "/images/prouduct19.jpeg", alt: "Apexitse Project Showcase 19" },
    { id: 20, src: "/images/prouduct20.jpeg", alt: "Apexitse Project Showcase 20" }
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % galleryImages.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <div className="space-y-24 pb-20">

      {/* 1. HERO BANNER CARD */}
      <section className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl min-h-[440px] flex items-center">

            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/glass_balustrade.jpeg"
                alt="Apexitse Completed Works Portfolio"
                fill
                priority
                className="object-cover object-center opacity-30 sm:opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-2xl p-8 sm:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#CA3333]/40 text-[#2BA2DD] text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#CA3333]" />
                <span>Completed Works & Site Execution</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-mono">
                Project <span className="text-[#CA3333]">Gallery</span> Portfolio
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Explore our showcase of completed architectural finishing, frameless glass fittings, Alucobond ACP cladding, and structural metalwork installations across Nigeria.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#CA3333] hover:bg-[#b22b2b] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#CA3333]/30 transition-all cursor-pointer flex items-center justify-center"
                >
                  Request Project Quote
                </a>

                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20quote"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* GALLERY GRID SECTION */}
      <section className="relative py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div
                key={img.id}
                onClick={() => setSelectedImageIndex(idx)}
                className="relative h-72 sm:h-80 rounded-2xl overflow-hidden glass-panel glass-panel-hover group cursor-pointer border border-slate-800 shadow-xl"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-[#060b17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 rounded-full bg-slate-900/90 text-[#2BA2DD] border border-[#2BA2DD]/40 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-slate-700/80 backdrop-blur-md">
                  Project #{img.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL VIEWER */}
      {selectedImageIndex !== null && (
        <div
          onClick={() => setSelectedImageIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-slate-900/80 hover:bg-[#CA3333] rounded-full border border-slate-700 transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-slate-900/80 hover:bg-[#CA3333] rounded-full border border-slate-700 transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[75vh] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 flex flex-col justify-between"
          >
            <div className="relative w-full h-full">
              <Image
                src={galleryImages[selectedImageIndex].src}
                alt={galleryImages[selectedImageIndex].alt}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Bottom Bar */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs font-mono font-bold text-white">
                Project Image {selectedImageIndex + 1} of {galleryImages.length}
              </span>

              <a
                href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20saw%20your%20project%20gallery%20and%20would%20like%20a%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-xl bg-[#CA3333] hover:bg-[#b22b2b] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#CA3333]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Project Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* PROJECT CTA BANNER */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Have a Project with Similar Requirements?</h3>
              <p className="text-xs text-slate-400 max-w-lg">
                Request a custom quote or schedule our senior finishing engineers for site measurement in Abuja or nationwide.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-full bg-[#CA3333] hover:bg-[#b22b2b] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#CA3333]/20 flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Quote</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* End of Projects Page */}
    </div>
  );
}
