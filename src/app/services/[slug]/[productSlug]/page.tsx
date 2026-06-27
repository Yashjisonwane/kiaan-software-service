import React from 'react';
import { notFound } from 'next/navigation';
import { serviceEcosystems } from '@/data/servicesData';

// Import all 23 landing pages to render them directly
import { KiaanDentalCoreLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanDentalCore/KiaanDentalCoreLandingPage';
import { KiaanHospitalManagementLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanHospitalManagement/KiaanHospitalManagementLandingPage';
import { KiaanClinicLandingPage } from '@/components/ServiceCategory/Services/HospitalManagementSystem/KiaanClinic/KiaanClinicLandingPage';

import { KiaanEmployeeManagementLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanEmployeeManagement/KiaanEmployeeManagementLandingPage';
import { KiaanAttendanceSystemLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanAttendanceSystem/KiaanAttendanceSystemLandingPage';
import { KiaanRecruitmentManagementLandingPage } from '@/components/ServiceCategory/Services/HRMSystem/KiaanRecruitmentManagement/KiaanRecruitmentManagementLandingPage';

import { KiaanCustomerCRMLandingPage } from '@/components/ServiceCategory/Services/CRMSystem/KiaanCustomerCRM/KiaanCustomerCRMLandingPage';

import { KiaanRetailPOSLandingPage } from '@/components/ServiceCategory/Services/POSSystem/KiaanRetailPOS/KiaanRetailPOSLandingPage';

import { KiaanRestaurantCoreLandingPage } from '@/components/ServiceCategory/Services/Others/RestaurantManagement/KiaanRestaurantCore/KiaanRestaurantCoreLandingPage';

import { KiaanCarRentalLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanCarRental/KiaanCarRentalLandingPage';
import { KiaanAssetTrackingSystemLandingPage } from '@/components/ServiceCategory/Services/Others/RentalManagement/KiaanAssetTrackingSystem/KiaanAssetTrackingSystemLandingPage';
import { KiaanGymLandingPage } from '@/components/ServiceCategory/Services/Others/GymManagement/KiaanGym/KiaanGymLandingPage';

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
    "kiaan-clinic": KiaanClinicLandingPage,
    
    // HRM
    "kiaan-employee-management": KiaanEmployeeManagementLandingPage,
    "kiaan-attendance-system": KiaanAttendanceSystemLandingPage,
    "kiaan-recruitment-management": KiaanRecruitmentManagementLandingPage,
    
    // CRM
    "kiaan-customer-crm": KiaanCustomerCRMLandingPage,
    
    // POS
    "kiaan-retail-pos": KiaanRetailPOSLandingPage,
    
    // Others - Restaurant Management
    "kiaan-restaurant-core": KiaanRestaurantCoreLandingPage,
    
    // Others - Rental Management
    "kiaan-car-rental": KiaanCarRentalLandingPage,
    "kiaan-asset-tracking": KiaanAssetTrackingSystemLandingPage,
    "kiaan-gym": KiaanGymLandingPage
  };

  const SpecificLandingPage = productComponents[productSlug];

  if (!SpecificLandingPage) {
    notFound();
  }

  // Render the specific landing page component owned by the developer
  return <SpecificLandingPage />;
}
