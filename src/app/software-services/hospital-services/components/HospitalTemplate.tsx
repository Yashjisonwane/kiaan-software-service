import React from 'react';
import { motion } from 'framer-motion';
import { SoftwareLandingDetails } from '@/components/SoftwareLanding/SoftwareLandingDetails';
import { HospitalFeatureCards } from './HospitalFeatureCards';
import { HospitalPricingSection, HospitalPricingPlan } from './HospitalPricingSection';
import Link from 'next/link';
import { X } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  features?: any[];
  pricingPlans?: HospitalPricingPlan[];
  pricingSubtitle?: string;
}

export const HospitalTemplate: React.FC<Props> = ({ title, description, features, pricingPlans, pricingSubtitle }) => {
  return (
    <div className="min-h-screen bg-white text-[#111827] relative overflow-hidden font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none animated-grid opacity-[0.03]"></div>

      <div className="relative z-10 pt-24 pb-4 px-6">
        <div className="container mx-auto">
          {/* Cut / Close Navigation */}
          <Link href="/software-services">
            <button className="absolute top-6 right-6 lg:top-8 lg:right-10 z-50 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-md border border-[#E5E7EB] text-[#64748B] hover:text-[#2563EB] hover:border-[#2563EB]/50 hover:bg-[#2563EB]/50 hover:scale-110 transition-all duration-300 shadow-lg group">
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </Link>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-2 text-[#0F172A]"
            >
              {title.split(' ')[0]} <span className="text-[#2563EB]">{title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[#64748B] text-sm md:text-base leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Top Half: Feature Cards */}
      <div className="relative z-10 bg-[#F8FAFC]/50 backdrop-blur-sm border-y border-[#E5E7EB]">
        <HospitalFeatureCards features={features} />
      </div>

      {/* Bottom Half: Pricing Section */}
      <div className="relative z-10">
        <HospitalPricingSection plans={pricingPlans} subtitle={pricingSubtitle} />
      </div>
    </div>
  );
};
