import React from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { allProjects } from '../data/projects';

const Blog = () => {
    return (
        <div className="bg-white min-h-screen bg-grid">
            <Navbar />
            <div className="pt-32 px-6 md:px-24 max-w-[1400px] mx-auto pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-8">WORK ARCHIVE</h1>
                    <p className="font-mono text-sm text-gray-500 mb-16 max-w-xl">
                        A comprehensive logic of my engineering and software endeavors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-black/10 pt-16">
                    {allProjects.map((project, index) => (
                        <Link key={index} to={project.link} className="group block">
                            <div className="relative overflow-hidden mb-6 bg-gray-50 aspect-[4/3] border border-gray-200 rounded-lg">
                                <div className="absolute top-2 left-2 z-10 font-mono text-[10px] bg-white px-2 py-1 border border-black/10 shadow-sm uppercase tracking-wider">
                                    {project.category}
                                </div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain p-4 transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                            </div>
                            <div className="mt-4">
                                <h2 className="font-serif text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">{project.title}</h2>
                                <p className="font-mono text-xs text-gray-400 mt-2">{project.subtitle}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
