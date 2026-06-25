import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, Layers, Zap, Shield, Globe } from 'lucide-react';

interface Feature {
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: React.ReactNode;
}

const defaultFeatures: Feature[] = [
  {
    title: "Streamlined Operations",
    shortDesc: "Automate daily tasks and reduce manual entry errors significantly.",
    fullDesc: "Our platform integrates all your core operations into a single dashboard. From inventory tracking to staff scheduling, everything is automated, ensuring you save hours every week and eliminate costly manual entry errors.",
    icon: <Layers size={24} />
  },
  {
    title: "Lightning Fast Performance",
    shortDesc: "Experience zero lag with our globally distributed edge network.",
    fullDesc: "Built on modern edge-computing infrastructure, our software guarantees sub-100ms response times globally. Whether your team is in the office or on the go, they will experience a seamless, desktop-like app experience.",
    icon: <Zap size={24} />
  },
  {
    title: "Bank-Grade Security",
    shortDesc: "Your data is protected with AES-256 encryption and daily backups.",
    fullDesc: "Security is our top priority. We employ end-to-end encryption, regular penetration testing, and automated daily backups across multiple geographical locations to ensure your business data is never compromised or lost.",
    icon: <Shield size={24} />
  },
  {
    title: "Global Scalability",
    shortDesc: "Grow from 1 to 100 locations without changing your software.",
    fullDesc: "Our architecture is designed to scale with your business natively. Adding new branches, users, or regions takes just a few clicks. The software handles the complex data synchronization across all your business units automatically.",
    icon: <Globe size={24} />
  }
];

export const HospitalFeatureCards: React.FC<{ features?: Feature[] }> = ({ features = defaultFeatures }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const isExpanded = expandedIndex === index;
            
            return (
              <motion.div 
                key={index}
                layout
                className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-4 hover:border-yellow-500/30 transition-colors"
              >
                <motion.div layout className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                </motion.div>
                
                <motion.p layout className="text-zinc-400 text-sm mb-4">
                  {feature.shortDesc}
                </motion.p>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-300 pb-4 leading-relaxed border-t border-white/5 pt-4 mt-2 text-xs">
                        {feature.fullDesc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button 
                  layout
                  onClick={() => toggleExpand(index)}
                  className="flex items-center gap-2 text-yellow-500 font-bold uppercase tracking-wider text-xs hover:text-white transition-colors"
                >
                  {isExpanded ? 'Show Less' : 'Learn More'}
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
