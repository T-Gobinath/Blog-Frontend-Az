import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/106382003/' },
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/timaintegrated?igsh=MXBrdGpmb3c0M3Zwaw==' },
  { name: 'X / Twitter', icon: Twitter, url: 'https://x.com/Timaintegrated' },
  { name: 'Mail', icon: Mail, url: 'mailto:support@thetima.com' },
  { name: 'Phone', icon: Phone, url: 'tel:+919363721147' },
];

export function SocialPill() {
  return (
    <div className="flex justify-center items-center py-12 md:py-24 px-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="bg-black/80 backdrop-blur-3xl border border-white/40 rounded-full p-2.5 flex items-center justify-center gap-2 md:gap-5 shadow-[0_30px_70px_-15px_rgba(0,0,0,1),0_0_30px_rgba(255,255,255,0.1)]"
      >
        {socialLinks.map((link, idx) => (
          <motion.a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            title={link.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.15,
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            className="group relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full transition-all duration-300"
          >
            {/* Layered Atmospheric Glow */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full z-0 border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.4),inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
            
            <link.icon 
              size={22} 
              className="relative z-10 text-white/80 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500 flex-shrink-0" 
              strokeWidth={1.5}
            />
            
            {/* Interactive Glow Ring */}
            <div className="absolute inset-[-4px] border border-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            {/* Diffused Outer Glow */}
            <div className="absolute inset-0 bg-white/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
