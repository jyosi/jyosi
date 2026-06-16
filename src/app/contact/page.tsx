"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#F6F8FB] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Whether you are a healthcare professional, distributor, or have a general 
              inquiry, we are here to help.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#0A2540]">Contact Information</h2>
              <div className="space-y-4">
                <a href={`tel:${COMPANY.phone}`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F6F8FB] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0A2540]">Phone</p>
                    <p className="text-sm text-gray-600">{COMPANY.phone}</p>
                  </div>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F6F8FB] transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0A2540]">Email</p>
                    <p className="text-sm text-gray-600">{COMPANY.email}</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0A2540]">Address</p>
                    <p className="text-sm text-gray-600">{COMPANY.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#0A2540]">Business Hours</p>
                    <p className="text-sm text-gray-600">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-3 pt-4">
                <a href={`https://wa.me/917670903022`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle size={16} /> WhatsApp Us
                  </Button>
                </a>
                <a href={`tel:${COMPANY.phone}`}>
                  <Button variant="outline" className="w-full mt-3">
                    <Phone size={16} /> Call Now
                  </Button>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="p-8 rounded-2xl bg-[#F6F8FB] border border-gray-100">
                <h2 className="text-2xl font-bold text-[#0A2540] mb-6">Send Us a Message</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Inquiry Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all">
                      <option>Product Inquiry</option>
                      <option>Distribution Partnership</option>
                      <option>Career Opportunity</option>
                      <option>General Inquiry</option>
                      <option>Complaint / Feedback</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all" placeholder="Brief subject of your message" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea rows={5} required className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white focus:border-[#0057B8] focus:ring-2 focus:ring-[#0057B8]/20 outline-none transition-all resize-none" placeholder="Tell us how we can help you..." />
                  </div>
                  <div className="md:col-span-2">
                    <Button size="lg" className="w-full md:w-auto">Send Message</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="mt-16 rounded-2xl overflow-hidden border border-gray-100 h-80">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5!2d78.55!3d17.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzAwLjAiTiA3OMKwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="JYOSI Pharmaceuticals Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
