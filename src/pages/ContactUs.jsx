import React, { useEffect, useState } from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/ui/Navbar'
import { Briefcase, Wifi } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ContactUs() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <Layout>
            <Navbar />
            <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#030014] text-white pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
                
                {/* Background Gradient Blobs */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none"></div>

                {/* Main Content Container with Fade-up Animation */}
                <div 
                    className={`relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center transition-all duration-1000 transform ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                >
                    {/* Header Section */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 mt-16 md:mt-24">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            What's on your mind?
                        </span>
                    </h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed mb-16 font-light">
                        We're here to help! Tell us what you're looking for and we'll get you connected to the right people.
                    </p>

                    {/* Cards Section */}
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full justify-center">

                        {/* Request for Services Card */}
                        <Link 
                            to="/services" 
                            className="group relative flex flex-col items-center text-center p-8 sm:p-10 md:p-12 
                                       w-full md:w-1/2 max-w-md mx-auto
                                       bg-white/[0.04] backdrop-blur-2xl
                                       border border-white/[0.12] rounded-[24px]
                                       shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]
                                       hover:bg-white/[0.06] hover:border-blue-400/50
                                       active:scale-[0.98] active:bg-white/[0.08]
                                       hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(59,130,246,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]
                                       transition-all duration-500 ease-out overflow-hidden"
                        >
                            {/* Card Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <Briefcase size={32} className="text-blue-400" strokeWidth={1.5} />
                            </div>
                            <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">Request for Services</h3>
                            <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed">
                                Explore how our tailored services can help grow and scale your business.
                            </p>
                        </Link>

                        {/* Media Contacts Card */}
                        <Link 
                            to="/media-contacts" 
                            className="group relative flex flex-col items-center text-center p-8 sm:p-10 md:p-12 
                                       w-full md:w-1/2 max-w-md mx-auto
                                       bg-white/[0.04] backdrop-blur-2xl
                                       border border-white/[0.12] rounded-[24px]
                                       shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.1)]
                                       hover:bg-white/[0.06] hover:border-cyan-400/50
                                       active:scale-[0.98] active:bg-white/[0.08]
                                       hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(6,182,212,0.2),inset_0_1px_1px_rgba(255,255,255,0.2)]
                                       transition-all duration-500 ease-out overflow-hidden"
                        >
                            {/* Card Hover Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            
                            <div className="relative z-10 w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                                <Wifi size={32} className="text-cyan-400" strokeWidth={1.5} />
                            </div>
                            <h3 className="relative z-10 text-xl sm:text-2xl font-bold text-white mb-3 tracking-wide">Media Contacts</h3>
                            <p className="relative z-10 text-gray-400 text-sm md:text-base leading-relaxed">
                                Get in touch with our PR and communications team for media inquiries.
                            </p>
                        </Link>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
