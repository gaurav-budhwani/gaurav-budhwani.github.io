import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    // Scroll Opacity Logic
    const { scrollY } = useScroll();
    const logoOpacity = useTransform(scrollY, [0, 100], [1, 0]);

    // Define navigation items with types
    const navItems = [
        { name: 'About', type: 'scroll', target: 'about' },
        { name: 'Publications', type: 'scroll', target: 'publications' },
        { name: 'Projects', type: 'scroll', target: 'projects' },
        { name: 'Skills', type: 'scroll', target: 'skills' },
        { name: 'Blog', type: 'route', path: '/blog' },
        { name: 'Contact', type: 'scroll', target: 'contact' }
    ];

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    // Handle Navigation Logic
    const handleNavigation = (item) => {
        setIsOpen(false); // Close mobile menu

        if (item.type === 'route') {
            navigate(item.path);
        } else if (item.type === 'scroll') {
            if (location.pathname !== '/') {
                navigate('/', { state: { scrollTo: item.target } });
                setTimeout(() => {
                    const element = document.getElementById(item.target);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.getElementById(item.target);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="w-full px-6 md:px-24 h-24 flex justify-between items-center bg-transparent relative z-50">

                {/* Logo */}
                <motion.div style={{ opacity: logoOpacity }} className="z-50">
                    <Link to="/" className="font-serif font-bold text-2xl tracking-tighter text-black hover:opacity-70 transition-opacity">
                        GB.
                    </Link>
                </motion.div>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-16 items-center bg-gray-200/30 backdrop-blur-xl px-16 py-4 rounded-full border border-white/20 shadow-lg ring-1 ring-black/5">
                    {navItems.map((item) => (
                        <button
                            key={item.name}
                            onClick={() => handleNavigation(item)}
                            className="font-mono text-sm uppercase tracking-widest font-bold text-black/80 hover:text-black transition-colors relative group bg-transparent border-none cursor-pointer"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </button>
                    ))}
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-50 p-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5"
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-0.5 bg-black transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </div>
                </button>

            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center md:hidden"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navItems.map((item) => (
                                <button
                                    key={item.name}
                                    onClick={() => handleNavigation(item)}
                                    className="font-serif text-4xl font-bold text-black hover:text-gray-600 transition-colors bg-transparent border-none"
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
