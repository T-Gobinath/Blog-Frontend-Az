import React from 'react';
import { motion } from 'framer-motion';

const directors = [
    {
        id: 1,
        name: 'Michael Chen',
        title: 'Board of Director',
        description: 'With over 20 years of experience in industrial automation, Michael leads our global manufacturing strategy and operational excellence initiatives.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
    },
    {
        id: 2,
        name: 'Sarah Jenkins',
        title: 'Board of Director',
        description: 'Sarah brings a wealth of knowledge in supply chain optimization and digital transformation, driving innovation across our IT solutions division.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    }
];

export function BoardOfDirectors() {
    return (
        <section className="relative w-full bg-[#0a0a0a] overflow-hidden font-sans py-16 sm:py-24 px-4 sm:px-6">
            {/* Ambient glow */}
            <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-tima-gold/5 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

            {/* Header */}
            <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-tima-gold text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-3"
                >
                    Leadership
                </motion.p>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
                >
                    Board of Directors
                </motion.h2>
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="h-[3px] bg-gradient-to-r from-tima-gold to-tima-gold/30 mx-auto mt-6 rounded-full"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
                    {directors.map((director, index) => (
                        <motion.div
                            key={director.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#0c0c0c] border border-white/5 rounded-2xl overflow-hidden flex flex-col items-center p-10 text-center transition-all duration-500 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(168,135,70,0.1)] hover:border-tima-gold/30 w-full max-w-[450px]"
                        >
                            {/* Hover accent line */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-tima-gold transition-all duration-500 group-hover:w-full"></div>
                            
                            {/* Profile Image */}
                            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-8 p-1.5 bg-gradient-to-br from-white/10 to-transparent group-hover:from-tima-gold/50 group-hover:to-tima-gold/10 transition-colors duration-500">
                                <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                                    <img
                                        src={director.image}
                                        alt={director.name}
                                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    {/* Image Overlay */}
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                            </div>

                            {/* Text Details */}
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 transition-colors duration-300 group-hover:text-tima-gold">
                                {director.name}
                            </h3>
                            <p className="text-tima-gold/80 text-sm font-semibold tracking-widest uppercase mb-6">
                                {director.title}
                            </p>
                            <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-[320px] transition-colors duration-300 group-hover:text-white/70">
                                {director.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
