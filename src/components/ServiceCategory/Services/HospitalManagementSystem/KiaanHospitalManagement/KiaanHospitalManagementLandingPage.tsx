"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Hospital, Building2, Stethoscope, UserRound, CalendarDays, Bed, Microscope, Pill, ClipboardList, FileText, Package, BarChart3, BrainCircuit, HeartPulse,
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Send, Star, Crown, CheckCircle2, Lock, Check, ChevronDown, Hash, Home, GitFork
} from 'lucide-react';
<<<<<<< HEAD

const WORKFLOW_ITEMS = [
=======
import { KiaanHospitalManagementWorkflow } from './KiaanHospitalManagementWorkflow';
import { KiaanHospitalManagementFeatures } from './KiaanHospitalManagementFeatures';
import { KiaanHospitalManagementGallery } from './KiaanHospitalManagementGallery';
import { KiaanHospitalManagementForms } from './KiaanHospitalManagementForms';
// ye line add ki hai mene bhai
const PLANS = [
>>>>>>> 0cf77e71c9ef044395b09c54ed11749230a4fcd1
  {
    id: '01',
    title: 'Hospital Setup',
    subtitle: 'Configure hospital branches, departments, and settings.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Establish the core digital infrastructure of your hospital. Define branch locations, registration settings, timezone, emergency configurations, and main settings.',
    features: [
      'Define multiple facility branches',
      'Upload institutional branding',
      'Set timezone & working parameters',
      'Initialize triage protocols',
      'Configure tax & receipt settings',
      'General software preferences'
    ],
    sections: [
      {
        heading: 'Multi-Branch Hospital Config',
        content: 'Setup multiple facilities under a single system dashboard, enabling centralized management of patients, schedules, and clinical resources.'
      },
      {
        heading: 'Core Identity Settings',
        content: 'Control branding, official contact details, tax configurations, and logo representation across all patient sheets and billing receipts.'
      }
    ]
  },
  {
    id: '02',
    title: 'Department Management',
    subtitle: 'Create and coordinate clinical and administrative departments.',
    icon: <Hospital className="w-6 h-6" />,
    description: 'Organize your healthcare institution by setting up specialized departments such as Cardiology, Orthopedics, Pediatrics, Emergency, Billing, and Administration.',
    features: [
      'Create custom medical departments',
      'Define department-specific triage rules',
      'Set unique consulting rates',
      'Manage administrative units',
      'Link wards with specific departments',
      'Inter-departmental messaging'
    ],
    sections: [
      {
        heading: 'Specialization Mapping',
        content: 'Define distinct consultation fees, clinical workflows, and bed-ward links tailored to each specialty department.'
      },
      {
        heading: 'Inter-Departmental Sync',
        content: 'Enable seamless collaboration and instant electronic health record transfers across radiology, laboratory, and consulting desks.'
      }
    ]
  },
  {
    id: '03',
    title: 'Doctor & Staff Management',
    subtitle: 'Register doctors, nurses, administrative staff, and configure access.',
    icon: <UserRound className="w-6 h-6" />,
    description: 'Manage profiles, scheduling, shifts, consultations, and role-based access control for doctors, nurses, cashiers, technicians, and managers.',
    features: [
      'Unlimited doctor & staff registration',
      'Role-based module permissions',
      'Configure duty roster & shifts',
      'Track doctor consulting slots',
      'Manage doctor leave/availability',
      'Staff activity logs & auditing'
    ],
    sections: [
      {
        heading: 'Duty Rota & Shifts',
        content: 'Manage daily and weekly shifts, scheduling doctor availability and on-call rotations to ensure 24/7 patient coverage.'
      },
      {
        heading: 'Secure Access Permissions',
        content: 'Restrict patient record access only to authorized medical personnel, maintaining strict compliance with healthcare data regulations.'
      }
    ]
  },
  {
    id: '04',
    title: 'Patient Registration',
    subtitle: 'Register patients and manage unified electronic health records.',
    icon: <HeartPulse className="w-6 h-6" />,
    description: 'Quick registration of new patients, generating unique Patient IDs, recording emergency contacts, allergy histories, and health details.',
    features: [
      'Quick registration dashboard',
      'Auto-generate unique Patient IDs',
      'Log allergies & past history',
      'Add emergency contacts',
      'Unified electronic health records',
      'QR code identity cards'
    ],
    sections: [
      {
        heading: 'Unified Medical File',
        content: 'Store clinical history, active medications, demographic data, and consultation notes in one consolidated electronic folder.'
      },
      {
        heading: 'Digital Patient Card',
        content: 'Generate scanning QR codes or print RFID identity cards for easy check-in, check-out, and record matching.'
      }
    ]
  },
  {
    id: '05',
    title: 'Appointment Scheduling',
    subtitle: 'Book and coordinate consultations with automated reminders.',
    icon: <CalendarDays className="w-6 h-6" />,
    description: 'Advanced booking calendar allowing real-time selection of available slots, slot blocking, rescheduling, and doctor availability integration.',
    features: [
      'Interactive visual calendar',
      'Prevent double-booking slots',
      'Real-time doctor calendar sync',
      'Automated SMS/WhatsApp reminders',
      'Easy rescheduling & cancellations',
      'Triage status coordination'
    ],
    sections: [
      {
        heading: 'Intelligent Booking Calendar',
        content: 'Optimize doctor times, prevent double-bookings, and balance consultation loads across different shifts.'
      },
      {
        heading: 'Automated Confirmations',
        content: 'Send immediate appointment confirmations, instructions, and follow-up alerts to patient smartphones.'
      }
    ]
  },
  {
    id: '06',
    title: 'OPD Management',
    subtitle: 'Streamline Out-Patient triage, vital checks, and prescriptions.',
    icon: <Stethoscope className="w-6 h-6" />,
    description: 'Control out-patient flow, record patient vitals, input doctor notes, draft e-prescriptions, and order lab tests.',
    features: [
      'Record vitals (BP, sugar, pulse)',
      'Digital prescription writer',
      'Log ICD-10 medical diagnoses',
      'Order labs & pharmacy directly',
      'Interactive consulting console',
      'Live waiting queue tracker'
    ],
    sections: [
      {
        heading: 'Consultation Desk',
        content: 'Provide doctors with an interactive console to input symptoms, review clinical history, and issue digital prescriptions.'
      },
      {
        heading: 'Queue Management System',
        content: 'Display live patient queue statuses on screens in waitrooms to reduce patient anxiety and streamline entry.'
      }
    ]
  },
  {
    id: '07',
    title: 'IPD Management',
    subtitle: 'Manage admissions, ward allocations, IPD rounds, and discharge.',
    icon: <Bed className="w-6 h-6" />,
    description: 'Handle inpatient admissions, bed tracking (ICU, General, Private), surgical planning, doctor checkups, and nursing charts.',
    features: [
      'Admissions & discharge tracker',
      'Visual bed management board',
      'ICU, general & private ward setup',
      'Daily nursing charts & logs',
      'Track surgical & operation status',
      'Discharge summary generator'
    ],
    sections: [
      {
        heading: 'Bed Occupancy Dashboard',
        content: 'Gain a real-time visual display of occupied, vacant, dirty, and reserved hospital beds across all wards.'
      },
      {
        heading: 'Ward Rounds & Charts',
        content: 'Record medication administration times, blood pressure logs, and daily nurse progress reports directly at bedside.'
      }
    ]
  },
  {
    id: '08',
    title: 'Laboratory Management',
    subtitle: 'Handle diagnostic requests, tests, and digital lab reports.',
    icon: <Microscope className="w-6 h-6" />,
    description: 'Track laboratory requests from doctors, input blood/urine sample collection, process tests, and upload digital reports.',
    features: [
      'Log diagnostic test requests',
      'Sample collection status tracker',
      'Print barcode labels for samples',
      'Upload digital test outcomes',
      'Custom report templates',
      'Direct sync with billing'
    ],
    sections: [
      {
        heading: 'Diagnostic Worklists',
        content: 'Coordinate pathology tests, radiology tasks, and scanner scheduling for technicians.'
      },
      {
        heading: 'Patient Portal Delivery',
        content: 'Automatically dispatch verified laboratory results to the patient portal, email, and doctor dashboard.'
      }
    ]
  },
  {
    id: '09',
    title: 'Pharmacy Management',
    subtitle: 'Control medicine stock, sales, and pharmacy inventory.',
    icon: <Pill className="w-6 h-6" />,
    description: 'Manage drug stocks, batch expiry tracking, supplier replenishment orders, and point-of-sale medicine billing.',
    features: [
      'Prescription auto-fetching',
      'Medicine stock & inventory log',
      'Batch & expiry alert system',
      'Log supplier purchase orders',
      'Quick POS retail invoice writer',
      'Manage returns & refunds'
    ],
    sections: [
      {
        heading: 'Inventory Control',
        content: 'Track stock levels of all pharmaceutical items, configure expiry alerts, and handle return-to-vendor protocols.'
      },
      {
        heading: 'Prescription Integration',
        content: 'Instantly pull prescription records from OPD and IPD desks to prepare accurate medication packets.'
      }
    ]
  },
  {
    id: '10',
    title: 'Billing & Insurance',
    subtitle: 'Process medical billing, split payments, and insurance claims.',
    icon: <FileText className="w-6 h-6" />,
    description: 'Generate unified invoices for OPD consultations, IPD admissions, diagnostic tests, and pharmacy purchases.',
    features: [
      'Unified multi-department bills',
      'Accept UPI, cash, cards, wallets',
      'Split payment configurations',
      'Insurance pre-auth tracker',
      'Cashless admission processes',
      'GST-compliant tax invoices'
    ],
    sections: [
      {
        heading: 'Insurance Claims Tracker',
        content: 'Submit authorization requests and track reimbursement claims from corporate payers and government schemes.'
      },
      {
        heading: 'Split Billing & Settlements',
        content: 'Handle cashless admissions, co-payments, deposit deductions, and write-off policies seamlessly.'
      }
    ]
  },
  {
    id: '11',
    title: 'Inventory Management',
    subtitle: 'Track surgical supplies, hospital equipment, and stock.',
    icon: <Package className="w-6 h-6" />,
    description: 'Monitor inventory levels of surgical tools, non-medical items, consumables, and hospital assets.',
    features: [
      'Surgical tool & equipment logs',
      'Monitor consumables stock levels',
      'Set automated reorder counts',
      'Vendor contacts & history profiles',
      'Purchase invoice tracking',
      'Internal branch stock requests'
    ],
    sections: [
      {
        heading: 'Automated Restocking',
        content: 'Calculate stock reorder points and automatically compile replenishment drafts for approval.'
      },
      {
        heading: 'Vendor & Audit Management',
        content: 'Log purchase rates, track vendor response history, and perform physical stock audits.'
      }
    ]
  },
  {
    id: '12',
    title: 'Reports & Analytics',
    subtitle: 'Analyze revenue, occupancies, and operational metrics.',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Comprehensive reporting suite with daily revenue dashboards, bed occupancy trends, department metrics, and financial audits.',
    features: [
      'Daily financial receipts logger',
      'Bed occupancy analytics charts',
      'Compare department efficiency',
      'Doctor consulting reports',
      'Export PDF & Excel sheets',
      'Staff activity analytics logs'
    ],
    sections: [
      {
        heading: 'Administrative Reports',
        content: 'Download customized PDF reports covering financial performance, occupancy levels, and staff efficiency.'
      },
      {
        heading: 'Financial Audit Logs',
        content: 'Reconcile ledger accounts, verify cash balances, and audit billing modifications.'
      }
    ]
  },
  {
    id: '13',
    title: 'Multi Hospital Management',
    subtitle: 'Oversee all hospital branches from a single dashboard.',
    icon: <GitFork className="w-6 h-6" />,
    description: 'Enterprise management dashboard to compare branch statistics, coordinate inter-branch doctor schedules, and manage global inventory.',
    features: [
      'Compare multi-facility statistics',
      'Global inventory tracking view',
      'Global staff rotation planner',
      'Consolidated corporate reports',
      'Central patient registry access',
      'Global configuration engine'
    ],
    sections: [
      {
        heading: 'Global Operations View',
        content: 'Review the performance, bed availability, and cash receipt logs of all hospital branches in real-time.'
      },
      {
        heading: 'Centralized Registry',
        content: 'Access customer folders globally, enabling secure patient file synchronization across all branches.'
      }
    ]
  },
  {
    id: '14',
    title: 'AI Insights',
    subtitle: 'Use machine learning for diagnosis assistance and demand predictions.',
    icon: <BrainCircuit className="w-6 h-6" />,
    description: 'Access AI analytics to predict next-month bed occupancy, optimize staffing, and analyze patient readmission risks.',
    features: [
      'Predict peak occupancy seasons',
      'Flag potential diagnostic errors',
      'Analyze readmission probabilities',
      'Recommend staffing levels',
      'Identify high-cost anomalies',
      'AI pharmacy stock predictions'
    ],
    sections: [
      {
        heading: 'AI Occupancy Forecasting',
        content: 'Forecast peak patient flow dates, helping administrative heads adjust staff rosters and bed counts ahead of time.'
      },
      {
        heading: 'Smart Diagnosis Validation',
        content: 'Deploy algorithms to double-check prescription matching and flag medication safety alerts.'
      }
    ]
  }
];

export const KiaanHospitalManagementLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [mobileExpandedId, setMobileExpandedId] = useState<string | null>('01');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Buy Now Flow State
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({ fullName: '', email: '', whatsapp: '' });

  const handleChoosePlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsBuyModalOpen(false);
    setIsCustomerFormOpen(true);
  };

  const isCustomerFormValid = customerForm.fullName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email) &&
    /^[0-9]{10,}$/.test(customerForm.whatsapp) &&
    selectedPlan !== '';

  const handleContinueToPayment = () => {
    if (isCustomerFormValid) {
      console.log("Proceeding to payment:", { ...customerForm, plan: selectedPlan });
      window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}`;
      setIsCustomerFormOpen(false);
    }
  };

  const toggleMobileAccordion = (id: string) => {
    setMobileExpandedId(mobileExpandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#2563EB]/20">

      {/* Hero Header with Premium White Background and Blue Accents */}
      <div className="relative overflow-hidden bg-white border-b border-[#E5E7EB] pt-32 pb-20 px-6">
        <div className="max-w-[1400px] mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            Enterprise Clinical SaaS
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-display font-bold tracking-tight text-[#111827] mb-6">
            Hospital <span className="text-[#2563EB] bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] bg-clip-text text-transparent">Management System</span>
          </h1>

          <div className="max-w-3xl mx-auto text-[#4B5563] text-base lg:text-lg leading-relaxed space-y-4">
            <p>
              A clean, modular, and cloud-first platform engineered to centralize patient registration, schedules, OPD, IPD, lab tests, prescriptions, pharmacy stock, billing, and insurances under one secure portal.
            </p>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">

        {/* WORKFLOW OVERVIEW TITLE */}
        <div className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-8 text-center lg:text-left flex items-center gap-2 justify-center lg:justify-start">
          <Stethoscope size={16} /> WORKFLOW & MODULES OVERVIEW
        </div>

        {/* DESKTOP LAYOUT (Left Workflow Navigation + Right Detail Panel) */}
        <div className="hidden lg:flex gap-8 items-start">

          {/* LEFT SIDE: Vertical Workflow Cards */}
          <div className="w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3">
            {WORKFLOW_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-2xl border transition-all duration-300 flex items-center p-4 group ${isActive
                      ? 'bg-white border-[#2563EB] shadow-[0_8px_30px_rgba(15,23,42,0.08)] translate-x-1'
                      : 'bg-white border-[#E5E7EB] hover:bg-[#F8FBFF] hover:border-[#2563EB]/30'
                    }`}
                >
                  <div className={`text-lg font-bold mr-5 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'}`}>
                    {item.id}
                  </div>
                  <div className={`mr-4 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#4B5563]'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-0.5 transition-colors ${isActive ? 'text-[#111827]' : 'text-[#4B5563]'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs transition-colors line-clamp-1 ${isActive ? 'text-[#4B5563]' : 'text-[#6B7280]'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight size={18} className={`transition-all duration-300 ${isActive ? 'text-[#2563EB] translate-x-1' : 'text-[#6B7280] group-hover:text-[#4B5563]'}`} />
                </div>
              );
            })}

            {/* Bottom Actions */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-[#2563EB] text-white py-3.5 rounded-2xl font-bold text-sm tracking-wide hover:bg-[#2563EB]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/15"
              >
                <Rocket size={18} />
                Request Demo
              </button>
              <button
                onClick={() => setIsBuyModalOpen(true)}
                className="flex-1 bg-white border border-[#2563EB] text-[#2563EB] py-3.5 rounded-2xl font-bold text-sm tracking-wide hover:bg-[#EFF6FF] transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Detail Panel */}
          <div className="flex-1 w-full max-w-[850px] bg-white border border-[#E5E7EB] rounded-[20px] p-8 shadow-xl shadow-[#0F172A]/8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2563EB]/10 text-[#2563EB] font-bold text-lg px-3.5 py-2 rounded-xl leading-none flex items-center justify-center border border-[#2563EB]/20 shadow-sm">
                      {activeItem.id}
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-[#111827] tracking-tight">
                        {activeItem.title}
                      </h2>
                      <p className="text-xs text-[#6B7280] font-medium mt-0.5">{activeItem.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Main description */}
                <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Info Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {activeItem.sections?.map((section, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl relative overflow-hidden group hover:border-[#2563EB]/30 transition-colors">
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-[#2563EB]/20 group-hover:bg-[#2563EB] transition-colors"></div>
                      <h4 className="text-base font-bold text-[#111827] mb-2">
                        {section.heading}
                      </h4>
                      <p className="text-[#4B5563] text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="bg-[#F5F7FA] border border-[#E5E7EB] p-6 rounded-2xl">
                  <h3 className="text-[#111827] font-bold text-base mb-5 flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
                    <CheckCircle2 className="text-[#14B8A6] w-5 h-5" /> Key Capabilities & Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6">
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[#4B5563] text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* TABLET & MOBILE LAYOUT (Accordion Workflow) */}
        <div className="block lg:hidden w-full space-y-4">
          {WORKFLOW_ITEMS.map((item) => {
            const isExpanded = mobileExpandedId === item.id;
            return (
              <div key={item.id} className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm transition-all duration-300">
                
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleMobileAccordion(item.id)}
                  className={`w-full flex items-center justify-between p-5 text-left transition-colors ${
                    isExpanded ? 'bg-white border-b border-[#E5E7EB]' : 'hover:bg-[#F8FBFF]'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-base font-bold transition-colors ${isExpanded ? 'text-[#2563EB]' : 'text-[#6B7280]'}`}>
                      {item.id}
                    </span>
                    <span className={isExpanded ? 'text-[#2563EB]' : 'text-[#4B5563]'}>
                      {item.icon}
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#111827]">{item.title}</h4>
                      <p className="text-xs text-[#6B7280] line-clamp-1 font-normal mt-0.5">{item.subtitle}</p>
                    </div>
                  </div>
                  <ChevronRight size={18} className={`text-[#6B7280] transition-transform duration-300 ${isExpanded ? 'rotate-90 text-[#2563EB]' : ''}`} />
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 space-y-6">
                        <p className="text-[#4B5563] text-sm leading-relaxed">{item.description}</p>
                        
                        {/* Section Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.sections.map((section, idx) => (
                            <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] p-4 rounded-xl relative pl-5">
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#2563EB]/50"></div>
                              <h5 className="text-sm font-bold text-[#111827] mb-1.5">{section.heading}</h5>
                              <p className="text-[#4B5563] text-xs leading-relaxed">{section.content}</p>
                            </div>
                          ))}
                        </div>

                        {/* Features list */}
                        <div className="bg-[#F5F7FA] border border-[#E5E7EB] p-4 rounded-xl space-y-3">
                          <h6 className="text-[#111827] font-bold text-xs flex items-center gap-1.5 border-b border-[#E5E7EB] pb-2">
                            <CheckCircle2 size={14} className="text-[#14B8A6]" /> Features
                          </h6>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {item.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-[#4B5563] text-xs">
                                <div className="w-4 h-4 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0 mt-0.5">
                                  <Check size={10} strokeWidth={3} />
                                </div>
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Bottom Actions for Mobile */}
          <div className="flex gap-4 pt-4">
            <button
              onClick={() => setIsDemoModalOpen(true)}
              className="flex-1 bg-[#2563EB] text-white py-3 rounded-xl font-bold text-xs tracking-wide hover:bg-[#2563EB]/90 transition-all flex items-center justify-center gap-2"
            >
              <Rocket size={16} />
              Request Demo
            </button>
            <button
              onClick={() => setIsBuyModalOpen(true)}
              className="flex-1 bg-white border border-[#2563EB] text-[#2563EB] py-3 rounded-xl font-bold text-xs tracking-wide hover:bg-[#EFF6FF] transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Buy Now
            </button>
          </div>
        </div>

        {/* Sub-features list */}
        <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-[#E5E7EB] text-xs text-[#6B7280] font-medium max-w-4xl mx-auto">
          <div className="flex items-center gap-2"><ShieldCheck className="text-[#2563EB]" size={16} /> Secure & Reliable</div>
          <div className="flex items-center gap-2"><Cloud className="text-[#2563EB]" size={16} /> Cloud Based</div>
          <div className="flex items-center gap-2"><Clock className="text-[#2563EB]" size={16} /> 99.9% Uptime</div>
          <div className="flex items-center gap-2"><Headphones className="text-[#2563EB]" size={16} /> 24/7 Support</div>
        </div>

      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsDemoModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 p-2 rounded-full">
                <X size={16} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-[#111827] mb-2">Request Demo</h3>
                <p className="text-[#4B5563] text-sm">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Demo Requested!"); setIsDemoModalOpen(false); }}>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" />
                </div>
                
                <button type="submit" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#2563EB]/90 transition-colors mt-4">
                  Request Demo
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Buy Now Modal */}
      <AnimatePresence>
        {isBuyModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsBuyModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-5 w-full max-w-4xl relative z-10 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsBuyModalOpen(false)}
                className="absolute top-3 right-3 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 p-1.5 rounded-full"
              >
                <X size={14} />
              </button>

              <div className="mb-4 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#111827] mb-1 uppercase tracking-wide">
                  SELECT <span className="text-[#2563EB]">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-[#6B7280] text-[10px] md:text-[11px]">
                  Choose the perfect fit for your clinical and hospital operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col hover:border-[#2563EB]/30 transition-colors">
                  <h4 className="text-base font-bold text-[#111827] mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small clinics & solo doctors</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 2 Doctors',
                      '100 Patients/month',
                      'Basic Appointments',
                      'OPD Consultation Logs',
                      'Basic Billing Reports',
                      'Email Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#4B5563] font-medium">
                        <Check size={12} className="text-[#14B8A6] shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Starter - $9/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-[#2563EB]/10 text-[#2563EB] font-bold text-[9px] md:text-[10px] hover:bg-[#2563EB]/20 transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Professional Plan */}
                <div className="bg-white border-2 border-[#2563EB] rounded-2xl p-4 flex flex-col relative shadow-[0_10px_30px_rgba(37,99,235,0.08)] -mt-1 mb-1 z-10">
                  <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[8px] md:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                  <h4 className="text-base font-bold text-[#111827] mb-0.5">Professional</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for growing practices</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 10 Doctors',
                      'Unlimited Patients',
                      'Everything in Starter',
                      'Lab & Pharmacy modules',
                      'OPD + IPD Bed setup',
                      'Priority Support',
                      'Data Backup'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#4B5563] font-medium">
                        <Check size={12} className="text-[#2563EB] shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Professional - $19/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-[#2563EB] text-white font-bold text-[9px] md:text-[10px] hover:bg-[#2563EB]/90 transition-colors shadow-[0_0_20px_rgba(37,99,235,0.2)] uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col hover:border-[#2563EB]/30 transition-colors">
                  <h4 className="text-base font-bold text-[#111827] mb-0.5">Enterprise</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For large hospital networks</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Unlimited Doctors',
                      'Unlimited Patients',
                      'Everything in Professional',
                      'Multi-branch Support',
                      'AI Analytics Insights',
                      'Role-Based access control',
                      '24/7 SLA Priority support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#4B5563] font-medium">
                        <Check size={12} className="text-[#14B8A6] shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Enterprise - $29/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-[#2563EB]/10 text-[#2563EB] font-bold text-[9px] md:text-[10px] hover:bg-[#2563EB]/20 transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Customer Information Form Modal */}
      <AnimatePresence>
        {isCustomerFormOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsCustomerFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 w-full max-w-md relative z-10 shadow-2xl overflow-hidden"
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#111827] mb-2 tracking-wide">
                  Complete Your Purchase
                </h3>
                <p className="text-[#4B5563] text-xs md:text-sm leading-relaxed">
                  Enter your details below to continue with your subscription and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="sr-only">Email Address</label>
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required
                    type="email"
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="flex">
                  <div className="bg-[#F1F5F9] border border-[#E5E7EB] border-r-0 rounded-l-xl px-4 py-3 text-sm text-zinc-500 flex items-center justify-center font-bold">
                    +91
                  </div>
                  <div className="relative group flex-1">
                    <label className="sr-only">WhatsApp Number</label>
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors z-10" />
                    <input
                      required
                      type="tel"
                      value={customerForm.whatsapp}
                      onChange={(e) => setCustomerForm({ ...customerForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="WhatsApp Number"
                      maxLength={10}
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-r-xl pl-12 pr-4 py-3 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only">Selected Plan</label>
                  <Crown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2563EB] pointer-events-none z-10" />
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#2563EB]/30 rounded-xl pl-12 pr-10 py-3.5 text-sm text-[#2563EB] font-bold outline-none appearance-none cursor-pointer focus:border-[#2563EB] focus:bg-white transition-all"
                  >
                    <option value="" disabled className="text-zinc-500">Select Subscription Plan</option>
                    <option value="Starter - $9/month" className="text-[#111827]">Starter - $9/month</option>
                    <option value="Professional - $19/month" className="text-[#111827]">Professional - $19/month</option>
                    <option value="Enterprise - $29/month" className="text-[#111827]">Enterprise - $29/month</option>
                  </select>
<<<<<<< HEAD
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2563EB] pointer-events-none z-10" />
=======
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </div>
>>>>>>> 0cf77e71c9ef044395b09c54ed11749230a4fcd1
                </div>
              </div>

              <div className="mb-6 text-center">
                <p className="text-[10px] md:text-xs text-zinc-500 flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-zinc-400" />
                  Your information is secure and will only be used for your subscription and account setup.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinueToPayment}
                  disabled={!isCustomerFormValid}
<<<<<<< HEAD
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${isCustomerFormValid
                      ? 'bg-[#2563EB] text-white hover:bg-[#2563EB]/90 shadow-lg shadow-[#2563EB]/15'
                      : 'bg-[#2563EB]/30 text-white/50 cursor-not-allowed'
=======
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all ${isCustomerFormValid
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                      : 'bg-yellow-500/30 text-black/50 cursor-not-allowed'
>>>>>>> 0cf77e71c9ef044395b09c54ed11749230a4fcd1
                    }`}
                >
                  Continue to Secure Payment
                </button>
                <button
                  onClick={() => setIsCustomerFormOpen(false)}
                  className="w-full py-2 text-zinc-500 font-bold text-xs hover:text-[#2563EB] transition-colors"
                >
                  Cancel
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};