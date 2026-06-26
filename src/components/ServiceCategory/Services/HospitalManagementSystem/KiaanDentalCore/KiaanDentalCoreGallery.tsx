import React from 'react';

export const KiaanDentalCoreGallery: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center text-[#0F172A]">
          Product <span className="text-[#2563EB]">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl aspect-[16/10] overflow-hidden group relative hover:border-[#2563EB]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#94A3B8] font-bold uppercase tracking-widest">Mockup Image {i}</span>
              </div>
              <div className="absolute inset-0 bg-[#2563EB]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};