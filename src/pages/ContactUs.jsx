import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/ui/Navbar'
import { Building2, Radio } from 'lucide-react'
import { Link } from 'react-router-dom'

export function ContactUs() {
    return (
        <Layout>
            <Navbar />
            <div className="w-full min-h-screen bg-black text-white pt-48 sm:pt-56 pb-16 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between lg:items-center items-start mb-16 gap-8 md:gap-12 lg:gap-24">
                    <h1 className="text-4xl sm:text-5xl md:text-[52px] font-normal tracking-tight whitespace-nowrap">
                        What's on your mind?
                    </h1>
                    <p className="text-gray-300 max-w-2xl text-lg sm:text-xl md:text-[22px] leading-relaxed">
                        We're here to help! Tell us what you're looking for and we'll get you connected to the right people.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">

                    {/* Request for Services Card */}
                    <Link to="/services" className="group relative flex flex-col items-center justify-center py-8 px-6 sm:p-16 
                                       border-2 border-gray-600 rounded-lg bg-black hover:border-gray-400 
                                       transition-all duration-300">
                        <Building2 size={32} className="text-[#3b82f6] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                        <h3 className="text-white font-medium tracking-wide">Request for Services</h3>
                    </Link>

                    {/* Media Contacts Card */}
                    <Link to="/media-contacts" className="group relative flex flex-col items-center justify-center py-8 px-6 sm:p-16 
                                       border-2 border-gray-600 rounded-lg bg-black hover:border-gray-400 
                                       transition-all duration-300">
                        <Radio size={32} className="text-[#3b82f6] mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                        <h3 className="text-white font-medium tracking-wide">Media contacts</h3>
                    </Link>

                </div>

            </div>
        </Layout>
    )
}
