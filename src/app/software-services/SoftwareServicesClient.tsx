"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Box, Layers, Zap, Maximize } from 'lucide-react';
import { ServiceCategoryGroup } from '@/utils/getServicesData';

import { CRMSystemModal } from '@/components/services/CRMSystem/CRMSystemModal';
import { POSSystemModal } from '@/components/services/POSSystem/POSSystemModal';
import { RestaurantManagementModal } from '@/components/services/Others/RestaurantManagement/RestaurantManagementModal';
import { RentalManagementModal } from '@/components/services/Others/RentalManagement/RentalManagementModal';
import { HospitalManagementSystemModal } from '@/components/services/HospitalManagementSystem/HospitalManagementSystemModal';
import { HRMSystemModal } from '@/components/services/HRMSystem/HRMSystemModal';

interface Props {
  categories: ServiceCategoryGroup[];
}

export const SoftwareServicesClient: React.FC<Props> = ({ categories }) => {
  const allServices = categories.flatMap(cat => cat.items);
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [selectedModalService, setSelectedModalService] = useState<string | null>(null);
  const router = useRouter();
  
  return (
    <div className="bg-black text-white pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none animated-grid opacity-20"></div>
      <div className="fixed inset-0 z-0 pointer-events-none scanlines opacity-5 mix-blend-overlay"></div>

      <div className="container mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6"
          >
            Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg"
          >
            Explore our cutting-edge software solutions designed to elevate your business. Select a category below to view specific services.
          </motion.p>
        </div>

        {categories.length === 0 && (
          <div className="text-center py-12 text-zinc-500 border border-white/5 rounded-2xl bg-white/5">
            <h3 className="text-xl font-bold mb-2 text-white">No Services Found</h3>
            <p>Add a new folder in src/app/software-services/ with a metadata.json file.</p>
          </div>
        )}

        {/* Sidebar / Tabs Layout */}
        {allServices.length > 0 && (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Sidebar (Points / Navbar) */}
            <div className="flex flex-col gap-2 lg:w-1/3">
              {allServices.map((item, index) => {
                const isHovered = hoveredIndex === index;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(index)}
                    className={`px-6 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                      isHovered ? 'bg-yellow-500/10 border border-yellow-500/50 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.15)] cursor-default' : 'bg-transparent border border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-white/5 cursor-pointer'
                    }`}
                  >
                    <div className="w-2 h-2 rounded-full bg-current" />
                    <span className="font-bold text-lg uppercase tracking-wider">{item.name}</span>
                  </div>
                );
              })}
            </div>

            {/* Right Content Panel */}
            <div className="lg:w-2/3 bg-white/5 border border-white/10 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-red-600/5 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
                    {hoveredIndex % 3 === 0 ? <Box size={32} /> : hoveredIndex % 3 === 1 ? <Layers size={32} /> : <Zap size={32} />}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 uppercase">
                    {allServices[hoveredIndex].name}
                  </h3>
                  
                  <div className="relative mb-8">
                    <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                      {allServices[hoveredIndex].description || "Discover our specialized software service tailored to your industry needs with modern technologies."}
                      {" "}Learn how this powerful software solution can streamline your operations, increase efficiency, and drive growth for your business. It is entirely customizable to adapt to your specific organizational workflows, ensuring a friction-free digital transformation.
                    </p>
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button 
                      onClick={() => setSelectedModalService(allServices[hoveredIndex].id)}
                      className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white/5 transition-colors duration-300 flex items-center justify-center gap-3"
                    >
                      Show More <Maximize size={18} />
                    </button>
                    <button 
                      onClick={() => router.push(`/services/${allServices[hoveredIndex].id}`)}
                      className="w-full sm:w-auto bg-yellow-500 text-black px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                    >
                      Explore More <ArrowRight size={18} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        )}

        {/* Featured Service Banner */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 relative bg-gradient-to-r from-yellow-600 to-red-600 rounded-3xl overflow-hidden p-6 md:p-16 text-center shadow-[0_0_50px_rgba(234,179,8,0.3)]"
        >
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-4 text-white">
              Ready to Launch Your Software?
            </h2>
            <p className="text-white/90 text-base max-w-2xl mx-auto mb-8 font-medium">
              We provide end-to-end custom software development designed specifically for your unique business needs.
            </p>
            <Link href="/start-project">
              <button className="bg-black text-white px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 transition-transform duration-300 shadow-xl flex items-center gap-2 mx-auto">
                Get Started <ArrowRight size={18} />
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Modals */}
      <AnimatePresence>
        {selectedModalService === 'crm-system' && <CRMSystemModal onClose={() => setSelectedModalService(null)} />}
        {selectedModalService === 'pos-system' && <POSSystemModal onClose={() => setSelectedModalService(null)} />}
        {selectedModalService === 'restaurant-management' && <RestaurantManagementModal onClose={() => setSelectedModalService(null)} />}
        {selectedModalService === 'rental-management' && <RentalManagementModal onClose={() => setSelectedModalService(null)} />}
        {(selectedModalService === 'hospital-management-system' || selectedModalService === 'hospital-services') && <HospitalManagementSystemModal onClose={() => setSelectedModalService(null)} />}
        {selectedModalService === 'hrm-system' && <HRMSystemModal onClose={() => setSelectedModalService(null)} />}
      </AnimatePresence>
    </div>
  );
};
