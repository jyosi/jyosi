"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, Award, Users, TrendingUp, Shield, Microscope } from "lucide-react";

const timeline = [
  { year: "Founded", event: "JYOSI Pharmaceuticals established in Hyderabad with a vision to provide quality healthcare." },
  { year: "Growth", event: "Expanded product portfolio to 100+ products across multiple therapeutic areas." },
  { year: "Certification", event: "Achieved WHO-GMP and ISO 9001:2015 certifications for manufacturing excellence." },
  { year: "Expansion", event: "Launched flagship brands RNA+, JYSPRO-DF and expanded Pan-India distribution." },
  { year: "Present", event: "500+ products across 12 therapeutic areas serving healthcare needs nationwide." },
];

const values = [
  { icon: <Shield size={24} />, title: "Integrity", description: "We maintain the highest ethical standards in everything we do." },
  { icon: <Microscope size={24} />, title: "Innovation", description: "We continuously invest in R&D for better formulations." },
  { icon: <Users size={24} />, title: "Patient First", description: "Every decision we make starts with patient outcomes." },
  { icon: <Award size={24} />, title: "Excellence", description: "We strive for excellence in quality and service delivery." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#F6F8FB] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2540] mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#0057B8] to-[#00A7C4] bg-clip-text text-transparent">
                JYOSI Pharmaceuticals
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded with a commitment to deliver quality healthcare, JYOSI Pharmaceuticals 
              has grown into a trusted name in the Indian pharmaceutical industry with 
              a comprehensive portfolio serving patients across the nation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white"
          >
            <Eye size={32} className="mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-white/90 leading-relaxed">
              To become a globally recognized pharmaceutical company delivering innovative, 
              affordable, and accessible healthcare solutions that improve the quality of 
              life for patients worldwide.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#F6F8FB] border border-gray-100"
          >
            <Target size={32} className="mb-4 text-[#0057B8]" />
            <h2 className="text-2xl font-bold text-[#0A2540] mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To develop, manufacture, and market high-quality pharmaceutical products 
              with unwavering commitment to patient safety, scientific excellence, 
              and ethical business practices across all therapeutic segments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center mb-6">
              <span className="text-white text-2xl font-bold">BJ</span>
            </div>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Leadership Message</h2>
            <blockquote className="text-lg text-gray-600 italic leading-relaxed mb-6">
              &ldquo;At JYOSI Pharmaceuticals, we believe that quality healthcare is a fundamental 
              right. As the makers of RNA+, our mission is to bridge the gap between advanced 
              pharmaceutical science and affordable patient care. We are committed to innovation, 
              quality, and expanding our reach to serve healthcare needs across India with 
              integrity and compassion.&rdquo;
            </blockquote>
            <p className="font-bold text-[#0A2540] text-lg">B. Jyothi</p>
            <p className="text-sm text-[#0057B8] font-medium">CEO & Founder, JYOSI Pharmaceuticals</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <span>📞 7675903022</span>
              <span>✉️ jyosipharma1@gmail.com</span>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              D.No. 4-1-62/1, Snehapuri Colony, Nacharam, Hyderabad - 500 076
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-16"
          >
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl hover:bg-[#F6F8FB] transition-colors"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] mb-4">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0A2540] mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#0A2540] text-center mb-16"
          >
            Our Growth Journey
          </motion.h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-6"
              >
                <div className="w-20 shrink-0 text-right">
                  <span className="text-sm font-bold text-[#0057B8]">{item.year}</span>
                </div>
                <div className="w-3 h-3 mt-1.5 rounded-full bg-[#0057B8] shrink-0" />
                <p className="text-gray-600">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
