"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Building2,
  Menu,
  X,
  Phone,
  ChevronRight,
  Sparkles,
  Calculator
} from "lucide-react";
import QuoteModal from "./QuoteModal";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-[#060b17]/90 backdrop-blur-md border-b border-slate-800/80 py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-amber-600 via-orange-500 to-amber-400 p-0.5 shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-300">
                <div className="w-full h-full bg-[#060b17] rounded-[10px] flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white flex items-center gap-1 font-mono">
                  APEXITSE <span className="text-xs text-orange-500 font-sans font-semibold tracking-wider px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/20">NIG LTD</span>
                </span>
                <span className="text-[10px] text-slate-400 font-medium tracking-widest uppercase">
                  Interior & Exterior Finishing
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/25"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-800/80 hover:bg-slate-800 text-slate-200 text-xs font-semibold uppercase tracking-wider border border-slate-700 hover:border-orange-500/50 transition-all duration-200 cursor-pointer"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>Instant Estimator</span>
              </button>

              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-all duration-300"
              >
                <span>Get Quote</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setQuoteModalOpen(true)}
                className="p-2 rounded-lg bg-orange-500/10 text-orange-400 border border-orange-500/20"
                aria-label="Instant Estimator"
              >
                <Calculator className="w-5 h-5" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-200 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#060b17]/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between ${isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white font-semibold"
                      : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                      }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <ChevronRight className="w-4 h-4" />}
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setQuoteModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-800 text-slate-200 font-medium border border-slate-700"
              >
                <Calculator className="w-4 h-4 text-orange-400" />
                <span>Calculate Cost Estimate</span>
              </button>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold shadow-lg shadow-orange-500/20"
              >
                <span>Request Project Consultation</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Instant Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} />
    </>
  );
}
