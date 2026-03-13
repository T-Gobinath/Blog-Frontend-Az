import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const timelineData = [
    {
        year: '1904',
        title: 'The Origin Story',
        description: 'The foundation was laid, setting a new benchmark for corporate excellence and purposeful transformation.',
        image: 'https://images.unsplash.com/photo-1577401239170-897942555fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '1932',
        title: 'Taking Flight',
        description: 'A dedicated focus on aviation and transport connected new regions bridging distances across continents.',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '1945',
        title: 'Scientific Endeavour',
        description: 'A commitment to fundamental research brought forth an era of advanced atomic and scientific exploration.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '1954',
        title: 'Industrial Expansion',
        description: 'Venturing into heavy manufacturing and locomotives accelerated infrastructure development significantly.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '1968',
        title: 'The Digital Frontier',
        description: 'Recognizing the potential of computing, global consultancy services were established early on.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '1991',
        title: 'Global Reforms',
        description: 'Economic liberalization paved the way for massive international expansion and competitive market positioning.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    },
    {
        year: '2025',
        title: 'Future Ready',
        description: 'Driving toward sustainable futures, clean energy adoption, and sophisticated AI-driven transformations.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    }
];

export function HomeTimeline() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-play timer
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % timelineData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                setActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1));
                setIsPaused(true);
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                setActiveIndex((prev) => Math.max(prev - 1, 0));
                setIsPaused(true);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const currentItem = timelineData[activeIndex];

    return (
        <div className="relative w-full h-screen bg-black overflow-hidden font-sans select-none">

            {/* Background Images Layer */}
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0"
                >
                    <img
                        src={currentItem.image}
                        alt={currentItem.title}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Dark Overlays */}
            <div className="absolute inset-0 bg-black/50 z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black/90 via-black/60 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none"></div>

            {/* ===== HORIZONTAL YEAR BAR (Top) ===== */}
            <div className="absolute top-0 left-0 right-0 z-30 pt-16 sm:pt-20 md:pt-24 px-4 sm:px-8 md:px-12 lg:px-16">
                <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto no-scrollbar py-2">
                    {timelineData.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={index}
                                onClick={() => { setActiveIndex(index); setIsPaused(true); }}
                                className="relative flex-shrink-0 outline-none group"
                            >
                                {/* Gold circle ring for active year */}
                                <div
                                    className={`
                                        flex items-center justify-center
                                        w-14 h-14 sm:w-16 sm:h-16 md:w-[4.5rem] md:h-[4.5rem]
                                        rounded-full
                                        transition-all duration-500 ease-out
                                        ${isActive
                                            ? 'border-2 border-tima-gold shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                                            : 'border-2 border-transparent hover:border-white/20'
                                        }
                                    `}
                                >
                                    <span
                                        className={`
                                            font-semibold tracking-wide transition-all duration-400
                                            text-sm sm:text-base md:text-lg
                                            ${isActive
                                                ? 'text-tima-gold'
                                                : 'text-white/50 group-hover:text-white/80'
                                            }
                                        `}
                                    >
                                        {item.year}
                                    </span>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* ===== CONTENT (Bottom-Left) ===== */}
            <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 md:px-14 lg:px-20 pb-12 sm:pb-16 md:pb-20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-xl lg:max-w-2xl"
                    >
                        {/* Large Year Number */}
                        <motion.span
                            className="block text-[64px] sm:text-[100px] md:text-[120px] lg:text-[140px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-tima-gold/80 to-tima-gold/30"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                        >
                            {currentItem.year}
                        </motion.span>

                        {/* Title with Gold Left Border */}
                        <motion.div
                            className="border-l-[3px] border-tima-gold pl-4 sm:pl-5 mt-2 sm:mt-3"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
                        >
                            <h3 className="text-white/90 text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-2 sm:mb-3">
                                {currentItem.title}
                            </h3>
                            <p className="text-white/60 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-md lg:max-w-lg">
                                {currentItem.description}
                            </p>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Thin bottom progress line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 z-30">
                <motion.div
                    className="h-full bg-tima-gold"
                    initial={{ width: '0%' }}
                    animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                />
            </div>

        </div>
    );
}
