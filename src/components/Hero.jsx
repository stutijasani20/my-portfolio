import { motion } from 'framer-motion'
import { Github, Linkedin, FileText, Send, ChevronDown } from 'lucide-react'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
                        Welcome to my portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
                        Hi, I'm <span className="bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">Stuti Jasani</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-8">
                        Python, React and AI Developer
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                        I build intelligent applications using AI, scalable APIs, and modern frontend technologies.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://github.com/stutijasani20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold transition-all hover:shadow-lg"
                        >
                            <Github size={20} />
                            GitHub
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="https://www.linkedin.com/in/stuti-jasani25/?originalSubdomain=in"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-600 text-white font-bold transition-all hover:bg-primary-700 hover:shadow-lg"
                        >
                            <Linkedin size={20} />
                            LinkedIn
                        </motion.a>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
                        >
                            <FileText size={20} />
                            Resume
                        </motion.button>
                        <Link to="contact" smooth={true} duration={500}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-600 text-white font-bold transition-all hover:shadow-lg"
                            >
                                <Send size={20} />
                                Contact Me
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
