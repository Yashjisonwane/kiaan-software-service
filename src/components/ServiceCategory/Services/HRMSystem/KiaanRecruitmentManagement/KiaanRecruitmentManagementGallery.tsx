import React from 'react';

export const KiaanRecruitmentManagementGallery: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center">
          Product <span className="text-yellow-500">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1,2,3,4].map((i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-2xl aspect-[16/10] overflow-hidden group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-zinc-600 font-bold uppercase tracking-widest">Mockup Image {i}</span>
              </div>
              <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};