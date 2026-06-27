"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, UserPlus, Calendar, Stethoscope, CreditCard, BarChart3,
  ChevronRight, Rocket, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, CheckCircle2, Lock, Check, ChevronDown
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Setup Clinic Profile',
    subtitle: 'Configure your clinic operational rules and profiles.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Establish the core digital identity of your general practice clinic. Configure consultation slots, add multiple specialist doctors, receptionist accounts, and specify working schedules across branches.',
    features: [
      'Multi-branch mapping',
      'Flexible doctor duty schedules',
      'Digital receptionist workspace',
      'Branded invoice configuration'
    ],
    sections: [
      {
        heading: 'Centralized Clinic Control',
        content: 'Configure clinical profile rules, branding, and details in minutes. Share records instantly across clinic departments.'
      },
      {
        heading: 'Doctor Timetable Customization',
        content: 'Define available slots for regular and visiting doctors. Minimize waiting times with smart scheduler rules.'
      }
    ]
  },
  {
    id: '02',
    title: 'Easy Patient Check-in',
    subtitle: 'Streamline patient entry and waitlist queues.',
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Empower receptionists with a fast token generation tool. Capture patient demographic details, emergency contacts, and vital medical history on check-in.',
    features: [
      'Digital token queue system',
      'EHR demographic capture',
      'Emergency alerts logging',
      'Instant SMS check-in notifications'
    ],
    sections: [
      {
        heading: 'Automated Token Queues',
        content: 'Distribute patient load dynamically among active doctors. Let patients track queue status live via mobile link.'
      }
    ]
  },
  {
    id: '03',
    title: 'Smart Consultations & e-Rx',
    subtitle: 'Empower doctors with digital charting and prescriptions.',
    icon: <Stethoscope className="w-6 h-6" />,
    description: 'Doctors can view electronic health records (EHR) instantly, log current symptoms, diagnose illnesses, and search from a dynamic built-in database of 10,000+ medicines to write e-prescriptions.',
    features: [
      'Dynamic e-prescriptions generator',
      'EHR timeline history view',
      'Medicine database search auto-suggest',
      'Lab test orders dispatch'
    ],
    sections: [
      {
        heading: 'Digital e-Prescriptions',
        content: 'Write accurate prescriptions, select dosage, route and frequency. Avoid handwriting errors and ensure patient compliance.'
      }
    ]
  },
  {
    id: '04',
    title: 'Invoicing & Pharmacy Sync',
    subtitle: 'Automate invoice generation and pharmacy orders.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Instantly calculate doctor consultation fees, diagnostic test fees, and pharmacy charges. Generate secure GST-compliant digital invoices and sync with pharmacy counters.',
    features: [
      'GST & local tax billing',
      'Pharmacy POS sync',
      'Multiple payment channels',
      'Insurance claim logging support'
    ],
    sections: [
      {
        heading: 'Synchronized Billing',
        content: 'The clinic billing counter receives prescription billing charges immediately. Patients pay once and collect medicines hassle-free.'
      }
    ]
  }
];

