import { motion } from 'framer-motion'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const Experience = () => {
    const timeline = [
        {
            role: 'Python, React and AI Developer',
            company: 'Lanet Team Software Solution',
            period: '2023 - Present',
            description: 'Leading development of intelligent web applications and AI-integrated systems.',
            points: [
                'Architecting modular FastAPI applications with structured dependency management and optimized indexing.',
                'Integrating speech-to-text (Whisper) and text summarization models using LangChain for automated documentation tools.',
                'Developing AI-powered data processing systems for automated cleaning and deduplication of large datasets using Pandas.',
                'Implementing high-performance web scrapers with proxy rotation and dynamic content handling using Playwright.',
                'Building responsive and accessible user interfaces with React, Tailwind CSS, and sophisticated state management using Redux.',
                'Collaborating on secure system design, implementing RBAC, and managing end-to-end development cycles from concept to deployment.',
            ],
            skills: ['FastAPI', 'React', 'LangChain', 'Pandas', 'Playwright', 'Redux', 'System Design']
        }
    ]

    return (
        <section id="experience" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Work <span className="text-primary-500">Experience</span>
                        </h2>
                        <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto space-y-12">
                    {timeline.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line - visible on desktop */}
                            <div className="hidden md:block absolute left-1/2 -ml-[1px] w-[2px] h-full bg-slate-200 dark:bg-slate-800"></div>

                            <div className={`md:flex items-center justify-between gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="hidden md:block w-1/2"></div>

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 md:-ml-4 top-0 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-slate-950 z-10 shadow-lg"></div>

                                <div className="w-full md:w-1/2 p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-500/30 transition-all hover:shadow-xl">
                                    <div className="flex items-center gap-3 text-primary-600 dark:text-primary-400 font-bold mb-2">
                                        <Calendar size={18} />
                                        <span>{item.period}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{item.role}</h3>
                                    <p className="text-lg text-slate-500 dark:text-slate-400 font-medium mb-6 flex items-center gap-2">
                                        <Briefcase size={18} />
                                        {item.company}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {item.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                                                <CheckCircle2 size={18} className="text-primary-500 mt-1 flex-shrink-0" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                                        {item.skills.map((skill) => (
                                            <span key={skill} className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                                                #{skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience
