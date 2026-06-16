"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { allProducts, categories } from "@/data/all-products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

export default function ProductShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? allProducts.filter(p => p.featured).slice(0, 8)
    : allProducts.filter(p => p.therapeuticArea === activeFilter).slice(0, 8);

  return (
    <section className="py-24 bg-[#F6F8FB]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Product Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {allProducts.length}+ products across {categories.length} therapeutic areas
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button onClick={() => setActiveFilter("all")} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === "all" ? "bg-[#0057B8] text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}>
            Featured
          </button>
          {categories.slice(0, 6).map(cat => (
            <button key={cat.slug} onClick={() => setActiveFilter(cat.slug)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === cat.slug ? "bg-[#0057B8] text-white shadow-lg" : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"}`}>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product, index) => (
            <motion.div key={product.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-12">
          <Link href="/products">
            <Button size="lg" className="group">
              View All {allProducts.length}+ Products
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
