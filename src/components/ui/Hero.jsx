import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Lazy load images only when needed - this drastically reduces initial bundle
const carouselItems = [
    { id: 0, src: () => import('../../assets/img/Solar Projects & Renewable Energy.webp').then(m => m.default) },
    { id: 1, src: () => import('../../assets/img/Advanced Manufacturing & Engineering.webp').then(m => m.default) },
    { id: 2, src: () => import('../../assets/img/Electronics, Robotics & Intelligent Automation.webp').then(m => m.default) },
    { id: 3, src: () => import('../../assets/img/3D Printing & Prototyping Services.webp').then(m => m.default) },
    { id: 4, src: () => import('../../assets/img/IT Software & Cloud Solutions.webp').then(m => m.default) },
    { id: 5, src: () => import('../../assets/img/Artificial Intelligence (AI) Solutions.webp').then(m => m.default) },
    { id: 6, src: () => import('../../assets/img/Automation & Workflow Engineering.webp').then(m => m.default) }
]

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="white" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.005c-5.46 0-9.89 4.43-9.89 9.89 0 1.74.45 3.44 1.31 4.93L2.04 22l5.35-1.4c1.45.82 3.1 1.26 4.8 1.26h.02c5.46 0 9.89-4.43 9.89-9.89s-4.43-9.89-9.89-9.89zm-.01 16.54h-.01c-1.46 0-2.9-.39-4.16-1.12l-.3-.18-3.08.8.82-3-.2-.31a8.12 8.12 0 0 1-1.25-4.38c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2zm4.5-6.15c-.25-.13-1.47-.73-1.7-.81-.23-.08-.4-.13-.56.13-.17.25-.64.81-.79.98-.15.17-.3.2-.54.08-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.45.06-.69.32-.24.25-.93.91-.93 2.22s.95 2.57 1.08 2.75c.13.17 1.88 2.86 4.54 4.01 2.2.96 2.65.77 3.14.73.49-.05 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
)

export function Hero() {
    const [currentImage, setCurrentImage] = useState(0)
    const [mounted, setMounted] = useState(false)
    const [loadedImages, setLoadedImages] = useState({})
    const preloadTimeoutRef = useRef(null)

    // Load current image and preload next one
    useEffect(() => {
        const loadImage = async (index) => {
            if (!loadedImages[index]) {
                try {
                    const src = await carouselItems[index].src()
                    setLoadedImages(prev => ({ ...prev, [index]: src }))
                } catch (err) {
                    console.error(`Failed to load image ${index}:`, err)
                }
            }
        }

        // Load current image immediately
        loadImage(currentImage)
        
        // Preload next image
        const nextIndex = (currentImage + 1) % carouselItems.length
        if (preloadTimeoutRef.current) clearTimeout(preloadTimeoutRef.current)
        preloadTimeoutRef.current = setTimeout(() => {
            loadImage(nextIndex)
        }, 6500) // Start preloading 1.5s before next image shows

        return () => {
            if (preloadTimeoutRef.current) clearTimeout(preloadTimeoutRef.current)
        }
    }, [currentImage, loadedImages])

    useEffect(() => {
        setMounted(true)
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % carouselItems.length)
        }, 8000) // Change image every 8 seconds
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="relative h-screen w-full overflow-hidden flex flex-col bg-black">

            {/* Auto-shifting 7 Images Background - only render loaded image */}
            <AnimatePresence>
                {loadedImages[currentImage] && (
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat will-change-contents"
                        style={{
                            backgroundImage: `url("${loadedImages[currentImage]}")`,
                            animation: 'kenburns 8s linear forwards',
                            pointerEvents: 'none',
                        }}
                    />
                )}
            </AnimatePresence>

            {/* Fallback gradient while image loads */}
            {!loadedImages[currentImage] && (
                <div className="absolute inset-0 z-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
            )}

            {/* Click blocker — prevents any click on the hero area from navigating to a new page */}
            <div className="absolute inset-0 z-10 cursor-default" onClick={(e) => e.preventDefault()} />

            {/* Hero Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-end justify-start pointer-events-none pb-56 sm:pb-40 px-6 sm:px-14 md:px-20 lg:px-28">
                {/* Subtle dark vignette for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                    className="relative text-left max-w-[90vw] sm:max-w-none"
                >
                    <h1 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug drop-shadow-2xl flex flex-wrap gap-x-1"
                        style={{ fontFamily: "'Outfit', sans-serif", letterSpacing: '0.08em' }}
                    >
                        <span>"Train.</span>
                        <span className="text-[#C9A84C]">Innovate.</span>
                        <span>Motivate.</span>
                        <span className="text-[#C9A84C]">Achieve."</span>
                    </h1>
                    {/* Gold underline accent */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.9 }}
                        className="mt-3 h-[2px] w-40 sm:w-56 md:w-72 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #C9A84C, transparent)', transformOrigin: 'left' }}
                    />
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
