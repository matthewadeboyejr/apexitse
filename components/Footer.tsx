import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Award
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#040711] border-t border-slate-800/80 text-slate-400 pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#CA3333]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#2BA2DD]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-0.5 shadow-lg shadow-[#CA3333]/20 flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.jpeg"
                  alt="Apexitse Nigeria Limited Logo"
                  width={40}
                  height={40}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white font-mono">
                  APEXITSE <span className="text-xs text-[#2BA2DD] font-sans font-semibold px-1.5 py-0.5 rounded bg-[#2BA2DD]/10 border border-[#2BA2DD]/20">NIG LTD</span>
                </span>
                <span className="text-[10px] text-[#B6B4B6] font-medium tracking-widest uppercase">
                  Interior & Exterior Finishing
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Apex Itse Nig Ltd. is a dynamic Nigerian leader in structural metal fabrication and full-service interior & exterior construction finishing solutions. Founded in 2013 in Abuja.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#CA3333]" />
                <span>HSSE Safety Compliant</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                <Award className="w-3.5 h-3.5 text-[#2BA2DD]" />
                <span>Since 2013</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Quick Links
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-[#2BA2DD] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#CA3333]" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#2BA2DD] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#CA3333]" />
                  <span>About Apexitse</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#2BA2DD] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#CA3333]" />
                  <span>Finishing Services</span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#2BA2DD] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#CA3333]" />
                  <span>Project Portfolio</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#2BA2DD] transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-[#CA3333]" />
                  <span>Contact & Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Finishing Pillars
            </h3>
            <ul className="space-y-2 text-xs">
              <li className="hover:text-slate-200 transition-colors">Handrails & Glass Balustrades</li>
              <li className="hover:text-slate-200 transition-colors">Office Partitioning (Glass/Board)</li>
              <li className="hover:text-slate-200 transition-colors">Laser Cut Decorative Designs</li>
              <li className="hover:text-slate-200 transition-colors">Carports & Pergolas</li>
              <li className="hover:text-slate-200 transition-colors">General Contracting</li>
            </ul>
          </div>

          {/* Contact Information (Official Brochure) */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              Head Office (Abuja)
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#2BA2DD] shrink-0 mt-0.5" />
                <span>Suit C11, Jabi Plaza, Obafemi Awolowo Way, Jabi, Abuja</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#2BA2DD] shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+2347064965467" className="hover:text-white transition-colors font-mono">
                    +234 706 496 5467
                  </a>
                  <a href="tel:+2349166806838" className="hover:text-white transition-colors font-mono">
                    +234 916 680 6838
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#2BA2DD] shrink-0" />
                <a href="mailto:apexitse@gmail.com" className="hover:text-white transition-colors">
                  apexitse@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#2BA2DD] shrink-0" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Apex Itse Nig Ltd. All rights reserved. Established 2013 in Abuja.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors">HSSE Policy Certified</span>
            <span className="hover:text-slate-400 transition-colors">West Africa Expansion</span>
            <span className="hover:text-slate-400 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
