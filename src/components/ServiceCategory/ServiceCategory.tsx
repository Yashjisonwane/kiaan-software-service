import React from 'react';
import './ServiceCategory.css';
import { CRMSystem } from '../services/CRMSystem/CRMSystem';
import { POSSystem } from '../services/POSSystem/POSSystem';
import { HospitalManagementSystem } from '../services/HospitalManagementSystem/HospitalManagementSystem';
import { HRMSystem } from '../services/HRMSystem/HRMSystem';
import { Others } from '../services/Others/Others';

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
