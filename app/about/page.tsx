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
  Calculator,
  Zap,
  TrendingUp,
  Briefcase,
  Shield,
  Clock,
  HeartHandshake
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function AboutPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const whyChooseUs = [
    { title: "Experienced Professionals", desc: "Over 10 years of industry expertise in metal fabrication and finishing.", icon: Award },
    { title: "Custom Designs", desc: "Tailored finishing solutions engineered to suit every unique architectural space.", icon: Sparkles },
    { title: "Modern Equipment", desc: "State-of-the-art CNC laser cutting, TIG welding, and glass fitting tools.", icon: Zap },
    { title: "Customer-Centric", desc: "We work closely with clients to guarantee total satisfaction.", icon: HeartHandshake },
    { title: "On-Time Delivery", desc: "Projects are completed within agreed milestone timelines.", icon: Clock },
    { title: "Affordable Quality", desc: "Competitive pricing without compromising structural or aesthetic quality.", icon: ShieldCheck }
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
    { title: "Use of Personal Protective Equipment (PPE)", desc: "All staff and on-site workers are required to wear appropriate PPE (helmets, gloves, safety boots, goggles, reflective clothing) on every project site." },
    { title: "Regular Safety Drills & Equipment Maintenance", desc: "Periodic safety drills prepare our teams for emergencies. All safety equipment (harnesses, fire extinguishers, ladders) is routinely inspected." },
    { title: "Waste Management & Recycling Practices", desc: "Structured waste disposal and recycling procedures for metal, glass, and construction by-products minimize environmental impact." },
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
    <div className="space-y-20 pb-20">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 pb-16 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Official Profile Brochure
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-mono">
              About Apex Itse Nig Ltd.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Founded in 2013 in Abuja, Apex Itse Nig Ltd. is a dynamic Nigerian company specializing in interior and exterior finishing, structural metalwork, glass systems, and general contracting.
            </p>
          </div>
        </div>
      </section>


      {/* HISTORY & EVOLUTION TIMELINE */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="p-3 bg-orange-500/10 rounded-2xl border border-orange-500/20 w-fit text-orange-400">
                <History className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                From Abuja Metal Fabricators to Finishing Leaders
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Founded in 2013, Apex Itse Nig Ltd. began as a small metal fabrication outfit in Abuja. With vision, consistency, and dedication to quality, we expanded into a full-service interior and exterior finishing company. Today, we are known for our professionalism and technical expertise, delivering excellence in every project.
              </p>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center gap-4">
                <div className="text-3xl font-mono font-extrabold text-orange-400">10+</div>
                <div className="text-xs text-slate-400">
                  Years of unbroken craftsmanship, structural integrity, and architectural beauty across Nigeria.
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 border-l-2 border-slate-800 pl-6 sm:pl-8 ml-2">
              {historyTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-orange-500 group-hover:scale-125 transition-transform" />
                  <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-orange-500/40 transition-all">
                    <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded">
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


      {/* MISSION & VISION STATEMENTS */}
      <section className="relative py-12 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Purpose & Aspirations
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Mission & Vision Statements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission Statement */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1329] border border-orange-500/30 relative overflow-hidden shadow-xl group hover:border-orange-500/60 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 flex items-center justify-center border border-orange-500/30">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-mono text-orange-400 uppercase tracking-wide">
                  Mission Statement
                </h3>
                <p className="text-slate-100 text-base leading-relaxed font-medium">
                  "To provide reliable, innovative, and top-tier finishing and fabrication services that enhance the beauty, safety, and functionality of every space."
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-[#0b1329] border border-amber-500/30 relative overflow-hidden shadow-xl group hover:border-amber-500/60 transition-all">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-mono text-amber-400 uppercase tracking-wide">
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


      {/* WHY CHOOSE US (Brochure Image 2) */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              The Apexitse Advantage
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-xs text-slate-400">
              Six core reasons clients across Nigeria choose Apex Itse Nig Ltd for their project finishing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 hover:border-orange-500/40 transition-all shadow-lg"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20">
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


      {/* OUR LEGACY & LEADERSHIP (Brochure Image 2) */}
      <section className="relative py-12 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-wide bg-orange-500/10 px-2.5 py-1 rounded">
                Our Legacy
              </span>
              <h3 className="text-2xl font-bold text-white">Refining Construction Finishing</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Apex Itse Nig Ltd. has left a lasting impression on the construction finishing landscape in Nigeria. Our projects are not only functional but become reference points for quality. Our repeat clients and strong word-of-mouth referrals speak to our trusted reputation.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wide bg-amber-500/10 px-2.5 py-1 rounded">
                Leadership Team
              </span>
              <h3 className="text-2xl font-bold text-white">Engineers & Artisans</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Apex Itse Nig Ltd. is led by a team of experienced engineers, artisans, and project managers with decades of collective experience. The leadership team is guided by professionalism, ethical business practices, and a relentless drive to improve our service delivery.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* CRAFTSMANSHIP & QUALITY (Brochure Image 3) */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-[#0c162e] border border-orange-500/20 space-y-6 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold border border-orange-500/20">
              <Hammer className="w-4 h-4" />
              <span>Unwavering Technical Rigor</span>
            </div>
            
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Craftsmanship and Quality
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                At Apex Itse Nig Ltd, we believe that true excellence lies in the details. Our craftsmanship is not only a display of technical expertise but also a reflection of our passion for precision, design, and durability. Every project we execute is guided by a strong commitment to delivering results that are structurally sound, visually appealing, and built to last.
              </p>
              <p>
                We approach each task with a combination of advanced technical knowledge, modern tools, and a creative eye for design. Whether it is the meticulous welding of structural elements, the seamless installation of glass panels, or the artistic fabrication of decorative features, our team ensures every component fits perfectly and performs reliably.
              </p>
              <p className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-orange-300 font-medium">
                Quality is not an afterthought; it is embedded into every stage of our process — from initial material selection and fabrication, to surface treatment, delivery, and on-site installation. We adhere to strict quality control standards, ensuring our products meet or exceed industry benchmarks for strength, finish, and performance.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* STRATEGIES FOR GROWTH AND SUCCESS (Brochure Images 2 & 4) */}
      <section className="relative py-12 bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Strategic Outlook
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Strategies for Growth & Success
            </h2>
            <p className="text-xs text-slate-400">
              Our approach to long-term growth and sustainable success is rooted in innovation, collaboration, and customer-centric development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {growthStrategies.map((strat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 hover:border-orange-500/30 transition-all shadow-xl"
              >
                <span className="text-2xl font-extrabold text-orange-400 font-mono">
                  {strat.step}
                </span>
                <h3 className="text-base font-bold text-white">{strat.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{strat.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* HEALTH, SAFETY, SECURITY, AND ENVIRONMENT (HSSE) (Brochure Image 3) */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Safety Culture
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Health, Safety, Security, and Environment (HSSE)
            </h2>
            <p className="text-xs text-slate-400">
              At Apex Itse Nig Ltd, we prioritize the health, safety, and security of our employees, clients, and the communities where we operate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hssePillars.map((hsse, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 hover:border-amber-500/40 transition-all shadow-xl"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-bold font-mono text-xs flex items-center justify-center border border-amber-500/20">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-white">{hsse.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{hsse.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* CONSULTATION BANNER */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Partner with Apex Itse Nig Ltd.</h3>
              <p className="text-xs text-slate-400 max-w-lg">
                Visit our office at Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja or request an on-site consultation.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-slate-700"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>Estimate Project</span>
              </button>

              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

    </div>
  );
}
