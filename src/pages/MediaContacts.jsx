import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Radio, ChevronLeft, Linkedin, Instagram, Twitter, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export function MediaContacts() {
    const socialLinks = [
        { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/company/106382003/' },
        { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/timaintegrated?igsh=MXBrdGpmb3c0M3Zwaw==' },
        { name: 'X / Twitter', icon: Twitter, url: 'https://x.com/Timaintegrated' },
    ];

    const contactDetails = [
        { name: 'Email', icon: Mail, url: 'mailto:support@thetima.com' },
        { name: 'Phone', icon: Phone, url: 'tel:+9193637211477' },
    ];

    return (
        <Layout>
            <div className="w-full min-h-screen bg-black text-white pt-32 sm:pt-48 md:pt-56 pb-16 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-44">

                {/* BACK Button */}
                <div className="mb-12">
                    <Link
                        to="/contact"
                        onClick={() => document.getElementById('main-scroll')?.scrollTo({ top: 0, behavior: 'instant' })}
                        className="inline-flex items-center text-xs tracking-widest font-semibold text-gray-300 hover:text-white transition-colors uppercase gap-1.5"
                    >
                        <ChevronLeft size={16} strokeWidth={2.5} /> BACK
                    </Link>
                </div>

                {/* Header Section */}
                <div className="flex flex-col mb-12 gap-6">
                    <div className="flex items-center gap-4">
                        <Radio size={40} className="text-[#3b82f6]" strokeWidth={1.5} />
                        <h1 className="text-4xl sm:text-5xl md:text-[52px] font-normal tracking-tight">
                            Media Contacts
                        </h1>
                    </div>
                    <p className="text-gray-300 max-w-3xl text-base sm:text-lg leading-relaxed">
                        Contact our communications team for interview requests and the latest updates on our initiatives.
                    </p>
                </div>

                {/* Main Content Sections */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 mb-16">

                    {/* Left Column: Office & Connect */}
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-col mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-[44px] font-light text-white/90 mb-10">
                                Get in Touch
                            </h2>

                            <div className="flex flex-col gap-10">
                                {/* Corporate Office Address */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xl sm:text-2xl text-[#3b82f6] font-light">
                                        Corporate office
                                    </h3>
                                    <div className="text-white/70 font-light text-base sm:text-lg leading-relaxed">
                                        <p>
                                            4th street, Kennet Nagar, Airport road<br />
                                            Alagapan Nagar Extn, Madurai - 625003
                                        </p>
                                    </div>
                                </div>

                                {/* Contact Details Pill (Icon Only) */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Contact Support</h3>
                                    <div className="bg-black/80 backdrop-blur-3xl border border-white/40 rounded-full p-2 flex items-center w-fit gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                        {contactDetails.map((contact, idx) => (
                                            <a
                                                key={idx}
                                                href={contact.url}
                                                title={contact.name}
                                                className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full z-0 border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.4),inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
                                                <contact.icon size={22} className="relative z-10 text-white/80 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500" strokeWidth={1.5} />
                                                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Social Connect Pill (Icon Only) */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">Connect Socially</h3>
                                    <div className="bg-black/80 backdrop-blur-3xl border border-white/40 rounded-full p-2 flex items-center w-fit gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                        {socialLinks.map((social, idx) => (
                                            <motion.a
                                                key={idx}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title={social.name}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                whileHover={{
                                                    scale: 1.15,
                                                    transition: { type: "spring", stiffness: 400, damping: 10 }
                                                }}
                                                className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full transition-all duration-300 overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full z-0 border border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.4),inset_0_0_15px_rgba(255,255,255,0.2)]"></div>
                                                <social.icon size={22} className="relative z-10 text-white/80 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] transition-all duration-500" strokeWidth={1.5} />
                                                <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Globe/Map Section */}
                    <div className="flex-1 flex justify-center lg:justify-end items-start mt-8 lg:mt-24">
                        <div className="w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative">
                            <iframe
                                src="https://www.google.com/maps?q=Kennet+Nagar,+Muthu+Patti,+Madurai,+Tamil+Nadu+625003&hl=en&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0"
                            ></iframe>
                            <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
