import React from 'react';
import { notFound } from 'next/navigation';
import { caseStudiesData } from '@/data/caseStudiesData';
import { Button } from '@/components/Button';
import Link from 'next/link';
import { ArrowLeft, Target, Cpu, Zap, Activity, CheckCircle2, Factory } from 'lucide-react';
import { motion } from 'framer-motion';

export async function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        slug: study.slug,
    }));
}

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
    const study = caseStudiesData.find((s) => s.slug === params.slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="bg-black min-h-screen text-white pt-24 pb-16 selection:bg-yellow-500 selection:text-black">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-16">
                <Link href="/case-studies" className="inline-flex items-center text-zinc-500 hover:text-yellow-500 text-xs font-black uppercase tracking-widest mb-8 transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Case Studies
                </Link>
                <div className="max-w-4xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-6">
                        {study.client} <span className="w-1 h-1 rounded-full bg-yellow-500 mx-2" /> {study.category}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tight mb-8 leading-tight">
                        {study.title}
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-zinc-900">
                        <div>
                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-2">Primary Impact</div>
                            <div className="text-xl font-display text-yellow-500">{study.result}</div>
                        </div>
                        <div>
                            <div className="text-[10px] text-zinc-500 font-black uppercase tracking-[0.2em] mb-2">Technology Target</div>
                            <div className="text-xl font-display text-white">{study.type}</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Narrative Content */}
            <section className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Column: Narrative */}
                    <div className="lg:col-span-8 space-y-16">
                        {/* The Challenge */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight flex items-center gap-4">
                                <Target className="text-red-500" /> The Challenge
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                {study.challenge}
                            </p>
                        </div>

                        {/* The Blueprint */}
                        <div className="space-y-6">
                            <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight flex items-center gap-4">
                                <Cpu className="text-yellow-500" /> The Blueprint
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light">
                                {study.blueprint}
                            </p>
                            {study.architectureImage && (
                                <div className="mt-8 border border-zinc-800 p-2 bg-zinc-950/50">
                                    <img src={study.architectureImage} alt="Architecture Blueprint" className="w-full h-auto grayscale opacity-80" />
                                </div>
                            )}
                        </div>

                        {/* The Execution */}
                        <div className="space-y-6 relative overflow-hidden">
                            <h2 className="text-2xl md:text-3xl font-display uppercase tracking-tight flex items-center gap-4">
                                <Activity className="text-emerald-500" /> The Execution
                            </h2>
                            <p className="text-lg text-zinc-400 leading-relaxed font-light relative z-10">
                                {study.execution}
                            </p>
                            <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 blur-[80px] rounded-full pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column: Hard Metrics */}
                    <div className="lg:col-span-4">
                        <div className="sticky top-24 border border-zinc-800 bg-zinc-950 p-8 space-y-8">
                            <h3 className="text-sm font-black uppercase tracking-widest text-white border-b border-zinc-800 pb-4">Hard Impact Metrics</h3>
                            <div className="space-y-6">
                                {study.impactMetrics.map((metric, idx) => (
                                    <div key={idx} className="flex justify-between items-center bg-black p-4 border border-zinc-900">
                                        <div className="text-xs text-zinc-500 font-bold tracking-widest uppercase">{metric.label}</div>
                                        <div className="text-lg font-display text-yellow-500">{metric.value}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-6 border-t border-zinc-800">
                                <div className="text-xs text-zinc-500 mb-4 italic">"Transforming legacy constraints into absolute market dominance."</div>
                                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-zinc-400">
                                    <CheckCircle2 size={14} className="text-emerald-500" /> Verified by QA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High-Conversion CTA Block */}
            <section className="container mx-auto px-6 mb-16">
                <div className="relative border border-yellow-500/20 bg-zinc-900 overflow-hidden group">
                    <div className="absolute inset-0 bg-yellow-500/[0.02] group-hover:bg-yellow-500/[0.05] transition-colors duration-500" />
                    <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 p-12 md:p-20 text-center max-w-4xl mx-auto flex flex-col items-center">
                        <Factory size={48} className="text-yellow-500 mb-8 opacity-50" />
                        <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tight text-white mb-6 leading-tight">
                            Want to scale your <span className="text-yellow-500">{study.type}</span> infrastructure like {study.client}?
                        </h2>
                        <p className="text-lg text-zinc-400 mb-10 max-w-2xl leading-relaxed">
                            Stop letting technical debt dictate your growth. Speak with our elite engineering architects to map out a high-performance system designed for your exact organizational needs.
                        </p>
                        <Link href="/schedule">
                            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-12 h-16 rounded-none font-black uppercase tracking-[0.2em] text-sm flex items-center gap-3 transition-transform hover:-translate-y-1 shadow-[8px_8px_0_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0_rgba(255,255,255,0.1)]">
                                Book a Free Architecture Audit <Zap size={18} />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
