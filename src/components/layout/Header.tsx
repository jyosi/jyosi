"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-[#0A2540] text-white text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-2 hover:text-[#00D1B2] transition-colors">
              <Phone size={14} />
              <span>{COMPANY.phone}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-[#00D1B2] transition-colors">
              <Mail size={14} />
              <span>{COMPANY.email}</span>
            </a>
          </div>
          <p className="text-gray-300">{COMPANY.tagline}</p>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo.png"
              alt="JYOSI Pharmaceuticals"
              className="h-12 sm:h-16 lg:h-[80px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[#0A2540] hover:text-[#0057B8] hover:bg-[#F6F8FB] rounded-lg transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+917675903022">
              <Button variant="outline" size="sm">
                <Phone size={14} />
                Call Now
              </Button>
            </a>
            <Link href="/contact">
              <Button size="sm">Get Quote</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white"
            >
              <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-[#0A2540] hover:text-[#0057B8] hover:bg-[#F6F8FB] rounded-lg transition-all"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100">
                  <a href="tel:+917675903022" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">Call Now</Button>
                  </a>
                  <Link href="/contact" className="flex-1">
                    <Button size="sm" className="w-full">Get Quote</Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
