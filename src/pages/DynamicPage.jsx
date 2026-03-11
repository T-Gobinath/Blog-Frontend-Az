import React, { useEffect, useMemo } from 'react';
import { useLocation, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, LayoutTemplate } from 'lucide-react';
import { Navbar } from '../components/ui/Navbar';
import { Footer } from '../components/ui/Footer';
import { useStore } from '../stores/useStore';
import { pagesContent } from '../data/pagesContent';

import { Layout } from '../components/layout/Layout';

export function DynamicPage() {
    const location = useLocation();
    const { theme } = useStore();
    
    // Extract the content key from the pathname (remove leading slash)
    // E.g. "/manufacturing/materials" -> "manufacturing/materials"
    const contentKey = location.pathname.substring(1).replace(/\/$/, "");
    
    const pageData = useMemo(() => {
        return pagesContent[contentKey];
    }, [contentKey]);

    // Update SEO Meta Tags
    useEffect(() => {
        if (pageData) {
            document.title = `${pageData.title} | TIMA`;
            
            // Update or create meta description
            let metaDesc = document.querySelector('meta[name="description"]');
            if (!metaDesc) {
                metaDesc = document.createElement('meta');
                metaDesc.name = "description";
                document.head.appendChild(metaDesc);
            }
            metaDesc.content = pageData.metaDescription || pageData.subtitle;
        }
        
        // Scroll to top on route change
        const mainScroll = document.getElementById('main-scroll');
        if (mainScroll) mainScroll.scrollTo({ top: 0, behavior: 'instant' });
        else window.scrollTo({ top: 0, behavior: 'instant' });
        
    }, [pageData, location.pathname]);

    // 404 Fallback if route doesn't exist in our pagesContent
    if (!pageData) {
        return (
            <Layout>
                <div className={`min-h-[100dvh] flex flex-col items-center justify-center ${theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#0a0f1a] text-white'}`}>
                    <Navbar />
                    <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
                    <p className="text-gray-500 mb-8">The page you are looking for does not exist or has been moved.</p>
                    <Link to="/" className="px-6 py-3 bg-tima-gold text-black font-semibold rounded-full hover:bg-white transition-colors">
                        Return Home
                    </Link>
                </div>
            </Layout>
        );
    }

    // Determine parent path for breadcrumb (e.g., "manufacturing")
    const parentPath = contentKey.split('/')[0];
    const parentName = parentPath.charAt(0).toUpperCase() + parentPath.slice(1).replace('-', ' ');

    return (
        <Layout>
            <div className={`min-h-[100dvh] flex flex-col font-sans transition-colors duration-500 ${theme === 'light' ? 'bg-[#fcfcfc]' : 'bg-[#0a0f1a]'}`}>
                <Navbar />
                
                <main className="flex-grow pt-16 sm:pt-20 md:pt-24 xl:pt-28">
                {/* ── HERO SECTION ── */}
                <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
                    {/* Background Image with Parallax effect feeling */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src={pageData.heroImage} 
                            alt={pageData.title} 
                            className="w-full h-full object-cover object-center"
                        />
                        <div className={`absolute inset-0 ${theme === 'light' ? 'bg-black/40' : 'bg-[#0a0f1a]/80'}`}></div>
                        <div className={`absolute inset-0 bg-gradient-to-t ${theme === 'light' ? 'from-[#fcfcfc] via-transparent' : 'from-[#0a0f1a] via-transparent'} to-transparent opacity-100`}></div>
                    </div>

                    <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 sm:px-10 md:px-14">
                        {/* Breadcrumbs */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 text-tima-gold/90 text-sm font-semibold uppercase tracking-wider mb-6"
                        >
                            <span>{parentName}</span>
                            <ChevronRight size={14} />
                            <span className="text-white">{pageData.title}</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1]"
                        >
                            {pageData.title}
                        </motion.h1>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light"
                        >
                            {pageData.subtitle}
                        </motion.p>
                    </div>
                </section>

                {/* ── CONTENT SECTIONS ── */}
                <div className="max-w-[1200px] mx-auto px-6 sm:px-10 md:px-14 py-16 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                        
                        {/* Main Content Body */}
                        <div className="lg:col-span-12">
                            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                                
                                {/* Left Side: Text Paragraphs */}
                                <motion.div 
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6 }}
                                    className="lg:w-1/2 prose prose-lg max-w-none"
                                >
                                    <h2 className={`text-3xl sm:text-4xl font-bold mb-8 tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                        Overview
                                    </h2>
                                    <div className="w-16 h-1 bg-tima-gold mb-10 rounded-full"></div>
                                    
                                    {pageData.paragraphs ? (
                                        <div className="space-y-6">
                                            {pageData.paragraphs.map((p, i) => (
                                                <p key={i} className={`leading-relaxed text-[16px] sm:text-[18px] ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                                    {p}
                                                </p>
                                            ))}
                                            
                                            {/* Enquiry Link */}
                                            {pageData.linkText && (
                                                <div className="pt-6">
                                                    <Link 
                                                        to="/contact" 
                                                        className={`inline-block border px-6 py-2 rounded-full text-sm hover:bg-tima-gold hover:text-black hover:border-tima-gold transition-all duration-300 ${theme === 'light' ? 'border-gray-300 text-gray-700' : 'border-gray-700 text-gray-300'}`}
                                                    >
                                                        {pageData.linkText} <span className="ml-1 opacity-70">↗</span>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <p className={`leading-relaxed text-[16px] sm:text-[18px] ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                                            Content loading...
                                        </p>
                                    )}
                                </motion.div>

                                {/* Right Side: 2x2 Image Grid */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                    className="lg:w-1/2"
                                >
                                    {pageData.gridImages && pageData.gridImages.length === 4 ? (
                                        <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
                                            {pageData.gridImages.map((src, i) => (
                                                <div key={i} className="relative w-full h-full overflow-hidden rounded-md group">
                                                    <img 
                                                        src={src} 
                                                        alt={`Grid image ${i+1}`}
                                                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                                    />
                                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className={`w-full h-full min-h-[400px] rounded-md flex items-center justify-center ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}`}>
                                            <span className="text-gray-500">Images unavailable</span>
                                        </div>
                                    )}
                                </motion.div>
                                
                            </div>
                        </div>

                        {/* Sidebar / Quick Contact */}
                        <div className="lg:col-span-4">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className={`sticky top-32 p-8 rounded-3xl border ${theme === 'light' ? 'bg-gray-50 border-gray-200' : 'bg-white/[0.02] border-white/10'}`}
                            >
                                <h3 className={`text-xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                    Ready to get started?
                                </h3>
                                <p className={`mb-8 text-sm leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                    Discuss your project requirements with our engineering and integration experts. We're ready to build the future with you.
                                </p>
                                <Link 
                                    to="/contact" 
                                    className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-tima-gold text-black font-bold rounded-xl hover:bg-white transition-all duration-300"
                                >
                                    Contact Sales
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                                
                                <div className="mt-8 pt-6 border-t border-tima-gold/20">
                                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${theme === 'light' ? 'text-gray-500' : 'text-gray-500'}`}>
                                        Direct Inquiries
                                    </p>
                                    <a href="mailto:info@timagroup.net" className={`text-sm font-medium hover:text-tima-gold transition-colors ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
                                        info@timagroup.net
                                    </a>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
        </Layout>
    );
}
