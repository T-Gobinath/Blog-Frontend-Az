import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import CircularGallery from './CircularGallery';

import img1 from '../../assets/img/Solar Projects & Renewable Energy.png';
import img2 from '../../assets/img/Advanced Manufacturing & Engineering.png';
import img3 from '../../assets/img/Electronics, Robotics & Intelligent Automation.png';
import img4 from '../../assets/img/3D Printing & Prototyping Services.png';
import img5 from '../../assets/img/IT Software & Cloud Solutions.png';
import img6 from '../../assets/img/Artificial Intelligence (AI) Solutions.png';
import img7 from '../../assets/img/Automation & Workflow Engineering.png';

export function BusinessSlider() {
    const items = [
        { image: img1, text: 'Solar Projects &\\nRenewable Energy', link: '/ventures/solar-projects' },
        { image: img2, text: 'Advanced Manufacturing\\n& Engineering', link: '/ventures/advanced-manufacturing' },
        { image: img3, text: 'Electronics, Robotics &\\nIntelligent Automation', link: '/ventures/electronics-robotics' },
        { image: img4, text: '3D Printing &\\nPrototyping Services', link: '/ventures/3d-printing' },
        { image: img5, text: 'IT Software &\\nCloud Solutions', link: '/ventures/it-software' },
        { image: img6, text: 'Artificial Intelligence\\n(AI) Solutions', link: '/ventures/artificial-intelligence' },
        { image: img7, text: 'Automation &\\nWorkflow Engineering', link: '/ventures/automation-workflow' }
    ];

    const navigate = useNavigate();

    return (
        <section className="relative w-full pt-24 pb-12 bg-[#050810] text-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-tima-gold/5 blur-[120px] rounded-full pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1920px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="flex flex-col items-center justify-center mb-6 sm:mb-8 relative z-10 px-2 sm:px-0">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tima-gold font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-3 sm:mb-4 block text-center"
                    >
                        Our Core Ventures
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-center max-w-4xl text-white drop-shadow-md"
                    >
                        Shaping the future across <br className="block sm:hidden" />
                        multiple frontiers
                    </motion.h2>
                </div>
            </div>

            {/* Circular Gallery Container */}
            <div className="h-[380px] sm:h-[450px] md:h-[500px] lg:h-[800px] xl:h-[900px] relative w-full z-10 cursor-grab active:cursor-grabbing">
                <CircularGallery
                    items={items}
                    bend={3}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollSpeed={2}
                    scrollEase={0.05}
                    onItemClick={(link) => navigate(link)}
                />
            </div>
        </section>
    );
}
