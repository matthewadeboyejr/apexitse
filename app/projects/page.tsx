"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Play,
  Video,
  Film,
  Camera
} from "lucide-react";

export interface GalleryMedia {
  id: number;
  type: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  title: string;
}

export default function ProjectsPage() {
  const [activeTab, setActiveTab] = useState<"image" | "video" | "all">("image");
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

  const galleryImages: GalleryMedia[] = [
    { id: 1, type: "image", src: "/images/product1.jpeg", alt: "Apexitse Project Showcase 1", title: "Frameless Glass Balustrade" },
    { id: 2, type: "image", src: "/images/prouduct2.jpeg", alt: "Apexitse Project Showcase 2", title: "Burglar Proof Steel Gate" },
    { id: 3, type: "image", src: "/images/prouduct3.jpeg", alt: "Apexitse Project Showcase 3", title: "Stainless Steel Handrail" },
    { id: 4, type: "image", src: "/images/prouduct4.jpeg", alt: "Apexitse Project Showcase 4", title: "Alucobond ACP Facade" },
    { id: 5, type: "image", src: "/images/prouduct5.jpeg", alt: "Apexitse Project Showcase 5", title: "Acoustic Glass Office Partition" },
    { id: 6, type: "image", src: "/images/prouduct6.jpeg", alt: "Apexitse Project Showcase 6", title: "CNC Laser Cut Wall Screen" },
    { id: 7, type: "image", src: "/images/prouduct7.jpeg", alt: "Apexitse Project Showcase 7", title: "Tempered Glass Shower Enclosure" },
    { id: 8, type: "image", src: "/images/prouduct8.jpeg", alt: "Apexitse Project Showcase 8", title: "Structural Steel Carport" },
    { id: 9, type: "image", src: "/images/prouduct9.jpeg", alt: "Apexitse Project Showcase 9", title: "Stainless Steel Stair Handrail" },
    { id: 10, type: "image", src: "/images/prouduct10.jpeg", alt: "Apexitse Project Showcase 10", title: "Frameless Glass Balustrade System" },
    { id: 11, type: "image", src: "/images/prouduct11.jpeg", alt: "Apexitse Project Showcase 11", title: "Alucobond ACP Cladding Facade" },
    { id: 12, type: "image", src: "/images/prouduct12.jpeg", alt: "Apexitse Project Showcase 12", title: "Architectural Pergola Shade" },
    { id: 13, type: "image", src: "/images/prouduct13.jpeg", alt: "Apexitse Project Showcase 13", title: "Bathroom Glass Cubicle" },
    { id: 14, type: "image", src: "/images/prouduct14.jpeg", alt: "Apexitse Project Showcase 14", title: "CNC Laser Decorative Screen" },
    { id: 15, type: "image", src: "/images/prouduct15.jpeg", alt: "Apexitse Project Showcase 15", title: "High-Security Wrought Iron Fence" },
    { id: 16, type: "image", src: "/images/prouduct16.jpeg", alt: "Apexitse Project Showcase 16", title: "Executive Office Partitioning" },
    { id: 17, type: "image", src: "/images/prouduct17.jpeg", alt: "Apexitse Project Showcase 17", title: "Structural Steel Staircase" },
    { id: 18, type: "image", src: "/images/prouduct18.jpeg", alt: "Apexitse Project Showcase 18", title: "Outdoor Canopy Structure" },
    { id: 19, type: "image", src: "/images/prouduct19.jpeg", alt: "Apexitse Project Showcase 19", title: "Custom Glass Partition Wall" },
    { id: 20, type: "image", src: "/images/prouduct20.jpeg", alt: "Apexitse Project Showcase 20", title: "Stainless Steel Balcony Railing" },
    { id: 21, type: "image", src: "/images/prouduct21.jpeg", alt: "Apexitse Project Showcase 21", title: "Commercial ACP Cladding" },
    { id: 22, type: "image", src: "/images/prouduct22.jpeg", alt: "Apexitse Project Showcase 22", title: "Automated Sliding Gate" },
    { id: 23, type: "image", src: "/images/prouduct23.jpeg", alt: "Apexitse Project Showcase 23", title: "Tempered Glass Door System" },
    { id: 24, type: "image", src: "/images/prouduct24.jpeg", alt: "Apexitse Project Showcase 24", title: "Custom Laser Cut Gate Panel" },
    { id: 25, type: "image", src: "/images/prouduct25.jpeg", alt: "Apexitse Project Showcase 25", title: "Perimeter Security Fencing" },
    { id: 26, type: "image", src: "/images/prouduct26.jpeg", alt: "Apexitse Project Showcase 26", title: "Modern Aluminum Window System" },
    { id: 27, type: "image", src: "/images/prouduct27.jpeg", alt: "Apexitse Project Showcase 27", title: "Glass Staircase Balustrade" },
    { id: 28, type: "image", src: "/images/prouduct28.jpeg", alt: "Apexitse Project Showcase 28", title: "Commercial Signage Structure" },
    { id: 29, type: "image", src: "/images/prouduct29.jpeg", alt: "Apexitse Project Showcase 29", title: "Luxury Mirror Wall Panel" },
    { id: 30, type: "image", src: "/images/prouduct30.jpeg", alt: "Apexitse Project Showcase 30", title: "Tensile Carport Canopy" },
    { id: 31, type: "image", src: "/images/prouduct31.jpeg", alt: "Apexitse Project Showcase 31", title: "Custom Metal Railing System" },
    { id: 32, type: "image", src: "/images/prouduct32.jpeg", alt: "Apexitse Project Showcase 32", title: "Frameless Shower Door" },
    { id: 33, type: "image", src: "/images/prouduct33.jpeg", alt: "Apexitse Project Showcase 33", title: "Alucobond Architectural Facade" },
    { id: 34, type: "image", src: "/images/prouduct34.jpeg", alt: "Apexitse Project Showcase 34", title: "CNC Laser Privacy Screen" },
    { id: 35, type: "image", src: "/images/prouduct35.jpeg", alt: "Apexitse Project Showcase 35", title: "Structural Steel Frame Work" },
    { id: 36, type: "image", src: "/images/prouduct36.jpeg", alt: "Apexitse Project Showcase 36", title: "Glass Balustrade Installation" },
    { id: 37, type: "image", src: "/images/prouduct37.jpeg", alt: "Apexitse Project Showcase 37", title: "Laser Cut Gate Panel" },
    { id: 38, type: "image", src: "/images/prouduct38.jpeg", alt: "Apexitse Project Showcase 38", title: "Wrought Iron Perimeter Railing" },
    { id: 39, type: "image", src: "/images/prouduct39.jpeg", alt: "Apexitse Project Showcase 39", title: "Alucobond Column Cladding" },
    { id: 40, type: "image", src: "/images/prouduct40.jpeg", alt: "Apexitse Project Showcase 40", title: "Executive Partitioning Glass" },
    { id: 41, type: "image", src: "/images/prouduct41.jpeg", alt: "Apexitse Project Showcase 41", title: "Tempered Glass Door System" },
    { id: 42, type: "image", src: "/images/prouduct42.jpeg", alt: "Apexitse Project Showcase 42", title: "Structural Steel Frame Work" },
    { id: 43, type: "image", src: "/images/prouduct43.jpeg", alt: "Apexitse Project Showcase 43", title: "Laser Cut Wall Screen" },
    { id: 44, type: "image", src: "/images/prouduct44.jpeg", alt: "Apexitse Project Showcase 44", title: "Custom Metal Handrail System" },
    { id: 45, type: "image", src: "/images/prouduct45.jpeg", alt: "Apexitse Project Showcase 45", title: "Shower Cubicle Enclosure" },
    { id: 46, type: "image", src: "/images/prouduct46.jpeg", alt: "Apexitse Project Showcase 46", title: "Aluminum Window Fitting" },
    { id: 47, type: "image", src: "/images/prouduct47.jpeg", alt: "Apexitse Project Showcase 47", title: "Pergola & Gazebo Shade" },
    { id: 48, type: "image", src: "/images/prouduct48.jpeg", alt: "Apexitse Project Showcase 48", title: "Roof Water Collector System" },
    { id: 49, type: "image", src: "/images/prouduct49.jpeg", alt: "Apexitse Project Showcase 49", title: "Outdoor Metal Canopy" },
    { id: 50, type: "image", src: "/images/prouduct50.jpeg", alt: "Apexitse Project Showcase 50", title: "Stainless Steel Balcony Railing" },
    { id: 51, type: "image", src: "/images/prouduct51.jpeg", alt: "Apexitse Project Showcase 51", title: "Office Partition Wall System" },
    { id: 52, type: "image", src: "/images/prouduct52.jpeg", alt: "Apexitse Project Showcase 52", title: "Commercial Facade Cladding" },
    { id: 53, type: "image", src: "/images/prouduct53.jpeg", alt: "Apexitse Project Showcase 53", title: "Frameless Glass Stair Railing" },
    { id: 54, type: "image", src: "/images/prouduct54.jpeg", alt: "Apexitse Project Showcase 54", title: "Wrought Iron Burglar Proofing" },
    { id: 55, type: "image", src: "/images/prouduct55.jpeg", alt: "Apexitse Project Showcase 55", title: "Architectural Pergola Frame" },
    { id: 56, type: "image", src: "/images/prouduct56.jpeg", alt: "Apexitse Project Showcase 56", title: "Custom Laser Cut Privacy Screen" },
    { id: 57, type: "image", src: "/images/prouduct57.jpeg", alt: "Apexitse Project Showcase 57", title: "Aluminum Glass Sliding Door" },
    { id: 58, type: "image", src: "/images/prouduct58.jpeg", alt: "Apexitse Project Showcase 58", title: "Structural Steel Roof Truss" },
    { id: 59, type: "image", src: "/images/prouduct59.jpeg", alt: "Apexitse Project Showcase 59", title: "High-Security Metal Fence" },
    { id: 60, type: "image", src: "/images/prouduct60.jpeg", alt: "Apexitse Project Showcase 60", title: "Bathroom Glass Cubicle" },
    { id: 61, type: "image", src: "/images/prouduct61.jpeg", alt: "Apexitse Project Showcase 61", title: "Alucobond ACP Wall Panel" },
    { id: 62, type: "image", src: "/images/prouduct62.jpeg", alt: "Apexitse Project Showcase 62", title: "Turnkey Finishing Execution" }
  ];

  const galleryVideos: GalleryMedia[] = [
    {
      id: 101,
      type: "video",
      src: "/images/video1.mp4",
      alt: "Alucobond ACP Exterior Cladding Site Execution",
      title: "Alucobond ACP Cladding Site Reel 01"
    },
    {
      id: 102,
      type: "video",
      src: "/images/video2.mp4",
      alt: "Frameless Glass Balustrade & Handrail Fitting",
      title: "Glass Balustrade Fitting Reel 02"
    },
    {
      id: 103,
      type: "video",
      src: "/images/video3.mp4",
      alt: "Precision CNC Laser Cut Metal Fabrication",
      title: "CNC Laser Cut Metalwork Reel 03"
    },
    {
      id: 104,
      type: "video",
      src: "/images/video4.mp4",
      alt: "Structural Carport & Canopy Installation",
      title: "Structural Carport & Canopy Reel 04"
    },
    {
      id: 105,
      type: "video",
      src: "/images/video5.mp4",
      alt: "Turnkey Office Partitioning & Interior Finishing",
      title: "Office Partitioning Fit-Out Reel 05"
    },
    {
      id: 106,
      type: "video",
      src: "/images/video6.mp4",
      alt: "Stainless Steel Staircase Handrail Installation",
      title: "Stainless Steel Handrail Reel 06"
    },
    {
      id: 107,
      type: "video",
      src: "/images/video7.mp4",
      alt: "Tempered Glass Shower Cubicle Installation",
      title: "Glass Shower Enclosure Reel 07"
    },
    {
      id: 108,
      type: "video",
      src: "/images/video8.mp4",
      alt: "Commercial Alucobond Facade Cladding",
      title: "Commercial Facade Cladding Reel 08"
    },
    {
      id: 109,
      type: "video",
      src: "/images/video9.mp4",
      alt: "Custom Burglar Proof Steel Gate & Railing",
      title: "Custom Steel Gate & Railing Reel 09"
    },
    {
      id: 110,
      type: "video",
      src: "/images/video10.mp4",
      alt: "Corporate Acoustic Glass Office Partitioning",
      title: "Corporate Glass Partition Reel 10"
    },
    {
      id: 111,
      type: "video",
      src: "/images/video11.mp4",
      alt: "Heavy Structural Steel Framing & Truss Assembly",
      title: "Structural Steel Frame Work Reel 11"
    },
    {
      id: 112,
      type: "video",
      src: "/images/video12.mp4",
      alt: "CNC Laser Decorative Privacy Screen",
      title: "CNC Laser Privacy Screen Reel 12"
    },
    {
      id: 113,
      type: "video",
      src: "/images/video13.mp4",
      alt: "Architectural Pergola & Tensile Canopy",
      title: "Pergola & Tensile Canopy Reel 13"
    },
    {
      id: 114,
      type: "video",
      src: "/images/video14.mp4",
      alt: "Modern Aluminum Window & Door Fitting",
      title: "Aluminum Window & Door Reel 14"
    },
    {
      id: 115,
      type: "video",
      src: "/images/video15.mp4",
      alt: "Architectural Metal & Glass Site Execution",
      title: "Architectural Metal & Glass Reel 15"
    }
  ];

  const allMedia: GalleryMedia[] = [...galleryVideos, ...galleryImages];

  const filteredMedia = allMedia.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex((selectedMediaIndex + 1) % filteredMedia.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedMediaIndex !== null) {
      setSelectedMediaIndex(
        (selectedMediaIndex - 1 + filteredMedia.length) % filteredMedia.length
      );
    }
  };

  const currentMedia = selectedMediaIndex !== null ? filteredMedia[selectedMediaIndex] : null;

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
                <span>On-Site Execution & Video Portfolio</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-mono">
                Project <span className="text-[#CA3333]">Gallery</span> & Reels
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Explore our showcase of 62 high-definition project photos and 15 on-site video reels documenting Alucobond ACP cladding, frameless glass balustrades, and structural metalwork across Nigeria.
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

      {/* 2. MEDIA CATEGORY TAB FILTERS */}
      <section className="relative py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "image", label: `Photos (${galleryImages.length})`, icon: Camera },
                { id: "video", label: `On-Site Video Reels (${galleryVideos.length})`, icon: Video },
                { id: "all", label: `All Media (${allMedia.length})`, icon: Film }
              ].map((tab) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id as any);
                      setSelectedMediaIndex(null);
                    }}
                    className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      activeTab === tab.id
                        ? "bg-[#CA3333] text-white shadow-lg shadow-[#CA3333]/25 border border-[#CA3333]"
                        : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
                    }`}
                  >
                    <TabIcon className={`w-4 h-4 ${activeTab === tab.id ? "text-white" : "text-[#2BA2DD]"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-mono text-slate-400">
              Showing <strong className="text-[#2BA2DD]">{filteredMedia.length}</strong> items
            </span>

          </div>
        </div>
      </section>

      {/* 3. GALLERY GRID SECTION */}
      <section className="relative py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMedia.map((item, idx) => {
              const isVideo = item.type === "video";
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedMediaIndex(idx)}
                  className={`relative h-72 sm:h-80 rounded-3xl overflow-hidden glass-panel glass-panel-hover group cursor-pointer border transition-all duration-300 shadow-xl ${
                    isVideo
                      ? "border-[#CA3333]/40 hover:border-[#CA3333]"
                      : "border-slate-800 hover:border-[#2BA2DD]/40"
                  }`}
                >
                  {/* Video or Image Preview Container */}
                  {isVideo ? (
                    <video
                      src={`${item.src}#t=0.5`}
                      preload="metadata"
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 pointer-events-none"
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Video Play Overlay Button */}
                  {isVideo && (
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#CA3333] text-white flex items-center justify-center shadow-2xl shadow-[#CA3333]/50 border-2 border-white/20 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white translate-x-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Photo Hover Overlay */}
                  {!isVideo && (
                    <div className="absolute inset-0 bg-[#060b17]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-slate-900/90 text-[#2BA2DD] border border-[#2BA2DD]/40 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                        <Maximize2 className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  {/* Badge Overlay */}
                  <div className="absolute top-3 left-3">
                    {isVideo ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#CA3333] text-white text-[10px] font-mono font-bold uppercase tracking-wider shadow-md">
                        <Video className="w-3 h-3" />
                        <span>Site Video</span>
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-950/80 text-slate-300 text-[10px] font-mono font-bold border border-slate-700/80 backdrop-blur-md">
                        Photo #{item.id}
                      </span>
                    )}
                  </div>

                  {/* Title Bar Footer */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent text-white text-xs font-mono font-bold truncate">
                    {item.title}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. LIGHTBOX MEDIA VIEWER (Supports Photos & Lazy Video Player) */}
      {currentMedia && (
        <div
          onClick={() => setSelectedMediaIndex(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedMediaIndex(null)}
            className="absolute top-5 right-5 z-50 p-2.5 text-slate-400 hover:text-white bg-slate-900/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors cursor-pointer"
            aria-label="Close Viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Prev Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-slate-900/80 hover:bg-[#CA3333] rounded-full border border-slate-700 transition-colors cursor-pointer"
            aria-label="Previous Media"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Navigation Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 text-white bg-slate-900/80 hover:bg-[#CA3333] rounded-full border border-slate-700 transition-colors cursor-pointer"
            aria-label="Next Media"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Media Player Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full h-[80vh] rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-950 flex flex-col justify-between"
          >
            <div className="relative w-full h-full flex items-center justify-center bg-black overflow-hidden">
              {currentMedia.type === "video" ? (
                <video
                  src={currentMedia.src}
                  poster={currentMedia.poster}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              ) : (
                <Image
                  src={currentMedia.src}
                  alt={currentMedia.alt}
                  fill
                  className="object-contain p-2"
                  priority
                />
              )}
            </div>

            {/* Bottom Info & Action Bar */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-0.5 text-left w-full sm:w-auto">
                <span className="text-xs font-mono font-bold text-white block">
                  {currentMedia.title}
                </span>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {currentMedia.type === "video" ? "On-Site Execution Video" : "Project Photo"} ({selectedMediaIndex! + 1} of {filteredMedia.length})
                </span>
              </div>

              <a
                href={`https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20saw%20${encodeURIComponent(currentMedia.title)}%20in%20your%20gallery%20and%20would%20like%20a%20quote`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#CA3333] hover:bg-[#b22b2b] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-[#CA3333]/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Request Project Quote</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 5. PROJECT CTA BANNER */}
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
