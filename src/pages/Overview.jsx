import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '../components/layout/Layout';
import { 
    Cpu, 
    Zap, 
    Bot, 
    Settings, 
    TrendingUp, 
    BookOpen, 
    Lightbulb, 
    Target, 
    ShieldCheck,
    ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Overview() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.8 }
    };

    const timaPillars = [
        { icon: BookOpen, title: "Train", desc: "Building expert teams and specialized knowledge." },
        { icon: Lightbulb, title: "Innovate", desc: "Pushing the boundaries of modern engineering." },
        { icon: TrendingUp, title: "Motivate", desc: "Driving resilience and growth in our teams." },
        { icon: Target, title: "Achieve", desc: "Delivering high-quality, scalable solutions." }
    ];

    const sectors = [
        { icon: Cpu, title: "Electronics", desc: "Precision engineering and component design." },
        { icon: Bot, title: "Robotics", desc: "Advanced automation and robotic systems." },
        { icon: Zap, title: "Solar Energy", desc: "Substainable power and renewable solutions." },
        { icon: Settings, title: "Industrial Automation", desc: "Streamlining manufacturing productivity." }
    ];

    return (
        <Layout>
            <div className="bg-[#050505] text-white min-h-screen pt-32 pb-20 px-6 sm:px-10 lg:px-24 overflow-hidden relative">
                
                {/* Decorative Atmosphere */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-tima-gold/5 blur-[100px] rounded-full -z-10 -translate-x-1/2 translate-y-1/2" />

                {/* Hero Header */}
                <header className="max-w-4xl mb-24">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-tima-gold text-xs font-bold uppercase tracking-[0.4em] mb-6 block"
                    >
                        Corporate Identity
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight leading-[1.1]"
                    >
                        TIMA <br /> Overview
                    </motion.h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    
                    {/* Left Column: Narrative Content */}
                    <div className="lg:col-span-12 space-y-32">
                        
                        {/* Section 1: Philosophy */}
                        <motion.section {...fadeIn} className="max-w-4xl group">
                            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light mb-12">
                                <span className="text-white font-normal underline decoration-tima-gold/30">TIMA Integrated Technologies Private Limited</span> is a forward-driven innovation company built on the philosophy to Train, Innovate, Motivate, and Achieve. We specialize in delivering advanced solutions across industries, including automation systems, renewable energy solutions, smart technologies, and industrial manufacturing. 
                            </p>
                            
                            {/* T.I.M.A Pillar Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                                {timaPillars.map((p, i) => (
                                    <motion.div 
                                        key={p.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl hover:border-white/20 transition-all group/card"
                                    >
                                        <p.icon className="w-6 h-6 text-tima-gold/60 mb-6 group-hover/card:text-tima-gold transition-colors" />
                                        <h3 className="text-white font-medium text-lg mb-2">{p.title}</h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>

                        {/* Section 2: Resilience & Motto */}
                        <motion.section {...fadeIn} className="max-w-4xl">
                            <h2 className="text-white font-medium text-2xl mb-8 flex items-center gap-4">
                                <ShieldCheck className="w-6 h-6 text-blue-500" />
                                Resilience & Confident Transformation
                            </h2>
                            <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed font-light mb-16">
                                At TIMA, we believe growth is not achieved by avoiding challenges but by becoming stronger through them. Our approach blends cutting-edge engineering with sustainable practices to help businesses improve efficiency, scalability, and long-term performance.
                            </p>

                            {/* Motto Highlight Box */}
                            <div className="relative p-12 sm:p-16 bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent" />
                                <div className="relative z-10 text-center">
                                    <span className="text-[10px] text-tima-gold font-bold uppercase tracking-[0.5em] mb-10 block opacity-50">Core Principle</span>
                                    <blockquote className="text-white text-2xl sm:text-3xl md:text-4xl font-normal leading-tight italic tracking-tight mb-8">
                                        "I ask not for a lighter burden, but for broader shoulders."
                                    </blockquote>
                                    <p className="text-gray-500 text-sm max-w-xl mx-auto">
                                        Empowering organizations to embrace transformation with resilience and confidence in a rapidly changing landscape.
                                    </p>
                                </div>
                            </div>
                        </motion.section>

                        {/* Section 3: Technical Expertise Showcase */}
                        <motion.section {...fadeIn} className="max-w-6xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                                <div>
                                    <h2 className="text-white font-medium text-2xl mb-8">Future-Ready Expertise</h2>
                                    <p className="text-gray-400 text-lg lg:text-xl leading-relaxed font-light">
                                        With expertise in electronics, robotics, solar energy systems, industrial automation, and innovative product development, TIMA serves as a trusted partner. We focus on delivering high-quality, scalable, and cost-effective technologies that drive productivity across multiple sectors.
                                    </p>
                                    <div className="mt-12 flex flex-wrap gap-4">
                                        {["Electronics", "Robotics", "Solar", "Automation", "Innovation"].map(tag => (
                                            <span key={tag} className="px-4 py-2 rounded-full border border-white/5 text-xs text-gray-400 tracking-wider font-bold">
                                                {tag.toUpperCase()}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    {sectors.map((s, i) => (
                                        <div key={s.title} className="p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl">
                                            <s.icon className="w-5 h-5 text-tima-gold/40 mb-4" />
                                            <h4 className="text-white text-sm font-bold mb-1">{s.title}</h4>
                                            <p className="text-gray-600 text-xs">{s.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.section>

                        {/* Call to Action Section */}
                        <motion.section {...fadeIn} className="max-w-4xl pt-20">
                            <div className="border-t border-white/5 pt-20">
                                <h3 className="text-3xl sm:text-4xl mb-10 text-white font-normal group">
                                    Ready to empower your <br className="hidden sm:block" /> 
                                    <span className="text-tima-gold">organizational growth?</span>
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-6">
                                    <Link to="/contact" className="px-10 py-5 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-tima-gold transition-colors flex items-center justify-between group">
                                        Start Conversation
                                        <ChevronRight className="w-4 h-4 ml-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link to="/services" className="px-10 py-5 border border-white/20 text-white font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors flex items-center">
                                        Request Services
                                    </Link>
                                </div>
                            </div>
                        </motion.section>

                    </div>
                </div>

            </div>
        </Layout>
    );
}
