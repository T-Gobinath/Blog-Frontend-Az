import React from 'react'
import { useStore } from '../../stores/useStore'

export function Contact() {
    const theme = useStore((state) => state.theme)
    const light = theme === 'light'

    return (
        <div className={light ? 'bg-white text-gray-900' : 'bg-black text-white'}>
            {/* Social Impact */}
            <section className={`py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 ${light ? 'bg-green-50' : 'bg-gradient-to-r from-green-900/20 to-black'}`}>
                <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 ${light ? 'text-green-600' : 'text-green-400'}`}>TIMA Social Foundation</h2>
                        <p className={`text-xs sm:text-base mb-6 leading-relaxed ${light ? 'text-gray-700' : 'text-gray-300'}`}>
                            F1-We believe that technology should empower humanity, not just industry. Through our rural innovation labs and educational grants, we are bridging the digital divide.
                        </p>
                        <div className="grid grid-cols-2 gap-4 sm:gap-6">
                            <div className={`p-4 rounded border-l-2 border-green-500 ${light ? 'bg-white shadow-sm' : 'bg-white/5'}`}>
                                <h3 className={`text-lg sm:text-2xl font-bold ${light ? 'text-gray-900' : 'text-white'}`}>10k+</h3>
                                <p className={`text-xs sm:text-sm ${light ? 'text-gray-500' : 'text-gray-400'}`}>Students Up-skilled</p>
                            </div>
                            <div className={`p-4 rounded border-l-2 border-green-500 ${light ? 'bg-white shadow-sm' : 'bg-white/5'}`}>
                                <h3 className={`text-lg sm:text-2xl font-bold ${light ? 'text-gray-900' : 'text-white'}`}>50+</h3>
                                <p className={`text-xs sm:text-sm ${light ? 'text-gray-500' : 'text-gray-400'}`}>Rural Labs</p>
                            </div>
                        </div>
                    </div>
                    <div className={`w-full md:w-1/2 h-[200px] sm:h-[300px] rounded-lg flex items-center justify-center text-sm sm:text-base ${light ? 'bg-gray-100 text-gray-500' : 'bg-gray-800 text-gray-500'}`}>
                        [Impact Image Placeholder]
                    </div>
                </div>
            </section>

            {/* Business Handshake / Contact */}
            <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-8 relative">
                <div className={`container mx-auto max-w-4xl p-6 sm:p-8 md:p-12 rounded-2xl shadow-2xl ${light
                    ? 'bg-white border border-gray-200'
                    : 'bg-gray-900/80 backdrop-blur-md border border-white/10'
                    }`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center text-tima-gold">Join the Revolution</h2>
                    <p className={`text-center text-xs sm:text-base mb-8 md:mb-12 ${light ? 'text-gray-500' : 'text-gray-400'}`}>Partnership Inquiries & Strategic Alliances</p>

                    <form className="space-y-4 sm:space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className={`text-xs sm:text-sm mb-1 sm:mb-2 ${light ? 'text-gray-500' : 'text-gray-500'}`}>Company Name</label>
                                <input type="text" className={`border rounded p-3 text-xs sm:text-base outline-none transition-colors min-h-[44px] focus:border-tima-gold ${light
                                    ? 'bg-gray-50 border-gray-300 text-gray-900'
                                    : 'bg-black/50 border-white/10 text-white'
                                    }`} placeholder="Enter company name" />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-xs sm:text-sm mb-1 sm:mb-2 ${light ? 'text-gray-500' : 'text-gray-500'}`}>Contact Person</label>
                                <input type="text" className={`border rounded p-3 text-xs sm:text-base outline-none transition-colors min-h-[44px] focus:border-tima-gold ${light
                                    ? 'bg-gray-50 border-gray-300 text-gray-900'
                                    : 'bg-black/50 border-white/10 text-white'
                                    }`} placeholder="Enter your name" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <div className="flex flex-col">
                                <label className={`text-xs sm:text-sm mb-1 sm:mb-2 ${light ? 'text-gray-500' : 'text-gray-500'}`}>Email</label>
                                <input type="email" className={`border rounded p-3 text-xs sm:text-base outline-none transition-colors min-h-[44px] focus:border-tima-gold ${light
                                    ? 'bg-gray-50 border-gray-300 text-gray-900'
                                    : 'bg-black/50 border-white/10 text-white'
                                    }`} placeholder="contract@company.com" />
                            </div>
                            <div className="flex flex-col">
                                <label className={`text-xs sm:text-sm mb-1 sm:mb-2 ${light ? 'text-gray-500' : 'text-gray-500'}`}>Partnership Type</label>
                                <select className={`border rounded p-3 text-xs sm:text-base outline-none transition-colors min-h-[44px] focus:border-tima-gold ${light
                                    ? 'bg-gray-50 border-gray-300 text-gray-900'
                                    : 'bg-black/50 border-white/10 text-white'
                                    }`}>
                                    <option>OEM Manufacturing</option>
                                    <option>Technology Integration</option>
                                    <option>Investment</option>
                                    <option>Distribution</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className={`text-xs sm:text-sm mb-1 sm:mb-2 ${light ? 'text-gray-500' : 'text-gray-500'}`}>Message</label>
                            <textarea rows="4" className={`border rounded p-3 text-xs sm:text-base outline-none transition-colors min-h-[120px] focus:border-tima-gold ${light
                                ? 'bg-gray-50 border-gray-300 text-gray-900'
                                : 'bg-black/50 border-white/10 text-white'
                                }`} placeholder="Tell us about your proposal..."></textarea>
                        </div>

                        <button className="w-full py-3 sm:py-4 bg-tima-gold text-black font-bold rounded hover:bg-white transition-colors uppercase tracking-widest text-xs sm:text-sm md:text-base min-h-[44px]">
                            Initiate Handshake
                        </button>
                    </form>
                </div>
            </section>

            <footer className={`py-6 sm:py-8 text-center text-xs sm:text-sm border-t ${light
                ? 'bg-gray-50 text-gray-500 border-gray-200'
                : 'bg-black text-gray-600 border-white/5'
                }`}>
                <p>&copy; {new Date().getFullYear()} TIMA Group. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
