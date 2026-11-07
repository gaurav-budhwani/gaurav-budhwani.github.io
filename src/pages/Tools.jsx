import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { allTools } from '../data/tools';

const Tools = () => {
    return (
        <div className="bg-white min-h-screen selection:bg-black selection:text-white">
            <Navbar />
            
            <main className="pt-32 px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto pb-32">
                {/* Page Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-mono text-xs uppercase tracking-widest text-gray-500">
                            Active Lab // Client-Side Utilities
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        TOOLS & UTILITIES
                    </h1>

                    <p className="font-mono text-sm md:text-base text-gray-600 max-w-2xl leading-relaxed mb-10">
                        A curated suite of independent, high-performance web utilities built for everyday engineering, media, and design workflows. 100% in-browser, ad-free, and privacy-first.
                    </p>

                    {/* Quick Specs Bar */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-4 border-t border-black/10 text-xs font-mono text-gray-600">
                        <div className="flex items-center gap-2">
                            <span className="text-black font-bold">01</span>
                            <span>Live Tool</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2">
                            <span className="text-black font-bold">100%</span>
                            <span>Client-Side Execution</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2">
                            <span className="text-black font-bold">Zero</span>
                            <span>Ads & Tracking</span>
                        </div>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center gap-2">
                            <span className="text-black font-bold">Private</span>
                            <span>Zero Server Uploads</span>
                        </div>
                    </div>
                </motion.div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 border-t border-black/10 pt-16 mt-12">
                    {allTools.map((tool, index) => (
                        <motion.article
                            key={tool.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col justify-between bg-white border border-black/10 rounded-2xl p-6 md:p-8 hover:border-black hover:shadow-xl transition-all duration-300"
                        >
                            <div>
                                {/* Card Header */}
                                <div className="flex items-center justify-between gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
                                        <span className="font-mono text-[11px] uppercase tracking-wider text-gray-500">
                                            {tool.category}
                                        </span>
                                    </div>
                                    <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-black text-white font-bold">
                                        {tool.badge}
                                    </span>
                                </div>

                                {/* Visual Showcase / Mockup */}
                                <div className="relative overflow-hidden mb-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 border border-black/5 rounded-xl p-6 aspect-[16/10] flex flex-col justify-between">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={tool.icon}
                                                alt={`${tool.title} icon`}
                                                className="w-10 h-10 rounded-xl shadow-sm"
                                            />
                                            <div>
                                                <h3 className="font-serif font-bold text-lg text-black leading-tight">
                                                    {tool.title}
                                                </h3>
                                                <p className="font-mono text-[10px] text-gray-500">
                                                    Apple ColorSync sRGB
                                                </p>
                                            </div>
                                        </div>
                                        <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold border border-emerald-200">
                                            Ad-Free
                                        </span>
                                    </div>

                                    {/* Conversion Flow Diagram */}
                                    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-black/5 shadow-sm">
                                        <div className="flex items-center justify-between text-[11px] font-mono">
                                            <span className="px-2 py-1 bg-gray-900 text-white rounded font-bold">
                                                .HEIC / .HEIF
                                            </span>
                                            <span className="text-gray-400">→</span>
                                            <div className="flex gap-1.5">
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-medium">PNG</span>
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-medium">JPG</span>
                                                <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-700 font-medium">WebP</span>
                                            </div>
                                        </div>
                                        <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-gray-500">
                                            <span>Scale: 1080p • 2K • 4K • Orig</span>
                                            <span className="text-black font-semibold">Quality: 75–100%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <h2 className="font-serif text-2xl font-bold text-black mb-2 group-hover:text-black">
                                    {tool.title}
                                </h2>
                                <p className="font-mono text-xs text-gray-400 mb-4">
                                    {tool.subtitle}
                                </p>
                                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">
                                    {tool.description}
                                </p>

                                {/* Supported formats pills */}
                                <div className="flex flex-wrap gap-1.5 mb-6">
                                    {tool.supportedFormats.map((fmt, fIdx) => (
                                        <span
                                            key={fIdx}
                                            className="font-mono text-[10px] uppercase tracking-wider px-2 py-1 bg-gray-100 text-gray-800 rounded border border-gray-200"
                                        >
                                            {fmt}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="pt-4 border-t border-black/10">
                                <a
                                    href={tool.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center gap-2 bg-black text-white hover:bg-gray-800 px-6 py-3.5 rounded-full font-mono text-xs uppercase tracking-widest font-bold transition-all shadow-sm group-hover:shadow-md"
                                >
                                    <span>Launch {tool.title}</span>
                                    <span className="text-base leading-none">↗</span>
                                </a>
                            </div>
                        </motion.article>
                    ))}

                    {/* Upcoming Tools Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col justify-between border-2 border-dashed border-gray-300 rounded-2xl p-6 md:p-8 bg-gray-50/50"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
                                    Pipeline // In Progress
                                </span>
                                <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-gray-200 text-gray-700 font-bold">
                                    WIP
                                </span>
                            </div>

                            <div className="aspect-[16/10] bg-white border border-gray-200 rounded-xl mb-6 flex flex-col items-center justify-center p-6 text-center">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3 text-gray-400 font-mono text-lg">
                                    +
                                </div>
                                <p className="font-mono text-xs text-gray-500 uppercase tracking-wider font-semibold">
                                    More Tools Cooking
                                </p>
                                <p className="font-mono text-[10px] text-gray-400 mt-1">
                                    Compilers • Media • Optimization
                                </p>
                            </div>

                            <h2 className="font-serif text-2xl font-bold text-gray-400 mb-2">
                                Upcoming Utilities
                            </h2>
                            <p className="font-mono text-xs text-gray-400 mb-4">
                                Client-side Developer Tooling
                            </p>
                            <p className="font-sans text-sm text-gray-500 leading-relaxed">
                                Additional micro-tools focusing on compiler visualizations, math simulations, and developer productivity are actively being authored. Stay tuned.
                            </p>
                        </div>

                        <div className="pt-6 border-t border-gray-200/60 mt-8">
                            <div className="font-mono text-[11px] text-gray-400 text-center uppercase tracking-wider">
                                Updates deployed regularly
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Privacy & Engineering Philosophy Callout */}
                <div className="mt-20 p-8 rounded-2xl bg-gray-50 border border-black/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="max-w-2xl">
                            <span className="font-mono text-xs uppercase tracking-widest text-gray-500 block mb-2">
                                Philosophy // Privacy & Architecture
                            </span>
                            <h3 className="font-serif text-2xl font-bold text-black mb-2">
                                Why build client-side utilities?
                            </h3>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">
                                Most web utilities on search engines are riddled with aggressive ad trackers, artificial paywalls, and privacy risks that upload your personal files to unknown third-party servers. All tools published here execute 100% locally on your browser hardware using WebAssembly and modern web APIs. Your data never leaves your device.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="px-4 py-3 bg-white border border-black/10 rounded-xl font-mono text-xs">
                                <div className="font-bold text-black">100% Free</div>
                                <div className="text-gray-500 text-[10px]">No subscriptions</div>
                            </div>
                            <div className="px-4 py-3 bg-white border border-black/10 rounded-xl font-mono text-xs">
                                <div className="font-bold text-black">Zero Ads</div>
                                <div className="text-gray-500 text-[10px]">Pure focus</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Tools;

