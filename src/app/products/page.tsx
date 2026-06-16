"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, Package, X } from "lucide-react";
import { allProducts, categories } from "@/data/all-products";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeDosage, setActiveDosage] = useState("all");

  const dosageForms = [...new Set(allProducts.map(p => p.dosageForm))].sort();

  const filteredProducts = useMemo(() => {
    return allProducts.filter(p => {
      const matchesSearch = search === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.composition.toLowerCase().includes(search.toLowerCase()) ||
        p.brand.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "all" || p.therapeuticArea === activeCategory;
      const matchesDosage = activeDosage === "all" || p.dosageForm === activeDosage;
      return matchesSearch && matchesCategory && matchesDosage;
    });
  }, [search, activeCategory, activeDosage]);

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Portfolio</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Explore our comprehensive range of {allProducts.length}+ pharmaceutical products 
              across {categories.length} therapeutic areas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-8 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          {/* Search & Filters */}
          <div className="sticky top-[90px] z-10 bg-white py-4 border-b border-gray-100 mb-8">
            {/* Search Bar */}
            <div className="relative mb-4">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by product name, composition, or brand..."
                className="w-full pl-12 pr-12 py-3.5 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === "all" ? "bg-[#0057B8] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                All ({allProducts.length})
              </button>
              {categories.map(cat => {
                const count = allProducts.filter(p => p.therapeuticArea === cat.slug).length;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${activeCategory === cat.slug ? "bg-[#0057B8] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>

            {/* Dosage Form Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Form:</span>
              <select
                value={activeDosage}
                onChange={(e) => setActiveDosage(e.target.value)}
                className="text-xs px-3 py-1.5 rounded-lg border border-gray-200 outline-none focus:border-[#0057B8]"
              >
                <option value="all">All Dosage Forms</option>
                {dosageForms.map(form => (
                  <option key={form} value={form}>{form}</option>
                ))}
              </select>
              <span className="text-xs text-gray-400 ml-auto">
                {filteredProducts.length} products found
              </span>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(index * 0.02, 0.3) }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <Package size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-lg font-bold text-gray-600 mb-2">No products found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search or filter criteria.</p>
              <Button variant="outline" onClick={() => { setSearch(""); setActiveCategory("all"); setActiveDosage("all"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
