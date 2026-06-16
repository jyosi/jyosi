"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Briefcase, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { id: 1, title: "Medical Representative", location: "Hyderabad, Telangana", type: "Full-time", department: "Sales", experience: "1-3 years" },
  { id: 2, title: "Area Sales Manager", location: "Multiple Locations", type: "Full-time", department: "Sales", experience: "5-8 years" },
  { id: 3, title: "Quality Control Analyst", location: "Hyderabad", type: "Full-time", department: "Quality", experience: "2-4 years" },
  { id: 4, title: "Production Pharmacist", location: "Hyderabad", type: "Full-time", department: "Manufacturing", experience: "3-5 years" },
  { id: 5, title: "Marketing Executive", location: "Hyderabad", type: "Full-time", department: "Marketing", experience: "2-4 years" },
];

export default function CareersPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
            <p className="text-xl text-white/80 max-w-2xl">
              Build your career with a growing pharmaceutical company committed to healthcare excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A2540] text-center mb-12">Why Join JYOSI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Users size={24} />, title: "Growing Team", desc: "Be part of a rapidly expanding organization." },
              { icon: <Briefcase size={24} />, title: "Career Growth", desc: "Clear career progression and development." },
              { icon: <Clock size={24} />, title: "Work-Life Balance", desc: "Healthy work environment and culture." },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-[#F6F8FB]">
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8] mb-4">{item.icon}</div>
                <h3 className="font-bold text-[#0A2540] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-[#F6F8FB]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-[#0057B8]/20 transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-[#0A2540] group-hover:text-[#0057B8] transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-500">
                      <span className="flex items-center gap-1"><MapPin size={14} />{job.location}</span>
                      <span className="flex items-center gap-1"><Clock size={14} />{job.type}</span>
                      <span className="flex items-center gap-1"><Briefcase size={14} />{job.experience}</span>
                    </div>
                  </div>
                  <Button size="sm" className="shrink-0 w-full md:w-auto">
                    Apply Now <ArrowRight size={14} />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Application */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-[#0057B8] to-[#00A7C4] text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Don&apos;t see a suitable role?</h3>
            <p className="text-white/80 mb-6">Send us your resume and we&apos;ll get back to you when a matching position opens up.</p>
            <Button variant="white" size="lg">Submit Resume</Button>
          </div>
        </div>
      </section>
    </>
  );
}
