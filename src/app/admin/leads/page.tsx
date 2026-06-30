"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users, Key, Clock, LogOut, Search, Trash2,
  Calendar, Check, Copy, Ban, Mail, Phone, Award, ShieldAlert
} from 'lucide-react';

interface Lead {
  id: string;
  softwareId: string;
  fullName: string;
  email: string;
  whatsapp: string;
  type: 'demo' | 'buy';
  plan?: string;
  licenseKey: string;
  status: 'active' | 'expired' | 'suspended';
  createdAt: string;
  activatedAt?: string;
  expiryDate: string;
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [actionLoading, setActionLoading] = useState<string | null>(null);
  const router = useRouter();

  const fetchLeads = async () => {
    try {
      const res = await fetch('/api/admin/leads');
      if (res.status === 401) {
        router.push('/admin/login');
        return;
      }
      const data = await res.json();
      if (res.ok && data.success) {
        setLeads(data.leads);
      } else {
        setError(data.error || 'Failed to fetch leads');
      }
    } catch (err) {
      setError('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      router.push('/admin/login');
    }
  };

  const handleCopyKey = (key: string) => {
    navigator.clipboard.writeText(key);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleAction = async (id: string, action: 'toggleStatus' | 'extendDemo' | 'delete') => {
    if (action === 'delete' && !confirm('Are you sure you want to delete this lead?')) {
      return;
    }

    setActionLoading(id + '-' + action);
    try {
      const res = await fetch('/api/admin/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (action === 'delete') {
          setLeads(leads.filter(l => l.id !== id));
        } else {
          setLeads(leads.map(l => l.id === id ? data.lead : l));
        }
      } else {
        alert(data.error || 'Action failed');
      }
    } catch (err) {
      alert('An error occurred performing action');
    } finally {
      setActionLoading(null);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  // Stats calculation
  const totalLeads = leads.length;
  const activeDemos = leads.filter(l => l.type === 'demo' && l.status === 'active').length;
  const premiumLicenses = leads.filter(l => l.type === 'buy' && l.status === 'active').length;

  // Search & Filter leads
  const filteredLeads = leads.filter(lead => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query) ||
      lead.whatsapp.includes(query) ||
      lead.licenseKey.toLowerCase().includes(query) ||
      lead.softwareId.toLowerCase().includes(query);

    if (filterType === 'all') return matchesSearch;
    if (filterType === 'demo') return matchesSearch && lead.type === 'demo';
    if (filterType === 'buy') return matchesSearch && lead.type === 'buy';
    if (filterType === 'active') return matchesSearch && lead.status === 'active';
    if (filterType === 'expired') return matchesSearch && lead.status === 'expired';
    if (filterType === 'suspended') return matchesSearch && lead.status === 'suspended';

    return matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <div className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-zinc-500 text-xs tracking-wider uppercase">Loading Leads Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-yellow-500/20">
      
      {/* HEADER BAR */}
      <header className="sticky top-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-yellow-500 text-black flex items-center justify-center font-bold text-base shadow-[0_0_15px_rgba(234,179,8,0.2)]">
            K
          </div>
          <div>
            <h1 className="text-sm font-bold tracking-tight">Kiaan Tech Admin</h1>
            <p className="text-[10px] text-zinc-500">Central Licensing & Leads Panel</p>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 text-xs font-bold transition-all"
        >
          <LogOut size={13} />
          Logout
        </button>
      </header>

      {/* DASHBOARD CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        
        {error && (
          <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 text-sm flex items-center gap-3">
            <ShieldAlert size={18} className="shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* SUMMARY CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Total Leads Card */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Total Leads Captured</span>
              <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                <Users size={18} />
              </div>
            </div>
            <div className="text-3xl font-bold tracking-tight">{totalLeads}</div>
            <p className="text-[10px] text-zinc-500 mt-2">Overall software demonstration requests</p>
          </div>

          {/* Active Demos Card */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Active Trials (10 Days)</span>
              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                <Clock size={18} />
              </div>
            </div>
            <div className="text-3xl font-bold tracking-tight text-yellow-500">{activeDemos}</div>
            <p className="text-[10px] text-zinc-500 mt-2">Currently running active demo software instances</p>
          </div>

          {/* Premium Licenses Card */}
          <div className="bg-[#111] border border-white/5 rounded-2xl p-6 relative overflow-hidden group hover:border-white/10 transition-all">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Active Purchases (1 Mo)</span>
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                <Award size={18} />
              </div>
            </div>
            <div className="text-3xl font-bold tracking-tight text-emerald-400">{premiumLicenses}</div>
            <p className="text-[10px] text-zinc-500 mt-2">Active paid standard monthly activations</p>
          </div>
        </div>

        {/* SEARCH AND FILTERS */}
        <div className="bg-[#111] border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search bar */}
          <div className="relative w-full md:w-96 group">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-yellow-500 transition-colors" />
            <input
              type="text"
              placeholder="Search by client name, email, key or product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#181818] border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-yellow-500/30 focus:bg-[#1e1e1e] outline-none transition-all"
            />
          </div>

          {/* Filter options */}
          <div className="flex gap-2 w-full md:w-auto overflow-x-auto self-start md:self-auto">
            {[
              { id: 'all', label: 'All Entries' },
              { id: 'demo', label: 'Demos' },
              { id: 'buy', label: 'Paid' },
              { id: 'active', label: 'Active' },
              { id: 'expired', label: 'Expired' },
              { id: 'suspended', label: 'Suspended' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  filterType === tab.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-[#181818] text-zinc-400 border border-white/5 hover:bg-[#202020] hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* LEADS LIST DATA TABLE */}
        <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/5 bg-[#151515] text-[10px] uppercase font-bold text-zinc-500 tracking-wider">
                  <th className="px-6 py-4">Client / Contacts</th>
                  <th className="px-6 py-4">Product / Plan</th>
                  <th className="px-6 py-4">License Key</th>
                  <th className="px-6 py-4">Activation & Expiry</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs">
                {filteredLeads.length > 0 ? (
                  filteredLeads.map((lead) => {
                    const isCopied = copiedKey === lead.licenseKey;
                    
                    return (
                      <tr key={lead.id} className="hover:bg-[#161616]/50 transition-colors group">
                        
                        {/* Client details */}
                        <td className="px-6 py-4 space-y-1">
                          <div className="font-bold text-white text-sm">{lead.fullName}</div>
                          <div className="flex items-center gap-1.5 text-zinc-500">
                            <Mail size={12} />
                            <span>{lead.email}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-zinc-500">
                            <Phone size={12} />
                            <span>+91 {lead.whatsapp}</span>
                          </div>
                        </td>

                        {/* Product details */}
                        <td className="px-6 py-4 space-y-1">
                          <div className="font-bold text-zinc-300 capitalize">
                            {lead.softwareId.replace(/([A-Z])/g, ' $1').replace(/-/g, ' ').trim()}
                          </div>
                          <div className="inline-block text-[9px] font-bold uppercase px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                            {lead.plan}
                          </div>
                        </td>

                        {/* License key display */}
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <code className="bg-[#181818] border border-white/5 px-2.5 py-1 rounded text-yellow-500 font-mono text-[11px] font-bold">
                              {lead.licenseKey}
                            </code>
                            <button
                              onClick={() => handleCopyKey(lead.licenseKey)}
                              className="p-1 rounded bg-[#222] hover:bg-[#333] text-zinc-400 hover:text-white transition-colors"
                              title="Copy License Key"
                            >
                              {isCopied ? <Check size={12} className="text-emerald-500" /> : <Copy size={12} />}
                            </button>
                          </div>
                        </td>

                        {/* Dates */}
                        <td className="px-6 py-4 space-y-1 text-zinc-400">
                          <div className="flex items-center gap-1 text-[11px]">
                            <span className="text-zinc-500">Registered:</span>
                            <span>{formatDate(lead.createdAt)}</span>
                          </div>
                          <div className="flex items-center gap-1 text-[11px] font-medium">
                            <span className="text-zinc-500">Expires:</span>
                            <span className={new Date(lead.expiryDate) < new Date() ? 'text-red-400' : 'text-zinc-300'}>
                              {formatDate(lead.expiryDate)}
                            </span>
                          </div>
                        </td>

                        {/* Status Badge */}
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                            lead.status === 'active' 
                              ? 'bg-emerald-500/10 text-emerald-400'
                              : lead.status === 'suspended'
                                ? 'bg-orange-500/10 text-orange-400'
                                : 'bg-red-500/10 text-red-400'
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${
                              lead.status === 'active' 
                                ? 'bg-emerald-400'
                                : lead.status === 'suspended'
                                  ? 'bg-orange-400'
                                  : 'bg-red-400'
                            }`} />
                            {lead.status}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                            
                            {/* Toggle Suspend/Active Button */}
                            <button
                              onClick={() => handleAction(lead.id, 'toggleStatus')}
                              disabled={actionLoading !== null}
                              className={`p-1.5 rounded-lg border text-xs font-bold transition-all flex items-center justify-center ${
                                lead.status === 'suspended'
                                  ? 'bg-emerald-500/10 hover:bg-emerald-500/20 border-emerald-500/20 text-emerald-400'
                                  : 'bg-orange-500/10 hover:bg-orange-500/20 border-orange-500/20 text-orange-400'
                              }`}
                              title={lead.status === 'suspended' ? 'Reactivate License' : 'Suspend License'}
                            >
                              <Ban size={13} />
                            </button>

                            {/* Extend Demo (only shows for trials/demos) */}
                            {lead.type === 'demo' && (
                              <button
                                onClick={() => handleAction(lead.id, 'extendDemo')}
                                disabled={actionLoading !== null}
                                className="p-1.5 rounded-lg bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/20 text-yellow-400 text-xs font-bold transition-all"
                                title="Extend Trial +10 Days"
                              >
                                <Calendar size={13} />
                              </button>
                            )}

                            {/* Delete Button */}
                            <button
                              onClick={() => handleAction(lead.id, 'delete')}
                              disabled={actionLoading !== null}
                              className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 transition-all"
                              title="Delete Lead"
                            >
                              <Trash2 size={13} />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-zinc-500 text-sm">
                      No leads or licenses match the current search filters.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
