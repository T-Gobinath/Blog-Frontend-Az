import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import scrolledLogo from '../../assets/Logo1.png'; // Import the TIMA scrolled logo

const features = [
    {
        id: 'manufacturing',
        title: 'Precision Manufacturing',
        desc: 'Advanced CNC machining and fabrication for aerospace and automotive sectors.',
        icon: (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'automation',
        title: 'Industrial Automation',
        desc: 'Smart factory solutions integrating robotics and IoT for maximized efficiency.',
        icon: (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <path d="M4 12h16M12 4v16" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    },
    {
        id: 'software',
        title: 'Enterprise Software',
        desc: 'Custom enterprise resource planning and cloud architectures.',
        icon: (
            <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
        ),
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    }
];

export function FeatureShowcase() {
    const [active, setActive] = useState(0);

    // Auto rotate
    useEffect(() => {
        const timer = setInterval(() => {
            setActive((prev) => (prev + 1) % features.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 sm:py-32 overflow-hidden font-sans border-t border-white/5">
            {/* Ambient glows behind the component */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-tima-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[150px] pointer-events-none"></div>

            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-10">
                
                {/* Reference screenshot rounded container box */}
                <div className="relative bg-[#0a0a0a] border border-white/[0.04] rounded-[2rem] p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 shadow-2xl overflow-hidden">
                    
                    {/* Warm background glow from bottom left to match screenshot */}
                    <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_bottom_left,rgba(168,135,70,0.3)_0%,rgba(0,0,0,0)_70%)] pointer-events-none"></div>

                    {/* LEFT COLUMN: Text Content */}
                    <div className="relative z-10 w-full lg:w-5/12 flex flex-col items-center text-center">
                        {/* Pill badge */}
                        <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 text-xs sm:text-[13px] text-white/50 font-medium mb-10 sm:mb-14 bg-white/[0.02]">
                            <svg className="w-3.5 h-3.5 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            <span>Trusted by <span className="text-white">industry leaders</span> worldwide</span>
                            <svg className="w-3.5 h-3.5 opacity-80 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                        </div>

                        {/* Large Number */}
                        <h2 className="text-6xl sm:text-7xl md:text-[5.5rem] font-semibold text-white tracking-tight mb-4 flex items-baseline justify-center gap-2">
                            100 <span className="text-4xl text-white">+</span>
                        </h2>

                        <p className="text-[#a0a0a0] text-sm sm:text-[15px] mb-16 sm:mb-24">
                            Precision components & enterprise solutions delivered
                        </p>

                        {/* Logo Footer */}
                        <div className="flex items-center justify-center gap-4 text-4xl sm:text-5xl md:text-[3.5rem] font-bold tracking-tighter text-white">
                            <img 
                                src={scrolledLogo} 
                                alt="TIMA Logo" 
                                className="h-14 sm:h-16 md:h-20 opacity-90 brightness-0 invert object-contain"
                            />
                            <span>TIMA</span>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Interactive Cards */}
                    <div className="w-full lg:w-7/12 relative h-[350px] sm:h-[400px] md:h-[450px] mt-10 lg:mt-0 flex items-center justify-center lg:justify-end perspective-[2000px]">
                        <div className="relative w-full max-w-[420px] h-[300px] sm:h-[350px] md:h-[380px] mt-16 sm:mt-24 lg:mt-32">
                            {features.map((feature, idx) => {
                                // Calculate offset distance: 0 is front, 1 is next, 2 is behind that
                                const offset = (idx - active + features.length) % features.length;
                                
                                return (
                                    <motion.div
                                        key={feature.id}
                                        className="absolute bottom-0 left-0 w-full h-[280px] sm:h-[340px] md:h-[360px] bg-[#1a1a1a] border border-white/[0.08] rounded-[24px] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] cursor-pointer"
                                        initial={false}
                                        animate={{
                                            zIndex: features.length - offset,
                                            scale: 1 - offset * 0.05,
                                            x: typeof window !== 'undefined' && window.innerWidth < 640 ? offset * 12 : offset * 25, // Responsive X offset
                                            y: typeof window !== 'undefined' && window.innerWidth < 640 ? offset * -35 : offset * -65, // Responsive Y offset
                                            rotate: -5,
                                            opacity: 1 - offset * 0.15,
                                        }}
                                        transition={{ 
                                            type: "spring",
                                            stiffness: 70,
                                            damping: 15,
                                            mass: 0.8
                                        }}
                                        onClick={() => setActive(idx)}
                                    >
                                        {/* Card Header */}
                                        <div className="h-[90px] sm:h-[105px] px-5 sm:px-6 border-b border-black/50 flex items-center gap-4 bg-[#141414]">
                                            <div className="w-6 h-6 sm:w-7 sm:h-7 text-white shrink-0">
                                                {feature.icon}
                                            </div>
                                            <div className="flex-1 pr-2 pt-1">
                                                <h3 className="text-white font-semibold text-[15px] sm:text-[17px] tracking-tight leading-tight mb-1">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-[#999999] text-[12px] sm:text-[14px] leading-snug">
                                                    {feature.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Card Image */}
                                        <div className="absolute inset-x-0 bottom-0 top-[90px] sm:top-[105px]">
                                            <img 
                                                src={feature.image} 
                                                alt={feature.title} 
                                                className="w-full h-full object-cover object-top opacity-90 transition-opacity duration-300 pointer-events-none"
                                            />
                                            {/* Gradient fade to black at bottom */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
