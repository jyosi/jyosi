"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Heart, Activity, Pill, Shield, Baby, Bone, Wind, Apple, ArrowRight } from "lucide-react";
import { THERAPEUTIC_AREAS } from "@/lib/constants";
import { allProducts } from "@/data/all-products";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart size={32} />,
  Activity: <Activity size={32} />,
  Pill: <Pill size={32} />,
  Shield: <Shield size={32} />,
  Baby: <Baby size={32} />,
  Bone: <Bone size={32} />,
  Wind: <Wind size={32} />,
  Apple: <Apple size={32} />,
};

export default function TherapeuticAreasPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Therapeutic Areas</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              We cover {THERAPEUTIC_AREAS.length} major therapeutic segments with {allProducts.length}+ products.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {THERAPEUTIC_AREAS.map((area, index) => {
              const count = allProducts.filter(p => p.therapeuticArea === area.slug).length;
              return (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link href={`/therapeutic-areas/${area.slug}`}>
                    <div className="group h-full p-8 rounded-2xl border border-gray-100 hover:border-[#0057B8]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0057B8]/10 to-[#00A7C4]/10 flex items-center justify-center text-[#0057B8] group-hover:from-[#0057B8] group-hover:to-[#00A7C4] group-hover:text-white transition-all duration-300 mb-6">
                        {iconMap[area.icon] || <Pill size={32} />}
                      </div>
                      <h3 className="text-xl font-bold text-[#0A2540] group-hover:text-[#0057B8] transition-colors mb-2">
                        {area.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{area.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-[#00A7C4]">{count} Products</span>
                        <ArrowRight size={16} className="text-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
