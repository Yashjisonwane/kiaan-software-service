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
    <div className="bg-[#0a0a0a] text-white selection:bg-yellow-500/30">
      {/* Navigation Bar (simplified for isolated module) */}
      <nav className="sticky top-0 w-full z-40 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-2.5 flex justify-between items-center">
        <div className="text-sm font-bold uppercase tracking-widest text-white">
          <span className="text-yellow-500">Kiaan</span> Hospital Management System
        </div>
        <div className="flex gap-3">
          <Link href="/products/hospital-management-system">
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

      {/* Hero Section */}
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
            Streamline your operations, boost productivity, and scale your business with our state-of-the-art Hospital Management System. Designed specifically for modern enterprises requiring robust, secure, and intuitive tools.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#demo">
              <button className="w-full sm:w-auto bg-yellow-500 text-black px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Request Demo <ArrowRight size={18} />
              </button>
            </a>
            <Link href="/products/hospital-management-system">
              <button className="w-full sm:w-auto bg-zinc-800 text-white border border-white/10 px-6 py-2.5 text-sm rounded-full font-bold uppercase tracking-wider text-sm hover:bg-zinc-700 transition-colors">
                Explore Product
              </button>
            </Link>
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
            <p className="text-zinc-400 text-sm text-zinc-400 leading-relaxed mb-6">
              Our Hospital Management System solves complex operational challenges by centralizing your data into a single, intuitive platform. It is engineered for businesses that demand high performance and seamless integration.
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
               <span className="text-zinc-600 uppercase tracking-widest font-bold">Interactive Preview Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <HospitalManagementSystemFeatures />
      <HospitalManagementSystemWorkflow />
      <HospitalManagementSystemGallery />

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

      <HospitalManagementSystemPricing />
      <div id="demo">
        <HospitalManagementSystemForms />
      </div>

    </div>
  );
};