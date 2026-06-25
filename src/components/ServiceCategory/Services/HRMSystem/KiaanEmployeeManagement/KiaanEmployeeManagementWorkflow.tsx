import React from 'react';
import { ArrowDown } from 'lucide-react';

export const KiaanEmployeeManagementWorkflow: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8">
          Seamless <span className="text-yellow-500">Workflow</span>
        </h2>
        
        <div className="flex flex-col items-center gap-4 relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-white/10 -translate-x-1/2"></div>
          
          {['Data Initialization', 'Automated Processing', 'Real-Time Sync', 'Analytics & Reporting', 'Actionable Insights'].map((step, i) => (
            <React.Fragment key={i}>
              <div className="bg-zinc-900 border border-white/10 px-6 py-2.5 text-sm rounded-full relative z-10 w-64 shadow-xl">
                <span className="text-yellow-500 font-bold mr-2">0{i+1}.</span>
                <span className="text-white font-medium">{step}</span>
              </div>
              {i < 4 && <ArrowDown size={24} className="text-zinc-600 relative z-10 my-2" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};