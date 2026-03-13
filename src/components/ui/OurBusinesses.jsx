import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ── Topic Data ── */
const leftTopics = [
    {
        id: 'materials',
        label: 'Materials',
        abstract: 'We source and process high-grade raw materials to fuel precision manufacturing. Our materials division ensures quality inputs for every product line, meeting stringent industrial certifications.',
        image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'die-making',
        label: 'Die Making',
        abstract: 'Expert die design and fabrication for high-volume production runs. We build precision stamping, forging and casting dies engineered for durability and micron-level accuracy.',
        image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'cnc-machining',
        label: 'CNC Machining',
        abstract: 'Multi-axis CNC milling and turning with tolerances down to ±0.01mm. Our automated machining cells deliver complex geometries at scale with repeatable precision.',
        image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'laser-cutting',
        label: 'Laser Cutting & Engraving',
        abstract: 'High-powered fiber and CO₂ laser systems for clean, burr-free cuts on metals, plastics and composites. Ideal for intricate designs and rapid prototyping.',
        image: 'https://images.unsplash.com/photo-1635348729498-ef4a0218e7d0?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'metal-fabrication',
        label: 'Light Metal Fabrication',
        abstract: 'Specializing in aluminum, stainless steel & titanium fabrication — from sheet metal bending to welding — for lightweight structural components across industries.',
        image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'tool-design',
        label: 'Tool Design',
        abstract: 'Custom tooling solutions designed with CAD/CAM software and validated through simulation. We engineer jigs, fixtures, and molds that maximize production efficiency.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'injection-molding',
        label: 'Injection Molding',
        abstract: 'Thermoplastic and thermoset injection molding with multi-cavity molds for high-volume production. From design to delivery, we handle the complete molding lifecycle.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'prototype-dev',
        label: 'Prototype Development',
        abstract: 'Rapid prototyping using 3D printing, CNC, and soft tooling. We accelerate your product development cycle from concept to functional prototype in days, not weeks.',
        image: 'https://images.unsplash.com/photo-1631281956016-3219b63a61b5?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'pcb-embedded',
        label: 'PCB & Embedded Systems',
        abstract: 'End-to-end PCB design, manufacturing and embedded firmware development. We build the electronic brains that power smart devices and industrial IoT applications.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'medical-mfg',
        label: 'Medical Grade Manufacturing',
        abstract: 'ISO 13485-compliant manufacturing of surgical instruments, implants and diagnostic device components. Precision and traceability are at the core of our medical production.',
        image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
    },
];

const rightTopics = [
    {
        id: 'software-dev',
        label: 'Software Development',
        abstract: 'Custom enterprise software built with modern architectures — microservices, cloud-native, and AI-powered. We turn complex business requirements into scalable, reliable software solutions.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'web-ecommerce',
        label: 'Web & E-Commerce',
        abstract: 'Full-stack web platforms and e-commerce solutions with seamless payment integration, inventory management, and conversion-optimized user experiences that drive revenue growth.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'apps-automation',
        label: 'Apps & Automation',
        abstract: 'Mobile and desktop applications paired with intelligent workflow automation. We reduce manual effort and operational costs through RPA, AI agents, and custom integrations.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'cloud-infra',
        label: 'Cloud & Infrastructure',
        abstract: 'Architecting and managing cloud infrastructure on AWS, Azure, and GCP. From migration to optimization, we ensure your systems are secure, resilient, and cost-effective.',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    },
    {
        id: 'support-services',
        label: 'Support Services',
        abstract: 'Round-the-clock technical support with dedicated account management. Our team provides on-site installation, post-deployment monitoring, and continuous improvement programs.',
        image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80',
    },
];

/* ── Description Panel with Image ── */
function DescriptionPanel({ topic }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="absolute inset-0 flex flex-row rounded-xl overflow-hidden border border-white/10"
        >
            {/* Left Half — Content */}
            <div className="w-1/2 bg-[#0c0c0c] p-6 sm:p-8 flex flex-col justify-center relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3">
                    {topic.label}
                </h3>
                <div className="w-10 h-[2px] bg-tima-gold rounded-full mb-5"></div>
                <p className="text-white/60 text-sm sm:text-[15px] leading-relaxed mb-6">
                    {topic.abstract}
                </p>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 border border-tima-gold/50 text-tima-gold rounded-full px-5 py-2 text-sm hover:bg-tima-gold/10 hover:border-tima-gold transition-all duration-300 group self-start"
                >
                    read more
                    <svg
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"
                        className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                        <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                </a>
            </div>

            {/* Right Half — Image */}
            <div className="w-1/2 relative overflow-hidden">
                <motion.img
                    key={topic.id}
                    src={topic.image}
                    alt={topic.label}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                {/* Gradient blending into left side */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent w-1/3"></div>
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/20"></div>
            </div>
        </motion.div>
    );
}

