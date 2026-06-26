"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, X, Crown, Lock, User, Mail, Phone, Check
} from 'lucide-react';
import { KiaanHospitalManagementWorkflow } from './KiaanHospitalManagementWorkflow';
import { KiaanHospitalManagementFeatures } from './KiaanHospitalManagementFeatures';
import { KiaanHospitalManagementGallery } from './KiaanHospitalManagementGallery';
import { KiaanHospitalManagementForms } from './KiaanHospitalManagementForms';

const PLANS = [
  {
    name: 'Starter',
    price: '$9',
    period: '/month',
    description: 'Perfect for small clinics & solo practitioners.',
    features: ['Up to 2 Doctors', '100 Patients/month', 'Basic Appointments', 'Email Support'],
    highlight: false,
  },
  {
    name: 'Professional',
    price: '$19',
    period: '/month',
    description: 'Ideal for growing hospitals & multi-doctor practices.',
    features: ['Up to 10 Doctors', 'Unlimited Patients', 'Advanced Analytics', 'Priority Support', 'Billing & Payments'],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '$29',
    period: '/month',
    description: 'For large hospitals requiring full-scale management.',
    features: ['Unlimited Doctors', 'Multi-branch Support', 'Custom Integrations', 'Dedicated Account Manager', 'SLA Guarantee'],
    highlight: false,
  },
];

export const KiaanHospitalManagementLandingPage: React.FC = () => {
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [isCustomerFormOpen, setIsCustomerFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const [customerForm, setCustomerForm] = useState({ fullName: '', email: '', whatsapp: '' });

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

  return (
    <div className="bg-[#0a0a0a] text-white selection:bg-yellow-500/30">
      {/* Navbar */}
      <nav className="sticky top-0 w-full z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-2.5 flex justify-between items-center">
        <div className="text-sm font-bold uppercase tracking-widest text-white">
          <span className="text-yellow-500">Kiaan</span> Hospital Management System
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => setIsBuyModalOpen(true)}
            className="bg-yellow-500 text-black px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors shadow-[0_0_15px_rgba(234,179,8,0.3)]"
          >
            Buy Now
          </button>
          <Link href="/software-services">
            <button className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Back to Services
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none animated-grid opacity-20"></div>
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Enterprise Grade Solution
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">Hospital Management System</span>
          </h1>
          <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            Streamline your operations, boost productivity, and scale your business with our state-of-the-art Hospital Management System.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsBuyModalOpen(true)}
              className="w-full sm:w-auto bg-yellow-500 text-black px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
            >
              Buy Now <ArrowRight size={18} />
            </button>
            <a href="#demo">
              <button className="w-full sm:w-auto bg-zinc-800 text-white border border-white/10 px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider hover:bg-zinc-700 transition-colors">
                Request Demo
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 px-6 bg-black">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-6">
              Empower Your <span className="text-yellow-500">Business</span>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Our Hospital Management System solves complex operational challenges by centralizing your data into a single, intuitive platform.
            </p>
            <ul className="space-y-4">
              {['Increase Operational Efficiency', 'Reduce Manual Administrative Work', 'Gain Real-Time Analytics & Insights', 'Improve Team Collaboration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white font-medium">
                  <CheckCircle className="text-green-500" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/20 to-red-600/20 blur-3xl rounded-full"></div>
            <div className="bg-zinc-900 border border-white/10 rounded-2xl aspect-video relative z-10 flex items-center justify-center shadow-2xl">
              <span className="text-zinc-600 uppercase tracking-widest font-bold">Interactive Preview</span>
            </div>
          </div>
        </div>
      </section>

      <KiaanHospitalManagementFeatures />
      <KiaanHospitalManagementWorkflow />
      <KiaanHospitalManagementGallery />

      {/* Technology Stack */}
      <section className="py-12 px-6 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-8">Built on Modern Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['React / Next.js', 'Node.js', 'MongoDB', 'AWS / VPS', 'JWT Auth'].map((tech, i) => (
              <div key={i} className="bg-black/50 border border-white/5 p-6 rounded-xl text-zinc-400 font-bold tracking-wider text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="demo">
        <KiaanHospitalManagementForms />
      </div>

      {/* ─── Buy Now Plan Selection Modal ─── */}
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
                  Choose the perfect fit for your hospital operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                {/* Starter */}
                <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:border-white/20 transition-all">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Starter</h4>
                    <p className="text-zinc-500 text-sm">Ideal for small clinics</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-black text-white">$9</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {['Up to 1 Doctor', 'Up to 500 Patients', 'Appointment Management', 'Patient Record Management', 'Billing & Invoicing', 'Basic Reports', 'Email Support'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />{f}
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

                {/* Professional - Most Popular */}
                <div className="bg-[#181818] border-2 border-yellow-500 rounded-2xl p-6 flex flex-col gap-5 relative shadow-[0_0_40px_rgba(234,179,8,0.15)] -mt-2 mb-2">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    MOST POPULAR
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Professional</h4>
                    <p className="text-zinc-500 text-sm">Perfect for growing practices</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-black text-white">$19</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {['Up to 5 Doctors', 'Up to 2,000 Patients', 'Everything in Starter', 'Treatment Management', 'SMS & Email Reminders', 'Advanced Reports', 'Priority Support', 'Data Backup'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-white text-sm font-medium">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />{f}
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

                {/* Enterprise */}
                <div className="bg-[#181818] border border-white/10 rounded-2xl p-6 flex flex-col gap-5 hover:border-white/20 transition-all">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">Enterprise</h4>
                    <p className="text-zinc-500 text-sm">For multi-location clinics</p>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl md:text-5xl font-black text-white">$29</span>
                    <span className="text-zinc-500 text-sm mb-1">/month</span>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {['Unlimited Doctors', 'Unlimited Patients', 'Everything in Professional', 'Multi-Branch Management', 'Inventory Management', 'Advanced Analytics', 'Role-Based Access', '24/7 Priority Support'].map((f, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-zinc-300 text-sm">
                        <Check size={14} className="text-yellow-500 shrink-0" strokeWidth={3} />{f}
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

      {/* ─── Customer Information Form Modal ─── */}
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
              className="bg-[#111] border border-white/5 rounded-2xl p-4 md:p-5 w-full max-w-md relative z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
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
                {/* Full Name */}
                <div className="relative group">
                  <label className="sr-only">Full Name</label>
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                {/* Email */}
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

                {/* WhatsApp */}
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

                {/* Plan selector (changeable) */}
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

              {/* Security message */}
              <div className="mb-4 text-center">
                <p className="text-[10px] text-zinc-500 flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-zinc-400" />
                  Your information is secure and will only be used for your subscription and account setup.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleContinueToPayment}
                  disabled={!isCustomerFormValid}
                  className={`w-full py-3 rounded-xl font-bold text-xs tracking-wide transition-all ${
                    isCustomerFormValid
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