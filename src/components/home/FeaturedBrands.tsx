"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { brands } from "@/data/catalog";
import { Button } from "@/components/ui/button";

export default function FeaturedBrands() {
  // Skip the first 2 (own brands already shown above) and show marketed brands
  const marketedBrands = brands.slice(2, 10);

  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0057B8]/5 border border-[#0057B8]/20 mb-6">
            <Star size={14} className="text-[#0057B8]" />
            <span className="text-sm font-medium text-[#0057B8]">Our Marketed Brands</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Brands We Market & Distribute
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In addition to our own products, we market and distribute a wide range of 
            quality pharmaceutical brands across India.
          </p>
        </motion.div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {marketedBrands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/brands/${brand.slug}`}>
                <div className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:bg-gradient-to-br hover:from-[#0057B8]/5 hover:to-[#00A7C4]/5 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:border-[#0057B8]/20">
                  {/* Brand Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">
                      {brand.name.slice(0, 2)}
                    </span>
                  </div>

                  {/* Brand Info */}
                  <h3 className="text-lg font-bold text-[#0A2540] mb-1 group-hover:text-[#0057B8] transition-colors">
                    {brand.name}
                  </h3>
                  <p className="text-xs text-[#00A7C4] font-medium mb-3">{brand.tagline}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{brand.description}</p>

                  {/* Arrow */}
                  <div className="mt-4 flex items-center gap-2 text-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">View Details</span>
                    <ArrowRight size={14} />
                  </div>

                  {/* Therapeutic Area Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#00D1B2]/10 text-[#00D1B2] capitalize">
                      {brand.therapeuticArea.replace("-", " ")}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/brands">
            <Button variant="outline" size="lg" className="group">
              View All Brands
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
