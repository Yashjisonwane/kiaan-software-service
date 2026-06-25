const fs = require('fs');
const path = require('path');

const services = [
    "CRMSystem",
    "ECommercePlatform",
    "InventoryManagement",
    "POSSystem",
    "HospitalManagementSystem",
    "HRMSystem"
];

const componentsDir = path.join(__dirname, 'src', 'components', 'services');

for (const svc of services) {
    const svcDir = path.join(componentsDir, svc);
    
    // 1. Create [ServiceName]Modal.tsx
    const modalCode = `import React from 'react';
import { X } from 'lucide-react';
import { ${svc}LandingPage } from './${svc}LandingPage';

interface Props {
  onClose: () => void;
}

export const ${svc}Modal: React.FC<Props> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl max-h-[90vh] bg-[#0a0a0a] rounded-3xl border border-white/10 shadow-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">
        
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
          <div className="text-xl font-bold uppercase tracking-widest text-white flex items-center gap-2">
            <span className="w-8 h-8 rounded-lg bg-yellow-500 text-black flex items-center justify-center text-sm">K</span>
            ${svc.replace(/([A-Z])/g, ' $1').trim()}
          </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-zinc-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="absolute inset-0 pointer-events-none z-[60]" style={{boxShadow: 'inset 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 -10px 20px -10px rgba(0,0,0,0.5)'}}></div>
          <${svc}LandingPage />
        </div>
      </div>
    </div>
  );
};
`;

    fs.writeFileSync(path.join(svcDir, `${svc}Modal.tsx`), modalCode, 'utf8');
    
    // 2. Create [ServiceName]Page.tsx
    let folderName = "";
    if (svc === "CRMSystem") folderName = "crm-system";
    else if (svc === "ECommercePlatform") folderName = "ecommerce-platform";
    else if (svc === "InventoryManagement") folderName = "inventory-management";
    else if (svc === "POSSystem") folderName = "pos-system";
    else if (svc === "HospitalManagementSystem") folderName = "hospital-management-system"; 
    else if (svc === "HRMSystem") folderName = "hrm-system";
    
    let dashboardPath = path.join(__dirname, 'src', 'app', 'software-services', folderName, 'dashboard', 'page.tsx');
    if (!fs.existsSync(dashboardPath) && svc === "HospitalManagementSystem") {
        dashboardPath = path.join(__dirname, 'src', 'app', 'software-services', 'hospital-services', 'dashboard', 'page.tsx');
    }

    if (fs.existsSync(dashboardPath)) {
        let dashboardContent = fs.readFileSync(dashboardPath, 'utf8');
        dashboardContent = dashboardContent.replace(/export default function SoftwareDashboard\(\) \{/g, `export const ${svc}Page: React.FC = () => {`);
        // The dashboard page might still have "use client" at the top which is good.
        fs.writeFileSync(path.join(svcDir, `${svc}Page.tsx`), dashboardContent, 'utf8');
    } else {
        console.warn(`Dashboard not found for ${svc} at ${dashboardPath}`);
    }
}

console.log("Done generating Modals and Pages.");