"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Download, Phone, Mail, Package, Pill, CheckCircle } from "lucide-react";
import { brands, products } from "@/data/catalog";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function BrandDetailPage() {
  const params = useParams();
  const brand = brands.find((b) => b.slug === params.slug);

  if (!brand) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#0A2540] mb-4">Brand Not Found</h1>
          <Link href="/brands">
            <Button>Back to Brands</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) => p.therapeuticArea === brand.therapeuticArea
  ).slice(0, 6);

  return (
    <>
      {/* Hero Banner */}
      <section className="py-16 bg-gradient-to-br from-[#F6F8FB] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/brands" className="inline-flex items-center gap-2 text-sm text-[#0057B8] hover:underline mb-8">
            <ArrowLeft size={16} /> Back to Brands
          </Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#00D1B2]/10 text-[#00D1B2] capitalize">
                {brand.therapeuticArea.replace("-", " ")}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mt-4 mb-2">{brand.name}</h1>
              <p className="text-xl text-[#00A7C4] font-medium mb-6">{brand.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-8">{brand.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg"><Download size={16} /> Download Brochure</Button>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" size="lg"><Phone size={16} /> Enquire Now</Button>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-[#0057B8]/5 to-[#00A7C4]/10 border border-gray-100 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center mb-4">
                    <span className="text-white text-3xl font-bold">{brand.name.slice(0, 3)}</span>
                  </div>
                  <p className="text-lg font-bold text-[#0A2540]">{brand.name}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0A2540] mb-8">Related Products in {brand.therapeuticArea.replace("-", " ")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Package size={20} className="text-[#0057B8]" />
                  <h3 className="font-bold text-[#0A2540]">{product.name}</h3>
                </div>
                <p className="text-sm text-gray-500 mb-2">{product.composition}</p>
                <p className="text-xs text-gray-400">{product.dosageForm} | {product.packSize}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-[#F6F8FB]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0A2540] text-center mb-8">Interested in {brand.name}?</h2>
          <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all">
                  <option>Doctor</option>
                  <option>Distributor</option>
                  <option>Retailer</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all resize-none" placeholder="Your inquiry about this brand..." />
              </div>
              <div className="md:col-span-2">
                <Button size="lg" className="w-full">Submit Inquiry</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
