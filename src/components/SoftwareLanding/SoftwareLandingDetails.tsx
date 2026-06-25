"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Cloud, Smartphone, CheckCircle, Quote, LayoutDashboard, Globe, Settings, Lock } from 'lucide-react';

interface Props {
  softwareName: string;
}

export const SoftwareLandingDetails: React.FC<Props> = ({ softwareName }) => {
  return (
    <div className="w-full">
      {/* 1. Why Choose Us / Benefits */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
              Why Choose <span className="text-yellow-500">{softwareName}</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Our software is built with modern businesses in mind, offering unmatched reliability, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Cloud, title: "100% Cloud-Based", desc: "Access your data securely from anywhere, at any time, on any device." },
              { icon: Shield, title: "Bank-Grade Security", desc: "Your data is encrypted and protected with industry-leading security protocols." },
              { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance, ensuring zero lag during operations." },
              { icon: Smartphone, title: "Mobile Ready", desc: "Fully responsive design with dedicated mobile app capabilities included." }
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center mb-6">
                  <benefit.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. How It Works / Steps */}
      <section className="py-20 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
              How It <span className="text-yellow-500">Works</span>
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              A seamless integration process designed to get your business up and running in record time.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500/20 via-yellow-500/50 to-yellow-500/20 -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { step: "01", title: "Setup & Configuration", desc: "We customize the software parameters to match your specific workflow." },
                { step: "02", title: "Data Migration", desc: "Seamlessly import your existing records with zero downtime or data loss." },
                { step: "03", title: "Go Live & Scale", desc: "Launch with full team training and 24/7 dedicated support backing you up." }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="relative bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-500 text-black flex items-center justify-center font-bold text-xl mx-auto mb-6 shadow-[0_0_20px_rgba(234,179,8,0.3)] relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Integrations */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/5 border border-white/10 rounded-3xl p-10 md:p-16">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
                Seamless <span className="text-yellow-500">Integrations</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-8">
                {softwareName} plays nicely with the tools you already use. Connect your favorite apps with our robust API and pre-built modules.
              </p>
              <ul className="space-y-3">
                {["WhatsApp & SMS Gateways", "Payment Processors (Stripe, Razorpay)", "Accounting Software (Tally, QuickBooks)", "Google Workspace & Office 365"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[
                { icon: Globe, name: "Web API" },
                { icon: LayoutDashboard, name: "Custom Webhooks" },
                { icon: Settings, name: "ERP Sync" },
                { icon: Lock, name: "SSO Login" }
              ].map((tool, i) => (
                <div key={i} className="bg-black/50 border border-white/5 rounded-2xl p-6 text-center hover:border-yellow-500/30 transition-colors">
                  <tool.icon size={32} className="mx-auto text-zinc-400 mb-3" />
                  <span className="text-white font-bold text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Client Testimonials */}
      <section className="py-20 relative bg-black">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
              Trusted by <span className="text-yellow-500">Industry Leaders</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                quote: `Implementing ${softwareName} completely transformed our daily operations. The interface is intuitive, and the support team is phenomenal. Highly recommended!`,
                author: "Sarah Jenkins",
                role: "Operations Director"
              },
              { 
                quote: "We were looking for a robust, scalable solution. This software exceeded our expectations in every way. The custom integrations saved us hundreds of hours.",
                author: "Michael Chen",
                role: "Chief Technology Officer"
              }
            ].map((testimonial, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 relative"
              >
                <Quote size={40} className="text-yellow-500/20 absolute top-6 right-6" />
                <p className="text-zinc-300 leading-relaxed text-lg mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 border border-yellow-500/30" />
                  <div>
                    <h4 className="text-white font-bold">{testimonial.author}</h4>
                    <span className="text-zinc-500 text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
