"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-[#F8FAFF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A2540]">Our Leadership</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* CEO - B. Jyothi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#0057B8] to-[#00A7C4]" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">BJ</span>
                </div>
                <Quote size={24} className="text-[#0057B8]/20 mb-3" />
                <blockquote className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-5">
                  &ldquo;Quality healthcare is a fundamental right. We are committed to 
                  innovation, integrity, and delivering trusted pharmaceutical solutions 
                  that improve lives.&rdquo;
                </blockquote>
                <p className="text-lg sm:text-xl font-bold text-[#0A2540]">B. Jyothi</p>
                <p className="text-sm text-[#0057B8] font-medium">CEO & Founder</p>
                <p className="text-xs text-gray-400 mt-2">📞 +91 7675903022</p>
              </div>
            </div>
          </motion.div>

          {/* MD - B. Murali */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative rounded-2xl sm:rounded-3xl bg-white border border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#00A7C4] to-[#00D1B2]" />
            <div className="p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-[#00A7C4] to-[#00D1B2] flex items-center justify-center mb-4">
                  <span className="text-white text-2xl sm:text-3xl font-bold">BM</span>
                </div>
                <Quote size={24} className="text-[#00A7C4]/20 mb-3" />
                <blockquote className="text-sm sm:text-base text-gray-600 italic leading-relaxed mb-5">
                  &ldquo;Our vision is to build a globally recognized pharmaceutical company 
                  delivering affordable and accessible healthcare solutions to every 
                  community.&rdquo;
                </blockquote>
                <p className="text-lg sm:text-xl font-bold text-[#0A2540]">B. Murali</p>
                <p className="text-sm text-[#00A7C4] font-medium">Managing Director</p>
                <p className="text-xs text-gray-400 mt-2">📞 +91 6300650229</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
