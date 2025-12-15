import React from 'react';
import { motion } from 'framer-motion';
import miamiLogo from '../assets/miami_logo.png';
import iitgnLogo from '../assets/iitgn_logo.png';
import aboutImg from '../assets/about.JPG';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-white relative border-b border-black/5">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.9] tracking-tight mb-20 text-center md:text-left"
                >
                    About Me.
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Column 1: Profile Image (Left) */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                                <img src={aboutImg} alt="Gaurav at University of Miami" className="w-full h-auto object-cover" />
                            </div>
                            <p className="font-sans text-sm font-medium text-gray-700 mt-4 text-center">
                                At University of Miami, Florida, USA
                            </p>
                        </motion.div>
                    </div>

                    {/* Column 2: Bio (Middle) */}
                    <div className="lg:col-span-4 flex flex-col justify-center pt-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-6 font-sans text-lg leading-relaxed text-gray-800"
                        >
                            <p>
                                I am an undergraduate student pursuing a dual majors in <span className="font-bold">Chemical Engineering</span> and <span className="font-bold">Computer Science Engineering</span>.
                            </p>
                            <p>
                                My academic journey is driven by a deep fascination with the interplay between mathematics and coding, and how these disciplines converge to address real-world challenges. I believe that the synergy between Chemical Engineering and Computer Science opens up a world of innovative solutions and I am eager to continue learning and growing in these dynamic fields.
                            </p>
                        </motion.div>
                    </div>

                    {/* Column 3: Credentials (Right) */}
                    <div className="lg:col-span-4 flex flex-col space-y-6">

                        {/* Experience Item */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-black transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform">
                                    <img src={miamiLogo} alt="University of Miami" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-sans text-lg font-bold leading-tight">Applied Machine Learning Intern</h4>
                                    <p className="font-sans text-sm text-gray-600">University of Miami</p>
                                    <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Summer 2025</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Education Item */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-gray-50 border border-gray-200 p-6 rounded-2xl hover:border-black transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform">
                                    <img src={iitgnLogo} alt="IIT Gandhinagar" className="w-full h-full object-contain" />
                                </div>
                                <div>
                                    <h4 className="font-sans text-lg font-bold leading-tight">Bachelor of Technology</h4>
                                    <p className="font-sans text-sm text-gray-600">IIT Gandhinagar</p>
                                    <p className="font-mono text-[10px] text-gray-400 mt-1 uppercase tracking-wider">2022 - Present</p>
                                </div>
                            </div>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
