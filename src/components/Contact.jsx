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
                    className="max-w-4xl mx-auto"
                >
                    <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

                        <div className="relative z-10 p-8 md:p-16 text-center">
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Let's build something <span className="text-primary-400">extraordinary</span> together.
                            </h3>
                            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary-500/10 border border-primary-500/20 text-primary-400 font-bold text-sm">
                                    <div className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></div>
                                    Available for new opportunities
                                </div>
                                <a 
                                    href="mailto:stutijasani25@gmail.com"
                                    className="px-8 py-3 rounded-2xl bg-primary-500 hover:bg-primary-600 text-white font-bold transition-all transform hover:scale-105 shadow-lg shadow-primary-500/25"
                                >
                                    Email Me
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact
