"use client";

import { motion } from "framer-motion";
import { Shield, Microscope, Users, Award, Truck, HeartPulse } from "lucide-react";

const features = [
  { icon: <Shield size={26} />, title: "Quality Assurance", description: "WHO-GMP certified manufacturing with rigorous quality control at every stage." },
  { icon: <Microscope size={26} />, title: "Research & Innovation", description: "Continuous R&D investment for advanced formulations and drug delivery." },
  { icon: <Users size={26} />, title: "Customer Trust", description: "Trusted by thousands of healthcare professionals and pharmacies." },
  { icon: <Award size={26} />, title: "ISO Certified", description: "ISO 9001:2015 certified ensuring consistent product quality." },
  { icon: <Truck size={26} />, title: "Global Reach", description: "Extensive distribution ensuring timely availability globally." },
  { icon: <HeartPulse size={26} />, title: "Patient Centric", description: "Affordable, accessible healthcare with patient outcomes as priority." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-b from-[#0057B8]/3 to-transparent blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2540] mb-4">
            Why Choose JYOSI?
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            Built on quality, innovation, and trust — delivering healthcare excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="card-premium group relative p-7 rounded-2xl bg-[#F8FAFF] border border-gray-100 hover:bg-gradient-to-br hover:from-[#0057B8] hover:to-[#00A7C4] hover:border-transparent"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-[#0057B8] group-hover:bg-white/20 group-hover:text-white group-hover:shadow-none transition-all duration-400 mb-5">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-white transition-colors mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 group-hover:text-white/80 transition-colors leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
