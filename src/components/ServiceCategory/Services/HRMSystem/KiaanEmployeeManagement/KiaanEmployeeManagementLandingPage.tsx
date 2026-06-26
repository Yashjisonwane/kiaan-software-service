"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Users, UserPlus, Calendar, CreditCard, BarChart3, ChevronRight, X, Check,
  ShieldCheck, Cloud, Clock, Headphones, User, Mail, Phone, Rocket, ShoppingCart, 
  ArrowRight, Crown, Lock, ChevronDown, CheckCircle2, Star, Send, Building, MapPin, 
  Briefcase, Zap, Globe, Shield, Target, PlusCircle, LayoutDashboard, HeartHandshake, FileCheck
} from 'lucide-react';

// Custom CSS-based dashboard mockups for the workflow panels
const CompanySetupMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <div className="flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/85"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/85"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/85"></div>
      </div>
      <span className="text-[9px] text-zinc-500 font-mono">workspace_profile_v1.0</span>
    </div>
    <div className="space-y-4">
      <div className="flex items-center justify-between bg-zinc-900 border border-white/5 p-3 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-500 font-bold font-display text-sm">K</div>
          <div>
            <h4 className="text-xs font-bold text-white">Kiaan Tech Solutions</h4>
            <p className="text-[8px] text-zinc-500">Owner ID: #KTS-2026</p>
          </div>
        </div>
        <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400">ACTIVE</span>
      </div>
      
      <div className="grid grid-cols-2 gap-3 text-[9px]">
        <div className="bg-zinc-900 border border-white/5 p-2.5 rounded-xl space-y-0.5">
          <span className="text-zinc-500">Localization</span>
          <p className="text-white font-bold">Indore (IST / GMT +5:30)</p>
        </div>
        <div className="bg-zinc-900 border border-white/5 p-2.5 rounded-xl space-y-0.5">
          <span className="text-zinc-500">Work Week</span>
          <p className="text-white font-bold">Mon - Fri (9 AM - 6 PM)</p>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/5 p-2.5 rounded-xl space-y-2">
        <div className="flex justify-between text-[8px]">
          <span className="text-zinc-400 font-bold">Organization Setup Progress</span>
          <span className="text-yellow-500 font-bold">100% Complete</span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
          <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
    </div>
  </div>
);

const DepartmentsMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Business Hierarchy Structure</h4>
      <span className="text-[9px] text-zinc-500">4 Active Units</span>
    </div>
    <div className="space-y-2">
      {[
        { name: 'Engineering & Tech', lead: 'Sarah Jenkins', headcount: '240 Staff', bg: 'border-yellow-500/20 bg-yellow-500/5' },
        { name: 'Sales & Growth', lead: 'Elena Rostova', headcount: '120 Staff', bg: 'border-white/5 bg-zinc-900' },
        { name: 'Human Resources', lead: 'Marcus Vance', headcount: '15 Staff', bg: 'border-white/5 bg-zinc-900' },
        { name: 'Finance & Accounts', lead: 'Robert Lee', headcount: '10 Staff', bg: 'border-white/5 bg-zinc-900' },
      ].map((dept, idx) => (
        <div key={idx} className={`border rounded-xl p-2.5 flex justify-between items-center transition-all ${dept.bg}`}>
          <div>
            <h5 className="text-[11px] font-bold text-white">{dept.name}</h5>
            <p className="text-[8px] text-zinc-400">Department Head: {dept.lead}</p>
          </div>
          <span className="text-[8px] font-bold px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/5">{dept.headcount}</span>
        </div>
      ))}
    </div>
  </div>
);

const EmployeesMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Staff Records Database</h4>
      <span className="text-[9px] text-zinc-500">385 Active Members</span>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
      {[
        { name: 'Jane Doe', role: 'Sr. Frontend Engineer', status: 'ACTIVE', color: 'bg-green-500/10 text-green-400 border-green-500/20', email: 'jane.doe@kiaan.com' },
        { name: 'John Smith', role: 'Product Lead', status: 'ON LEAVE', color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', email: 'john.smith@kiaan.com' },
        { name: 'Alice Johnson', role: 'HR Associate', status: 'ACTIVE', color: 'bg-green-500/10 text-green-400 border-green-500/20', email: 'alice.j@kiaan.com' },
        { name: 'David Miller', role: 'DevOps Manager', status: 'ACTIVE', color: 'bg-green-500/10 text-green-400 border-green-500/20', email: 'd.miller@kiaan.com' }
      ].map((emp, idx) => (
        <div key={idx} className="bg-zinc-900 border border-white/5 rounded-xl p-2.5 space-y-1.5">
          <div className="flex justify-between items-start">
            <div>
              <h5 className="text-[11px] font-bold text-white">{emp.name}</h5>
              <p className="text-[8px] text-zinc-500 leading-none">{emp.role}</p>
            </div>
            <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-full border leading-none ${emp.color}`}>{emp.status}</span>
          </div>
          <p className="text-[8px] text-zinc-400 font-mono leading-none">{emp.email}</p>
        </div>
      ))}
    </div>
  </div>
);

const AttendanceMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Live Presence Logs</h4>
      <span className="text-[9px] text-zinc-500">Today, Jun 26, 2026</span>
    </div>
    <div className="grid grid-cols-3 gap-2 mb-4">
      <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl text-center">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block mb-0.5">Present</span>
        <p className="text-xs font-bold text-green-400">98.4%</p>
      </div>
      <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl text-center">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block mb-0.5">On Time</span>
        <p className="text-xs font-bold text-yellow-500">97.2%</p>
      </div>
      <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl text-center">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block mb-0.5">Late</span>
        <p className="text-xs font-bold text-red-400">1.2%</p>
      </div>
    </div>
    <div className="space-y-1 text-[8px]">
      <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/5 flex justify-between">
        <span className="text-white font-medium">Sophia Martinez</span>
        <span className="text-zinc-500">Check-in: 08:52 AM</span>
        <span className="text-green-400 font-bold">ON TIME</span>
      </div>
      <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/5 flex justify-between">
        <span className="text-white font-medium">Liam Neeson</span>
        <span className="text-zinc-500">Check-in: 08:55 AM</span>
        <span className="text-green-400 font-bold">ON TIME</span>
      </div>
      <div className="bg-zinc-900/60 p-2 rounded-lg border border-white/5 flex justify-between">
        <span className="text-white font-medium">James Watson</span>
        <span className="text-zinc-500">Check-in: 09:12 AM</span>
        <span className="text-red-400 font-bold">LATE (12M)</span>
      </div>
    </div>
  </div>
);

const LeaveMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Leave Approvals Panel</h4>
      <span className="text-[9px] text-zinc-500">Review Queue (1)</span>
    </div>
    <div className="space-y-2.5">
      <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 space-y-2 text-[9px]">
        <div className="flex justify-between items-start">
          <div>
            <h5 className="font-bold text-white text-[10px]">David Miller</h5>
            <p className="text-zinc-500">Annual Leave • 3 Days (Jun 28 - Jun 30)</p>
          </div>
          <span className="text-zinc-400 font-mono">Balance: 12d</span>
        </div>
        <p className="text-zinc-400 italic">"Annual family trip. Project handover is completed with Sarah."</p>
        <div className="flex gap-2">
          <button className="bg-yellow-500 text-black px-2.5 py-1 font-bold rounded hover:bg-yellow-400 transition-colors">APPROVE</button>
          <button className="bg-white/5 border border-white/10 text-zinc-300 px-2.5 py-1 font-bold rounded hover:bg-white/10 transition-colors">REJECT</button>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-xl p-3 flex justify-between items-center text-[9px] opacity-60">
        <div>
          <h5 className="font-bold text-white text-[10px]">Sophia Martinez</h5>
          <p className="text-zinc-500">Casual Leave • 1 Day (Jun 25)</p>
        </div>
        <span className="text-green-400 font-bold bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded text-[8px]">APPROVED</span>
      </div>
    </div>
  </div>
);

const PayrollMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Payroll Processing Engine</h4>
      <span className="text-[8px] font-bold px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-green-400">JUNE READY</span>
    </div>
    
    <div className="flex justify-between items-center bg-zinc-900 border border-white/5 p-3 rounded-xl mb-3">
      <div>
        <span className="text-[7px] text-zinc-500 uppercase leading-none block">Gross Payout</span>
        <p className="text-sm font-bold text-white">$248,500.00</p>
      </div>
      <div className="text-right">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block">Total Statutory Deductions</span>
        <p className="text-xs font-bold text-zinc-400">$34,200.00</p>
      </div>
    </div>

    <div className="space-y-1 font-mono text-[7px] text-zinc-400">
      <div className="flex justify-between border-b border-white/5 pb-0.5 text-zinc-500">
        <span>Employee</span>
        <span>Base Salary</span>
        <span>Deductions</span>
        <span>Net Payout</span>
      </div>
      <div className="flex justify-between text-white">
        <span>Jane Doe</span>
        <span>$8,500.00</span>
        <span>$420.00</span>
        <span className="text-yellow-500 font-bold">$8,080.00</span>
      </div>
      <div className="flex justify-between text-white">
        <span>John Smith</span>
        <span>$7,200.00</span>
        <span>$950.00</span>
        <span className="text-yellow-500 font-bold">$6,250.00</span>
      </div>
      <div className="flex justify-between text-white">
        <span>Alice Johnson</span>
        <span>$4,500.00</span>
        <span>$210.00</span>
        <span className="text-yellow-500 font-bold">$4,290.00</span>
      </div>
    </div>
  </div>
);

const PerformanceMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">KRA & KPI Tracker Dashboard</h4>
      <span className="text-[9px] text-zinc-500">Q2 Appraisals</span>
    </div>
    
    <div className="space-y-2.5 text-[9px]">
      <div className="bg-zinc-900 border border-white/5 rounded-xl p-2.5 space-y-1.5">
        <div className="flex justify-between font-bold text-white">
          <span>Alex Carter (Sales Lead)</span>
          <span className="text-yellow-500">4.8 / 5.0 Rating</span>
        </div>
        <div className="space-y-0.5">
          <div className="flex justify-between text-[7px] text-zinc-500">
            <span>Sales Quota KPI</span>
            <span>96% Achieved</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
            <div className="bg-green-500 h-1" style={{ width: '96%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-900 border border-white/5 rounded-xl p-2.5 space-y-1.5">
        <div className="flex justify-between font-bold text-white">
          <span>Emma Watson (Product Marketing)</span>
          <span className="text-yellow-500">4.5 / 5.0 Rating</span>
        </div>
        <div className="space-y-0.5">
          <div className="flex justify-between text-[7px] text-zinc-500">
            <span>Campaign Metrics KPI</span>
            <span>90% Achieved</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-1 overflow-hidden">
            <div className="bg-green-500 h-1" style={{ width: '90%' }}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ReportsMockup = () => (
  <div className="bg-[#141414] border border-white/5 rounded-2xl p-5 mb-6 shadow-inner w-full text-left font-sans">
    <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/5">
      <h4 className="text-[10px] font-bold uppercase tracking-wider text-yellow-500">Workforce Analytics Reports</h4>
      <span className="text-[9px] text-zinc-500">Real-Time Data</span>
    </div>
    
    <div className="grid grid-cols-2 gap-2.5 mb-3">
      <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block mb-0.5">Employee Attrition</span>
        <p className="text-sm font-bold text-white">4.2%</p>
        <span className="text-[7px] text-green-400 font-bold block">↓ 1.5% from last year</span>
      </div>
      <div className="bg-zinc-900 border border-white/5 p-2 rounded-xl">
        <span className="text-[7px] text-zinc-500 uppercase leading-none block mb-0.5">Staff NPS Score</span>
        <p className="text-sm font-bold text-white">92 / 100</p>
        <span className="text-[7px] text-yellow-500 font-bold block">★ Optimal satisfaction</span>
      </div>
    </div>

    <div className="bg-zinc-900 border border-white/5 p-2.5 rounded-xl">
      <h5 className="text-[8px] font-bold text-zinc-400 uppercase mb-1.5">Staff Count & Hiring Growth (2026)</h5>
      <div className="flex justify-between items-end h-14 pt-2 font-mono text-[6px] text-zinc-600">
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-zinc-800 h-4 rounded-t"></div>
          <span>Jan</span>
        </div>
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-zinc-800 h-6 rounded-t"></div>
          <span>Feb</span>
        </div>
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-yellow-500/20 h-8 rounded-t border-t border-yellow-500"></div>
          <span>Mar</span>
        </div>
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-yellow-500/30 h-10 rounded-t border-t border-yellow-500"></div>
          <span>Apr</span>
        </div>
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-yellow-500/40 h-11 rounded-t border-t border-yellow-500"></div>
          <span>May</span>
        </div>
        <div className="flex flex-col items-center gap-1 w-[12%]">
          <div className="w-full bg-yellow-500 h-13 rounded-t"></div>
          <span>Jun</span>
        </div>
      </div>
    </div>
  </div>
);

const WORKFLOW_ITEMS = [
  {
    id: '01',
    title: 'Company Setup',
    subtitle: 'Setup company profile settings, hours and branding.',
    icon: <Building2 className="w-6 h-6 text-yellow-500" />,
    description: 'Establish the core digital identity of your company within the workspace. Set up your company logo, official addresses, localized tax registrations, operating days, and general calendars. This forms the central foundation under which all departments, offices, managers, and employee schedules operate.',
    features: [
      'Configure organization details',
      'Upload logos & official branding',
      'Establish operating working hours',
      'Manage multiple office locations',
      'Setup tax codes & currencies',
      'Secure centralized company logs'
    ],
    mockup: <CompanySetupMockup />,
    sections: [
      {
        heading: 'Central Workspace Creation',
        content: 'Configure standard branding templates, localized currencies, and corporate tax identifiers to ensure all generated letters, payslips, and files remain legally compliant.'
      },
      {
        heading: 'Flexible Operations Calendar',
        content: 'Define standard business hours, custom work weeks, holidays, and regional calendars to set foundational constraints for tracking employee attendance.'
      }
    ]
  },
  {
    id: '02',
    title: 'Add Departments',
    subtitle: 'Structure your organization hierarchy.',
    icon: <Building className="w-6 h-6 text-yellow-500" />,
    description: 'Systematically map your organization by establishing logical departments, teams, and reporting workflows. Assign coordinators and managers to individual units to streamline task delegation and leave approvals.',
    features: [
      'Map full department hierarchy',
      'Assign custom department leads',
      'Configure team access rules',
      'Define direct reporting trees',
      'Track inter-department structures',
      'Allocate departmental goals'
    ],
    mockup: <DepartmentsMockup />,
    sections: [
      {
        heading: 'Clear Reporting Lines',
        content: 'Establish clear internal hierarchy by structuring departments like Engineering, Sales, and HR. Designate heads of department to decentralize administrative approvals.'
      },
      {
        heading: 'Cross-Unit Collaboration',
        content: 'Define granular permissions letting team leads manage shift rotations, approve leaves, and access performance scorecards for their direct reports.'
      }
    ]
  },
  {
    id: '03',
    title: 'Add Employees',
    subtitle: 'Register employee profiles and credentials.',
    icon: <Users className="w-6 h-6 text-yellow-500" />,
    description: 'Onboard personnel digitally into the system. Create comprehensive employee profiles containing contact information, bank details, contracts, emergency contacts, and job parameters. Automatically generate system credentials and enable portal access.',
    features: [
      'Comprehensive digital profiles',
      'Upload contract files & documents',
      'Role-based system access levels',
      'Automated login configurations',
      'Bank details & tax files directory',
      'Self-service portal deployment'
    ],
    mockup: <EmployeesMockup />,
    sections: [
      {
        heading: 'Unified Personnel Repository',
        content: 'Transition from paper archives to a secure cloud-native directory. Easily search and access demographic files, contracts, certifications, and payroll parameters.'
      },
      {
        heading: 'Role-Based Access Control',
        content: 'Define custom access roles ensuring managers, HR staff, and general workers only view dashboards and operations permitted by your data security guidelines.'
      }
    ]
  },
  {
    id: '04',
    title: 'Attendance Management',
    subtitle: 'Sync biometric logs and track shifts.',
    icon: <Clock className="w-6 h-6 text-yellow-500" />,
    description: 'Track employee attendance in real time. Sync physical biometric logs directly to the cloud platform, and enable geo-fenced mobile check-ins for field agents and remote teams to log hours within client boundaries.',
    features: [
      'Biometric device API integration',
      'Geo-fenced GPS check-in logs',
      'Assign rotating shift planners',
      'Track real-time checkout times',
      'Automated late check-in penalties',
      'Calculate overtime configurations'
    ],
    mockup: <AttendanceMockup />,
    sections: [
      {
        heading: 'Biometric API & Geo-Fencing',
        content: 'Integrate physical biometric scanners via secure API endpoints. Protect your company from time theft with mobile check-ins restricted to GPS boundaries.'
      },
      {
        heading: 'Rostering & Shift Overtime',
        content: 'Manage complex shift schedules and track overtime logs automatically. Late logs and early clock-outs sync instantly to calculate accurate payroll deductions.'
      }
    ]
  },
  {
    id: '05',
    title: 'Leave Management',
    subtitle: 'Submit, review and approve requests.',
    icon: <Calendar className="w-6 h-6 text-yellow-500" />,
    description: 'Simplify leave tracking. Employees submit requests digitally via their self-service portal, managers review requests on a consolidated calendar, and balances update automatically upon approval.',
    features: [
      'Digital leave applications',
      'Real-time manager approval grids',
      'Automated leave balance updates',
      'Custom leave policy parameters',
      'Central company holiday sync',
      'Detailed leave history tracker'
    ],
    mockup: <LeaveMockup />,
    sections: [
      {
        heading: 'Streamlined Approval Pipelines',
        content: 'Replace offline email lists. Leave requests dispatch instant notifications to supervisors, allowing them to review team availability and approve in one click.'
      },
      {
        heading: 'Custom Accrual Policy Rules',
        content: 'Formulate leaves profiles (sick leaves, annual leaves, casual leaves) with specific monthly credit rules, rollover limits, and encashment parameters.'
      }
    ]
  },
  {
    id: '06',
    title: 'Payroll Processing',
    subtitle: 'Automate salary payouts and compliance.',
    icon: <CreditCard className="w-6 h-6 text-yellow-500" />,
    description: 'Process monthly payroll automatically by compiling attendance metrics, approved leaves, performance bonuses, and deduction schedules. Generate payslips and statutory compliance worksheets instantly.',
    features: [
      'Automate gross-to-net payout formulas',
      'Automate tax & compliance math',
      'Generate secure PDF paystubs',
      'Track custom bonuses & allowances',
      'Export direct bank payout sheets',
      'Integrated payroll history vaults'
    ],
    mockup: <PayrollMockup />,
    sections: [
      {
        heading: 'Automated Salary Calculations',
        content: 'Gather logs from the attendance and leave systems. Payout calculations dynamically deduct unpaid leaves and credit overtime metrics without spreadsheet work.'
      },
      {
        heading: 'Legal Compliance Audit Prep',
        content: 'Configure regional taxes, professional tax codes, ESI deductions, and provident fund allocations to generate tax compliance papers instantly.'
      }
    ]
  },
  {
    id: '07',
    title: 'Performance Evaluation',
    subtitle: 'Align goals, KRAs, and appraisals.',
    icon: <Target className="w-6 h-6 text-yellow-500" />,
    description: 'Track employee progression objectively. Establish Key Result Areas (KRAs) and track Key Performance Indicators (KPIs) continuously. Conduct peer reviews and appraisals systematically.',
    features: [
      'Configure custom KRA & KPI metrics',
      'Align employee goals with business',
      'Continuous review timeline setups',
      'Collect 360-degree feedback reviews',
      'Track appraisal scoring parameters',
      'Automated performance bonuses'
    ],
    mockup: <PerformanceMockup />,
    sections: [
      {
        heading: 'Clear Goals & Appraisals',
        content: 'Establish clear scorecards for evaluation. Align individual tasks with business goals to build transparent progression loops.'
      },
      {
        heading: '360-Degree Feedback loops',
        content: 'Incorporate manager ratings, self-assessments, peer-to-peer feedback, and subordinate reviews to create a balanced appraisal framework.'
      }
    ]
  },
  {
    id: '08',
    title: 'Reports & Analytics',
    subtitle: 'Access attrition, cost, and headcount statistics.',
    icon: <BarChart3 className="w-6 h-6 text-yellow-500" />,
    description: 'Gain comprehensive visibility into your workforce operations. Monitor headcount trends, attrition levels, departmental performance ratings, payroll expenses, and audit logs using visual analytical charts.',
    features: [
      'Live headcount trend charts',
      'Attrition rate monitoring stats',
      'Department performance metrics',
      'Track organizational cost structures',
      'Export PDF/Excel analytical files',
      'Secure activity log reporting'
    ],
    mockup: <ReportsMockup />,
    sections: [
      {
        heading: 'Strategic HR Analytics',
        content: 'Translate personnel metrics into actionable insights. Analyze workforce costs, recruiting budget metrics, and attrition trends to plan growth plans.'
      },
      {
        heading: 'Compliance & Audit Reporting',
        content: 'Export reports matching tax codes, attendance compliance criteria, and labor regulation records to streamline annual external audits.'
      }
    ]
  }
];



export const KiaanEmployeeManagementLandingPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState(WORKFLOW_ITEMS[0]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  // Buy Now Modals Flow State
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customerForm, setCustomerForm] = useState({ fullName: '', email: '', whatsapp: '' });

  const isCustomerFormValid = customerForm.fullName.trim() !== '' &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerForm.email) &&
    /^[0-9]{10,}$/.test(customerForm.whatsapp);

  const handleContinueToPayment = () => {
    if (isCustomerFormValid && selectedPlan) {
      console.log("Redirecting to Razorpay with details:", { ...customerForm, plan: selectedPlan });
      window.location.href = `https://razorpay.com/pay/?plan=${encodeURIComponent(selectedPlan)}`;
      setSelectedPlan(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/30">
      


      {/* ─── Main Container ─── */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 lg:py-16">

        {/* ─── SECTION 1: Product Description (Hero) ─── */}
        <div className="w-full mb-20 text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></span>
            Enterprise Human Capital Solution
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold mb-6 tracking-tight uppercase">
            Kiaan <span className="text-yellow-500">Employee Management</span>
          </h1>
          <div className="text-zinc-300 text-[15px] lg:text-base leading-relaxed space-y-6 max-w-5xl">
            <p>
              Kiaan Employee Management is an all-in-one human resource ecosystem designed to manage, track, and optimize your workforce from a single, intuitive interface. The software seamlessly integrates vital HR processes, including employee directory management, department organization, real-time biometric and GPS attendance tracking, leaves approvals, automated payroll calculations, performance appraisal systems, and compliance audits. By centralizing these operations, it eliminates manual admin workloads, reduces paper dependency, and mitigates administrative delays.
            </p>
            <p>
              Whether managing a localized corporate office or a complex, multi-location organization with remote-first field teams, our platform connects HR admins, team leads, and staff under one secure digital workspace, helping you improve communication, accelerate digital onboarding, and gain complete workforce visibility with advanced real-time analytics. Every module is built to operate in harmony, transforming the workforce experience from hire to retire.
            </p>
          </div>
        </div>

        {/* ─── SECTION 2: Workflow Overview ─── */}
        <div className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
          WORKFLOW OVERVIEW
        </div>
        <p className="text-zinc-400 text-sm max-w-4xl mb-10 leading-relaxed">
          The employee lifecycle within the Kiaan platform begins with a seamless company profile and department hierarchy setup. As team members are digitally onboarded, their credentials, contract files, and personal data are mapped to their respective departments. The system automatically enforces configured attendance check-in rules, shift rosters, and leave policies. At the end of every calendar month, all logged attendance hours, approved leaves, and performance bonuses automatically feed into the automated payroll engine, generating accurate payslips and compliance forms. The entire lifecycle is tracked by continuous analytical reports, giving management actionable workforce insights.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start mb-24">
          
          {/* Left Side: Workflow Cards List */}
          <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 flex flex-col gap-3">
            {WORKFLOW_ITEMS.map((item) => {
              const isActive = activeItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  onClick={() => setActiveItem(item)}
                  className={`cursor-pointer rounded-xl border p-4 transition-all duration-300 flex items-center group ${isActive
                      ? 'bg-yellow-500/5 border-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.05)]'
                      : 'bg-[#111] border-white/5 hover:bg-[#151515] hover:border-white/10'
                    }`}
                >
                  <div className={`text-lg font-bold mr-4 transition-colors ${isActive ? 'text-yellow-500' : 'text-zinc-500'}`}>
                    {item.id}
                  </div>
                  <div className={`mr-4 transition-colors ${isActive ? 'text-white' : 'text-zinc-400'}`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xs font-bold mb-0.5 transition-colors ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-[10px] leading-tight transition-colors ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      {item.subtitle}
                    </p>
                  </div>
                  <ChevronRight size={16} className={`transition-all duration-300 ${isActive ? 'text-yellow-500 translate-x-1' : 'text-zinc-600 group-hover:text-zinc-400'}`} />
                </div>
              );
            })}

            {/* Bottom Panel Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="flex-1 bg-yellow-500 text-black py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.2)]"
              >
                <Rocket size={16} />
                Request Demo Account
              </button>
              <button
                onClick={() => setIsBuyModalOpen(true)}
                className="flex-1 bg-transparent border border-yellow-500 text-yellow-500 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-yellow-500/10 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={16} />
                Buy Now
              </button>
            </div>
          </div>

          {/* Right Side: Workflow Detail Panel */}
          <div className="flex-1 w-full bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 shadow-2xl relative min-h-[580px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {/* ID Badge and Heading */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500 text-black font-bold text-base px-2.5 py-1.5 rounded-lg leading-none flex items-center justify-center shadow-lg">
                      {activeItem.id}
                    </div>
                    <h2 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight uppercase">
                      {activeItem.title}
                    </h2>
                  </div>
                </div>

                {/* Explanation text */}
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6">
                  {activeItem.description}
                </p>

                {/* Real UI Preview Mockup Card */}
                <div className="mb-6">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mb-2">Real UI Preview</div>
                  {activeItem.mockup}
                </div>

                {/* Documentation Sections */}
                <div className="space-y-4 mb-6">
                  {activeItem.sections.map((sec, idx) => (
                    <div key={idx} className="bg-[#181818] border border-white/5 p-4 rounded-xl relative overflow-hidden group hover:border-white/10 transition-colors">
                      <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/20 group-hover:bg-yellow-500 transition-colors"></div>
                      <h4 className="text-xs font-bold text-white mb-1.5 uppercase tracking-wide">
                        {sec.heading}
                      </h4>
                      <p className="text-zinc-400 text-[11px] leading-relaxed">
                        {sec.content}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Key Features list */}
                <div className="bg-[#181818] border border-white/10 p-5 rounded-xl">
                  <h3 className="text-white font-bold text-xs mb-4 flex items-center gap-2 uppercase tracking-wider">
                    <CheckCircle2 className="text-yellow-500 w-4 h-4" /> Key Capabilities
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeItem.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-zinc-300 text-xs">
                        <div className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center text-yellow-500 shrink-0 mt-0.5">
                          <Check size={10} strokeWidth={3} />
                        </div>
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>



        {/* Footer Features row */}
        <div className="flex flex-wrap justify-between items-center mt-20 pt-8 border-t border-white/5 text-xs text-zinc-500 font-medium max-w-4xl mx-auto gap-4">
          <div className="flex items-center gap-2"><ShieldCheck className="text-yellow-500" size={16} /> Secure & Reliable</div>
          <div className="flex items-center gap-2"><Cloud className="text-yellow-500" size={16} /> Cloud Based</div>
          <div className="flex items-center gap-2"><Clock className="text-yellow-500" size={16} /> 99.9% Uptime</div>
          <div className="flex items-center gap-2"><Headphones className="text-yellow-500" size={16} /> 24/7 Support</div>
        </div>

      </div>

      {/* ─── Demo Request Modal ─── */}
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
              <button 
                onClick={() => setIsDemoModalOpen(false)} 
                className="absolute top-3 right-3 text-zinc-500 hover:text-white transition-colors bg-white/5 p-1.5 rounded-full hover:bg-white/10"
              >
                <X size={14} />
              </button>

              <div className="mb-5 text-center">
                <h3 className="text-xl font-display font-bold text-white mb-1.5 uppercase tracking-wide">Request HR Demo</h3>
                <p className="text-zinc-400 text-xs">Enter your details and our team will set up your personalized demo account.</p>
              </div>

              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); alert("HR System Demo Requested! Our team will contact you shortly."); setIsDemoModalOpen(false); }}>
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

      {/* ─── Buy Now Subscription & Purchase Modal Flow ─── */}
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
                  Choose the perfect fit for your human resource management operations
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                {/* Starter Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Starter</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Ideal for small business teams</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$9</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 20 Employees',
                      'Central Employee Directory',
                      'Web clock-in/out attendance',
                      'Leave Application Request',
                      'Basic payroll calculations',
                      'Standard analytics widgets',
                      'Email Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium font-sans">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => { setSelectedPlan('Starter - $9/month'); setIsBuyModalOpen(false); }} 
                    className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Professional Plan */}
                <div className="bg-[#1a1a1a] border border-yellow-500 rounded-2xl p-4 flex flex-col relative shadow-[0_0_30px_rgba(234,179,8,0.1)] -mt-1 mb-1 z-10">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-yellow-500 text-black text-[8px] md:text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                  <h4 className="text-base font-bold text-white mb-0.5">Professional</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">Perfect for growing organizations</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$19</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Up to 100 Employees',
                      'Everything in Starter',
                      'Biometric Device API integration',
                      'GPS Geo-fenced mobile log',
                      'Tax & Payroll compliance (PF, ESI)',
                      'Continuous KPI evaluations',
                      'Priority Email & Chat Support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-white font-medium font-sans">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => { setSelectedPlan('Professional - $19/month'); setIsBuyModalOpen(false); }} 
                    className="w-full py-1.5 md:py-2 rounded-lg bg-yellow-500 text-black font-bold text-[9px] md:text-[10px] hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(234,179,8,0.2)] uppercase tracking-widest"
                  >
                    CHOOSE PLAN
                  </button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-[#1a1a1a] border border-white/5 rounded-2xl p-4 flex flex-col hover:border-white/10 transition-colors">
                  <h4 className="text-base font-bold text-white mb-0.5">Enterprise</h4>
                  <p className="text-[9px] md:text-[10px] text-zinc-500 mb-2">For multi-location companies</p>
                  <div className="flex items-end gap-1 mb-3 pb-3 border-b border-white/5">
                    <span className="text-2xl md:text-3xl font-bold text-white">$29</span>
                    <span className="text-[9px] md:text-[10px] text-zinc-500 pb-1">/month</span>
                  </div>
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {[
                      'Unlimited Employees',
                      'Everything in Professional',
                      'Multi-branch offices management',
                      'ATS Recruitment pipelines',
                      'Advanced Attrition Analytics',
                      'Training & Skills matrices',
                      '24/7 dedicated support'
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-[9px] md:text-[10px] text-zinc-300 font-medium font-sans">
                        <Check size={12} className="text-yellow-500 shrink-0" strokeWidth={3} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => { setSelectedPlan('Enterprise - $29/month'); setIsBuyModalOpen(false); }} 
                    className="w-full py-1.5 md:py-2 rounded-lg bg-white/10 text-white font-bold text-[9px] md:text-[10px] hover:bg-white/20 transition-colors uppercase tracking-widest"
                  >
                    CHOOSE PLAN
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Customer Form Modal for Plan Purchase */}
      <AnimatePresence>
        {selectedPlan && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setSelectedPlan(null)}
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
                  Enter your details below to set up your account and proceed to secure payment.
                </p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="relative group">
                  <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
                  <input
                    required
                    type="text"
                    value={customerForm.fullName}
                    onChange={(e) => setCustomerForm({ ...customerForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full bg-[#181818] border border-white/10 rounded-xl pl-12 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/50 focus:bg-[#222] outline-none transition-all"
                  />
                </div>

                <div className="relative group">
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
                    <ChevronDown size={14} />
                  </div>
                </div>
              </div>

              <div className="mb-5 text-center">
                <p className="text-[10px] md:text-xs text-zinc-500 flex items-center justify-center gap-1.5">
                  <Lock size={12} className="text-zinc-400" />
                  Secure SSL checkout transaction.
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
                  onClick={() => setSelectedPlan(null)}
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