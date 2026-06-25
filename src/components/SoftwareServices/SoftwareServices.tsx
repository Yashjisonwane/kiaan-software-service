import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './SoftwareServices.css';
import { softwareServicesData } from '../../data/servicesData';
import { ServiceCategory } from '../ServiceCategory/ServiceCategory';
import { FeaturedService } from '../FeaturedService/FeaturedService';

interface SoftwareServicesProps {
  isOpen: boolean;
}

export const SoftwareServices: React.FC<SoftwareServicesProps> = ({ isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute top-full left-0 z-[100] mt-1 software-services-mega-menu"
        >
          <div className="bg-[#0a0a0a] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative p-4 flex gap-6">
            {/* Categories Section */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <ServiceCategory />
            </div>

            {/* Featured Product Section */}
            <div className="w-[280px] border-l border-white/10 pl-6 flex flex-col justify-center">
              <FeaturedService featured={softwareServicesData.featured} />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
