"use client";
import React from 'react';
import { CRMTemplate } from './components/CRMTemplate';
import { Users, PhoneCall, TrendingUp, BarChart } from 'lucide-react';

const crmFeatures = [
  {
    title: "Kiaan Sales Pipeline",
    shortDesc: "Visual board to track leads and close deals faster.",
    fullDesc: "Move prospects through custom sales stages. Set follow-up reminders and track conversion probabilities automatically.",
    icon: <TrendingUp size={24} />
  },
  {
    title: "Kiaan Customer Support",
    shortDesc: "Integrated ticketing and helpdesk system.",
    fullDesc: "Manage incoming customer queries from email, chat, and social media in one unified inbox. Assign tickets to agents.",
    icon: <PhoneCall size={24} />
  },
  {
    title: "Kiaan Marketing Automation",
    shortDesc: "Automated email campaigns and lead nurturing.",
    fullDesc: "Create targeted email sequences based on user behavior. Automatically score leads and notify sales when they are hot.",
    icon: <Users size={24} />
  },
  {
    title: "Kiaan Analytics",
    shortDesc: "Deep insights into customer behavior and sales performance.",
    fullDesc: "Generate beautiful reports on revenue, agent performance, customer churn, and campaign ROI with real-time data.",
    icon: <BarChart size={24} />
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