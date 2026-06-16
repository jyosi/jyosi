"use client";

import { motion } from "framer-motion";
import { Package, Users, Download, Mail, TrendingUp, BarChart3, Shield, Settings } from "lucide-react";
import { products, brands } from "@/data/catalog";

const stats = [
  { label: "Total Products", value: products.length.toString(), icon: <Package size={20} />, change: "+12 this month" },
  { label: "Flagship Brands", value: brands.length.toString(), icon: <TrendingUp size={20} />, change: "Active" },
  { label: "Inquiries", value: "156", icon: <Mail size={20} />, change: "+24 this week" },
  { label: "Downloads", value: "1,248", icon: <Download size={20} />, change: "+89 this month" },
];

const recentInquiries = [
  { name: "Dr. Ramesh Kumar", type: "Product Inquiry", product: "NEURORYL-FORTE", date: "2 hours ago" },
  { name: "MedPlus Pharmacy", type: "Distribution", product: "General", date: "5 hours ago" },
  { name: "Dr. Priya Sharma", type: "Brand Inquiry", product: "JYSPRO-DF", date: "1 day ago" },
  { name: "LifeCare Distributors", type: "Partnership", product: "Global", date: "2 days ago" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#F6F8FB]">
      {/* Admin Header */}
      <div className="bg-white border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-[#0A2540]">Admin Dashboard</h1>
            <p className="text-sm text-gray-500">JYOSI Pharmaceuticals Management</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Settings size={20} className="text-gray-500" />
            </button>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0057B8] to-[#00A7C4] flex items-center justify-center">
              <span className="text-white text-sm font-bold">BJ</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#0057B8]/10 flex items-center justify-center text-[#0057B8]">
                  {stat.icon}
                </div>
                <span className="text-xs text-green-600 font-medium">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-[#0A2540]">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Inquiries */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-white border border-gray-100">
            <h2 className="text-lg font-bold text-[#0A2540] mb-4">Recent Inquiries</h2>
            <div className="space-y-4">
              {recentInquiries.map((inquiry) => (
                <div key={inquiry.name} className="flex items-center justify-between p-4 rounded-xl hover:bg-[#F6F8FB] transition-colors">
                  <div>
                    <p className="font-medium text-[#0A2540]">{inquiry.name}</p>
                    <p className="text-sm text-gray-500">{inquiry.type} • {inquiry.product}</p>
                  </div>
                  <span className="text-xs text-gray-400">{inquiry.date}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-6 rounded-2xl bg-white border border-gray-100">
            <h2 className="text-lg font-bold text-[#0A2540] mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {[
                { icon: <Package size={16} />, label: "Add Product", color: "bg-blue-50 text-blue-600" },
                { icon: <TrendingUp size={16} />, label: "Add Brand", color: "bg-green-50 text-green-600" },
                { icon: <Users size={16} />, label: "View Inquiries", color: "bg-purple-50 text-purple-600" },
                { icon: <Download size={16} />, label: "Upload Brochure", color: "bg-orange-50 text-orange-600" },
                { icon: <BarChart3 size={16} />, label: "View Analytics", color: "bg-cyan-50 text-cyan-600" },
                { icon: <Shield size={16} />, label: "Manage SEO", color: "bg-red-50 text-red-600" },
              ].map((action) => (
                <button key={action.label} className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#F6F8FB] transition-colors text-left">
                  <div className={`w-8 h-8 rounded-lg ${action.color} flex items-center justify-center`}>
                    {action.icon}
                  </div>
                  <span className="text-sm font-medium text-[#0A2540]">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
