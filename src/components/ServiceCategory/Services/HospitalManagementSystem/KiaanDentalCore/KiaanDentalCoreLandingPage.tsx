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
    title: 'Create Your Clinic',
    subtitle: 'Setup your clinic profile, branding and working hours.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Start by creating your clinic profile with your clinic name, logo, contact information, address, consultation timings, treatment categories and working schedule. This establishes your digital clinic environment where all future operations will be managed. Once configured, every doctor, staff member and patient will work under this centralized workspace.',
    features: [
      'Add clinic information',
      'Configure business hours',
      'Upload branding',
      'Define consultation timings',
      'Create treatment categories',
      'Enable multiple branches'
    ],
    sections: [
      {
        heading: 'Centralized Clinic Setup',
        content: 'Establish the core digital identity of your dental practice. This module allows you to define clinic particulars such as contact details, branding, and location, ensuring all patient communications and invoices reflect your clinic\'s professional image.'
      },
      {
        heading: 'Multi-Branch Management',
        content: 'For growing practices, Kiaan Dental Core supports multiple locations under a single umbrella. You can effortlessly toggle between branches, share patient records securely, and maintain standardized workflows across all your facilities.'
      },
      {
        heading: 'Operational Parameters',
        content: 'Define the fundamental rules of your clinic. Set standard working hours, create customized treatment categories, and establish the foundational settings that drive the scheduling and billing engines of the platform.'
      }
    ]
  },
  {
    id: '02',
    title: 'Add Doctors & Staff',
    subtitle: 'Create staff accounts and assign secure roles.',
    icon: <Users className="w-6 h-6" />,
    description: 'Invite dentists, receptionists, assistants, hygienists and administrators into the system. Assign permissions according to their responsibilities so every employee only accesses the modules relevant to their work.',
    features: [
      'Add unlimited staff',
      'Role-based permissions',
      'Manage departments',
      'Assign dentists',
      'Staff login credentials',
      'Attendance access'
    ],
    sections: [
      {
        heading: 'Role-Based Access Control',
        content: 'Maintain strict data security by assigning specific roles to your team. Whether it\'s a senior dentist, an intern, a hygienist, or front-desk staff, the system ensures they only see the information and modules necessary for their daily tasks.'
      },
      {
        heading: 'Department Organization',
        content: 'Structure your clinic systematically by creating dedicated departments. Assign staff to their respective specialties, such as Orthodontics, Endodontics, or General Dentistry, streamlining internal communication and patient routing.'
      },
      {
        heading: 'Productivity & Attendance',
        content: 'Keep track of staff availability, working shifts, and login activity. This provides clinic administrators with a clear overview of workforce utilization and helps in accurately calculating payroll and incentives.'
      }
    ]
  },
  {
    id: '03',
    title: 'Register Patients',
    subtitle: 'Store patient profiles, medical history and treatment records.',
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Create patient profiles containing complete demographic information, treatment history, prescriptions, X-rays, insurance details and previous visits. Every patient receives a centralized digital medical record.',
    features: [
      'Create digital health records',
      'Upload X-rays & documents',
      'Record medical history',
      'Manage patient insurance',
      'Track previous treatments',
      'Family member grouping'
    ],
    sections: [
      {
        heading: 'Comprehensive Digital Profiles',
        content: 'Move away from paper records. Each patient gets a secure, exhaustive digital profile that captures demographics, contact information, emergency contacts, and complete medical history in one easily accessible location.'
      },
      {
        heading: 'Document & X-Ray Vault',
        content: 'Securely upload and store patient documents, consent forms, and high-resolution dental X-rays directly into their profile. Retrieve historical imaging instantly during consultations to make accurate diagnoses.'
      },
      {
        heading: 'Family & Group Linking',
        content: 'Simplify the management of families visiting your clinic. Link multiple patient profiles under a primary account holder, making it easier to manage shared insurance plans, consolidated billing, and group appointments.'
      }
    ]
  },
  {
    id: '04',
    title: 'Manage Appointments',
    subtitle: 'Book appointments, automate reminders and calendar scheduling.',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Schedule appointments using an intelligent calendar with automated reminders, rescheduling and queue management to reduce missed visits.',
    features: [
      'Interactive calendar view',
      'Automated SMS/Email reminders',
      'Online appointment booking',
      'Manage doctor availability',
      'Waitlist & queue management',
      'Track no-shows & cancellations'
    ],
    sections: [
      {
        heading: 'Intelligent Scheduling Calendar',
        content: 'Replace your traditional appointment book with a dynamic, color-coded calendar. Instantly identify available slots, doctor schedules, and treatment rooms. Drag and drop appointments to accommodate urgent cases or last-minute changes seamlessly.'
      },
      {
        heading: 'Automated Reminders',
        content: 'Significantly reduce no-shows and late arrivals. The system automatically sends customizable SMS and email reminders to patients prior to their visit, keeping your clinic\'s schedule running on time and maximizing revenue.'
      },
      {
        heading: 'Queue & Waitlist Management',
        content: 'Handle walk-ins and fully booked days effortlessly. The digital waitlist tracks patients waiting in the clinic, monitoring their wait times and alerting staff when a doctor becomes available, ensuring a smooth patient experience.'
      }
    ]
  },
  {
    id: '05',
    title: 'Provide Treatments',
    subtitle: 'Create treatment plans, prescriptions, clinical notes and procedures.',
    icon: <Stethoscope className="w-6 h-6" />,
    description: 'Maintain treatment plans, prescriptions, clinical notes, dental charts, procedures and follow-up history in one organized patient record.',
    features: [
      'Interactive dental charting',
      'Create treatment plans',
      'Write digital clinical notes',
      'Generate E-prescriptions',
      'Track procedural progress',
      'Record patient consent'
    ],
    sections: [
      {
        heading: 'Interactive Dental Charting',
        content: 'Visualize the patient\'s oral health with our intuitive digital odontogram. Map cavities, existing restorations, and planned treatments tooth-by-tooth, creating a clear visual history that both dentists and patients can understand.'
      },
      {
        heading: 'Digital Clinical Notes',
        content: 'Document every consultation thoroughly and legally. Use standardized templates to write detailed clinical notes, record chief complaints, diagnoses, and step-by-step procedure details directly into the patient\'s permanent record.'
      },
      {
        heading: 'E-Prescriptions & Treatment Plans',
        content: 'Generate clear, legible electronic prescriptions with integrated dosage guidelines. Create multi-visit treatment plans, estimating costs and timelines, which patients can easily review and consent to before procedures begin.'
      }
    ]
  },
  {
    id: '06',
    title: 'Billing & Payments',
    subtitle: 'Generate invoices, receive payments and manage financial records.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Generate invoices, record payments, manage subscriptions, taxes, discounts and financial reports while keeping patient billing completely transparent.',
    features: [
      'Create professional invoices',
      'Accept multiple payment methods',
      'Apply taxes and discounts',
      'Track partial payments',
      'Manage insurance claims',
      'Send payment links'
    ],
    sections: [
      {
        heading: 'Transparent Invoicing',
        content: 'Generate professional, itemized invoices instantly after a treatment. Automatically pull costs from your predefined treatment catalog, apply applicable taxes, and provide patients with a clear breakdown of their financial responsibilities.'
      },
      {
        heading: 'Flexible Payment Processing',
        content: 'Accommodate patient preferences by accepting various payment methods including cash, credit cards, UPI, and digital wallets. Track partial payments, manage outstanding balances, and send automated payment links for overdue accounts.'
      },
      {
        heading: 'Insurance & Claims Management',
        content: 'Simplify the complex world of dental insurance. Record patient insurance details, track pre-authorizations, and monitor the status of submitted claims directly from the billing dashboard to ensure your clinic gets paid faster.'
      }
    ]
  },
  {
    id: '07',
    title: 'Reports & Analytics',
    subtitle: 'Monitor clinic performance, patient trends and business growth.',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Analyze clinic performance using intelligent dashboards that display appointments, revenue, patient growth, treatment statistics and staff productivity to support better business decisions.',
    features: [
      'Daily revenue dashboard',
      'Doctor performance metrics',
      'Patient acquisition trends',
      'Treatment success rates',
      'Clinic expense tracking',
      'Exportable custom reports'
    ],
    sections: [
      {
        heading: 'Real-Time Financial Dashboard',
        content: 'Gain instant visibility into your clinic\'s financial health. Track daily revenue, outstanding dues, and month-over-month growth trends. Understand your cash flow without waiting for end-of-month accounting reports.'
      },
      {
        heading: 'Performance Metrics',
        content: 'Evaluate the productivity of your practice. Monitor metrics such as doctor utilization rates, treatment success, patient acquisition costs, and appointment conversion rates to identify areas for operational improvement.'
      },
      {
        heading: 'Patient Demographics & Trends',
        content: 'Understand who your patients are. Analyze demographic data, identify the most requested treatments, and track patient retention rates. Use these insights to tailor your marketing efforts and expand your clinic\'s services effectively.'
      }
    ]
  }
];

