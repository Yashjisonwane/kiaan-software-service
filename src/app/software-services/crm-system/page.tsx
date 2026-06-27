"use client";
import React from 'react';
import { CRMTemplate } from './components/CRMTemplate';
import { PhoneCall } from 'lucide-react';

const crmFeatures = [
  {
    title: "Kiaan Customer CRM",
    shortDesc: "Integrated ticketing and helpdesk system.",
    fullDesc: "Manage incoming customer queries from email, chat, and social media in one unified inbox. Assign tickets to agents.",
    icon: <PhoneCall size={24} />
  }
];

export default function CRMSystemPage() {
  return (
    <CRMTemplate 
      title="CRM System" 
      description="Build stronger customer relationships with our CRM. Track leads, automate marketing, and provide exceptional support from one unified dashboard."
      features={crmFeatures}
    />
  );
}