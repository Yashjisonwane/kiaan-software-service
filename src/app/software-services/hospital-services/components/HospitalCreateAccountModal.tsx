import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  availablePlans?: string[];
}

export const HospitalCreateAccountModal: React.FC<Props> = ({ isOpen, onClose, selectedPlan, availablePlans = [] }) => {
  const [currentPlan, setCurrentPlan] = useState(selectedPlan);

  useEffect(() => {
    setCurrentPlan(selectedPlan);
  }, [selectedPlan, isOpen]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-white border border-[#E5E7EB] rounded-3xl p-6 shadow-[0_8px_30px_rgba(15,23,42,0.08)] overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-[#2563EB]/5 to-transparent pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#64748B] hover:text-[#0F172A] transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-[#0F172A] mb-2 uppercase pr-8">Create Account</h2>
              <p className="text-[#64748B] text-sm mb-6">Join Kiaan Technology to manage your business.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1 uppercase tracking-wider">Selected Plan</label>
                  <select 
                    value={currentPlan} 
                    onChange={(e) => setCurrentPlan(e.target.value)} 
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#2563EB] font-bold focus:outline-none focus:border-[#2563EB] transition-colors text-sm appearance-none"
                  >
                    {availablePlans.length > 0 ? (
                      availablePlans.map((plan, i) => (
                        <option className="bg-white text-[#2563EB]" key={i} value={plan}>{plan}</option>
                      ))
                    ) : (
                      <>
                        <option className="bg-white text-[#2563EB]" value="10 Days Free Trial ($0)">10 Days Free Trial ($0)</option>
                        <option className="bg-white text-[#2563EB]" value="Premium - 5 Users ($9/month)">Premium - 5 Users ($9/month)</option>
                        <option className="bg-white text-[#2563EB]" value="Premium - 12 Users ($19/month)">Premium - 12 Users ($19/month)</option>
                        <option className="bg-white text-[#2563EB]" value="Premium - 25 Users ($29/month)">Premium - 25 Users ($29/month)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1 uppercase tracking-wider">Select Service</label>
                  <select className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] focus:outline-none focus:border-[#2563EB] transition-colors text-sm appearance-none">
                    <option className="bg-white text-[#0F172A]" value="">Choose a specific service...</option>
                    <option className="bg-white text-[#0F172A]" value="Kiaan Hospital Management">Kiaan Hospital Management</option>
                    <option className="bg-white text-[#0F172A]" value="Kiaan Dental Core">Kiaan Dental Core</option>
                    <option className="bg-white text-[#0F172A]" value="Kiaan Pharmacy Sync">Kiaan Pharmacy Sync</option>
                    <option className="bg-white text-[#0F172A]" value="Kiaan Dental Clinic">Kiaan Dental Clinic</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B5563] mb-1 uppercase tracking-wider">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-3 text-[#0F172A] placeholder-zinc-400 focus:outline-none focus:border-[#2563EB] focus:bg-white transition-colors text-sm" />
                </div>

                <button 
                  type="button"
                  onClick={onClose}
                  className="w-full bg-[#2563EB] text-white font-bold uppercase tracking-wider py-4 rounded-xl mt-6 hover:bg-[#1D4ED8] transition-colors duration-300 text-sm shadow-md shadow-[#2563EB]/15"
                >
                  Create Account
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};