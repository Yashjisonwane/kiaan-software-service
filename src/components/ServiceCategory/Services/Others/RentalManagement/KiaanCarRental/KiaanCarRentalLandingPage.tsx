"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, UserPlus, Calendar, CreditCard, BarChart3, 
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin, Car, Wrench, Shield, Check, Lock, Crown,
  Map, ClipboardCheck
} from 'lucide-react';

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Create Your Fleet & Hubs',
    subtitle: 'Configure operational hubs, vehicle classes, and daily base rates.',
    icon: <Building2 className="w-6 h-6" />,
    description: 'Configure your car rental workspace. Set up geographic hubs to segregate vehicle availability, local tax codes, and currency configurations. Group your fleet into distinct rental categories and establish base daily rental rates, mileage limits, and general leasing terms.',
    features: [
      'Set up multi-location rental hubs',
      'Define vehicle class categorizations',
      'Configure business hours per hub',
      'Upload company branding & terms',
      'Manage regional tax policies',
      'Establish base daily rental rates'
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
                <th className="pb-1 text-center">Fleet Capacity</th>
                <th className="pb-1 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Beverly Hills Hub</td>
                <td className="py-1">128 Beverly Dr, Beverly Hills, CA 90210</td>
                <td className="py-1 text-center text-yellow-500 font-bold">25 Cars</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Active</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Downtown Executive Hub</td>
                <td className="py-1">712 Sunset Blvd, Los Angeles, CA 90017</td>
                <td className="py-1 text-center text-yellow-500 font-bold">15 Cars</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Active</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">North Port Sky Station</td>
                <td className="py-1">902 Ocean Ave, Los Angeles, CA 90045</td>
                <td className="py-1 text-center text-yellow-500 font-bold">10 Cars</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Active</span></td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="grid grid-cols-2 gap-4 pt-1">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Vehicle Categories & Base Pricing</div>
            <table className="w-full text-left text-[9px] text-zinc-400">
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-1 text-white font-bold">Electric</td><td className="py-1 text-right">$150 – $450/day</td></tr>
                <tr><td className="py-1 text-white font-bold">Exotic Sport</td><td className="py-1 text-right">$300 – $700/day</td></tr>
                <tr><td className="py-1 text-white font-bold">Luxury SUV</td><td className="py-1 text-right">$250/day</td></tr>
                <tr><td className="py-1 text-white font-bold">Convertible</td><td className="py-1 text-right">$220/day</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Base Rules & Scope</div>
            <ul className="text-[9px] text-zinc-400 space-y-1 pl-3 list-disc">
              <li><span className="text-zinc-500">Currency:</span> USD ($)</li>
              <li><span className="text-zinc-500">Allocation:</span> Hub-specific</li>
              <li><span className="text-zinc-500">Grace Period:</span> 29 Minutes</li>
              <li><span className="text-zinc-500">Support Host:</span> gofintaza.com</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '02',
    title: 'Add Drivers & Chauffeurs',
    subtitle: 'Register drivers, assign shift schedules, and manage CDL profiles.',
    icon: <Users className="w-6 h-6" />,
    description: 'Build your organization chart and invite team members. Record professional chauffeur licenses, medical certificates, and driving histories. Use Role-Based Access Control (RBAC) to ensure drivers only access routing and inspection check sheets, while support staff handle booking requests.',
    features: [
      'Register chauffeurs & support staff',
      'Set role-based access permissions',
      'Log CDL license credentials',
      'Configure shifts & working patterns',
      'Monitor driver feedback ratings',
      'Set dynamic availability statuses'
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
                <td className="py-1 font-mono text-zinc-400 text-[9px]">DL-908234-A / CDL-40918-B</td>
                <td className="py-1">Beverly Hills Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.8</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Available</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">John Smith</td>
                <td className="py-1 font-mono text-zinc-400 text-[9px]">DL-293847-B / CDL-11928-C</td>
                <td className="py-1">Downtown Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.9</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-blue-500/10 text-blue-400">Assigned</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Robert Lee</td>
                <td className="py-1 font-mono text-zinc-400 text-[9px]">DL-109238-C / CDL-33902-A</td>
                <td className="py-1">Beverly Hills Hub</td>
                <td className="py-1 text-center text-yellow-500">★ 4.7</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-zinc-500/10 text-zinc-400">On Leave</span></td>
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
                <td className="py-1 text-white font-bold">Chauffeur / Driver</td>
                <td className="py-1 text-center text-yellow-500">Checklists Only</td>
                <td className="py-1 text-center text-green-400">Active Routes</td>
                <td className="py-1 text-center text-red-500">No Access</td>
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
    title: 'Register Customers & KYC',
    subtitle: "Securely verify driver's licenses, auto insurance, and credit risk scores.",
    icon: <UserPlus className="w-6 h-6" />,
    description: 'Maintain a secure Customer Directory that files contact profiles, driving records, and liability insurance cards. Feed upload documents through the automated customer KYC verification funnel to validate credentials.',
    features: [
      'Store comprehensive customer profiles',
      'Automate license OCR verification',
      'Validate active auto insurance policies',
      'Assess guest financial credit risks',
      'Track historical trip logs & spend',
      'Maintain blacklist database rules'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Verified Customer Directory</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Customer</th>
                <th className="pb-1">License State</th>
                <th className="pb-1">Primary Insurer</th>
                <th className="pb-1 text-center">KYC Status</th>
                <th className="pb-1 text-right">Lifetime Spend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">California (Class C)</td>
                <td className="py-1">State Farm</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Verified</span></td>
                <td className="py-1 text-right text-yellow-500 font-bold">$12,850</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Michael Chen</td>
                <td className="py-1">New York (Class D)</td>
                <td className="py-1">GEICO Auto</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">Pending</span></td>
                <td className="py-1 text-right text-yellow-500 font-bold">$4,200</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">David Johnson</td>
                <td className="py-1">Texas (Class A)</td>
                <td className="py-1">Progressive</td>
                <td className="py-1 text-center"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-red-500/10 text-red-400">Flagged</span></td>
                <td className="py-1 text-right text-yellow-500 font-bold">$0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">KYC Verification Funnel Milestones</div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: '01. License OCR Check', desc: 'Validates status & class' },
              { label: '02. Identity Match', desc: 'Facial recognition verification' },
              { label: '03. Insurance Policy Match', desc: 'Auto coverage authentication' },
              { label: '04. Liability Risk Score', desc: 'Generates user safety tier' }
            ].map((step, idx) => (
              <div key={idx} className="bg-[#181818] border border-white/5 p-2 rounded text-center">
                <div className="text-[8px] font-bold text-white mb-0.5">{step.label}</div>
                <div className="text-[7px] text-zinc-550">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  },
  {
    id: '04',
    title: 'Dynamic Booking Engine',
    subtitle: 'Automate reservation workflows, vehicle assignments, and alerts.',
    icon: <Calendar className="w-6 h-6" />,
    description: 'Process rental bookings seamlessly through an intelligent allocation calendar. Set up real-time availability filters, handle reservation deposits, and automate rental confirmation notifications.',
    features: [
      'Real-time vehicle availability sync',
      'Direct booking engine integration',
      'Location-based auto assignments',
      'Instant guest check-out logs',
      'Automated confirmation alerts',
      'Extend active rentals dynamically'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Reservations Ledger</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Res ID</th>
                <th className="pb-1">Customer</th>
                <th className="pb-1">Car Model</th>
                <th className="pb-1">Rental Period</th>
                <th className="pb-1 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-mono font-bold">RSV-8829</td>
                <td className="py-1">Elena Rodriguez</td>
                <td className="py-1">Lamborghini Revuelto</td>
                <td className="py-1">June 26 – June 29 (3 Days)</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">In Progress</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-mono font-bold">RSV-7712</td>
                <td className="py-1">Michael Chen</td>
                <td className="py-1">Porsche 911 GT3 RS</td>
                <td className="py-1">July 02 – July 04 (2 Days)</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-blue-500/10 text-blue-400">Confirmed</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-mono font-bold">RSV-9011</td>
                <td className="py-1">Alice Smith</td>
                <td className="py-1">Mercedes-Benz G-Class</td>
                <td className="py-1">June 20 – June 22 (2 Days)</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-zinc-500/10 text-zinc-400">Returned</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Booking Lifecycle Milestones</div>
          <div className="flex items-center justify-between text-[8px] font-bold font-mono text-zinc-400">
            <span className="text-yellow-500">1. Res Received</span>
            <span className="text-zinc-500">&rarr;</span>
            <span className="text-yellow-500">2. Deposit Checked</span>
            <span className="text-zinc-500">&rarr;</span>
            <span className="text-yellow-500">3. Agreement E-Signed</span>
            <span className="text-zinc-500">&rarr;</span>
            <span className="text-yellow-500">4. Keys Dispatched</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '05',
    title: 'GPS Tracking & Telematics',
    subtitle: 'Monitor real-time coordinates, geofences, and vehicle speed alerts.',
    icon: <Map className="w-6 h-6" />,
    description: 'Protect your high-value assets with live GPS tracking and telemetry logging. Track vehicle locations on a dynamic map, monitor live vehicle speed alerts, and receive instant geofence breach notifications.',
    features: [
      'Real-time GPS coordinate mapping',
      'Set geographic boundary geofences',
      'Receive instant overspeed alerts',
      'Track fuel & battery charge levels',
      'Log engine diagnostics & DTC codes',
      'Monitor chauffeur driving behaviors'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Live Telemetry & GPS Tracking</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Vehicle</th>
                <th className="pb-1">Live Coordinates / Speed</th>
                <th className="pb-1">Fuel / Battery</th>
                <th className="pb-1 text-right">Active Alerts</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Lamborghini Revuelto</td>
                <td className="py-1 font-mono text-[9px]">34.0522° N, 118.2437° W / 65 mph</td>
                <td className="py-1 text-yellow-500 font-bold">78% Fuel</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">None</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Porsche 911 GT3 RS</td>
                <td className="py-1 font-mono text-[9px]">34.0736° N, 118.4004° W / 105 mph</td>
                <td className="py-1 text-yellow-500 font-bold">45% Fuel</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-red-500/10 text-red-400">Overspeed Warn</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Tesla Model S Plaid</td>
                <td className="py-1 font-mono text-[9px]">34.0194° N, 118.4912° W / 0 mph</td>
                <td className="py-1 text-yellow-500 font-bold">88% Battery</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">Geofence Exit</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Geofences</div>
            <ul className="text-[9px] text-zinc-400 space-y-1">
              <li>📍 <strong className="text-white">Beverly Hills Safe Zone:</strong> Radius 15 miles</li>
              <li>📍 <strong className="text-white">Los Angeles Metro Boundary:</strong> Radius 50 miles</li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Telemetry Diagnostics</div>
            <ul className="text-[9px] text-zinc-400 space-y-1">
              <li>📡 <strong className="text-white">Ping Interval:</strong> Every 5 seconds</li>
              <li>🩺 <strong className="text-white">Diagnostic Codes (OBD):</strong> Clear (0 DTC)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '06',
    title: '16-Zone Digital Inspections',
    subtitle: 'Perform walkaround damage checks, log tyre tread, and schedule service.',
    icon: <ClipboardCheck className="w-6 h-6" />,
    description: 'Ensure quality control with mandatory chauffeur-led digital inspections before handovers and after returns. Walk through the 16-zone exterior/interior check-sheet, record damage logs, and report technical faults.',
    features: [
      'Mandatory 16-zone walkaround checklist',
      'Log high-resolution damage reports',
      'Record tyre wear & brake pad logs',
      'Verify interior cleanliness ratings',
      'Auto-create mechanic service orders',
      'Lock faulty vehicles from inventory'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Active Servicing & Fleet Maintenance Logs</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Vehicle Model</th>
                <th className="pb-1">Maintenance Type</th>
                <th className="pb-1">Assigned Shop</th>
                <th className="pb-1 text-center">Cost</th>
                <th className="pb-1 text-right">Repair Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Mercedes-Benz G-Class</td>
                <td className="py-1">Transmission Fluid Flush</td>
                <td className="py-1">MB Beverly Hills Service</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$850</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Completed</span></td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Lamborghini Revuelto</td>
                <td className="py-1">Carbon Ceramic Brake Pads</td>
                <td className="py-1">Lamborghini LA Service</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$3,400</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">In Progress</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Chauffeur 16-Zone Handover Checksheet</div>
          <div className="grid grid-cols-3 gap-y-1 gap-x-4 text-[9px] text-zinc-400">
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Exterior Panels</div>
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Front Windshield</div>
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Tyre Tread Depth</div>
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Interior Leather</div>
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Dashboard Screens</div>
            <div className="flex items-center gap-1.5"><Check size={10} className="text-yellow-500" /> Fluid Levels</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '07',
    title: 'Billing, Deposits & Payments',
    subtitle: 'Manage security deposit pre-authorizations, invoices, and toll logs.',
    icon: <CreditCard className="w-6 h-6" />,
    description: 'Automate billing operations with transparent invoices and integrated payment gateways. Charge security deposit pre-authorizations, release holds automatically on clean returns, and track incidental charges.',
    features: [
      'Pre-authorize card security deposits',
      'Generate GST/VAT compliant invoices',
      'Auto-charge toll road fee adjustments',
      'Track fuel & cleaning fee penalties',
      'Split billing invoice sharing',
      'Process refunds & gateway cashouts'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Recent Transaction Ledger</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Transaction ID</th>
                <th className="pb-1">Billing Customer</th>
                <th className="pb-1">Paid Via</th>
                <th className="pb-1 text-center">Amount</th>
                <th className="pb-1 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 font-mono text-zinc-400">TRX-9921</td>
                <td className="py-1 text-white font-bold">Elena Rodriguez</td>
                <td className="py-1">Stripe Checkout</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$1,350</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-green-500/10 text-green-400">Cleared</span></td>
              </tr>
              <tr>
                <td className="py-1 font-mono text-zinc-400">TRX-9922</td>
                <td className="py-1 text-white font-bold">Michael Chen</td>
                <td className="py-1">Stripe Deposit Hold</td>
                <td className="py-1 text-center text-yellow-500 font-bold">$2,500</td>
                <td className="py-1 text-right"><span className="px-2 py-0.5 rounded text-[8px] font-bold bg-yellow-500/10 text-yellow-400">Held</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Security Deposit Holds</div>
            <table className="w-full text-left text-[9px] text-zinc-400">
              <tbody className="divide-y divide-white/5">
                <tr><td className="py-1 text-white font-bold">Exotic Sport</td><td className="py-1 text-right">$5,000 hold</td></tr>
                <tr><td className="py-1 text-white font-bold">Luxury SUV</td><td className="py-1 text-right">$2,500 hold</td></tr>
                <tr><td className="py-1 text-white font-bold">Convertible</td><td className="py-1 text-right">$1,500 hold</td></tr>
              </tbody>
            </table>
          </div>
          <div>
            <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Incidentals & Penalty Tariff</div>
            <ul className="text-[9px] text-zinc-400 space-y-1 pl-3 list-disc">
              <li><span className="text-zinc-500">Late Return:</span> $100.00 / hour</li>
              <li><span className="text-zinc-500">Refuelling:</span> Fuel cost + $50 fee</li>
              <li><span className="text-zinc-500">Excess Miles:</span> $2.50 / excess mile</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: '08',
    title: 'Fleet Revenue & Analytics',
    subtitle: 'View vehicle class utilization indexes, trip counts, and net profits.',
    icon: <BarChart3 className="w-6 h-6" />,
    description: 'Analyze business performance with consolidated analytics reports. Monitor asset utilization index trends, track trip logs per vehicle class, and review gross revenues alongside maintenance cost allocations.',
    features: [
      'Consolidated revenue analytics boards',
      'Monthly asset utilization indexes',
      'Exotic model cost-to-income comparisons',
      'Log total operational mileage driven',
      'Export ledger files for tax audits',
      'Track net profit margin metrics'
    ],
    mockup: (
      <div className="bg-[#121212] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block space-y-5">
        <div>
          <div className="text-[10px] font-bold text-yellow-500 mb-2 uppercase tracking-wider">Exotic Fleet Performance Ledger</div>
          <table className="w-full text-left text-[10px] text-zinc-300 border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-[8px] uppercase tracking-wider text-zinc-500">
                <th className="pb-1">Vehicle Model</th>
                <th className="pb-1">Class</th>
                <th className="pb-1 text-center">Trips</th>
                <th className="pb-1 text-center">Miles Driven</th>
                <th className="pb-1 text-center">Maint Cost</th>
                <th className="pb-1 text-right">Gross Earnings</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr>
                <td className="py-1 text-white font-bold">Lamborghini Revuelto</td>
                <td className="py-1 text-zinc-500 font-mono text-[9px]">Exotic</td>
                <td className="py-1 text-center font-bold text-yellow-500">22</td>
                <td className="py-1 text-center">2,450 mi</td>
                <td className="py-1 text-center text-red-500">$3,400</td>
                <td className="py-1 text-right text-white font-bold">$54,200</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Porsche 911 GT3 RS</td>
                <td className="py-1 text-zinc-500 font-mono text-[9px]">Sport</td>
                <td className="py-1 text-center font-bold text-yellow-500">18</td>
                <td className="py-1 text-center">1,890 mi</td>
                <td className="py-1 text-center text-red-500">$1,200</td>
                <td className="py-1 text-right text-white font-bold">$38,900</td>
              </tr>
              <tr>
                <td className="py-1 text-white font-bold">Mercedes-Benz G-Class</td>
                <td className="py-1 text-zinc-500 font-mono text-[9px]">SUV</td>
                <td className="py-1 text-center font-bold text-yellow-500">35</td>
                <td className="py-1 text-center">4,200 mi</td>
                <td className="py-1 text-center text-red-550">$850</td>
                <td className="py-1 text-right text-white font-bold">$45,200</td>
              </tr>
            </tbody>
          </table>
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
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3">
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
          <div className="flex-1 w-full max-w-[800px] bg-[#111] border border-yellow-500/30 shadow-[0_0_30px_rgba(234,179,8,0.03)] rounded-2xl p-8 shadow-2xl relative min-h-[600px] lg:sticky lg:top-24">
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
                  Choose the perfect fit for your car rental operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small local fleets</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 10 Vehicles',
                      '1 Operational Hub',
                      'Basic Booking Calendar',
                      'Customer Directory',
                      'Automated Lease Agreements',
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing agencies</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 50 Vehicles',
                      'Multiple Operational Hubs',
                      'Chauffeur & Staff Rosters',
                      '16-Zone Digital Inspections',
                      'Stripe Security Deposit Holds',
                      'WhatsApp & SMS Notifications',
                      'Active Servicing Logs',
                      'Priority Support'
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
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For large & airport fleets</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Unlimited Vehicles',
                      'Unlimited Hub Locations',
                      'Everything in Professional',
                      'Custom Brand Domains',
                      'Custom Agreement Templates',
                      'Automated Toll Calculations',
                      'Dedicated Account Manager',
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
