import React from 'react';
import './Others.css';
import { ServiceCard } from '../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 7 - Owns Only Others component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const Others: React.FC = () => {
  return (
    <div className="service-category others-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        Others
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'restaurant-management', 
            name: 'Restaurant Management System', 
            href: '/services/restaurant-management' 
          }} 
        />
        <ServiceCard 
          item={{ 
            id: 'rental-management', 
            name: 'Rental Management System', 
            href: '/services/rental-management' 
          }} 
        />
      </div>
    </div>
  );
};

export default Others;
