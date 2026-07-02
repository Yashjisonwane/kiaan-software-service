"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, UserPlus, Calendar, Stethoscope, CreditCard, BarChart3,
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Send, Star, Crown, CheckCircle2, Lock, Check, ChevronDown
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Employee & HR Management',
    subtitle: 'Manage staff, schedules, and leave requests effortlessly.',
    icon: <Users className="w-6 h-6" />,
    description: 'A comprehensive HR suite to handle your entire workforce. Add employees, define roles, and manage their daily work schedules. Staff can request leaves directly through the system, and administrators can track leave balances and approve requests with a single click.',
    features: [
      'Centralized employee directory',
      'Role-based access control',
      'Daily work scheduling',
      'Leave request workflows',
      'Leave balance tracking',
      'Staff attendance monitoring'
    ],
    sections: [
      {
        heading: 'Staff Organization',
        content: 'Keep all employee records in one secure place. Define roles, permissions, and departments to ensure your clinic operates with clear responsibilities and secure data access.'
      },
      {
        heading: 'Work & Shift Scheduling',
        content: 'Plan your clinic\'s coverage effectively. The Work Schedule module allows you to assign shifts, track working hours, and ensure you always have the right staff on duty.'
      },
      {
        heading: 'Leave Management System',
        content: 'Automate the entire leave request process. Employees can apply for time off, view their remaining balances, while managers receive instant notifications to approve or decline requests.'
      }
    ]
  },
  {
    id: '02',
    title: 'Laboratory Operations',
    subtitle: 'Track external lab cases and manage partner laboratories.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Streamline your interactions with dental laboratories. Maintain a database of all partner laboratories and seamlessly track every lab case from dispatch to delivery, ensuring no patient crown, bridge, or denture is ever delayed or lost.',
    features: [
      'Partner laboratory database',
      'Lab case dispatch tracking',
      'Delivery timeline monitoring',
      'Quality check workflows',
      'Case status updates',
      'Lab-specific communication'
    ],
    sections: [
      {
        heading: 'Laboratory Directory',
        content: 'Maintain a comprehensive list of all your partnered dental labs. Store contact details, specific specializations (e.g., ceramics, prosthetics), and track their performance and turnaround times.'
      },
      {
        heading: 'End-to-End Case Tracking',
        content: 'Never lose track of a patient\'s lab work. Monitor the status of every case—from the moment impressions are sent out, to processing, and final delivery back to the clinic.'
      },
      {
        heading: 'Timely Patient Care',
        content: 'By closely monitoring lab timelines, you can schedule patient fitting appointments with confidence, reducing wait times and improving overall patient satisfaction.'
      }
    ]
  },
  {
    id: '03',
    title: 'Financial Management',
    subtitle: 'Monitor expenses, payments, and clinic financials.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Take full control of your clinic\'s financial health. Track daily expenses, process payments to labs and vendors, and analyze deep financial metrics through an intuitive analytics dashboard.',
    features: [
      'Expense tracking & categorization',
      'Vendor & Lab payment processing',
      'Real-time financial analytics',
      'Income vs. Expense monitoring',
      'Digital payment records',
      'Budget management'
    ],
    sections: [
      {
        heading: 'Comprehensive Expense Tracking',
        content: 'Log every clinic expense instantly. Categorize spending on supplies, equipment, utilities, and payroll to understand exactly where your clinic\'s capital is going.'
      },
      {
        heading: 'Payment Processing',
        content: 'Manage all outgoing payments systematically. Clear dues with external laboratories and suppliers directly, keeping a transparent and auditable digital ledger of all transactions.'
      },
      {
        heading: 'Financial Analytics',
        content: 'Turn your financial data into actionable insights. Interactive charts and graphs help you analyze revenue trends, identify cost-saving opportunities, and forecast future financial performance.'
      }
    ]
  },
  {
    id: '04',
    title: 'Vendor & Supply Chain',
    subtitle: 'Manage suppliers and clinic inventory procurement.',
    icon: <ShoppingCart className="w-6 h-6" />,
    description: 'Ensure your clinic is always stocked and ready. The Vendor module allows you to manage all suppliers of dental materials and equipment, tracking their reliability and streamlining the procurement process.',
    features: [
      'Vendor contact database',
      'Supply procurement tracking',
      'Vendor performance metrics',
      'Purchase history logs',
      'Contract & Document storage',
      'Supply chain optimization'
    ],
    sections: [
      {
        heading: 'Centralized Vendor Management',
        content: 'Keep all your supplier information in one place. Easily access contact details, product catalogs, and historical data for every vendor your clinic relies on.'
      },
      {
        heading: 'Procurement History',
        content: 'Review past purchases to negotiate better rates. Having a clear history of what was ordered, when, and at what price empowers you to make smarter purchasing decisions.'
      },
      {
        heading: 'Secure Document Storage',
        content: 'Use the integrated Documents module to safely store vendor contracts, equipment warranties, and compliance certificates, ensuring they are always accessible when needed.'
      }
    ]
  },
  {
    id: '05',
    title: 'Schedules & Reminders',
    subtitle: 'Organize clinic events, tasks, and automated alerts.',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Keep the entire clinic operating smoothly and on time. Use the Schedule module to plan important clinic events or meetings, and set up automated Reminders to ensure no critical task or follow-up is ever forgotten.',
    features: [
      'Clinic event calendar',
      'Automated task reminders',
      'Staff meeting scheduling',
      'Important deadline alerts',
      'Daily agenda views',
      'Customizable notifications'
    ],
    sections: [
      {
        heading: 'Interactive Clinic Schedule',
        content: 'A unified calendar for all non-clinical events. Schedule staff meetings, equipment maintenance windows, and clinic holidays so everyone is always on the same page.'
      },
      {
        heading: 'Automated Reminders',
        content: 'Set and forget critical tasks. The system will automatically push notifications to the relevant staff members for things like license renewals, inventory checks, or pending payments.'
      },
      {
        heading: 'Operational Efficiency',
        content: 'By offloading memory-dependent tasks to the software, your staff can focus entirely on patient care and daily operations without the stress of forgotten responsibilities.'
      }
    ]
  },
  {
    id: '06',
    title: 'Reports & Analytics',
    subtitle: 'Generate actionable insights from clinic operations.',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Transform your daily operational data into powerful, easy-to-understand reports. Analyze everything from employee performance and leave trends to lab case turnaround times and detailed financial breakdowns.',
    features: [
      'Custom report generation',
      'Operational efficiency metrics',
      'Staff productivity analysis',
      'Lab case turnaround reports',
      'Exportable data formats',
      'Visual data representation'
    ],
    sections: [
      {
        heading: 'Data-Driven Decisions',
        content: 'Stop guessing and start knowing. Access detailed reports that highlight the strengths and weaknesses of your clinic\'s operations, allowing you to make informed, strategic decisions.'
      },
      {
        heading: 'Performance Monitoring',
        content: 'Evaluate the efficiency of your internal processes. Identify bottlenecks in lab case deliveries, monitor staff attendance patterns, and optimize your workflows for maximum productivity.'
      },
      {
        heading: 'Audit-Ready Exporting',
        content: 'Easily export your data for external use. Whether you need financial summaries for your accountant or performance metrics for a stakeholder meeting, your data is always ready and accessible.'
      }
    ]
  }
];
const COUNTRY_CODES = [
  { code: '+91', country: 'IN', maxLength: 10, label: 'India (+91)' },
  { code: '+1', country: 'US/CA', maxLength: 10, label: 'US/CA (+1)' },
  { code: '+44', country: 'UK', maxLength: 10, label: 'UK (+44)' },
  { code: '+61', country: 'AU', maxLength: 9, label: 'Australia (+61)' },
  { code: '+971', country: 'UAE', maxLength: 9, label: 'UAE (+971)' },
];

