import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Headphones, Sun, Moon, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStore } from '../../stores/useStore'
import defaultLogo from '../../assets/tima-logo.webp'
import scrolledLogo from '../../assets/Logo1.webp'

const navLinks = [
    {
        label: 'About',
        items: [
            { label: 'Overview', path: '/overview' },
            { label: 'Board of Directors', path: '/about/board-of-directors' },
            { label: 'Timeline', path: '/#timeline' }
        ]
    },
    {
        label: 'Businesses',
        items: [
            { label: 'Solar Projects & Renewable Energy',              path: '/ventures/solar-projects' },
            { label: 'Advanced Manufacturing & Engineering',           path: '/ventures/advanced-manufacturing' },
            { label: 'Electronics, Robotics & Intelligent Automation', path: '/ventures/electronics-robotics' },
            { label: '3D Printing & Prototyping Services',             path: '/ventures/3d-printing' },
            { label: 'IT Software & Cloud Solutions',                  path: '/ventures/it-software' },
            { label: 'Artificial Intelligence (AI) Solutions',         path: '/ventures/artificial-intelligence' },
            { label: 'Automation & Workflow Engineering',              path: '/ventures/automation-workflow' },
        ]
    },
    {
        label: 'Partners',
        items: ['Who to handshake']
    },
    {
        label: 'Careers',
        items: ['Careers', 'Search & Apply', 'Working at TIMA']
    },
]