export const KiaanClinicLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('01');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const activeItem = WORKFLOW_ITEMS.find(item => item.id === activeTab) || WORKFLOW_ITEMS[0];

  const handleBuyNowClick = (price: number) => {
    setSelectedPrice(price);
    setIsBuyModalOpen(true);
  };

  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#2563EB]/25">
      {/* Sticky Header Nav */}
      <nav className="sticky top-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-[#E5E7EB] px-6 py-3 flex justify-between items-center">
        <div className="text-sm font-bold uppercase tracking-widest text-[#0F172A] flex items-center gap-2">
          <span className="w-5 h-5 rounded bg-[#2563EB] text-white flex items-center justify-center text-[10px] font-bold">K</span>
          Kiaan Clinic
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-[#2563EB] text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors shadow-sm"
          >
            Request Demo
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 relative overflow-hidden bg-white text-center">
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] animate-pulse"></span>
            Clinic Operations Reimagined
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 text-[#0F172A]">
            The Modern <span className="text-[#2563EB]">Clinic ERP</span> & EHR Solution
          </h1>
          
          <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            Centralize patient records, digitize prescriptions, automate token queues, and sync billing in real-time. Created specifically for general clinics, specialists, and diagnostics hubs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto bg-[#2563EB] text-white px-6 py-2.5 text-xs rounded-full font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/10 hover:scale-105"
            >
              Get Started Free <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* Workflow Navigation & Panel */}
      <section className="py-12 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-2 text-[#0F172A]">
              Platform <span className="text-[#2563EB]">Workflows</span>
            </h2>
            <p className="text-[#64748B] text-xs leading-relaxed">
              Step-by-step clinical pipeline built to optimize reception workloads and enhance doctor productivity.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left selector */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {WORKFLOW_ITEMS.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      isActive 
                        ? 'bg-white border-[#2563EB]/50 shadow-md text-[#2563EB]' 
                        : 'bg-transparent border-transparent text-[#64748B] hover:bg-white/50 hover:text-[#0F172A]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${isActive ? 'bg-[#2563EB]/10 text-[#2563EB]' : 'bg-zinc-100 text-zinc-500'}`}>
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-[10px] uppercase font-bold text-[#64748B]">Step {item.id}</div>
                        <div className="font-bold text-sm text-[#0F172A]">{item.title}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right details */}
            <div className="lg:w-2/3 bg-white border border-[#E5E7EB] rounded-2xl p-6 min-h-[300px] flex flex-col justify-between shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2 uppercase tracking-wide">
                    {activeItem.title}
                  </h3>
                  <p className="text-[#64748B] text-xs leading-relaxed mb-6">
                    {activeItem.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {activeItem.sections.map((sec, idx) => (
                      <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] p-4 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#2563EB]/40"></div>
                        <h4 className="text-sm font-bold text-[#0F172A] mb-1">{sec.heading}</h4>
                        <p className="text-xs text-[#64748B] leading-relaxed">{sec.content}</p>
                      </div>
                    ))}
                  </div>

                  <div className="bg-[#F5F7FA] border border-[#E5E7EB] p-4 rounded-xl">
                    <div className="text-xs font-bold text-[#0F172A] mb-2">Key Features</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#64748B]">
                      {activeItem.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="text-[#10B981] w-3.5 h-3.5 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-2 text-[#0F172A]">
              Pricing <span className="text-[#2563EB]">Plans</span>
            </h2>
            <p className="text-[#64748B] text-xs">
              Affordable operational plans tailormade for single clinic setups and growing franchises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Lite', price: 9, features: ['1 Branch', '2 Doctors Limit', 'Basic Invoicing', 'EHR Demographics'] },
              { title: 'Standard', price: 19, features: ['3 Branches Limit', '5 Doctors Limit', 'e-Prescriptions Generator', 'GST & Local Tax Invoicing', 'WhatsApp Support'] },
              { title: 'Pro', price: 29, features: ['Unlimited Branches', 'Unlimited Doctors', 'Integrated Pharmacy POS Sync', 'Live Queue SMS Alerts', 'Priority Support'] }
            ].map((plan) => (
              <div key={plan.title} className="bg-white border border-[#E5E7EB] rounded-2xl p-6 flex flex-col justify-between hover:border-[#2563EB]/40 transition-colors shadow-sm">
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">{plan.title}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-[#0F172A]">${plan.price}</span>
                    <span className="text-xs text-[#64748B]">/month</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#64748B]">
                        <Check className="text-[#10B981] w-3.5 h-3.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  onClick={() => handleBuyNowClick(plan.price)}
                  className="w-full bg-[#2563EB] text-white py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors"
                >
                  Buy Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsDemoModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 w-full max-w-sm relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 p-1.5 rounded-full">
                <X size={14} />
              </button>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 uppercase tracking-tight">Request Demo Account</h3>
              <p className="text-xs text-[#64748B] mb-6">Provide details to setup your sandbox clinic portal.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Clinic Demo Setup Scheduled!"); setIsDemoModalOpen(false); }}>
                <input required type="text" placeholder="Full Name" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <input required type="email" placeholder="Email Address" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <button type="submit" className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors mt-2">
                  Request Sandbox Access
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Buy Now Modal overlay */}
      <AnimatePresence>
        {isBuyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsBuyModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 w-full max-w-sm relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsBuyModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 p-1.5 rounded-full">
                <X size={14} />
              </button>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 uppercase tracking-tight">Complete Subscription</h3>
              <p className="text-xs text-[#64748B] mb-6">Plan details for standard deployment billing of ${selectedPrice}/month.</p>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl text-xs text-[#64748B] flex justify-between items-center">
                  <span>Subscription Billing Rate:</span>
                  <span className="font-bold text-[#0F172A]">${selectedPrice}/month</span>
                </div>
                <button 
                  onClick={() => { alert(`Thank you for subscribing! Standard setup initialized at $${selectedPrice}/mo.`); setIsBuyModalOpen(false); }}
                  className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors shadow-lg"
                >
                  Pay & Deploy Cloud
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
