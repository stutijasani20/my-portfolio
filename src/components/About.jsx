import { motion } from 'framer-motion'
import { Code2, Brain, Database, Layers } from 'lucide-react'

const About = () => {
    const stats = [
        { label: 'Experties', value: 'React & Python' },
        { label: 'AI Focus', value: 'LLMs & LangChain' },
        { label: 'Architecture', value: 'Scalable APIs' },
        { label: 'Backend', value: 'Microservices' },
    ]

    return (
        <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                            About <span className="text-primary-500">Me</span>
                        </h2>
                        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            <p>
                                I am a dedicated developer with a strong focus on building intelligent and scalable applications. My expertise lies at the intersection of modern frontend development with React and a robust backend foundation using Python.
                            </p>
                            <p>
                                I specialize in integrating AI systems using LLM APIs, LangChain, and vector databases to create smart, data-driven solutions. My experience ranges from crafting intuitive user interfaces to designing complex system architectures and scalable RESTful APIs.
                            </p>
                            <p>
                                Whether it's implementing RBAC systems, developing messaging modules, or building AI-powered analysis tools, I thrive on solving complex technical challenges and delivering high-quality, professional software.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700">
                                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest mb-1 font-bold">{stat.label}</p>
                                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400">{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        <div className="space-y-6">
                            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 transition-transform">
                                <Code2 size={40} className="text-primary-500 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Frontend</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Crafting beautiful, responsive interfaces with React and Tailwind CSS.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 transition-transform">
                                <Database size={40} className="text-indigo-500 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Backend</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Building robust servers and APIs using Python, FastAPI, and Django.</p>
                            </div>
                        </div>
                        <div className="space-y-6 pt-12">
                            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 transition-transform">
                                <Brain size={40} className="text-purple-500 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">AI & LLM</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Leveraging LangChain and LLM APIs for intelligent automation.</p>
                            </div>
                            <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border border-slate-100 dark:border-slate-700 transform hover:-translate-y-2 transition-transform">
                                <Layers size={40} className="text-blue-500 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Systems</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Designing scalable architectures and efficient data workflows.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About
