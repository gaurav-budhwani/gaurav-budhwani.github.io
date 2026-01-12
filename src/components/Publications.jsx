
import React from 'react';
import { motion } from 'framer-motion';

const Publications = () => {
    return (
        <section id="publications" className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-serif text-4xl font-bold tracking-tight">PUBLICATIONS</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

                    {/* Publication Card */}
                    <div className="group block">
                        {/* Image */}
                        <div className="relative overflow-hidden mb-6 bg-gray-50 aspect-[4/3] border border-gray-100 rounded-lg group-hover:shadow-md transition-shadow">
                            <div className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-white px-3 py-1.5 border border-gray-200 shadow-sm rounded-full font-bold uppercase tracking-wider text-black">
                                Journal Article
                            </div>
                            <img
                                src="/images/jgr_atmospheres_cover.png"
                                alt="JGR Atmospheres Cover"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                            />
                        </div>

                        {/* Content */}
                        <div className="border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-4 transition-all duration-300">
                            <h3 className="font-serif text-xl font-bold leading-tight mb-2 group-hover:text-gray-600 transition-colors">
                                Employing Machine Learning for New Particle Formation Identification and Mechanistic Analysis
                            </h3>
                            <p className="font-sans text-sm text-gray-500 mb-2">
                                Insights From a Six-Year Observational Study in the Southern Great Plains
                            </p>
                            <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-4">
                                JGR Atmospheres • 2026
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://agupubs.onlinelibrary.wiley.com/doi/10.1029/2024JD043116"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
                                >
                                    Read Online &rarr;
                                </a>
                                <a
                                    href="/JGR_Atmospheres_2026_Hao.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors"
                                >
                                    Download PDF &darr;
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Publications;
