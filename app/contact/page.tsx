"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  ExternalLink,
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Sparkles,
  Navigation
} from "lucide-react";
export default function ContactPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Where is Apex Itse Nig Ltd. office located?",
      a: "Our office and primary consultation desk are located at Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja, Nigeria. We execute projects nationwide across Abuja, Lagos, Port Harcourt, Kano, and throughout West Africa."
    },
    {
      q: "What warranty do you offer on Glass Balustrades and Aluminum Doors?",
      a: "We provide warranties on tempered safety glass fittings, anodized aluminum structural frames, and weather sealing against corrosion and structural failure."
    },
    {
      q: "Can you provide site measurements and structural load calculations?",
      a: "Yes. Our team of experienced engineers conducts laser-guided site surveys, wind-load assessments, and CAD structural detailing before fabrication."
    },
    {
      q: "What is your project turnaround time?",
      a: "Turnaround depends on project scope. Standard handrails and shower cubicles take 5–7 business days. Full office partitioning and structural carports are delivered within agreed milestone timelines."
    },
    {
      q: "What is Apexitse's HSSE Policy?",
      a: "Guided by our Health, Safety, Security, and Environment (HSSE) policy, all on-site workers wear mandatory PPE (helmets, safety boots, harnesses). We conduct regular safety drills, equipment checks, and structured waste recycling."
    }
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO BANNER CARD */}
      <section className="relative pt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl min-h-[440px] flex items-center">
            
            {/* Background Image Container */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/hero_facade.jpeg"
                alt="Apex Itse Headquarters Contact"
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
                <span>Abuja Headquarters & Consultation Desk</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-mono">
                Contact <span className="text-[#CA3333]">Apex Itse</span> Nig Ltd.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
                Have an upcoming architectural finishing, glass fitting, or metal fabrication project? Connect directly with our Abuja engineering team or visit our office at Jabi Plaza.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20inquire%20about%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#25D366]/20 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-slate-950" />
                  <span>WhatsApp Direct Chat</span>
                </a>

                <a
                  href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider border border-slate-700 backdrop-blur-md transition-all flex items-center justify-center"
                >
                  Request Online Quote
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CONTACT FORM & HEADQUARTERS INFO */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* WhatsApp Direct Consultation Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-8 relative overflow-hidden">
                
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-72 h-72 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="space-y-3 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 text-[#25D366] text-xs font-mono font-bold border border-[#25D366]/30">
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Consultation Desk</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    Chat Directly on WhatsApp
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed font-sans">
                    Skip the email forms! Connect instantly with our Abuja engineering team on WhatsApp for site measurements, BOQ review, architectural drawings, or immediate project inquiries.
                  </p>
                </div>

                {/* Primary WhatsApp Action Buttons */}
                <div className="space-y-4 relative z-10">
                  <a
                    href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20inquire%20about%20a%20finishing%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-[#25D366]/20 flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-950/15 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-slate-950" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold uppercase tracking-wider text-slate-900">
                          Primary Line (WhatsApp Direct)
                        </span>
                        <span className="block text-lg font-extrabold font-mono text-slate-950">
                          +234 706 496 5467
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold">
                      <span>Chat Now</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>

                  <a
                    href="https://wa.me/2349166806838?text=Hello%20Apexitse%2C%20I%20have%20a%20project%20inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full p-5 rounded-2xl bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 font-bold text-sm uppercase tracking-wider shadow-lg flex items-center justify-between transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center border border-[#25D366]/30">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-semibold text-slate-400">
                          Secondary Line (WhatsApp Desk)
                        </span>
                        <span className="block text-base font-bold font-mono text-white">
                          +234 916 680 6838
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-bold text-[#2BA2DD]">
                      <span>Send Message</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                </div>

                {/* Consultation Advantages Box */}
                <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800/80 space-y-3 relative z-10">
                  <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block">
                    What You Can Send Us On WhatsApp:
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>Architectural PDF / DWG Files</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>Bill of Quantities (BOQ)</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>Job Site Photos & Videos</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>Request Site Measurement</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 text-center">
                  <a
                    href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#2BA2DD] hover:text-[#38BDF8] uppercase tracking-wider"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Direct WhatsApp Inquiry Desk</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Address & Office Details Column (Official Brochure) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                  <Building2 className="w-5 h-5 text-[#2BA2DD]" />
                  <span>Abuja Corporate Office</span>
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#2BA2DD] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Physical Address:</strong>
                      <span>Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#2BA2DD] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Direct Phone Lines:</strong>
                      <div className="flex flex-col gap-0.5">
                        <a href="tel:+2347064965467" className="hover:text-[#2BA2DD] transition-colors font-mono">
                          +234 706 496 5467
                        </a>
                        <a href="tel:+2349166806838" className="hover:text-[#2BA2DD] transition-colors font-mono">
                          +234 916 680 6838
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#2BA2DD] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Official Email:</strong>
                      <a href="mailto:apexitse@gmail.com" className="hover:text-[#2BA2DD] transition-colors font-mono">
                        apexitse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#2BA2DD] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Operating Hours:</strong>
                      <span>Monday – Saturday: 8:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <a
                    href="https://wa.me/2347064965467?text=Hello%20Apexitse%2C%20I%20would%20like%20to%20request%20a%20quote%20for%20a%20project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Sparkles className="w-4 h-4 text-[#2BA2DD]" />
                    <span>Request Project Quote</span>
                  </a>
                </div>
              </div>

              {/* Interactive Live Map Container */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#CA3333]" />
                    <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                      Live Location Map (Abuja HQ)
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20 font-mono font-bold">
                    Suit C11, Jabi Plaza
                  </span>
                </div>
                
                {/* Embedded Live Google Map */}
                <div className="relative w-full h-64 sm:h-72 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner group">
                  <iframe
                    title="Apex Itse Nig Ltd Jabi Plaza Abuja Office Location"
                    src="https://maps.google.com/maps?q=Jabi+Plaza,+Obafemi+Awolowo+Way,+Jabi,+Abuja,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "contrast(1.1) saturate(1.1)" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-2xl"
                  />
                </div>

                {/* Get Directions Button */}
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Jabi+Plaza,+Obafemi+Awolowo+Way,+Jabi,+Abuja,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#2BA2DD] hover:bg-[#2092cb] text-slate-950 font-extrabold text-xs font-mono uppercase tracking-wider shadow-lg shadow-[#2BA2DD]/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Navigation className="w-4 h-4 text-slate-950 fill-slate-950" />
                  <span>Get Live Driving Directions to Jabi Plaza</span>
                  <ExternalLink className="w-4 h-4 text-slate-950" />
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="relative py-12 bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#CA3333] uppercase tracking-widest px-3 py-1 rounded bg-[#CA3333]/10 border border-[#CA3333]/20">
              Clear Guidance
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  >
                    <span className="text-sm font-bold text-white">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#2BA2DD] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* End of Contact Page */}
    </div>
  );
}
