"use client";

import { motion } from "framer-motion";
import { Download, FileText, Image, BookOpen, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const downloads = [
  { id: 1, title: "Company Brochure", description: "Corporate overview and capabilities", type: "PDF", size: "4.2 MB", icon: <BookOpen size={20} /> },
  { id: 2, title: "Product Catalogue 2024", description: "Complete product listing with compositions", type: "PDF", size: "12.8 MB", icon: <FileText size={20} /> },
  { id: 3, title: "Cardiology Division", description: "Cardiovascular product range", type: "PDF", size: "3.1 MB", icon: <FileText size={20} /> },
  { id: 4, title: "Anti-Infectives Division", description: "Antibiotic and antimicrobial products", type: "PDF", size: "5.4 MB", icon: <FileText size={20} /> },
  { id: 5, title: "Diabetology Range", description: "Diabetes management portfolio", type: "PDF", size: "2.9 MB", icon: <FileText size={20} /> },
  { id: 6, title: "Neurology Products", description: "Neurological care solutions", type: "PDF", size: "2.3 MB", icon: <FileText size={20} /> },
  { id: 7, title: "Visual Aids - Flagship Brands", description: "Marketing materials for top brands", type: "ZIP", size: "18.5 MB", icon: <Image size={20} /> },
  { id: 8, title: "Quality Certificates", description: "WHO-GMP, ISO certifications", type: "PDF", size: "1.8 MB", icon: <FileText size={20} /> },
];

export default function DownloadsPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#F6F8FB] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              <span className="gradient-text">Downloads</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Access our product catalogues, brochures, visual aids, and marketing materials.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-4">
            {downloads.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0057B8]/20 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[#0A2540] group-hover:text-[#0057B8] transition-colors">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
                <div className="text-right shrink-0 hidden sm:block">
                  <p className="text-xs text-gray-400">{item.type} • {item.size}</p>
                </div>
                <Button size="sm" variant="outline" className="shrink-0">
                  <Download size={14} /> Download
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
