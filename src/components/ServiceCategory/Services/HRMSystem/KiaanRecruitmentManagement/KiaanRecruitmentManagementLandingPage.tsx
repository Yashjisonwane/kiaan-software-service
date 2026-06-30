"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, UserPlus, Calendar, CreditCard, BarChart3,
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Crown, CheckCircle2, Lock, Check, Copy,
  Database, Sliders, ClipboardSignature, MessageSquare, Activity, DollarSign, ShieldAlert,
  ArrowRight, Sparkles, LayoutDashboard, ShieldCheck as ShieldIcon
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Tenant Sign-up & Plan Selection',
    subtitle: 'Isolated multi-tenant database provisioning and secure plan selection.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Clients register their organization under an isolated multi-tenant architecture. The database partitions all company data using a unique companyId, guaranteeing absolute tenant isolation. During sign-up, clients select a subscription plan and authorize billing through a secure transaction simulator.',
    features: [
      'Silver Plan: Free 7-Day Trial',
      'Gold Plan: Pro ($4.99/mo)',
      'Diamond Plan: Enterprise ($9.99/mo)',
      'Secure Bcrypt Password Hashing',
      'UPI and Credit Card Simulation',
      'Strict Tenant Isolation (companyId)'
    ],
    sections: [
      {
        heading: 'Multi-Tenant Architecture',
        content: 'Every company receives its own private digital domain. All users, items, dashboards, and assets are secured behind strict tenant boundary checks, preventing cross-tenant data leaks.'
      },
      {
        heading: 'Flexible SaaS Plans',
        content: 'Select Silver (trial), Gold ($4.99/mo), or Diamond ($9.99/mo) depending on your needs. The subscription engine manages billing cycles and grace periods automatically.'
      },
      {
        heading: 'Payment Gateway Simulation',
        content: 'Enables quick sign-ups and testing for prospective customers using credit card or UPI inputs, immediately activating their SaaS subscription record.'
      }
    ]
  },
  {
    id: '02',
    title: 'Auto-Seeding Workspace',
    subtitle: 'Pre-loaded default boards, columns, and templates for instant value.',
    icon: <Rocket className="w-6 h-6" />,
    description: 'To save time and guide the onboarding experience, the backend automatically seeds a brand-new workspace with default boards, pre-configured columns (Status, Priority, Timelines), folders (AI & Innovation, Commercial), and interactive welcome cards.',
    features: [
      'Auto-generated Welcome Board',
      'Seeded Task Templates',
      'Predefined Priority Settings',
      'Pre-loaded Workspace Folders',
      'Status Dropdowns Setup',
      'Out-of-the-box Interactive Flow'
    ],
    sections: [
      {
        heading: 'Blank Slate Elimination',
        content: 'Users are greeted immediately with active tasks and templates. This increases user engagement and makes it immediately clear how boards and columns function.'
      },
      {
        heading: 'Structured Seeding Schema',
        content: 'Default setups include custom boards mapped directly to standard workflows, complete with columns configured for tracking priority, status, and duration.'
      },
      {
        heading: 'Folder Organization',
        content: 'Automatically creates folders such as "AI & Innovation" and "Commercial" to demonstrate clean project structure from day one.'
      }
    ]
  },
  {
    id: '03',
    title: 'Team Onboarding',
    subtitle: 'Invite team members and define granular roles & access permissions.',
    icon: <Users className="w-6 h-6" />,
    description: 'Admins invite employees to the workspace by setting up accounts with secure login details. Permissions are managed at a granular level using an actor-based role hierarchy (Admin, Manager, User, and custom categories).',
    features: [
      'Unlimited User Invites',
      'Role-based Permissions (RBAC)',
      'Custom Role Creation',
      'Granular Action Toggles',
      'Independent Login Credentials',
      'Admin / Manager / User Levels'
    ],
    sections: [
      {
        heading: 'Hierarchical Actor Model',
        content: 'From Superadmins overseeing system metrics down to regular users working on tasks, every interaction is validated through hierarchical permission layers.'
      },
      {
        heading: 'Custom Role Toggles',
        content: 'Create highly specific roles like "QA Tester" or "Client Viewer", choosing exactly which boards they can view, create, edit, or delete.'
      },
      {
        heading: 'Centralized User Directory',
        content: 'Admins oversee the status, activity logs, and assigned workloads of all team members within a unified directory dashboard.'
      }
    ]
  },
  {
    id: '04',
    title: 'Workspace Customization',
    subtitle: 'Design boards with specialized custom columns for precise tracking.',
    icon: <Sliders className="w-6 h-6" />,
    description: 'Create customized boards containing flexible columns designed for specific project needs. Supported columns range from basic Text and Status lists to People pickers, visual Progress trackers, Budgets, and inline Time tracking buttons.',
    features: [
      'Rich Board Column Types',
      'Interactive People Assignment',
      'Custom Status States',
      'Priority Indicators',
      'Dynamic Progress Bars',
      'Payment & Numeric Fields'
    ],
    sections: [
      {
        heading: 'Flexible Column Architecture',
        content: 'Tailor the layout of every board. Add a progress bar to track item completeness, or set a budget column to calculate real-time operational costs.'
      },
      {
        heading: 'Status & Priority Indicators',
        content: 'Color-coded badges (e.g., Working on it, Stuck, Done) offer immediate visual understanding of project hurdles and completed tasks.'
      },
      {
        heading: 'People Assignees',
        content: 'Assign items to multiple team members, giving them instant visibility on their personal dashboards and sending notifications.'
      }
    ]
  },
  {
    id: '05',
    title: 'External Intake via Forms',
    subtitle: 'Map form fields to board columns to capture leads and tickets.',
    icon: <ClipboardSignature className="w-6 h-6" />,
    description: 'Construct custom landing page forms using the Forms Builder. Map form inputs to columns on a target board, compile a public URL, and collect submissions that instantly generate action items inside your project boards.',
    features: [
      'Visual Form Builder',
      'Field-to-Column Mapping',
      'Public Shareable Links',
      'Instant Task Generation',
      'Email Notification Triggers',
      'Spam Protection'
    ],
    sections: [
      {
        heading: 'No-Code Form Creation',
        content: 'Admins can visually design forms for customer support, service request intake, or sales leads, selecting which board columns to map.'
      },
      {
        heading: 'Seamless Intake Pipeline',
        content: 'When an external client fills out the public form, the backend creates an active card in the target board with all form details pre-populated.'
      },
      {
        heading: 'Immediate Team Alerts',
        content: 'Task creators are instantly alerted to new form entries, ensuring fast response times and organized customer management.'
      }
    ]
  },
  {
    id: '06',
    title: 'Operations & Collaboration',
    subtitle: 'Communicate on tasks with updates, file attachments, and audit logs.',
    icon: <MessageSquare className="w-6 h-6" />,
    description: 'Double-clicking any board item opens the Pulse details view. Here, team members collaborate through structured comment feeds, upload documents to Cloudinary, split tasks into subitems, and view automated change logs.',
    features: [
      'Pulse Collaboration Thread',
      'Cloudinary File Uploads',
      'Subitems Breakdown',
      'Automated Audit Trail Logs',
      'Departmental Activity Feeds',
      'Tagging & Mentions'
    ],
    sections: [
      {
        heading: 'Pulse Detail Dashboard',
        content: 'A centralized space for team dialogue, files, and milestones related to a single task, eliminating long email threads.'
      },
      {
        heading: 'Cloud Storage Integration',
        content: 'Upload and retrieve design files, spreadsheets, and PDFs directly from the item. Files are hosted on Cloudinary for safe, instant access.'
      },
      {
        heading: 'Read-only Audit Log',
        content: 'The platform records every change (e.g. status updates, timeline modifications) with timestamps and actor tags, maintaining system compliance.'
      }
    ]
  },
  {
    id: '07',
    title: 'Time Tracking',
    subtitle: 'Log and review employee working hours directly inside project boards.',
    icon: <Clock className="w-6 h-6" />,
    description: 'Ensure accurate billing and timesheets with built-in time tracking widgets. Team members play and pause trackers next to board items, logging active sessions which aggregate into overall project dashboards for admin review.',
    features: [
      'One-Click Play/Pause Widget',
      'Backend TimeSession Tracking',
      'Aggregated Duration Summary',
      'Time Oversight Dashboard',
      'Employee Timesheet Logs',
      'Billing Integrity Reports'
    ],
    sections: [
      {
        heading: 'Inline Session Logs',
        content: 'Employees start the timer when working on an item and stop it on completion. The backend tracks duration, starting user, and timestamp.'
      },
      {
        heading: 'Company-Wide Timesheets',
        content: 'Admins inspect the Time Oversight panel to analyze total logged hours across projects, departments, or individual team members.'
      },
      {
        heading: 'Leakage Control',
        content: 'Eliminates estimated manual hour reporting, ensuring clients are billed accurately and payroll is based on verified task activity.'
      }
    ]
  },
  {
    id: '08',
    title: 'HR Operations & Payroll',
    subtitle: 'Calculate net salaries, bonuses, and tax deductions from tracked hours.',
    icon: <DollarSign className="w-6 h-6" />,
    description: 'Admins process payroll monthly with an automated calculation engine. By integrating tracked time sessions, the payroll dashboard calculates base salary, overtime rates, custom performance bonuses, and statutory deductions.',
    features: [
      'Base Salary Configurations',
      'Tracked Overtime Calculations',
      'Custom Performance Bonuses',
      'Provident Fund & ESI Deductions',
      'TDS Tax Rate Deductions',
      'Audit Pay State Toggles'
    ],
    sections: [
      {
        heading: 'Automated Payroll Engine',
        content: 'Calculate net pay using customizable formulas that combine base rate, tracked overtime, performance incentives, and tax brackets.'
      },
      {
        heading: 'Statutory Taxes & Deductions',
        content: 'Input custom percentages for tax (TDS), insurance, or retirement funds. The engine calculates deductions and files payslips automatically.'
      },
      {
        heading: 'Payroll State Management',
        content: 'Approve, lock, and process salary sheets. The status changes from Pending to Approved to Paid, storing payment notes for audit trails.'
      }
    ]
  },
  {
    id: '09',
    title: 'Subscription Expiration Safeguard',
    subtitle: 'Transition expired workspaces to a secure view-only state.',
    icon: <ShieldAlert className="w-6 h-6" />,
    description: 'When a trial ends or subscription payments fail, the company workspace enters a secure view-only guard. Team members can read files, inspect boards, and view reports, but all editing and writing capabilities are locked.',
    features: [
      'Automated Plan Term Checks',
      'View-only Safety Flag',
      'Protected Write Operations',
      'Historical Data Continuity',
      'Upgrade Notification Prompts',
      'Self-Serve Account Unlocking'
    ],
    sections: [
      {
        heading: 'Data Integrity Shield',
        content: 'No data is lost or deleted upon plan expiration. The workspace is simply frozen in a read-only state until the subscription is renewed.'
      },
      {
        heading: 'Write-Operation Disabling',
        content: 'Attempts to add new boards, items, start timers, or process payroll sheets are blocked by the backend API validator.'
      },
      {
        heading: 'Simple Activation Flow',
        content: 'Admins can visit the subscription panel at any time, settle past due balances, and instantly restore full read-write capabilities.'
      }
    ]
  }
];

