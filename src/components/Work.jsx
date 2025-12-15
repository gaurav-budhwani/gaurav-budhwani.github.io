import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cseProjects } from '../data/projects';

const Work = () => {
    // Only showing CSE projects on Home Page per request
    const projects = cseProjects;

    return (
        <section id="projects" className="py-24 px-6 md:px-12 bg-white border-t border-black/5">
            <div className="max-w-7xl mx-auto">

                <div className="flex items-center gap-4 mb-16">
                    <h2 className="font-serif text-4xl font-bold tracking-tight">PROJECTS</h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {projects.map((project, index) => (
                        <Link
                            key={index}
                            to={project.link}
                            className="group block cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden mb-6 bg-gray-50 aspect-[4/3] border border-gray-100 rounded-lg group-hover:shadow-md transition-shadow">
                                <div className="absolute top-3 left-3 z-10 font-mono text-[10px] bg-white px-3 py-1.5 border border-gray-200 shadow-sm rounded-full font-bold uppercase tracking-wider text-black">
                                    {project.subtitle}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                            </div>

                            {/* Caption */}
                            <div className="border-l-2 border-transparent group-hover:border-black pl-0 group-hover:pl-4 transition-all duration-300">
                                <h3 className="font-serif text-2xl font-bold leading-tight mb-3 group-hover:text-gray-600 transition-colors">{project.title}</h3>
                                <p className="font-sans text-sm text-gray-700 leading-relaxed font-medium">
                                    {project.description}
                                </p>
                                <div className="mt-4 font-mono text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                                    View Project <span>&rarr;</span>
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Work;
