"use client";

import React, { useState } from "react";
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Phone, 
  Layers, 
  ShieldCheck, 
  Building
} from "lucide-react";
import Link from "next/link";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [serviceType, setServiceType] = useState<string>("balustrades");
  const [areaSqm, setAreaSqm] = useState<number>(100);
  const [finishQuality, setFinishQuality] = useState<"standard" | "premium" | "ultra">("premium");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");

  if (!isOpen) return null;

  const servicesMap: Record<string, { name: string; baseRatePerSqm: number; desc: string }> = {
    handrails: {
      name: "Handrails (Stainless Steel, Glass, Wrought Iron)",
      baseRatePerSqm: 45000,
      desc: "Top-quality indoor & outdoor handrails for staircases, balconies & ramps."
    },
    balustrades: {
      name: "Glass Balustrades & Frameless Systems",
      baseRatePerSqm: 65000,
      desc: "High-grade tempered glass balustrades combining strength with floating elegance."
    },
    shower: {
      name: "Bathroom Shower Cubicles",
      baseRatePerSqm: 55000,
      desc: "Precision-cut tempered glass cubicles with sliding or swing doors."
    },
    partitioning: {
      name: "Office Partitioning (Glass, Aluminum, Board)",
      baseRatePerSqm: 50000,
      desc: "Acoustic glass, aluminum frame & board partitions for corporate spaces."
    },
    laser: {
      name: "Laser Cut Decorative Designs & Gates",
      baseRatePerSqm: 60000,
      desc: "Custom CNC laser-cut metal panels for screens, gates & building facades."
    },
    carports: {
      name: "Carports (Polycarbonate & Tensile Fabric)",
      baseRatePerSqm: 40000,
      desc: "Custom-built carports protecting vehicles from sun, rain, and debris."
    },
    pergolas: {
      name: "Pergolas & Gazebos",
      baseRatePerSqm: 48000,
      desc: "Stylish outdoor shade structures for gardens, patios, lounges & resorts."
    },
    windows: {
      name: "Aluminum Windows & Doors",
      baseRatePerSqm: 52000,
      desc: "Sliding, folding, casement & pivot systems for homes & commercial buildings."
    },
    glazier: {
      name: "Glazier (Mirrors & Decorative Glass)",
      baseRatePerSqm: 38000,
      desc: "Gym mirror walls, bathroom mirrors, glass tabletops & shelving."
    },
    fencing: {
      name: "Electric Fencing & Security Gates",
      baseRatePerSqm: 35000,
      desc: "Advanced perimeter security with energizers & automated gates."
    }
  };

  const qualityMultiplier = {
    standard: 1.0,
    premium: 1.25,
    ultra: 1.55
  };

  const selectedService = servicesMap[serviceType] || servicesMap["balustrades"];
  const calculatedEstimate = Math.round(areaSqm * selectedService.baseRatePerSqm * qualityMultiplier[finishQuality]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-orange-950/40 overflow-hidden text-slate-100">
        {/* Header background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-full border border-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2.5 bg-orange-500/10 rounded-xl border border-orange-500/20 text-orange-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Project Cost Estimator
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Instant budget calculation for Apexitse brochure services in Nigeria
              </p>
            </div>
          </div>

          {!submitted ? (
            <div className="mt-6 space-y-6 max-h-[75vh] overflow-y-auto pr-1">
              {/* Select Service Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  1. Select Finishing Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(servicesMap).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setServiceType(key)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-medium ${
                        serviceType === key
                          ? "bg-orange-500/15 border-orange-500 text-white font-semibold shadow-md shadow-orange-500/10"
                          : "bg-slate-800/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="line-clamp-1">{item.name}</span>
                        {serviceType === key && <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Square Meters / Linear Meters Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    2. Estimated Area / Distance (Meters m² / Linear M)
                  </label>
                  <span className="text-sm font-bold text-orange-400 bg-orange-500/10 px-3 py-1 rounded-lg border border-orange-500/20">
                    {areaSqm} m²
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={areaSqm}
                  onChange={(e) => setAreaSqm(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                  <span>10 m² (Small Balcony / Shower)</span>
                  <span>250 m² (Corporate Office)</span>
                  <span>1000+ m² (Full Estate Canopy)</span>
                </div>
              </div>

              {/* Specification Grade */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  3. Specification Grade
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["standard", "premium", "ultra"] as const).map((grade) => (
                    <button
                      key={grade}
                      type="button"
                      onClick={() => setFinishQuality(grade)}
                      className={`p-2.5 rounded-xl border text-center transition-all text-xs capitalize ${
                        finishQuality === grade
                          ? "bg-slate-800 border-orange-500 text-orange-400 font-bold"
                          : "bg-slate-800/40 border-slate-800 text-slate-400"
                      }`}
                    >
                      {grade === "standard" && "Standard Specification"}
                      {grade === "premium" && "Premium Executive"}
                      {grade === "ultra" && "Ultra Custom Luxury"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Calculation Display */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-800/90 to-slate-900 border border-slate-700/70 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider block">
                    Estimated Budget Range:
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    ₦{calculatedEstimate.toLocaleString()}{" "}
                    <span className="text-xs text-slate-400 font-sans font-normal">EST.</span>
                  </div>
                  <span className="text-[10px] text-slate-500">
                    Includes materials, precision fabrication & site installation
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="w-full sm:w-auto flex flex-col gap-2">
                  <input
                    type="text"
                    required
                    placeholder="Your Name / Firm"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number (e.g. 080...)"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                  />
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 transition-all"
                  >
                    <span>Request Site Survey</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Estimation Request Submitted!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-orange-400">{clientName}</strong>. Our senior finishing engineer in Abuja will contact you at <strong className="text-white">{clientPhone}</strong> to schedule a site measurement.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold"
                >
                  Close Window
                </button>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Abuja Office</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
