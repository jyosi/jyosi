"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OwnProducts() {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#F6F8FB] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#0057B8]/10 to-[#00A7C4]/10 border border-[#0057B8]/20 mb-4 sm:mb-6">
            <Award size={14} className="text-[#0057B8]" />
            <span className="text-xs sm:text-sm font-bold text-[#0057B8]">Our Flagship Products</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4">
            Manufactured by{" "}
            <span className="gradient-text">JYOSI</span>
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Signature products trusted by healthcare professionals across India.
          </p>
        </motion.div>

        {/* RNA+ INJECTION - Hero Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0057B8] shadow-2xl">
            <div className="p-5 sm:p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Product Image - takes 2 columns */}
                <div className="lg:col-span-2 relative">
                  <div className="relative max-w-sm mx-auto">
                    {/* Glow effect behind image */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00A7C4]/30 to-[#0057B8]/20 blur-xl scale-95" />
                    {/* Image container */}
                    <div className="relative rounded-2xl bg-white p-5 shadow-2xl border border-white/20 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/products/rna-plus.jpg"
                        alt="RNA+ Injection by JYOSI Pharmaceuticals"
                        className="w-full h-auto max-h-[400px] object-contain mx-auto rounded-lg"
                      />
                    </div>
                    {/* Floating badge */}
                    <motion.div
                      className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-[#00D1B2] text-white text-xs font-bold shadow-lg shadow-[#00D1B2]/30"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ★ FLAGSHIP
                    </motion.div>
                    {/* Brand badge */}
                    <motion.div
                      className="absolute -bottom-3 -left-3 px-4 py-2 rounded-full bg-white text-[#0057B8] text-xs font-bold shadow-xl"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      RNA+ Injection
                    </motion.div>
                  </div>
                </div>

                {/* Product Details - takes 3 columns */}
                <div className="lg:col-span-3 text-white space-y-5 sm:space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-4">
                      <Star size={12} className="text-[#00D1B2]" />
                      Neurology | Own Product
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                      RNA<span className="text-[#00D1B2]">+</span>
                    </h3>
                    <p className="text-lg text-white/50 font-medium">Injection • Capsule • Syrup</p>
                  </div>

                  <p className="text-white/75 leading-relaxed text-base sm:text-lg">
                    Methylcobalamin, Pyridoxine HCl & Niacinamide Injection. 
                    For IM/IV Use Only. 1 x 2ml Dispo Pack with sterile disposable syringe and needle.
                  </p>

                  {/* Available Forms Highlight */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-[#00D1B2] text-white text-xs font-bold">💉 RNA+ Injection</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold">💊 RNA+ Capsule</span>
                    <span className="px-3 py-1.5 rounded-full bg-white/15 border border-white/30 text-white text-xs font-bold">🧴 RNA+ Syrup</span>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10">
                    <p className="text-sm font-semibold text-[#00D1B2] mb-3">Composition (Each 2ml contains):</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-white/70">
                      <span>• Methylcobalamin IP — 1500mcg</span>
                      <span>• Pyridoxine HCl IP — 100mg</span>
                      <span>• Niacinamide IP — 100mg</span>
                      <span>• Benzyl Alcohol IP — 2% v/v</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-[#00D1B2] mb-3">Key Benefits:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {["Prevents brain aging", "Improves immune system", "Improves sleep pattern", "Protects cardiovascular system", "High safety profile", "Well tolerated"].map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2 text-sm text-white/80">
                          <CheckCircle size={14} className="text-[#00D1B2] shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/products/rna-plus">
                      <Button variant="accent" size="lg" className="group">
                        View Full Details
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* JYSPRO-DF - Hero Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-2xl">
            <div className="p-5 sm:p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                {/* Product Details (left side) - 3 columns */}
                <div className="lg:col-span-3 space-y-5 sm:space-y-6 order-2 lg:order-1">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#DC2626]/10 border border-[#DC2626]/20 text-xs font-semibold text-[#DC2626] mb-4">
                      <Star size={12} />
                      Nutrition | Own Product
                    </div>
                    <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-2">
                      JYSPRO-DF
                    </h3>
                    <p className="text-lg sm:text-xl text-[#DC2626] font-semibold italic">Cardamom Flavour</p>
                    <p className="text-gray-500 mt-1 text-base sm:text-lg">Complete, Balanced Nutrition</p>
                  </div>

                  {/* Sugar Free Highlight */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-full bg-[#DC2626] text-white text-xs font-bold">🥛 Cardamom Flavour</span>
                    <span className="px-3 py-1.5 rounded-full bg-green-600 text-white text-xs font-bold animate-pulse">🍃 Sugar Free Also Available</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Premium protein supplement by JYOSI Pharmaceuticals. An everyday nutritional 
                    supplement with delicious cardamom flavour. 200g pack for complete balanced nutrition.
                  </p>

                  <div className="p-4 sm:p-5 rounded-xl bg-[#F6F8FB] border border-gray-100">
                    <p className="text-sm font-bold text-[#0A2540] mb-3">Protein Supplement For:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {["Growing Children", "Body Building", "Convalescence", "Trauma", "Pregnancy", "Stress", "Old Age"].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={14} className="text-[#00D1B2] shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#DC2626]/5 border border-[#DC2626]/10">
                    <p className="text-sm text-[#DC2626] font-medium">
                      &ldquo;An Everyday Nutritional Supplement&rdquo; — Marketed by JYOSI Pharmaceuticals
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link href="/products/nutrition/jyspro-df">
                      <Button size="lg" className="group bg-[#DC2626] hover:bg-[#B91C1C]">
                        View Full Details
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link href="/contact">
                      <Button variant="outline" size="lg">
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Product Image (right side) - 2 columns */}
                <div className="lg:col-span-2 relative order-1 lg:order-2">
                  <div className="relative max-w-sm mx-auto">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#DC2626]/10 to-[#DC2626]/5 blur-xl scale-95" />
                    {/* Image container */}
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/products/jyspro-df.jpg"
                        alt="JYSPRO-DF Protein Supplement by JYOSI Pharmaceuticals"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    {/* Floating badges */}
                    <motion.div
                      className="absolute -top-3 -left-3 px-4 py-2 rounded-full bg-[#DC2626] text-white text-xs font-bold shadow-lg shadow-[#DC2626]/30"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      ★ FLAGSHIP
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-3 -right-3 px-4 py-2 rounded-full bg-white text-[#0A2540] text-xs font-bold shadow-xl border border-gray-100"
                      animate={{ y: [0, 4, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      200g Jar
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