const ROLES_INFO = [
  {
    name: "Superadmin",
    scope: "Platform Owner (Global Control)",
    color: "from-red-500/20 to-orange-500/10 border-red-500/30",
    actions: [
      "Registers and deletes tenant accounts (companies).",
      "Toggles company status between Active and Suspended.",
      "Sets subscription trial endpoints and updates tiers.",
      "Processes plan changes and inspects system billing logs."
    ]
  },
  {
    name: "Admin",
    scope: "Company Owner / Employer",
    color: "from-yellow-500/20 to-amber-500/10 border-yellow-500/30",
    actions: [
      "Full control over company boards, folders, and settings.",
      "Invites, deletes, and updates team members and custom roles.",
      "Configures intake forms and automations.",
      "Oversees the Time Oversight sheets and processes monthly payroll."
    ]
  },
  {
    name: "Manager",
    scope: "Operations Lead",
    color: "from-blue-500/20 to-cyan-500/10 border-blue-500/30",
    actions: [
      "Creates boards, items, and assigns tasks to team members.",
      "Tracks timelines, status boards, and inputs updates.",
      "Reviews Time tracking hours and updates task details.",
      "Restriction: No access to billing, pricing, or subscription plans."
    ]
  },
  {
    name: "User",
    scope: "Team Member / Employee",
    color: "from-green-500/20 to-emerald-500/10 border-green-500/30",
    actions: [
      "Accesses the personalized 'My Work' dashboard flow.",
      "Starts, pauses, and stops time tracking sessions inline.",
      "Uploads task files, comments on pulses, and adds subitems.",
      "Restriction: Cannot access payroll data, billing, or system configurations."
    ]
  }
];

