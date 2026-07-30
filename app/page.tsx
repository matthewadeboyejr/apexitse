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
  CheckCircle2, 
  Compass, 
  Hammer, 
  Eye, 
  SlidersHorizontal,
  Phone,
  Calculator,
  Zap,
  Users
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteModal from "@/components/QuoteModal";

export default function HomePage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceFilter, setSelectedServiceFilter] = useState("all");

  const servicesPillars = [
    {
      id: "acp",
      title: "Alucobond & ACP Cladding",
      category: "exterior",
      icon: Layers,
      description: "High-performance Aluminum Composite Panel exterior wall cladding designed for extreme weather durability and modern aesthetic impact.",
      features: ["PVDF Coating", "Fire-Rated Core", "Precision CNC Joints", "15-Year Weather Guarantee"]
    },
    {
      id: "glass",
      title: "Frameless Glass & Balustrades",
      category: "glass",
      icon: Eye,
      description: "Custom frameless glass curtain walls, tempered safety glass partitions, stainless steel spider fittings, and panoramic balcony balustrades.",
      features: ["12mm-19mm Laminated Glass", "316 Stainless Steel Fittings", "Acoustic Noise Reduction", "Wind-Load Certified"]
    },
    {
      id: "metalwork",
      title: "Structural Metal Fabrication",
      category: "metal",
      icon: Hammer,
      description: "Precision metalwork from structural steel pergolas and motorized entrance gates to elegant brushed stainless steel handrails.",
      features: ["CNC Laser Cutting", "Electrostatic Powder Coating", "Heavy Duty Steelwork", "Bespoke Metal Screens"]
    },
    {
      id: "interior",
      title: "Luxury Interior Fit-Outs",
      category: "interior",
      icon: Compass,
      description: "Bespoke interior finishing including 3D acoustic false ceilings, architectural wood paneling, micro-cement walls, and ambient LED integration.",
      features: ["Acoustic Soundproofing", "Custom Millwork", "Integrated LED Channels", "High-Traffic Durability"]
    }
  ];

  const coreValues = [
    {
      title: "Craftsmanship",
      desc: "We take pride in the precision, skill, and attention to detail that define every piece of our work, from structural metalwork to elegant glass fittings.",
      icon: Hammer,
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      title: "Accountability",
      desc: "We take full ownership of our responsibilities, ensuring every project is completed with professionalism and purpose.",
      icon: ShieldCheck,
      color: "from-blue-500/20 to-cyan-500/10"
    },
    {
      title: "Innovation with Purpose",
      desc: "We do not just follow trends. We apply modern technology and creative thinking to solve real problems and create lasting impressions.",
      icon: Zap,
      color: "from-orange-500/20 to-amber-600/10"
    },
    {
      title: "Client Commitment",
      desc: "We build trust through open communication, customized solutions, and a deep respect for our clients' vision and investment.",
      icon: Users,
      color: "from-emerald-500/20 to-teal-500/10"
    },
    {
      title: "Safety Culture",
      desc: "We foster a safety-first mindset across all job sites, protecting lives, property, and the environment with every task.",
      icon: ShieldCheck,
      color: "from-red-500/20 to-orange-500/10"
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
        {/* Background Radial Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md shadow-lg shadow-orange-500/10">
                <Sparkles className="w-4 h-4 text-orange-400 animate-pulse" />
                <span>Pioneering Architectural Excellence Since 2013</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] font-mono">
                Mastering <span className="text-gradient-orange">Interior & Exterior</span> Finishing in Nigeria
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
                Apex Itse Nig Ltd. integrates structural function with aesthetic excellence. Established in 2013 in Abuja, we deliver world-class Alucobond ACP cladding, frameless glass curtain walls, structural metal fabrication, and luxury interior fit-outs across Nigeria.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/projects"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 group"
                >
                  <span>Explore Featured Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-3.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm uppercase tracking-wider border border-slate-700 hover:border-orange-500/50 backdrop-blur-md transition-all flex items-center gap-2 cursor-pointer shadow-lg"
                >
                  <Calculator className="w-4 h-4 text-orange-400" />
                  <span>Instant Cost Estimator</span>
                </button>
              </div>

              {/* Stats Highlights Banner */}
              <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">11+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Years Experience (Est. 2013)</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 font-mono">250+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Projects Finished</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Safety & Precision Guarantee</div>
                </div>
              </div>

            </div>

            {/* Hero Right Visual */}
            <div className="lg:col-span-5 relative">
              <div className="relative w-full h-[460px] sm:h-[520px] rounded-3xl overflow-hidden border border-slate-800/80 shadow-2xl shadow-black/80 group">
                <Image
                  src="/images/hero_facade.png"
                  alt="Apexitse Commercial Facade Finishing"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060b17] via-transparent to-transparent opacity-80" />
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-slate-700/80 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white uppercase tracking-wide">
                        Commercial Facade Cladding
                      </div>
                      <div className="text-[11px] text-slate-300">
                        Alucobond ACP & Frameless Glass Partitioning
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block text-right">
                    <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                      Completed Project
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* INTRODUCTION SECTION (Official Profile Text Image 1 & Image 2) */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0b1329] border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 space-y-4">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                  Company Introduction
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  About Apex Itse Nig Ltd.
                </h2>
                <p className="text-xs text-slate-400">
                  From Abuja metal fabrication roots to West Africa's trusted construction finishing partner.
                </p>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-xs font-bold text-orange-400 hover:text-orange-300 uppercase tracking-wider"
                  >
                    <span>Read Full Company Profile</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4 border-t lg:border-t-0 lg:border-l border-slate-800 pt-6 lg:pt-0 lg:pl-8">
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  <strong>Apex Itse Nig Ltd.</strong> is a dynamic and innovative Nigerian company specializing in interior and exterior finishing. Since our establishment in 2013, we have become a household name in delivering high-quality, durable, and modern construction finishing solutions. Our work integrates structural function with aesthetic excellence, contributing to the transformation of residential, commercial, and industrial spaces across Nigeria.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Founded in 2013, Apex Itse Nig Ltd. began as a small metal fabrication outfit in Abuja. With vision, consistency, and dedication to quality, we expanded into a full-service interior and exterior finishing company. Today, we are known for our professionalism and technical expertise, delivering excellence in every project.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* SERVICE PILLARS GRID */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Comprehensive Finishing & Fabrication Solutions
            </h2>
            <p className="text-slate-400 text-sm">
              We cover every phase of structural metal fabrication, high-performance exterior wall cladding, glass partition systems, and luxury interior fit-outs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicesPillars.map((service) => {
              const IconComp = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-8 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                        Apexitse Pillar
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <Link
                      href="/services"
                      className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1.5"
                    >
                      <span>Explore Technical Specifications</span>
                      <ChevronRight className="w-4 h-4 text-orange-400" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all"
            >
              <span>View All Architectural Services</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
          </div>

        </div>
      </section>


      {/* BEFORE & AFTER TRANSFORMATION SHOWCASE */}
      <section className="relative py-12 bg-slate-950/60 border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
                Visual Transformation
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Before & After Finishing Mastery
              </h2>
              <p className="text-slate-400 text-sm max-w-xl">
                Drag the interactive slider below to see how Apexitse transforms raw structural frames into modern architectural masterpieces.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-5 py-2.5 rounded-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-orange-500/20"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Your Space</span>
              </button>
            </div>
          </div>

          {/* Interactive Slider */}
          <BeforeAfterSlider
            beforeImage="/images/metalwork.png"
            afterImage="/images/interior.png"
            beforeTitle="Raw Metal Frame Structure"
            afterTitle="Finished Luxury Office Interior"
          />

        </div>
      </section>


      {/* CORE VALUES SHOWCASE (Image 5 from User) */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Guiding Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="text-slate-400 text-sm">
              The fundamental standards that drive our craftsmanship, job site safety, and client relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const ValIcon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between space-y-4 hover:border-orange-500/40 transition-all hover:-translate-y-1 shadow-lg"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20">
                      <ValIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-white">{val.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* INTERACTIVE CALL TO ACTION / ESTIMATOR BANNER */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 text-white relative overflow-hidden shadow-2xl shadow-orange-950/50">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/20 text-white border border-white/20">
                  Ready to Transform Your Space?
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Get a Precision Measurement & Quote Today
                </h2>
                <p className="text-orange-100 text-sm sm:text-base max-w-2xl">
                  Contact our Abuja headquarters or use our instant budget estimator tool to calculate materials, square meterage, and finishing schedules.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="px-6 py-4 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl border border-white/10 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-orange-400" />
                  <span>Launch Cost Estimator</span>
                </button>
                
                <Link
                  href="/contact"
                  className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>Contact Abuja Office</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

    </div>
  );
}
