import React from 'react';

export const KiaanDentalCoreForms: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-white border-t border-[#E5E7EB]">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-3xl p-5 md:p-12 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-4 text-[#0F172A]">
              Request a <span className="text-[#2563EB]">Live Demo</span>
            </h2>
            <p className="text-[#64748B]">Schedule a 30-minute personalized walkthrough with our product experts.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Full Name</label>
                <input type="text" className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:border-[#2563EB] outline-none transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Company Name</label>
                <input type="text" className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:border-[#2563EB] outline-none transition-colors" placeholder="Acme Corp" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Work Email</label>
                <input type="email" className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:border-[#2563EB] outline-none transition-colors" placeholder="john@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Phone Number</label>
                <input type="tel" className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:border-[#2563EB] outline-none transition-colors" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-[#64748B]">Business Requirements</label>
              <textarea rows={4} className="w-full bg-white border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:border-[#2563EB] outline-none transition-colors resize-none" placeholder="Tell us about your needs..."></textarea>
            </div>
            
            <button type="button" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-[#1D4ED8] transition-colors shadow-md shadow-[#2563EB]/15">
              Schedule My Demo
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};