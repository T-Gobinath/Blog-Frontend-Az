import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown, Headphones, Sun, Moon, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useStore } from '../../stores/useStore'
import defaultLogo from '../../assets/tima-logo.png'
import scrolledLogo from '../../assets/Logo1.png'
import manufacturingImg from '../../assets/manufacturing.png'
import itSolutionsImg from '../../assets/it-solutions.png'

const navLinks = [
    {
        label: 'About',
        items: ['Overview', 'Board of Directors', 'Timeline']
    },
    {
        label: 'Businesses',
        isMega: true,
        categories: [
            {
                title: 'Manufacturing',
                image: manufacturingImg,
                groups: [
                    {
                        heading: 'Materials',
                        items: []
                    },
                    {
                        heading: 'Engineering Solutions',
                        items: [
                            'Die Making',
                            'CNC Machining',
                            'Laser Cutting & Engraving',
                            'Light Metal Fabrication',
                            'Tool Design',
                            'Injection Molding',
                            'Prototype Development',
                            'PCB & Embedded Systems',
                            'Medical Grade Manufacturing'
                        ]
                    },
                    {
                        heading: 'Services',
                        items: [
                            'On-site Installation',
                            'Post Installation Support',
                            'Bulk Production Services'
                        ]
                    }
                ]
            },
            {
                title: 'IT Solutions',
                image: itSolutionsImg,
                groups: [
                    {
                        heading: null,
                        items: [
                            'Software Development',
                            'Web & E-Commerce',
                            'Apps & Automation',
                            'Cloud & Infrastructure',
                            'Support Services'
                        ]
                    }
                ]
            }
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

                // Mega menu for Businesses
                if (activeLink.isMega) {
                    return (
                        <div
                            className="hidden lg:block absolute left-0 right-0 bg-white shadow-2xl border-t-2 border-tima-gold"
                            style={{ animation: 'slideDown 0.25s ease-out' }}
                        >
                            <div className="max-w-7xl mx-auto px-10 py-8">
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-tima-gold mb-6">Our Businesses</h3>
                                <div className="grid grid-cols-2 gap-10">
                                    {activeLink.categories.map((cat) => (
                                        <div key={cat.title}>
                                            <div className="flex-1">
                                                <h4 className="text-base font-bold text-gray-900 mb-3 border-b-2 border-tima-gold pb-1 inline-block">{cat.title}</h4>
                                                {cat.groups.map((group, gi) => (
                                                    <div key={gi} className="mb-3">
                                                        {group.heading && (
                                                            <p className="text-sm font-semibold text-gray-800 mb-1">{group.heading}</p>
                                                        )}
                                                        {group.items.length > 0 && (
                                                            <ul className="space-y-0.5">
                                                                {group.items.map((item) => {
                                                                    const basePath = cat.title === 'Manufacturing' ? '/manufacturing' : '/it-solutions';
                                                                    const slug = item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');
                                                                    const targetPath = basePath + '/' + slug;

                                                                    return (
                                                                        <li key={item}>
                                                                            <Link
                                                                                to={targetPath}
                                                                                className="text-[13px] text-gray-600 hover:text-tima-gold hover:translate-x-1 transition-all duration-200 inline-block"
                                                                                onClick={() => setActiveDropdown(null)}
                                                                            >
                                                                                {item}
                                                                            </Link>
                                                                        </li>
                                                                    );
                                                                })}
                                                            </ul>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }

                // Standard dropdown for other nav items
                return (
                    <div
                        className="hidden lg:block absolute left-0 right-0 bg-white shadow-xl border-t-2 border-tima-gold"
                        style={{ animation: 'slideDown 0.2s ease-out' }}
                    >
                        <div className="max-w-7xl mx-auto px-10 py-5">
                            <div className="flex gap-12">
                                {activeLink.items?.map((item) => {
                                    const basePath = activeLink.label === 'Partners' ? '/partners' :
                                        activeLink.label === 'Careers' ? '/careers' : '/about';
                                    const targetPath = item === 'Overview' ? '/overview' :
                                        item === 'Careers' ? '/careers' :
                                            basePath + '/' + item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');

                                    return (
                                        <Link
                                            key={item}
                                            to={targetPath}
                                            className="text-sm text-gray-700 hover:text-tima-gold transition-colors font-medium whitespace-nowrap py-1"
                                            onClick={() => setActiveDropdown(null)}
                                        >
                                            {item}
                                        </Link>
                                    );
                                })}
                            </div>
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
                                    {link.isMega ? (
                                        // Mega menu categories for mobile
                                        link.categories.map((cat) => (
                                            <div key={cat.title} className="mb-3">
                                                <p className={`text-xs font-bold uppercase tracking-wider py-1 border-b mb-1 ${activeTheme === 'light' ? 'text-gray-900 border-gray-300' : 'text-tima-gold border-white/10'}`}>{cat.title}</p>
                                                {cat.groups.map((group, gi) => (
                                                    <div key={gi} className="mb-2 pl-2">
                                                        {group.heading && (
                                                            <p className={`text-xs font-semibold py-1 ${activeTheme === 'light' ? 'text-gray-800' : 'text-white/80'}`}>{group.heading}</p>
                                                        )}
                                                        {group.items.map((item) => {
                                                            const basePath = cat.title === 'Manufacturing' ? '/manufacturing' : '/it-solutions';
                                                            const slug = item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');
                                                            const targetPath = basePath + '/' + slug;
                                                            return (
                                                                <Link
                                                                    key={item}
                                                                    to={targetPath}
                                                                    className={`block py-1 text-xs transition-colors ${activeTheme === 'light' ? 'text-gray-500 hover:text-tima-gold' : 'text-white/50 hover:text-tima-gold'}`}
                                                                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                                                >
                                                                    {item}
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                ))}
                                            </div>
                                        ))
                                    ) : (
                                        // Standard items for other nav links
                                        link.items?.map((item) => {
                                            const basePath = link.label === 'Partners' ? '/partners' :
                                                link.label === 'Careers' ? '/careers' : '/about';
                                            const targetPath = item === 'Overview' ? '/overview' :
                                                item === 'Careers' ? '/careers' :
                                                    basePath + '/' + item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-').replace(/&/g, '');
                                            return (
                                                <Link
                                                    key={item}
                                                    to={targetPath}
                                                    className="block py-2 text-xs text-white/60 hover:text-tima-gold transition-colors"
                                                    onClick={() => { setMobileOpen(false); setMobileExpanded(null) }}
                                                >
                                                    {item}
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
