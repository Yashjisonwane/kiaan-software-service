"use client";
import React from 'react';
import { HospitalTemplate } from './components/HospitalTemplate';
import { Activity, ShieldPlus, HeartPulse, Stethoscope } from 'lucide-react';

const hospitalFeatures = [
  {
    title: "Kiaan Hospital Management",
    shortDesc: "Comprehensive ERP to streamline hospital operations, billing, and clinical records.",
    fullDesc: "A complete end-to-end solution for large hospitals. Manage everything from patient admission and discharge to complex insurance claims, inventory of medical supplies, and multi-department coordination securely.",
    icon: <Activity size={24} />
  },
  {
    title: "Kiaan Dental Core",
    shortDesc: "Specialized management software built specifically for dental clinics.",
    fullDesc: "Includes highly specific tools like 3D dental charting, appointment scheduling for multiple dentists, automated patient reminders, and specialized dental billing codes built right in.",
    icon: <ShieldPlus size={24} />
  },
  {
    title: "Kiaan Pharmacy Sync",
    shortDesc: "Integrated pharmacy management and inventory tracking system.",
    fullDesc: "Connect your in-house pharmacy directly to doctor prescriptions. Automatically track drug inventory, alert on expirations, and process pharmacy billing seamlessly with the main hospital invoice.",
    icon: <HeartPulse size={24} />
  },
  {
    title: "Kiaan Clinic Hub",
    shortDesc: "Lightweight management tool for independent clinics and specialists.",
    fullDesc: "Designed for smaller setups and single practitioners. Offers easy appointment booking, basic electronic health records (EHR), and simple invoicing without the complexity of a full hospital ERP.",
    icon: <Stethoscope size={24} />
  }
];

export default function HospitalServicesPage() {
  return (
    <HospitalTemplate 
      title="Hospital Management" 
      description="Comprehensive ERP and patient management system designed to streamline hospital operations, billing, and clinical records efficiently."
      features={hospitalFeatures}
    />
  );
}
