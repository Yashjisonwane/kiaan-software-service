import React from 'react';
import './KiaanCustomerCRM.css';
import { ServiceCard } from '../../../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 1 - Owns Only KiaanCustomerCRM component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const KiaanCustomerCRM: React.FC = () => {
  return (
    <div className="service-category crmsystem-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        CRM System
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'crm-system', 
            name: 'CRM System', 
            href: '/services/crm-system' 
          }} 
        />
        {/* Employee 1: Add specific sub-service links here if needed */}
      </div>
    </div>
  );
};

export default KiaanCustomerCRM;