import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Radio, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function MediaContacts() {
    return (
        <Layout>
            <div className="w-full min-h-screen bg-black text-white pt-48 sm:pt-56 pb-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44">

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
                    <p className="text-gray-300 max-w-3xl text-lg sm:text-lg leading-relaxed">
                        Contact our communications team for interview requests and the latest updates on our initiatives.
                    </p>
                </div>

                {/* Get in Touch Section */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 xl:gap-24 mb-16">
                    {/* Contact Information */}
                    <div className="flex flex-col md:min-w-[400px]">
                        <h2 className="text-3xl sm:text-4xl md:text-[44px] font-light text-white/90 mb-10">
                            Get in Touch
                        </h2>

                        <h3 className="text-xl sm:text-2xl text-[#3b82f6] font-light mb-8">
                            Corporate office
                        </h3>

                            <div className="flex flex-col gap-8">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 text-white/80">
                                        <svg width="22" height="26" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 28 12 28C12 28 24 21 24 12C24 5.37258 18.6274 0 12 0ZM12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="text-lg sm:text-lg leading-relaxed text-white/80 font-light">
                                        <p>4th street, Kennet Nagar, Airport road</p>
                                        <p>Alagapan Nagar Extn, Madurai - 625003</p>
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 pt-2">
                                    <div className="flex items-center gap-3 group">
                                        <div className="flex-shrink-0 text-white/80 group-hover:text-[#3b82f6] transition-colors">
                                            <svg width="22" height="17" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M21 0H3C1.35 0 0.015 1.35 0.015 3L0 15C0 16.65 1.35 18 3 18H21C22.65 18 24 16.65 24 15V3C24 1.35 22.65 0 21 0ZM21 4.5L12 10.125L3 4.5V3L12 8.625L21 3V4.5Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <a href="mailto:support@thetima.com" className="text-lg sm:text-xl text-[#3b82f6] font-light hover:underline">
                                            support@thetima.com
                                        </a>
                                    </div>

                                    <div className="flex items-center gap-3 group">
                                        <div className="flex-shrink-0 text-white/80 group-hover:text-[#3b82f6] transition-colors">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="text-lg sm:text-xl text-[#3b82f6] font-light tracking-wide flex items-center gap-2 flex-wrap">
                                            <a href="tel:+919363721147" className="hover:underline">
                                                +91 93637 21147
                                            </a>
                                            <span className="text-white/30 text-sm pb-0.5">/</span>
                                            <a href="tel:+918015001407" className="hover:underline">
                                                80150 01407
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Frame */}
                        <div className="w-full lg:w-1/2 max-w-[400px] aspect-square rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative self-start">
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
                            {/* Subtle dark gradient overlay to blend corners */}
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                        </div>
                    </div>

            </div>
        </Layout>
    )
}
