import React from 'react';
import './ServiceCategory.css';
import { CRMSystem } from './Services/CRMSystem/CRMSystem';
import { POSSystem } from './Services/POSSystem/POSSystem';
import { HospitalManagementSystem } from './Services/HospitalManagementSystem/HospitalManagementSystem';
import { HRMSystem } from './Services/HRMSystem/HRMSystem';
import { Others } from './Services/Others/Others';

export const ServiceCategory: React.FC = () => {
  return (
    <>
      <CRMSystem />
      <POSSystem />
      <HospitalManagementSystem />
      <HRMSystem />
      <Others />
    </>
  );
};
