import React from 'react';
import { X } from 'lucide-react';
import { HospitalManagementSystemLandingPage } from './HospitalManagementSystemLandingPage';

interface Props {
  onClose: () => void;
}

export const HospitalManagementSystemModal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-xl border-b border-[#E5E7EB]">
          <div className="text-xs font-bold uppercase tracking-widest text-[#4B5563] flex items-center gap-2">
            <span className="w-5 h-5 rounded bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">K</span>
            Hospital Management System
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 bg-[#F8FAFC] border border-[#E5E7EB] hover:bg-[#EF4444]/10 rounded-full text-[#64748B] hover:text-[#EF4444] transition-colors">
            <X size={16} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative bg-white">
          <div className="absolute inset-0 pointer-events-none z-[60]" style={{boxShadow: 'inset 0 10px 20px -10px rgba(15,23,42,0.05), inset 0 -10px 20px -10px rgba(15,23,42,0.05)'}}></div>
          <HospitalManagementSystemLandingPage />
        </div>
      </div>
    </div>
  );
};
