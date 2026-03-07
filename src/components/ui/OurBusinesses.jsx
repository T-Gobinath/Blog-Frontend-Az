import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [hoveredSide, setHoveredSide] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const hoveredTopic = hoveredSide === 'left'
        ? leftTopics[hoveredIndex]
        : hoveredSide === 'right'
            ? rightTopics[hoveredIndex]
            : null;

    return (
        <section
            className="relative w-full bg-[#0a0a0a] overflow-hidden font-sans"
            onMouseLeave={() => { setHoveredSide(null); setHoveredIndex(null); }}
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
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 min-h-[580px]">

                    {/* ── LEFT COLUMN ── */}
                    <div className="flex-1 relative">
                        {/* Column Header */}
                        <div className="px-4 sm:px-5 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-tima-gold/80"></span>
                                Manufacturing
                            </h3>
                            <p className="text-white/35 text-xs sm:text-sm mt-1 ml-5">Precision Engineering & Production</p>
                        </div>

                        <div className="relative min-h-[480px]">
                            {/* Buttons — hidden when right side is hovered */}
                            <div className={`transition-all duration-300 ${hoveredSide === 'right' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <div className="flex flex-col gap-0.5">
                                    {leftTopics.map((topic, i) => (
                                        <TopicButton
                                            key={topic.id}
                                            topic={topic}
                                            isActive={hoveredSide === 'left' && hoveredIndex === i}
                                            onHover={() => { setHoveredSide('left'); setHoveredIndex(i); }}
                                            accentColor="#D4AF37"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Description Panel with Image (when RIGHT topic is hovered) */}
                            <AnimatePresence mode="wait">
                                {hoveredSide === 'right' && hoveredTopic && (
                                    <DescriptionPanel topic={hoveredTopic} />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* ── CENTER DIVIDER ── */}
                    <div className="hidden md:flex items-stretch justify-center px-4 lg:px-6">
                        <div className="w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent"></div>
                    </div>

                    {/* ── RIGHT COLUMN ── */}
                    <div className="flex-1 relative">
                        {/* Column Header */}
                        <div className="px-4 sm:px-5 mb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                                <span className="w-3 h-3 rounded bg-blue-500/80"></span>
                                IT Solutions
                            </h3>
                            <p className="text-white/35 text-xs sm:text-sm mt-1 ml-5">Digital Innovation & Technology</p>
                        </div>

                        <div className="relative min-h-[480px]">
                            {/* Buttons — hidden when left side is hovered */}
                            <div className={`transition-all duration-300 ${hoveredSide === 'left' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                                <div className="flex flex-col gap-0.5">
                                    {rightTopics.map((topic, i) => (
                                        <TopicButton
                                            key={topic.id}
                                            topic={topic}
                                            isActive={hoveredSide === 'right' && hoveredIndex === i}
                                            onHover={() => { setHoveredSide('right'); setHoveredIndex(i); }}
                                            accentColor="#3B82F6"
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Description Panel with Image (when LEFT topic is hovered) */}
                            <AnimatePresence mode="wait">
                                {hoveredSide === 'left' && hoveredTopic && (
                                    <DescriptionPanel topic={hoveredTopic} />
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
