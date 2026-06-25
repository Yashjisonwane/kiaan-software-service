import React from 'react';
import { Layers, Activity, Shield, Zap, RefreshCw, BarChart } from 'lucide-react';

export const KiaanLeadManagementFeatures: React.FC = () => {
  const features = [
    { icon: Layers, title: "Centralized Dashboard", desc: "Manage everything from a single intuitive interface." },
    { icon: Activity, title: "Live Tracking", desc: "Monitor all operations in real-time without delays." },
    { icon: Shield, title: "Role-Based Access", desc: "Secure your data with granular user permissions." },
    { icon: Zap, title: "Task Automation", desc: "Eliminate repetitive work with automated rules." },
    { icon: RefreshCw, title: "API Integrations", desc: "Connect with your existing third-party tools seamlessly." },
    { icon: BarChart, title: "Advanced Reports", desc: "Generate custom reports and export them instantly." }
  ];

  return (
    <section className="py-12 px-6 bg-black">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center">
          Core <span className="text-yellow-500">Modules</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors">
              <feat.icon size={32} className="text-yellow-500 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};