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
    <div className="flex justify-center items-center py-12 md:py-16 px-4 mb-8">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#111111]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] md:rounded-full p-2 md:p-3 grid grid-cols-2 lg:flex lg:flex-row items-center justify-center gap-1.5 sm:gap-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-[90vw] sm:max-w-none"
      >
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              group relative flex items-center gap-2.5 px-4 md:px-6 py-2.5 md:py-3.5 rounded-full transition-all duration-300
              ${idx === socialLinks.length - 1 ? 'col-span-2 lg:col-span-1 border-t border-white/5 lg:border-none pt-4 lg:pt-3.5' : ''}
            `}
          >
            {/* Minimal Background Highlight */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-0"></div>
            
            <link.icon 
              size={18} 
              className="relative z-10 text-gray-400 group-hover:text-black transition-colors duration-300 flex-shrink-0" 
              strokeWidth={2}
            />
            <span className="relative z-10 text-[13px] md:text-sm font-semibold tracking-wide text-gray-300 group-hover:text-black transition-colors duration-300 whitespace-nowrap">
              {link.name}
            </span>
            
            {/* Subtle light glow on hover */}
            <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