export const KiaanDentalCoreLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Buy Now Flow State
  const [buyStep, setBuyStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('');
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
    /^[0-9]{10,}$/.test(customerForm.whatsapp);

  const handleContinueToPayment = () => {
    if (isCustomerFormValid) {
      console.log("Proceeding to payment:", { ...customerForm, plan: selectedPlan });
      // Redirect to Razorpay (mock or actual)
      window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}`;
      setIsCustomerFormOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">

      {/* Container max-w-1400px centered */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">

        {/* SECTION 1 — PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">Dental Core</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan Dental Core is an all-in-one intelligent dental practice management platform built to simplify the complete workflow of modern clinics. From patient registration and appointment scheduling to treatment planning, billing, reporting, inventory, AI-powered insights, and multi-branch management, every operation is connected through one centralized dashboard. The platform eliminates manual work, improves collaboration between doctors and staff, and provides complete visibility over day-to-day clinic operations.
            </p>
            <p>
              Whether you operate a single dental clinic or a growing healthcare organization, Kiaan Dental Core enables your team to manage patients faster, reduce operational delays, automate repetitive tasks, improve patient experience, and make smarter business decisions using real-time analytics. Every module is designed to work together so your clinic operates efficiently from the first appointment to the final payment.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WORKFLOW OVERVIEW */}
        <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
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
                      ? 'bg-yellow-500/5 border-yellow-500'
                      : 'bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10'
                    }`}
                >
                  <div className={`text-xl font-bold mr-5 transition-colors ${isActive ? 'text-yellow-500' : 'text-zinc-500'}`}>
                    {item.id}
                  </div>
                  <div className={`mr-4 transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-sm font-bold mb-1 transition-colors ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs transition-colors ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight size={18} className={`transition-all duration-300 ${isActive ? 'text-yellow-500 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </div>
              );
            })}

            {/* BOTTOM BUTTONS */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-yellow-500 text-black py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-all flex items-center justify-center gap-2"
              >
                <Rocket size={18} />
                Request Demo Account
              </button>
              <button
                onClick={() => setIsBuyModalOpen(true)}
                className="flex-1 bg-transparent border border-yellow-500 text-yellow-500 py-3.5 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Buy Now
              </button>
            </div>
          </div>

          {/* RIGHT SIDE: Workflow Detail Panel */}
          <div className="flex-1 w-full max-w-[800px] bg-[#111] border border-white/5 rounded-2xl p-8 shadow-2xl relative">
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
                    <div className="bg-yellow-500 text-black font-bold text-xl px-3 py-1.5 rounded-lg leading-none flex items-center justify-center shadow-lg">
                      {activeItem.id}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white tracking-tight">
                      {activeItem.title}
                    </h2>
                  </div>
                  <X className="text-zinc-600 hover:text-zinc-400 cursor-pointer transition-colors" size={20} />
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Dynamic Documentation Sections */}
                <div className="space-y-6 mb-10">
                  {activeItem.sections?.map((section, idx) => (
                    <div key={idx} className="bg-[#181818] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
                      {/* Decorative accent */}
                      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>

                      <h4 className="text-lg font-bold text-white mb-3">
                        {section.heading}
                      </h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                    <CheckCircle2 className="text-yellow-500 w-5 h-5" /> Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 shrink-0 mt-0.5">
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

        {/* Footer Features */}
        <div className="flex flex-wrap justify-between items-center mt-16 pt-8 border-t border-white/5 text-xs text-zinc-500 font-medium max-w-4xl">
          <div className="flex items-center gap-2"><ShieldCheck className="text-yellow-500" size={16} /> Secure & Reliable</div>
          <div className="flex items-center gap-2"><Cloud className="text-yellow-500" size={16} /> Cloud Based</div>
          <div className="flex items-center gap-2"><Clock className="text-yellow-500" size={16} /> 99.9% Uptime</div>
          <div className="flex items-center gap-2"><Headphones className="text-yellow-500" size={16} /> 24/7 Support</div>
        </div>

      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsDemoModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-5 md:p-6 w-full max-w-md relative z-10 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10">
                <X size={14} />
              </button>

              <div className="mb-5">
                <h3 className="text-xl font-display font-bold text-white mb-1.5">Request Demo</h3>
                <p className="text-zinc-400 text-xs">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Demo Requested!"); setIsDemoModalOpen(false); }}>
                <div className="relative group">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>


                <button type="submit" className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-colors mt-2">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsBuyModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-4 md:p-5 w-full max-w-4xl relative z-10 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setIsBuyModalOpen(false)}
                className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
              >
                <X size={14} />
              </button>

              <div className="mb-4 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1 uppercase tracking-wide">
                  SELECT <span className="text-yellow-500">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-zinc-400 text-[10px] md:text-[11px]">
                  Choose the perfect fit for your dental clinic operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small clinics</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$9</span>
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
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Starter - $9/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Professional Plan */}
                <div className="bg-[#1a1a1a] border border-yellow-500 rounded-2xl p-4 flex flex-col relative shadow-[0_0_30px_rgba(234,179,8,0.1)] -mt-1 mb-1 z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[8px] md:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5">Professional</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing practices</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$19</span>
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
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-white font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Professional - $19/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-yellow-500 text-black font-bold text-[9px] md:text-[10px] hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.2)] uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Enterprise</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For multi-location clinics</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$29</span>
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
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Enterprise - $29/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest">
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
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsCustomerFormOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-4 md:p-5 w-full max-w-md relative z-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <div className="mb-5 text-center">
                <h3 className="text-xl font-display font-bold text-white mb-1.5 tracking-wide">
                  Complete Your Purchase
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Enter your details below to continue with your subscription and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="sr-only">Email Address</label>
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="email"
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                <div className="flex">
                  <div className="bg-[#222] border border-white/10 border-r-0 rounded-l-xl px-3 py-2.5 text-xs text-zinc-400 flex items-center justify-center font-bold">
                    +91
                  </div>
                  <div className="relative group flex-1">
                    <label className="sr-only">WhatsApp Number</label>
                    <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors z-10" />
                    <input
                      required
                      type="tel"
                      value={customerForm.whatsapp}
                      onChange={(e) => setCustomerForm({ ...customerForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="WhatsApp Number"
                      maxLength={10}
                      className="w-full bg-[#181818] border border-white/10 rounded-r-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only">Selected Plan</label>
                  <Crown size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-yellow-500 z-10" />
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-[#1a1a1a] border border-yellow-500/30 rounded-xl pl-10 pr-8 py-2.5 text-xs text-yellow-500 font-bold outline-none focus:border-yellow-500 cursor-pointer appearance-none"
                  >
                    <option value="Starter - $9/month">Starter - $9/month</option>
                    <option value="Professional - $19/month">Professional - $19/month</option>
                    <option value="Enterprise - $29/month">Enterprise - $29/month</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-yellow-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="mb-5 text-center">
                <p className="text-[10px] md:text-xs text-zinc-500 flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-zinc-400" />
                  Your information is secure and will only be used for your subscription and account setup.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={handleContinueToPayment}
                  disabled={!isCustomerFormValid}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all ${isCustomerFormValid
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                      : 'bg-yellow-500/30 text-black/50 cursor-not-allowed'
                    }`}
                >
                  Continue to Secure Payment
                </button>
                <button
                  onClick={() => setIsCustomerFormOpen(false)}
                  className="w-full py-1.5 text-zinc-500 font-bold text-[10px] uppercase hover:text-white transition-colors"
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