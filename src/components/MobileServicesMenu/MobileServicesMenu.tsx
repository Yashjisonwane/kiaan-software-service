import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './MobileServicesMenu.css';
import { softwareServicesData } from '../../data/servicesData';

export const MobileServicesMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="mobile-services-menu w-full border-b border-white/5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className={`text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${isOpen ? 'text-yellow-500' : 'text-zinc-400'}`}>
          Software Services
        </span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-yellow-500' : 'text-zinc-500'}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="py-2 pl-4 flex flex-col gap-2 border-l border-white/10 ml-2 mb-4">
              {softwareServicesData.categories.map((category) => (
                <div key={category.id} className="flex flex-col">
                  <button
                    onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                    className="flex items-center justify-between py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-300"
                  >
                    {category.title}
                    <ChevronRight size={12} className={`transition-transform duration-300 ${activeCategory === category.id ? 'rotate-90 text-yellow-500' : 'text-zinc-500'}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeCategory === category.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 flex flex-col"
                      >
                        {category.items.map((item) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            className="py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-yellow-500 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Mobile Featured Link */}
              <Link
                href={softwareServicesData.featured.href}
                className="mt-4 py-2 text-[10px] font-bold uppercase tracking-widest text-yellow-500 flex items-center gap-2"
              >
                ★ {softwareServicesData.featured.title}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
