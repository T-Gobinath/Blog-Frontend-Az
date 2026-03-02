import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/ui/Navbar'
import { Building2, ChevronLeft, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export function RequestServices() {
    return (
        <Layout>
            <Navbar />
            {/* Main Wrapper - Split Screen Layout */}
            <div className="relative w-full min-h-screen bg-[#060713] text-white flex flex-col lg:flex-row">
                {/* Custom CSS for checkbox hack without extra plugins */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    input[type="checkbox"]:checked {
                        background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
                        background-color: white;
                        background-size: 100% 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                `}} />

                {/* Left Side: Form Container */}
                <div className="w-full lg:w-1/2 min-h-[120vh] pt-32 sm:pt-40 pb-44 px-6 sm:px-12 md:px-20 lg:px-24 xl:px-40 flex flex-col z-10 relative">

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
                    <div className="flex flex-col mb-10 gap-6">
                        <div className="flex items-center gap-3 text-[#3b82f6]">
                            <Building2 size={24} strokeWidth={1.5} />
                            <h1 className="text-sm font-bold tracking-widest text-white uppercase">
                                REQUEST FOR SERVICES
                            </h1>
                        </div>
                        <p className="text-gray-300 max-w-lg text-lg sm:text-[22px] leading-[1.6] font-light">
                            We've driven growth and purposeful transformation across every industry and we're excited to build on your belief. Tell us a bit more about yourself, so we can get the ball rolling.
                        </p>
                    </div>

                    {/* Form Section */}
                    <form className="flex flex-col gap-10 max-w-lg mt-4" onSubmit={(e) => e.preventDefault()}>

                        {/* Two Columns for Name */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="First name*"
                                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white placeholder-gray-400 transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Last name*"
                                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white placeholder-gray-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Two Columns for Email & Organization */}
                        <div className="flex flex-col sm:flex-row gap-8 sm:gap-6">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Email*"
                                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white placeholder-gray-400 transition-colors"
                                />
                            </div>
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder="Organization*"
                                    className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white placeholder-gray-400 transition-colors"
                                />
                            </div>
                        </div>

                        {/* Select: Region */}
                        <div className="relative">
                            <select className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white appearance-none cursor-pointer transition-colors custom-select">
                                <option value="" disabled selected hidden>Region*</option>
                                <option value="asia-pacific" className="text-white bg-[#060713]">Asia Pacific</option>
                                <option value="anz" className="text-white bg-[#060713]">Australia and New Zealand</option>
                                <option value="europe" className="text-white bg-[#060713]">Europe</option>
                                <option value="india" className="text-white bg-[#060713]">India</option>
                                <option value="latam" className="text-white bg-[#060713]">Latin America</option>
                                <option value="mea" className="text-white bg-[#060713]">Middle East and Africa</option>
                                <option value="na" className="text-white bg-[#060713]">North America</option>
                                <option value="uk" className="text-white bg-[#060713]">United Kingdom</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-2 top-0 pointer-events-none text-gray-400" />
                        </div>

                        {/* Select: Industry */}
                        <div className="relative">
                            <select className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white appearance-none cursor-pointer transition-colors custom-select">
                                <option value="" disabled selected hidden>Industry*</option>
                                <option value="banking" className="text-white bg-[#060713]">Banking</option>
                                <option value="capital-markets" className="text-white bg-[#060713]">Capital Markets</option>
                                <option value="insurance" className="text-white bg-[#060713]">Insurance</option>
                                <option value="healthcare" className="text-white bg-[#060713]">Healthcare</option>
                                <option value="life-sciences" className="text-white bg-[#060713]">Life Sciences</option>
                                <option value="high-tech" className="text-white bg-[#060713]">High Tech</option>
                                <option value="manufacturing" className="text-white bg-[#060713]">Manufacturing</option>
                                <option value="public-services" className="text-white bg-[#060713]">Public Services</option>
                                <option value="retail" className="text-white bg-[#060713]">Retail</option>
                                <option value="travel" className="text-white bg-[#060713]">Travel and Logistics</option>
                                <option value="communications" className="text-white bg-[#060713]">Communications, Media, Information Services</option>
                                <option value="energy" className="text-white bg-[#060713]">Energy, Resources, Utilities</option>
                                <option value="consumer-goods" className="text-white bg-[#060713]">Consumer Packaged Goods and Distribution</option>
                                <option value="education" className="text-white bg-[#060713]">Education</option>
                                <option value="others" className="text-white bg-[#060713]">Others</option>
                            </select>
                            <ChevronDown size={14} className="absolute right-2 top-0 pointer-events-none text-gray-400" />
                        </div>

                        {/* Textarea: Help */}
                        <div className="relative">
                            <textarea
                                placeholder="How can we help you?*"
                                rows="1"
                                className="w-full bg-transparent border-b border-gray-600 focus:border-white outline-none pb-2 text-sm text-white placeholder-gray-400 transition-colors resize-none overflow-hidden"
                            ></textarea>
                            <div className="text-[10px] text-gray-500 text-right mt-1 w-full">(0/1500)</div>
                        </div>

                        {/* Checkboxes */}
                        <div className="flex flex-col gap-5 mt-2">
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-4 h-4 flex-shrink-0 bg-transparent border border-gray-500 rounded-sm appearance-none checked:bg-white transition-colors cursor-pointer" />
                                <span className="text-xs text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                                    I consent to processing of my personal data entered above for TIMA to contact me. *
                                </span>
                            </label>
                            <label className="flex items-start gap-4 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-4 h-4 flex-shrink-0 bg-transparent border border-gray-500 rounded-sm appearance-none checked:bg-white transition-colors cursor-pointer" />
                                <span className="text-xs text-gray-400 leading-relaxed max-w-sm group-hover:text-gray-300 transition-colors">
                                    I would like to receive details about products, services and events from TIMA.
                                </span>
                            </label>
                        </div>

                        {/* Disclaimers */}
                        <div className="flex flex-col gap-3">
                            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
                                For further details on how your personal data will be processed and how your consent can be managed, refer to the <a href="#" className="text-white hover:underline font-medium">TIMA Privacy Notice</a>.
                            </p>
                            <p className="text-xs text-gray-400">
                                *Mandatory fields
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="mt-4 self-start bg-gray-500 hover:bg-gray-400 text-white text-sm font-medium px-10 py-2.5 rounded-full transition-colors w-auto">
                            Send
                        </button>
                    </form>
                </div>

                {/* Right Side: Image Background */}
                <div className="hidden lg:block w-1/2 relative bg-[#060713]">
                    <div className="sticky top-0 right-0 w-full h-screen overflow-hidden">
                        {/* Dark gradient overlay blending the image into the dark left side */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#060713] via-[#060713]/80 to-transparent z-10 w-1/4"></div>
                        <div className="absolute inset-0 bg-black/30 z-10"></div> {/* Global dim */}
                        <img
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
                            alt="Corporate services"
                            className="w-full h-full object-cover object-right grayscale blur-[1px]"
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}
