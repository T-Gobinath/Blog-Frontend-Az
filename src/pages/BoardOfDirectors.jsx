import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { Footer } from '../components/ui/Footer';
import { Linkedin, Twitter, Mail, ChevronRight } from 'lucide-react';

// Import images from assets/dir
import img1 from '../assets/dir/img1.jpeg';
import img2 from '../assets/dir/img2.jpeg';

const directors = [
    {
        name: "Mr. Manos Simson",
        title: "Founder & CEO",
        image: img1,
        objectPosition: "center 20%",
        bio: "Visionary leader with a passion for integrating advanced technology into industrial workflows. Under his leadership, TIMA has expanded across multiple sectors including AI, Manufacturing, and Renewable Energy.",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:manos@thetima.com"
        }
    },
    {
        name: "Joys Anita",
        title: "Co-founder",
        image: img2,
        objectPosition: "85% 20%",
        bio: "Co-founder and strategic driving force behind TIMA's operational excellence. Her expertise in business development and system integration has been pivotal to the group's global scaling.",
        social: {
            linkedin: "https://linkedin.com",
            twitter: "https://twitter.com",
            email: "mailto:joysanita@thetima.com"
        }
    }
];

export function BoardOfDirectors() {
    return (
        <Layout>
            <div className="w-full min-h-screen bg-[#0a0f1a] text-white">
                
                {/* ── HERO SECTION ── */}
                <section className="relative pt-44 pb-12 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-44 overflow-hidden">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 z-0" />
                    
                    <div className="relative z-10 max-w-[1400px] mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-2 text-tima-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-4"
                        >
                            <span>Leadership</span>
                            <ChevronRight size={12} />
                            <span className="text-white/40">Board of Directors</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mb-4"
                        >
                            The Visionaries <br />
                            <span className="text-white/30 italic text-3xl sm:text-4xl md:text-5xl">Behind TIMA</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-gray-400 max-w-xl text-sm sm:text-base leading-relaxed font-light"
                        >
                            Leading a path toward a sustainable and technologically integrated future. Meet the pioneers driving our global mission.
                        </motion.p>
                    </div>
                </section>

                {/* ── DIRECTORS GRID ── */}
                <section className="pb-32 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-44">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                            {directors.map((director, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className="group flex flex-col items-center text-center"
                                >
                                    {/* Photo Container - Rectangular */}
                                    <div className="relative w-full aspect-[4/5] max-w-[320px] mb-8 overflow-hidden rounded-[2rem] border border-white/10 p-1.5 transition-all duration-700 group-hover:border-tima-gold/50 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                                        <div className="w-full h-full overflow-hidden rounded-[1.8rem]">
                                            <img 
                                                src={director.image} 
                                                alt={director.name}
                                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                        {/* Glow Effect */}
                                        <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-t from-tima-gold/20 to-transparent pointer-events-none" />
                                    </div>

                                    {/* Details Below Photo */}
                                    <div className="flex flex-col items-center max-w-sm">
                                        <h2 className="text-2xl md:text-3xl font-normal tracking-tight text-white mb-2 group-hover:text-tima-gold transition-colors duration-500">
                                            {director.name}
                                        </h2>
                                        <p className="text-white/40 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                                            {director.title}
                                        </p>
                                        
                                        <div className="h-px w-20 bg-tima-gold/30 mb-2 group-hover:w-32 transition-all duration-700" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </Layout>
    );
}
