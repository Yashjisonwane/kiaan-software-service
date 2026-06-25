"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, X, ChevronDown } from 'lucide-react';
import { serviceEcosystems } from '@/data/servicesData';
import { notFound } from 'next/navigation';

export const EcosystemClient = ({ slug }: { slug: string }) => {
  const ecosystem = serviceEcosystems[slug];
  
  if (!ecosystem) {
    notFound();
  }

  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string>('');

  const openSubscribeModal = (productId: string = '') => {
    setSelectedProduct(productId);
    setIsSubscribeModalOpen(true);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none animated-grid opacity-20"></div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-br from-yellow-500/5 via-transparent to-red-600/5"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header Section */}
        <div className="mb-12">
          <Link href="/software-services" className="inline-flex items-center gap-2 text-zinc-400 hover:text-yellow-500 transition-colors mb-6 text-sm font-bold uppercase tracking-wider">
            <ArrowLeft size={16} /> Back to Categories
          </Link>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-500 text-xs font-bold uppercase tracking-widest mb-6 block w-fit">
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse"></span>
            Software Ecosystem
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-4">
            {ecosystem.name} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-600">Solutions</span>
          </h1>
          <p className="text-zinc-400 text-lg max-w-3xl">
            Explore our specialized products within the {ecosystem.name} ecosystem. Each product is engineered for high performance, scalability, and seamless integration.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ecosystem.products.map((product) => (
            <div key={product.id} className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-yellow-500/30 transition-colors duration-300 flex flex-col h-full shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-500/0 group-hover:from-yellow-500/5 group-hover:to-red-600/5 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex-1">
                <h2 className="text-2xl font-bold uppercase tracking-wider mb-3 text-white">
                  {product.name}
                </h2>
                <p className="text-zinc-400 mb-6 text-sm leading-relaxed">
                  {product.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-zinc-300 font-medium">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row gap-3 mt-auto">
                <button 
                  onClick={() => openSubscribeModal(product.id)}
                  className="w-full bg-yellow-500 text-black px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors text-center"
                >
                  Subscribe
                </button>
                <button 
                  onClick={() => openSubscribeModal(product.id)}
                  className="w-full bg-zinc-800 text-white border border-white/10 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-700 transition-colors text-center flex justify-center items-center gap-2"
                >
                  Request Demo <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Form Modal */}
      {isSubscribeModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" onClick={() => setIsSubscribeModalOpen(false)} />
          <div className="relative bg-[#0c0c0c] border border-white/10 rounded-3xl w-full max-w-lg p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button onClick={() => setIsSubscribeModalOpen(false)} className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors">
              <X size={18} />
            </button>
            <h3 className="text-2xl font-bold uppercase tracking-wider mb-2 text-white">Get Started</h3>
            <p className="text-zinc-400 text-sm mb-6">Choose a product from the {ecosystem.name} ecosystem to subscribe or request a demo.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Request submitted!'); setIsSubscribeModalOpen(false); }}>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Select Software Product</label>
                <div className="relative">
                  <select 
                    required
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 appearance-none text-sm font-medium"
                  >
                    <option value="" disabled>Select a product...</option>
                    {ecosystem.products.map(p => (
                      <option key={p.id} value={p.id}>{p.name}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={16} />
                </div>
                <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-wide">Options filtered to {ecosystem.name} products only.</p>
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Your Name</label>
                <input required type="text" placeholder="John Doe" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 text-sm" />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">Work Email</label>
                <input required type="email" placeholder="john@company.com" className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500 text-sm" />
              </div>

              <button type="submit" className="w-full bg-yellow-500 text-black px-4 py-3 rounded-xl font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors mt-4">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
