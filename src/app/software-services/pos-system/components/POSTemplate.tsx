import React from 'react';
import { motion } from 'framer-motion';
import { SoftwareLandingDetails } from '@/components/SoftwareLanding/SoftwareLandingDetails';
import { POSFeatureCards } from './POSFeatureCards';
import { POSPricingSection, POSPricingPlan } from './POSPricingSection';
import Link from 'next/link';
import { X } from 'lucide-react';

interface Props {
  title: string;
  description: string;
  features?: any[];
  pricingPlans?: POSPricingPlan[];
  pricingSubtitle?: string;
}

export const POSTemplate: React.FC<Props> = ({ title, description, features, pricingPlans, pricingSubtitle }) => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none animated-grid opacity-20"></div>
      <div className="fixed inset-0 z-0 pointer-events-none scanlines opacity-5 mix-blend-overlay"></div>

      <div className="relative z-10 pt-24 pb-4 px-6">
        <div className="container mx-auto">
          {/* Cut / Close Navigation */}
          <Link href="/software-services">
            <button className="absolute top-6 right-6 lg:top-8 lg:right-10 z-50 w-12 h-12 flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-zinc-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/10 hover:scale-110 transition-all duration-300 shadow-xl group">
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </Link>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-2 text-white"
            >
              {title.split(' ')[0]} <span className="text-yellow-500">{title.split(' ').slice(1).join(' ')}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-zinc-400 text-sm md:text-base leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </div>

      {/* Top Half: Feature Cards */}
      <div className="relative z-10 bg-black/40 backdrop-blur-sm border-y border-white/5">
        <POSFeatureCards features={features} />
      </div>

      {/* Bottom Half: Pricing Section */}
      <div className="relative z-10">
        <POSPricingSection plans={pricingPlans} subtitle={pricingSubtitle} />
      </div>
    </div>
  );
};
