"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function CEOSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8FAFF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] to-[#0057B8]" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

          <div className="relative p-8 sm:p-10 md:p-14 lg:p-16">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* CEO Avatar */}
              <div className="shrink-0">
                <div className="relative">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-[#00A7C4] to-[#00D1B2] flex items-center justify-center shadow-xl shadow-[#00A7C4]/20">
                    <span className="text-white text-3xl md:text-4xl font-bold">BJ</span>
                  </div>
                  {/* Ring accent */}
                  <div className="absolute inset-0 rounded-full border-2 border-white/20 scale-110" />
                </div>
              </div>

              {/* Message */}
              <div className="text-center md:text-left flex-1">
                <Quote size={28} className="text-[#00D1B2]/40 mb-4 mx-auto md:mx-0" />
                <blockquote className="text-base md:text-lg text-white/85 italic leading-relaxed mb-6">
                  &ldquo;At JYOSI Pharmaceuticals, we are committed to making quality healthcare 
                  accessible to all. As makers of RNA+, our focus remains on innovation, 
                  integrity, and delivering trusted pharmaceutical solutions that improve 
                  lives across India.&rdquo;
                </blockquote>
                <div>
                  <p className="text-xl font-bold text-white">B. Jyothi</p>
                  <p className="text-sm text-[#00D1B2] font-medium mt-1">CEO & Founder, JYOSI Pharmaceuticals</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
