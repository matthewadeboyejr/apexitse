"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Hammer, 
  Sparkles, 
  Globe, 
  Users, 
  History,
  Zap,
  TrendingUp,
  Briefcase,
  Shield,
  Clock,
  HeartHandshake,
  MessageSquare
} from "lucide-react";
export default function AboutPage() {

  const whyChooseUs = [
    { title: "Experienced Professionals", desc: "Over 11 years of industry expertise in structural metal fabrication, ACP cladding, and glass finishing.", icon: Award },
    { title: "Custom Designs", desc: "Tailored finishing solutions engineered to suit every unique commercial or residential architectural space.", icon: Sparkles },
    { title: "Modern Equipment", desc: "State-of-the-art CNC laser cutting, TIG welding, and precision glass fitting tools.", icon: Zap },
    { title: "Customer-Centric", desc: "We work closely with architects and developers to guarantee total project satisfaction.", icon: HeartHandshake },
    { title: "On-Time Delivery", desc: "Projects are completed strictly within agreed milestone timelines.", icon: Clock },
    { title: "Affordable Quality", desc: "Competitive pricing without compromising structural integrity or aesthetic brilliance.", icon: ShieldCheck }
  ];

  const growthStrategies = [
    {
      step: "01",
      title: "Innovation and Technology",
      desc: "We continuously adopt modern tools, materials, and techniques that enhance the efficiency, precision, and visual appeal of our work. From using advanced glass fitting systems to laser-cutting technology, we invest in innovation to stay ahead of industry trends."
    },
    {
      step: "02",
      title: "Training and Capacity Building",
      desc: "Our workforce is our greatest asset. We regularly organize workshops, on-site training, and certification programs to upgrade our technical and safety competencies, empowering our team to execute complex projects with confidence."
    },
    {
      step: "03",
      title: "Strategic Partnerships",
      desc: "We maintain strong working relationships with top-tier suppliers, architects, interior designers, and developers. These alliances allow us to access high-quality materials and deliver integrated solutions that reflect industry best practices."
    },
    {
      step: "04",
      title: "Client Feedback Integration",
      desc: "Client satisfaction drives our improvement. We actively collect and analyze feedback at the completion of every project to refine our operations and meet evolving client needs."
    },
    {
      step: "05",
      title: "West African Expansion Plans",
      desc: "We are committed to broadening our operational reach by targeting underserved regions and venturing into large-scale commercial and industrial projects across Nigeria and West Africa."
    }
  ];

  const hssePillars = [
    { title: "Personal Protective Equipment (PPE)", desc: "All staff and on-site workers wear mandatory PPE (helmets, gloves, safety boots, goggles, reflective vests) on every project site." },
    { title: "Safety Drills & Maintenance", desc: "Periodic safety drills prepare our teams for emergencies. All safety equipment (harnesses, fire extinguishers, ladders) is routinely inspected." },
    { title: "Waste Management & Recycling", desc: "Structured waste disposal and recycling procedures for metal, glass, and construction by-products minimize environmental impact." },
    { title: "Secure Work Zones", desc: "Workspaces are clearly marked and secured to prevent unauthorized access, protecting clients, visitors, and the public." },
    { title: "Health Checks & Hazard Training", desc: "Workers undergo routine health checks, hazard recognition training, first aid certification, and fire prevention education." }
  ];

  const historyTimeline = [
    {
      year: "2013",
      title: "Establishment in Abuja",
      desc: "Apex Itse Nig Ltd. was founded as a small metal fabrication outfit in Abuja, Nigeria."
    },
    {
      year: "2016",
      title: "Expansion to Glass & Balustrades",
      desc: "Introduced architectural frameless glass balustrades, tempered glass partitions, and stainless steel fittings."
    },
    {
      year: "2019",
      title: "ACP Cladding & Office Fit-Outs",
      desc: "Invested in Alucobond aluminum composite panel processing and turnkey office partitioning for corporate complexes."
    },
    {
      year: "2023",
      title: "Decade of Finishing Excellence",
      desc: "Celebrated 10 years of operations with hundreds of completed projects across Abuja, Lagos, Port Harcourt, and major cities."
    },
    {
      year: "Present",
      title: "West African Regional Vision",
      desc: "Expanding high-performance finishing solutions, laser-cut decorative systems, and general contracting across Nigeria and West Africa."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO BANNER CARD */}
      <section className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl min-h-[460px] flex items-center">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/interior.png"
                alt="Apex Itse Corporate Profile"
                fill
                priority
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent" />
            </div>

            {/* Banner Content */}
            <div className="relative z-10 max-w-2xl p-8 sm:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-[#CA3333]/40 text-[#2BA2DD] text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-[#CA3333]" />
                <span>Official Profile & Corporate History</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-mono">
                About <span className="text-[#CA3333]">Apex Itse</span> Nig Ltd.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Established in 2013 in Abuja, Apex Itse Nig Ltd. is a premier Nigerian contractor specializing in interior and exterior finishing, structural metalwork, glass curtain walls, and general contracting.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#CA3333] hover:bg-[#b22b2b] text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#CA3333]/30 transition-all flex items-center gap-2"
                >
                  <span>Request Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/projects"
                  className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider border border-slate-700 backdrop-blur-md transition-all"
                >
                  Explore Projects Gallery
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. CORPORATE OVERVIEW & 2x2 STATS GRID */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Corporate Profile */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
                  Established 2013
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono">
                  Refining Architectural Finishing Across Nigeria
                </h2>
              </div>

              <p className="text-base text-slate-300 leading-relaxed font-sans">
                <strong>Apex Itse Nig Ltd.</strong> is a household name in delivering high-quality, durable, and modern construction finishing solutions. Our work integrates structural function with aesthetic excellence, contributing to landmark residential, commercial, and industrial spaces across Nigeria.
              </p>

              <p className="text-sm text-slate-400 leading-relaxed font-sans">
                Operating from our corporate office in Suit C11, Jabi Plaza, Abuja, our leadership team is guided by professionalism, technical rigor, and a commitment to customer satisfaction.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2BA2DD]" />
                  <span>Licensed General Contractor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#CA3333]" />
                  <span>Jabi Plaza, Abuja Desk</span>
                </div>
              </div>
            </div>

            {/* Right Column: 2x2 Big Stats Grid */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-6">
                
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">11+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Years in market
                  </div>
                  <p className="text-[11px] text-slate-500">Pioneering quality since 2013</p>
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-2">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#2BA2DD] font-mono">250+</div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Landmark projects
                  </div>
                  <p className="text-[11px] text-slate-500">Abuja, Lagos, Port Harcourt</p>
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
                    Client satisfaction
                  </div>
                  <p className="text-[11px] text-slate-500">Repeat architects & developers</p>
                </div>

              </div>
            </div>

          </div>

          {/* Logo / Standards Strip */}
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


      {/* 3. MISSION & VISION STATEMENTS */}
      <section className="relative py-12 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
              Purpose & Aspirations
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">
              Mission & Vision Statements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Statement */}
            <div className="p-8 sm:p-10 rounded-[2rem] bg-slate-900 border border-[#CA3333]/30 relative overflow-hidden shadow-xl group hover:border-[#CA3333]/60 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#CA3333]/20 text-[#CA3333] flex items-center justify-center border border-[#CA3333]/30">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-mono text-[#CA3333] uppercase tracking-wide">
                  Mission Statement
                </h3>
                <p className="text-slate-100 text-base leading-relaxed font-medium">
                  "To provide reliable, innovative, and top-tier finishing and fabrication services that enhance the beauty, safety, and functionality of every space."
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="p-8 sm:p-10 rounded-[2rem] bg-slate-900 border border-[#2BA2DD]/30 relative overflow-hidden shadow-xl group hover:border-[#2BA2DD]/60 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#2BA2DD]/20 text-[#2BA2DD] flex items-center justify-center border border-[#2BA2DD]/30">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-mono text-[#2BA2DD] uppercase tracking-wide">
                  Vision Statement
                </h3>
                <p className="text-slate-100 text-base leading-relaxed font-medium">
                  "To become Nigeria's leading provider of comprehensive and creative finishing solutions, setting the benchmark for quality, professionalism, and customer satisfaction."
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4. HISTORY TIMELINE */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="p-3 bg-[#CA3333]/10 rounded-2xl border border-[#CA3333]/20 w-fit text-[#2BA2DD]">
                <History className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">
                From Abuja Metal Fabricators to Finishing Leaders
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded in 2013, Apex Itse Nig Ltd. began as a small metal fabrication outfit in Abuja. With vision, consistency, and dedication to quality, we expanded into a full-service interior and exterior finishing company. Today, we are known for our professionalism and technical expertise across West Africa.
              </p>
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="text-3xl font-mono font-extrabold text-[#2BA2DD]">11+</div>
                <div className="text-xs text-slate-400">
                  Years of unbroken craftsmanship, structural integrity, and architectural beauty.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 border-l-2 border-slate-800 pl-6 sm:pl-8 ml-2">
              {historyTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-[#CA3333] group-hover:scale-125 transition-transform" />
                  <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 group-hover:border-[#CA3333]/40 transition-all shadow-md">
                    <span className="text-xs font-mono font-bold text-[#2BA2DD] bg-[#2BA2DD]/10 px-2.5 py-1 rounded">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold text-white mt-2">{item.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>


      {/* 5. WHY CHOOSE US GRID */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
              The Apexitse Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">
              Why Choose Us
            </h2>
            <p className="text-xs text-slate-400">
              Six core reasons architects, developers, and clients across Nigeria choose Apex Itse Nig Ltd.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 space-y-3 hover:border-[#CA3333]/40 transition-all shadow-xl"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#CA3333]/10 text-[#2BA2DD] flex items-center justify-center border border-[#CA3333]/20">
                    <ItemIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* 6. STRATEGIES FOR GROWTH & HSSE CULTURE */}
      <section className="relative py-12 bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
              Health, Safety & Growth
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-mono">
              HSSE Culture & Strategic Growth
            </h2>
            <p className="text-xs text-slate-400">
              Our commitment to zero-harm job sites and continuous technical development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hssePillars.map((hsse, idx) => (
              <div
                key={idx}
                className="p-6 rounded-[2rem] bg-slate-900 border border-slate-800 space-y-3 hover:border-[#2BA2DD]/40 transition-all shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-[#2BA2DD]/10 text-[#2BA2DD] font-bold font-mono text-xs flex items-center justify-center border border-[#2BA2DD]/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{hsse.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{hsse.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* 7. CALL TO ACTION BANNER */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-[#CA3333] text-white relative overflow-hidden shadow-2xl shadow-[#CA3333]/30">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-black/20 text-white border border-white/20">
                  Partner with Apex Itse Nig Ltd.
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Schedule a Consultation at Our Abuja Office
                </h2>
                <p className="text-xs sm:text-sm text-red-100 max-w-xl">
                  Visit our headquarters at Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja or connect directly on WhatsApp to submit your drawings.
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

      {/* End of About Page */}
    </div>
  );
}
