import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-indigo-500 bg-clip-text text-transparent">
                            SJ.
                        </span>
                        <p className="mt-2 text-slate-500 dark:text-slate-400 text-sm max-w-xs">
                            Building intelligent applications with Python, React, and AI.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4">
                        <div className="flex items-center gap-6">
                            <a href="https://github.com/stutijasani20" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/stuti-jasani25/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="mailto:stutijasani25@gmail.com" className="text-slate-400 hover:text-primary-500 transition-colors">
                                <Mail size={20} />
                            </a>
                        </div>
                        <p className="text-slate-400 dark:text-slate-600 text-sm">
                            © {new Date().getFullYear()} Stuti Jasani. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
