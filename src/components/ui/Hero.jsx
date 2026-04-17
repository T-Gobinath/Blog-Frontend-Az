import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

import { Link } from 'react-router-dom'

import img1 from '../../assets/img/Solar Projects & Renewable Energy.png'
import img2 from '../../assets/img/Advanced Manufacturing & Engineering.png'
import img3 from '../../assets/img/Electronics, Robotics & Intelligent Automation.png'
import img4 from '../../assets/img/3D Printing & Prototyping Services.png'
import img5 from '../../assets/img/IT Software & Cloud Solutions.png'
import img6 from '../../assets/img/Artificial Intelligence (AI) Solutions.png'
import img7 from '../../assets/img/Automation & Workflow Engineering.png'

const carouselItems = [
    { src: img1, title: 'Solar Projects & Renewable Energy', link: '/ventures/solar-projects' },
    { src: img2, title: 'Advanced Manufacturing & Engineering', link: '/ventures/advanced-manufacturing' },
    { src: img3, title: 'Electronics, Robotics & Intelligent Automation', link: '/ventures/electronics-robotics' },
    { src: img4, title: '3D Printing & Prototyping Services', link: '/ventures/3d-printing' },
    { src: img5, title: 'IT Software & Cloud Solutions', link: '/ventures/it-software' },
    { src: img6, title: 'Artificial Intelligence (AI) Solutions', link: '/ventures/artificial-intelligence' },
    { src: img7, title: 'Automation & Workflow Engineering', link: '/ventures/automation-workflow' }
]

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.005c-5.46 0-9.89 4.43-9.89 9.89 0 1.74.45 3.44 1.31 4.93L2.04 22l5.35-1.4c1.45.82 3.1 1.26 4.8 1.26h.02c5.46 0 9.89-4.43 9.89-9.89s-4.43-9.89-9.89-9.89zm-.01 16.54h-.01c-1.46 0-2.9-.39-4.16-1.12l-.3-.18-3.08.8.82-3-.2-.31a8.12 8.12 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.64.81-.79.98-.15.17-.3.2-.54.08-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.45.06-.69.32-.24.25-.93.91-.93 2.22s.95 2.57 1.08 2.75c.13.17 1.88 2.86 4.54 4.01 2.2.96 2.65.77 3.14.73.49-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
)

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselItems.length)
        }, 8000) // Change image every 8 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col bg-black">

            {/* Hidden preloader */}
            <div className="hidden">
                {carouselItems.map((item, i) => <img key={i} src={item.src} alt="preload" />)}
            </div>

            {/* Auto-shifting 7 Images Background */}
            <AnimatePresence>
                <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url("${carouselItems[currentImage].src}")`,
                        animation: 'kenburns 8s linear forwards',
                    }}
                />
            </AnimatePresence>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-black/40" />

            {/* Spacer to push content down */}
            {/* removed flex-1 to center content better, or replaced with just pt */}

            {/* "Headline + CTAs */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 pb-32 sm:pb-16 md:pb-24 lg:pb-32 flex-1 flex flex-col justify-end items-center sm:items-start text-center sm:text-left max-w-[1920px] mx-auto w-full">

                <AnimatePresence mode="wait">
                    <motion.h1
                        key={currentImage}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl font-semibold leading-snug tracking-tight mb-8 max-w-4xl"
                    >
                        {carouselItems[currentImage].title}
                    </motion.h1>
                </AnimatePresence>

                {/* CTA Buttons - Reliance style (both white bg, dark text) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start w-full sm:w-auto px-6 sm:px-0"
                >
                    <Link
                        to={carouselItems[currentImage].link}
                        className="group flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-3.5 sm:py-3 bg-transparent border border-white/70 rounded-[6px] text-white text-sm sm:text-base font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                    >
                        <span>Details</span>
                        <ArrowRight size={18} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* WhatsApp Floating Pop-up Button (Only appears when Hero is rendered) */}
            {mounted && createPortal(
                <a
                    href="https://wa.me/918015001407"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-8 left-8 z-50 flex items-center justify-center p-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 group animate-fade-in-up"
                    aria-label="Chat on WhatsApp"
                >
                    <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
                    <WhatsAppIcon />
                </a>,
                document.body
            )}

        </section>
    )
}
