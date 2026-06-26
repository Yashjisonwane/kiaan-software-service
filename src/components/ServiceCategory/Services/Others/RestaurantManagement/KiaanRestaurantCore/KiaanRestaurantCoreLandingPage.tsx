"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Utensils, ChefHat, BookOpen, TableProperties, ClipboardList, Flame, Receipt, Package, Users, TrendingUp, GitFork, Sparkles,
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Send, Star, Crown, CheckCircle2, Lock, Check, ChevronDown, Hash, Home
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Create Your Restaurant',
    subtitle: 'Set up restaurant profile, hours, and GST.',
    icon: <Utensils className="w-6 h-6" />,
    description: 'Set up your restaurant profile including logo, address, contact details, cuisine type, operating hours, GST information, dining capacity, and business settings.',
    features: [
      'Add branding & profile details',
      'Configure operating hours',
      'Define cuisine types & capacity',
      'Manage tax & GST settings',
      'Create dining room layout',
      'Multi-branch configuration'
    ],
    sections: [
      {
        heading: 'Restaurant Setup',
        content: 'Create the digital identity of your restaurant by configuring branding, locations, working hours, taxes, cuisines, seating capacity, and business information. This forms the foundation for all restaurant operations.'
      },
      {
        heading: 'Multi-Branch Configuration',
        content: 'Configure multiple restaurant outlets under one centralized dashboard with branch-wise settings, managers, menus, taxes and reporting.'
      }
    ]
  },
  {
    id: '02',
    title: 'Add Staff & Roles',
    subtitle: 'Create secure accounts for managers, chefs, and staff.',
    icon: <ChefHat className="w-6 h-6" />,
    description: 'Create secure accounts for managers, chefs, waiters, cashiers, delivery staff and administrators.',
    features: [
      'Chef & kitchen staff roles',
      'Waiter & captain logins',
      'Cashier billing access',
      'Delivery & dispatch permissions',
      'Admin control center',
      'Activity & audit logging'
    ],
    sections: [
      {
        heading: 'Role-Based Access Control',
        content: 'Assign role-based permissions to every employee while maintaining secure access across restaurant operations.'
      },
      {
        heading: 'Secure Access Management',
        content: 'Configure individual credentials and permission levels to protect sensitive business, sales, and financial information.'
      }
    ]
  },
  {
    id: '03',
    title: 'Menu Management',
    subtitle: 'Create categories, dishes, combos, and pricing.',
    icon: <BookOpen className="w-6 h-6" />,
    description: 'Create food categories, dishes, combos, pricing, taxes and menu availability.',
    features: [
      'Categorize menus & items',
      'Set pricing & custom taxes',
      'Add food images & descriptions',
      'Configure addons & modifiers',
      'Define combos & special offers',
      'Toggle availability status'
    ],
    sections: [
      {
        heading: 'Menu Organization',
        content: 'Organize menus with categories, pricing, images, kitchen availability, seasonal items, and promotional offers.'
      },
      {
        heading: 'Flexible Customizations',
        content: 'Establish custom item variants, modifiers, and addon options to offer flexible dining packages and choices.'
      }
    ]
  },
  {
    id: '04',
    title: 'Table & Reservation Management',
    subtitle: 'Manage tables, reservations, and seating arrangements.',
    icon: <TableProperties className="w-6 h-6" />,
    description: 'Manage dining tables, reservations, waiting lists and seating arrangements.',
    features: [
      'Real-time table layout',
      'Track table occupancy',
      'Accept online reservations',
      'Digital guest waitlists',
      'Seating capacity optimizer',
      'Automated booking updates'
    ],
    sections: [
      {
        heading: 'Real-Time Table Seating',
        content: 'Monitor table occupancy in real-time, accept reservations, manage customer queues and improve dining efficiency.'
      },
      {
        heading: 'Reservation Booking & Queue',
        content: 'Plan table assignments, schedule advance bookings, and control customer waiting times with automated digital waitlists.'
      }
    ]
  },
  {
    id: '05',
    title: 'Order Management',
    subtitle: 'Take and track dine-in, takeaway, and online orders.',
    icon: <ClipboardList className="w-6 h-6" />,
    description: 'Take Dine-In, Takeaway and Online Orders.',
    features: [
      'Dine-In tableside ordering',
      'Takeaway & quick bills',
      'Online channel integrations',
      'Real-time order statuses',
      'Track waiter assignments',
      'Modify active orders'
    ],
    sections: [
      {
        heading: 'Order Operations',
        content: 'Track every customer order from placement to kitchen preparation, serving and payment.'
      },
      {
        heading: 'Omnichannel Routing',
        content: 'Gather all walk-in, takeaway, and digital delivery platform orders under a single centralized tracking view.'
      }
    ]
  },
  {
    id: '06',
    title: 'Kitchen Display System',
    subtitle: 'Send orders directly to kitchen stations.',
    icon: <Flame className="w-6 h-6" />,
    description: 'Send orders directly to kitchen stations.',
    features: [
      'Real-time screen updates',
      'Color-coded order priority',
      'Preparation time tracking',
      'Food category routing',
      'Chef fulfillment status',
      'Waiter ready notifications'
    ],
    sections: [
      {
        heading: 'Kitchen Coordination',
        content: 'Display incoming orders in real time, organize preparation queues and improve kitchen coordination.'
      },
      {
        heading: 'Station-wise Routing',
        content: 'Route specific food categories to designated preparation areas such as grill, pantry, or bar automatically.'
      }
    ]
  },
  {
    id: '07',
    title: 'Billing & Payments',
    subtitle: 'Generate invoices and accept multiple payment methods.',
    icon: <Receipt className="w-6 h-6" />,
    description: 'Generate invoices and accept multiple payment methods.',
    features: [
      'Fast invoice generation',
      'Dine-in bill split engine',
      'UPI, cards, & cash options',
      'GST-compliant templates',
      'Digital payment links',
      'Discount & coupon validation'
    ],
    sections: [
      {
        heading: 'Invoicing & Settlements',
        content: 'Support cash, UPI, cards, wallets and split payments while generating GST-compliant invoices instantly.'
      },
      {
        heading: 'Revenue Reconciliation',
        content: 'Ensure error-free cash registers and digital account records with consolidated day-end sales logs.'
      }
    ]
  },
  {
    id: '08',
    title: 'Inventory Management',
    subtitle: 'Track ingredients, stock movement and purchase logs.',
    icon: <Package className="w-6 h-6" />,
    description: 'Track ingredients, stock movement and purchase management.',
    features: [
      'Ingredient-level tracking',
      'Low-stock warning alerts',
      'Supplier purchase logs',
      'Recipe cost calculation',
      'Wastage reporting logs',
      'Digital purchase orders'
    ],
    sections: [
      {
        heading: 'Inventory Controls',
        content: 'Monitor inventory levels, reduce wastage, manage suppliers and automate low-stock alerts.'
      },
      {
        heading: 'Recipe & Ingredient Tracking',
        content: 'Deplete inventory automatically based on sales, allowing accurate cost-per-dish calculation and wastage minimization.'
      }
    ]
  },
  {
    id: '09',
    title: 'Customer Management',
    subtitle: 'Store customer profiles, order history and loyalty.',
    icon: <Users className="w-6 h-6" />,
    description: 'Store customer profiles, order history and loyalty points.',
    features: [
      'Customer profile database',
      'Track meal preferences',
      'Loyalty rewards program',
      'Personalized promo coupons',
      'Order history archives',
      'Feedback & reviews log'
    ],
    sections: [
      {
        heading: 'Customer Loyalty',
        content: 'Maintain customer records, preferences, visit history, rewards and personalized offers.'
      },
      {
        heading: 'Targeted Engagement',
        content: 'Understand customer dining behavior, visit frequencies, and deploy custom loyalty promotions directly.'
      }
    ]
  },
  {
    id: '10',
    title: 'Reports & Analytics',
    subtitle: 'Access dashboards for daily sales and trends.',
    icon: <TrendingUp className="w-6 h-6" />,
    description: 'View real-time restaurant performance reports.',
    features: [
      'Daily sales dashboard',
      'Revenue & expense trackers',
      'Best-selling items list',
      'Branch performance comparison',
      'Stock usage reporting',
      'Export PDF & Excel reports'
    ],
    sections: [
      {
        heading: 'Business Performance',
        content: 'Access dashboards for daily sales, revenue, expenses, inventory usage, best-selling dishes, customer trends and branch performance.'
      },
      {
        heading: 'Data-driven Decisions',
        content: 'Identify operational bottlenecks, calculate profit margins, and streamline resource allocation.'
      }
    ]
  },
  {
    id: '11',
    title: 'Multi-Branch Management',
    subtitle: 'Manage multiple restaurant outlets from one dashboard.',
    icon: <GitFork className="w-6 h-6" />,
    description: 'Manage multiple restaurant outlets from one dashboard.',
    features: [
      'Central admin control panel',
      'Compare branch revenues',
      'Sync global menu prices',
      'Manage branch stock levels',
      'Consolidated sales reports',
      'Multi-location settings'
    ],
    sections: [
      {
        heading: 'Multi-Branch Operations',
        content: 'Monitor sales, inventory, employees and operations across every restaurant branch in real time.'
      },
      {
        heading: 'Branch Stock Synergy',
        content: 'Coordinate stock requisitions, coordinate manager permissions, and optimize menus globally.'
      }
    ]
  }
];

export const KiaanRestaurantCoreLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement>(null);

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

  const handleItemClick = (item: typeof WORKFLOW_ITEMS[0]) => {
    setActiveItem(item);
    setTimeout(() => {
      if (panelRef.current) {
        const y = panelRef.current.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">

      {/* Container max-w-1400px centered */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">

        {/* SECTION 1 — PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">Restaurant Core</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan Restaurant Core is a complete all-in-one restaurant management platform designed to simplify and automate every aspect of restaurant operations. From table reservations and order management to kitchen coordination, billing, inventory, customer engagement, analytics, and multi-branch operations, every process is connected through one intelligent centralized dashboard.
            </p>
            <p>
              Whether you manage a café, cloud kitchen, fine dining restaurant, quick service restaurant (QSR), food court, or multiple restaurant branches, Kiaan Restaurant Core helps your team operate faster, reduce manual work, improve customer satisfaction, optimize inventory, increase profitability, and make smarter business decisions through real-time insights.
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
                  onClick={() => handleItemClick(item)}
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
          <div ref={panelRef} className="flex-1 w-full max-w-[800px] bg-[#111] border border-white/5 rounded-2xl p-8 shadow-2xl relative">
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
              onClick={() => setIsDemoModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-md relative z-10 shadow-2xl"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <X size={16} />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Request Demo</h3>
                <p className="text-zinc-400 text-sm">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Demo Requested!"); setIsDemoModalOpen(false); }}>
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="relative group">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>

                <button type="submit" className="w-full bg-yellow-500 text-black py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-colors mt-4">
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
                  Choose the perfect fit for your restaurant operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small cafes & diners</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 1 Branch',
                      'Up to 500 Orders/Month',
                      'Menu Management',
                      'Dine-In & Takeaway',
                      'Basic Billing',
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing restaurants</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 3 Branches',
                      'Up to 5,000 Orders/Month',
                      'Everything in Starter',
                      'Kitchen Display System (KDS)',
                      'Inventory Tracking',
                      'SMS/Email Alerts',
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For multi-branch networks</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Unlimited Branches',
                      'Unlimited Orders',
                      'Everything in Professional',
                      'Multi-Branch Analytics',
                      'AI Demand Forecasting',
                      'Recipe Costing & Wastage',
                      'Role-Based Access Control',
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
              className="bg-[#111] border border-white/5 rounded-2xl p-4 md:p-6 w-full max-w-md relative z-10 shadow-2xl overflow-hidden"
            >
              <div className="mb-6 text-center">
                <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2 tracking-wide">
                  Complete Your Purchase
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Enter your details below to continue with your subscription and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                <div className="relative group">
                  <label className="sr-only">Email Address</label>
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="email"
                    value={customerForm.email}
                    onChange={(e) => setCustomerForm({ ...customerForm, email: e.target.value })}
                    placeholder="Email Address"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                <div className="flex">
                  <div className="bg-[#222] border border-white/10 border-r-0 rounded-l-xl px-4 py-3 text-sm text-zinc-400 flex items-center justify-center font-bold">
                    +91
                  </div>
                  <div className="relative group flex-1">
                    <label className="sr-only">WhatsApp Number</label>
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors z-10" />
                    <input
                      required
                      type="tel"
                      value={customerForm.whatsapp}
                      onChange={(e) => setCustomerForm({ ...customerForm, whatsapp: e.target.value.replace(/\D/g, '') })}
                      placeholder="WhatsApp Number"
                      maxLength={10}
                      className="w-full bg-[#181818] border border-white/10 rounded-r-xl pl-12 pr-4 py-3 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <label className="sr-only">Selected Plan</label>
                  <Crown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none z-10" />
                  <select
                    value={selectedPlan}
                    onChange={(e) => setSelectedPlan(e.target.value)}
                    className="w-full bg-[#181818] border border-yellow-500/30 rounded-xl pl-12 pr-10 py-3.5 text-sm text-yellow-500 font-bold outline-none appearance-none cursor-pointer focus:border-yellow-500 focus:bg-[#222] transition-all"
                  >
                    <option value="" disabled className="bg-[#111] text-zinc-500">Select Subscription Plan</option>
                    <option value="Starter - $9/month" className="bg-[#111] text-white">Starter - $9/month</option>
                    <option value="Professional - $19/month" className="bg-[#111] text-white">Professional - $19/month</option>
                    <option value="Enterprise - $29/month" className="bg-[#111] text-white">Enterprise - $29/month</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none z-10" />
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
                  className={`w-full py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all ${isCustomerFormValid
                      ? 'bg-yellow-500 text-black hover:bg-yellow-400 shadow-[0_0_20px_rgba(234,179,8,0.2)]'
                      : 'bg-yellow-500/30 text-black/50 cursor-not-allowed'
                    }`}
                >
                  Continue to Secure Payment
                </button>
                <button
                  onClick={() => setIsCustomerFormOpen(false)}
                  className="w-full py-2 text-zinc-500 font-bold text-xs hover:text-white transition-colors"
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