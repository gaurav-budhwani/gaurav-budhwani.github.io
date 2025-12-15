import React from 'react';
import { motion } from 'framer-motion';
import miamiLogo from '../assets/miami_logo.png';
import iitgnLogo from '../assets/iitgn_logo.png';

const About = () => {
    return (
        <section id="about" className="py-32 px-6 md:px-12 bg-white relative border-b border-black/5">
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Column: Bio & Philosophy */}
                <div className="flex flex-col justify-between">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-[clamp(3rem,5vw,5rem)] font-bold leading-[0.9] tracking-tight mb-12"
                        >
                            About Me.
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                            className="space-y-8 font-sans text-xl leading-relaxed text-gray-800 max-w-xl"
                        >
                            <p>
                                I am an undergraduate student pursuing a dual majors in <span className="font-bold">Chemical Engineering</span> and <span className="font-bold">Computer Science Engineering</span>.
                            </p>
                            <p>
                                My academic journey is driven by a deep fascination with the interplay between mathematics and coding, and how these disciplines converge to address real-world challenges. I believe that the synergy between Chemical Engineering and Computer Science opens up a world of innovative solutions and I am eager to continue learning and growing in these dynamic fields.
                            </p>
                        </motion.div>
                    </div>


                </div>

                {/* Right Column: Credentials Stack */}
                <div className="flex flex-col justify-center space-y-4">

                    {/* Experience Item */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="group relative bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-black transition-colors duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform">
                                <img src={miamiLogo} alt="University of Miami" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xl font-bold">Applied Machine Learning Intern</h4>
                                <p className="font-sans text-base text-gray-600">University of Miami</p>
                                <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">Summer 2025</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Education Item */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="group relative bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-black transition-colors duration-300"
                    >
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 shrink-0 bg-gray-100 rounded-xl p-2 border border-gray-200 shadow-sm group-hover:scale-105 transition-transform">
                                <img src={iitgnLogo} alt="IIT Gandhinagar" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h4 className="font-sans text-xl font-bold">Bachelor of Technology</h4>
                                <p className="font-sans text-base text-gray-600">IIT Gandhinagar</p>
                                <p className="font-mono text-xs text-gray-400 mt-1 uppercase tracking-wider">2022 - Present</p>
                            </div>
                        </div>
                    </motion.div>



                </div>

            </div>
        </section>
    );
};

export default About;
