import React from 'react';
import { notFound } from 'next/navigation';
import { serviceEcosystems } from '@/data/servicesData';

// Import all 23 landing pages to render them directly
import { KiaanDentalCoreLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanDentalCore/KiaanDentalCoreLandingPage';
import { KiaanHospitalManagementLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanHospitalManagement/KiaanHospitalManagementLandingPage';
import { KiaanLaboratoryManagementLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanLaboratoryManagement/KiaanLaboratoryManagementLandingPage';
import { KiaanPharmacyManagementLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanPharmacyManagement/KiaanPharmacyManagementLandingPage';

import { KiaanEmployeeManagementLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanEmployeeManagement/KiaanEmployeeManagementLandingPage';
import { KiaanPayrollManagementLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanPayrollManagement/KiaanPayrollManagementLandingPage';
import { KiaanAttendanceSystemLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanAttendanceSystem/KiaanAttendanceSystemLandingPage';
import { KiaanRecruitmentManagementLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanRecruitmentManagement/KiaanRecruitmentManagementLandingPage';

import { KiaanSalesCRMLandingPage } from '@/components/ServiceCategory/Services/CRMSystem/KiaanSalesCRM/KiaanSalesCRMLandingPage';
import { KiaanCustomerCRMLandingPage } from '@/components/ServiceCategory/Services/CRMSystem/KiaanCustomerCRM/KiaanCustomerCRMLandingPage';
import { KiaanLeadManagementLandingPage } from '@/components/ServiceCategory/Services/CRMSystem/KiaanLeadManagement/KiaanLeadManagementLandingPage';
import { KiaanMarketingCRMLandingPage } from '@/components/ServiceCategory/Services/CRMSystem/KiaanMarketingCRM/KiaanMarketingCRMLandingPage';

import { KiaanRetailPOSLandingPage } from '@/components/ServiceCategory/Services/POSSystem/KiaanRetailPOS/KiaanRetailPOSLandingPage';
import { KiaanRestaurantPOSLandingPage } from '@/components/ServiceCategory/Services/POSSystem/KiaanRestaurantPOS/KiaanRestaurantPOSLandingPage';
import { KiaanBillingPOSLandingPage } from '@/components/ServiceCategory/Services/POSSystem/KiaanBillingPOS/KiaanBillingPOSLandingPage';
import { KiaanMultiStorePOSLandingPage } from '@/components/ServiceCategory/Services/POSSystem/KiaanMultiStorePOS/KiaanMultiStorePOSLandingPage';

import { KiaanRestaurantCoreLandingPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/KiaanRestaurantCore/KiaanRestaurantCoreLandingPage';
import { KiaanRestaurantPOSProductLandingPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/KiaanRestaurantPOSProduct/KiaanRestaurantPOSProductLandingPage';
import { KiaanKitchenManagementLandingPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/KiaanKitchenManagement/KiaanKitchenManagementLandingPage';
import { KiaanOnlineOrderingSystemLandingPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/KiaanOnlineOrderingSystem/KiaanOnlineOrderingSystemLandingPage';

import { KiaanRentalCoreLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanRentalCore/KiaanRentalCoreLandingPage';
import { KiaanVehicleRentalSystemLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanVehicleRentalSystem/KiaanVehicleRentalSystemLandingPage';
import { KiaanCarRentalLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanCarRental/KiaanCarRentalLandingPage';
import { KiaanPropertyRentalSystemLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanPropertyRentalSystem/KiaanPropertyRentalSystemLandingPage';
import { KiaanAssetTrackingSystemLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanAssetTrackingSystem/KiaanAssetTrackingSystemLandingPage';

interface PageProps {
  params: Promise<{
    slug: string;
    productSlug: string;
  }>;
}

// Generate static params for all individual products
export async function generateStaticParams() {
  const paths: { slug: string; productSlug: string }[] = [];
  
  Object.keys(serviceEcosystems).forEach((ecosystemSlug) => {
    const ecosystem = serviceEcosystems[ecosystemSlug];
    ecosystem.products.forEach((product) => {
      paths.push({
        slug: ecosystemSlug,
        productSlug: product.id,
      });
    });
  });
  
  return paths;
}

export default async function ProductInformationPage({ params }: PageProps) {
  const { slug, productSlug } = await params;
  const ecosystem = serviceEcosystems[slug];

  if (!ecosystem) {
    notFound();
  }

  // Define component mapping for each productSlug
  const productComponents: Record<string, React.ComponentType> = {
    // Healthcare Service Platform
    "kiaan-dental-core": KiaanDentalCoreLandingPage,
    "kiaan-hospital-management": KiaanHospitalManagementLandingPage,
    "kiaan-laboratory-management": KiaanLaboratoryManagementLandingPage,
    "kiaan-pharmacy-management": KiaanPharmacyManagementLandingPage,
    
    // HRM
    "kiaan-employee-management": KiaanEmployeeManagementLandingPage,
    "kiaan-payroll-management": KiaanPayrollManagementLandingPage,
    "kiaan-attendance-system": KiaanAttendanceSystemLandingPage,
    "kiaan-recruitment-management": KiaanRecruitmentManagementLandingPage,
    
    // CRM
    "kiaan-sales-crm": KiaanSalesCRMLandingPage,
    "kiaan-customer-crm": KiaanCustomerCRMLandingPage,
    "kiaan-lead-management": KiaanLeadManagementLandingPage,
    "kiaan-marketing-crm": KiaanMarketingCRMLandingPage,
    
    // POS
    "kiaan-retail-pos": KiaanRetailPOSLandingPage,
    "kiaan-restaurant-pos": slug === 'restaurant-management' ? KiaanRestaurantPOSProductLandingPage : KiaanRestaurantPOSLandingPage,
    "kiaan-billing-pos": KiaanBillingPOSLandingPage,
    "kiaan-multi-store-pos": KiaanMultiStorePOSLandingPage,
    
    // Others - Restaurant Management
    "kiaan-restaurant-core": KiaanRestaurantCoreLandingPage,
    "kiaan-kitchen-management": KiaanKitchenManagementLandingPage,
    "kiaan-online-ordering": KiaanOnlineOrderingSystemLandingPage,
    
    // Others - Rental Management
    "kiaan-rental-core": KiaanRentalCoreLandingPage,
    "kiaan-vehicle-rental": KiaanVehicleRentalSystemLandingPage,
    "kiaan-car-rental": KiaanCarRentalLandingPage,
    "kiaan-property-rental": KiaanPropertyRentalSystemLandingPage,
    "kiaan-asset-tracking": KiaanAssetTrackingSystemLandingPage
  };

  const SpecificLandingPage = productComponents[productSlug];

  if (!SpecificLandingPage) {
    notFound();
  }

  // Render the specific landing page component owned by the developer
  return <SpecificLandingPage />;
}
