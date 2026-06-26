"use client";

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Lock, LayoutDashboard, UserPlus, Calendar, Stethoscope, FlaskConical, CreditCard, BarChart3,
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, CheckCircle2, Crown, Check
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: "Secure Login",
    subtitle: "Setup credentials and assign role-based access keys.",
    icon: <Lock className="w-6 h-6" />,
    description: "Enterprise-grade authorization with role-based access control, secure authentication, and encrypted session management. Restrict system features strictly to validated profiles, ensuring absolute HIPAA compliance and data shielding from the very first interaction.",
    features: [
      'Multi-factor Authentication',
      'Session security timeouts',
      'Biometric access configurations',
      'Role definitions & scopes',
      'Activity audits logs',
      'IP access restriction list'
    ],
    sections: [
      { heading: 'Enterprise-Grade Authentication', content: 'Every login session is protected with multi-factor authentication, encrypted tokens, and role-based access control. Users are granted access only to the modules relevant to their designated role ensuring complete data integrity and operational compliance across the entire hospital.' },
      { heading: 'HIPAA-Compliant Access Control', content: 'The system enforces strict HIPAA compliance by restricting patient data access based on validated staff roles. Unauthorized access attempts are automatically logged, and session timeouts are enforced to prevent data exposure in shared clinical environments.' },
      { heading: 'Audit Trails & IP Management', content: 'Every login, access event, and data modification is recorded in an immutable audit log. Administrators can restrict system access to specific IP addresses, monitor active sessions in real-time, and instantly revoke access for any compromised user profile.' }
    ]
  },
  {
    id: '02',
    title: "Role-based Dashboard",
    subtitle: "Customize dashboards for doctors, nurses, and admins.",
    icon: <LayoutDashboard className="w-6 h-6" />,
    description: "Customized interfaces tailored specifically for Doctors, Receptionists, Pharmacists, and Hospital Administrators. Every operator is greeted with customized summaries of their pending patients, stock statuses, or invoice pipelines to optimize execution speed.",
    features: [
      'Doctor daily OPD queue view',
      'Reception quick-booking module',
      'Pharmacy supply counters',
      'Administrator executive analytics',
      'Live system notification panels',
      'Custom shortcuts options'
    ],
    sections: [
      { heading: 'Role-Specific Interfaces', content: 'Each staff member sees a dashboard tailored to their responsibilities. Doctors view their patient queue and consultation notes, receptionists manage bookings and check-ins, pharmacists monitor stock levels, and administrators oversee hospital-wide KPIs all from a single unified platform.' },
      { heading: 'Live Operational Intelligence', content: 'The dashboard displays real-time metrics including active patient count, bed availability, pending lab orders, and cash collections. Live system notifications ensure every department stays informed about critical updates, appointment changes, and inventory alerts without delays.' },
      { heading: 'Custom Shortcuts & Quick Actions', content: 'Staff can configure personal shortcut panels for the actions they perform most frequently — whether registering a new patient, initiating a billing cycle, or checking a pharmacy requisition. These personalized workflows reduce navigation time and improve operational efficiency.' }
    ]
  },
  {
    id: '03',
    title: "Patient Registration",
    subtitle: "Onboard patients and compile electronic health records.",
    icon: <UserPlus className="w-6 h-6" />,
    description: "Unified patient onboarding, demographic capture, digital consent forms, and automated EHR record initialization. Store patient medical histories, medications, emergency contacts, allergy lists, and clinical notes in one immutable data store.",
    features: [
      'National ID verification integration',
      'Customized patient demographic sheets',
      'Allergy & risk flags toggles',
      'Previous treatment logs',
      'Family profiles linkages',
      'Medical history scans uploads'
    ],
    sections: [
      { heading: 'Unified Digital Health Records', content: 'Patient registration creates a comprehensive, permanent electronic health record capturing all demographic information, medical history, allergies, emergency contacts, and previous treatment logs. Every clinical interaction is automatically linked to this central patient profile, eliminating duplicate data entry and paper-based records.' },
      { heading: 'Consent & Risk Management', content: 'Digital consent forms are captured and stored at registration, ensuring full legal compliance for all procedures. Allergy flags and risk indicators are prominently displayed across all modules from consultation to pharmacy to prevent adverse clinical events and protect patient safety.' },
      { heading: 'Family Profiles & EHR Uploads', content: 'Multiple family members can be linked under a single primary account for consolidated billing and medical history tracking. Historical documents, diagnostic reports, and scan images can be uploaded directly into the patient profile for instant access during future consultations.' }
    ]
  },
  {
    id: '04',
    title: "Appointment Scheduling",
    subtitle: "Coordinate doctor calendars and smart patient queues.",
    icon: <Calendar className="w-6 h-6" />,
    description: "Intelligent booking systems, automated token generation, doctor calendars, and live WhatsApp/SMS alerts. Coordinate OPD timeframes, emergency overrides, and schedule check-ups across multiple departments synchronously.",
    features: [
      'Dynamic time-slot booking grid',
      'Automatic token number dispatching',
      'SMS/Email confirmation auto-triggers',
      'Doctor holiday schedule calendars',
      'Direct booking via patient portals',
      'OPD queue check-in updates'
    ],
    sections: [
      { heading: 'Intelligent OPD Scheduling', content: 'The scheduling engine provides an interactive, real-time booking grid across all departments and doctors. Administrators can define available time slots, manage doctor leaves, and handle emergency overrides without disrupting scheduled appointments. Patients receive automated SMS and email confirmations immediately upon booking.' },
      { heading: 'Automated Token & Queue Management', content: 'Upon appointment confirmation, the system automatically assigns sequential token numbers and updates the OPD queue in real-time. Digital display boards and staff dashboards show live queue status, estimated wait times, and current consultation progress eliminating manual queue management overhead.' },
      { heading: 'Multi-Channel Patient Booking', content: 'Patients can book appointments directly through the patient portal, reception desk, or via phone. The system synchronizes bookings across all channels in real-time, preventing double bookings and ensuring every doctor calendar remains accurately updated across all access points.' }
    ]
  },
  {
    id: '05',
    title: "Doctor Consultation",
    subtitle: "Draft clinical checkups, SOAP files, and e-prescriptions.",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "Interactive SOAP notes, medical history summaries, ICD-10 diagnostic coding, and instant digital e-prescription drafting. Doctors can search pre-approved formulary lists, check drug interactions, and route orders directly to the internal pharmacy.",
    features: [
      'Electronic prescriptions routing',
      'ICD-10 diagnostics codes catalog',
      'Drug allergy cross-references',
      'Interactive vital signs graphs',
      'Clinical notes voice logs',
      'Referral letter drafting tools'
    ],
    sections: [
      { heading: 'Structured Clinical Documentation', content: 'Doctors document consultations using standardized SOAP note templates capturing Subjective complaints, Objective findings, Assessments, and Plans in a structured format. Every consultation is permanently stored in the patient EHR, providing a complete longitudinal medical record accessible from any department.' },
      { heading: 'ICD-10 Diagnostics & E-Prescriptions', content: 'The integrated ICD-10 diagnosis catalog allows doctors to accurately code medical conditions for billing and insurance purposes. E-prescriptions are generated instantly with dosage guidelines, drug interaction warnings, and formulary compliance checks then routed directly to the internal pharmacy for dispensing.' },
      { heading: 'Vitals Tracking & Referral Management', content: 'Vital signs including blood pressure, temperature, SPO2, and glucose levels are recorded and displayed on interactive trend graphs for longitudinal health monitoring. Doctors can generate structured referral letters for specialists or escalate cases to other departments directly from the consultation workspace.' }
    ]
  },
  {
    id: '06',
    title: "Laboratory / Pharmacy / Radiology",
    subtitle: "Track inventory, verify diagnostic orders, and manage stock.",
    icon: <FlaskConical className="w-6 h-6" />,
    description: "Barcoded sample tracking, automated diagnostic results, e-prescription routing, and pharmacy stock management. Streamline internal requisitions for lab tests, blood banks, radiology scans, and medication stocks seamlessly.",
    features: [
      'Lab sample barcodes integrations',
      'Automatic results verification workflow',
      'Pharmacy batch/expiry date controls',
      'Re-order thresholds alert triggers',
      'PACS radiology image linkages',
      'Formulary substitute recommendations'
    ],
    sections: [
      { heading: 'Integrated Laboratory Management', content: 'Laboratory test requisitions are automatically generated from doctor consultations and tracked using barcoded sample IDs. Results are verified by lab technicians and instantly updated in the patient EHR, notifying doctors in real-time. Blood bank inventory, sample collection logs, and turnaround time reports are managed from a central lab dashboard.' },
      { heading: 'Pharmacy Stock & Dispensing Control', content: 'The pharmacy module tracks medication inventory in real-time, including batch numbers, expiry dates, and stock levels. E-prescriptions from doctor consultations are routed directly to the dispensing queue, reducing errors and wait times. Automatic re-order alerts ensure critical medications are always available for patient care.' },
      { heading: 'Radiology & PACS Integration', content: 'Radiology scan orders are generated from the consultation module and managed through a dedicated PACS-linked imaging workflow. Radiologists review and report scan findings digitally, with images and reports stored directly in the patient EHR for immediate access by treating physicians across all departments.' }
    ]
  },
  {
    id: '07',
    title: "Billing & Payments",
    subtitle: "Automate invoicing, tax logs, and insurance claims.",
    icon: <CreditCard className="w-6 h-6" />,
    description: "Integrated invoicing, split bill handling, active insurance claim processing, and instant digital receipts. Route items automatically from consultation, pharmacy, and diagnostic services directly to the final patient invoice.",
    features: [
      'OPD/IPD consolidated bill logs',
      'Insurance TPAs claim management',
      'Multiple payment channels support',
      'Partial payment plans creation',
      'Refund and rebate configurations',
      'Tax & GST summary generation'
    ],
    sections: [
      { heading: 'Consolidated OPD & IPD Billing', content: 'All charges from consultation, pharmacy, laboratory, radiology, and procedures are automatically consolidated into a single patient invoice. OPD and IPD billing workflows are handled separately with appropriate charge structures, and digital receipts are generated and sent to patients immediately upon payment settlement.' },
      { heading: 'Insurance & TPA Claims Management', content: 'The billing module integrates with major insurance providers and Third Party Administrators to streamline claim submission, pre-authorization tracking, and settlement monitoring. Cashless claim workflows are supported for empanelled insurers, reducing administrative overhead and accelerating hospital revenue recovery.' },
      { heading: 'Flexible Payments & Tax Compliance', content: 'Patients can pay via cash, credit card, UPI, net banking, or digital wallets. Partial payment plans and outstanding balance tracking ensure flexible billing for long-term admissions. Automatic GST calculation, tax summaries, and audit-ready financial reports keep the hospital fully compliant with all statutory requirements.' }
    ]
  },
  {
    id: '08',
    title: "Reports & Administration",
    subtitle: "Execute financial summaries and operational metrics.",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "Comprehensive financial analytics, staff attendance summaries, supply inventory alerts, and audit logs. Drive administrative efficiency using structured tabular metrics and charts indicating revenue trends, bed occupancies, and operational wait times.",
    features: [
      'Total OPD consultation reports',
      'Daily cash collections audits',
      'Bed occupancy metrics statistics',
      'Departmental revenue analyses',
      'Staff shifts & logins timelines',
      'Custom report queries generator'
    ],
    sections: [
      { heading: 'Financial Analytics & Revenue Reporting', content: 'Administrators access comprehensive daily, weekly, and monthly financial reports covering OPD revenue, IPD billing, pharmacy sales, and diagnostic collections. Revenue trend charts, outstanding dues tracking, and department-wise breakdowns provide complete financial visibility for informed hospital management decisions.' },
      { heading: 'Operational Metrics & Bed Management', content: 'Real-time dashboards display bed occupancy rates, average patient length of stay, admission and discharge statistics, and OPD throughput metrics. These operational KPIs help administrators identify bottlenecks, optimize resource allocation, and improve overall hospital efficiency and patient throughput.' },
      { heading: 'Staff Attendance & Audit Logs', content: 'Staff login timelines, shift schedules, and attendance records are automatically captured and available for payroll processing and HR management. Complete audit logs of all system activities from patient registration to billing modifications ensure regulatory compliance and provide accountability across all hospital operations.' }
    ]
  }
];

