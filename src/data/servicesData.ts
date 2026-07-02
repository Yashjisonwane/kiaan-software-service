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
      { id: "kiaan-clinic", name: "Kiaan Dental Clinic", description: "Advanced clinic management and patient records system.", features: ["Patient Records", "Prescriptions", "Billing"] },
    ]
  },
  "crm-system": {
    id: "crm-system",
    name: "CRM System",
    products: [
      { id: "kiaan-customer-crm", name: "Kiaan Customer CRM", description: "Build stronger relationships with your customers.", features: ["Support Tickets", "Customer Portal", "Feedback Management"] },
    ]
  },

  "pos-system": {
    id: "pos-system",
    name: "POS System",
    products: [
      { id: "kiaan-retail-pos", name: "Kiaan iPOS", description: "Fast checkout for retail storefronts.", features: ["Barcode Integration", "Receipt Printing", "Customer Loyalty"] },
    ]
  },
  "hrm-system": {
    id: "hrm-system",
    name: "HRM System",
    products: [
      { id: "kiaan-employee-management", name: "Kiaan Employee Management", description: "Centralized employee database and self-service.", features: ["Digital Onboarding", "Document Storage", "Self-Service Portal"] },
      { id: "kiaan-attendance-system", name: "Kiaan Attendance System", description: "Track hours, shifts, and leaves.", features: ["Biometric Integration", "Shift Rostering", "Leave Approvals"] },
      { id: "kiaan-recruitment-management", name: "Kiaan Monday.com", description: "Comprehensive multi-tenant workflow, payroll & project management.", features: ["Boards & Folders", "Time Tracking", "Payroll & HR", "Multi-Tenant SaaS"] },
    ]
  },
  "restaurant-management": {
    id: "restaurant-management",
    name: "Restaurant Management",
    products: [
      { id: "kiaan-restaurant-core", name: "Kiaan Restaurant Core", description: "Core operations for your restaurant business.", features: ["Table Management", "Inventory Tracking", "Staff Management"] },
    ]
  },
  "rental-management": {
    id: "rental-management",
    name: "Rental Management",
    products: [
      { id: "kiaan-car-rental", name: "Kiaan Car Rental", description: "Comprehensive car rental booking and fleet management system.", features: ["Vehicle Booking", "Driver Assignment", "Rental Agreements"] },
      { id: "kiaan-asset-tracking", name: "Kiaan Asset Tracking System", description: "Equipment and general asset rentals.", features: ["Asset Lifecycle", "Barcode Scanning", "Availability Calendar"] },
      { id: "kiaan-gym", name: "Kiaan Gym", description: "Comprehensive gym and fitness center management system.", features: ["Member Registration", "Membership Plans", "Trainer Assignment"] },
    ]
  }
};
