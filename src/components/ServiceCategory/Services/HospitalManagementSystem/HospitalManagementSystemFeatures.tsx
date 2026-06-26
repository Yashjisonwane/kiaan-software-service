import React from 'react';
import { Layers, Activity, Shield, Zap, RefreshCw, BarChart } from 'lucide-react';

export const HospitalManagementSystemFeatures: React.FC = () => {
  const features = [
    { icon: Layers, title: "Centralized Dashboard", desc: "Manage everything from a single intuitive interface." },
    { icon: Activity, title: "Live Tracking", desc: "Monitor all operations in real-time without delays." },
    { icon: Shield, title: "Role-Based Access", desc: "Secure your data with granular user permissions." },
    { icon: Zap, title: "Task Automation", desc: "Eliminate repetitive work with automated rules." },
    { icon: RefreshCw, title: "API Integrations", desc: "Connect with your existing third-party tools seamlessly." },
    { icon: BarChart, title: "Advanced Reports", desc: "Generate custom reports and export them instantly." }
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center text-[#0F172A]">
          Core <span className="text-[#2563EB]">Modules</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-5 hover:bg-white hover:border-[#2563EB]/30 transition-all duration-200 hover:shadow-lg hover:shadow-[#2563EB]/5 group">
              <div className="p-2 bg-[#2563EB]/10 text-[#2563EB] rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:bg-[#2563EB] group-hover:text-white transition-colors duration-200">
                <feat.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{feat.title}</h3>
              <p className="text-[#64748B] leading-relaxed text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};