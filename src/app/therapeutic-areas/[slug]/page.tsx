"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Package } from "lucide-react";
import { allProducts } from "@/data/all-products";
import { THERAPEUTIC_AREAS } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function TherapeuticAreaDetailPage() {
  const params = useParams();
  const area = THERAPEUTIC_AREAS.find((a) => a.slug === params.slug);
  const areaProducts = allProducts.filter((p) => p.therapeuticArea === params.slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A2540] mb-4">Area Not Found</h1>
          <Link href="/therapeutic-areas"><Button>Back</Button></Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="py-16 bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/therapeutic-areas" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6">
            <ArrowLeft size={16} /> All Therapeutic Areas
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{area.name}</h1>
            <p className="text-xl text-white/80 max-w-2xl">{area.description}</p>
            <p className="text-lg text-white/60 mt-4">{areaProducts.length} Products Available</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {areaProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link href={`/products/${product.slug}`}>
                  <div className="group h-full p-5 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1 bg-white">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0057B8]/10 to-[#00A7C4]/10 flex items-center justify-center text-[#0057B8] mb-3 group-hover:from-[#0057B8] group-hover:to-[#00A7C4] group-hover:text-white transition-all">
                      <Package size={20} />
                    </div>
                    <h3 className="font-bold text-sm text-[#0A2540] group-hover:text-[#0057B8] transition-colors mb-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1 mb-2">{product.composition}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F6F8FB] text-gray-500">{product.dosageForm}</span>
                      <ArrowRight size={12} className="text-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {areaProducts.length === 0 && (
            <div className="text-center py-20">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-600">No products found in this category</h3>
              <Link href="/products" className="mt-4 inline-block"><Button>Browse All Products</Button></Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
