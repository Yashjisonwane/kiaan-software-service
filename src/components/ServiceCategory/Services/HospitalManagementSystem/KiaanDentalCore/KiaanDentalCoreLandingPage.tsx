"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, UserPlus, Calendar, Stethoscope, CreditCard, BarChart3, 
  ChevronRight, Rocket, ShoppingCart, ShieldCheck, Cloud, Clock, Headphones, X,
  User, Mail, Phone, Building, MapPin
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-white/5">
          <div className="w-6 h-6 bg-yellow-500 rounded flex items-center justify-center text-black font-bold text-xs">K</div>
          <div className="text-sm font-bold text-white">Clinic Setup</div>
        </div>
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <div>
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">Clinic Name</div>
              <div className="bg-[#222] border border-white/5 rounded px-4 py-2.5 text-xs text-white">Bright Smile Dental Clinic</div>
            </div>
            <div className="bg-[#222] border border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center mt-2">
               <div className="text-zinc-600 mb-2"><Building2 size={28} /></div>
               <div className="text-yellow-500 text-xs font-bold">Upload Logo</div>
               <div className="text-[9px] text-zinc-600 mt-1">JPG, PNG up to 2MB</div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div>
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">Clinic Branch</div>
              <div className="bg-[#222] border border-white/5 rounded px-4 py-2.5 text-xs text-white">Main Branch</div>
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">Language</div>
              <div className="bg-[#222] border border-white/5 rounded px-4 py-2.5 text-xs text-white">English</div>
            </div>
            <div className="pt-2">
               <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-wider font-bold">Clinic Type</div>
               <div className="flex gap-2">
                 <div className="bg-yellow-500 text-black text-[10px] px-4 py-2 rounded font-bold shadow-lg">Single Clinic</div>
                 <div className="bg-[#222] border border-white/5 text-zinc-400 text-[10px] px-4 py-2 rounded hover:bg-white/5 transition-colors cursor-pointer">Multi Branch</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
          <div className="text-sm font-bold text-white">Staff Management</div>
          <div className="bg-yellow-500 text-black px-4 py-1.5 text-[10px] font-bold rounded shadow-lg">+ Invite Staff</div>
        </div>
        <div className="grid grid-cols-5 gap-3 mb-5">
          {[
            {l: 'Total Staff', v: '32'}, 
            {l: 'Doctors', v: '8'}, 
            {l: 'Hygienists', v: '6'}, 
            {l: 'Receptionists', v: '7'}, 
            {l: 'Other Staff', v: '11'}
          ].map((t,i) => (
            <div key={i} className="bg-[#222] border border-white/5 p-3 rounded-lg text-center">
               <div className="text-[9px] text-zinc-500 mb-1">{t.l}</div>
               <div className="text-lg font-bold text-white">{t.v}</div>
            </div>
          ))}
        </div>
        <div className="w-full text-left text-[10px] text-zinc-400 bg-[#111] rounded-lg p-3 border border-white/5">
          <div className="grid grid-cols-4 pb-2 border-b border-white/10 mb-2 font-bold uppercase tracking-wider text-[8px] text-zinc-500">
            <div>Name</div><div>Role</div><div>Department</div><div>Status</div>
          </div>
          {[
            ['Dr. Ramesh Sharma', 'Dentist', 'Orthodontics', 'Active'], 
            ['Dr. Priya Patel', 'Dentist', 'Cosmetic', 'Active'], 
            ['Neha Singh', 'Hygienist', 'Dental Care', 'Active'],
            ['Amit Verma', 'Receptionist', 'Front Desk', 'Active']
          ].map((row,i) => (
            <div key={i} className="grid grid-cols-4 py-2 items-center hover:bg-white/5 rounded px-2 -mx-2 transition-colors">
              <div className="text-white font-medium flex items-center gap-2 text-xs">
                 <div className="w-5 h-5 rounded-full bg-zinc-700 flex items-center justify-center text-[8px]">{row[0].charAt(0)}</div>{row[0]}
              </div>
              <div className="text-zinc-300">{row[1]}</div>
              <div className="text-zinc-300">{row[2]}</div>
              <div><span className="text-green-500 bg-green-500/10 px-2 py-1 rounded text-[8px] font-bold tracking-wider">{row[3]}</span></div>
            </div>
          ))}
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:flex gap-5">
        <div className="flex-1">
          <div className="text-sm font-bold text-white mb-4">Patients Directory</div>
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-[#222] border border-white/5 p-3 rounded-lg col-span-2 flex items-center justify-between">
               <div>
                 <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-bold">Total Patients</div>
                 <div className="text-2xl font-bold text-white">1,248</div>
               </div>
               <div className="text-green-500 text-xs font-bold">+12%</div>
            </div>
            <div className="bg-[#222] border border-white/5 p-3 rounded-lg">
               <div className="text-[10px] text-zinc-500 uppercase tracking-wider mb-1 font-bold">New</div>
               <div className="text-xl font-bold text-white">48</div>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { n: 'Rahul Mehta', t: '98765 43210', d: '2 May 2024', s: 'Active' },
              { n: 'Sneha Kapoor', t: '87654 32109', d: '30 Apr 2024', s: 'Active' },
              { n: 'Vikram Joshi', t: '76543 21098', d: '28 Apr 2024', s: 'Inactive' }
            ].map((p, i) => (
              <div key={i} className="bg-[#222] p-2.5 rounded-lg text-[10px] flex justify-between items-center border border-white/5 hover:border-yellow-500/30 transition-colors">
                 <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center text-white font-bold">{p.n.charAt(0)}</div>
                   <div><div className="text-white font-bold text-xs">{p.n}</div><div className="text-zinc-500 text-[8px]">{p.t}</div></div>
                 </div>
                 <div className="text-right">
                   <div className={`font-bold ${p.s === 'Active' ? 'text-green-500' : 'text-zinc-500'}`}>{p.s}</div>
                   <div className="text-zinc-600 text-[8px]">{p.d}</div>
                 </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-48 bg-[#222] border border-white/5 p-4 rounded-xl flex flex-col justify-between">
          <div>
            <div className="text-[11px] font-bold text-white mb-4 pb-2 border-b border-white/10">Quick Registration</div>
            <div className="space-y-3">
              <div>
                <div className="text-[8px] text-zinc-500 mb-1">Full Name</div>
                <div className="h-7 bg-[#111] rounded border border-white/5"></div>
              </div>
              <div>
                <div className="text-[8px] text-zinc-500 mb-1">Phone Number</div>
                <div className="h-7 bg-[#111] rounded border border-white/5"></div>
              </div>
              <div>
                <div className="text-[8px] text-zinc-500 mb-1">Gender</div>
                <div className="flex gap-2">
                  <div className="flex-1 h-6 bg-yellow-500/20 border border-yellow-500/50 rounded text-yellow-500 flex items-center justify-center text-[8px] font-bold">M</div>
                  <div className="flex-1 h-6 bg-[#111] border border-white/5 rounded text-zinc-500 flex items-center justify-center text-[8px]">F</div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-8 bg-yellow-500 rounded text-black flex items-center justify-center text-[10px] font-bold shadow-lg mt-6">Save Patient</div>
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
          <div className="text-sm font-bold text-white flex items-center gap-3">
            Appointments
            <span className="text-xs font-normal text-zinc-500 bg-[#222] px-2 py-1 rounded">May 2024</span>
          </div>
          <div className="flex bg-[#222] rounded overflow-hidden text-[10px] border border-white/5">
             <div className="px-3 py-1.5 bg-yellow-500 text-black font-bold">Day</div>
             <div className="px-3 py-1.5 text-zinc-400">Week</div>
             <div className="px-3 py-1.5 text-zinc-400">Month</div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-[#222] border border-white/5 rounded-lg p-1 grid grid-cols-4 gap-1 relative h-40">
             {/* Header */}
             <div className="text-[8px] text-zinc-500 text-center py-1">Mon</div>
             <div className="text-[8px] text-zinc-500 text-center py-1 bg-white/5 rounded">Tue (Today)</div>
             <div className="text-[8px] text-zinc-500 text-center py-1">Wed</div>
             <div className="text-[8px] text-zinc-500 text-center py-1">Thu</div>
             
             {/* Calendar blocks */}
             <div className="col-start-1 row-start-2 w-[90%] h-12 bg-blue-500/20 border border-blue-500/50 rounded-md text-[8px] text-blue-200 p-1.5 mx-auto mt-2">
               <div className="font-bold text-[9px] mb-0.5">Rahul Mehta</div>
               <div className="opacity-70">Root Canal • 09:30 AM</div>
             </div>
             <div className="col-start-2 row-start-2 w-[90%] h-16 bg-green-500/20 border border-green-500/50 rounded-md text-[8px] text-green-200 p-1.5 mx-auto mt-8">
               <div className="font-bold text-[9px] mb-0.5">Sneha Kapoor</div>
               <div className="opacity-70">Teeth Cleaning • 10:30 AM</div>
             </div>
             <div className="col-start-3 row-start-2 w-[90%] h-10 bg-purple-500/20 border border-purple-500/50 rounded-md text-[8px] text-purple-200 p-1.5 mx-auto mt-4">
               <div className="font-bold text-[9px] mb-0.5">Amit Verma</div>
               <div className="opacity-70">Consultation • 11:00 AM</div>
             </div>
          </div>
          <div className="w-40 bg-[#222] border border-white/5 p-3 rounded-lg flex flex-col">
             <div className="text-[10px] font-bold text-white mb-3 uppercase tracking-wider text-yellow-500">Today's Queue</div>
             <div className="space-y-3 flex-1">
               <div className="text-[9px] text-zinc-300 border-l-2 border-yellow-500 pl-2 bg-[#111] p-1.5 rounded-r">1. Rahul Mehta<br/><span className="text-zinc-500 text-[8px]">09:30 AM - Dr. Sharma</span></div>
               <div className="text-[9px] text-zinc-300 border-l-2 border-green-500 pl-2 bg-[#111] p-1.5 rounded-r">2. Sneha Kapoor<br/><span className="text-zinc-500 text-[8px]">10:30 AM - Dr. Patel</span></div>
             </div>
             <button className="w-full mt-3 bg-yellow-500/10 text-yellow-500 py-1.5 rounded text-[10px] font-bold border border-yellow-500/20">+ New Appt</button>
          </div>
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex justify-between items-end border-b border-white/10 pb-3 mb-5">
           <div>
             <div className="text-[10px] text-zinc-500 mb-1">Patient File</div>
             <div className="text-lg font-display font-bold text-white">Rahul Mehta <span className="text-xs font-normal bg-[#222] px-2 py-0.5 rounded text-zinc-400">P-1001</span></div>
           </div>
           <div className="text-[11px] flex gap-4 text-zinc-400 font-bold">
             <span className="cursor-pointer hover:text-white">Overview</span>
             <span className="text-yellow-500 border-b-2 border-yellow-500 pb-3 -mb-[13px]">Treatment Plan</span>
             <span className="cursor-pointer hover:text-white">Notes</span>
           </div>
        </div>
        <div className="flex gap-5">
          <div className="w-48 space-y-3">
            <div className="text-[10px] font-bold text-white uppercase tracking-wider mb-2">Active Plans</div>
            <div className="bg-[#222] p-3 rounded-lg border-l-2 border-green-500 hover:bg-[#2a2a2a] transition-colors cursor-pointer">
               <div className="text-[11px] font-bold text-white mb-1">Root Canal Treatment</div>
               <div className="text-[9px] text-zinc-500 flex justify-between"><span>11 May 2024</span><span className="text-green-500 font-bold">Completed</span></div>
            </div>
            <div className="bg-[#222] p-3 rounded-lg border-l-2 border-yellow-500 hover:bg-[#2a2a2a] transition-colors cursor-pointer relative overflow-hidden">
               <div className="absolute top-0 right-0 w-8 h-8 bg-yellow-500/10 rounded-bl-full"></div>
               <div className="text-[11px] font-bold text-white mb-1">Dental Crown</div>
               <div className="text-[9px] text-zinc-500 flex justify-between"><span>18 May 2024</span><span className="text-yellow-500 font-bold">In Progress</span></div>
            </div>
          </div>
          <div className="flex-1 bg-[#222] rounded-xl flex flex-col items-center justify-center py-6 relative border border-white/5">
             <div className="absolute top-3 left-3 flex gap-2">
                <div className="flex items-center gap-1 text-[8px] text-zinc-400"><div className="w-2 h-2 rounded-full bg-white/20"></div> Healthy</div>
                <div className="flex items-center gap-1 text-[8px] text-zinc-400"><div className="w-2 h-2 rounded-full bg-yellow-500"></div> Treated</div>
                <div className="flex items-center gap-1 text-[8px] text-zinc-400"><div className="w-2 h-2 rounded-full bg-red-500"></div> Cavity</div>
             </div>
             
             <div className="text-[9px] text-zinc-500 mb-3 font-bold uppercase tracking-widest mt-4">Upper Jaw</div>
             <div className="flex gap-1.5 mb-6">
               {[...Array(14)].map((_, i) => <div key={i} className={`w-3.5 h-6 rounded-b-md shadow-sm ${i === 4 ? 'bg-yellow-500' : i === 5 ? 'bg-yellow-500' : 'bg-white/10'}`}></div>)}
             </div>
             
             <div className="flex gap-1.5">
               {[...Array(14)].map((_, i) => <div key={i} className={`w-3.5 h-6 rounded-t-md shadow-sm ${i === 9 ? 'bg-red-500' : 'bg-white/10'}`}></div>)}
             </div>
             <div className="text-[9px] text-zinc-500 mt-3 font-bold uppercase tracking-widest">Lower Jaw</div>
          </div>
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
          <div className="text-sm font-bold text-white">Billing Dashboard</div>
          <div className="bg-yellow-500 text-black px-4 py-1.5 text-[10px] font-bold rounded shadow-lg">+ New Invoice</div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            {l: 'Today\'s Collection', v: '$2,450', c: 'text-white'}, 
            {l: 'This Month Revenue', v: '$48,240', c: 'text-white'}, 
            {l: 'Pending Payments', v: '$6,120', c: 'text-yellow-500'}, 
            {l: 'Overdue Amount', v: '$2,340', c: 'text-red-500'}
          ].map((t,i) => (
            <div key={i} className="bg-[#222] border border-white/5 p-3 rounded-lg relative overflow-hidden">
               <div className="text-[9px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">{t.l}</div>
               <div className={`text-lg font-bold ${t.c}`}>{t.v}</div>
            </div>
          ))}
        </div>
        <div className="flex gap-5">
          <div className="flex-1 bg-[#222] border border-white/5 rounded-lg p-3">
            <div className="text-[10px] font-bold text-white mb-3 uppercase tracking-wider">Recent Invoices</div>
            <div className="space-y-1.5">
              {[
                { id: 'INV-1001', n: 'Rahul Mehta', d: '06 May 2024', a: '$450', s: 'Paid', sc: 'text-green-500' },
                { id: 'INV-1002', n: 'Sneha Kapoor', d: '06 May 2024', a: '$320', s: 'Paid', sc: 'text-green-500' },
                { id: 'INV-1003', n: 'Vikram Joshi', d: '05 May 2024', a: '$780', s: 'Pending', sc: 'text-yellow-500' }
              ].map((inv, i) => (
                <div key={i} className="flex justify-between bg-[#181818] p-2 rounded text-[10px] border border-white/5 items-center hover:bg-[#111] transition-colors">
                  <span className="text-zinc-500 font-mono w-16">{inv.id}</span>
                  <span className="text-white w-24 font-bold">{inv.n}</span>
                  <span className="text-zinc-500 w-20">{inv.d}</span>
                  <span className="text-white w-12 text-right">{inv.a}</span>
                  <span className={`${inv.sc} w-16 text-right font-bold`}>{inv.s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-48 bg-[#222] border border-white/5 p-3 rounded-lg flex flex-col">
             <div className="text-[10px] font-bold text-white mb-4 uppercase tracking-wider">Payment Methods</div>
             <div className="flex-1 flex items-center justify-center relative">
               <div className="w-24 h-24 rounded-full border-[8px] border-yellow-500 border-r-green-500 border-b-blue-500"></div>
               <div className="absolute inset-0 flex items-center justify-center flex-col">
                  <div className="text-[8px] text-zinc-500">Total</div>
                  <div className="text-xs font-bold text-white">$2,775</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    )
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
    mockup: (
      <div className="bg-[#181818] border border-white/5 rounded-xl p-5 mb-8 shadow-inner hidden md:block">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-white/5">
          <div className="text-sm font-bold text-white">Analytics Dashboard</div>
          <div className="text-xs text-zinc-500 bg-[#222] px-3 py-1.5 rounded">1 May 2024 - 31 May 2024</div>
        </div>
        <div className="grid grid-cols-4 gap-3 mb-5">
          {[
            { l: 'Total Revenue', v: '$48,240', c: '+18%' },
            { l: 'Total Appointments', v: '1,284', c: '+8%' },
            { l: 'New Patients', v: '248', c: '+12%' },
            { l: 'Patient Retention', v: '94%', c: '+2%' }
          ].map((m, i) => (
            <div key={i} className="bg-[#222] p-3 rounded-lg border border-white/5">
              <div className="text-[9px] text-zinc-500 mb-1 uppercase tracking-wider font-bold">{m.l}</div>
              <div className="flex items-end justify-between">
                <div className="text-xl font-bold text-white">{m.v}</div>
                <div className="text-[10px] text-green-500 font-bold mb-1">{m.c}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex-1 bg-[#222] p-4 rounded-lg border border-white/5 h-36 relative flex flex-col">
            <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-wider font-bold">Revenue Overview</div>
            <div className="flex-1 relative mt-2">
              <svg className="w-full h-full absolute bottom-0 left-0" preserveAspectRatio="none">
                <path d="M0,80 Q20,60 40,70 T80,50 T120,65 T160,30 T200,45 T240,15 T280,35 T320,5 L320,90 L0,90 Z" fill="rgba(234,179,8,0.1)" stroke="rgba(234,179,8,1)" strokeWidth="3" />
              </svg>
            </div>
            <div className="flex justify-between text-[8px] text-zinc-600 mt-2">
              <span>1 May</span><span>8 May</span><span>15 May</span><span>22 May</span><span>31 May</span>
            </div>
          </div>
          <div className="w-48 bg-[#222] p-4 rounded-lg border border-white/5 h-36 flex flex-col">
             <div className="text-[10px] text-zinc-500 mb-2 uppercase tracking-wider font-bold">Appts by Status</div>
             <div className="flex-1 flex items-center justify-between">
               <div className="w-16 h-16 rounded-full border-4 border-green-500 border-l-yellow-500 border-t-zinc-600 relative">
                 <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-white">1,284</div>
               </div>
               <div className="space-y-1">
                 <div className="flex items-center gap-1.5 text-[8px] text-zinc-400"><div className="w-2 h-2 bg-green-500 rounded-sm"></div> Completed</div>
                 <div className="flex items-center gap-1.5 text-[8px] text-zinc-400"><div className="w-2 h-2 bg-yellow-500 rounded-sm"></div> Pending</div>
                 <div className="flex items-center gap-1.5 text-[8px] text-zinc-400"><div className="w-2 h-2 bg-zinc-600 rounded-sm"></div> No Show</div>
               </div>
             </div>
          </div>
        </div>
      </div>
    )
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
                  className={`cursor-pointer rounded-xl border transition-all duration-300 flex items-center p-4 group ${
                    isActive 
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
                  <input required type="text" placeholder="Clinic Name" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                </div>
                <div className="flex gap-4">
                  <div className="relative group w-1/2">
                    <Stethoscope size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                    <input required type="number" placeholder="Doctors" className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
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
                  <p className="text-zinc-400 text-sm mb-6">Select the relevant Hospital Management product:</p>
                  <div className="space-y-3">
                    {['Kiaan Hospital Management', 'Kiaan Dental Core', 'Kiaan Clinic'].map((prod, i) => (
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
                      { name: 'Starter', price: '$49', period: '/mo', desc: 'For small clinics & independent dentists' },
                      { name: 'Professional', price: '$129', period: '/mo', desc: 'For growing practices & multiple doctors' },
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
                    <input required type="text" placeholder="Company / Clinic Name" className="w-full bg-[#181818] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all" />
                    
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