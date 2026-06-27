"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Building2, Users, UserPlus, Calendar, Dumbbell, CreditCard, BarChart3,
  ChevronRight, Rocket, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, CheckCircle2, Lock, Check, ChevronDown
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Gym & Club Setup',
    subtitle: 'Setup club parameters, membership tiers, and schedules.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Configure gym settings, define operating hours, upload branding assets, and specify training zones (e.g. Cardio Area, Free Weights, Crossfit Studio). Set up custom membership tiers (Gold, Platinum, VIP) and schedule regular class routines.',
    features: [
      'Define zone schedules',
      'Create membership plans',
      'Class scheduling calendar',
      'Trainer work hours mapping'
    ],
    sections: [
      {
        heading: 'Club Profiles & Multi-locations',
        content: 'Easily manage multiple club locations from a single dashboard. Synchronize member access cards so VIP members can access any branch.'
      },
      {
        heading: 'Flexible Membership Tiers',
        content: 'Create recurring subscription passes or one-time prepaid packs. Configure sign-up fees, trial access terms, and security deposits.'
      }
    ]
  },
  {
    id: '02',
    title: 'Member Check-In & KYC',
    subtitle: 'Streamline member entry and track attendance.',
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Provide a fast digital onboarding portal for new members. Capture contact details, scan emergency IDs, record body metrics on registration, and configure biometric or QR-code reader interfaces for frictionless gate entry.',
    features: [
      'Biometric / QR check-in sync',
      'BMI and vitals logs',
      'E-contract signed logging',
      'Instant mobile gate pass'
    ],
    sections: [
      {
        heading: 'QR & RFID Gate Integration',
        content: 'Connect check-in terminals directly to your gate system. Deny entry automatically to members with expired subscriptions or pending bills.'
      }
    ]
  },
  {
    id: '03',
    title: 'Trainer & Workout Planners',
    subtitle: 'Assign fitness trainers and customize diet charts.',
    icon: <Dumbbell className="w-6 h-6" />,
    description: 'Assign personal trainers to members based on fitness goals. Trainers can construct personalized workout templates (Push/Pull/Legs, Strength Training) and upload daily macro-balanced diet plans.',
    features: [
      'Trainer booking scheduler',
      'Workout routine templates',
      'Macro diet tracker logs',
      'Goal weight progress monitor'
    ],
    sections: [
      {
        heading: 'Personalized Coaching',
        content: 'Empower coaches with tracking dashboards. Log workout weights, reps, cardio durations, and client compliance charts.'
      }
    ]
  },
  {
    id: '04',
    title: 'Automated Billing & Dues',
    subtitle: 'Track invoices, dues, and recurring subscription payments.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Generate GST invoice receipts for gym sign-ups, personal training sessions, and health bar sales. Automate recurring subscription payments and trigger automated warning SMS notifications when payment is overdue.',
    features: [
      'Automated invoice generation',
      'Recurring card payments',
      'SMS payment reminders',
      'Health store POS module'
    ],
    sections: [
      {
        heading: 'Subscription Autopay System',
        content: 'Members link their credit cards once. The billing engine processes standard monthly membership dues on the 1st of every month automatically.'
      }
    ]
  }
];

export const KiaanGymLandingPage: React.FC = () => {
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
          Kiaan Gym
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
            Elevate Your Fitness Business
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4 text-[#0F172A]">
            The Smart <span className="text-[#2563EB]">Gym & Club</span> ERP System
          </h1>
          
          <p className="text-[#64748B] text-sm leading-relaxed mb-6 max-w-2xl mx-auto">
            Manage gym memberships, automate check-ins at check gates, track trainer calendars, log diet charts, and process automated card renewals effortlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => setIsDemoModalOpen(true)}
              className="w-full sm:w-auto bg-[#2563EB] text-white px-6 py-2.5 text-xs rounded-full font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/10 hover:scale-105"
            >
              Start Free Trial <ChevronRight size={14} />
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
              Streamline gate entries, simplify coach scheduling, and secure cash flows with smart automated payment runs.
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
              Flexible operational plans designed to grow with your fitness centers and franchises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Base Plan', price: 9, features: ['1 Location', 'Up to 200 Members', 'Manual Pass Logging', 'Standard SMS Receipts'] },
              { title: 'Standard Plan', price: 19, features: ['Up to 3 Locations', 'Up to 1,000 Members', 'Biometric & QR Gate Sync', 'Trainer Workout Planners', 'Email Support'] },
              { title: 'Enterprise Plan', price: 29, features: ['Unlimited Locations', 'Unlimited Members', 'Automated Credit Card Recur', 'Custom Coach Portals', 'Priority Support'] }
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
              <h3 className="text-lg font-bold text-[#0F172A] mb-2 uppercase tracking-tight">Request Sandbox Club Account</h3>
              <p className="text-xs text-[#64748B] mb-6">Provide details to configure your dashboard environment.</p>
              
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Gym Club Setup Scheduled!"); setIsDemoModalOpen(false); }}>
                <input required type="text" placeholder="Full Name" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <input required type="email" placeholder="Email Address" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-4 py-2.5 text-xs text-[#0F172A] outline-none" />
                <button type="submit" className="w-full bg-[#2563EB] text-white py-3 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors mt-2">
                  Request Trial Login
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
                  onClick={() => { alert(`Thank you for subscribing! Gym database setup initialized at $${selectedPrice}/mo.`); setIsBuyModalOpen(false); }}
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
