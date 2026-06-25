import React from 'react';
import { Check } from 'lucide-react';

export const KiaanLaboratoryManagementPricing: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4">
            Simple <span className="text-yellow-500">Pricing</span>
          </h2>
          <p className="text-zinc-400 text-lg">Scalable plans tailored for businesses of all sizes.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {['Free', 'Starter', 'Professional', 'Enterprise'].map((tier, i) => (
            <div key={i} className={`bg-zinc-900 border ${i === 2 ? 'border-yellow-500' : 'border-white/5'} rounded-3xl p-5 relative`}>
              {i === 2 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full">Most Popular</div>}
              
              <h3 className="text-2xl font-bold text-white mb-2">{tier}</h3>
              <div className="text-zinc-400 text-sm mb-6">Perfect for {i === 0 ? 'individuals' : i === 1 ? 'small' : i === 2 ? 'growing' : 'large'} teams</div>
              
              <div className="text-4xl font-display font-bold text-white mb-8">
                {i === 0 ? '$0' : i === 1 ? '$9' : i === 2 ? '$19' : '$29'}
                <span className="text-lg text-zinc-500 font-sans">/mo</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[1,2,3,4,5].map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-zinc-300 text-sm">
                    <Check size={16} className="text-yellow-500" />
                    Feature Include {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-colors ${i === 2 ? 'bg-yellow-500 text-black hover:bg-white' : 'bg-transparent border border-white/10 text-white hover:bg-white/5'}`}>
                {i === 0 ? 'Get Started' : 'Start Free Trial'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
