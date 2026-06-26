import React from 'react';
import { Check } from 'lucide-react';

export const HospitalManagementSystemPricing: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4 text-[#0F172A]">
            Simple <span className="text-[#2563EB]">Pricing</span>
          </h2>
          <p className="text-[#64748B] text-lg font-medium">Scalable plans tailored for businesses of all sizes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Free', 'Starter', 'Professional', 'Enterprise'].map((tier, i) => (
            <div key={i} className={`bg-[#F8FAFC] border ${i === 2 ? 'border-[#2563EB] shadow-lg shadow-[#2563EB]/10' : 'border-[#E5E7EB]'} rounded-[16px] p-6 relative hover:shadow-md transition-shadow`}>
              {i === 2 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2563EB] text-white text-[9px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm">Most Popular</div>}
              
              <h3 className="text-2xl font-bold text-[#0F172A] mb-2">{tier}</h3>
              <div className="text-[#64748B] text-sm mb-6">Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small' : i === 2 ? 'growing' : 'large'} teams</div>
              
              <div className="text-4xl font-display font-bold text-[#0F172A] mb-8">
                {i === 0 ? '$0' : i === 1 ? '$9' : i === 2 ? '$19' : '$29'}
                <span className="text-lg text-[#64748B] font-sans">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[1,2,3,4,5].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-[#4B5563] text-sm">
                     <div className="w-5 h-5 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#2563EB] shrink-0">
                       <Check size={12} strokeWidth={3} />
                     </div>
                    Feature Include {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-bold uppercase tracking-wider text-xs transition-colors ${i === 2 ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]' : 'bg-white border border-[#2563EB] text-[#2563EB] hover:bg-[#EFF6FF]'}`}>
                {i === 0 ? 'Get Started' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
