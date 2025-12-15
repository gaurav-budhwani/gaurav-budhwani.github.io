import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    "LANGUAGES": ["Python", "C", "C++", "Matlab", "HTML", "CSS", "Javascript", "Sql", "Rust"],
    "ENGINEERING": ["Aspen Plus", "COMSOL", "AutoCAD", "Cantera", "LaTeX", "Adobe Illustrator", "Arduino", "Autodesk Inventor", "Tableau"],
    "DOMAINS": ["Process Optimisation", "CFD", "Heat transfer", "Math Modelling", "Web Dev", "Machine learning", "Data structures and Algorithms"]
};

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 md:px-24 bg-gray-50 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-center"
                    >
                        TECH STACKS
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Object.entries(skills).map(([category, items], idx) => (
                        <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-black/20 transition-all">
                            <h4 className="font-mono text-sm font-bold uppercase tracking-widest mb-6 bg-black text-white inline-block px-3 py-1 rounded">{category}</h4>
                            <div className="flex flex-wrap gap-2">
                                {items.map((skill, i) => (
                                    <span key={i} className="font-sans text-sm font-medium bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