export function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const [mobileExpanded, setMobileExpanded] = useState(null)
    const [isScrolled, setIsScrolled] = useState(false)
    const navRef = useRef(null)
    const { theme, toggleTheme } = useStore()
    const activeTheme = isScrolled ? theme : 'dark'

    useEffect(() => {
        const main = document.getElementById('main-scroll')
        if (!main) return
        const handler = () => setIsScrolled(main.scrollTop > 50)
        main.addEventListener('scroll', handler, { passive: true })
        return () => main.removeEventListener('scroll', handler)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setActiveDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMobileExpanded = (label) => {
        setMobileExpanded(mobileExpanded === label ? null : label)
    }

    const handleLinkClick = (e, targetPath, isMobile = false) => {
        if (isMobile) {
            setMobileOpen(false);
            setMobileExpanded(null);
        }
        setActiveDropdown(null);

        // Handle same-page hash scrolling
        if (targetPath.startsWith('/#') && window.location.pathname === '/') {
            e.preventDefault();
            const id = targetPath.substring(2);
            const element = document.getElementById(id);
            const scrollContainer = document.getElementById('main-scroll');
            if (element && scrollContainer) {
                setTimeout(() => {
                    const headerOffset = isMobile ? 80 : 100; // Mobile header is usually smaller
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + scrollContainer.scrollTop - headerOffset;

                    scrollContainer.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    })
                }, 300)
                // Update hash without jumping
                window.history.pushState(null, '', targetPath);
            }
        }
    };

    return (
        <motion.nav
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.0, delay: 0.2, ease: "easeInOut" }}
            ref={navRef}
            className={`fixed top-0 left-0 right-0 lg:right-[10px] z-50 pointer-events-auto transition-all duration-700 delay-75 ${isScrolled
                ? (activeTheme === 'light' ? 'bg-white/90 backdrop-blur-md py-0.5 text-gray-900' : 'bg-[#0B0E4F]/95 backdrop-blur-md py-0.5')
                : (activeTheme === 'light' ? 'bg-transparent pt-3 pb-1 text-gray-900' : 'bg-transparent xl:bg-gradient-to-b xl:from-black/70 xl:via-black/70 xl:to-transparent pt-3 pb-1 xl:pb-16')
                }`}
            onMouseLeave={() => setActiveDropdown(null)}
        >




            {/* Desktop Layout Wrapper */}
            <div className={`max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 2xl:px-40 flex items-center justify-between transition-all duration-700 ${isScrolled ? 'h-12 sm:h-14 md:h-16' : 'h-16 sm:h-20 md:h-24 lg:h-26 xl:h-28'}`}>
                {/* Left Column: Logo */}
                <div className="flex-shrink-0 flex items-center pr-4 sm:pr-6 md:pr-8 lg:pr-8 2xl:pr-12">
                    <Link to="/">
                        <img
                            src={isScrolled ? scrolledLogo : defaultLogo}
                            onError={(e) => { e.target.style.display = 'none' }}
                            alt="TIMA Logo"
                            width="220"
                            height="110"
                            className={`w-auto object-contain mr-2 sm:mr-3 md:mr-4 drop-shadow-md transition-all duration-700 cursor-pointer ${isScrolled ? 'h-10 sm:h-12 md:h-14 lg:h-16' : 'h-14 sm:h-18 md:h-20 lg:h-[100px] xl:h-[110px]'}`}
                        />
                    </Link>
                </div>

                {/* Right Column: Nav Links */}
                <div className="hidden lg:flex flex-col justify-center h-full flex-1 min-w-0 lg:pl-8 xl:pl-12 2xl:pl-24">
                    <div className="flex items-center w-full">
                        {/* Left-Aligned Links (matching the marquee above) */}
                        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8 2xl:gap-12">
                            <Link to="/" className={`relative group flex items-center gap-1.5 text-[13px] lg:text-[14px] 2xl:text-[16px] font-medium tracking-wide whitespace-nowrap transition-colors py-1 ${activeTheme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}>
                                <span className="relative pb-1">
                                    Home
                                    <span className="absolute left-0 bottom-0 h-[4px] bg-tima-gold transition-all duration-300 rounded-full w-0 group-hover:w-full"></span>
                                </span>
                            </Link>

                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onMouseEnter={() => setActiveDropdown(link.label)}
                                    className={`relative group flex items-center gap-1.5 text-[13px] lg:text-[14px] 2xl:text-[16px] font-medium tracking-wide whitespace-nowrap transition-colors py-1 ${activeDropdown === link.label
                                        ? (activeTheme === 'light' ? 'text-gray-900' : 'text-white')
                                        : (activeTheme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white')
                                        }`}
                                >
                                    <span className="relative pb-1">
                                        {link.label}
                                        {/* Animated Underline */}
                                        <span className={`absolute left-0 bottom-0 h-[4px] bg-tima-gold transition-all duration-300 rounded-full ${activeDropdown === link.label ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </span>
                                    <ChevronDown
                                        size={14}
                                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''} ${activeTheme === 'light' ? 'text-gray-400' : 'text-white/70'}`}
                                    />
                                </button>
                            ))}

                            <Link to="/contact" className={`relative group flex items-center gap-1.5 text-[13px] lg:text-[14px] 2xl:text-[16px] font-medium tracking-wide whitespace-nowrap transition-colors py-1 ${activeTheme === 'light' ? 'text-gray-600 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}>
                                <span className="relative pb-1">
                                    Contact Us
                                    <span className="absolute left-0 bottom-0 h-[4px] bg-tima-gold transition-all duration-300 rounded-full w-0 group-hover:w-full"></span>
                                </span>
                            </Link>
                        </div>

                        {/* Right-aligned Icons pushed to the end */}
                        <div className={`ml-auto flex items-center gap-3 xl:gap-4 ${activeTheme === 'light' ? 'text-gray-700' : 'text-white'}`}>
                            <button className={'hover:text-white/70 transition-colors p-1'}>
                                <Headphones size={18} strokeWidth={1.5} />
                            </button>
                            <button onClick={toggleTheme} className={'hover:text-white/70 transition-colors p-1 focus:outline-none'} title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                                {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu toggle */}
                <button
                    className={`lg:hidden p-2 ml-auto self-center transition-colors ${activeTheme === 'light' ? 'text-gray-900' : 'text-white'}`}
                    onClick={() => { setMobileOpen(!mobileOpen); setMobileExpanded(null) }}
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Desktop Dropdown Panel */}
            {activeDropdown && (() => {
                const activeLink = navLinks.find(l => l.label === activeDropdown)
                if (!activeLink) return null

                // Standard dropdown for all nav items (including Businesses)
                return (
                    <div
                        className="hidden lg:block absolute left-0 right-0 bg-white shadow-xl border-t-2 border-tima-gold"
                        style={{ animation: 'slideDown 0.2s ease-out' }}
                    >
                        <div className="max-w-7xl mx-auto px-10 py-5">
                            {activeLink.label === 'Businesses' ? (
                                <>
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-tima-gold mb-4">Our Businesses</h3>
                                    <div className="grid grid-cols-2 gap-x-12 gap-y-2">
                                        {activeLink.items?.map((item) => {
                                            const path = typeof item === 'string' ? '#' : item.path;
                                            const label = typeof item === 'string' ? item : item.label;
                                            return (
                                                <Link
                                                    key={label}
                                                    to={path}
                                                    className="text-[13px] text-gray-600 hover:text-tima-gold hover:translate-x-1 transition-all duration-200 inline-block py-1 font-medium"
                                                    onClick={() => setActiveDropdown(null)}
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <div className="flex gap-12">
                                    {activeLink.items?.map((item) => {
                                        const label = typeof item === 'string' ? item : item.label;
                                        const path = typeof item === 'string' ? '#' : item.path;
                                        
                                        // If it's the old string-based item, calculate path (fallback)
                                        let targetPath = path;
                                        if (typeof item === 'string') {
                                            const basePath = activeLink.label === 'Partners' ? '/partners' :
                                                activeLink.label === 'Careers' ? '/careers' : '/about';
                                            targetPath = item === 'Overview' ? '/overview' :
                                                item === 'Careers' ? '/careers' :
                                                    basePath + '/' + item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');
                                        }

                                        return (
                                            <Link
                                                key={label}
                                                to={targetPath}
                                                className="text-sm text-gray-700 hover:text-tima-gold transition-colors font-medium whitespace-nowrap py-1"
                                                onClick={(e) => handleLinkClick(e, targetPath)}
                                            >
                                                {label}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                )
            })()}

            {/* Mobile menu */}
            {mobileOpen && (
                <div
                    className={`lg:hidden border-t px-4 sm:px-6 py-4 max-h-[75vh] overflow-y-auto overscroll-contain ${activeTheme === 'light' ? 'bg-white border-gray-200' : 'bg-[#1a2234] border-white/10'}`}
                    style={{ WebkitOverflowScrolling: 'touch' }}
                >
                    <Link
                        to="/"
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center justify-between w-full py-3 transition-colors border-b border-white/5 text-xs sm:text-sm font-bold ${activeTheme === 'light' ? 'text-gray-900 hover:text-tima-gold' : 'text-white/90 hover:text-tima-gold'}`}
                    >
                        Home
                    </Link>
                    {navLinks.map((link) => (
                        <div key={link.label}>
                            <button
                                onClick={() => toggleMobileExpanded(link.label)}
                                className={`flex items-center justify-between w-full py-3 transition-colors border-b border-white/5 text-xs sm:text-sm font-bold ${mobileExpanded === link.label ? 'text-tima-gold' : 'text-white/90 hover:text-tima-gold'
                                    }`}
                            >
                                {link.label}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-200 ${mobileExpanded === link.label ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>
                            {mobileExpanded === link.label && (
                                <div className="pl-4 pb-2">
                                    {link.label === 'Businesses' ? (
                                        // Venture links for Businesses on mobile
                                        link.items?.map((item) => {
                                            const path = typeof item === 'string' ? '#' : item.path;
                                            const label = typeof item === 'string' ? item : item.label;
                                            return (
                                                <Link
                                                    key={label}
                                                    to={path}
                                                    className={`block py-2 text-xs transition-colors ${activeTheme === 'light' ? 'text-gray-500 hover:text-tima-gold' : 'text-white/70 hover:text-tima-gold'}`}
                                                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })
                                    ) : (
                                        // Standard items for other nav links
                                        link.items?.map((item) => {
                                            const label = typeof item === 'string' ? item : item.label;
                                            const path = typeof item === 'string' ? '#' : item.path;
                                            
                                            let targetPath = path;
                                            if (typeof item === 'string') {
                                                const basePath = link.label === 'Partners' ? '/partners' :
                                                    link.label === 'Careers' ? '/careers' : '/about';
                                                targetPath = item === 'Overview' ? '/overview' :
                                                    item === 'Careers' ? '/careers' :
                                                        basePath + '/' + item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');
                                            }
                                            return (
                                                <Link
                                                    key={label}
                                                    to={targetPath}
                                                    className="block py-2 text-xs text-white/60 hover:text-tima-gold transition-colors"
                                                    onClick={(e) => handleLinkClick(e, targetPath, true)}
                                                >
                                                    {label}
                                                </Link>
                                            );
                                        })
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="flex gap-4 pt-4 text-xs text-white/60">
                        <Link to="/contact" className="hover:text-tima-gold">Contact Us</Link>
                    </div>
                </div>
            )}
        </motion.nav>
    )
}
