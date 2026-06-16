"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Download, Phone, Package, Mail, MapPin } from "lucide-react";
import { getProductBySlug, getRelatedProducts, getProductImage } from "@/data/all-products";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductBySlug(params.slug as string);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Package size={48} className="mx-auto text-gray-300 mb-4" />
          <h1 className="text-2xl font-bold text-[#0A2540] mb-4">Product Not Found</h1>
          <Link href="/products"><Button>Back to Products</Button></Link>
        </div>
      </div>
    );
  }

  const related = getRelatedProducts(product);

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="py-8 bg-gradient-to-br from-[#F6F8FB] to-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <Link href="/products" className="inline-flex items-center gap-2 text-sm text-[#0057B8] hover:underline mb-6">
            <ArrowLeft size={16} /> Back to Products
          </Link>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="sticky top-28 rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white">
                {getProductImage(product) ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getProductImage(product)}
                      alt={`${product.name} - ${product.composition}`}
                      className="w-full aspect-square object-contain p-6"
                    />
                  </>
                ) : (
                  <div className="w-full aspect-square bg-gradient-to-br from-[#F6F8FB] to-[#E8F4FD] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center text-white mb-4">
                        <Package size={32} />
                      </div>
                      <p className="text-xl font-bold text-[#0057B8]">{product.name}</p>
                      <p className="text-sm text-gray-500 mt-1">{product.dosageForm}</p>
                      <p className="text-xs text-gray-400 mt-1">{product.strength}</p>
                    </div>
                  </div>
                )}
                <div className="p-4 bg-gradient-to-t from-[#F6F8FB] to-white border-t border-gray-50">
                  <p className="text-center text-sm font-bold text-[#0057B8]">{product.name}</p>
                  <p className="text-center text-xs text-gray-500">{product.brand} | {product.dosageForm}</p>
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-3 space-y-6"
            >
              {/* Header */}
              <div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#0057B8]/10 text-[#0057B8] capitalize">
                    {product.therapeuticArea.replace("-", " ")}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
                    {product.dosageForm}
                  </span>
                  {product.featured && (
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#00D1B2]/10 text-[#00D1B2]">
                      Featured
                    </span>
                  )}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#0A2540]">{product.name}</h1>
                <p className="text-lg text-[#0057B8] font-medium mt-2">{product.composition}</p>
                <p className="text-sm text-gray-500 mt-1">Brand: {product.brand} | Strength: {product.strength}</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">{product.description}</p>

              {/* Key Info Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#F6F8FB] border border-gray-100">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">Pack Size</p>
                  <p className="text-sm font-bold text-[#0A2540]">{product.packSize}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F6F8FB] border border-gray-100">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">Dosage Form</p>
                  <p className="text-sm font-bold text-[#0A2540]">{product.dosageForm}</p>
                </div>
                <div className="p-3 rounded-xl bg-[#F6F8FB] border border-gray-100">
                  <p className="text-[10px] text-gray-500 uppercase tracking-wide">Strength</p>
                  <p className="text-sm font-bold text-[#0A2540]">{product.strength}</p>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map(b => (
                    <div key={b} className="flex items-start gap-2 text-sm text-gray-600">
                      <CheckCircle size={15} className="text-[#00D1B2] shrink-0 mt-0.5" />
                      {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Indications */}
              <div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-3">Indications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.indications.map(ind => (
                    <span key={ind} className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#0057B8]/5 text-[#0057B8] border border-[#0057B8]/10">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>

              {/* Usage & Storage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-xs font-bold text-[#0057B8] mb-1">Usage</p>
                  <p className="text-sm text-gray-700">{product.usage}</p>
                </div>
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="text-xs font-bold text-amber-700 mb-1">Storage</p>
                  <p className="text-sm text-gray-700">{product.storage}</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                <a href={`tel:${COMPANY.phone}`}>
                  <Button size="lg"><Phone size={16} /> Enquire Now</Button>
                </a>
                <a href={`https://wa.me/917670903022?text=Hi, I want to enquire about ${product.name}`} target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg">WhatsApp Inquiry</Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctor & Distributor Inquiry Forms */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Doctor Inquiry */}
            <div className="p-6 rounded-2xl bg-[#F6F8FB] border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2540] mb-4">Doctor Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="text" placeholder="City" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <textarea placeholder="Message" rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8] resize-none" />
                <Button className="w-full">Submit Doctor Inquiry</Button>
              </form>
            </div>

            {/* Distributor Inquiry */}
            <div className="p-6 rounded-2xl bg-[#F6F8FB] border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2540] mb-4">Distributor Inquiry</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="text" placeholder="Company Name" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="tel" placeholder="Phone Number" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="email" placeholder="Email" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <input type="text" placeholder="Location / Region" className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8]" />
                <textarea placeholder="Message" rows={3} className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm outline-none focus:border-[#0057B8] resize-none" />
                <Button className="w-full">Submit Distributor Inquiry</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-16 bg-[#F6F8FB]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold text-[#0A2540] mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map(rp => (
                <Link key={rp.id} href={`/products/${rp.slug}`}>
                  <div className="group p-4 rounded-2xl bg-white border border-gray-100 hover:shadow-lg transition-all hover:-translate-y-1">
                    <div className="h-32 rounded-xl overflow-hidden mb-3 bg-gradient-to-br from-[#F6F8FB] to-[#E8F4FD]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={getProductImage(rp)} alt={rp.name} className="w-full h-full object-cover opacity-70" loading="lazy" />
                    </div>
                    <h3 className="font-bold text-sm text-[#0A2540] group-hover:text-[#0057B8] transition-colors">{rp.name}</h3>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-1">{rp.composition}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
