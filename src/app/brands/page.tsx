"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { brands } from "@/data/catalog";

export default function BrandsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#F6F8FB] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Our <span className="gradient-text">Flagship Brands</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Each brand in our portfolio represents years of research, quality manufacturing, 
              and commitment to patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Link href={`/brands/${brand.slug}`}>
                  <div className="group h-full p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#0057B8]/20">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-white font-bold">{brand.name.slice(0, 2)}</span>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#00D1B2]/10 text-[#00D1B2] capitalize">
                        {brand.therapeuticArea.replace("-", " ")}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0057B8] transition-colors mb-2">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-[#00A7C4] font-medium mb-3">{brand.tagline}</p>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-4">{brand.description}</p>
                    <div className="flex items-center gap-2 text-[#0057B8] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      View Brand Details <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
