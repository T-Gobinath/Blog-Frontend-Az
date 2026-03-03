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

    // Keyboard navigation for accessibility
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                setActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1));
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                setActiveIndex((prev) => Math.max(prev - 1, 0));
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
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
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

            {/* Dark Overlay — stronger on mobile for readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-black/20 md:from-black/90 md:via-black/50 md:to-transparent z-10 pointer-events-none"></div>

            {/* ===== MOBILE LAYOUT (below md) ===== */}
            <div className="md:hidden relative z-20 w-full h-full flex flex-col">

                {/* Top: Horizontal year navigation */}
                <div className="flex items-center gap-1 px-4 pt-6 pb-4 overflow-x-auto no-scrollbar">
                    {timelineData.map((item, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsPaused(true);
                                }}
                                className={`flex-shrink-0 px-3 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${isActive
                                        ? 'bg-tima-gold/20 text-tima-gold border border-tima-gold/50'
                                        : 'text-white/40 border border-transparent hover:text-white/70'
                                    }`}
                            >
                                {item.year}
                            </button>
                        );
                    })}
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-center px-6 pb-28">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Year */}
                            <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-tima-gold/90 to-tima-gold/30 tracking-tighter leading-none mb-4">
                                {currentItem.year}
                            </div>

                            {/* Title & Description */}
                            <div className="border-l-2 border-tima-gold pl-4">
                                <h2 className="text-xl sm:text-2xl text-white font-medium tracking-wide mb-2 drop-shadow-md">
                                    {currentItem.title}
                                </h2>
                                <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                                    {currentItem.description}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom controls */}
                <div className="absolute bottom-6 left-6 right-6 z-40 flex items-center gap-4">
                    <div className="text-white/80 font-medium text-xs tracking-widest">
                        {activeIndex + 1}/{timelineData.length}
                    </div>
                    <div className="flex-1 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-tima-gold"
                            animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                    <button
                        className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest outline-none"
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        <span>{isPaused ? 'Play' : 'Pause'}</span>
                        <span className="font-bold">{isPaused ? '►' : '||'}</span>
                    </button>
                </div>
            </div>


            {/* ===== TABLET & DESKTOP LAYOUT (md and above) ===== */}
            <div className="hidden md:grid relative z-20 w-full h-full grid-cols-12 gap-0">

                {/* Left Rail (Timeline Navigation) */}
                <div className="col-span-2 lg:col-span-1 border-r border-white/20 h-full flex flex-col items-center py-[10vh]">

                    <div className="flex-1 flex flex-col justify-between items-center w-full relative">
                        {/* Vertical line */}
                        <div className="absolute top-[2%] bottom-[2%] left-1/2 -translate-x-1/2 w-[1px] bg-white/20 -z-10"></div>

                        {timelineData.map((item, index) => {
                            const isActive = index === activeIndex;
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        setIsPaused(true);
                                    }}
                                    className="relative flex flex-col items-center justify-center group outline-none py-2"
                                >
                                    {/* Dot marker */}
                                    <div
                                        className={`rounded-full transition-all duration-300 z-10 ${isActive
                                            ? 'w-2.5 h-2.5 bg-tima-gold shadow-[0_0_10px_rgba(212,175,55,0.7)]'
                                            : 'w-1.5 h-1.5 bg-white/50 group-hover:bg-white'
                                            }`}
                                    ></div>

                                    {/* Year text */}
                                    <span
                                        className={`absolute left-8 lg:left-7 text-xs lg:text-sm font-semibold tracking-wider transition-colors duration-300 whitespace-nowrap ${isActive ? 'text-tima-gold' : 'text-white/40 group-hover:text-white'
                                            }`}
                                    >
                                        {item.year}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="col-span-10 lg:col-span-11 flex flex-col justify-center px-10 md:px-16 lg:px-24 xl:px-32">

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-2xl relative"
                        >
                            {/* Massive Year Display */}
                            <div className="text-[100px] md:text-[130px] lg:text-[180px] font-black text-transparent bg-clip-text bg-gradient-to-br from-tima-gold/90 to-tima-gold/30 tracking-tighter drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] leading-none mb-6">
                                {currentItem.year}
                            </div>

                            {/* Title & Description */}
                            <div className="flex border-l-2 border-tima-gold pl-6 flex-col">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl text-white font-medium tracking-wide mb-4 drop-shadow-md">
                                    {currentItem.title}
                                </h2>
                                <p className="text-base md:text-lg lg:text-xl text-gray-300 font-light leading-relaxed max-w-xl pr-4">
                                    {currentItem.description}
                                </p>
                            </div>

                        </motion.div>
                    </AnimatePresence>

                </div>

            </div>

            {/* Bottom Left Pagination & Controls (Tablet/Desktop only) */}
            <div className="hidden md:flex absolute bottom-8 left-[18%] lg:left-[12%] z-40 flex-col gap-3">

                {/* Index Indicator */}
                <div className="text-white/80 font-medium text-sm tracking-widest pl-1">
                    {activeIndex + 1}/{timelineData.length}
                </div>

                {/* Local Progress Bar */}
                <div className="w-48 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-tima-gold"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>

                {/* Pause / Play Button */}
                <button
                    className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs uppercase tracking-widest mt-1 group outline-none"
                    onClick={() => setIsPaused(!isPaused)}
                >
                    <span className="transition-colors w-10 text-left">
                        {isPaused ? 'Play' : 'Pause'}
                    </span>
                    <span className={`font-bold transition-all ${isPaused ? 'translate-x-1' : ''}`}>
                        {isPaused ? '►' : '||'}
                    </span>
                </button>
            </div>

            {/* Global Bottom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
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
