"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  Compass,
  Hammer,
  Eye,
  Zap,
  Users,
  Phone,
  MessageSquare,
  Ruler,
  FileText,
  Wrench,
  Search
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
export default function HomePage() {
  const [catalogIndex, setCatalogIndex] = useState(0);

  const servicesCatalog = [
    {
      id: "acp",
      title: "Alucobond & ACP Cladding",
      category: "Exterior Facades",
      image: "/images/hero_facade.jpeg",
      specs: "4mm PVDF Coating • Fire-Rated Core",
      desc: "High-performance Aluminum Composite Panel exterior wall cladding engineered for extreme weather durability, insulation, and modern architectural impact."
    },
    {
      id: "glass",
      title: "Frameless Glass & Balustrades",
      category: "Glass Systems",
      image: "/images/glass_balustrade.jpeg",
      specs: "12mm-19mm Tempered Glass • 316 Stainless",
      desc: "Custom frameless glass curtain walls, panoramic balcony balustrades, tempered partitions, and stainless steel spider fittings for luxury developments."
    },
    {
      id: "metalwork",
      title: "Structural Metal Fabrication",
      category: "Metalwork & Steel",
      image: "/images/metalwork.png",
      specs: "CNC Laser Cutting • Electrostatic Coating",
      desc: "Precision architectural metalwork from heavy-duty structural steel pergolas and motorized entrance gates to brushed stainless steel handrails."
    },
    {
      id: "interior",
      title: "Luxury Interior Fit-Outs",
      category: "Interior Finishing",
      image: "/images/interior.png",
      specs: "Acoustic Insulation • Custom Millwork",
      desc: "Turnkey interior finishing including 3D acoustic false ceilings, architectural wood paneling, micro-cement feature walls, and ambient LED integration."
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      icon: Ruler,
      title: "Initial Consultation & Site Survey",
      desc: "We conduct laser-guided measurements, assess site structural conditions, and evaluate your architectural drawings in Abuja or nationwide."
    },
    {
      num: "02",
      icon: FileText,
      title: "Material Selection & CAD Detailing",
      desc: "Our engineering team provides precise CAD shop drawings, material samples (Alucobond ACP, tempered glass, stainless grades), and transparent BOQ estimates."
    },
    {
      num: "03",
      icon: Wrench,
      title: "Precision Off-Site Fabrication",
      desc: "Structural metalwork, CNC laser cutting, and glass panel sizing are executed in controlled workshop conditions to guarantee millimeter accuracy."
    },
    {
      num: "04",
      icon: ShieldCheck,
      title: "Certified On-Site Installation",
      desc: "Our certified installation team rig, anchor, align, and weather-seal all components following strict HSSE job site safety protocols."
    },
    {
      num: "05",
      icon: CheckCircle2,
      title: "Quality Sign-Off & Warranty Handover",
      desc: "Final structural load testing, glass alignment verification, and formal handover with our structural warranty documentation."
    }
  ];

  const coreValues = [
    {
      num: "01",
      title: "Unwavering Craftsmanship",
      tagline: "Precision Engineering",
      desc: "We take pride in the meticulous skill and exact tolerances that define every piece of our work — from heavy structural metal fabrication to floating glass balustrades.",
      icon: Hammer,
      accent: "red",
      featured: true,
      badge: "Zero Defect Standard"
    },
    {
      num: "02",
      title: "Purposeful Innovation",
      tagline: "Future-Proof Solutions",
      desc: "We do not just follow architectural trends. We apply state-of-the-art CNC technology and creative engineering to solve complex site challenges and create lasting structural impressions.",
      icon: Zap,
      accent: "blue",
      featured: true,
      badge: "Modern Technology"
    },
    {
      num: "03",
      title: "Complete Accountability",
      tagline: "Project Ownership",
      desc: "We take full responsibility for project milestones, material specifications, and quality guarantees without compromise.",
      icon: ShieldCheck,
      accent: "red",
      featured: false,
      badge: "100% Guaranteed"
    },
    {
      num: "04",
      title: "Client Commitment",
      tagline: "Vision-Aligned Partnership",
      desc: "We build long-term trust through transparent communication, custom material selection, and deep respect for architectural vision.",
      icon: Users,
      accent: "blue",
      featured: false,
      badge: "Client Centric"
    },
    {
      num: "05",
      title: "Safety & HSSE Culture",
      tagline: "Zero Harm Job Sites",
      desc: "We prioritize safety across all site installations with mandatory PPE, wind-load testing, and environmental waste management.",
      icon: ShieldCheck,
      accent: "red",
      featured: false,
      badge: "Strict Compliance"
    }
  ];

  return (
    <div className="space-y-24 pb-20">

      {/* 1. HERO SECTION BANNER CARD */}
      <section className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 lg:p-12">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Hero Content & Writeup */}
              <div className="lg:col-span-7 space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/90 border border-[#CA3333]/40 text-[#2BA2DD] text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                  <Sparkles className="w-4 h-4 text-[#CA3333] animate-pulse" />
                  <span>Pioneering Architectural Finishing Since 2013</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-mono">
                  Interior <span className="text-[#CA3333]">& Exterior</span> Finishing
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                  Handrails, wrought iron, shower cubicle, glass balustrade, laser cut decorative designs, office partitioning, Aluminum windows and glass, roof water collector, pergola/Gazebo, all metal and glass works.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <a
                    href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-[#CA3333] hover:bg-[#b22b2b] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#CA3333]/30 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Project Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <Link
                    href="/projects"
                    className="px-7 py-4 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider border border-slate-700 backdrop-blur-md transition-all flex items-center gap-2"
                  >
                    <span>View Completed Works</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Full Un-cropped Image Showcase */}
              <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[460px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group bg-slate-950">
                <Image
                  src="/images/hero-new.jpeg"
                  alt="Apexitse Architectural Metal & Glass Work"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* 2. ABOUT US SECTION (Reference 2-Column with 2x2 Big Stats Grid) */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: About Us Writeup */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                  About Us
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-sans">
                Established in 2013 in Abuja, Nigeria, <strong>Apex Itse Nig Ltd.</strong> has grown into a leading contractor in architectural exterior finishing, precision metal fabrication, frameless glass systems, and interior space design.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Operating from our headquarters in Jabi Plaza, Abuja, we partner with architects, commercial developers, and property owners to turn raw structural frames into durable, visually striking architectural reference points across Nigeria.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2BA2DD]" />
                  <span>Licensed Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CA3333]" />
                  <span>Jabi Plaza, Abuja Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Big Stats Grid (Reference Layout) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6">
                
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">11+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Years in the market
                  </div>
                  <p className="text-[11px] text-slate-500">Pioneering quality since 2013</p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#2BA2DD] font-mono">250+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Successful projects
                  </div>
                  <p className="text-[11px] text-slate-500">Commercial & Luxury Residential</p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#CA3333] font-mono">100%</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Safety & Wind Certified
                  </div>
                  <p className="text-[11px] text-slate-500">Strict HSSE job site standards</p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 font-mono">98%</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Satisfied Clients
                  </div>
                  <p className="text-[11px] text-slate-500">Repeat architects & developers</p>
                </div>

              </div>
            </div>

          </div>

          {/* Partner / Standards Logo Strip */}
          <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-6 text-slate-400 text-xs font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#CA3333]" />
              <span>Alucobond PVDF Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#2BA2DD]" />
              <span>Grade 316 Stainless Steel</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#CA3333]" />
              <span>Tempered Safety Glass Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <Hammer className="w-4 h-4 text-[#2BA2DD]" />
              <span>Precision CNC Laser Cutting</span>
            </div>
          </div>

        </div>
      </section>


      {/* 3. SERVICE CATALOG SECTION (Reference 3-Card Rounded Grid Layout) */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                Service Catalog
              </h2>
              <p className="text-sm text-slate-400">
                A comprehensive showcase of our primary architectural finishing and structural fabrication pillars.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Link
                href="/services"
                className="px-6 py-2.5 rounded-full bg-slate-900 text-slate-200 hover:text-white border border-slate-800 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Cards Grid (Reference Layout: Rounded Vertical Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesCatalog.map((service) => (
              <div
                key={service.id}
                className="rounded-[2rem] bg-slate-900 border border-slate-800 overflow-hidden flex flex-col justify-between group hover:border-[#CA3333]/50 transition-all shadow-xl"
              >
                <div className="space-y-4">
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-[#2BA2DD] text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#2BA2DD]/30 backdrop-blur-md">
                      {service.category}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-[#2BA2DD] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-3">
                      {service.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 border-t border-slate-800 pt-3">
                    {service.specs}
                  </div>
                  
                  <a
                    href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-[#CA3333] text-white text-xs font-bold uppercase tracking-wider transition-colors text-center block"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 4. HOW WE WORK SECTION (Reference Layout: Tall Image Card + 5 Process List) */}
      <section className="relative py-12 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="space-y-2 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
              How We Work
            </h2>
            <p className="text-sm text-slate-400">
              We have made the architectural finishing and site installation process as simple, structured, and transparent as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Tall Vertical Image with Circular Badge (Reference Layout) */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[520px] sm:h-[580px] rounded-[2.5rem] overflow-hidden border border-slate-800 shadow-2xl">
                <Image
                  src="/images/interior.png"
                  alt="How Apexitse Works"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/30" />

                {/* Circular Badge Overlay (Reference Layout: Floating Consultation Circle) */}
                <div className="absolute top-8 right-8 w-32 h-32 rounded-full bg-slate-900/90 text-white border-2 border-[#CA3333] backdrop-blur-md flex flex-col items-center justify-center p-3 text-center shadow-2xl animate-in fade-in">
                  <Sparkles className="w-5 h-5 text-[#2BA2DD] mb-1" />
                  <span className="text-[10px] font-mono font-bold leading-tight uppercase">
                    Free Site Survey
                  </span>
                  <span className="text-[9px] text-slate-400 mt-0.5">Abuja & Nationwide</span>
                </div>
              </div>
            </div>

            {/* Right Column: Process Steps List with Circles (Reference Layout) */}
            <div className="lg:col-span-7 space-y-6">
              {workflowSteps.map((step) => {
                const StepIcon = step.icon;
                return (
                  <div
                    key={step.num}
                    className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-start gap-5 hover:border-[#CA3333]/40 transition-all shadow-lg"
                  >
                    {/* Circle Icon Container */}
                    <div className="w-12 h-12 rounded-full bg-slate-950 border border-slate-700 text-[#2BA2DD] flex items-center justify-center shrink-0">
                      <StepIcon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-[#CA3333]">Step {step.num}</span>
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>


      {/* 5. FINISHING MASTERY SHOWCASE */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#2BA2DD] uppercase tracking-widest px-3 py-1 rounded bg-[#2BA2DD]/10 border border-[#2BA2DD]/20">
                Architectural Showcase
              </span>
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">
                Finishing Mastery Showcase
              </h2>
            </div>

            <a
              href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#CA3333] hover:bg-[#B22B2B] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#CA3333]/20 flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Request Project Quote</span>
            </a>
          </div>

          <BeforeAfterSlider
            image="/images/glass_balustrade.jpeg"
          />
        </div>
      </section>


      {/* 5B. ON-SITE VIDEO REELS SHOWCASE */}
      <section className="relative py-12 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
                Live Field Footage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                On-Site Execution Video Reels
              </h2>
              <p className="text-sm text-slate-300">
                Watch our senior engineers and certified artisans installing Alucobond ACP, glass balustrades, and structural steel across Abuja job sites.
              </p>
            </div>

            <Link
              href="/projects"
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold font-mono uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2 shrink-0"
            >
              <span>View All 5 Video Reels</span>
              <ArrowRight className="w-4 h-4 text-[#2BA2DD]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Alucobond ACP Cladding Site Reel",
                poster: "/images/hero_facade.jpeg",
                src: "/images/video1.mp4",
                tag: "Exterior Facade"
              },
              {
                title: "Frameless Glass Balustrade Fitting",
                poster: "/images/glass_balustrade.jpeg",
                src: "/images/video2.mp4",
                tag: "Glass Fitting"
              },
              {
                title: "Precision CNC Laser Cut Metalwork",
                poster: "/images/prouduct14.jpeg",
                src: "/images/video3.mp4",
                tag: "Metal Fabrication"
              }
            ].map((vid, idx) => (
              <Link
                key={idx}
                href="/projects"
                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-[#CA3333]/50 transition-all shadow-xl h-72 sm:h-80 flex flex-col justify-between p-6 cursor-pointer"
              >
                {/* Authentic Video Frame Preview Container */}
                <video
                  src={`${vid.src}#t=0.5`}
                  preload="metadata"
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 pointer-events-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-white bg-[#CA3333] px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                    Site Video 0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded border border-slate-700 backdrop-blur-md">
                    {vid.tag}
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="relative z-10 my-auto mx-auto w-14 h-14 rounded-full bg-[#CA3333] text-white flex items-center justify-center shadow-2xl shadow-[#CA3333]/50 border-2 border-white/20 group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-white translate-x-0.5" />
                </div>

                {/* Bottom Title */}
                <div className="relative z-10 space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-[#2BA2DD] transition-colors">
                    {vid.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <span>Watch HD Reel</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#CA3333]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* 6. CORE VALUES SHOWCASE */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-[#CA3333]/10 border border-[#CA3333]/20 shadow-sm">
              Our Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-mono">
              The Standards Behind Our Mastery
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Every site survey, structural weld, and glass panel installation is governed by these non-negotiable core values.
            </p>
          </div>

          {/* Featured Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {coreValues.filter(v => v.featured).map((val) => {
              const ValIcon = val.icon;
              const isRed = val.accent === "red";
              return (
                <div
                  key={val.num}
                  className={`p-8 sm:p-10 rounded-3xl bg-slate-900 border transition-all duration-300 relative overflow-hidden group shadow-2xl flex flex-col justify-between space-y-6 ${
                    isRed
                      ? "border-slate-800 hover:border-[#CA3333]/60"
                      : "border-slate-800 hover:border-[#2BA2DD]/60"
                  }`}
                >
                  <span className="absolute -right-2 -bottom-6 text-9xl font-extrabold font-mono text-slate-800/20 select-none group-hover:text-slate-800/40 transition-colors pointer-events-none">
                    {val.num}
                  </span>

                  <div className="space-y-4 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                        isRed
                          ? "bg-[#CA3333]/15 text-[#CA3333] border-[#CA3333]/30"
                          : "bg-[#2BA2DD]/15 text-[#2BA2DD] border-[#2BA2DD]/30"
                      }`}>
                        <ValIcon className="w-7 h-7" />
                      </div>
                    </div>

                    <div className="space-y-1 pt-2">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest block">
                        {val.tagline}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                        {val.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400 relative z-10">
                    <CheckCircle2 className={`w-4 h-4 ${isRed ? "text-[#CA3333]" : "text-[#2BA2DD]"}`} />
                    <span>Apexitse Quality Benchmark #{val.num}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Standard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.filter(v => !v.featured).map((val) => {
              const ValIcon = val.icon;
              const isRed = val.accent === "red";
              return (
                <div
                  key={val.num}
                  className={`p-6 sm:p-8 rounded-3xl bg-slate-900 border transition-all duration-300 relative overflow-hidden group shadow-xl flex flex-col justify-between space-y-4 ${
                    isRed
                      ? "border-slate-800 hover:border-[#CA3333]/50"
                      : "border-slate-800 hover:border-[#2BA2DD]/50"
                  }`}
                >
                  <span className="absolute -right-2 -bottom-4 text-7xl font-extrabold font-mono text-slate-800/20 select-none group-hover:text-slate-800/40 transition-colors pointer-events-none">
                    {val.num}
                  </span>

                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${
                        isRed
                          ? "bg-[#CA3333]/15 text-[#CA3333] border-[#CA3333]/30"
                          : "bg-[#2BA2DD]/15 text-[#2BA2DD] border-[#2BA2DD]/30"
                      }`}>
                        <ValIcon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Value #{val.num}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider block">
                        {val.tagline}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {val.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {val.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-slate-400 relative z-10">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isRed ? "text-[#CA3333]" : "text-[#2BA2DD]"}`} />
                    <span>{val.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 7. INTERACTIVE CALL TO ACTION BANNER */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#CA3333] text-white relative overflow-hidden shadow-2xl shadow-[#CA3333]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/20 text-white border border-white/20">
                  Ready to Transform Your Building?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Schedule a Site Measurement with Our Senior Engineers
                </h2>
                <p className="text-xs sm:text-sm text-red-100 max-w-xl">
                  Contact our Abuja headquarters at Jabi Plaza or connect directly on WhatsApp to submit your BOQ and architectural drawings.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-white text-[#CA3333] hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Instant Quote</span>
                </a>

                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20inquire%20about%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-slate-950 text-white hover:bg-slate-900 font-bold text-xs uppercase tracking-wider border border-slate-800 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#25D366]" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* End of Home Page */}
    </div>
  );
}
