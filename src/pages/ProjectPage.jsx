import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { allProjects } from '../data/projects';
import { motion } from 'framer-motion';
import NotebookRenderer from '../components/NotebookRenderer';
import ReactMarkdown from 'react-markdown';

const ProjectPage = () => {
    const { slug } = useParams();

    // Find project by slug
    // Note: We need to make sure other projects have a 'slug' field or we derive it
    // For now we match explicitly or by verifying the link structure if needed.
    // Ideally we add 'slug' to all projects, but for this specific request we focus on TCP.
    // Let's deduce slug from link if slug property isn't explicitly there for others yet.
    const project = allProjects.find(p => p.slug === slug || p.link === `/project/${slug}`);

    if (!project) {
        return <div className="min-h-screen bg-white flex items-center justify-center font-serif text-2xl">Project not found</div>;
    }

    return (
        <div className="bg-white min-h-screen selection:bg-black selection:text-white">
            <Navbar />
            <div className="pt-32 px-6 md:px-24 max-w-5xl mx-auto pb-24">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="border-b border-black/10 pb-12 mb-12"
                >
                    <div className="flex flex-wrap gap-3 mb-6">
                        <span className="font-mono text-xs font-bold bg-black text-white px-3 py-1 uppercase tracking-widest rounded-full">
                            {project.category || "PROJECT"}
                        </span>
                        {project.techStack && project.techStack.map((tech, i) => (
                            <span key={i} className="font-mono text-xs font-medium bg-gray-100 text-gray-800 px-3 py-1 uppercase tracking-wide rounded-full border border-gray-200">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                        {project.title}
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed">
                        {project.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 mt-8">
                        {project.reportUrl && (
                            <a
                                href={project.reportUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                            >
                                Download Report <span>↓</span>
                            </a>
                        )}
                        {project.repoUrl && (
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-gray-50 transition-colors"
                            >
                                View Code <span>→</span>
                            </a>
                        )}
                        {project.presentationUrl && (
                            <a
                                href={project.presentationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-gray-50 transition-colors"
                            >
                                View PPT <span>→</span>
                            </a>
                        )}
                        {project.videoUrl && (
                            <a
                                href={project.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-mono text-sm font-bold uppercase tracking-wider border-2 border-black hover:bg-gray-50 transition-colors"
                            >
                                View Setup <span>→</span>
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Content Body */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content */}
                    <div className={`${project.fullWidth ? 'lg:col-span-12' : 'lg:col-span-8'} prose prose-lg font-sans text-gray-800 prose-code:text-cyan-600 prose-code:bg-cyan-50 prose-code:font-bold prose-code:px-1 prose-code:rounded prose-img:rounded-xl prose-img:shadow-lg prose-headings:font-serif`}>
                        {project.longDescription && (
                            <div className="mb-12">
                                <h3 className="font-serif text-2xl font-bold mb-4">Overview</h3>
                                <div className="leading-relaxed text-gray-600 blogger-content">
                                    <ReactMarkdown
                                        components={{
                                            img: ({ node, ...props }) => (
                                                <figure className="my-12">
                                                    <img {...props} className="w-full rounded-xl shadow-lg border border-gray-100" />
                                                    {props.alt && (
                                                        <figcaption className="text-center text-sm text-gray-400 mt-3 font-mono">
                                                            {props.alt}
                                                        </figcaption>
                                                    )}
                                                </figure>
                                            ),
                                            code: ({ node, inline, className, children, ...props }) => (
                                                <code className="bg-cyan-50 text-cyan-700 px-1.5 py-0.5 rounded font-mono text-sm font-bold" {...props}>
                                                    {children}
                                                </code>
                                            ),
                                            blockquote: ({ node, ...props }) => (
                                                <blockquote className="border-l-4 border-black pl-6 italic text-gray-700 my-8 py-2 bg-gray-50 rounded-r-lg" {...props} />
                                            ),
                                            h2: ({ node, ...props }) => (
                                                <h2 className="font-serif text-3xl font-bold text-black mt-16 mb-6" {...props} />
                                            ),
                                            h3: ({ node, ...props }) => (
                                                <h3 className="font-serif text-2xl font-bold text-black mt-12 mb-4" {...props} />
                                            ),
                                            p: ({ node, ...props }) => (
                                                <p className="mb-6 leading-8 text-lg" {...props} />
                                            ),
                                            ul: ({ node, ...props }) => (
                                                <ul className="list-disc list-inside space-y-2 mb-8 ml-4 marker:text-cyan-600" {...props} />
                                            ),
                                        }}
                                    >
                                        {project.longDescription}
                                    </ReactMarkdown>
                                </div>
                            </div>
                        )}

                        {project.features && (
                            <div className="mb-12">
                                <h3 className="font-serif text-2xl font-bold mb-4">Key Features</h3>
                                <ul className="space-y-2 list-disc list-inside text-gray-600 marker:text-black">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Notebook Renderer */}
                        {project.notebookData && (
                            <div className="mt-16 pt-16 border-t border-black/10">
                                <h3 className="font-serif text-2xl font-bold mb-8">Detailed Analysis (Jupyter Notebook)</h3>
                                <NotebookRenderer data={project.notebookData} />
                            </div>
                        )}
                    </div>

                    {/* Sidebar / Image (Hidden if fullWidth is true) */}
                    {!project.fullWidth && (
                        <div className="lg:col-span-4">
                            <div className="sticky top-32">
                                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-auto object-contain rounded-lg shadow-sm bg-white p-2 border border-gray-100"
                                    />
                                    <p className="font-mono text-xs text-center text-gray-400 mt-4 uppercase tracking-widest">
                                        Project Preview
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
