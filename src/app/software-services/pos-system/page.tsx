"use client";
import React from 'react';
import { POSTemplate } from './components/POSTemplate';
import { Store, Smartphone, Terminal } from 'lucide-react';

const posFeatures = [
  {
    title: "Kiaan iPOS",
    shortDesc: "Complete checkout and inventory management for retail stores.",
    fullDesc: "Handle barcode scanning, multi-register checkout, receipt printing, and real-time stock deductions seamlessly.",
    icon: <Store size={24} />
  },
  {
    title: "Kiaan Mobile POS",
    shortDesc: "Take payments anywhere with your mobile device.",
    fullDesc: "Turn your smartphone or tablet into a fully functional register. Perfect for pop-up shops, events, and table-side ordering.",
    icon: <Smartphone size={24} />
  },
  {
    title: "Kiaan Self-Service Kiosk",
    shortDesc: "Allow customers to place their own orders securely.",
    fullDesc: "A touchscreen interface designed for self-checkout. Reduces queue times and integrates directly with your main POS system.",
    icon: <Terminal size={24} />
  }
];

export default function POSSystemPage() {
  return (
    <POSTemplate 
      title="POS System" 
      description="Modern Point of Sale software for retail stores, restaurants, and multi-location businesses. Features include billing, inventory tracking, and comprehensive reporting."
      features={posFeatures}
    />
  );
}