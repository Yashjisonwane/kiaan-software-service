import React from 'react';
import './KiaanAssetTrackingSystem.css';
import { ServiceCard } from '../../../../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 4 - Owns Only KiaanAssetTrackingSystem component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const KiaanAssetTrackingSystem: React.FC = () => {
  return (
    <div className="service-category rentalmanagement-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        Rental Management
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'rental-management', 
            name: 'Rental Management', 
            href: '/services/rental-management' 
          }} 
        />
        {/* Employee 4: Add specific sub-service links here if needed */}
      </div>
    </div>
  );
};

export default KiaanAssetTrackingSystem;