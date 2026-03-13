import React from 'react';
import { motion } from 'framer-motion';
import sphereImg from '../../assets/Green sphere.jpg';

export function TechNeural() {
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="relative w-full h-[350px] bg-[#0a0a0a] overflow-hidden z-0 flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={sphereImg} 
                    alt="Green Sphere Background" 
                    className="w-full h-full object-cover opacity-80"
                />
                {/* Darker overlays for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
            </div>

            {/* Animated Text Content */}
            <motion.div 
                className="relative z-10 flex flex-col items-center justify-center text-center"
                variants={textContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.h2 
                    variants={itemVariants}
                    style={{ fontFamily: "'Philosopher', sans-serif" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-tima-gold/50 leading-tight drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    GREEN
                </motion.h2>
                <motion.h2 
                    variants={itemVariants}
                    style={{ fontFamily: "'Philosopher', sans-serif" }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-tima-gold/50 leading-tight -mt-2 sm:-mt-3 drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                >
                    SPHERE
                </motion.h2>
            </motion.div>
        </section>
    );
}


