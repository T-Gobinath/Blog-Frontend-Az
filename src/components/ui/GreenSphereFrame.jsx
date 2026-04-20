import React from 'react';
import { motion } from 'framer-motion';
import chatGPTImg from '../../assets/dir/ChatGPT.webp';

export function GreenSphereFrame() {
    return (
        <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] bg-[#0a0a0a] overflow-hidden flex items-center justify-center border-y border-white/5">
            {/* Background Decorative Element */}
            <div className="absolute inset-0 bg-[#000] z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-blue-600/5 via-transparent to-tima-gold/5 opacity-30" />
            </div>

            {/* The "Frame" Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-8"
            >
                {/* The Frame Container (No side borders) */}
                <div className="relative w-full h-full max-w-[1400px] flex items-center justify-center overflow-hidden bg-black/40">
                    
                    {/* The Image inside the frame */}
                    <img 
                        src={chatGPTImg} 
                        alt="Green Sphere Branding" 
                        width="1400"
                        height="300"
                        loading="lazy"
                        className="w-full h-full object-cover sm:object-contain transition-transform duration-1000 hover:scale-105"
                    />

                </div>
            </motion.div>
        </section>
    );
}
