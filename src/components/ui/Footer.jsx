import React from 'react';
import { Link } from 'react-router-dom';

function FooterLink({ label, to }) {
    const className = "text-gray-500 hover:text-tima-gold text-sm sm:text-[15px] transition-colors duration-200 leading-relaxed";
    if (to) {
        return <Link to={to} className={className}>{label}</Link>;
    }
    return <a href="#" className={className}>{label}</a>;
}

export function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200">
            {/* Main Footer Links */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 pt-12 sm:pt-16 pb-10 sm:pb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 lg:gap-x-16 gap-y-10">

                    {/* Column 1: About + Partners */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 tracking-wide">About</h4>
                        <ul className="space-y-2 mb-8">
                            <li><FooterLink label="Overview" to="/overview" /></li>
                            <li><FooterLink label="Board of Directors" to="/about/board-of-directors" /></li>
                            <li><FooterLink label="Timeline" to="/about/timeline" /></li>
                        </ul>

                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 tracking-wide">Partners</h4>
                        <ul className="space-y-2">
                            <li><FooterLink label="Who to Handshake" to="/partners/who-to-handshake" /></li>
                        </ul>
                    </div>

                    {/* Column 2: Businesses */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 tracking-wide">Businesses</h4>
                        <ul className="space-y-2">
                            <li><FooterLink label="Solar Projects & Renewable Energy"              to="/ventures/solar-projects" /></li>
                            <li><FooterLink label="Advanced Manufacturing & Engineering"           to="/ventures/advanced-manufacturing" /></li>
                            <li><FooterLink label="Electronics, Robotics & Intelligent Automation" to="/ventures/electronics-robotics" /></li>
                            <li><FooterLink label="3D Printing & Prototyping Services"             to="/ventures/3d-printing" /></li>
                            <li><FooterLink label="IT Software & Cloud Solutions"                  to="/ventures/it-software" /></li>
                            <li><FooterLink label="Artificial Intelligence (AI) Solutions"         to="/ventures/artificial-intelligence" /></li>
                            <li><FooterLink label="Automation & Workflow Engineering"              to="/ventures/automation-workflow" /></li>
                        </ul>
                    </div>

                    {/* Column 3: Careers */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 tracking-wide">Careers</h4>
                        <ul className="space-y-2">
                            <li><FooterLink label="Careers" to="/careers" /></li>
                            <li><FooterLink label="Search & Apply" to="/careers/search-apply" /></li>
                            <li><FooterLink label="Working at TIMA" to="/careers/working-at-tima" /></li>
                        </ul>
                    </div>

                    {/* Column 4: Quick Links */}
                    <div>
                        <h4 className="font-bold text-gray-900 text-base sm:text-lg mb-4 tracking-wide">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><FooterLink label="Contact Us" to="/contact" /></li>
                            <li><FooterLink label="Media Contacts" to="/media-contacts" /></li>
                            <li><FooterLink label="Request Services" to="/services" /></li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200">
                <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="text-gray-400 text-sm sm:text-[15px]">
                        © {new Date().getFullYear()} TIMA. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-[15px]">
                        <a href="#" className="text-gray-500 hover:text-tima-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-tima-gold transition-colors">Legal Notice</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
