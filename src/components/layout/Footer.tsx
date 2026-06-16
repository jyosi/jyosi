"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, THERAPEUTIC_AREAS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-5 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Logo.png"
                alt="JYOSI Pharmaceuticals"
                className="h-[300px] w-auto object-contain rounded-lg bg-white p-2"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {COMPANY.tagline} — Committed to delivering quality healthcare solutions 
              across India with 100+ products spanning 10 therapeutic areas.
            </p>
            <div className="space-y-2.5">
              <a href={`tel:${COMPANY.phone}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#00D1B2] transition-colors">
                <Phone size={14} className="shrink-0" />
                {COMPANY.phone}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-[#00D1B2] transition-colors">
                <Mail size={14} className="shrink-0" />
                {COMPANY.email}
              </a>
              <div className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin size={14} className="mt-0.5 shrink-0" />
                <span>{COMPANY.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-[#00D1B2] transition-colors flex items-center gap-1.5 group">
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Therapeutic Areas */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Therapeutic Areas</h4>
            <ul className="space-y-2.5">
              {THERAPEUTIC_AREAS.slice(0, 8).map((area) => (
                <li key={area.slug}>
                  <Link href={`/therapeutic-areas/${area.slug}`} className="text-sm text-gray-300 hover:text-[#00D1B2] transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quality & Trust */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-5">Quality & Trust</h4>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium text-[#00D1B2]">WHO-GMP Certified</p>
                <p className="text-xs text-gray-400 mt-0.5">Manufacturing excellence</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium text-[#00D1B2]">ISO 9001:2015</p>
                <p className="text-xs text-gray-400 mt-0.5">Quality management</p>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <p className="text-sm font-medium text-[#00D1B2]">100+ Products</p>
                <p className="text-xs text-gray-400 mt-0.5">Across 10 therapeutic areas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
