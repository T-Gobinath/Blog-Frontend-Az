import React from 'react'
import { Layout } from '../components/layout/Layout'
import { Navbar } from '../components/ui/Navbar'
import { Radio, ChevronLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function MediaContacts() {
    return (
        <Layout>
            <Navbar />
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
                        For press inquiries, interview requests, and media relations, please connect with our communications team. We are happy to provide information regarding our current initiatives.
                    </p>
                </div>

                {/* Placeholder Content Area */}
                <div className="w-full h-64 border border-white/10 rounded-xl bg-white/5 flex items-center justify-center p-8 text-center text-gray-400">
                    <p>Media inquiry form / contact details will go here.</p>
                </div>

            </div>
        </Layout>
    )
}
