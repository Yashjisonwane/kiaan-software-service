import React from 'react';
import Link from 'next/link';
import { HospitalManagementSystemWorkflow } from './HospitalManagementSystemWorkflow';
import { HospitalManagementSystemFeatures } from './HospitalManagementSystemFeatures';
import { HospitalManagementSystemGallery } from './HospitalManagementSystemGallery';
import { HospitalManagementSystemPricing } from './HospitalManagementSystemPricing';
import { HospitalManagementSystemForms } from './HospitalManagementSystemForms';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const HospitalManagementSystemLandingPage: React.FC = () => {
  return (
    <div className="bg-white text-[#0F172A] selection:bg-[#2563EB]/25">
      {/* Navigation Bar (simplified for isolated module) */}
      <nav className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E7EB] px-6 py-2.5 flex justify-between items-center">
        <div className="text-sm font-bold uppercase tracking-widest text-[#0F172A]">
          <span className="text-[#2563EB]">Kiaan</span> Hospital Management System
        </div>
        <div className="flex gap-3">
          <Link href="/products/hospital-management-system">
            <button className="bg-[#2563EB] text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors shadow-sm">
              Explore Product
            </button>
          </Link>
          <Link href="/software-services">
            <button className="bg-white border border-[#2563EB]/20 text-[#2563EB] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider hover:bg-[#F8FAFC] transition-colors">
              Back to Services
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-12 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 z-0 pointer-events-none animated-grid opacity-10"></div>
        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-bold uppercase tracking-widest mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse"></span>
            Enterprise Grade Solution
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6 text-[#0F172A]">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] to-[#60A5FA]">Hospital Management System</span>
          </h1>
          
          <p className="text-[#64748B] text-base leading-relaxed mb-8 max-w-3xl mx-auto">
            Streamline your operations, boost productivity, and scale your business with our state-of-the-art Hospital Management System. Designed specifically for modern enterprises requiring robust, secure, and intuitive tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo">
              <button className="w-full sm:w-auto bg-[#2563EB] text-white px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#2563EB]/15">
                Request Demo <ArrowRight size={18} />
              </button>
            </a>
            <Link href="/products/hospital-management-system">
              <button className="w-full sm:w-auto bg-white text-[#2563EB] border border-[#2563EB] px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider hover:bg-[#EFF6FF] transition-colors">
                Explore Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-12 px-6 bg-[#F8FAFC]">
        <div className="container mx-auto max-w-4xl flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-display font-bold uppercase tracking-tighter mb-6 text-[#0F172A]">
              Empower Your <span className="text-[#2563EB]">Business</span>
            </h2>
            <p className="text-[#64748B] text-sm leading-relaxed mb-6">
              Our Hospital Management System solves complex operational challenges by centralizing your data into a single, intuitive platform. It is engineered for businesses that demand high performance and seamless integration.
            </p>
            <ul className="space-y-4">
              {['Increase Operational Efficiency', 'Reduce Manual Administrative Work', 'Gain Real-Time Analytics & Insights', 'Improve Team Collaboration'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[#4B5563] font-medium">
                  <CheckCircle className="text-[#10B981]" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 to-[#60A5FA]/10 blur-3xl rounded-full"></div>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl aspect-video relative z-10 flex items-center justify-center shadow-lg shadow-[#0F172A]/5">
               <span className="text-[#64748B] uppercase tracking-widest font-bold text-xs">Interactive Preview Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <HospitalManagementSystemFeatures />
      <HospitalManagementSystemWorkflow />
      <HospitalManagementSystemGallery />

      {/* Technology Stack */}
      <section className="py-12 px-6 bg-[#F1F5F9] border-y border-[#E5E7EB]">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold uppercase tracking-tighter mb-8 text-[#0F172A]">Built on Modern Technology</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {['React / Next.js', 'Node.js', 'MongoDB', 'AWS / VPS', 'JWT Auth'].map((tech, i) => (
              <div key={i} className="bg-white border border-[#E5E7EB] p-6 rounded-xl text-[#4B5563] font-bold tracking-wider text-sm shadow-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <HospitalManagementSystemPricing />
      <div id="demo">
        <HospitalManagementSystemForms />
      </div>

    </div>
  );
};