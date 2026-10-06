import React from 'react';
import { ThinkingOrb } from 'thinking-orbs';
const Contact = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-24 pb-12 px-6 md:px-12 mt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/20 pb-24">

                <div className="col-span-1 md:col-span-8">
                    <div className="flex items-center gap-3 mb-4">
                        <ThinkingOrb state="searching" size={20} theme="dark" />
                        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest">Initialise_Procedure: Contact</p>
                    </div>
                    <h2 className="font-serif text-[12vw] md:text-[8vw] leading-[0.8] font-bold tracking-tight mb-8 hover:text-gray-300 transition-colors cursor-default">
                        LET'S<br />BUILD.
                    </h2>
                </div>

                <div className="col-span-1 md:col-span-4 flex flex-col justify-end items-start md:items-end">
                    <a href="mailto:gaurav.budhwani@iitgn.ac.in" className="group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300">
                        <span className="font-mono text-sm uppercase">Email</span>
                        <span className="font-sans font-bold">&rarr;</span>
                    </a>
                    <a href="https://www.linkedin.com/in/gaurav-budhwani-66a78625a/" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300">
                        <span className="font-mono text-sm uppercase">LinkedIn</span>
                        <span className="font-sans font-bold">&rarr;</span>
                    </a>
                    <a href="https://github.com/gaurav-budhwani" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between w-full md:w-64 border-b border-white/20 py-4 hover:bg-white hover:text-black hover:px-4 transition-all duration-300">
                        <span className="font-mono text-sm uppercase">GitHub</span>
                        <span className="font-sans font-bold">&rarr;</span>
                    </a>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 font-mono text-[10px] uppercase tracking-widest">

                <div>
                    System: Gaurav Budhwani
                </div>
                <div className="mt-4 md:mt-0">
                    © {new Date().getFullYear()} All Rights Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Contact;
