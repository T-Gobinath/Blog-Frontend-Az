import React from 'react';

export function OurBusinesses() {
    return (
        <section className="relative w-full bg-white py-14 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
            {/* Section Title */}
            <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-10 sm:mb-14 tracking-tight">
                Our Businesses
            </h2>

            {/* Two-column bordered container */}
            <div className="max-w-[1200px] mx-auto border border-gray-300 rounded-sm flex flex-col md:flex-row">

                {/* Left Column — Manufacturing */}
                <div className="flex-1 p-6 sm:p-8 md:p-10 border-b md:border-b-0 md:border-r border-gray-300">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 border-b-2 border-tima-gold inline-block pb-1">
                        Manufacturing
                    </h3>

                    {/* Materials */}
                    <div className="mb-5">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Materials</h4>
                    </div>

                    {/* Engineering Solutions */}
                    <div className="mb-5">
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Engineering Solutions</h4>
                        <ul className="space-y-1.5 text-gray-600 text-sm sm:text-[15px]">
                            <li>Die Making</li>
                            <li>CNC Machining</li>
                            <li>Laser Cutting & Engraving</li>
                            <li>Light Metal Fabrication</li>
                            <li>Tool Design</li>
                            <li>Injection Molding</li>
                            <li>Prototype Development</li>
                            <li>PCB & Embedded Systems</li>
                            <li>Medical Grade Manufacturing</li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2">Services</h4>
                        <ul className="space-y-1.5 text-gray-600 text-sm sm:text-[15px]">
                            <li>On-site Installation</li>
                            <li>Post Installation Support</li>
                            <li>Bulk Production Services</li>
                        </ul>
                    </div>
                </div>

                {/* Right Column — IT Solutions */}
                <div className="flex-1 p-6 sm:p-8 md:p-10">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-5 border-b-2 border-tima-gold inline-block pb-1">
                        IT Solutions
                    </h3>

                    <ul className="space-y-2.5 text-gray-600 text-sm sm:text-[15px]">
                        <li>Software Development</li>
                        <li>Web & E-Commerce</li>
                        <li>Apps & Automation</li>
                        <li>Cloud & Infrastructure</li>
                        <li>Support Services</li>
                    </ul>
                </div>

            </div>
        </section>
    );
}
