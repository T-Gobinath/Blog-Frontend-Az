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
    <div className="flex justify-center items-center py-16 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-white/[0.04] backdrop-blur-2xl border border-white/5 rounded-full p-2 flex flex-wrap justify-center items-center gap-1 shadow-2xl"
      >
        {socialLinks.map((link, idx) => (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 ease-in-out"
          >
            {/* Minimal Background Highlight - Mimicking the "Efficiency" tab in the reference image */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full z-0"></div>
            
            <link.icon 
              size={18} 
              className="relative z-10 text-gray-400 group-hover:text-black transition-colors duration-300" 
              strokeWidth={2}
            />
            <span className="relative z-10 text-sm font-semibold tracking-wide text-gray-300 group-hover:text-black transition-colors duration-300 whitespace-nowrap">
              {link.name}
            </span>
            
            {/* Subtle light glow on hover */}
            <div className="absolute inset-0 bg-white/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
