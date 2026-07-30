"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Calendar, 
  Eye, 
  Layers, 
  Hammer, 
  Compass, 
  CheckCircle2, 
  Filter, 
  ArrowRight,
  Calculator,
  X
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import QuoteModal from "@/components/QuoteModal";

interface ProjectItem {
  id: string;
  title: string;
  category: "acp" | "glass" | "metal" | "interior";
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  scope: string;
  materials: string[];
  description: string;
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const projectsList: ProjectItem[] = [
    {
      id: "proj-1",
      title: "The Azure Tower Commercial Facade",
      category: "acp",
      categoryLabel: "Exterior ACP Cladding",
      location: "Central Business District, Abuja",
      year: "2024",
      image: "/images/hero_facade.png",
      scope: "1,800 m² Alucobond ACP Cladding & Frameless Glass Curtain Wall",
      materials: ["4mm PVDF Alucobond ACP", "12mm Toughened Glass", "Galvanized Substructure"],
      description: "Full exterior building transformation of an 8-story corporate office tower. Integrated high-performance thermal insulation panels with sleek metallic charcoal ACP panels and dark bronze tinted double-glazed curtain walls."
    },
    {
      id: "proj-[#02]",
      title: "Executive Penthouse Interior Fit-Out",
      category: "interior",
      categoryLabel: "Luxury Interior Finishing",
      location: "Maitama, Abuja",
      year: "2024",
      image: "/images/interior.png",
      scope: "Bespoke Acoustic False Ceilings, Timber Wall Cladding & Glass Partitions",
      materials: ["Natural Walnut Timber Slats", "Acoustic Plasterboard", "Integrated LED Channels"],
      description: "Luxury interior fitting for a 450 m² executive penthouse. Included custom warm acoustic wood paneling, frameless glass executive office partitions, micro-cement feature walls, and custom lighting troughs."
    },
    {
      id: "proj-#03",
      title: "Penthouse Staircase & Stainless Balustrades",
      category: "metal",
      categoryLabel: "Structural Metalwork",
      location: "Banana Island, Lagos",
      year: "2023",
      image: "/images/metalwork.png",
      scope: "316 Brushed Stainless Steel Handrails & Laser-Cut Steel Partition Screens",
      materials: ["Grade 316 Stainless Steel", "CNC Laser-Cut Mild Steel Screen", "Clear Anodized Hardware"],
      description: "Custom architectural metalwork for a multi-level luxury residence. Features polished continuous curved stainless steel handrails and laser-cut geometric steel decorative screens."
    },
    {
      id: "proj-#04",
      title: "Oceanview Villa Panoramic Balustrades",
      category: "glass",
      categoryLabel: "Frameless Glass Systems",
      location: "Victoria Island, Lagos",
      year: "2023",
      image: "/images/glass_balustrade.png",
      scope: "120 Linear Meters Frameless Tempered Glass Balustrades & Exterior Stone Cladding",
      materials: ["15mm Laminated Safety Glass", "Aluminum Base Shoe Channel", "Natural Travertine Cladding"],
      description: "Seamless frameless balcony balustrades installed with heavy-duty structural base shoe channels to maximize unobstructed ocean views while withstanding high coastal wind loads."
    },
    {
      id: "proj-#05",
      title: "Financial Center Headquarters Partitioning",
      category: "interior",
      categoryLabel: "Luxury Interior Finishing",
      location: "Garki 2, Abuja",
      year: "2023",
      image: "/images/interior.png",
      scope: "Turnkey Office Partitioning, Acoustic Baffle Ceilings & Lighting",
      materials: ["Soundproof Frameless Glass", "Acoustic Ceiling Baffles", "LED Magnetic Tracks"],
      description: "Turnkey commercial fit-out spanning 3 floors. High acoustic isolation between private conference rooms, open-plan collaborative zones, and executive suites."
    },
    {
      id: "proj-#06",
      title: "Commercial Retail Plaza Canopy & ACP Facade",
      category: "acp",
      categoryLabel: "Exterior ACP Cladding",
      location: "GRA, Port Harcourt",
      year: "2022",
      image: "/images/hero_facade.png",
      scope: "850 m² Silver Metallic ACP Panels & Heavy Duty Entrance Pergola",
      materials: ["4mm Metallic Silver ACP", "Structural Steel Canopy", "Tempered Glass Entrance Awning"],
      description: "Modernization of an existing shopping plaza exterior. Replaced weathered masonry with modern weather-resistant silver ACP panels and an illuminated glass and steel entrance canopy."
    }
  ];

  const filteredProjects = activeCategory === "all"
    ? projectsList
    : projectsList.filter((p) => p.category === activeCategory);

  return (
    <div className="space-y-20 pb-20">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 pb-16 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Completed Works Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Architectural & Finishing Portfolio
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Discover how Apexitse turns structural blueprints into landmark buildings across Abuja, Lagos, Port Harcourt, and Nigeria.
            </p>
          </div>
        </div>
      </section>


      {/* FILTERABLE GALLERY */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Projects" },
              { id: "acp", label: "Exterior ACP Cladding" },
              { id: "glass", label: "Frameless Glass" },
              { id: "metal", label: "Structural Metalwork" },
              { id: "interior", label: "Luxury Interiors" }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-3xl glass-panel glass-panel-hover overflow-hidden flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="space-y-4">
                  {/* Image container */}
                  <div className="relative w-full h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
                    
                    <span className="absolute top-4 left-4 bg-slate-900/90 text-orange-400 text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-orange-500/30 backdrop-blur-md">
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-400">
                      <span className="flex items-center gap-1 text-slate-300">
                        <MapPin className="w-3.5 h-3.5 text-orange-400" />
                        {project.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2">
                      {project.scope}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {project.materials.map((mat, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700">
                          {mat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button className="w-full py-2.5 rounded-xl bg-slate-800/80 group-hover:bg-orange-500 text-slate-200 group-hover:text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2">
                    <span>View Project Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>


      {/* BEFORE & AFTER SHOWCASE SECTION */}
      <section className="relative py-12 bg-slate-950/80 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Site Transformation
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Raw Structural Steel to Finished Luxury
            </h2>
          </div>

          <BeforeAfterSlider
            beforeImage="/images/metalwork.png"
            afterImage="/images/glass_balustrade.png"
            beforeTitle="Raw Structural Balustrade Welding"
            afterTitle="Finished Glass Balustrade & Travertine Cladding"
          />
        </div>
      </section>


      {/* PROJECT ESTIMATOR CTA BANNER */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Have a Project with Similar Requirements?</h3>
              <p className="text-xs text-slate-400 max-w-lg">
                Calculate a budget estimation or request our senior finishing engineers for site measurement in Abuja or nationwide.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Cost</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* PROJECT DETAIL MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6">
            
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded border border-orange-500/20">
                {selectedProject.categoryLabel}
              </span>
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  {selectedProject.location}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  Completed in {selectedProject.year}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase">Project Scope:</span>
              <p className="text-xs text-slate-200">{selectedProject.scope}</p>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold"
              >
                Close View
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setQuoteModalOpen(true);
                }}
                className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Estimate Similar Project</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

    </div>
  );
}
