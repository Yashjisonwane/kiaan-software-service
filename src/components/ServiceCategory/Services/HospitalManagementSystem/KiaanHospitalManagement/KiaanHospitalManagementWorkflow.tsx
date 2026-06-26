import React from 'react';
import { ArrowDown } from 'lucide-react';

export const KiaanHospitalManagementWorkflow: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-[#0F172A]">
          Seamless <span className="text-[#2563EB]">Workflow</span>
        </h2>
        
        <div className="flex flex-col items-center gap-4 relative">
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-[#2563EB]/10 -translate-x-1/2"></div>
          
          {['Data Initialization', 'Automated Processing', 'Real-Time Sync', 'Analytics & Reporting', 'Actionable Insights'].map((step, i) => (
            <React.Fragment key={i}>
              <div className="bg-[#F8FAFC] border border-[#E5E7EB] px-6 py-3.5 text-sm rounded-full relative z-10 w-72 shadow-md hover:border-[#2563EB]/30 transition-all hover:shadow-lg">
                <span className="text-[#2563EB] font-bold mr-2">0{i+1}.</span>
                <span className="text-[#0F172A] font-semibold">{step}</span>
              </div>
              {i < 4 && <ArrowDown size={24} className="text-[#60A5FA] relative z-10 my-2" />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};