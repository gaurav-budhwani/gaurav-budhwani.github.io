import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const ProjectPage = () => {
    const { slug } = useParams();

    return (
        <div className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-32 px-6 md:px-24 max-w-4xl mx-auto">
                {/* Header */}
                <div className="border-b border-black pb-8 mb-12">
                    <span className="font-mono text-xs bg-black text-white px-2 py-1 mb-4 inline-block">PROJECT_ID: {slug}</span>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight capitalize">
                        {slug.replace(/-/g, ' ')}
                    </h1>
                </div>

                {/* Content Body */}
                <div className="prose prose-lg font-sans text-gray-800">
                    <p className="lead text-xl font-medium">
                        This is a placeholder for the detailed project documentation. Here we would discuss the problem statement, methodology, and results.
                    </p>
                    <h3>Methodology</h3>
                    <p>
                        Using advanced simulation tools like ASPEN Plus or MATLAB, we modeled the system parameters...
                    </p>
                    <div className="bg-gray-100 p-8 my-8 border-l-4 border-black">
                        <em>"Key insight or quote about the project results goes here."</em>
                    </div>
                    <h3>Results</h3>
                    <p>
                        The optimization led to a 15% increase in efficiency...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
