import { motion } from 'framer-motion'
import { Send, Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react'

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Get in <span className="text-primary-500">Touch</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
                        <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                            Have a project in mind or just want to chat? Feel free to reach out through any of the platforms below.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                        <div className="relative z-10 p-8 md:p-16">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                                {/* Left Side: CTA */}
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                                        Let's build something <span className="text-primary-400">extraordinary</span> together.
                                    </h3>
                                    <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                    </p>
                                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-500/10 border border-primary-500/20 text-primary-400 font-bold">
                                        <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></div>
                                        Available for new opportunities
                                    </div>
                                </div>

                                {/* Right Side: Contact Channels */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        {
                                            label: 'Email',
                                            value: 'stutijasani25@gmail.com',
                                            icon: Mail,
                                            href: 'mailto:stutijasani25@gmail.com',
                                            color: 'text-primary-400',
                                            bg: 'bg-primary-400/10'
                                        },
                                        {
                                            label: 'LinkedIn',
                                            value: 'stuti-jasani25',
                                            icon: Linkedin,
                                            href: 'https://www.linkedin.com/in/stuti-jasani25/',
                                            color: 'text-blue-400',
                                            bg: 'bg-blue-400/10'
                                        },
                                        {
                                            label: 'GitHub',
                                            value: 'stutijasani20',
                                            icon: Github,
                                            href: 'https://github.com/stutijasani20',
                                            color: 'text-slate-200',
                                            bg: 'bg-slate-200/10'
                                        },
                                        {
                                            label: 'Phone',
                                            value: '+91 94081 99677',
                                            icon: Phone,
                                            href: 'tel:9408199677',
                                            color: 'text-green-400',
                                            bg: 'bg-green-400/10'
                                        }
                                    ].map((item, idx) => (
                                        <motion.a
                                            key={idx}
                                            href={item.href}
                                            target={item.label !== 'Email' && item.label !== 'Phone' ? "_blank" : undefined}
                                            rel={item.label !== 'Email' && item.label !== 'Phone' ? "noopener noreferrer" : undefined}
                                            whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                                            className="p-6 rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 group"
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <item.icon size={24} />
                                            </div>
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                                            <p className="text-sm font-bold text-slate-200 truncate group-hover:text-primary-400 transition-colors">
                                                {item.value}
                                            </p>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
