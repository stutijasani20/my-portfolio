import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Filter, Code2 } from 'lucide-react'

const Projects = () => {
    const [filter, setFilter] = useState('All')

    const projects = [
        {
            title: 'AI Medical Image Analyzer',
            description: 'An advanced system utilizing computer vision to analyze medical images and provide diagnostic insights.',
            tech: ['Python', 'FastAPI', 'React', 'PyTorch', 'OpenCV'],
            category: 'AI',
            github: 'https://github.com/stutijasani20/ai-medical-image-analyzer',
            live: '#',
        },
        {
            title: 'Meeting Summarizer',
            description: 'Automated tool that transcribes and summarizes video/audio meetings using LLMs.',
            tech: ['Python', 'LangChain', 'OpenAI', 'MoviePy', 'Whisper'],
            category: 'AI',
            github: 'https://github.com/stutijasani20/meeting-summarizer',
            live: '#',
        },
        {
            title: 'AI Business Metrics Dashboard',
            description: 'Real-time dashboard for analyzing business performance metrics with AI-driven forecast insights.',
            tech: ['React', 'Tailwind', 'Python', 'PostgreSQL', 'ChartJS'],
            category: 'Fullstack',
            github: 'https://github.com/stutijasani20/ai-business-analyzer',
            live: '#',
        },
        {
            title: 'AI CSV Data Cleaner',
            description: 'Intelligent tool for automated data cleaning, deduplication, and normalization of large CSV datasets.',
            tech: ['Python', 'Pandas', 'React', 'FastAPI', 'LLM'],
            category: 'Fullstack',
            github: 'https://github.com/stutijasani20/ai-csv-data-cleaner',
            live: '#',
        },
        {
            title: 'Web Scraper',
            description: 'High-performance web scraper capable of extracting data from dynamic websites with proxy rotation.',
            tech: ['Python', 'Playwright', 'BeautifulSoup', 'React'],
            category: 'Python',
            github: 'https://github.com/stutijasani20/web-scrapper',
            live: '#',
        },
        {
            title: 'FAQ Search Engine',
            description: 'A dedicated search engine for Frequently Asked Questions (FAQs) using optimized search indexing.',
            tech: ['React', 'JavaScript', 'Tailwind', 'Search Logic'],
            category: 'Fullstack',
            github: 'https://github.com/stutijasani20/mini-search',
            live: '#',
        },
        {
            title: 'Task Management App',
            description: 'Robust task management system with Redux persistence, filtering, and cross-session state.',
            tech: ['React', 'Redux', 'Tailwind', 'Node.js'],
            category: 'Fullstack',
            github: 'https://github.com/stutijasani20/task-management-application',
            live: '#',
        },
    ]

    const categories = ['All', 'AI', 'Fullstack', 'Python']

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter)

    return (
        <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Featured <span className="text-primary-500">Projects</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                            A selection of my recent work in AI, backend systems, and full-stack development.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${filter === cat
                                    ? 'bg-primary-500 text-white shadow-lg'
                                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col"
                            >
                                <div className="p-8 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-700 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                            <Code2 size={24} />
                                        </div>
                                        <div className="flex gap-4">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-400 hover:text-primary-500 transition-colors"
                                            >
                                                <Github size={20} />
                                            </a>
                                            <a
                                                href={project.live}
                                                className="text-slate-400 hover:text-primary-500 transition-colors"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}

export default Projects
