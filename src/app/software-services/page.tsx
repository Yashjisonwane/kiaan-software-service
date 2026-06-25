import React from 'react';
import { getServicesData } from '@/utils/getServicesData';
import { SoftwareServicesClient } from './SoftwareServicesClient';

export default function SoftwareServicesPage() {
  const categories = getServicesData();
  
  return <SoftwareServicesClient categories={categories} />;
}
