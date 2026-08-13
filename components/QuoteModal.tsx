"use client";

import React, { useState } from "react";
import { 
  X, 
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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientMessage, setClientMessage] = useState("");

  if (!isOpen) return null;

  const servicesList: Record<string, { name: string; desc: string }> = {
    handrails: {
      name: "Handrails (Stainless Steel, Glass, Wrought Iron)",
      desc: "Top-quality indoor & outdoor handrails for staircases, balconies & ramps."
    },
    balustrades: {
      name: "Glass Balustrades & Frameless Systems",
      desc: "High-grade tempered glass balustrades combining strength with floating elegance."
    },
    shower: {
      name: "Bathroom Shower Cubicles",
      desc: "Precision-cut tempered glass cubicles with sliding or swing doors."
    },
    partitioning: {
      name: "Office Partitioning (Glass, Aluminum, Board)",
      desc: "Acoustic glass, aluminum frame & board partitions for corporate spaces."
    },
    laser: {
      name: "Laser Cut Decorative Designs & Gates",
      desc: "Custom CNC laser-cut metal panels for screens, gates & building facades."
    },
    carports: {
      name: "Carports (Polycarbonate & Tensile Fabric)",
      desc: "Custom-built carports protecting vehicles from sun, rain, and debris."
    },
    pergolas: {
      name: "Pergolas & Gazebos",
      desc: "Stylish outdoor shade structures for gardens, patios, lounges & resorts."
    },
    windows: {
      name: "Aluminum Windows & Doors",
      desc: "Sliding, folding, casement & pivot systems for homes & commercial buildings."
    },
    glazier: {
      name: "Glazier (Mirrors & Decorative Glass)",
      desc: "Gym mirror walls, bathroom mirrors, glass tabletops & shelving."
    },
    fencing: {
      name: "Electric Fencing & Security Gates",
      desc: "Advanced perimeter security with energizers & automated gates."
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl shadow-[#CA3333]/20 overflow-hidden text-slate-100">
        {/* Header background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#CA3333]/10 rounded-full blur-3xl pointer-events-none" />

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
            <div className="p-2.5 bg-[#CA3333]/10 rounded-xl border border-[#CA3333]/20 text-[#2BA2DD]">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Request Project Quote
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Select your service requirements for a quick consultation & site measurement
              </p>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="mt-6 space-y-5 max-h-[75vh] overflow-y-auto pr-1">
              {/* Select Service Category */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                  Select Primary Service
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(servicesList).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setServiceType(key)}
                      className={`p-3 rounded-xl text-left border transition-all text-xs font-medium ${
                        serviceType === key
                          ? "bg-[#CA3333]/15 border-[#CA3333] text-white font-semibold shadow-md shadow-[#CA3333]/10"
                          : "bg-slate-800/40 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="line-clamp-1">{item.name}</span>
                        {serviceType === key && <CheckCircle2 className="w-4 h-4 text-[#2BA2DD] shrink-0" />}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Arc. Ibrahim Musa"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA3333]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-1">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="07064965467"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA3333]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@firm.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA3333]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1">
                    Project Details / Scope (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe project location, dimensions, or drawings..."
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#CA3333]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#CA3333] hover:bg-[#b22b2b] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#CA3333]/20 transition-all cursor-pointer"
              >
                <span>Submit Quote Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white">Quote Request Received!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you, <strong className="text-[#2BA2DD]">{clientName}</strong>. Our technical team in Abuja will reach out to you at <strong className="text-white">{clientPhone}</strong> to assist with site measurements and pricing.
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
                  className="px-5 py-2.5 rounded-xl bg-[#CA3333] hover:bg-[#B22B2B] text-white text-xs font-bold flex items-center gap-2"
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