const BOARD_TEMPLATES = [
  {
    name: "AI Future Projects",
    folder: "AI & Innovation",
    columns: "Project Name, Phase, AI Model, Risk Level, Timeline, Progress",
    purpose: "Tracking research, POCs, and MVPs using generative AI technologies."
  },
  {
    name: "AI R&D Roadmap",
    folder: "AI & Innovation",
    columns: "Task Name, Status, Priority, Quarter (Timeline), Completion %",
    purpose: "Strategic timeline alignment of deep tech research and software milestones."
  },
  {
    name: "Commercial - SIRA",
    folder: "Commercial",
    columns: "Deal Name, Status, Deal Value ($), Progress, Priority, Received Date",
    purpose: "Customer acquisition CRM pipeline with monetary metrics."
  },
  {
    name: "DM Inquiries - Master Board",
    folder: "Commercial",
    columns: "Customer Name, Status, Source of Inquiry, Urgency, Assigned To, Received Date",
    purpose: "Front-desk intake board capturing new customer communications directly."
  }
];

export const KiaanRecruitmentManagementLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Buy Now Flow State
  const [selectedPlan, setSelectedPlan] = useState('');
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [customerForm, setCustomerForm] = useState({ fullName: '', email: '', whatsapp: '' });

  // Demo Flow State
  const [demoForm, setDemoForm] = useState({ fullName: '', email: '', whatsapp: '' });
  const [isDemoSubmitting, setIsDemoSubmitting] = useState(false);
  const [demoSuccessLicense, setDemoSuccessLicense] = useState<any>(null);

  // Buy Success State
  const [buySuccessLicense, setBuySuccessLicense] = useState<any>(null);
  const [isBuySubmitting, setIsBuySubmitting] = useState(false);
  const [copiedText, setCopiedText] = useState(false);

  const handleChoosePlan = (plan: string) => {
    setSelectedPlan(plan);
    setIsBuyModalOpen(false);
    setIsCustomerFormOpen(true);
  };

  const isCustomerFormValid = customerForm.fullName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email) &&
    /^[0-9]{10,}$/.test(customerForm.whatsapp);

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  const handleRequestDemo = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDemoSubmitting(true);
    try {
      const response = await fetch('/api/license/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          softwareId: 'kiaan-recruitment-management',
          fullName: demoForm.fullName,
          email: demoForm.email,
          whatsapp: demoForm.whatsapp,
          type: 'demo'
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setDemoSuccessLicense(data.license);
      } else {
        alert(data.error || 'Failed to request demo');
      }
    } catch (err) {
      alert('Error connecting to licensing server');
    } finally {
      setIsDemoSubmitting(false);
    }
  };

  const handleContinueToPayment = async () => {
    if (!isCustomerFormValid) return;
    setIsBuySubmitting(true);
    try {
      const response = await fetch('/api/license/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          softwareId: 'kiaan-recruitment-management',
          fullName: customerForm.fullName,
          email: customerForm.email,
          whatsapp: customerForm.whatsapp,
          type: 'buy',
          plan: selectedPlan
        })
      });
      const data = await response.json();
      if (response.ok && data.success) {
        setBuySuccessLicense(data.license);
      } else {
        alert(data.error || 'Failed to register license');
      }
    } catch (err) {
      alert('Error connecting to licensing server');
    } finally {
      setIsBuySubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">

      {/* Container max-w-1400px centered */}
      <div className="max-w-[1400px] mx-auto px-6 pt-28 pb-12 lg:pt-32 lg:pb-16">

        {/* SECTION 1 — PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">Monday.com</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan Monday.com is a comprehensive, multi-tenant Project Management Platform modeled after Monday.com. 
              Engineered with deep-level HR tools (Time Tracking & Payroll), specialized AI and R&D pipelines, 
              and commercial CRM workspaces isolated under strict enterprise tenant boundaries. The platform eliminates manual work, improves collaboration between departments, and provides complete visibility over day-to-day business operations.
            </p>
            <p>
              Whether you operate a small agile team or a growing multi-location enterprise, Kiaan Monday.com enables your organization to manage projects faster, reduce operational delays, automate repetitive workflows, and make smarter business decisions using real-time analytics. Every module is designed to work together so your workspace operates efficiently from the first task setup to the final monthly payroll processing.
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



      </div>

      {/* Demo Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => {
                setIsDemoModalOpen(false);
                setDemoSuccessLicense(null);
                setDemoForm({ fullName: '', email: '', whatsapp: '' });
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-5 md:p-6 w-full max-w-md relative z-10 shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => {
                  setIsDemoModalOpen(false);
                  setDemoSuccessLicense(null);
                  setDemoForm({ fullName: '', email: '', whatsapp: '' });
                }} 
                className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
              >
                <X size={14} />
              </button>

              {demoSuccessLicense ? (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">Demo Key Generated!</h3>
                    <p className="text-zinc-400 text-xs px-2">Your 10-day trial license has been successfully generated. Copy it below to activate your software.</p>
                  </div>
                  <div className="bg-[#181818] border border-white/5 p-4 rounded-xl space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider text-zinc-400">Your License Key</span>
                      <div className="flex items-center justify-center gap-2">
                        <code className="bg-black/40 px-3 py-1.5 rounded text-yellow-500 font-mono text-sm font-bold border border-white/5">
                          {demoSuccessLicense.licenseKey}
                        </code>
                        <button
                          onClick={() => handleCopyKey(demoSuccessLicense.licenseKey)}
                          className="p-1.5 rounded bg-[#222] hover:bg-[#333] text-zinc-400 hover:text-white transition-colors"
                        >
                          {copiedText ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400 pt-2 border-t border-white/5">
                      <div>
                        <span className="text-zinc-500 block">Valid For</span>
                        <span className="font-bold text-white">10 Days Trial</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">Expires On</span>
                        <span className="font-bold text-white">
                          {new Date(demoSuccessLicense.expiryDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setIsDemoModalOpen(false);
                      setDemoSuccessLicense(null);
                      setDemoForm({ fullName: '', email: '', whatsapp: '' });
                    }}
                    className="w-full bg-yellow-500 text-black py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-yellow-400 transition-colors"
                  >
                    Done & Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-5">
                    <h3 className="text-xl font-display font-bold text-white mb-1.5">Request Demo</h3>
                    <p className="text-zinc-400 text-xs">Enter your details to generate your 10-day demo license key instantly.</p>
                  </div>

                  <form className="space-y-3" onSubmit={handleRequestDemo}>
                    <div className="relative group">
                      <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                      <input 
                        required 
                        type="text" 
                        placeholder="Full Name" 
                        value={demoForm.fullName}
                        onChange={(e) => setDemoForm({ ...demoForm, fullName: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" 
                      />
                    </div>
                    <div className="relative group">
                      <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                      <input 
                        required 
                        type="email" 
                        placeholder="Email Address" 
                        value={demoForm.email}
                        onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                        className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" 
                      />
                    </div>
                    <div className="relative group flex">
                      <div className="bg-[#222] border border-white/10 border-r-0 rounded-l-xl px-3 py-2.5 text-xs text-zinc-400 flex items-center justify-center font-bold">
                        +91
                      </div>
                      <div className="relative group flex-1">
                        <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors z-10" />
                        <input 
                          required 
                          type="tel" 
                          placeholder="WhatsApp Number" 
                          maxLength={10}
                          value={demoForm.whatsapp}
                          onChange={(e) => setDemoForm({ ...demoForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                          className="w-full bg-[#181818] border border-white/10 rounded-r-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" 
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      disabled={isDemoSubmitting}
                      className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-colors mt-2 flex items-center justify-center gap-2"
                    >
                      {isDemoSubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Generate Demo Key"
                      )}
                    </button>
                  </form>
                </>
              )}
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
                  Choose the perfect fit for your enterprise operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Silver Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Silver</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for agile small teams</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Full Board access & creation',
                      'Time tracking session logs',
                      'Standard intake forms mapping',
                      'Up to 10 employee profiles',
                      'Seeded welcome workspace templates',
                      'Standard cloud files storage'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Silver - $9/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Gold Plan */}
                <div className="bg-[#1a1a1a] border border-yellow-500 rounded-2xl p-4 flex flex-col relative shadow-[0_0_30px_rgba(234,179,8,0.1)] -mt-1 mb-1 z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[8px] md:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5">Gold (Pro)</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing practices</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Everything in Silver included',
                      'Automated Monthly Payroll Sheets',
                      'Custom roles & permissions builder',
                      'Up to 100 employee accounts',
                      'Unlimited folders & boards',
                      'Advanced Time tracking oversight',
                      'Priority ticket help desk'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-white font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Gold (Pro) - $19/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-yellow-500 text-black font-bold text-[9px] md:text-[10px] hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.2)] uppercase tracking-widest">
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Diamond Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Diamond</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For complex multi-divisional enterprises</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Everything in Gold included',
                      'Unlimited active workspace users',
                      'Custom database isolation configs',
                      'Dedicated Superadmin audit panels',
                      'Auto-seeding custom board templates',
                      'Dedicated 24/7 Account Manager',
                      '99.9% uptime SLA guarantee'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => handleChoosePlan('Diamond - $29/month')} className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest">
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
              onClick={() => {
                setIsCustomerFormOpen(false);
                setBuySuccessLicense(null);
                setCustomerForm({ fullName: '', email: '', whatsapp: '' });
              }}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/5 rounded-2xl p-4 md:p-5 w-full max-w-md relative z-10 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  setIsCustomerFormOpen(false);
                  setBuySuccessLicense(null);
                  setCustomerForm({ fullName: '', email: '', whatsapp: '' });
                }}
                className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
              >
                <X size={14} />
              </button>

              {buySuccessLicense ? (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-500/10 text-yellow-500 flex items-center justify-center mx-auto">
                    <Crown className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold text-white mb-1">License Pre-Generated!</h3>
                    <p className="text-zinc-400 text-xs px-2">Your 1-month Premium license key has been pre-created. Complete your payment to activate it.</p>
                  </div>
                  <div className="bg-[#181818] border border-white/5 p-4 rounded-xl space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-zinc-500 tracking-wider text-zinc-400">Your License Key</span>
                      <div className="flex items-center justify-center gap-2">
                        <code className="bg-black/40 px-3 py-1.5 rounded text-yellow-500 font-mono text-sm font-bold border border-white/5">
                          {buySuccessLicense.licenseKey}
                        </code>
                        <button
                          onClick={() => handleCopyKey(buySuccessLicense.licenseKey)}
                          className="p-1.5 rounded bg-[#222] hover:bg-[#333] text-zinc-400 hover:text-white transition-colors"
                        >
                          {copiedText ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400 pt-2 border-t border-white/5">
                      <div>
                        <span className="text-zinc-500 block">Subscription Plan</span>
                        <span className="font-bold text-white">{selectedPlan}</span>
                      </div>
                      <div>
                        <span className="text-zinc-500 block">License Duration</span>
                        <span className="font-bold text-white">30 Days (1 Month)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <button
                      onClick={() => {
                        window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}&key=${buySuccessLicense.licenseKey}`;
                        setIsCustomerFormOpen(false);
                        setBuySuccessLicense(null);
                      }}
                      className="w-full bg-yellow-500 text-black py-3 rounded-xl font-bold text-xs tracking-wider uppercase hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                    >
                      Proceed to Secure Payment
                    </button>
                    <button
                      onClick={() => {
                        setIsCustomerFormOpen(false);
                        setBuySuccessLicense(null);
                        setCustomerForm({ fullName: '', email: '', whatsapp: '' });
                      }}
                      className="w-full py-1.5 text-zinc-500 font-bold text-[10px] uppercase hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <>
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
                        <option value="Silver - $9/month">Silver - $9/month</option>
                        <option value="Gold (Pro) - $19/month">Gold (Pro) - $19/month</option>
                        <option value="Diamond - $29/month">Diamond - $29/month</option>
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
                      disabled={!isCustomerFormValid || isBuySubmitting}
                      className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2 ${isCustomerFormValid && !isBuySubmitting
                          ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                          : 'bg-yellow-500/30 text-black/50 cursor-not-allowed'
                        }`}
                    >
                      {isBuySubmitting ? (
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Generate Key & Continue"
                      )}
                    </button>
                    <button
                      onClick={() => {
                        setIsCustomerFormOpen(false);
                        setCustomerForm({ fullName: '', email: '', whatsapp: '' });
                      }}
                      className="w-full py-1.5 text-zinc-500 font-bold text-[10px] uppercase hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};