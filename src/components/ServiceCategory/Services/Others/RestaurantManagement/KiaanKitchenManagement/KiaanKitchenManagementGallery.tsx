import React from 'react';
import Image from 'next/image';

const images = [
  { src: '/images/restaurant_dashboard.png', label: 'Restaurant Dashboard' },
  { src: '/images/restaurant_pos.png', label: 'POS Screen' },
  { src: '/images/restaurant_kitchen.png', label: 'Kitchen Display System' }
];

export const KiaanKitchenManagementGallery: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#0a0a0a]">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-center">
          Product <span className="text-yellow-500">Gallery</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <div key={i} className="bg-zinc-900 border border-white/10 rounded-2xl aspect-[16/10] overflow-hidden group relative">
              <Image 
                src={img.src} 
                alt={img.label} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
                <span className="text-white text-xs font-bold uppercase tracking-widest">{img.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};