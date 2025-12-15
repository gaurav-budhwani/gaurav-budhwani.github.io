import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    const links = [
        { name: 'About', path: '/#about' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/#contact' }
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="w-full px-16 md:px-24 h-24 flex justify-between items-center">

                {/* Invisible Logo Area */}
                <Link to="/" className="font-serif font-bold text-2xl tracking-tighter text-black hover:opacity-70 transition-opacity">
                    GB.
                </Link>

                {/* Top Right Tabs - Larger & Visible */}
                <div className="flex gap-16 items-center bg-gray-200/30 backdrop-blur-xl px-16 py-4 rounded-full border border-white/20 shadow-lg ring-1 ring-black/5">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="font-mono text-sm uppercase tracking-widest font-bold text-black/80 hover:text-black transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
