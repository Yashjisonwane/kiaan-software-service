"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, Settings, Clock, CreditCard, ShieldCheck,
  ChevronRight, Rocket, ShoppingCart, Cloud, Headphones, X,
  User, Mail, Phone, Lock, Check, Crown, CheckCircle2, ChevronDown
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Phase 1: Onboarding',
    subtitle: 'Getting Started: Client registration and approval.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Before a client can use the software, they must register their company. The request goes to the Super Admin for approval, after which the account is provisioned.',
    features: [
      'Client Registration Request',
      'Company & Owner Details',
      'Select Subscription Plan',
      'Super Admin Approval',
      'Automatic Account Creation',
      'Receive Login Credentials'
    ],
    sections: [
      {
        heading: 'Client Registration',
        content: 'The prospective client visits the registration page (/register) to request an account. Details needed include Company Name, Owner Name, Email, Phone, and the desired Subscription Plan. This request goes into the Pending state.'
      },
      {
        heading: 'Super Admin Approval',
        content: 'The system owner (Super Admin) reviews the request in their dashboard. Upon approval, the system automatically creates the Company and an Admin Account for the client. The client receives their login credentials.'
      }
    ]
  },
  {
    id: '02',
    title: 'Phase 2: Admin Setup',
    subtitle: 'The Client Journey: Configuring the software.',
    icon: <Settings className="w-6 h-6" />,
    description: 'Once the client (Admin) receives their login, the operational flow begins. The Admin sets up the software, configuring business details, payroll rules, and biometrics.',
    features: [
      'Dashboard Overview',
      'Company Settings Configuration',
      'Shift & Payroll Rules',
      'Machine Integration (ZKTeco)',
      'Create Employee Accounts',
      'Face Registration (Web Biometrics)'
    ],
    sections: [
      {
        heading: 'Initial Login & Dashboard',
        content: 'The Admin logs in at /login. They are greeted by the Admin Dashboard (/admin), providing a bird\'s-eye view of active employees, today\'s attendance, and pending tasks.'
      },
      {
        heading: 'Company Settings',
        content: 'The Admin navigates to Settings to configure business details, standard shift times, payroll rules (Late Deductions, Overtime, Salary Cycles), and Machine Integration (IP and Sync Intervals).'
      },
      {
        heading: 'Creating Employees',
        content: 'The Admin builds their workforce database. Creating an employee record automatically generates a user account for that employee with the role `employee`.'
      },
      {
        heading: 'Face Registration',
        content: 'If utilizing web-based face recognition, the Admin captures or uploads the employee\'s face. The system generates facial embeddings and securely stores them for future matching.'
      }
    ]
  },
  {
    id: '03',
    title: 'Phase 3: Daily Operations',
    subtitle: 'Attendance & Monitoring in real-time.',
    icon: <Clock className="w-6 h-6" />,
    description: 'With the system configured, the day-to-day workflow commences. Employees mark attendance while Admins monitor real-time punches and manage records.',
    features: [
      'Hardware Biometric Sync',
      'Web Face Attendance',
      'Real-Time Punches',
      'Live Monitor Dashboard',
      'View Calculated Hours',
      'Manual Corrections'
    ],
    sections: [
      {
        heading: 'Marking Attendance',
        content: 'Employees punch in/out using a Hardware Biometric Machine (syncs automatically) or Web Face Attendance (matches face with embeddings via webcam and records securely).'
      },
      {
        heading: 'Live Monitoring',
        content: 'The Admin navigates to the Live Monitor (/admin/live) to watch real-time punches as employees arrive or leave, keeping a strict eye on punctuality.'
      },
      {
        heading: 'Managing Attendance Records',
        content: 'The Admin visits Attendance (/admin/attendance) to view calculated daily hours, see who is Late/Absent/Present, and make manual corrections if needed.'
      }
    ]
  },
  {
    id: '04',
    title: 'Phase 4: Financials & Payroll',
    subtitle: 'End of Cycle: Salary processing and reports.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'At the end of the defined salary cycle, the system automatically aggregates hours, calculates earnings, applies deductions, and generates the net salary.',
    features: [
      'Automatic Hour Aggregation',
      'Calculate Gross Earnings',
      'Apply Deductions & Fines',
      'Add Overtime',
      'Generate Net Salary',
      'Download Excel/PDF Reports'
    ],
    sections: [
      {
        heading: 'Generating Payroll',
        content: 'The system aggregates hours/days, calculates Gross Earnings based on the rate, applies Deductions (Late fines, UIF, Advance), adds Overtime, and generates Net Salary. The Admin marks salaries as Paid.'
      },
      {
        heading: 'Reporting',
        content: 'The Admin visits Reports (/admin/reports) to generate downloadable Excel/PDF reports of monthly attendance, overtime, and financial payouts for compliance.'
      }
    ]
  },
  {
    id: '05',
    title: 'Phase 5: Employee Experience',
    subtitle: 'Self-Service portal for staff.',
    icon: <User className="w-6 h-6" />,
    description: 'Employees have their own dedicated portal to track attendance, view salary slips, and raise support tickets, reducing the administrative burden.',
    features: [
      'Employee Dashboard',
      'Track Daily Punches',
      'View Total Hours & Lates',
      'Access Payroll Slips',
      'View Deductions',
      'Raise Support Tickets'
    ],
    sections: [
      {
        heading: 'My Attendance',
        content: 'Employees track their own daily punches, total hours, and late marks via their personal attendance portal (/employee/attendance).'
      },
      {
        heading: 'My Salary',
        content: 'Employees can view their historical payroll slips and deductions in a transparent manner (/employee/salary).'
      },
      {
        heading: 'Support Center',
        content: 'If employees have a grievance or missing punch, they can raise a ticket via the Support Center, alerting the Admin for resolution.'
      }
    ]
  },
  {
    id: '06',
    title: 'Phase 6: Maintenance',
    subtitle: 'Subscription, Billing, and Upgrades.',
    icon: <ShieldCheck className="w-6 h-6" />,
    description: 'Software access is strictly tied to the active subscription plan. Admins can manage their plans and get system support directly.',
    features: [
      'Track Plan Limits',
      'View Billing History',
      'Subscription Expiry Alerts',
      'Renew or Upgrade Plan',
      'Direct Support Center',
      'Technical Assistance'
    ],
    sections: [
      {
        heading: 'Billing & Upgrades',
        content: 'The Admin tracks plan limits (e.g., Max Employees) and billing history. If the limit is reached or subscription expires, they are redirected to renew/upgrade.'
      },
      {
        heading: 'System Support',
        content: 'If the Admin faces software issues, they use the Support Center (/admin/support) to communicate directly with the Super Admin for technical assistance.'
      }
    ]
  }
];

export const KiaanAttendanceSystemLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
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
      window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}`;
      setIsCustomerFormOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">
      <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-12 lg:pt-32 lg:pb-16">

        {/* PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">Attendance System</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan HRM Pro is a complete ecosystem revolving around three primary roles: Super Admin (System Owner), Admin (Company Owner), and Employee (Staff Member). From the initial onboarding and face registration to daily attendance, live monitoring, and automated payroll, everything is handled seamlessly in one centralized platform.
            </p>
            <p>
              Explore the complete system workflow below to understand how the platform automates your daily operations, empowers your employees with self-service tools, and gives you complete control over your human resources.
            </p>
          </div>
        </div>

        {/* WORKFLOW OVERVIEW */}
        <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
          COMPLETE SYSTEM WORKFLOW
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
                Request Demo
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

                <p className="text-zinc-400 text-[15px] leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                <div className="space-y-6 mb-10">
                  {activeItem.sections?.map((section, idx) => (
                    <div key={idx} className="bg-[#181818] border border-white/5 p-6 rounded-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
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

                <div className="bg-[#111] border border-white/10 p-6 rounded-2xl">
                  <h3 className="text-white font-bold text-base mb-5 flex items-center gap-2">
                    <CheckCircle2 className="text-yellow-500 w-5 h-5" /> Key Actions
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
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
              onClick={() => setIsBuyModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 w-full max-w-5xl relative z-10 shadow-2xl max-h-[95vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsBuyModalOpen(false)}
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <X size={16} />
              </button>

              <div className="mb-8 text-center">
                <h3 className="text-2xl md:text-4xl font-display font-black text-white mb-2 uppercase tracking-wide">
                  SELECT <span className="text-yellow-500">SUBSCRIPTION PLAN</span>
                </h3>
                <p className="text-zinc-400 text-sm">
                  Choose the perfect fit for your HRM operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch group">
                {/* Starter Plan */}
                <div className="bg-[#181818] border-2 border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:!border-yellow-500 hover:-translate-y-1 hover:!shadow-[0_10px_40px_rgba(234,179,8,0.25)] transition-all duration-300">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Starter</h4>
                    <p className="text-zinc-500 text-sm">Ideal for small teams</p>
                  </div>
                  <div className="flex items-end gap-1 pb-4 border-b border-white/5">
                    <span className="text-4xl md:text-5xl font-black text-white">$9</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1 pt-2">
                    {[
                      'Up to 50 Employees',
                      'Basic Attendance',
                      'Leave Management',
                      'Standard Payroll',
                      'Email Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Starter - $9/month')}
                    className="w-full py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors uppercase tracking-widest"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Professional Plan */}
                <div className="bg-[#181818] border-2 border-yellow-500 group-hover:border-white/10 rounded-2xl p-6 flex flex-col gap-5 relative shadow-[0_0_40px_rgba(234,179,8,0.15)] group-hover:shadow-none hover:!border-yellow-500 hover:-translate-y-1 hover:!shadow-[0_10px_40px_rgba(234,179,8,0.25)] transition-all duration-300 -mt-2 mb-2">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Professional</h4>
                    <p className="text-zinc-500 text-sm">Perfect for growing companies</p>
                  </div>
                  <div className="flex items-end gap-1 pb-4 border-b border-white/5">
                    <span className="text-4xl md:text-5xl font-black text-white">$19</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1 pt-2">
                    {[
                      'Up to 200 Employees',
                      'Face Biometrics',
                      'Advanced Payroll',
                      'Shift Management',
                      'Reports & Analytics',
                      'Priority Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-white text-sm font-medium">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Professional - $19/month')}
                    className="w-full py-3.5 rounded-xl bg-yellow-500 text-black font-bold text-xs hover:bg-yellow-400 transition-colors uppercase tracking-widest shadow-[0_0_25px_rgba(234,179,8,0.35)]"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-[#181818] border-2 border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:!border-yellow-500 hover:-translate-y-1 hover:!shadow-[0_10px_40px_rgba(234,179,8,0.25)] transition-all duration-300">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Enterprise</h4>
                    <p className="text-zinc-500 text-sm">For large organizations</p>
                  </div>
                  <div className="flex items-end gap-1 pb-4 border-b border-white/5">
                    <span className="text-4xl md:text-5xl font-black text-white">$29</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1 pt-2">
                    {[
                      'Unlimited Employees',
                      'Everything in Professional',
                      'Custom Integrations',
                      'Multi-branch Support',
                      'API Access',
                      'Dedicated Account Manager'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleChoosePlan('Enterprise - $29/month')}
                    className="w-full py-3.5 rounded-xl bg-white/10 text-white font-bold text-xs hover:bg-white/20 transition-colors uppercase tracking-widest"
                  >
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
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
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
