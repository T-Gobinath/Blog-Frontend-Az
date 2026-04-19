import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Mail, Phone, Briefcase, Linkedin, 
    Globe, Send, CheckCircle, ChevronRight,
    Sparkles, Target, Users, BookOpen
} from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { Footer } from '../components/ui/Footer';

export function Careers() {
    const [formState, setFormState] = useState('idle'); // idle, submitting, success
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        linkedin: '',
        portfolio: '',
        experience: '1-3 years',
        skills: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormState('success');
            // Scroll to top of the form area
            const mainScroll = document.getElementById('main-scroll');
            if (mainScroll) mainScroll.scrollTo({ top: 300, behavior: 'smooth' });
        }, 1500);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Layout>
            <div className="w-full min-h-screen bg-black text-white">
                {/* Hero Section */}
                <section className="relative pt-32 sm:pt-44 pb-12 sm:pb-20 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-44 overflow-hidden">
                    <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-tima-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-[1200px] mx-auto">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col gap-6 mb-16"
                        >
                            <span className="text-tima-gold font-semibold tracking-[0.2em] uppercase text-sm">Join the Revolution</span>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
                                We're Building <br/>
                                <span className="text-[#3b82f6]">The Future</span> of Industry.
                            </h1>
                            <p className="text-gray-400 text-lg sm:text-xl max-w-2xl leading-relaxed font-light">
                                At TIMA, we don't just follow trends—we set them. Join our global team of engineers, 
                                designers, and visionaries to create solutions that matter.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            {[
                                { icon: Sparkles, title: "Innovation First", desc: "Work on cutting-edge technologies in AI and Robotics." },
                                { icon: Target, title: "Impact Driven", desc: "Your solutions solve real-world industrial problems." },
                                { icon: Users, title: "Global Culture", desc: "Collaborate with experts from around the world." },
                                { icon: BookOpen, title: "Stay Curious", desc: "Continuous learning and growth opportunities." }
                            ].map((item, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.1 * idx }}
                                    className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 group"
                                >
                                    <item.icon className="text-[#3b82f6] mb-6 group-hover:scale-110 transition-transform" size={32} />
                                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Application Section */}
                <section className="pb-24 sm:pb-32 px-4 sm:px-10 md:px-16 lg:px-32 xl:px-44">
                    <div className="max-w-[1000px] mx-auto">
                        <AnimatePresence mode="wait">
                            {formState === 'success' ? (
                                <motion.div 
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center justify-center py-20 px-8 rounded-[40px] bg-white/[0.03] border border-white/10 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-8">
                                        <CheckCircle size={40} className="text-green-500" />
                                    </div>
                                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Application Received!</h2>
                                    <p className="text-gray-400 text-lg max-w-md mb-10">
                                        Thank you for your interest in joining TIMA. Our recruitment team will review 
                                        your details and get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={() => setFormState('idle')}
                                        className="px-10 py-4 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all"
                                    >
                                        Apply for another position
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-white/[0.02] border border-white/5 rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 md:p-16 relative overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex flex-col gap-4 mb-12">
                                            <h2 className="text-2xl sm:text-4xl font-bold">Submit Your Application</h2>
                                            <p className="text-gray-500 font-light text-base sm:text-lg">Tell us who you are and what you're passionate about.</p>
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            {/* Name & Email Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Full Name</label>
                                                    <div className="relative">
                                                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            required
                                                            type="text" 
                                                            name="fullName"
                                                            value={formData.fullName}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="John Doe"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Email Address</label>
                                                    <div className="relative">
                                                        <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            required
                                                            type="email" 
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="john@example.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Phone & Position Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Phone Number</label>
                                                    <div className="relative">
                                                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            required
                                                            type="tel" 
                                                            name="phone"
                                                            value={formData.phone}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="+91 00000 00000"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Position Applied For</label>
                                                    <div className="relative">
                                                        <Briefcase className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            required
                                                            type="text" 
                                                            name="position"
                                                            value={formData.position}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="e.g. Senior Software Engineer"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* LinkedIn & Portfolio Row */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">LinkedIn Profile URL</label>
                                                    <div className="relative">
                                                        <Linkedin className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            type="url" 
                                                            name="linkedin"
                                                            value={formData.linkedin}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="https://linkedin.com/in/..."
                                                        />
                                                    </div>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Portfolio / Personal Website</label>
                                                    <div className="relative">
                                                        <Globe className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-600" size={18} />
                                                        <input 
                                                            type="url" 
                                                            name="portfolio"
                                                            value={formData.portfolio}
                                                            onChange={handleChange}
                                                            className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 pl-14 pr-6 focus:border-[#3b82f6] outline-none transition-all"
                                                            placeholder="https://yourportfolio.com"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Experience & Skills */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Years of Experience</label>
                                                    <select 
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-6 focus:border-[#3b82f6] outline-none transition-all appearance-none"
                                                    >
                                                        <option value="Fresher" className="bg-black">Fresher</option>
                                                        <option value="1-3 years" className="bg-black">1-3 Years</option>
                                                        <option value="3-5 years" className="bg-black">3-5 Years</option>
                                                        <option value="5-10 years" className="bg-black">5-10 Years</option>
                                                        <option value="10+ years" className="bg-black">10+ Years</option>
                                                    </select>
                                                </div>
                                                <div className="space-y-3">
                                                    <label className="text-sm font-semibold text-gray-400 ml-1">Key Skills</label>
                                                    <input 
                                                        required
                                                        type="text" 
                                                        name="skills"
                                                        value={formData.skills}
                                                        onChange={handleChange}
                                                        className="w-full bg-white/[0.05] border border-white/10 rounded-2xl py-4 px-6 focus:border-[#3b82f6] outline-none transition-all"
                                                        placeholder="e.g. React, Node.js, AI Models, Python"
                                                    />
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div className="space-y-3">
                                                <label className="text-sm font-semibold text-gray-400 ml-1">Why do you want to join TIMA?</label>
                                                <textarea 
                                                    required
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows="5"
                                                    className="w-full bg-white/[0.05] border border-white/10 rounded-3xl py-6 px-6 focus:border-[#3b82f6] outline-none transition-all resize-none"
                                                    placeholder="Briefly describe your interest and what you can bring to the team..."
                                                ></textarea>
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-6">
                                                <button 
                                                    disabled={formState === 'submitting'}
                                                    type="submit" 
                                                    className="group w-full sm:w-auto px-12 py-5 bg-[#3b82f6] text-white font-bold rounded-2xl hover:bg-blue-500 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {formState === 'submitting' ? (
                                                        <>
                                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Submit Application
                                                            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </section>
                <Footer />
            </div>
        </Layout>
    );
}
