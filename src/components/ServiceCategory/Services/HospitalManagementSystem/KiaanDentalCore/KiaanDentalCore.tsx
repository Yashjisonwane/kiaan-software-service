import React from 'react';
import './KiaanDentalCore.css';
import { ServiceCard } from '../../../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 5 - Owns Only KiaanDentalCore component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const KiaanDentalCore: React.FC = () => {
  return (
    <div className="service-category hospitalmanagementsystem-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        Hospital Management
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'hospital-management-system', 
            name: 'Hospital Management', 
            href: '/services/hospital-management-system' 
          }} 
        />
        {/* Employee 5: Add specific sub-service links here if needed */}
      </div>
    </div>
  );
};

export default KiaanDentalCore;