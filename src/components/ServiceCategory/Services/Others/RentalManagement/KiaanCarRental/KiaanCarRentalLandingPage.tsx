"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, UserPlus, Calendar, CreditCard, BarChart3, 
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Car, Wrench, Shield
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Create Your Fleet & Hub',
    subtitle: 'Configure company profile, branding, and hub locations.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Start by configuring your global rental profile. Set up custom branding assets (logos, colors, domains) and add multiple geographic hubs (e.g., Beverly Hills Hub, Downtown Hub, North Port Sky Station) to segregate vehicle availability, tax codes, and operation currencies. Define your active car categories (SUV, Convertible, Electric, Sport) and terms of lease. This serves as the single source of truth for operations, enabling automatic dispatch routes, location-based tax overrides, and geo-fenced fleet distribution across all branches from a unified back-office panel.',
    features: [
      'Add rental hub details',
      'Configure business hours',
      'Upload custom branding',
      'Define rental categories',
      'Manage multiple locations',
      'Set general rental terms'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Geographic Operational Hubs</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Hub Name</th>
                <th className="pb-1">Address Location</th>
                <th className="pb-1 text-center">Fleet Count</th>
                <th className="pb-1 text-right">Operating Shifts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Beverly Hills Hub</td>
                <td className="py-1">128 Beverly Dr, Beverly Hills, CA 90210</td>
                <td className="py-1 text-center text-yellow-500 font-bold">5 Cars</td>
                <td className="py-1 text-right">24/7 Hours</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Downtown Executive Hub</td>
                <td className="py-1">712 Sunset Blvd, Los Angeles, CA 90017</td>
                <td className="py-1 text-center text-yellow-500 font-bold">3 Cars</td>
                <td className="py-1 text-right">8:00 AM – 10:00 PM</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">North Port Sky Station</td>
                <td className="py-1">902 Ocean Ave, Los Angeles, CA 90045</td>
                <td className="py-1 text-center text-yellow-500 font-bold">1 Car</td>
                <td className="py-1 text-right">6:00 AM – 12:00 AM</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-1">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Vehicle Categories & Pricing</div>
            <table className="w-full text-left text-[9px] text-zinc-400">
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-1 text-white font-bold">Electric</td><td className="py-1 text-right">$150 – $450/day</td></tr>
                <tr><td className="py-1 text-white font-bold">Sport Exotics</td><td className="py-1 text-right">$300 – $700/day</td></tr>
                <tr><td className="py-1 text-white font-bold">SUV Luxury</td><td className="py-1 text-right">$250/day</td></tr>
                <tr><td className="py-1 text-white font-bold">Convertibles</td><td className="py-1 text-right">$220/day</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Global System Configurations</div>
            <ul className="text-[9px] text-zinc-400 space-y-1 pl-3 list-disc">
              <li><span className="text-zinc-500">Base Currency:</span> USD ($)</li>
              <li><span className="text-zinc-500">Routing Node:</span> Multi-Hub Fleet Allocation</li>
              <li><span className="text-zinc-500">Auto Chauffeur Dispatch:</span> Active (Proximity-based)</li>
              <li><span className="text-zinc-500">Brand Host:</span> gofintaza.com</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Add Drivers & Staff',
    subtitle: 'Invite fleet managers, drivers, and agents.',
    icon: <Users className="w-6 h-6" />,
    description: 'Build your organization chart and invite team members (Admins, Operations Managers, Receptionists, Chauffeurs, and Finance admins). Restrict module visibility with secure Role-Based Access Control (RBAC) to ensure chauffeurs only access routes and checklists, while billing staff see only transactions. Configure shift patterns, logs, and dynamic chauffeur availability (Available, Assigned, On Route, On Leave, Suspended) to facilitate instant booking dispatches and automatic duty scheduling notifications via WhatsApp and SMS.',
    features: [
      'Invite unlimited staff',
      'Role-based access controls',
      'Driver profile verification',
      'Duty scheduling & shifts',
      'Staff login credentials',
      'Activity tracking'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Staff & Chauffeur Registry</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Name</th>
                <th className="pb-1">License & Credentials</th>
                <th className="pb-1">Assigned Hub</th>
                <th className="pb-1 text-center">Rating</th>
                <th className="pb-1 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">David Wilson</td>
                <td className="py-1 font-mono text-zinc-400">DL-908234-A / CDL-40918-B</td>
                <td className="py-1">Beverly Hills Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.8</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Available</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">John Smith</td>
                <td className="py-1 font-mono text-zinc-400">DL-293847-B / CDL-11928-C</td>
                <td className="py-1">Downtown Executive Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.9</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-blue-500/10 text-blue-400">Assigned</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Robert Lee</td>
                <td className="py-1 font-mono text-zinc-400">DL-109238-C / CDL-33902-A</td>
                <td className="py-1">Beverly Hills Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.7</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-zinc-500/10 text-zinc-400">On Leave</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Sarah Miller</td>
                <td className="py-1 font-mono text-zinc-400">DL-552819-D / CDL-55218-F</td>
                <td className="py-1">North Port Station</td>
                <td className="py-1 text-center text-yellow-500">★ 4.5</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-red-500/10 text-red-400">Suspended</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Role Permission Mapping Matrix (RBAC)</div>
          <table className="w-full text-left text-[9px] text-zinc-400 border-collapse">
            <thead>
              <tr className="border-b border-white/5 text-[8px] uppercase tracking-wider text-zinc-600">
                <th className="pb-1">System Role</th>
                <th className="pb-1 text-center">Fleet Mgmt</th>
                <th className="pb-1 text-center">Dispatch Logistics</th>
                <th className="pb-1 text-center">Invoicing & Billing</th>
                <th className="pb-1 text-center">System Settings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Administrator</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Operations Manager</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
                <td className="py-1 text-center text-green-400">Full Access</td>
                <td className="py-1 text-center text-yellow-500">Read Only</td>
                <td className="py-1 text-center text-red-500">No Access</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Chauffeur / Driver</td>
                <td className="py-1 text-center text-yellow-500">Checklists Only</td>
                <td className="py-1 text-center text-green-400">Active Routes</td>
                <td className="py-1 text-center text-red-500">No Access</td>
                <td className="py-1 text-center text-red-500">No Access</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Customer Support</td>
                <td className="py-1 text-center text-yellow-500">Read Only</td>
                <td className="py-1 text-center text-red-500">No Access</td>
                <td className="py-1 text-center text-green-400">Create Invoices</td>
                <td className="py-1 text-center text-red-500">No Access</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  },
  {
    id: '03',
    title: 'Register Customers',
    subtitle: 'Store customer profiles, license details, and histories.',
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Maintain a secure Customer Directory that files contact details, active driving licenses, dynamic risk scores (Low, Medium, Critical), and historic trip files. Upload identity credentials to feed the KYC verification funnel, checking license status, auto-matching insurance policies, verifying security status, and automatically blacklisting accounts with histories of late returns or unpaid damages to minimize vehicle recovery risks.',
    features: [
      'Create digital customer profiles',
      'Verify driving licenses',
      'Track rental histories',
      'Manage security status',
      'Verify insurance coverage',
      'Customer loyalty tracking'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Verified Customer Registry</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Customer ID</th>
                <th className="pb-1">Customer Name</th>
                <th className="pb-1">Contact Email / Phone</th>
                <th className="pb-1 text-center">KYC Check</th>
                <th className="pb-1 text-center">Trips</th>
                <th className="pb-1 text-right">Spent Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 font-mono text-zinc-500">CUST-101</td>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">elena@vortex.io • (555) 042-8812</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Verified</span></td>
                <td className="py-1 text-center text-yellow-500 font-bold">14</td>
                <td className="py-1 text-right text-white font-bold">$12,450</td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">CUST-103</td>
                <td className="py-1 text-white font-bold">Michael Chen</td>
                <td className="py-1">michael.c@gmail.com • (555) 902-1122</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">Pending</span></td>
                <td className="py-1 text-center text-yellow-500 font-bold">2</td>
                <td className="py-1 text-right text-white font-bold">$850</td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">CUST-105</td>
                <td className="py-1 text-white font-bold">David Wilson</td>
                <td className="py-1">david.w@proton.me • (555) 381-0029</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-red-500/10 text-red-400">Rejected</span></td>
                <td className="py-1 text-center text-yellow-500 font-bold">1</td>
                <td className="py-1 text-right text-white font-bold">$450</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">KYC Verification Pipeline Funnel</div>
          <div className="grid grid-cols-5 gap-2 text-center text-[8px]">
            {[
              { s: 'Stage 1', n: 'License OCR Scan', d: 'Extract data, check expiration' },
              { s: 'Stage 2', n: 'Identity Validation', d: 'Check government files' },
              { s: 'Stage 3', n: 'Credit Validation', d: 'Card limit hold check' },
              { s: 'Stage 4', n: 'Insurance Match', d: 'Confirm active cover' },
              { s: 'Stage 5', n: 'Risk Scoring', d: 'Evaluate driving records' }
            ].map((st, i) => (
              <div key={i} className="bg-[#181818] border border-white/5 p-2 rounded-lg relative">
                <div className="text-yellow-500 font-mono font-bold mb-0.5">{st.s}</div>
                <div className="text-white font-bold mb-1 truncate">{st.n}</div>
                <div className="text-zinc-500 text-[7px] leading-tight">{st.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Manage Bookings',
    subtitle: 'Book rentals, schedule pick-ups, and automate notifications.',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Schedule, modify, and track reservations on a unified calendar. Filter bookings by pickup hub, date ranges, and status (Pending, Confirmed, Active, Completed, Cancelled). When a booking is created, the system auto-locks vehicle availability, pre-auths security deposits via Stripe, triggers e-mail reminders, compiles the digital rental lease contract, and assigns the closest available chauffeur for logistics delivery based on proximity.',
    features: [
      'Interactive booking calendar',
      'Automated notifications',
      'Online reservation portal',
      'Vehicle availability status',
      'Waitlist & extension request',
      'Track cancellations & no-shows'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Reservation Registry</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Booking ID</th>
                <th className="pb-1">Customer Name</th>
                <th className="pb-1">Appointed Exotic Car</th>
                <th className="pb-1">Rental Period Range</th>
                <th className="pb-1 text-center">Base Price</th>
                <th className="pb-1 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 font-mono text-zinc-500">RSV-8829</td>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">Tesla Model S Plaid (Solid Black)</td>
                <td className="py-1">2026-06-10 to 2026-06-14</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$600</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Confirmed (Paid)</span></td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">RSV-7712</td>
                <td className="py-1 text-white font-bold">James T.</td>
                <td className="py-1">BMW M8 Convertible (Alpine White)</td>
                <td className="py-1">2026-05-12 to 2026-05-15</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$660</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-zinc-500/10 text-zinc-400">Completed</span></td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">RSV-9011</td>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">Rolls-Royce Spectre (Midnight Blue)</td>
                <td className="py-1">2026-06-20 to 2026-06-25</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$2,250</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Booking Operational Lifecycle Stages</div>
          <div className="flex justify-between items-center text-[8px] text-zinc-500">
            <div className="flex-1 text-center bg-[#181818] p-2 border border-white/5 rounded-lg text-white font-bold">1. Booking Created</div>
            <div className="px-2 text-zinc-700">→</div>
            <div className="flex-1 text-center bg-[#181818] p-2 border border-white/5 rounded-lg text-white font-bold">2. KYC Credentials Verified</div>
            <div className="px-2 text-zinc-700">→</div>
            <div className="flex-1 text-center bg-[#181818] p-2 border border-white/5 rounded-lg text-white font-bold">3. Deposit Stripe Hold</div>
            <div className="px-2 text-zinc-700">→</div>
            <div className="flex-1 text-center bg-[#181818] p-2 border border-white/5 rounded-lg text-white font-bold">4. Rental Agreement E-signed</div>
            <div className="px-2 text-zinc-700">→</div>
            <div className="flex-1 text-center bg-[#181818] p-2 border border-white/5 rounded-lg text-white font-bold">5. Driver Dispatched</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'Inspection & Servicing',
    subtitle: 'Log digital inspection checklists and damage reports.',
    icon: <Car className="w-6 h-6" />,
    description: 'Ensure fleet durability by conducting walkaround checklists before delivery and immediately upon return. Inspectors check 16 key zones on a digital damage marking log, record fuel/battery levels, take photo evidence, and log mileage. Schedule recurring service logs (e.g., Brake pad replacement, oil changes) that auto-trigger maintenance reminders once the vehicle exceeds set odometer limits, tracking repair costs directly against unit revenue.',
    features: [
      'Digital walkaround checklists',
      'Odometer & fuel log',
      'Damage marking diagram',
      'Schedule routine maintenance',
      'Log servicing costs',
      'Upload inspection reports'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Chauffeur 16-Zone Handover Checklist</div>
            <p className="text-[9px] text-zinc-400 leading-relaxed mb-3">
              Chauffeurs log details with pictures on their mobile web view before handing keys to the customer:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[8px] text-zinc-300">
              <div>• Front Bumper & Grill</div>
              <div>• Hood & Left Fender</div>
              <div>• Windshield & Roof</div>
              <div>• Right Front Door</div>
              <div>• Left Front Door</div>
              <div>• Right Rear Door</div>
              <div>• Left Rear Door</div>
              <div>• Rear Bumper & Exhaust</div>
              <div>• Left Quarter Panel</div>
              <div>• Right Quarter Panel</div>
              <div>• Left Front/Rear Tires</div>
              <div>• Right Front/Rear Tires</div>
            </div>
          </div>

          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Servicing Record</div>
            <table className="w-full text-left text-[9px] text-zinc-400 border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-[8px] uppercase tracking-wider text-zinc-600">
                  <th className="pb-1">Exotic model</th>
                  <th className="pb-1">Service task description</th>
                  <th className="pb-1 text-center">Cost</th>
                  <th className="pb-1 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-1 text-white font-bold">Mercedes G-Class</td>
                  <td className="py-1">Brake pad replacement</td>
                  <td className="py-1 text-center text-yellow-500 font-bold">$850</td>
                  <td className="py-1 text-right text-green-400">Completed</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Lambo Revuelto</td>
                  <td className="py-1">Engine tune-up & spark plugs</td>
                  <td className="py-1 text-center text-yellow-500 font-bold">$1,200</td>
                  <td className="py-1 text-right text-blue-400">In Service</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">RR Spectre</td>
                  <td className="py-1">EV Software system upgrade</td>
                  <td className="py-1 text-center text-yellow-500 font-bold">$150</td>
                  <td className="py-1 text-right text-zinc-500">Scheduled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: 'Invoices & Payments',
    subtitle: 'Generate rental agreements, handle deposits, and track payments.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Streamline billing with automatic rental agreements, deposit holds, and invoices. Collect rental payments, secure credit card pre-authorizations for deposits ($500 to $5,000 holds depending on vehicle value), and automatically calculate late-return fines or excess mileage surcharges upon check-in. Process transactions securely via integrated processors (Stripe, Credit Cards, Zelle, Cash App) and output downloadable PDF statements.',
    features: [
      'Instant invoice & agreement generation',
      'Hold & release security deposits',
      'Collect late-return & damage fees',
      'Supports multiple payment gateways',
      'Handle tax & rental discounts',
      'Detailed billing dashboard'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Recent Transactions Ledger</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Transaction ID</th>
                <th className="pb-1">Customer / Entity</th>
                <th className="pb-1">Transaction Type</th>
                <th className="pb-1">Date/Time</th>
                <th className="pb-1 text-center">Channel</th>
                <th className="pb-1 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 font-mono text-zinc-500">TRX-9921</td>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">Rental Payment</td>
                <td className="py-1">2026-06-05 14:30</td>
                <td className="py-1 text-center text-zinc-400">Stripe</td>
                <td className="py-1 text-right text-green-400 font-bold">+$1,250.00</td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">TRX-9922</td>
                <td className="py-1 text-white font-bold">James T.</td>
                <td className="py-1">Security Deposit (Hold)</td>
                <td className="py-1">2026-06-04 11:15</td>
                <td className="py-1 text-center text-zinc-400">Zelle</td>
                <td className="py-1 text-right text-yellow-500 font-bold">+$500.00</td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">TRX-9923</td>
                <td className="py-1 text-white font-bold">David W.</td>
                <td className="py-1">Rental Payment</td>
                <td className="py-1">2026-06-03 09:20</td>
                <td className="py-1 text-center text-zinc-400">Credit Card</td>
                <td className="py-1 text-right text-green-400 font-bold">+$600.00</td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-500">TRX-9924</td>
                <td className="py-1 text-white font-bold">Sarah M.</td>
                <td className="py-1">Insurance Surcharge</td>
                <td className="py-1">2026-06-02 16:45</td>
                <td className="py-1 text-center text-zinc-400">Cash App</td>
                <td className="py-1 text-right text-green-400 font-bold">+$150.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-1">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Security Deposit Holds (Pre-Auths)</div>
            <table className="w-full text-left text-[9px] text-zinc-400">
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-1 text-white font-bold">Lamborghini Revuelto</td><td className="py-1 text-right text-yellow-500 font-bold">$5,000 hold</td></tr>
                <tr><td className="py-1 text-white font-bold">Rolls-Royce Spectre / Ferrari SF90</td><td className="py-1 text-right text-yellow-500 font-bold">$3,500 hold</td></tr>
                <tr><td className="py-1 text-white font-bold">Mercedes-Benz G-Class</td><td className="py-1 text-right text-yellow-500 font-bold">$2,000 hold</td></tr>
                <tr><td className="py-1 text-white font-bold">BMW M8 / Tesla Plaid</td><td className="py-1 text-right text-yellow-500 font-bold">$1,200 – $1,500 hold</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">System Billing Fines & Rules</div>
            <ul className="text-[9px] text-zinc-400 space-y-1 pl-3 list-disc">
              <li><span className="text-zinc-500">Late returns:</span> $100.00 per hour delay fee</li>
              <li><span className="text-zinc-500">Refueling charge:</span> Fuel cost + $50 service fee</li>
              <li><span className="text-zinc-500">Excess mileage:</span> $2.50 per excess mile</li>
              <li><span className="text-zinc-500">Tolls handling:</span> Total tolls + $10 fee</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '07',
    title: 'Fleet Reports & Analytics',
    subtitle: 'Monitor vehicle utilization, rental revenue, and fleet health.',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Monitor business growth with real-time analytics. View utilization rate metrics, gross revenues generated per unit, acquisition costs vs repair records, and driver productivity logs. Drill down into specific exotic performance (e.g., Lamborghini Revuelto vs Rolls-Royce Spectre trip count and earnings) and export compliance-ready PDF ledger reports to automate accounting audits and guide fleet expansion strategies.',
    features: [
      'Daily utilization rate dashboard',
      'Vehicle class revenue metrics',
      'Acquisition & growth charts',
      'Maintenance cost tracking',
      'Driver productivity reports',
      'Exportable CSV/PDF statistics'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Fleet Lifetime Performance & Gross Revenue</div>
          <div className="max-h-36 overflow-y-auto pr-2 custom-scrollbar">
            <table className="w-full text-left text-[9px] text-zinc-300 border-collapse">
              <thead>
                <tr className="border-b border-white/5 text-[8px] uppercase tracking-wider text-zinc-500 sticky top-0 bg-[#121212]">
                  <th className="pb-1">Vehicle Model Name</th>
                  <th className="pb-1">Category</th>
                  <th className="pb-1 text-center">Trips</th>
                  <th className="pb-1 text-center">Miles Driven</th>
                  <th className="pb-1 text-center">Maintenance</th>
                  <th className="pb-1 text-right">Gross Earnings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="py-1 text-white font-bold">Lamborghini Revuelto</td>
                  <td className="py-1 text-zinc-500">Sport</td>
                  <td className="py-1 text-center font-bold text-yellow-500">42</td>
                  <td className="py-1 text-center">4,800 mi</td>
                  <td className="py-1 text-center text-red-500">$2,400</td>
                  <td className="py-1 text-right text-white font-bold">$208,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Rolls-Royce Spectre</td>
                  <td className="py-1 text-zinc-500">Electric</td>
                  <td className="py-1 text-center font-bold text-yellow-500">14</td>
                  <td className="py-1 text-center">1,240 mi</td>
                  <td className="py-1 text-center text-red-500">$0</td>
                  <td className="py-1 text-right text-white font-bold">$124,500</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Ferrari SF90 Stradale</td>
                  <td className="py-1 text-zinc-500">Sport</td>
                  <td className="py-1 text-center font-bold text-yellow-500">15</td>
                  <td className="py-1 text-center">500 mi</td>
                  <td className="py-1 text-center text-red-500">$1,850</td>
                  <td className="py-1 text-right text-white font-bold">$92,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Tesla Model S Plaid</td>
                  <td className="py-1 text-zinc-500">Electric</td>
                  <td className="py-1 text-center font-bold text-yellow-500">34</td>
                  <td className="py-1 text-center">9,450 mi</td>
                  <td className="py-1 text-center text-red-500">$600</td>
                  <td className="py-1 text-right text-white font-bold">$92,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Porsche 911 GT3</td>
                  <td className="py-1 text-zinc-500">Sport</td>
                  <td className="py-1 text-center font-bold text-yellow-500">18</td>
                  <td className="py-1 text-center">1,500 mi</td>
                  <td className="py-1 text-center text-red-500">$3,200</td>
                  <td className="py-1 text-right text-white font-bold">$74,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Aston Martin DBS</td>
                  <td className="py-1 text-zinc-500">Sport</td>
                  <td className="py-1 text-center font-bold text-yellow-500">22</td>
                  <td className="py-1 text-center">1,800 mi</td>
                  <td className="py-1 text-center text-red-500">$4,100</td>
                  <td className="py-1 text-right text-white font-bold">$64,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">BMW M8 Convertible</td>
                  <td className="py-1 text-zinc-500">Convertible</td>
                  <td className="py-1 text-center font-bold text-yellow-500">12</td>
                  <td className="py-1 text-center">2,150 mi</td>
                  <td className="py-1 text-center text-red-500">$850</td>
                  <td className="py-1 text-right text-white font-bold">$58,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Bentley Continental GT</td>
                  <td className="py-1 text-zinc-500">Sport</td>
                  <td className="py-1 text-center font-bold text-yellow-500">14</td>
                  <td className="py-1 text-center">3,100 mi</td>
                  <td className="py-1 text-center text-red-500">$1,500</td>
                  <td className="py-1 text-right text-white font-bold">$48,000</td>
                </tr>
                <tr>
                  <td className="py-1 text-white font-bold">Mercedes-Benz G-Class</td>
                  <td className="py-1 text-zinc-500">SUV</td>
                  <td className="py-1 text-center font-bold text-yellow-500">8</td>
                  <td className="py-1 text-center">800 mi</td>
                  <td className="py-1 text-center text-red-500">$10,350</td>
                  <td className="py-1 text-right text-white font-bold">$45,200</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[10px] text-zinc-400 font-mono">
          <div>Total Trips Logged: <strong className="text-white">179 Trips</strong></div>
          <div>Avg Fleet Utilization: <strong className="text-yellow-500">88% Rate</strong></div>
          <div>Net Operating Profit: <strong className="text-green-400 font-bold">$780,850.00</strong></div>
        </div>
      </div>
    )
  }
];

export const KiaanCarRentalLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  
  // Buy Now Flow State
  const [buyStep, setBuyStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">
      
      {/* Container max-w-1400px centered */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">
        
        {/* SECTION 1 — PRODUCT DESCRIPTION */}
        <div className="w-full mb-16">
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight">
            Kiaan <span className="text-yellow-500">Car Rental</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6">
            <p>
              Kiaan Car Rental is an all-in-one intelligent fleet management and car booking platform built to simplify the complete workflow of modern rental businesses. From fleet registration, driver assignment, and customer booking to digital vehicle inspections, billing, deposits, reports, and multi-location management, every operation is connected through one centralized dashboard. The platform eliminates manual paperwork, improves driver coordination, and provides complete visibility over fleet utilization and revenue.
            </p>
            <p>
              Whether you operate a small boutique rental fleet or a large multi-location car rental agency, Kiaan Car Rental enables your team to manage bookings faster, reduce fleet downtime, automate security deposit holds, improve customer experience, and make smarter fleet expansion decisions using real-time analytics. Every module is designed to work together so your business operates smoothly from reservation request to vehicle return.
            </p>
          </div>
        </div>

        {/* SECTION 2 — WORKFLOW OVERVIEW */}
        <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
          WORKFLOW OVERVIEW
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">
          
          {/* LEFT SIDE: Workflow Cards */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3 lg:sticky lg:top-8 z-20">
            {WORKFLOW_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveItem(item)}
                  onMouseEnter={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-xl border transition-all duration-300 flex items-center p-4 group ${
                    isActive 
                      ? 'bg-yellow-500/5 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.05)]' 
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

          {/* RIGHT SIDE: Workflow Detail Panel (Single Active Step with AnimatePresence) */}
          <div className="flex-1 w-full max-w-[800px] bg-[#111] border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.03)] rounded-2xl p-8 shadow-2xl relative min-h-[600px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
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
                <div className="mb-8">
                  {activeItem.mockup}
                </div>

                {/* Features List */}
                <h3 className="text-yellow-500 font-bold text-sm mb-4 font-mono uppercase tracking-wider">What you can do:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {activeItem.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-zinc-300 text-sm">
                      <div className="w-4 h-4 rounded-full border border-yellow-500/50 flex items-center justify-center text-yellow-500 shrink-0">
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
                <div className="relative group">
                  <Building size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input required type="text" placeholder="Company Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="flex gap-4">
                  <div className="relative group w-1/2">
                    <Car size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                    <input required type="number" placeholder="Fleet Size" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                  </div>
                  <div className="relative group w-1/2">
                    <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                    <input required type="text" placeholder="City" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                  </div>
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => { setIsBuyModalOpen(false); setBuyStep(1); setSelectedProduct(''); setSelectedPlan(''); }}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111] border border-white/10 rounded-2xl p-6 md:p-8 w-full max-w-xl relative z-10 shadow-2xl overflow-hidden"
            >
              <button 
                onClick={() => { setIsBuyModalOpen(false); setBuyStep(1); setSelectedProduct(''); setSelectedPlan(''); }} 
                className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors bg-white/5 p-2 rounded-full hover:bg-white/10"
              >
                <X size={16} />
              </button>
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3 text-[10px] font-bold text-zinc-600 uppercase tracking-widest bg-black/50 inline-flex px-3 py-1.5 rounded-full border border-white/5">
                  <span className={buyStep >= 1 ? 'text-yellow-500' : ''}>1. Product</span>
                  <ChevronRight size={12} className="text-zinc-700" />
                  <span className={buyStep >= 2 ? 'text-yellow-500' : ''}>2. Plan</span>
                  <ChevronRight size={12} className="text-zinc-700" />
                  <span className={buyStep >= 3 ? 'text-yellow-500' : ''}>3. Details</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white">Purchase Subscription</h3>
              </div>

              {/* Step 1: Product Selection */}
              {buyStep === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <p className="text-zinc-400 text-sm mb-6">Select the relevant Rental Management product:</p>
                  <div className="space-y-3">
                    {['Kiaan Rental Core', 'Kiaan Car Rental', 'Kiaan Vehicle Rental System'].map((prod, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedProduct(prod)}
                        className={`w-full text-left px-5 py-5 rounded-xl border transition-all ${
                          selectedProduct === prod 
                            ? 'bg-yellow-500/10 border-yellow-500 text-white shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                            : 'bg-[#181818] border-white/10 text-zinc-400 hover:border-white/30 hover:bg-[#222]'
                        }`}
                      >
                        <div className="font-bold text-sm">{prod}</div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button 
                      disabled={!selectedProduct}
                      onClick={() => setBuyStep(2)}
                      className="bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] disabled:shadow-none"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Plan Selection */}
              {buyStep === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <p className="text-zinc-400 text-sm mb-6">Select a plan for <span className="text-white font-bold">{selectedProduct}</span>:</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Starter', price: '$49', period: '/mo', desc: 'For small fleets & independent operators' },
                      { name: 'Professional', price: '$129', period: '/mo', desc: 'For growing agencies & multiple locations' },
                    ].map((plan, i) => (
                      <button 
                        key={i}
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`text-left p-6 rounded-xl border transition-all ${
                          selectedPlan === plan.name 
                            ? 'bg-yellow-500/10 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                            : 'bg-[#181818] border-white/10 hover:border-white/30 hover:bg-[#222]'
                        }`}
                      >
                        <div className={`font-bold text-sm uppercase tracking-wider mb-2 ${selectedPlan === plan.name ? 'text-yellow-500' : 'text-zinc-400'}`}>{plan.name}</div>
                        <div className="text-3xl font-bold text-white mb-3">{plan.price}<span className="text-sm text-zinc-500 font-normal">{plan.period}</span></div>
                        <div className="text-xs text-zinc-500 leading-relaxed">{plan.desc}</div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button 
                      onClick={() => setBuyStep(1)}
                      className="bg-[#181818] text-white border border-white/10 px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#222] transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      disabled={!selectedPlan}
                      onClick={() => setBuyStep(3)}
                      className="bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed text-black px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)] disabled:shadow-none"
                    >
                      Next Step
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Details */}
              {buyStep === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <p className="text-zinc-400 text-sm mb-6">Finalize your purchase details:</p>
                  <div className="bg-[#181818] border border-white/10 rounded-xl p-5 mb-8">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-zinc-400">Product:</span>
                      <span className="text-white font-bold">{selectedProduct}</span>
                    </div>
                    <div className="flex justify-between text-sm border-t border-white/5 pt-3">
                      <span className="text-zinc-400">Selected Plan:</span>
                      <span className="text-yellow-500 font-bold">{selectedPlan}</span>
                    </div>
                  </div>
                  
                  <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Proceeding to payment gateway..."); setIsBuyModalOpen(false); setBuyStep(1); }}>
                    <div className="grid grid-cols-2 gap-4">
                      <input required type="text" placeholder="First Name" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                      <input required type="text" placeholder="Last Name" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    </div>
                    <input required type="email" placeholder="Billing Email" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    <input required type="text" placeholder="Company Name" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    
                    <div className="mt-8 flex justify-between pt-4 border-t border-white/5">
                      <button 
                        type="button"
                        onClick={() => setBuyStep(2)}
                        className="bg-[#181818] text-white border border-white/10 px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#222] transition-colors"
                      >
                        Back
                      </button>
                      <button 
                        type="submit"
                        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.2)]"
                      >
                        Continue to Payment
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
