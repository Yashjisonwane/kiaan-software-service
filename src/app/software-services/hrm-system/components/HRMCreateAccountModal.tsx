import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: string;
  availablePlans?: string[];
}

export const HRMCreateAccountModal: React.FC<Props> = ({ isOpen, onClose, selectedPlan, availablePlans = [] }) => {
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
            className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl p-6 shadow-[0_0_50px_rgba(234,179,8,0.15)] overflow-hidden max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Glow effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" />
            
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-zinc-400 hover:text-white transition-colors z-20"
            >
              <X size={24} />
            </button>

            <div className="relative z-10">
              <h2 className="text-2xl font-display font-bold text-white mb-2 uppercase pr-8">Create Account</h2>
              <p className="text-zinc-400 text-sm mb-6">Join Kiaan Technology to manage your business.</p>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Selected Plan</label>
                  <select 
                    value={currentPlan} 
                    onChange={(e) => setCurrentPlan(e.target.value)} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-yellow-500 font-bold focus:outline-none focus:border-yellow-500 transition-colors text-sm appearance-none"
                  >
                    {availablePlans.length > 0 ? (
                      availablePlans.map((plan, i) => (
                        <option className="bg-[#0a0a0a] text-yellow-500" key={i} value={plan}>{plan}</option>
                      ))
                    ) : (
                      <>
                        <option className="bg-[#0a0a0a] text-yellow-500" value="10 Days Free Trial ($0)">10 Days Free Trial ($0)</option>
                        <option className="bg-[#0a0a0a] text-yellow-500" value="Premium - 5 Users ($9/month)">Premium - 5 Users ($9/month)</option>
                        <option className="bg-[#0a0a0a] text-yellow-500" value="Premium - 12 Users ($19/month)">Premium - 12 Users ($19/month)</option>
                        <option className="bg-[#0a0a0a] text-yellow-500" value="Premium - 25 Users ($29/month)">Premium - 25 Users ($29/month)</option>
                      </>
                    )}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Select Service</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm appearance-none">
                    <option className="bg-[#0a0a0a] text-white" value="">Choose a specific service...</option>
                    <option className="bg-[#0a0a0a] text-white" value="Kiaan Payroll Pro">Kiaan Payroll Pro</option>
                    <option className="bg-[#0a0a0a] text-white" value="Kiaan Attendance Hub">Kiaan Attendance Hub</option>
                    <option className="bg-[#0a0a0a] text-white" value="Kiaan Recruiting">Kiaan Recruiting</option>
                    <option className="bg-[#0a0a0a] text-white" value="Kiaan Employee Portal">Kiaan Employee Portal</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-zinc-300 mb-1 uppercase tracking-wider">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 transition-colors text-sm" />
                </div>

                <button 
                  type="button"
                  onClick={onClose}
                  className="w-full bg-gradient-to-r from-yellow-500 to-red-600 text-white font-bold uppercase tracking-wider py-4 rounded-xl mt-6 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-shadow duration-300 text-sm"
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