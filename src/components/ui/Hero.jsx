import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Navbar } from './Navbar'

const backgroundImages = [
    'https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80', // manufacturing machinery
    'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', // manufacturing
    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80', // tech circuits
    'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80', // corporate structure
    'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80', // teamwork/tech
    'https://images.unsplash.com/photo-1531297122539-5692b6982261?auto=format&fit=crop&q=80', // digital networking
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', // modern corporate
]


export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
        }, 8000) // Change image every 8 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col bg-black">

            {/* Hidden preloader */}
            <div className="hidden">
                {backgroundImages.map((src, i) => <img key={i} src={src} alt="preload" />)}
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
                        backgroundImage: `url(${backgroundImages[currentImage]})`,
                        animation: 'kenburns 8s linear forwards',
                    }}
                />
            </AnimatePresence>

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-black/40" />

            {/* Navbar */}
            <Navbar />

            {/* Spacer to push content down */}
            {/* removed flex-1 to center content better, or replaced with just pt */}

            {/* "Growth is Life" Headline + CTAs */}
            <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-44 pb-32 sm:pb-16 md:pb-24 lg:pb-32 flex-1 flex flex-col justify-end items-center sm:items-start text-center sm:text-left max-w-[1920px] mx-auto w-full">
                <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px] text-white drop-shadow-2xl leading-tight tracking-tight px-4 sm:px-0"
                    style={{ fontFamily: "'Playfair Display', 'Georgia', serif", fontWeight: 400 }}
                >
                    Growth is Life
                </motion.h1>

                {/* Gold underline */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                    className="w-24 sm:w-48 md:w-64 lg:w-80 h-[2px] bg-[#dcb671] mt-3 sm:mt-6 mb-8 sm:mb-8 md:mb-12 mx-auto sm:mx-0"
                />

                {/* CTA Buttons - Reliance style (both white bg, dark text) */}
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start w-full sm:w-auto px-6 sm:px-0"
                >
                    <a
                        href="#details"
                        className="group flex items-center justify-center gap-2 px-8 sm:px-10 md:px-12 py-3.5 sm:py-3 bg-transparent border border-white/70 rounded-[6px] text-white text-sm sm:text-base font-medium tracking-wide hover:bg-white hover:text-black hover:border-white transition-colors duration-300"
                    >
                        <span>Details</span>
                        <ArrowRight size={18} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
                    </a>
                </motion.div>
            </div>

        </section>
    )
}
