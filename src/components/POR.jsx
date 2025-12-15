import React from 'react';

const pors = [
    {
        title: "Undergraduate Teaching Assistant",
        organization: "Engineering Optimisation",
        period: "Aug '25 - Nov '25",
        description: "Conducted weekly tutorial sessions, mentored students on assignments and projects, clarified optimization concepts, and provided structured feedback to improve problem-solving and implementation quality."
    },
    {
        title: "Design Team Member",
        organization: "Amalthea ’23 (Annual Tech Summit)",
        period: "Dec '22 - Feb '24",
        description: "Developed and executed visually compelling social media content for diverse platforms using Adobe Illustrator, Canva, and other graphic design tools."
    },
    {
        title: "Team Member",
        organization: "Vinteo (Film Making Club)",
        period: "Jul '24 - May '25",
        description: "Contributed to a short film’s production, handling concept development, and filming. Ensured smooth execution."
    },
    {
        title: "Team Member",
        organization: "MAPRC (Public Relations Committee)",
        period: "Jul '24 - May '25",
        description: "Designer for 'ETHEREAL,' IIT Gandhinagar’s official monthly magazine, crafting visuals to showcase campus life, student achievements, events, and engaging stories."
    }
];

const POR = () => {
    return (
        <section id="por" className="py-20 px-6 md:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <h3 className="font-sans text-3xl font-bold mb-12 text-black text-center">PORs</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pors.map((por, index) => (
                        <div key={index} className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="flex justify-between items-start mb-4">
                                <h4 className="font-sans text-xl font-bold text-black">{por.title}</h4>
                                <span className="font-sans text-xs font-bold bg-black text-white px-2 py-1 rounded">{por.period}</span>
                            </div>
                            <p className="font-sans text-base font-medium text-gray-700 mb-2 uppercase tracking-wide">{por.organization}</p>
                            <p className="font-sans text-sm text-gray-600 leading-relaxed">{por.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default POR;
