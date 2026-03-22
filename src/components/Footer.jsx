import { Github, Linkedin, Mail, Phone } from 'lucide-react'

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

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
                            {[
                                {
                                    icon: Github,
                                    href: 'https://github.com/stutijasani20',
                                    value: 'stutijasani20',
                                    color: 'text-slate-700 dark:text-slate-300',
                                    hoverColor: 'hover:text-slate-900 dark:hover:text-white'
                                },
                                {
                                    icon: Linkedin,
                                    href: 'https://www.linkedin.com/in/stuti-jasani25/?originalSubdomain=in',
                                    value: 'stuti-jasani25',
                                    color: 'text-blue-600 dark:text-blue-400',
                                    hoverColor: 'hover:text-blue-700 dark:hover:text-blue-300'
                                },
                                {
                                    icon: Mail,
                                    href: 'mailto:stutijasani25@gmail.com',
                                    value: 'stutijasani25@gmail.com',
                                    color: 'text-primary-600 dark:text-primary-400',
                                    hoverColor: 'hover:text-primary-700 dark:hover:text-primary-300'
                                },
                                {
                                    icon: Phone,
                                    href: 'tel:+919408199677',
                                    value: '+91 94081 99677',
                                    color: 'text-green-600 dark:text-green-400',
                                    hoverColor: 'hover:text-green-700 dark:hover:text-green-300'
                                }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.href}
                                    target={item.icon !== Mail && item.icon !== Phone ? "_blank" : undefined}
                                    rel={item.icon !== Mail && item.icon !== Phone ? "noopener noreferrer" : undefined}
                                    className={`flex items-center gap-2 text-slate-500 dark:text-slate-400 ${item.hoverColor} transition-colors text-sm font-medium group`}
                                >
                                    <item.icon size={16} className={`${item.color} group-hover:scale-110 transition-transform`} />
                                    <span className="hidden sm:inline">{item.value}</span>
                                </a>
                            ))}
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
