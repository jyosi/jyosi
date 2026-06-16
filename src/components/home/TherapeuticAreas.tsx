"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Activity, Pill, Shield, Baby, Bone, Wind, Apple } from "lucide-react";
import { THERAPEUTIC_AREAS } from "@/lib/constants";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={24} />,
  Activity: <Activity size={24} />,
  Pill: <Pill size={24} />,
  Shield: <Shield size={24} />,
  Baby: <Baby size={24} />,
  Bone: <Bone size={24} />,
  Wind: <Wind size={24} />,
  Apple: <Apple size={24} />,
};

export default function TherapeuticAreas() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-3 sm:mb-4">
            Therapeutic Areas
          </h2>
          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive pharmaceutical solutions across all major therapeutic segments.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {THERAPEUTIC_AREAS.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/therapeutic-areas/${area.slug}`}>
                <div className="group relative p-5 rounded-2xl bg-[#F6F8FB] border border-gray-100 hover:border-[#0057B8]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center h-full">
                  <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-[#0057B8]/10 to-[#00A7C4]/10 flex items-center justify-center mb-3 text-[#0057B8] group-hover:from-[#0057B8] group-hover:to-[#00A7C4] group-hover:text-white transition-all duration-300">
                    {iconMap[area.icon] || <Pill size={24} />}
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-[#0A2540] mb-1 group-hover:text-[#0057B8] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-[10px] text-gray-500 hidden md:block">{area.productCount}+ Products</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
