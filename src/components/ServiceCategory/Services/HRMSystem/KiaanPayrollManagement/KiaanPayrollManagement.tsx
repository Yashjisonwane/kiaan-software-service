import React from 'react';
import './KiaanPayrollManagement.css';
import { ServiceCard } from '../../../../ServiceCard/ServiceCard';

/* 
 * -------------------------------------------------------------
 * Employee 6 - Owns Only KiaanPayrollManagement component
 * -------------------------------------------------------------
 * MANDATORY RULES:
 * 1. Modify only files inside this folder.
 * 2. Do NOT import code from other service components.
 * 3. Changes here must not break other services.
 */

export const KiaanPayrollManagement: React.FC = () => {
  return (
    <div className="service-category hrmsystem-container">
      <h3 className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-widest text-white border-b border-white/10 mb-2">
        HRM System
      </h3>
      <div className="flex flex-col">
        <ServiceCard 
          item={{ 
            id: 'hrm-system', 
            name: 'HRM System', 
            href: '/services/hrm-system' 
          }} 
        />
        {/* Employee 6: Add specific sub-service links here if needed */}
      </div>
    </div>
  );
};

export default KiaanPayrollManagement;