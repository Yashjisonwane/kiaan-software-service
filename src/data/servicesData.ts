export interface ServiceItem {
  id: string;
  name: string;
  href: string;
  description?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  items: ServiceItem[];
}

export interface FeaturedService {
  title: string;
  description: string;
  href: string;
  imageUrl?: string;
}

export const softwareServicesData: {
  categories: ServiceCategory[];
  featured: FeaturedService;
} = {
  categories: [],
  featured: {
    title: "Enterprise Solutions",
    description: "Custom software tailored for large-scale operations.",
    href: "/software-services/enterprise",
  }
};

export interface EcosystemProduct {
  id: string;
  name: string;
  description: string;
  features: string[];
}

export interface ServiceEcosystem {
  id: string;
  name: string;
  products: EcosystemProduct[];
}

export const serviceEcosystems: Record<string, ServiceEcosystem> = {
  "hospital-management-system": {
    id: "hospital-management-system",
    name: "Hospital Management",
    products: [
      { id: "kiaan-dental-core", name: "Kiaan Dental Core", description: "Comprehensive dental clinic management system.", features: ["Patient Records", "Appointment Scheduling", "Billing"] },
      { id: "kiaan-hospital-management", name: "Kiaan Hospital Management", description: "Full-scale enterprise hospital operations.", features: ["Inpatient Management", "Outpatient Care", "Insurance Claims"] },
      { id: "kiaan-laboratory-management", name: "Kiaan Laboratory Management", description: "Advanced LIS for diagnostics and testing.", features: ["Sample Tracking", "Automated Reporting", "Equipment Integration"] },
      { id: "kiaan-pharmacy-management", name: "Kiaan Pharmacy Management", description: "Inventory and billing for pharmacies.", features: ["Stock Control", "Prescription Handling", "Expiry Alerts"] },
    ]
  },
  "crm-system": {
    id: "crm-system",
    name: "CRM System",
    products: [
      { id: "kiaan-sales-crm", name: "Kiaan Sales CRM", description: "Accelerate sales cycles and close deals faster.", features: ["Pipeline Management", "Sales Forecasting", "Email Tracking"] },
      { id: "kiaan-customer-crm", name: "Kiaan Customer CRM", description: "Build stronger relationships with your customers.", features: ["Support Tickets", "Customer Portal", "Feedback Management"] },
      { id: "kiaan-lead-management", name: "Kiaan Lead Management", description: "Capture and nurture leads automatically.", features: ["Lead Scoring", "Web-to-Lead Forms", "Campaign Tracking"] },
      { id: "kiaan-marketing-crm", name: "Kiaan Marketing CRM", description: "Execute and measure multi-channel campaigns.", features: ["Email Automation", "Social Media Integration", "ROI Analytics"] },
    ]
  },

  "pos-system": {
    id: "pos-system",
    name: "POS System",
    products: [
      { id: "kiaan-retail-pos", name: "Kiaan iPOS", description: "Fast checkout for retail storefronts.", features: ["Barcode Integration", "Receipt Printing", "Customer Loyalty"] },
      { id: "kiaan-restaurant-pos", name: "Kiaan Restaurant POS", description: "Table management and kitchen orders.", features: ["Table Mapping", "KDS Integration", "Split Checks"] },
      { id: "kiaan-billing-pos", name: "Kiaan Billing POS", description: "Service-based invoicing and checkout.", features: ["Service Items", "Tax Calculation", "Digital Invoices"] },
      { id: "kiaan-multi-store-pos", name: "Kiaan Multi-Store POS", description: "Centralized control for franchise operations.", features: ["Global Inventory", "Franchise Reporting", "Centralized Pricing"] },
    ]
  },
  "hrm-system": {
    id: "hrm-system",
    name: "HRM System",
    products: [
      { id: "kiaan-employee-management", name: "Kiaan Employee Management", description: "Centralized employee database and self-service.", features: ["Digital Onboarding", "Document Storage", "Self-Service Portal"] },
      { id: "kiaan-payroll-management", name: "Kiaan Payroll Management", description: "Automated salary processing and compliance.", features: ["Tax Deductions", "Payslip Generation", "Direct Deposit"] },
      { id: "kiaan-attendance-system", name: "Kiaan Attendance System", description: "Track hours, shifts, and leaves.", features: ["Biometric Integration", "Shift Rostering", "Leave Approvals"] },
      { id: "kiaan-recruitment-management", name: "Kiaan Monday.com", description: "Comprehensive multi-tenant workflow, payroll & project management.", features: ["Boards & Folders", "Time Tracking", "Payroll & HR", "Multi-Tenant SaaS"] },
    ]
  },
  "restaurant-management": {
    id: "restaurant-management",
    name: "Restaurant Management",
    products: [
      { id: "kiaan-restaurant-core", name: "Kiaan Restaurant Core", description: "Core operations for your restaurant business.", features: ["Table Management", "Inventory Tracking", "Staff Management"] },
      { id: "kiaan-restaurant-pos", name: "Kiaan Restaurant POS", description: "Point of sale for front-of-house operations.", features: ["Order Management", "Billing & POS", "Customer Management"] },
      { id: "kiaan-kitchen-management", name: "Kiaan Kitchen Management", description: "Kitchen Display System (KDS) for cooks.", features: ["Ticket Routing", "Prep Times", "Order Status"] },
      { id: "kiaan-online-ordering", name: "Kiaan Online Ordering System", description: "Direct online ordering for delivery and pickup.", features: ["Website Integration", "Menu Syncing", "Payment Gateway"] },
    ]
  },
  "rental-management": {
    id: "rental-management",
    name: "Rental Management",
    products: [
      { id: "kiaan-rental-core", name: "Kiaan Rental Core", description: "Central platform for all rental operations.", features: ["Booking Management", "Rental Agreements", "Reporting & Analytics"] },
      { id: "kiaan-vehicle-rental", name: "Kiaan Vehicle Rental System", description: "Manage fleet and vehicle rentals seamlessly.", features: ["Fleet Tracking", "Maintenance Scheduling", "Insurance Management"] },
      { id: "kiaan-property-rental", name: "Kiaan Property Rental System", description: "Property management and tenant portals.", features: ["Lease Tracking", "Rent Collection", "Maintenance Requests"] },
      { id: "kiaan-asset-tracking", name: "Kiaan Asset Tracking System", description: "Equipment and general asset rentals.", features: ["Asset Lifecycle", "Barcode Scanning", "Availability Calendar"] },
    ]
  }
};
