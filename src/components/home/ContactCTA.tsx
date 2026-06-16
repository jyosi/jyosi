"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0057B8] to-[#00A7C4]" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      {/* Glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#00D1B2]/10 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-7"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Partner With Us for<br className="hidden sm:block" /> Better Healthcare
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Whether you are a distributor, healthcare professional, or institutional buyer — 
            let&apos;s collaborate.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link href="/contact">
              <Button variant="white" size="lg" className="btn-shine group w-full sm:w-auto">
                Get In Touch
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href={`tel:${COMPANY.phone}`}>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto">
                <Phone size={16} />
                {COMPANY.phone}
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
