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
        initial: { opacity: 0, y: 15 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 1 }
    };

    return (
        <Layout>
            <div className="bg-[#050505] text-white min-h-screen pt-32 pb-32 px-6 sm:px-10 lg:px-24">
                
                {/* Simple Header */}
                <header className="max-w-4xl mb-24">
                    <motion.h1 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-4xl sm:text-5xl font-normal tracking-tight mb-4"
                    >
                        Overview
                    </motion.h1>
                    <div className="w-12 h-[1px] bg-tima-gold opacity-50" />
                </header>

                <div className="max-w-3xl space-y-16">
                    
                    {/* Paragraph 1: Identity & Philosophy */}
                    <motion.section {...fadeIn}>
                        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light">
                            <span className="text-white font-medium">TIMA Integrated Technologies Private Limited</span> is a forward-driven innovation company built on the philosophy to Train, Innovate, Motivate, and Achieve. We specialize in delivering advanced solutions across industries, including automation systems, renewable energy solutions, smart technologies, and industrial manufacturing. Our approach blends cutting-edge engineering with sustainable practices to help businesses improve efficiency, scalability, and long-term performance.
                        </p>
                    </motion.section>

                    {/* Paragraph 2: Challenges & Motto */}
                    <motion.section {...fadeIn} className="pt-8 border-l border-white/5 pl-8 sm:pl-12">
                        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light mb-10">
                            At TIMA, we believe growth is not achieved by avoiding challenges but by becoming stronger through them. As we stand by the principle, <span className="text-white italic">“I ask not for a lighter burden, but for broader shoulders,”</span> we empower organizations to embrace transformation with resilience and confidence. Our solutions are designed to support evolving business needs in a rapidly changing technological landscape.
                        </p>
                    </motion.section>

                    {/* Paragraph 3: Expertise & Partnership */}
                    <motion.section {...fadeIn}>
                        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light mb-8">
                            With expertise in electronics, robotics, solar energy systems, industrial automation, and innovative product development, TIMA serves as a trusted partner for businesses seeking future-ready solutions. We focus on delivering high-quality, scalable, and cost-effective technologies that drive productivity and sustainable growth across multiple sectors.
                        </p>
                    </motion.section>

                    {/* Paragraph 4: Concluding Vision */}
                    <motion.section {...fadeIn} className="pt-8">
                        <p className="text-gray-300 text-lg sm:text-xl leading-relaxed font-light mb-12">
                            Guided by our vision and values, we continue to push boundaries and create meaningful impact.
                        </p>

                        <div className="mt-20">
                            <h2 className="text-tima-gold text-2xl sm:text-3xl font-normal italic tracking-tighter">
                                “Together we thrive. Together we rise.”
                            </h2>
                        </div>
                    </motion.section>

                    {/* Simple CTA */}
                    <motion.div {...fadeIn} className="pt-24 flex flex-wrap gap-8">
                        <Link to="/contact" className="text-white text-sm font-bold uppercase tracking-[0.3em] hover:text-tima-gold transition-colors flex items-center gap-4 group">
                            Contact Us
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link to="/services" className="text-white/40 text-sm font-bold uppercase tracking-[0.3em] hover:text-white transition-colors">
                            Request Services
                        </Link>
                    </motion.div>

                </div>

            </div>
        </Layout>
    );
}
