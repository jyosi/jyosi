"use client";

import Link from "next/link";
import { ArrowRight, Pill, Droplets, Syringe, FlaskConical, Package } from "lucide-react";
import { ProductItem, getProductImage } from "@/data/all-products";

// Color map for therapeutic areas
const areaColors: Record<string, { bg: string; text: string; gradient: string }> = {
  "nutrition": { bg: "from-green-50 to-emerald-50", text: "text-green-700", gradient: "from-green-400 to-emerald-500" },
  "womens-health": { bg: "from-pink-50 to-rose-50", text: "text-pink-700", gradient: "from-pink-400 to-rose-500" },
  "anti-infectives": { bg: "from-blue-50 to-indigo-50", text: "text-blue-700", gradient: "from-blue-400 to-indigo-500" },
  "gastroenterology": { bg: "from-orange-50 to-amber-50", text: "text-orange-700", gradient: "from-orange-400 to-amber-500" },
  "hepatology": { bg: "from-yellow-50 to-amber-50", text: "text-yellow-700", gradient: "from-yellow-500 to-amber-500" },
  "respiratory": { bg: "from-cyan-50 to-sky-50", text: "text-cyan-700", gradient: "from-cyan-400 to-sky-500" },
  "pain-management": { bg: "from-red-50 to-orange-50", text: "text-red-700", gradient: "from-red-400 to-orange-500" },
  "pediatrics": { bg: "from-purple-50 to-violet-50", text: "text-purple-700", gradient: "from-purple-400 to-violet-500" },
  "steroids": { bg: "from-slate-50 to-gray-50", text: "text-slate-700", gradient: "from-slate-400 to-gray-500" },
  "anthelmintics": { bg: "from-teal-50 to-emerald-50", text: "text-teal-700", gradient: "from-teal-400 to-emerald-500" },
};

// Icon based on dosage form
function DosageIcon({ form, className }: { form: string; className?: string }) {
  const cls = className || "w-8 h-8";
  switch (form) {
    case "Injection": return <Syringe className={cls} />;
    case "Syrup": case "Suspension": case "Drops": case "Malt": case "Oil": case "Dry Syrup":
      return <Droplets className={cls} />;
    case "Powder": case "Sachet": return <FlaskConical className={cls} />;
    default: return <Pill className={cls} />;
  }
}

export default function ProductCard({ product }: { product: ProductItem }) {
  const colors = areaColors[product.therapeuticArea] || areaColors.nutrition;
  const hasImage = getProductImage(product) !== "";

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group h-full rounded-2xl border border-gray-100 bg-white hover:border-[#0057B8]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
        {/* Visual Header */}
        <div className={`relative h-40 bg-gradient-to-br ${colors.bg} flex items-center justify-center overflow-hidden`}>
          {hasImage ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getProductImage(product)}
                alt={product.name}
                className="w-full h-full object-contain p-4"
              />
            </>
          ) : (
            <div className="text-center p-4">
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform`}>
                <DosageIcon form={product.dosageForm} className="w-7 h-7" />
              </div>
              <p className="text-sm font-bold text-[#0A2540]">{product.name}</p>
              <p className="text-[10px] text-gray-500 mt-0.5">{product.dosageForm} | {product.strength}</p>
            </div>
          )}
          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#00D1B2] text-white text-[9px] font-bold shadow-sm">
              FEATURED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-bold text-sm text-[#0A2540] group-hover:text-[#0057B8] transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-1 mb-3">{product.composition}</p>
          <div className="flex items-center justify-between">
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} capitalize`}>
              {product.therapeuticArea.replace(/-/g, " ")}
            </span>
            <ArrowRight size={12} className="text-[#0057B8] opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </Link>
  );
}
