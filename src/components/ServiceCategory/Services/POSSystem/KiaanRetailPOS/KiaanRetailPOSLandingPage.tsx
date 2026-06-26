"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Lock, Package, Wrench, Receipt, CreditCard, LineChart, ChevronRight, X, Check,
  ShieldCheck, Cloud, Clock, Headphones, User, Mail, Phone, Building, MapPin, Rocket, ShoppingCart,
  ArrowRight, Key, UserCheck, PlusCircle, Printer, Coins, AlertTriangle, ClipboardList, Settings, Percent, QrCode, Shield, Database, TrendingUp, Download, Server, FileText, CheckCircle, Tag, MessageCircle, Crown, ChevronDown
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Secure Login',
    subtitle: 'Setup staff accounts and assign secure dashboard roles.',
    icon: <Lock className="w-6 h-6" />,
    description: 'Protect your business with bank-grade multi-factor authentication, secure JWT tokens, and strict role-based dashboard permissions for cashier, technician, and manager roles.',
    features: [
      'Multi-factor authentication',
      'JWT secure sessions',
      'Role-based permissions',
      'Activity audit logs',
      'Terminal access limits',
      'IP-restricted logins'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Server className="w-4 h-4 text-yellow-500" /> Access Authentication Flow
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Users securely log into the system using JSON Web Tokens (JWT). Cashiers, technicians, and managers input credentials on an SSL encrypted interface. The system validates security parameters, reviews role permissions, checks Google Authenticator Multi-Factor keys, and loads the corresponding dashboard access settings.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <User className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Open Panel</span>
            <span className="text-[8px] text-zinc-500 leading-snug">User opens POS login screen.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Key className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. Login Info</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Credentials sent via secure SSL.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <ShieldCheck className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. JWT & MFA</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Validate credentials and tokens.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <UserCheck className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">4. Role Check</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Load authorized access roles.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Rocket className="w-4 h-4 text-green-500 mb-1 animate-pulse" />
            <span className="text-[10px] font-bold text-white mb-0.5">5. Dashboard</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Unlocks customized user view.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Inventory Management',
    subtitle: 'Track products, generate SKUs, and manage real-time stock.',
    icon: <Package className="w-6 h-6" />,
    description: 'Add products, generate barcode labels and SKUs automatically, track stock levels in real-time, and get low-inventory warnings instantly to ensure you never run out of stock.',
    features: [
      'Automatic SKU generation',
      'Barcode label printing',
      'Real-time stock deduction',
      'Low inventory alerts',
      'Supplier purchase orders',
      'Multi-warehouse support'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Database className="w-4 h-4 text-yellow-500" /> Stock Catalog & Barcoding System
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Seamlessly manage items, barcodes, and supplier records. When adding stock, unique SKUs generate automatically. Stock values deduct in real time during cash-register checkouts or repair operations. If stock falls below standard parameters, alerts trigger automatic reorder workflows.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <PlusCircle className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Add Item</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Register catalog item data.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Tag className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. SKU & Barcode</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Generate custom barcode labels.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Coins className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. Live POS Sync</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Real-time stock deduction.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <AlertTriangle className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">4. Alerts</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Triggers on low levels.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Package className="w-4 h-4 text-green-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">5. Restock</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Generate restock PO requests.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Customer & Repair',
    subtitle: 'Register customer devices, log issues, and track progress.',
    icon: <Wrench className="w-6 h-6" />,
    description: 'Create detailed repair tickets for devices, capture pre-repair inspection logs, assign tasks to expert technicians, and send automated status notifications to customers at every step.',
    features: [
      'Customer CRM directory',
      'Device intake & serial capture',
      'Pre-repair condition logs',
      'Technician job assignment',
      'SMS/Email status alerts',
      'Device warranty tracking'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Wrench className="w-4 h-4 text-yellow-500" /> Intake & Repair Ticket Lifecycle
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Document user diagnostics and customer profile history. Register the client, log details of the phone or laptop, record the serial key, and generate a pre-repair condition check. Tickets are assigned to technicians. Auto-generated email and SMS alerts inform the customer throughout the intake, repair, and handover phases.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <User className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Intake CRM</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Log customer contact data.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <ClipboardList className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. Check & Quote</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Diagnose & quote fee ranges.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Settings className="w-4 h-4 text-yellow-500 mb-1 animate-spin-slow" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. Job Queue</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Certified tech repairs device.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Mail className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">4. Auto Alerts</span>
            <span className="text-[8px] text-zinc-500 leading-snug">SMS updates sent to client.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Wrench className="w-4 h-4 text-green-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">5. Pickup</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Deliver device and warranty.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Invoice Generation',
    subtitle: 'Generate professional GST/VAT bills and thermal receipts.',
    icon: <Receipt className="w-6 h-6" />,
    description: 'Calculate item and repair costs with automated tax structures, generate professional PDF invoices, and print receipts instantly on standard 80mm/58mm thermal printers.',
    features: [
      'GST/VAT auto calculation',
      'PDF invoice downloads',
      'Thermal printer layout sync',
      'Itemized billing options',
      'Pre-bills and estimates',
      'Custom invoice headers'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <FileText className="w-4 h-4 text-yellow-500" /> Invoice Creation & Taxation Flow
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Create billing records for inventory and repair ticket items. The POS pulls details from current registers, automatically calculates local tax brackets (GST, VAT, sales tax), structures discounts, and generates standard printouts matching standard A4 PDFs or 80mm/58mm thermal layouts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <ShoppingCart className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Load Cart</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Select items and labor fees.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Percent className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. Tax Calc</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Automated GST/VAT setup.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Printer className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. Layout Format</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Sync layout to printer width.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Receipt className="w-4 h-4 text-green-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">4. Delivery</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Prints paper and sends PDF.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Payment Processing',
    subtitle: 'Process split payments, cards, digital wallets, and cash.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Accept flexible payments through cash, debit/credit cards, UPI qr code scan, and split payments. System logs all transaction sources and settles checkout register balance automatically.',
    features: [
      'Cash & card logging',
      'UPI QR-code integration',
      'Split payment support',
      'Register cash drawer logs',
      'Secure checkout logs',
      'Payment receipts via SMS'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-yellow-500" /> Payment & Checkout Register Flow
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Process payments from cards, cash, or UPI. Cashiers can log checkout values under single payment channels or split amounts. Dynamic UPI payment QR codes sync on customer-facing terminal screens, updating ledger transaction counts and drawer totals automatically for cash check reconciliation.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Coins className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Settle Mode</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Choose cash, card, or UPI.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <QrCode className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. UPI QR Code</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Scans dynamic terminal QR.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Shield className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. Ledger Sync</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Secure transaction validation.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <CheckCircle className="w-4 h-4 text-green-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">4. Reconcile</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Balancing register ledgers.</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Reports & Analytics',
    subtitle: 'Analyze revenue growth, repairs progress, and staff analytics.',
    icon: <LineChart className="w-6 h-6" />,
    description: 'Track daily net profits, most sold parts, average repair turnarounds, and staff productivity reports using highly detailed dashboards to maximize your business margins.',
    features: [
      'Real-time sales graphs',
      'Repair turnaround analytics',
      'Staff productivity rankings',
      'Category-wise revenue report',
      'Inventory value estimation',
      'Excel & PDF data exports'
    ],
    mockup: (
      <div className="bg-[#141414] border border-white/5 rounded-2xl p-6 mb-8 shadow-inner w-full text-left">
        <h4 className="text-sm font-bold text-yellow-500 uppercase tracking-wider mb-3 flex items-center gap-2">
          <LineChart className="w-4 h-4 text-yellow-500" /> Business Analytics & Reports Pipeline
        </h4>
        <p className="text-zinc-300 text-xs leading-relaxed mb-6">
          Aggregate and view cash flow, repair turnaround durations, and general sales indicators on dynamic dashboards. The system compiles sales histories across all active cash registers in real-time, calculating margins and exporting spreadsheets for operational review.
        </p>

        <div className="bg-[#1a1a1a]/80 border border-white/5 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center mb-3">
            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full animate-ping"></span> Real-Time Revenue Trend
            </div>
            <span className="text-[10px] font-mono text-green-500 bg-green-500/10 px-2 py-0.5 rounded font-bold">+24.5% Week-over-Week</span>
          </div>
          <div className="h-24 w-full relative">
            <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#eab308" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line x1="0" y1="25" x2="300" y2="25" stroke="#ffffff" strokeOpacity="0.03" strokeDasharray="3,3" />
              <line x1="0" y1="50" x2="300" y2="50" stroke="#ffffff" strokeOpacity="0.03" strokeDasharray="3,3" />
              <line x1="0" y1="75" x2="300" y2="75" stroke="#ffffff" strokeOpacity="0.03" strokeDasharray="3,3" />
              <path d="M0,90 Q30,60 60,70 T120,40 T180,60 T240,20 T300,10 L300,100 L0,100 Z" fill="url(#chartGradient)" />
              <path d="M0,90 Q30,60 60,70 T120,40 T180,60 T240,20 T300,10" fill="none" stroke="#eab308" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="120" cy="40" r="3.5" fill="#eab308" />
              <circle cx="240" cy="20" r="3.5" fill="#eab308" />
              <circle cx="300" cy="10" r="3.5" fill="#eab308" className="animate-pulse" />
            </svg>
            <div className="absolute inset-0 flex justify-between items-end text-[8px] text-zinc-600 px-1 pt-2 pointer-events-none">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 border-t border-white/5 pt-6">
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Database className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">1. Data Sync</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Aggregate sales & repair details.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />
          
          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <TrendingUp className="w-4 h-4 text-yellow-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">2. Margins</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Compute net revenue margins.</span>
          </div>
          <ArrowRight className="hidden sm:block w-4 h-4 text-zinc-600 shrink-0" />
          <ChevronRight className="block sm:hidden w-4 h-4 text-zinc-600 rotate-90 shrink-0" />

          <div className="bg-[#181818] border border-white/5 rounded-xl p-3 flex flex-col items-center text-center w-full sm:max-w-[130px] transition-all hover:border-yellow-500/20">
            <Download className="w-4 h-4 text-green-500 mb-1" />
            <span className="text-[10px] font-bold text-white mb-0.5">3. Export</span>
            <span className="text-[8px] text-zinc-500 leading-snug">Download CSV/PDF reports.</span>
          </div>
        </div>
      </div>
    )
  }
];

export const KiaanRetailPOSLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: string } | null>(null);

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">
      {/* Navigation Bar (simplified for isolated module) */}
      <nav className="sticky top-0 w-full z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-2.5 flex justify-between items-center">
        <div className="text-sm font-bold uppercase tracking-widest text-white">
          <span className="text-yellow-500">Kiaan</span> POS System
        </div>
        <div className="flex gap-3">
          <Link href="/products/pos-system">
            <button className="bg-zinc-800 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-zinc-700 transition-colors">
              Explore Product
            </button>
          </Link>
          <Link href="/software-services">
            <button className="bg-white/5 border border-white/10 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
              Back to Services
            </button>
          </Link>
        </div>
      </nav>

      {/* Container max-w-1400px centered */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">

        {/* SECTION 1 — PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">POS System</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              KiaanTechPOS is an all-in-one POS and repair shop management solution designed to streamline daily business operations for retailers and service center operators. By unifying inventory tracking, customer relationship management, repair ticketing, invoicing, payment processing, and advanced analytics in a single premium platform, it empowers businesses to grow efficiently. It eliminates the need for fragmented, legacy systems by providing real-time synchronization and a clean, high-performance user interface.
            </p>
            <p>
              Whether handling complex walk-in device repairs or processing high-volume checkouts, the system offers unmatched speed, reliability, and security. Scale your operations smoothly, improve team collaboration, and drive customer loyalty with the ultimate digital workspace built for modern service and retail businesses.
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
                  onClick={() => setActiveItem(item)}
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
                onClick={() => setIsPricingModalOpen(true)}
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
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  {activeItem.description}
                </p>

                {/* Dynamic Mockup UI */}
                {activeItem.mockup}

                {/* Features List */}
                <h3 className="text-yellow-500 font-bold text-sm mb-4">What you can do:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {activeItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                      <div className="w-4 h-4 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500 shrink-0">
                        <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </div>
                  ))}
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
              className="bg-[#111] border border-white/10 rounded-2xl p-4 md:p-6 w-full max-w-md relative z-10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setIsDemoModalOpen(false)} className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10">
                <X size={16} />
              </button>

              <div className="mb-4">
                <h3 className="text-xl font-display font-bold text-white mb-1">Request Demo</h3>
                <p className="text-zinc-400 text-xs">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("Demo Account Request Submitted Successfully!"); setIsDemoModalOpen(false); }}>
                {/* Full Name */}
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="text" placeholder="Full Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>

                {/* Email Address */}
                <div className="relative group">
                  <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="email" placeholder="Email Address" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>

                {/* Mobile Number */}
                <div className="relative group">
                  <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="tel" placeholder="Mobile Number" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>

                {/* Submit button with golden gradient and hover glow to match project premium aesthetics */}
                <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-3 rounded-xl font-bold text-sm tracking-wide hover:from-yellow-400 hover:to-amber-400 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] mt-2 flex items-center justify-center gap-2 cursor-pointer">
                  <Rocket size={16} /> Submit Demo Request
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>      {/* Subscription Pricing Modal */}
      <AnimatePresence>
        {isPricingModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => { setIsPricingModalOpen(false); setSelectedPlan(null); }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            ></motion.div>
 
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className={`relative bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 w-full max-h-[90vh] overflow-y-auto z-10 shadow-[0_0_50px_rgba(234,179,8,0.15)] flex flex-col justify-between transition-all duration-300 ${
                selectedPlan ? 'max-w-md' : 'max-w-4xl'
              }`}
            >
              {/* Close Button */}
              <button
                onClick={() => { setIsPricingModalOpen(false); setSelectedPlan(null); }}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-white/5 transition-all duration-300"
              >
                <X size={20} />
              </button>

              {selectedPlan ? (
                // STEP 2: COMPLETE YOUR PURCHASE FORM
                <div className="flex flex-col h-full justify-between">
                  <div className="text-center mb-4 pr-6">
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-1">
                      Complete <span className="text-yellow-500">Your Purchase</span>
                    </h3>
                    <p className="text-zinc-400 text-xs leading-snug">
                      Enter your details below to continue with your subscription and proceed to secure payment.
                    </p>
                  </div>

                  <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert(`Redirecting to secure payment for ${selectedPlan.name} plan...`); setIsPricingModalOpen(false); setSelectedPlan(null); }}>
                    {/* Full Name */}
                    <div className="relative group">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                      <input required type="text" placeholder="Full Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    </div>

                    {/* Email Address */}
                    <div className="relative group">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                      <input required type="email" placeholder="Email Address" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    </div>

                    {/* WhatsApp Number with Country Code */}
                    <div className="relative flex items-stretch bg-[#181818] border border-white/10 rounded-xl focus-within:border-yellow-500/50 transition-all overflow-hidden">
                      <div className="flex items-center justify-center px-4 bg-zinc-900 border-r border-white/10 text-sm text-zinc-400 font-medium">
                        +91
                      </div>
                      <div className="relative flex-1 flex items-center">
                        <MessageCircle size={18} className="absolute left-4 text-zinc-500" />
                        <input required type="tel" placeholder="WhatsApp Number" className="w-full bg-transparent pl-12 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none" />
                      </div>
                    </div>

                    {/* Selected Plan Display Dropdown */}
                    <div className="relative group">
                      <Crown size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none" />
                      <select 
                        value={selectedPlan.name}
                        onChange={(e) => {
                          const val = e.target.value;
                          const matched = [
                            { name: "Starter", price: "$9" },
                            { name: "Professional", price: "$19" },
                            { name: "Enterprise", price: "$29" }
                          ].find(p => p.name === val);
                          if (matched) {
                            setSelectedPlan(matched);
                          }
                        }}
                        className="w-full bg-[#181818] border border-yellow-500/30 rounded-xl pl-12 pr-10 py-2.5 text-sm text-yellow-500 font-bold focus:border-yellow-500 outline-none appearance-none cursor-pointer transition-all"
                      >
                        <option value="Starter" className="bg-[#181818] text-white font-sans">Starter - $9/month</option>
                        <option value="Professional" className="bg-[#181818] text-white font-sans">Professional - $19/month</option>
                        <option value="Enterprise" className="bg-[#181818] text-white font-sans">Enterprise - $29/month</option>
                      </select>
                      <ChevronDown size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-500 pointer-events-none transition-transform group-focus-within:rotate-180" />
                    </div>

                    {/* Security Lock Disclaimer */}
                    <div className="flex items-start gap-2.5 text-[10px] text-zinc-500 leading-snug">
                      <Lock size={12} className="shrink-0 mt-0.5" />
                      <p>Your information is secure and will only be used for your subscription and account setup.</p>
                    </div>

                    {/* Continue Button */}
                    <button type="submit" className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-black py-3 rounded-xl font-bold text-sm tracking-wide hover:from-yellow-400 hover:to-amber-400 transition-all hover:shadow-[0_0_20px_rgba(234,179,8,0.3)] mt-2 flex items-center justify-center gap-2 cursor-pointer">
                      Continue to Secure Payment
                    </button>

                    {/* Cancel Button */}
                    <button type="button" onClick={() => setSelectedPlan(null)} className="w-full text-center text-zinc-500 hover:text-zinc-300 text-xs font-semibold mt-2 transition-colors cursor-pointer">
                      Cancel
                    </button>
                  </form>
                </div>
              ) : (
                // STEP 1: SELECT SUBSCRIPTION PLAN CARDS
                <>
                  <div className="text-center mb-4 pr-6">
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white mb-1">
                      Select <span className="text-yellow-500">Subscription Plan</span>
                    </h3>
                    <p className="text-zinc-400 text-xs">
                      Choose the perfect fit for your retail store or repair shop operations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                    {[
                      {
                        name: "Starter",
                        price: "$9",
                        desc: "Ideal for small standalone shops.",
                        features: ["Single Register POS", "Up to 500 products", "Basic Repair Tickets", "Standard Email Receipts"],
                        popular: false
                      },
                      {
                        name: "Professional",
                        price: "$19",
                        desc: "Perfect for growing repair stores.",
                        features: ["3 Registers / POS", "Unlimited products", "Advanced Repair Logs", "Thermal Print & GST bills", "Priority Support"],
                        popular: true
                      },
                      {
                        name: "Enterprise",
                        price: "$29",
                        desc: "For multi-location franchise.",
                        features: ["Unlimited Register POS", "Multi-Store Inventory Sync", "Custom Dashboard Roles", "Full API Integration", "24/7 Premium Support"],
                        popular: false
                      }
                    ].map((plan, idx) => (
                      <div
                        key={idx}
                        className={`bg-zinc-900/50 border rounded-2xl p-4 flex flex-col justify-between relative transition-all duration-300 ${plan.popular
                            ? 'border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)] scale-105'
                            : 'border-white/5 hover:border-white/20'
                          }`}
                      >
                        {plan.popular && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[9px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-md">
                            Most Popular
                          </span>
                        )}
                        <div>
                          <h4 className="text-md font-bold text-white mb-1">{plan.name}</h4>
                          <p className="text-zinc-500 text-[10px] mb-2 leading-snug">{plan.desc}</p>

                          <div className="flex items-baseline mb-3">
                            <span className="text-2xl font-display font-bold text-white">{plan.price}</span>
                            <span className="text-zinc-500 text-xs font-light ml-1 font-sans">/month</span>
                          </div>

                          <ul className="space-y-1.5 mb-3">
                            {plan.features.map((feat, fidx) => (
                              <li key={fidx} className="flex items-start gap-2 text-zinc-300 text-[11px]">
                                <Check size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <button
                          onClick={() => setSelectedPlan({ name: plan.name, price: plan.price })}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${plan.popular
                              ? 'bg-yellow-500 text-black hover:bg-white hover:shadow-lg'
                              : 'bg-zinc-800 text-white border border-white/5 hover:bg-zinc-700'
                            }`}
                        >
                          Choose Plan
                        </button>
                      </div>
                    ))}
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