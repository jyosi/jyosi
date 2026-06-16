"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] via-white to-[#eef7ff]" />

      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #0057B8 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Decorative orbs */}
      <motion.div
        className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#0057B8]/8 to-[#00A7C4]/5 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -left-32 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#00D1B2]/8 to-[#0057B8]/5 blur-3xl"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-7 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#0057B8]/15 shadow-sm"
            >
              <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0057B8] to-[#00A7C4] flex items-center justify-center">
                <Sparkles size={10} className="text-white" />
              </div>
              <span className="text-sm font-semibold text-[#0057B8]">Makers of RNA+</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-[2.5rem] sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0A2540] leading-[1.08] tracking-tight">
              Advancing{" "}
              <span className="gradient-text">Healthcare</span>{" "}
              Through Innovation
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Delivering world-class pharmaceutical solutions across 10 therapeutic 
              areas with 100+ quality products trusted nationwide.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/products">
                <Button size="xl" className="btn-shine group w-full sm:w-auto">
                  Explore Products
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+917675903022">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <Phone size={16} />
                  Call Us Now
                </Button>
              </a>
            </div>

            {/* Stats - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-100"
            >
              {[
                { value: "100+", label: "Products" },
                { value: "10", label: "Specialties" },
                { value: "Pan India", label: "Reach" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0057B8]">{stat.value}</p>
                  <p className="text-[11px] sm:text-sm text-gray-400 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Logo Display (Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:flex items-center justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0057B8]/10 to-[#00A7C4]/5 blur-2xl scale-125" />
              <div className="relative w-[440px] h-[440px] rounded-3xl bg-white shadow-premium-lg border border-gray-100/50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#0057B8]/3" />
                <div className="relative text-center space-y-3 p-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/Logo.png" alt="JYOSI Pharmaceuticals Logo" className="mx-auto w-56 h-56 object-contain" />
                  <p className="text-lg font-bold text-[#0057B8]">Makers of RNA+</p>
                </div>
              </div>
              <motion.div className="absolute -top-4 -right-4 px-4 py-2.5 rounded-xl bg-white shadow-premium border border-gray-100/80" animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <p className="text-xs font-bold text-[#0057B8]">RNA+ Injection</p>
                <p className="text-[10px] text-gray-400">Flagship Product</p>
              </motion.div>
              <motion.div className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-xl bg-white shadow-premium border border-gray-100/80" animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity }}>
                <p className="text-xs font-bold text-[#DC2626]">JYSPRO-DF</p>
                <p className="text-[10px] text-gray-400">Protein Supplement</p>
              </motion.div>
              <motion.div className="absolute top-1/2 -left-6 -translate-y-1/2 px-3 py-2 rounded-lg bg-[#00D1B2] text-white shadow-lg" animate={{ x: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                <p className="text-[10px] font-bold">WHO-GMP ✓</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile: Brand Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="lg:hidden"
          >
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-[11px] font-medium text-[#0057B8]">
                ✓ WHO-GMP Certified
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-[11px] font-medium text-[#0057B8]">
                ✓ ISO 9001:2015
              </div>
              <div className="px-3 py-1.5 rounded-full bg-white border border-gray-100 shadow-sm text-[11px] font-medium text-[#0057B8]">
                ✓ Pan-India Distribution
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
