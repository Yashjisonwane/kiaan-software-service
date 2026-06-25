import React from 'react';

export const KiaanLeadManagementForms: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-black border-t border-white/5">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-zinc-900 border border-white/10 rounded-3xl p-5 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4 text-white">
              Request a <span className="text-yellow-500">Live Demo</span>
            </h2>
            <p className="text-zinc-400">Schedule a 30-minute personalized walkthrough with our product experts.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Full Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Company Name</label>
                <input type="text" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none transition-colors" placeholder="Acme Corp" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Work Email</label>
                <input type="email" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone Number</label>
                <input type="tel" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Business Requirements</label>
              <textarea rows={4} className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-yellow-500 outline-none transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
            </div>
            
            <button type="button" className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors">
              Schedule My Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};