export const KiaanClinicLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Buy Now Flow State
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({ fullName: '', email: '', whatsapp: '' });
  
  // Demo Flow & Receipt States
  const [demoCountry, setDemoCountry] = useState(COUNTRY_CODES[0]);
  const [demoForm, setDemoForm] = useState({ fullName: '', email: '', whatsapp: '' });
  const [isReceiptOpen, setIsReceiptOpen] = useState(false);
  const [receiptCredentials, setReceiptCredentials] = useState<any>(null);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleChoosePlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsBuyModalOpen(false);
    setIsCustomerFormOpen(true);
  };

  const isCustomerFormValid = customerForm.fullName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email) &&
    /^[0-9]{10,}$/.test(customerForm.whatsapp);

  const handleContinueToPayment = async () => {
    if (isCustomerFormValid) {
      try {
        const loaded = await loadRazorpayScript();
        if (!loaded) {
          alert('Razorpay SDK failed to load. Are you online?');
          return;
        }

        // Amount mapping based on selected plan ($9 -> Rs.900, $19 -> Rs.1900, $29 -> Rs.2900)
        let amount = 900;
        if (selectedPlan.includes('19')) amount = 1900;
        if (selectedPlan.includes('29')) amount = 2900;

        const options = {
          key: 'rzp_test_T1r8sgDPyFz1bB', // Test Key ID
          amount: amount,
          currency: 'INR',
          name: 'Kiaan Tech',
          description: `Subscription for ${selectedPlan}`,
          handler: async function (response: any) {
            try {
              const res = await fetch('/api/license/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  softwareId: 'kiaan-clinic',
                  fullName: customerForm.fullName,
                  email: customerForm.email,
                  whatsapp: customerForm.whatsapp,
                  type: 'buy',
                  plan: selectedPlan,
                  paymentDetails: {
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id || 'dummy_order_id',
                    razorpay_signature: response.razorpay_signature || 'dummy_signature'
                  }
                }),
              });
              const data = await res.json();
              if (data.success) {
                setReceiptCredentials(data.license.credentials);
                setIsReceiptOpen(true);
              } else {
                alert(data.error || 'Registration failed');
              }
            } catch (err) {
              console.error(err);
              alert('Error creating your subscription.');
            }
          },
          prefill: {
            name: customerForm.fullName,
            email: customerForm.email,
            contact: customerForm.whatsapp
          },
          theme: {
            color: '#2563EB'
          }
        };

        const rzp = new (window as any).Razorpay(options);
        rzp.open();
        setIsCustomerFormOpen(false);
      } catch (err) {
        console.error(err);
        alert('Error initiating payment gateway');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111827] font-sans selection:bg-[#2563EB]/20">
      <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-12 lg:pt-32 lg:pb-16">

        {/* SECTION 1 - PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-[#2563EB]">Dental Clinic</span>
          </h1>
          <div className="text-[#4B5563] text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan Dental Clinic is a high-performance practice management solution built specifically for independent dentists and growing clinic operations. From digital odontogram dental charting and smart appointments to patient profiles, prescribing, and unified invoicing, every core operation of your practice is brought under one intuitive screen.
            </p>
            <p>
              Tailored specifically for dental practices, our clinical modules automate routine front-desk tasks, reduce waiting times, improve the patient visit experience, and ensure complete treatment recording. With live synchronization across multi-chair or multi-branch clinics, it enables your staff to operate seamlessly.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WORKFLOW OVERVIEW */}
        <div className="text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-6">
          WORKFLOW OVERVIEW
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* LEFT SIDE: Workflow Cards */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3">
            {WORKFLOW_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-xl border transition-all duration-300 flex items-center p-4 group ${isActive
                      ? 'bg-white border-[#2563EB] shadow-[0_8px_30px_rgba(15,23,42,0.08)] translate-x-1'
                      : 'bg-white border-[#E5E7EB] hover:bg-[#F8FBFF] hover:border-[#2563EB]/30'
                    }`}
                >
                  <div className={`text-xl font-bold mr-5 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#6B7280]'}`}>
                    {item.id}
                  </div>
                  <div className={`mr-4 transition-colors ${isActive ? 'text-[#2563EB]' : 'text-[#4B5563]'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-1 transition-colors ${isActive ? 'text-[#111827]' : 'text-[#4B5563]'}`}>
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

            {/* BOTTOM BUTTONS */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-[#2563EB] text-white py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-[#2563EB]/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/15"
              >
                <Rocket size={18} />
                Request Demo Account
              </button>
              <button
                onClick={() => setIsBuyModalOpen(true)}
                className="flex-1 bg-white border border-[#2563EB] text-[#2563EB] py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-[#EFF6FF] transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Workflow Detail Panel */}
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
                    <h2 className="text-2xl font-display font-bold text-[#111827] tracking-tight">
                      {activeItem.title}
                    </h2>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#4B5563] text-[15px] leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Dynamic Documentation Sections */}
                <div className="space-y-6 mb-10">
                  {activeItem.sections?.map((section, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] border border-[#E5E7EB] p-6 rounded-2xl relative overflow-hidden group hover:border-[#2563EB]/30 transition-colors">
                      {/* Decorative accent */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-[#2563EB]/20 group-hover:bg-[#2563EB] transition-colors"></div>

                      <h4 className="text-lg font-bold text-[#111827] mb-3">
                        {section.heading}
                      </h4>
                      <p className="text-[#4B5563] text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="bg-[#F5F7FA] border border-[#E5E7EB] p-6 rounded-2xl">
                  <h3 className="text-[#111827] font-bold text-base mb-5 flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
                    <CheckCircle2 className="text-[#14B8A6] w-5 h-5" /> Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-[#4B5563] text-sm">
                        <div className="w-5 h-5 rounded-full bg-[#14B8A6]/10 flex items-center justify-center text-[#14B8A6] shrink-0 mt-0.5">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
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
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors bg-zinc-100 p-2 rounded-full">
                <X size={16} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-[#111827] mb-2">Request Demo</h3>
                <p className="text-[#4B5563] text-sm">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert('Demo activated successfully. Redirecting to login...');
                window.location.href = "http://localhost:5173/login";
              }}>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="text" placeholder="Full Name" value={demoForm.fullName} onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })} className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input required type="email" placeholder="Email Address" value={demoForm.email} onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })} className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" />
                </div>
                <div className="relative group flex gap-2">
                  <div className="w-1/3 relative">
                    <select 
                      value={demoCountry.code}
                      onChange={(e) => {
                        const newCountry = COUNTRY_CODES.find(c => c.code === e.target.value) || COUNTRY_CODES[0];
                        setDemoCountry(newCountry);
                        if (demoForm.whatsapp.length > newCountry.maxLength) {
                          setDemoForm({ ...demoForm, whatsapp: demoForm.whatsapp.slice(0, newCountry.maxLength) });
                        }
                      }}
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-2 py-3.5 text-[12px] sm:text-sm text-[#111827] focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all cursor-pointer"
                    >
                      {COUNTRY_CODES.map(c => (
                        <option key={c.code} value={c.code}>{c.label}</option>
                      ))}
                    </select>
                  </div>
                  <div className="relative w-2/3">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                    <input 
                      required 
                      type="tel" 
                      placeholder="Mobile Number" 
                      maxLength={demoCountry.maxLength}
                      value={demoForm.whatsapp} 
                      onChange={(e) => {
                        const numericVal = e.target.value.replace(/\D/g, '');
                        setDemoForm({ ...demoForm, whatsapp: numericVal.slice(0, demoCountry.maxLength) });
                      }} 
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 sm:pl-12 pr-4 py-3.5 text-sm text-[#111827] placeholder-zinc-400 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all" 
                    />
                  </div>
                </div>

                <button type="submit" className="w-full bg-[#2563EB] text-white py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#2563EB]/90 transition-colors mt-4 shadow-md shadow-[#2563EB]/15">
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
                className="absolute top-3 right-3 text-[#64748B] hover:text-[#0F172A] transition-colors bg-zinc-100 p-1.5 rounded-full"
              >
                <X size={14} />
              </button>

              <div className="mb-4 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-[#111827] mb-1 uppercase tracking-wide">
                  SELECT <span className="text-[#2563EB]">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-[#6B7280] text-[10px] md:text-[11px]">
                  Choose the perfect fit for your dental clinic operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-2xl p-4 flex flex-col hover:border-[#2563EB]/30 transition-colors">
                  <h4 className="text-base font-bold text-[#111827] mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small clinics</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 1 Doctor',
                      'Up to 500 Patients',
                      'Appointment Management',
                      'Patient Record Management',
                      'Billing & Invoicing',
                      'Basic Reports',
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing practices</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 5 Doctors',
                      'Up to 2,000 Patients',
                      'Everything in Starter',
                      'Treatment Management',
                      'SMS & Email Reminders',
                      'Advanced Reports',
                      'Priority Support',
                      'Data Backup'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-[#111827] font-medium">
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For multi-location clinics</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-[#E5E7EB]">
                    <span className="text-2xl md:text-3xl font-bold text-[#111827]">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Unlimited Doctors',
                      'Unlimited Patients',
                      'Everything in Professional',
                      'Multi-Branch Management',
                      'Inventory Management',
                      'Advanced Analytics',
                      'Role-Based Access',
                      '24/7 Priority Support'
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
              className="bg-white border border-[#E5E7EB] rounded-2xl p-4 md:p-5 w-full max-w-md relative z-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="mb-5 text-center">
                <h3 className="text-xl font-display font-bold text-[#111827] mb-1.5 tracking-wide">
                  Complete Your Purchase
                </h3>
                <p className="text-[#6B7280] text-xs leading-relaxed">
                  Enter your details below to continue with your subscription and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#111827] placeholder-zinc-500 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="sr-only">Email Address</label>
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors" />
                  <input
                    required
                    type="email"
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#111827] placeholder-zinc-500 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                  />
                </div>

                <div className="flex">
                  <div className="bg-[#F1F5F9] border border-[#E5E7EB] border-r-0 rounded-l-xl px-3 py-2.5 text-xs text-[#64748B] flex items-center justify-center font-bold">
                    +91
                  </div>
                  <div className="relative group flex-1">
                    <label className="sr-only">WhatsApp Number</label>
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-[#2563EB] transition-colors z-10" />
                    <input
                      required
                      type="tel"
                      value={customerForm.whatsapp}
                      onChange={(e) => setCustomerForm({ ...customerForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="WhatsApp Number"
                      maxLength={10}
                      className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-r-xl pl-10 pr-4 py-2.5 text-xs text-[#111827] placeholder-zinc-500 focus:border-[#2563EB]/50 focus:bg-white outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only">Selected Plan</label>
                  <Crown size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2563EB] z-10" />
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl pl-10 pr-8 py-2.5 text-xs text-[#2563EB] font-bold outline-none focus:border-[#2563EB] cursor-pointer appearance-none"
                  >
                    <option className="bg-white text-[#2563EB]" value="Starter - $9/month">Starter - $9/month</option>
                    <option className="bg-white text-[#2563EB]" value="Professional - $19/month">Professional - $19/month</option>
                    <option className="bg-white text-[#2563EB]" value="Enterprise - $29/month">Enterprise - $29/month</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#2563EB]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-5 text-center">
                <p className="text-[10px] md:text-xs text-[#6B7280] flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-[#64748B]" />
                  Your information is secure and will only be used for your subscription and account setup.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinueToPayment}
                  disabled={!isCustomerFormValid}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all ${isCustomerFormValid
                      ? 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-[0_0_20px_rgba(37,99,235,0.2)]'
                      : 'bg-[#2563EB]/30 text-white/50 cursor-not-allowed'
                    }`}
                >
                  Continue to Secure Payment
                </button>
                <button
                  onClick={() => setIsCustomerFormOpen(false)}
                  className="w-full py-1.5 text-zinc-400 font-bold text-[10px] uppercase hover:text-[#0F172A] transition-colors"
                >
                  Cancel
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Receipt Modal */}
      <AnimatePresence>
        {isReceiptOpen && receiptCredentials && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white border border-[#E5E7EB] rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl overflow-hidden"
            >
              <div className="mb-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-display font-bold text-[#111827] mb-1">
                  Purchase Successful! 🎉
                </h3>
                <p className="text-zinc-500 text-xs">
                  Your premium subscription has been activated successfully.
                </p>
              </div>

              <div className="bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl p-4 space-y-3 mb-6">
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Username / Email</span>
                  <span className="text-sm font-semibold text-zinc-800 break-all">{receiptCredentials.username}</span>
                </div>
                <div>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-wider block">Temporary Password</span>
                  <span className="text-sm font-mono font-bold text-[#2563EB] bg-[#2563EB]/5 px-2 py-1 rounded border border-[#2563EB]/10 inline-block mt-0.5 select-all">{receiptCredentials.tempPassword}</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-2">
                  <span className="text-[9px] text-[#D97706] font-semibold flex items-center gap-1">
                    <Clock size={12} /> Must change within 24 hours (Expires: {new Date(receiptCredentials.expiresAt).toLocaleString()})
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsReceiptOpen(false);
                  window.location.href = "http://localhost:5173/login";
                }}
                className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold text-xs tracking-wide hover:bg-[#1D4ED8] transition-colors shadow-lg shadow-[#2563EB]/15"
              >
                Go to Login Page
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
