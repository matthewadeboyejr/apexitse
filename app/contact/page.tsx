"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  ShieldCheck, 
  Calculator,
  Upload,
  Sparkles
} from "lucide-react";
import QuoteModal from "@/components/QuoteModal";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "Abuja",
    service: "handrails",
    areaSqm: "100",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

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
    <div className="space-y-20 pb-20">
      
      {/* PAGE HERO */}
      <section className="relative pt-12 pb-16 bg-radial-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-mono">
              Contact & Project Consultation
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
              Have an upcoming construction finishing, glass fitting, or metal fabrication project? Speak directly with our Abuja office team.
            </p>
          </div>
        </div>
      </section>


      {/* CONTACT FORM & HEADQUARTERS INFO */}
      <section className="relative py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
                
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-mono font-bold border border-orange-500/20">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Project Inquiry & Site Survey Request</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">Send Us a Direct Message</h2>
                  <p className="text-xs text-slate-400">
                    Fill in your project requirements below. Our technical team responds promptly.
                  </p>
                </div>

                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          placeholder="e.g. Arc. Ibrahim Musa"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Company / Firm (Optional)
                        </label>
                        <input
                          type="text"
                          name="company"
                          placeholder="e.g. Apex Developments"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          placeholder="ibrahim@domain.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          placeholder="07064965467"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Project Location
                        </label>
                        <select
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-orange-500"
                        >
                          <option value="Abuja">Abuja (FCT)</option>
                          <option value="Lagos">Lagos State</option>
                          <option value="Rivers">Port Harcourt (Rivers)</option>
                          <option value="Kano">Kano State</option>
                          <option value="Oyo">Ibadan (Oyo)</option>
                          <option value="Other">Other State / West Africa</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Primary Service
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-orange-500"
                        >
                          <option value="handrails">Handrails & Balustrades</option>
                          <option value="shower">Bathroom Shower Cubicles</option>
                          <option value="burglar">Burglar Proof Fabrication</option>
                          <option value="partitioning">Office Partitioning (Glass/Board)</option>
                          <option value="laser">Laser Cut Decorative Designs</option>
                          <option value="carports">Carports & Pergolas</option>
                          <option value="general">General Contracting</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-400 mb-1">
                          Approx. Area (m²)
                        </label>
                        <input
                          type="number"
                          name="areaSqm"
                          placeholder="e.g. 100"
                          value={formData.areaSqm}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-400 mb-1">
                        Project Scope & Message *
                      </label>
                      <textarea
                        required
                        rows={4}
                        name="message"
                        placeholder="Describe your site condition, architectural drawings, or material preferences..."
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-slate-950 border border-dashed border-slate-800 flex items-center justify-between text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4 text-orange-400" />
                        <span>Attach Architectural Drawings / BOQ (PDF, DWG)</span>
                      </div>
                      <span className="text-[10px] text-slate-500">Max 25MB</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Inquiry to Abuja Office</span>
                    </button>

                  </form>
                ) : (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Inquiry Sent Successfully!</h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you, <strong className="text-orange-400">{formData.name}</strong>. Your request has been sent to our Jabi Plaza office in Abuja. We will reach out to you shortly.
                    </p>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}

              </div>
            </div>

            {/* Address & Office Details Column (Official Brochure) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
                  <Building2 className="w-5 h-5 text-orange-400" />
                  <span>Abuja Corporate Office</span>
                </h3>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Physical Address:</strong>
                      <span>Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja, Nigeria</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Direct Phone Lines:</strong>
                      <div className="flex flex-col gap-0.5">
                        <a href="tel:07064965467" className="hover:text-orange-400 transition-colors font-mono">
                          07064965467
                        </a>
                        <a href="tel:09166806838" className="hover:text-orange-400 transition-colors font-mono">
                          09166806838
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Official Email:</strong>
                      <a href="mailto:apexitse@gmail.com" className="hover:text-orange-400 transition-colors font-mono">
                        apexitse@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold mb-0.5">Operating Hours:</strong>
                      <span>Monday – Saturday: 8:00 AM – 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Calculator className="w-4 h-4 text-orange-400" />
                    <span>Launch Instant Cost Estimator</span>
                  </button>
                </div>
              </div>

              {/* Interactive Map UI Container */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white uppercase">Location Map (Jabi, Abuja)</span>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Jabi Plaza Office
                  </span>
                </div>
                
                <div className="relative w-full h-48 rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 bg-grid-pattern opacity-40" />
                  <div className="text-center space-y-2 relative z-10 p-4">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mx-auto border border-orange-500/40 animate-pulse">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-white block">Apex Itse Nig Ltd. - Suit C11, Jabi Plaza</span>
                    <span className="text-[10px] text-slate-400 block">Obafemi Awolowo Way, Jabi, Abuja</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS (FAQ) */}
      <section className="relative py-12 bg-slate-950/60 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-orange-400 uppercase tracking-widest px-3 py-1 rounded bg-orange-500/10 border border-orange-500/20">
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
                      <ChevronUp className="w-5 h-5 text-orange-400 shrink-0" />
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

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />

    </div>
  );
}
