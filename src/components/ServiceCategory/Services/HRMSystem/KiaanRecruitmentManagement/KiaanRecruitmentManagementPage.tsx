"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, Users, Activity, Settings, Bell, Search, 
  Menu, X, BarChart3, PieChart, TrendingUp, DollarSign, Calendar
} from 'lucide-react';

export const KiaanRecruitmentManagementPage: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-[#0a0a0a] text-white flex overflow-hidden font-sans">
      
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        className="w-64 bg-[#111] border-r border-white/5 flex flex-col fixed inset-y-0 left-0 z-50 md:relative transition-all duration-300"
      >
        <div className="p-6 flex items-center justify-between border-b border-white/5">
          <div className="text-xl font-display font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center">K</span>
            <span className="text-white">Workspace</span>
          </div>
          <button className="md:hidden" onClick={() => setSidebarOpen(false)}>
            <X size={20} className="text-zinc-400" />
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { icon: LayoutDashboard, label: "Overview", active: true },
            { icon: Users, label: "Customers & Staff" },
            { icon: Activity, label: "Live Operations" },
            { icon: BarChart3, label: "Analytics" },
            { icon: Calendar, label: "Schedules" },
            { icon: DollarSign, label: "Finances" },
          ].map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors"
            >
              <item.icon size={20} />
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:bg-white/5 hover:text-zinc-200 cursor-pointer">
            <Settings size={20} />
            <span className="text-sm">Settings</span>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden transition-all duration-300">
        
        {/* Top Header */}
        <header className="h-20 bg-[#111]/80 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 z-40 sticky top-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-zinc-400 hover:text-white">
              <Menu size={24} />
            </button>
            <div className="hidden md:flex items-center gap-2 bg-black/50 border border-white/10 rounded-full px-4 py-2 w-64 focus-within:border-yellow-500/50 focus-within:bg-white/5 transition-all">
              <Search size={16} className="text-zinc-500" />
              <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-full text-white placeholder-zinc-500" />
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link href="/software-services">
              <button className="text-xs font-bold uppercase tracking-wider text-yellow-500 hover:text-white transition-colors">
                Exit Demo
              </button>
            </Link>
            <button className="relative text-zinc-400 hover:text-white">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 to-red-600 p-[2px] cursor-pointer">
              <div className="w-full h-full bg-black rounded-full border-2 border-black overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Admin" alt="Admin" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-6 md:p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-white mb-2">Welcome Back, Admin</h1>
            <p className="text-zinc-400">Here is what is happening with your operations today.</p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Users", value: "24,592", change: "+12.5%", positive: true },
              { title: "Active Sessions", value: "1,432", change: "+5.2%", positive: true },
              { title: "System Health", value: "99.9%", change: "Optimal", positive: true },
              { title: "Pending Actions", value: "14", change: "-2.1%", positive: false }
            ].map((metric, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white/5 border border-white/5 rounded-2xl p-6"
              >
                <h3 className="text-zinc-400 text-sm font-medium mb-4">{metric.title}</h3>
                <div className="flex items-end justify-between">
                  <span className="text-3xl font-display font-bold text-white">{metric.value}</span>
                  <span className="text-xs font-bold">
                    {metric.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Chart Area */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 bg-white/5 border border-white/5 rounded-3xl p-5 min-h-[400px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-bold text-white">Activity Overview</h3>
                <select className="bg-black border border-white/10 rounded-lg px-3 py-1.5 text-sm text-zinc-400 outline-none">
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                  <option>This Year</option>
                </select>
              </div>
              <div className="flex-1 border-b border-l border-white/10 relative">
                {/* Mock Chart Lines */}
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                  <path d="M0,200 C50,150 100,250 150,100 C200,-50 250,200 300,150 C350,100 400,250 500,50 L500,300 L0,300 Z" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,1)" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                  <path d="M0,250 C100,200 200,300 300,200 C400,100 450,250 500,150" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="5,5" vectorEffect="non-scaling-stroke" />
                </svg>
              </div>
              <div className="flex justify-between mt-4 text-xs text-zinc-500 font-mono">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </motion.div>

            {/* Side Panel */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/5 border border-white/5 rounded-3xl p-5 flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
              <div className="space-y-6 flex-1">
                {[
                  { text: "New user registered", time: "2 mins ago", type: "user" },
                  { text: "System backup completed", time: "1 hour ago", type: "system" },
                  { text: "Payment processed successfully", time: "3 hours ago", type: "payment" },
                  { text: "Security scan finished", time: "5 hours ago", type: "system" },
                ].map((log, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-2 h-2 mt-2 rounded-full" />
                    <div>
                      <p className="text-sm text-zinc-200">{log.text}</p>
                      <span className="text-xs text-zinc-500">{log.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 rounded-xl border border-white/10 text-zinc-400 text-sm hover:text-white hover:bg-white/5 transition-colors mt-6">
                View All Logs
              </button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}