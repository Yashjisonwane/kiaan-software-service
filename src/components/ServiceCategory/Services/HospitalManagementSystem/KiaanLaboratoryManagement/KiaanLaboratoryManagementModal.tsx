import React from 'react';
import { X } from 'lucide-react';
import { KiaanLaboratoryManagementLandingPage } from './KiaanLaboratoryManagementLandingPage';

interface Props {
  onClose: () => void;
}

export const KiaanLaboratoryManagementModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5">
          <div className="text-xs font-bold uppercase tracking-widest text-zinc-400 flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-yellow-500 text-black flex items-center justify-center text-[10px]">K</span>
            Hospital Management System
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 bg-white/5 hover:bg-red-500/20 rounded-full text-zinc-500 hover:text-red-500 transition-colors">
            <X size={16} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="absolute inset-0 pointer-events-none z-[60]" style={{boxShadow: 'inset 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 -10px 20px -10px rgba(0,0,0,0.5)'}}></div>
          <KiaanLaboratoryManagementLandingPage />
        </div>
      </div>
    </div>
  );
};