/* ── Topic Button ── */
function TopicButton({ topic, isActive, onHover, accentColor }) {
    return (
        <button
            onMouseEnter={onHover}
            className={`
                text-left w-full px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg
                border transition-all duration-300 outline-none
                ${isActive
                    ? 'bg-white/[0.08] border-white/15 shadow-lg'
                    : 'bg-transparent border-transparent hover:bg-white/[0.04] hover:border-white/8'
                }
            `}
        >
            <div className="flex items-center gap-3">
                <div
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-300 ${isActive ? 'scale-125' : 'scale-100 opacity-40'}`}
                    style={{ backgroundColor: accentColor }}
                />
                <span
                    className={`text-sm sm:text-[15px] font-medium tracking-wide transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50'}`}
                >
                    {topic.label}
                </span>
            </div>
            <div className="mt-1.5 ml-[18px] h-[1.5px] bg-white/5 rounded-full overflow-hidden">
                <motion.div
                    className="h-full rounded-full"
                    style={{ backgroundColor: accentColor }}
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                />
            </div>
        </button>
    );
}

/* ── Main Component ── */
export function OurBusinesses() {
    // Manufacturing carousel state
    const [mfgIndex, setMfgIndex] = useState(0);
    const [mfgPaused, setMfgPaused] = useState(false);
    const mfgTimerRef = useRef(null);

    const goMfgNext = useCallback(() => {
        setMfgIndex((prev) => (prev + 1) % leftTopics.length);
    }, []);

    const goMfgPrev = useCallback(() => {
        setMfgIndex((prev) => (prev - 1 + leftTopics.length) % leftTopics.length);
    }, []);

    // Auto-rotate Manufacturing every 4 seconds
    useEffect(() => {
        if (mfgPaused) return;
        mfgTimerRef.current = setInterval(goMfgNext, 4000);
        return () => clearInterval(mfgTimerRef.current);
    }, [mfgPaused, goMfgNext]);

    // IT Solutions carousel state
    const [itIndex, setItIndex] = useState(0);
    const [itPaused, setItPaused] = useState(false);
    const itTimerRef = useRef(null);

    const goNext = useCallback(() => {
        setItIndex((prev) => (prev + 1) % rightTopics.length);
    }, []);

    const goPrev = useCallback(() => {
        setItIndex((prev) => (prev - 1 + rightTopics.length) % rightTopics.length);
    }, []);

    // Auto-rotate IT Solutions every 4 seconds
    useEffect(() => {
        if (itPaused) return;
        itTimerRef.current = setInterval(goNext, 4000);
        return () => clearInterval(itTimerRef.current);
    }, [itPaused, goNext]);

    const currentMfgTopic = leftTopics[mfgIndex];
    const currentItTopic = rightTopics[itIndex];

    return (
        <section
            className="relative w-full bg-[#0a0a0a] overflow-hidden font-sans"
        >
            {/* Subtle grid */}
            <div
                className="absolute inset-0 opacity-[0.025] pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Ambient glows */}
            <div className="absolute top-1/3 left-0 w-[350px] h-[350px] bg-tima-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 text-center pt-14 sm:pt-18 md:pt-20 pb-8 sm:pb-10 px-4">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-tima-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-3"
                >
                    What We Do
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Our Businesses
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-[3px] bg-gradient-to-r from-tima-gold to-tima-gold/30 mx-auto mt-4 rounded-full"
                />
            </div>

            {/* Two-Sided Interactive Layout */}
            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 md:px-10 pb-14 sm:pb-18 md:pb-20">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0">

                    {/* ── LEFT COLUMN — Manufacturing Carousel ── */}
                    <div className="flex-1 relative">
                        {/* Column Header */}
                        <div className="px-4 sm:px-5 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-tima-gold/80"></span>
                                Manufacturing
                            </h3>
                            <p className="text-white/35 text-xs sm:text-sm mt-1 ml-5">Precision Engineering & Production</p>
                        </div>

                        <div
                            className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[480px]"
                            onMouseEnter={() => setMfgPaused(true)}
                            onMouseLeave={() => setMfgPaused(false)}
                            onTouchStart={() => setMfgPaused(true)}
                            onTouchEnd={() => setMfgPaused(false)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentMfgTopic.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="absolute inset-0 flex flex-col sm:flex-row rounded-xl overflow-hidden border border-white/10"
                                >
                                    <div className="w-full sm:w-1/2 bg-[#0c0c0c] p-5 pb-16 sm:p-6 md:p-8 flex flex-col justify-center relative z-10 order-2 sm:order-1">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                                            {currentMfgTopic.label}
                                        </h3>
                                        <div className="w-10 h-[2px] bg-tima-gold rounded-full mb-3 sm:mb-5"></div>
                                        <p className="text-white/60 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                                            {currentMfgTopic.abstract}
                                        </p>
                                        <Link
                                            to={`/manufacturing/${currentMfgTopic.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '')}`}
                                            className="animated-button self-start"
                                        >
                                            <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                ></path>
                                            </svg>
                                            <span className="text">read more</span>
                                            <span className="circle"></span>
                                            <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>

                                    {/* Image */}
                                    <div className="w-full h-[180px] sm:h-auto sm:w-1/2 relative overflow-hidden order-1 sm:order-2">
                                        <motion.img
                                            key={currentMfgTopic.id + '-img'}
                                            src={currentMfgTopic.image}
                                            alt={currentMfgTopic.label}
                                            className="w-full h-full object-cover"
                                            initial={{ scale: 1.1, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{ duration: 0.6, ease: 'easeOut' }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent w-1/3 hidden sm:block"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]/80 sm:hidden"></div>
                                        <div className="absolute inset-0 bg-black/20"></div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:gap-3 z-20">
                                {/* Topic indicator dots */}
                                <div className="flex items-center gap-1 sm:gap-1.5 mr-1 sm:mr-2">
                                    {leftTopics.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setMfgIndex(i)}
                                            className={`block rounded-full flex-shrink-0 transition-all duration-300 ${i === mfgIndex
                                                ? 'w-[20px] h-[6px] bg-tima-gold'
                                                : 'w-[6px] h-[6px] bg-white/25 hover:bg-white/40'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Previous Button */}
                                <button
                                    onClick={goMfgPrev}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Previous topic"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5m7-7l-7 7 7 7" />
                                    </svg>
                                </button>

                                {/* Forward Button */}
                                <button
                                    onClick={goMfgNext}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Next topic"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ── CENTER DIVIDER ── */}
                    <div className="hidden lg:flex items-stretch justify-center px-4 xl:px-6">
                        <div className="w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
                    </div>

                    {/* ── RIGHT COLUMN — IT Solutions Carousel ── */}
                    <div className="flex-1 relative">
                        {/* Column Header */}
                        <div className="px-4 sm:px-5 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-blue-500/80"></span>
                                IT Solutions
                            </h3>
                            <p className="text-white/35 text-xs sm:text-sm mt-1 ml-5">Digital Innovation & Technology</p>
                        </div>

                        <div
                            className="relative min-h-[360px] sm:min-h-[420px] md:min-h-[480px]"
                            onMouseEnter={() => setItPaused(true)}
                            onMouseLeave={() => setItPaused(false)}
                            onTouchStart={() => setItPaused(true)}
                            onTouchEnd={() => setItPaused(false)}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentItTopic.id}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    transition={{ duration: 0.35, ease: 'easeOut' }}
                                    className="absolute inset-0 flex flex-col sm:flex-row rounded-xl overflow-hidden border border-white/10"
                                >
                                    <div className="w-full sm:w-1/2 bg-[#0c0c0c] p-5 pb-16 sm:p-6 md:p-8 flex flex-col justify-center relative z-10 order-2 sm:order-1">
                                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight mb-2 sm:mb-3">
                                                {currentItTopic.label}
                                            </h3>
                                        <div className="w-10 h-[2px] bg-tima-gold rounded-full mb-3 sm:mb-5"></div>
                                        <p className="text-white/60 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4 sm:mb-6 line-clamp-4 sm:line-clamp-none">
                                                {currentItTopic.abstract}
                                            </p>
                                            <Link
                                                to={`/it-solutions/${currentItTopic.label.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '')}`}
                                                className="animated-button self-start"
                                            >
                                                <svg viewBox="0 0 24 24" className="arr-2" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                    ></path>
                                                </svg>
                                                <span className="text">read more</span>
                                                <span className="circle"></span>
                                                <svg viewBox="0 0 24 24" className="arr-1" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                    ></path>
                                                </svg>
                                            </Link>
                                        </div>

                                    {/* Image */}
                                    <div className="w-full h-[180px] sm:h-auto sm:w-1/2 relative overflow-hidden order-1 sm:order-2">
                                            <motion.img
                                                key={currentItTopic.id + '-img'}
                                                src={currentItTopic.image}
                                                alt={currentItTopic.label}
                                                className="w-full h-full object-cover"
                                                initial={{ scale: 1.1, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                transition={{ duration: 0.6, ease: 'easeOut' }}
                                            />
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-transparent w-1/3 hidden sm:block"></div>
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c0c]/80 sm:hidden"></div>
                                        <div className="absolute inset-0 bg-black/20"></div>
                                        </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* Navigation Buttons */}
                            <div className="absolute bottom-4 right-4 flex items-center gap-2 sm:gap-3 z-20">
                                {/* Topic indicator dots */}
                                <div className="flex items-center gap-1 sm:gap-1.5 mr-1 sm:mr-2">
                                    {rightTopics.map((_, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setItIndex(i)}
                                            className={`block rounded-full flex-shrink-0 transition-all duration-300 ${i === itIndex
                                                ? 'w-[20px] h-[6px] bg-tima-gold'
                                                : 'w-[6px] h-[6px] bg-white/25 hover:bg-white/40'
                                            }`}
                                        />
                                    ))}
                                </div>

                                {/* Previous Button */}
                                <button
                                    onClick={goPrev}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Previous topic"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 12H5m7-7l-7 7 7 7" />
                                    </svg>
                                </button>

                                {/* Forward Button */}
                                <button
                                    onClick={goNext}
                                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                                    aria-label="Next topic"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14m-7-7l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
