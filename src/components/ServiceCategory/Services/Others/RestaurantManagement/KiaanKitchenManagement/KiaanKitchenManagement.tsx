import React from 'react';
import './KiaanKitchenManagement.css';
import { ServiceCard } from '../../../../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 4 - Owns Only KiaanKitchenManagement component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const KiaanKitchenManagement: React.FC = () => {
  return (
    <div className="service-category restaurantmanagement-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        Restaurant Management
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'restaurant-management', 
            name: 'Restaurant Management', 
            href: '/services/restaurant-management' 
          }} 
        />
        {/* Employee 4: Add specific sub-service links here if needed */}
      </div>
    </div>
  );
};

export default KiaanKitchenManagement;