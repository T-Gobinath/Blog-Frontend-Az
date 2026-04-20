import React, { useRef, useState, useEffect } from 'react'
import { useStore } from '../../stores/useStore'
import { useLocation } from 'react-router-dom'
import { ArrowUp } from 'lucide-react'
import { Navbar } from '../ui/Navbar'

export function Layout({ children }) {
    const theme = useStore((state) => state.theme)
    const scrollContainerRef = useRef(null)
    const location = useLocation()
    
    const [isAnimating, setIsAnimating] = useState(false)
    const [showScrollTop, setShowScrollTop] = useState(false)

    // Handle scroll to show/hide the back-to-top button
    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                if (scrollContainerRef.current.scrollTop > 300) {
                    setShowScrollTop(true)
                } else {
                    setShowScrollTop(false)
                }
            }
        }
        
        const scrollElement = scrollContainerRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll)
        }
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll)
            }
        }
    }, [])

    // Reset scroll position on route change AND handle hash scrolling
    useEffect(() => {
        if (!scrollContainerRef.current) return;

        if (location.hash) {
            const id = location.hash.substring(1)
            const element = document.getElementById(id)
            if (element) {
                // Determine if we are just scrolling or if the path changed
                // (Optional: can add behavior: 'smooth' for same-page scrolls)
                setTimeout(() => {
                    const headerOffset = 100; // Account for fixed navbar
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + scrollContainerRef.current.scrollTop - headerOffset;

                    scrollContainerRef.current.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                }, 300) // Slightly longer delay for reliability
            }
        } else {
            // No hash, reset to top
            scrollContainerRef.current.scrollTo(0, 0)
        }
        
        setIsAnimating(false)
        const timer = setTimeout(() => setIsAnimating(true), 50)
        return () => clearTimeout(timer)
    }, [location.pathname, location.hash]) // Depend on both path and hash

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className={`relative w-full h-[100dvh] overflow-hidden transition-colors duration-500 ${theme === 'light'
            ? 'bg-transparent text-gray-900'
            : 'bg-transparent text-tima-white'
            }`}>

            <Navbar />

            {/* UI Overlay */}
            <main
                id="main-scroll"
                ref={scrollContainerRef}
                className={`relative z-10 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth transition-all duration-500 ease-out transform ${
                    isAnimating ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
            >
                {/* Enable pointer events for children content with Animated "Pop Up / Scroll Up" wrapper */}
                <div className="pointer-events-auto min-h-full">
                    {children}
                </div>
            </main>

            {/* Global Scroll to Top "Pop Up" Button */}
            <button
                onClick={scrollToTop}
                className={`absolute bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600/80 backdrop-blur-md text-white border border-white/10 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-500 transform hover:scale-110 hover:bg-blue-500 ${
                    showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
                }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={24} strokeWidth={2.5} />
            </button>
        </div>
    )
}