export default function KiaanHospitalManagementPage() {
  const [mounted, setMounted] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = React.useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = React.useState(false);

  // Buy Now Flow State (same as Dental Core)
  const [isBuyModalOpen, setIsBuyModalOpen] = React.useState(false);
  const [selectedPlan, setSelectedPlan] = React.useState('');
  const [isCustomerFormOpen, setIsCustomerFormOpen] = React.useState(false);
  const [customerForm, setCustomerForm] = React.useState({ fullName: '', email: '', whatsapp: '' });

  const handleChoosePlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsBuyModalOpen(false);
    setIsCustomerFormOpen(true);
  };

  const isCustomerFormValid =
    customerForm.fullName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email) &&
    /^[0-9]{10,}$/.test(customerForm.whatsapp);

  const handleContinueToPayment = () => {
    if (isCustomerFormValid) {
      window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}`;
      setIsCustomerFormOpen(false);
    }
  };

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsPricingModalOpen(false);
        setIsBuyModalOpen(false);
        setIsCustomerFormOpen(false);
      }
    };
    if (isPricingModalOpen || isBuyModalOpen || isCustomerFormOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPricingModalOpen, isBuyModalOpen, isCustomerFormOpen]);

  React.useEffect(() => {
    const anyOpen = isPricingModalOpen || isBuyModalOpen || isCustomerFormOpen;
    document.body.style.overflow = anyOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isPricingModalOpen, isBuyModalOpen, isCustomerFormOpen]);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#2563EB]/20">
      <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-12 lg:pt-32 lg:pb-16">

        {/* SECTION 1 - PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-[#2563EB]">Hospital Management</span>
          </h1>
          <div className="text-[#4B5563] text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              KIAAN Hospital Management System is a modern, secure, and enterprise-grade healthcare platform designed to manage complete hospital operations from a single dashboard. It streamlines patient registration, appointments, doctor consultations, billing, pharmacy, laboratory, and administration with role-based access and real-time workflow management.
            </p>
            <p>
              Whether you operate a single-specialty clinic or a large multi-department hospital, KIAAN HMS enables your clinical and administrative teams to manage patients faster, reduce operational delays, automate repetitive tasks, improve patient experience, and make smarter decisions using real-time analytics. Every module is designed to work together so your hospital operates efficiently from patient check-in to final discharge.
            </p>
          </div>
        </div>

        {/* SECTION 2 - WORKFLOW OVERVIEW */}
        <div className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-6">
          WORKFLOW OVERVIEW
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* LEFT: Workflow Cards */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3">
            {WORKFLOW_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-xl border transition-all duration-300 flex items-center p-4 group ${isActive ? 'bg-white border-[#2563EB] shadow-md shadow-[#2563EB]/5' : 'bg-white border-[#E5E7EB] hover:bg-[#F8FBFF] hover:border-[#2563EB]/30'}`}
                >
                  <div className={`text-xl font-bold mr-5 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'}`}>
                    {item.id}
                  </div>
                  <div className={`mr-4 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#4B5563]'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-1 transition-colors ${isActive ? 'text-[#0F172A]' : 'text-[#4B5563]'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs transition-colors ${isActive ? 'text-[#4B5563]' : 'text-[#6B7280]'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight size={18} className={`transition-all duration-300 ${isActive ? 'text-[#2563EB] translate-x-1' : 'text-[#6B7280] group-hover:text-[#4B5563]'}`} />
                </div>
              );
            })}

            {/* CTA Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-white border border-[#2563EB] text-[#2563EB] py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-[#EFF6FF] transition-all flex items-center justify-center gap-2"
              >
                <Rocket size={18} />
                Request Demo
              </button>
              <button
                onClick={() => setIsBuyModalOpen(true)}
                className="flex-1 bg-[#2563EB] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-[#1D4ED8] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/15"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT: Detail Panel */}
          <div className="flex-1 w-full max-w-[800px] bg-white border border-[#E5E7EB] rounded-2xl p-8 shadow-xl shadow-[#0F172A]/8 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-[#2563EB]/10 text-[#2563EB] font-bold text-xl px-3 py-1.5 rounded-lg leading-none flex items-center justify-center border border-[#2563EB]/20 shadow-sm">
                      {activeItem.id}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-[#0F172A] tracking-tight">
                      {activeItem.title}
                    </h2>
                  </div>
                  <X className="text-[#6B7280] hover:text-[#0F172A] cursor-pointer transition-colors" size={20} />
                </div>

                {/* Description */}
                <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Documentation Sections */}
                <div className="space-y-6 mb-10">
                  {activeItem.sections?.map((section, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl relative overflow-hidden group hover:border-[#2563EB]/30 transition-colors">
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#2563EB]/20 group-hover:bg-[#2563EB] transition-colors"></div>
                      <h4 className="text-lg font-bold text-[#0F172A] mb-3">{section.heading}</h4>
                      <p className="text-[#4B5563] text-sm leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* Key Capabilities */}
                <div className="bg-[#F5F7FA] border border-[#E5E7EB] p-6 rounded-2xl">
                  <h3 className="text-[#0F172A] font-bold text-base mb-5 flex items-center gap-2">
                    <CheckCircle2 className="text-[#14B8A6] w-5 h-5" /> Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
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

        {/* Footer */}
        <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-[#E5E7EB] text-xs text-[#6B7280] font-medium max-w-4xl">
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
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsDemoModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] transition-colors bg-[#F8FAFC] border border-[#E5E7EB] p-2 rounded-full">
                <X size={16} />
              </button>
              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-[#0F172A] mb-2">Request Demo Account</h3>
                <p className="text-[#64748B] text-sm">Enter your details and our technical consultants will set up your workspace.</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Demo Workspace Requested!'); setIsDemoModalOpen(false); }}>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="text" placeholder="Full Name" className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 outline-none transition-all" />
                </div>

                <button type="submit" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#1D4ED8] transition-colors mt-4 shadow-lg shadow-[#2563EB]/15">
                  Request Demo Account
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Pricing Modal — Backdrop */}
      <AnimatePresence>
        {isPricingModalOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999, backgroundColor: 'rgba(15,23,42,0.3)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
            onClick={() => setIsPricingModalOpen(false)}
          />,
          document.body
        )}
      </AnimatePresence>

      {/* Pricing Modal — Content */}
      <AnimatePresence>
        {isPricingModalOpen && createPortal(
          <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', overflowY: 'auto', pointerEvents: 'none' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              style={{ pointerEvents: 'auto' }}
              className="relative w-full max-w-5xl bg-white border border-[#E5E7EB] p-4 md:p-5 shadow-2xl text-left rounded-2xl my-auto overflow-hidden"
            >
              <button
                onClick={() => setIsPricingModalOpen(false)}
                className="absolute top-3 right-3 text-[#64748B] hover:text-[#0F172A] transition-colors bg-[#F8FAFC] border border-[#E5E7EB] p-1.5 rounded-full"
              >
                <X size={14} />
              </button>
              <div className="mb-4 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mb-1 uppercase tracking-wide">
                  SELECT <span className="text-[#2563EB]">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-[#64748B] text-[10px] md:text-[11px]">
                  Choose the perfect Hospital Management plan for your hospital, clinic, or healthcare organization.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">

                {/* Plan 1 */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col hover:border-[#2563EB]/20 transition-colors">
                  <h4 className="text-base font-bold text-[#0F172A] mb-0.5">Premium - 5 Users</h4>
                  <p className="text-[9px] md:text-[10px] text-[#64748B] mb-2">Suitable for Small Clinics & Hospitals</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#0F172A]">$9</span>
                    <span className="text-[9px] md:text-[10px] text-[#64748B] pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {['Up to 5 Users','Patient Registration','Appointment Management','Doctor Dashboard','Basic Billing','Reception Module','Email Support'].map((f,i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#4B5563] font-medium">
                        <CheckCircle2 size={12} className="text-[#2563EB] shrink-0" /><span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => { alert('Premium - 5 Users Selected!'); setIsPricingModalOpen(false); }} className="w-full py-1.5 md:py-2 rounded-lg bg-white border border-[#2563EB] text-[#2563EB] font-bold text-[9px] md:text-[10px] hover:bg-[#EFF6FF] transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Plan 2 - Most Popular */}
                <div className="bg-[#F8FAFC] border-2 border-[#2563EB] rounded-2xl p-4 flex flex-col relative shadow-[0_8px_30px_rgba(37,99,235,0.08)] -mt-1 mb-1 z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-[8px] md:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                    Most Popular
                  </div>
                  <h4 className="text-base font-bold text-[#0F172A] mb-0.5">Premium - 12 Users</h4>
                  <p className="text-[9px] md:text-[10px] text-[#64748B] mb-2">Suitable for Growing Hospitals</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#0F172A]">$19</span>
                    <span className="text-[9px] md:text-[10px] text-[#64748B] pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {['Everything in 5 Users plan','Pharmacy Module','Laboratory Module','Radiology Module','Inventory Management','Advanced Reports','Priority Support'].map((f,i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#0F172A] font-semibold">
                        <CheckCircle2 size={12} className="text-[#2563EB] shrink-0" /><span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => { alert('Premium - 12 Users Selected!'); setIsPricingModalOpen(false); }} className="w-full py-1.5 md:py-2 rounded-lg bg-[#2563EB] text-white font-bold text-[9px] md:text-[10px] hover:bg-[#1D4ED8] transition-colors shadow-md shadow-[#2563EB]/15 uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Plan 3 */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col hover:border-[#2563EB]/20 transition-colors">
                  <h4 className="text-base font-bold text-[#0F172A] mb-0.5">Premium - 25 Users</h4>
                  <p className="text-[9px] md:text-[10px] text-[#64748B] mb-2">Suitable for Multi-Speciality Hospitals</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#0F172A]">$29</span>
                    <span className="text-[9px] md:text-[10px] text-[#64748B] pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {['Everything in 12 Users plan','Multi-Hospital Management','Unlimited Users','Role-Based Access Control','Analytics Dashboard','API Integration','Dedicated Account Manager','24x7 Premium Support'].map((f,i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#4B5563] font-medium">
                        <CheckCircle2 size={12} className="text-[#2563EB] shrink-0" /><span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => { alert('Premium - 25 Users Selected!'); setIsPricingModalOpen(false); }} className="w-full py-1.5 md:py-2 rounded-lg bg-white border border-[#2563EB] text-[#2563EB] font-bold text-[9px] md:text-[10px] hover:bg-[#EFF6FF] transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

              </div>
            </motion.div>
          </div>,
          document.body
        )}
      </AnimatePresence>

      {/* Buy Now Modal — Backdrop */}
      <AnimatePresence>
        {isBuyModalOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999, backgroundColor: 'rgba(15,23,42,0.3)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            onClick={() => setIsBuyModalOpen(false)}
          />,
          document.body
        )}
      </AnimatePresence>

      {/* Buy Now Modal — Plan Selection */}
      <AnimatePresence>
        {isBuyModalOpen && createPortal(
          <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', overflowY: 'auto', pointerEvents: 'none' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ pointerEvents: 'auto' }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full max-w-5xl relative shadow-2xl my-auto"
            >
              <button
                onClick={() => setIsBuyModalOpen(false)}
                className="absolute top-4 right-4 text-[#64748B] hover:text-[#0F172A] transition-colors bg-[#F8FAFC] border border-[#E5E7EB] p-2 rounded-full"
              >
                <X size={16} />
              </button>

              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-4xl font-display font-black text-[#0F172A] mb-2 uppercase tracking-wide">
                  SELECT <span className="text-[#2563EB]">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-[#64748B] text-sm">
                  Choose the perfect fit for your hospital operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                {/* Starter */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#2563EB]/20 transition-all">
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-1">Starter</h4>
                    <p className="text-[#64748B] text-xs">Ideal for small clinics</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-[#0F172A]">$9</span>
                    <span className="text-[#64748B] text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {['Up to 1 Doctor','Up to 500 Patients','Appointment Management','Patient Record Management','Billing & Invoicing','Basic Reports','Email Support'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[#4B5563] text-sm">
                        <Check size={14} className="text-[#2563EB] shrink-0" strokeWidth={3} />{f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Starter - $9/month')}
                    className="w-full py-3 rounded-xl bg-white border border-[#2563EB] text-[#2563EB] font-bold text-xs hover:bg-[#EFF6FF] transition-colors uppercase tracking-widest mt-2"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Professional - Most Popular */}
                <div className="bg-[#F8FAFC] border-2 border-[#2563EB] rounded-2xl p-6 flex flex-col gap-4 relative shadow-[0_8px_30px_rgba(37,99,235,0.08)] -mt-2 mb-2">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#2563EB] text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-1">Professional</h4>
                    <p className="text-[#64748B] text-xs">Perfect for growing practices</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-[#0F172A]">$19</span>
                    <span className="text-[#64748B] text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {['Up to 5 Doctors','Up to 2,000 Patients','Everything in Starter','Treatment Management','SMS & Email Reminders','Advanced Reports','Priority Support','Data Backup'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[#0F172A] text-sm font-medium">
                        <Check size={14} className="text-[#2563EB] shrink-0" strokeWidth={3} />{f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Professional - $19/month')}
                    className="w-full py-3 rounded-xl bg-[#2563EB] text-white font-bold text-xs hover:bg-[#1D4ED8] transition-colors uppercase tracking-widest mt-2 shadow-lg shadow-[#2563EB]/15"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Enterprise */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#2563EB]/20 transition-all">
                  <div>
                    <h4 className="text-xl font-bold text-[#0F172A] mb-1">Enterprise</h4>
                    <p className="text-[#64748B] text-xs">For multi-location clinics</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-[#0F172A]">$29</span>
                    <span className="text-[#64748B] text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {['Unlimited Doctors','Unlimited Patients','Everything in Professional','Multi-Branch Management','Inventory Management','Advanced Analytics','Role-Based Access','24/7 Priority Support'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-[#4B5563] text-sm">
                        <Check size={14} className="text-[#2563EB] shrink-0" strokeWidth={3} />{f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Enterprise - $29/month')}
                    className="w-full py-3 rounded-xl bg-white border border-[#2563EB] text-[#2563EB] font-bold text-xs hover:bg-[#EFF6FF] transition-colors uppercase tracking-widest mt-2"
                  >
                    CHOOSE PLAN
                  </button>
                </div>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
      </AnimatePresence>

      {/* Customer Information Form — Backdrop */}
      <AnimatePresence>
        {isCustomerFormOpen && createPortal(
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99999, backgroundColor: 'rgba(15,23,42,0.3)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
            onClick={() => setIsCustomerFormOpen(false)}
          />,
          document.body
        )}
      </AnimatePresence>

      {/* Customer Information Form — Content (same as Dental Core) */}
      <AnimatePresence>
        {isCustomerFormOpen && createPortal(
          <div style={{ position: 'fixed', inset: 0, zIndex: 100000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', pointerEvents: 'none' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              style={{ pointerEvents: 'auto' }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-6 w-full max-w-md relative shadow-2xl overflow-hidden"
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#0F172A] mb-2 tracking-wide">
                  Complete Your Purchase
                </h3>
                <p className="text-[#64748B] text-xs md:text-sm leading-relaxed">
                  Enter your details below to continue with your subscription and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="sr-only">Email Address</label>
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required type="email"
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-white border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="flex">
                  <div className="bg-[#F8FAFC] border border-[#E5E7EB] border-r-0 rounded-l-xl px-4 py-3 text-sm text-[#64748B] flex items-center justify-center font-bold">
                    +91
                  </div>
                  <div className="relative group flex-1">
                    <label className="sr-only">WhatsApp Number</label>
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-[#2563EB] transition-colors z-10" />
                    <input
                      required type="tel"
                      value={customerForm.whatsapp}
                      onChange={(e) => setCustomerForm({ ...customerForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="WhatsApp Number"
                      maxLength={10}
                      className="w-full bg-white border border-[#E5E7EB] rounded-r-xl pl-12 pr-4 py-3 text-sm text-[#0F172A] placeholder-[#94A3B8] focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only">Selected Plan</label>
                  <Crown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2563EB] z-10" />
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-white border border-[#2563EB]/30 rounded-xl pl-12 pr-8 py-3 text-sm text-[#2563EB] font-bold outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/25 cursor-pointer appearance-none"
                  >
                    <option value="Starter - $9/month">Starter - $9/month</option>
                    <option value="Professional - $19/month">Professional - $19/month</option>
                    <option value="Enterprise - $29/month">Enterprise - $29/month</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2563EB]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-6 text-center">
                <p className="text-[10px] md:text-xs text-[#64748B] flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-[#64748B]" />
                  Your information is secure and will only be used for your subscription and account setup.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinueToPayment}
                  disabled={!isCustomerFormValid}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${
                    isCustomerFormValid
                      ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/15'
                      : 'bg-[#2563EB]/30 text-white/50 cursor-not-allowed'
                  }`}
                >
                  Continue to Secure Payment
                </button>
                <button
                  onClick={() => setIsCustomerFormOpen(false)}
                  className="w-full py-2 text-[#64748B] font-bold text-xs hover:text-[#0F172A] transition-colors"
                >
                  Cancel
                </button>
              </div>
            </motion.div>
          </div>,
          document.body
        )}
      </AnimatePresence>

    </div>
  );
}
