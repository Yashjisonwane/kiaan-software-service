import React from 'react';
import { X } from 'lucide-react';
import { KiaanDentalCoreLandingPage } from './KiaanDentalCoreLandingPage';

interface Props {
  onClose: () => void;
}

export const KiaanDentalCoreModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-2 bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#64748B] flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">K</span>
            Hospital Management System
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 bg-[#F1F5F9] hover:bg-red-500/20 rounded-full text-[#64748B] hover:text-red-500 transition-colors">
            <X size={16} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative bg-white">
          <div className="absolute inset-0 pointer-events-none z-[60]" style={{boxShadow: 'inset 0 10px 20px -10px rgba(0,0,0,0.05), inset 0 -10px 20px -10px rgba(0,0,0,0.05)'}}></div>
          <KiaanDentalCoreLandingPage />
        </div>
      </div>
    </div>
  );
};
