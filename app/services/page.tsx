"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Layers, 
  Eye, 
  Hammer, 
  Compass, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Sparkles,
  Calculator,
  FileText,
  Shield,
  Zap,
  Flame,
  Sun,
  Maximize2,
  Droplets,
  Search,
  HardHat
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export interface ServiceDetail {
  id: string;
  title: string;
  category: "metalwork" | "glass" | "partitioning" | "amenities";
  subtitle: string;
  description: string;
  icon: any;
  image: string;
  features: string[];
  specifications: string[];
}

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedService, setSelectedService] = useState<ServiceDetail | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  const allServices: ServiceDetail[] = [
    {
      id: "handrails",
      title: "Handrails (Stainless Steel, Glass, Wrought Iron)",
      category: "metalwork",
      subtitle: "Top-quality indoor & outdoor handrails for staircases, balconies, ramps & corridors.",
      description: "Our handrails are fabricated using top-quality stainless steel, wrought iron, or tempered glass, crafted to enhance safety and complement architectural beauty. We tailor each handrail to suit its environment. Our finishes are sleek, rust-resistant, and durable.",
      icon: Hammer,
      image: "/images/metalwork.png",
      features: ["Sleek & Rust-Resistant", "Indoor & Outdoor Suitable", "Tailored to Any Staircase Layout", "Stainless Steel Grade 304/316"],
      specifications: [
        "Materials: Grade 304 / 316 Stainless Steel, Toughened Glass, Wrought Iron",
        "Finishes: Mirror Polish, Brushed Satin, Matte Black Powder Coating",
        "Mounting: Floor Core Drilled or Side Bracket Mounted",
        "Safety Standard: Certified BS 6180 Load Bearing"
      ]
    },
    {
      id: "balustrades",
      title: "Glass Balustrades",
      category: "glass",
      subtitle: "High-grade tempered glass balustrades combining strength with floating elegance.",
      description: "We install high-grade tempered glass balustrades that serve both decorative and safety purposes. Perfect for balconies, staircases, and terraces in residential or commercial spaces. Minimal metal framing maximizes transparency and creates a floating glass effect.",
      icon: Eye,
      image: "/images/glass_balustrade.png",
      features: ["Minimal Framing Transparency", "Floating Glass Effect", "Tempered Safety Laminate", "High Load Resistance"],
      specifications: [
        "Glass Thickness: 12mm, 15mm, 19mm Toughened & Laminated Safety Glass",
        "Base Channel: Heavy Duty Anodized Aluminum Shoe / Stainless Spigots",
        "Handrail Top: Stainless Steel Slot Tube or Frameless Top Edge",
        "Durability: Weather & Salt Air Resistant"
      ]
    },
    {
      id: "shower-cubicles",
      title: "Bathroom Shower Cubicles",
      category: "glass",
      subtitle: "Precision-cut tempered glass cubicles with sliding, swing, or frameless doors.",
      description: "Our shower cubicles are made from tempered glass, precision-cut to fit any bathroom layout. We offer sliding, swing, and frameless door options with accessories in chrome, matte black, or brushed steel. Our installations prevent water spillage and elevate any modern bathroom.",
      icon: Droplets,
      image: "/images/glass_balustrade.png",
      features: ["Water Spillage Prevention", "Sliding, Swing & Frameless Doors", "Chrome, Matte Black & Brushed Accessories", "Easy Maintenance Coating"],
      specifications: [
        "Glass Type: 8mm - 10mm Clear / Frosted Toughened Safety Glass",
        "Hardware Material: Solid Brass & Stainless Steel Hinges/Rollers",
        "Seals: Anti-Fungal Magnetic Water Seals",
        "Customization: Custom Niche Sizes & Corner Layouts"
      ]
    },
    {
      id: "burglar-proof",
      title: "Burglar Proof Fabrication",
      category: "metalwork",
      subtitle: "Custom iron and steel burglar proof systems for windows, doors & open spaces.",
      description: "We design customized burglar-proof systems for windows, doors, and open spaces using iron or steel. Made to withstand forced entry while maintaining airflow and visibility. Options include decorative patterns, powder-coated finishes, and concealed fittings.",
      icon: Shield,
      image: "/images/metalwork.png",
      features: ["Forced Entry Resistant", "Maintains Natural Airflow", "Concealed Fittings", "Decorative Powder Coating"],
      specifications: [
        "Materials: Solid Iron Bars, Steel Hollow Sections, Forged Wrought Iron",
        "Coating: Multi-Layer Anti-Rust Primer & Electrostatic Powder Coat",
        "Designs: Modern Geometric, Scrollwork, Minimalist Lines",
        "Locking: Integrated Mortise & Deadbolt Enclosures"
      ]
    },
    {
      id: "office-partitioning",
      title: "Office Partitioning (Glass, Aluminum & Board)",
      category: "partitioning",
      subtitle: "Acoustic glass, aluminum frame & board partitions for open-plan & executive spaces.",
      description: "Our partitioning systems are crafted using high-quality aluminum, tempered glass, and durable board materials. Ideal for open-plan offices, meeting rooms, and corporate environments. Optional features include acoustic glass, integrated blinds, and customized board finishes.",
      icon: Building2,
      image: "/images/interior.png",
      features: ["Acoustic Sound Insulation", "Natural Light Flow", "Integrated Blinds & Board Finishes", "Rapid Clean Modular Installation"],
      specifications: [
        "Frame: Powder-Coated Architectural Aluminum Sections",
        "Glass: Single / Double Glazed Tempered Acoustic Glass",
        "Boards: HDF Wood Veneer, Fabric Wrapped, Melamine Panels",
        "Noise Isolation: Up to 45 dB Acoustic Reduction"
      ]
    },
    {
      id: "billboards-signage",
      title: "Billboards & Signage Fabrication",
      category: "amenities",
      subtitle: "Outdoor & indoor advertising structures, lightboxes, 3D letters & LED integration.",
      description: "We fabricate and install outdoor and indoor advertising structures such as billboards, lightboxes, directional signs, and 3D letter signage. Each structure is designed for high visibility, weather resistance, and easy maintenance with full LED branding support.",
      icon: Sparkles,
      image: "/images/hero_facade.png",
      features: ["3D Acrylic & Metal Lettering", "Weatherproof Outdoor Billboards", "Energy-Efficient LED Backlighting", "Turnkey Branding & Printing"],
      specifications: [
        "Structure: Heavy-Duty Structural Steel Framing & Truss Systems",
        "Letters: Stainless Steel, Brass, Acrylic 3D Illuminated Channel Letters",
        "Lighting: IP67 Waterproof Module LEDs",
        "Maintenance: Front & Rear Access Panel Systems"
      ]
    },
    {
      id: "laser-cut-designs",
      title: "Laser Cut Decorative Designs",
      category: "metalwork",
      subtitle: "Intricate laser-cut metal panels for screens, gates, partitions & building facades.",
      description: "Using state-of-the-art laser technology, we produce intricate metal panels for screens, partitions, gates, facades, and fences. Customized with geometric, floral, Arabic, or abstract designs to add a unique visual identity to properties.",
      icon: Zap,
      image: "/images/metalwork.png",
      features: ["State-of-the-Art CNC Fiber Laser", "Custom Geometric & Abstract Patterns", "Building Facade & Gate Accenting", "Durable Weatherproof Powder Finish"],
      specifications: [
        "Thickness: 1.5mm to 12mm Mild Steel, Stainless Steel, Aluminum",
        "Sheet Size: Up to 2000mm x 6000mm Continuous Cut",
        "Finish: Anodized, Metallic Powder Coated, PVDF Coated",
        "Applications: Privacy Screens, Sunshades, Feature Walls"
      ]
    },
    {
      id: "electric-fencing",
      title: "Electric Fencing System",
      category: "amenities",
      subtitle: "Advanced perimeter security with energizers, alarm integration & deterrence.",
      description: "We provide advanced perimeter security solutions through electric fencing installations. Includes energizers, warning signs, and alarm integration systems that protect homes, estates, schools, or warehouses with both visual and physical deterrence.",
      icon: Zap,
      image: "/images/hero_facade.png",
      features: ["High-Voltage Intrusion Deterrent", "Alarm System & Energizer Integration", "Estate & Industrial Perimeter Guard", "Battery Backup Unit Included"],
      specifications: [
        "Wires: 304 High-Tensile Stainless Steel Strand Wire",
        "Posts: Intermediate & Corner Tension Steel Strain Posts",
        "Energizers: Nemtek / Stafix Commercial Energizers",
        "Monitoring: Siren, Strobe Light & Cellular Dialer Integration"
      ]
    },
    {
      id: "gates-fences",
      title: "Gate & Fence Rail",
      category: "metalwork",
      subtitle: "Swing & sliding gates in wrought iron, steel or aluminum with automation options.",
      description: "Our gates and fence rails are engineered for strength, security, and design flexibility. We build swing and sliding gates in wrought iron, steel, or aluminum with options for automated remote systems, scrollwork, or laser-cut accents.",
      icon: Shield,
      image: "/images/metalwork.png",
      features: ["Manual or Motorized Automation", "Wrought Iron, Steel & Aluminum", "Laser-Cut & Ornamental Scrolls", "Heavy-Duty Track & Roller Assemblies"],
      specifications: [
        "Motors: Italian Centurion / Came Heavy-Duty Gate Operators",
        "Locking: Electromagnetic Locks & Mechanical Deadbolts",
        "Coating: Anti-Corrosion Epoxy Zinc Primer & Epoxy Topcoat",
        "Controls: Remote Keyfobs, Intercom & Access Keypads"
      ]
    },
    {
      id: "overhead-tanks",
      title: "Overhead Tank Stands & Stanchions",
      category: "metalwork",
      subtitle: "Structural steel frameworks for elevated gravity-fed water tank systems.",
      description: "We fabricate steel frameworks designed to securely hold water tanks of various sizes and capacities. Our stanchions are constructed with structural-grade steel, anchored for stability, gravity-fed water pressure, and treated to resist rust.",
      icon: Building2,
      image: "/images/hero_facade.png",
      features: ["Structural-Grade Steel Beams", "Anti-Rust Weather Treatment", "High Capacity Load Certified", "Secure Base Plate Anchoring"],
      specifications: [
        "Steel Sections: H-Beams, Universal Columns, Heavy Equal Angles",
        "Capacity Range: 1,000 Liters to 50,000+ Liters Overhead Tanks",
        "Anchoring: High-Tensile J-Bolts in Concrete Foundation Pads",
        "Ladder: Safety Cage Steel Access Ladder Included"
      ]
    },
    {
      id: "carports",
      title: "Carports (Polycarbonate & Fabric Types)",
      category: "amenities",
      subtitle: "Custom polycarbonate & tensile fabric carports for sun & rain vehicle protection.",
      description: "Our custom-built carports protect vehicles from sun, rain, and debris. Options include high-quality polycarbonate sheets supported by steel frames, or tensile fabric materials stretched over a structural base. Available in free-standing or wall-attached designs.",
      icon: Sun,
      image: "/images/glass_balustrade.png",
      features: ["UV & Debris Protection", "Polycarbonate & Tensile Fabric Options", "Free-Standing or Wall-Attached", "Sleek Modern Canopy Profiles"],
      specifications: [
        "Canopy Sheets: 8mm-10mm UV-Protected Polycarbonate Hollow Sheet",
        "Tensile Fabric: High-Density Waterproof PVC / PTFE Architectural Membrane",
        "Frame: Powder-Coated Structural Steel / Aluminum Tubing",
        "Drainage: Integrated Gutter & Downpipe System"
      ]
    },
    {
      id: "pergolas-gazebos",
      title: "Pergolas & Gazebos",
      category: "amenities",
      subtitle: "Stylish outdoor shade structures for gardens, patios, lounges & resorts.",
      description: "We design and construct stylish outdoor structures that provide shade and ambience. Built with wood, steel, or a hybrid of materials suitable for gardens, lounges, patios, and resorts. Perfect for leisure gatherings or architectural accents.",
      icon: Compass,
      image: "/images/glass_balustrade.png",
      features: ["Wood, Steel & Hybrid Construction", "Louvered Roof & Shade Slats", "Resort & Residential Gardens", "Weatherproof Timber Stains"],
      specifications: [
        "Timber: Hardwood / Treated Pressure-Impregnated Pine",
        "Steel: Powder-Coated Hollow Structural Sections (HSS)",
        "Roofing Options: Open Slats, Polycarbonate Inset, Motorized Louvers",
        "Lighting: Waterproof Embedded Ambient LED Strips"
      ]
    },
    {
      id: "aluminum-windows-doors",
      title: "Aluminum Windows & Doors",
      category: "glass",
      subtitle: "Sliding, folding, casement & pivot systems for homes & commercial buildings.",
      description: "We manufacture and install strong, sleek, and lightweight aluminum doors and windows. Styles include sliding, folding, casement, and pivot systems. Energy-efficient, corrosion-resistant, and available in powder-coated or anodized finishes.",
      icon: Maximize2,
      image: "/images/glass_balustrade.png",
      features: ["Sliding, Folding, Casement & Pivot", "Energy-Efficient & Weather-Sealed", "Powder Coated or Anodized Finishes", "Multi-Point Safety Locks"],
      specifications: [
        "Profiles: Thermal Break Architectural Aluminum Sections",
        "Glass: Double Glazed Argon Filled Low-E Glass Options",
        "Hardware: Heavy Duty Friction Stays & Multi-Lock Handles",
        "Colors: Matte Black, White, Bronze, Anodized Silver"
      ]
    },
    {
      id: "glazier-services",
      title: "Glazier (Mirror & Decorative Glass)",
      category: "glass",
      subtitle: "Precision glass & mirror installations for gyms, studios, walls & tabletops.",
      description: "Our glazier services cover the precise installation of mirrors and glass in residential and commercial spaces. Projects include bathroom mirrors, studio walls, dressing mirrors, gym reflections, decorative glass panels, glass tabletops, shelves, and full-glass partitions.",
      icon: Eye,
      image: "/images/glass_balustrade.png",
      features: ["Gym & Studio Mirror Walls", "Beveled Edge Bathroom Mirrors", "Glass Tabletops & Shelving", "High-Grade Tempered Safety"],
      specifications: [
        "Mirror Types: 5mm - 6mm Silvered / Bronze Tinted Safety Backed Mirrors",
        "Edging: Beveled, Polished Flat Edge, Pencil Polish",
        "Adhesive: Neutral Cure Non-Corrosive Mirror Adhesive",
        "Panels: Custom Curved & Geometric Glass Cutouts"
      ]
    },
    {
      id: "roof-water-collectors",
      title: "Roof Water Collectors",
      category: "amenities",
      subtitle: "Rainwater harvesting systems with gutters, downspouts & filter channels.",
      description: "We design and install rainwater harvesting systems that channel water from rooftops into storage tanks. Systems include gutters, filters, and downspouts suitable for residential, agricultural, or commercial use. Supports sustainability and water independence.",
      icon: Droplets,
      image: "/images/hero_facade.png",
      features: ["Rainwater Harvesting Systems", "Heavy-Duty Roof Gutters & Downspouts", "Filter Integration for Storage Tanks", "Sustainable & Eco-Friendly"],
      specifications: [
        "Gutter Material: Seamless Powder-Coated Aluminum / Galvanized Steel",
        "Downspouts: Heavy Gauge PVC / Steel Downpipes",
        "Filters: Leaf Guard Mesh & Micro-Debris Centrifugal Filters",
        "Capacity: Engineered for High-Intensity Tropical Downpours"
      ]
    },
    {
      id: "general-contracting",
      title: "General Contracting & Fabrication Services",
      category: "partitioning",
      subtitle: "Full suite general contracting for small to medium-scale construction & renovation.",
      description: "Apex Itse Nig Ltd also serves as a general contractor for small to medium-scale construction and renovation projects. We provide a full suite of services including structural fabrication, on-site installation, project supervision, and quality assurance. Our team manages timelines, budgets, and client expectations with professionalism.",
      icon: HardHat,
      image: "/images/hero_facade.png",
      features: ["Turnkey Project Supervision", "Structural Fabrication & On-Site Assembly", "Quality Assurance & Timeline Management", "Small to Medium Construction & Renovation"],
      specifications: [
        "Management: Full COREN Certified Site Engineering Supervision",
        "Scope: Civil, Mechanical & Architectural Finishing Integration",
        "Procurement: Direct Factory Sourcing of Structural Steel & Glass",
        "Compliance: Full HSE Site Safety Protocols"
      ]
    }
  ];

  const categoriesMap = [
    { id: "all", label: "All 16 Services" },
    { id: "metalwork", label: "Metalwork & Fabrication" },
    { id: "glass", label: "Glass & Glazing Systems" },
    { id: "partitioning", label: "Interior & Contracting" },
    { id: "amenities", label: "Outdoor Amenities & Security" }
  ];

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = activeCategory === "all" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 pb-20">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 pb-16 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Official Company Portfolio Brochure
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Our Complete Finishing & Fabrication Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              At Apex Itse Nig Ltd, we specialize in precision-engineered, modern, and secure finishing solutions. Explore our full spectrum of 16 specialized metal, glass, structural, and general contracting services.
            </p>
          </div>
        </div>
      </section>


      {/* SEARCH AND CATEGORY FILTER BAR */}
      <section className="relative py-4 sticky top-20 z-30 bg-[#060b17]/90 backdrop-blur-md border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categoriesMap.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search handrails, glass, carports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
            />
          </div>

        </div>
      </section>


      {/* SERVICES GRID SHOWCASE */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Showing <strong className="text-orange-400">{filteredServices.length}</strong> of {allServices.length} Finishing Pillars
            </span>

            <button
              onClick={() => setQuoteModalOpen(true)}
              className="px-4 py-2 rounded-full bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white text-xs font-bold uppercase tracking-wider border border-orange-500/20 transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4" />
              <span>Launch Price Estimator</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="p-6 rounded-3xl glass-panel glass-panel-hover flex flex-col justify-between space-y-6 group cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 group-hover:scale-110 transition-transform">
                        <ServiceIcon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20 uppercase">
                        Apexitse Service
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300 group-hover:text-white flex items-center gap-1.5">
                      <span>View Specifications & Process</span>
                      <ArrowRight className="w-4 h-4 text-orange-400" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* SERVICE SPECIFICATION MODAL */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl text-slate-100 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full border border-slate-700"
            >
              ✕
            </button>

            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-400 flex items-center justify-center border border-orange-500/20 shrink-0">
                {React.createElement(selectedService.icon, { className: "w-8 h-8" })}
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest bg-orange-500/10 px-2.5 py-0.5 rounded border border-orange-500/20">
                  Apex Itse Nig Ltd. Service
                </span>
                <h2 className="text-2xl font-bold text-white leading-tight">{selectedService.title}</h2>
                <p className="text-xs text-orange-400 font-medium">{selectedService.subtitle}</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {selectedService.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-orange-400" />
                  <span>Key Features & Benefits</span>
                </h3>
                <div className="space-y-2">
                  {selectedService.features.map((f, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>Technical Specifications</span>
                </h3>
                <div className="space-y-2">
                  {selectedService.specifications.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-400">
                Need a site measurement for {selectedService.title.split(" ")[0]} in Abuja or nationwide?
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    setQuoteModalOpen(true);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Cost Estimate</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

    </div>
  );
}
