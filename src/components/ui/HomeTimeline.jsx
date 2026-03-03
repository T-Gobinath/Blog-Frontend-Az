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

/* Shared Left Column Component */
function YearColumn({ activeIndex, setActiveIndex, setIsPaused, isMobile }) {
    const arrowSize = isMobile ? 20 : 24;
    return (
        <div className={`${isMobile ? 'w-16 sm:w-20' : 'w-36 lg:w-44 xl:w-48'} flex-shrink-0 h-full flex flex-col items-center ${isMobile ? 'pt-8 pb-6' : 'pt-10 pb-8'}`}>

            {/* Up arrow */}
            <button
                onClick={() => { setActiveIndex((prev) => Math.max(prev - 1, 0)); setIsPaused(true); }}
                className="mb-4 text-white/30 hover:text-white/70 transition-colors"
            >
                <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                </svg>
            </button>

            {/* Year list */}
            <div className={`flex-1 flex flex-col justify-between items-start w-full ${isMobile ? 'pl-3 sm:pl-4' : 'pl-32 lg:pl-40'} relative`}>
                {/* Thin vertical line alongside years */}
                <div className={`absolute top-0 bottom-0 ${isMobile ? 'left-2' : 'left-28 lg:left-32'} w-[1px] bg-white/15`}></div>

                {timelineData.map((item, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <button
                            key={index}
                            onClick={() => { setActiveIndex(index); setIsPaused(true); }}
                            className="relative outline-none py-0.5 flex items-center"
                        >
                            {/* Active dot on the line */}
                            {isActive && (
                                <div className={`absolute ${isMobile ? 'left-[-8px]' : 'left-[-13px] lg:left-[-15px]'} w-2 h-2 rounded-full bg-tima-gold shadow-[0_0_8px_rgba(212,175,55,0.6)]`}></div>
                            )}
                            <span className={`font-bold tracking-wide transition-all duration-300 ${isMobile
                                ? `text-sm sm:text-base ${isActive ? 'text-tima-gold text-base sm:text-lg' : 'text-white/50'}`
                                : `text-base lg:text-lg ${isActive ? 'text-tima-gold' : 'text-white/40 hover:text-white/70'}`
                                }`}>
                                {item.year}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Down arrow */}
            <button
                onClick={() => { setActiveIndex((prev) => Math.min(prev + 1, timelineData.length - 1)); setIsPaused(true); }}
                className="mt-4 text-white/30 hover:text-white/70 transition-colors"
            >
                <svg width={arrowSize} height={arrowSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </button>
        </div>
    );
}


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

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-10 pointer-events-none"></div>


            {/* ===================== */}
            {/* MOBILE LAYOUT (<md)   */}
            {/* ===================== */}
            <div className="md:hidden relative z-20 w-full h-full flex">
                <YearColumn activeIndex={activeIndex} setActiveIndex={setActiveIndex} setIsPaused={setIsPaused} isMobile={true} />

                {/* Right Column: Content overlay */}
                <div className="flex-1 flex flex-col justify-center pr-4 pb-24">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            {/* Large Year + Title inline */}
                            <div className="flex items-baseline gap-2 mb-3">
                                <span className="text-[72px] sm:text-[90px] font-black text-transparent bg-clip-text bg-gradient-to-br from-tima-gold/90 to-tima-gold/40 tracking-tighter leading-none">
                                    {currentItem.year}
                                </span>
                                <span className="text-white/30 text-lg">|</span>
                                <span className="text-white/70 text-sm sm:text-base font-light tracking-wide">
                                    {currentItem.title}
                                </span>
                            </div>
                            <p className="text-white/80 text-sm sm:text-base font-light leading-relaxed max-w-xs pr-2">
                                {currentItem.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Pagination — mobile */}
                <div className="absolute bottom-5 left-16 sm:left-20 z-40 flex flex-col gap-2">
                    <div className="text-white/70 font-medium text-xs tracking-widest">
                        {activeIndex + 1} / {timelineData.length}
                    </div>
                    <div className="w-28 h-[2px] bg-white/20 relative rounded-full overflow-hidden">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-tima-gold"
                            animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>
                    <button
                        className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-[10px] uppercase tracking-widest outline-none"
                        onClick={() => setIsPaused(!isPaused)}
                    >
                        <span>{isPaused ? 'Play' : 'Pause'}</span>
                        <span className="font-bold">{isPaused ? '►' : '||'}</span>
                    </button>
                </div>
            </div>


            {/* ================================ */}
            {/* TABLET & DESKTOP LAYOUT (>=md)   */}
            {/* ================================ */}
            <div className="hidden md:flex relative z-20 w-full h-full">
                <YearColumn activeIndex={activeIndex} setActiveIndex={setActiveIndex} setIsPaused={setIsPaused} isMobile={false} />

                {/* Main Content Area */}
                <div className="flex-1 flex flex-col justify-center pl-32 pr-12 lg:pl-48 lg:pr-16 xl:pl-64 xl:pr-20 pb-20">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="max-w-2xl"
                        >
                            {/* Large Year + pipe + Title inline */}
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-[110px] lg:text-[140px] font-black text-transparent bg-clip-text bg-gradient-to-br from-tima-gold/90 to-tima-gold/40 tracking-tighter leading-none">
                                    {currentItem.year}
                                </span>
                                <span className="text-white/25 text-2xl lg:text-3xl font-thin">|</span>
                                <span className="text-white/60 text-lg lg:text-xl font-light tracking-wide">
                                    {currentItem.title}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-white/80 text-base lg:text-lg font-light leading-relaxed max-w-lg ml-1">
                                {currentItem.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Bottom Pagination (Desktop/Tablet) */}
            <div className="hidden md:flex absolute bottom-12 left-48 lg:left-72 xl:left-96 z-40 flex-col gap-2">
                <div className="text-white/60 font-bold text-lg lg:text-xl tracking-widest pl-0.5">
                    {activeIndex + 1}/{timelineData.length}
                </div>
                <div className="w-56 h-[2px] bg-white/20 relative rounded-full overflow-hidden my-1">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-tima-gold"
                        initial={{ width: '0%' }}
                        animate={{ width: `${((activeIndex + 1) / timelineData.length) * 100}%` }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                </div>
                <button
                    className="flex items-center gap-1.5 text-white/50 hover:text-white transition-colors text-sm uppercase tracking-widest outline-none"
                    onClick={() => setIsPaused(!isPaused)}
                >
                    <span>{isPaused ? 'PLAY' : 'PAUSE'}</span>
                    <span className="font-bold">{isPaused ? '►' : '||'}</span>
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
