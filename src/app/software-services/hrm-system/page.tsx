"use client";
import React from 'react';
import { HRMTemplate } from './components/HRMTemplate';
import { Users, Clock, Briefcase } from 'lucide-react';

const hrmFeatures = [
  {
    title: "Kiaan Attendance Hub",
    shortDesc: "Track time, attendance, and leave management.",
    fullDesc: "Employees can clock in via mobile or biometric devices. Automate leave requests, approvals, and overtime calculations.",
    icon: <Clock size={24} />
  },
  {
    title: "Kiaan Recruiting",
    shortDesc: "End-to-end applicant tracking system (ATS).",
    fullDesc: "Post jobs, screen resumes, schedule interviews, and seamlessly onboard new hires into your employee database.",
    icon: <Briefcase size={24} />
  },
  {
    title: "Kiaan Employee Portal",
    shortDesc: "Self-service dashboard for all your employees.",
    fullDesc: "Give your team access to their payslips, company policies, leave balances, and performance reviews in one secure place.",
    icon: <Users size={24} />
  }
];

export default function HRMSystemPage() {
  return (
    <HRMTemplate 
      title="HRM System" 
      description="Comprehensive Human Resource Management software covering payroll, attendance, leave tracking, and employee performance."
      features={hrmFeatures}
    />
  );
}