import { motion } from 'framer-motion'
import { Code2, Server, Brain, Wrench } from 'lucide-react'

const Skills = () => {
    const categories = [
        {
            title: 'Frontend',
            icon: <Code2 className="text-blue-500" />,
            skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Redux', 'MUI', 'Vite', 'HTML5', 'React Router', 'React Hook Form', 'Chart.js', 'Canva'],
        },
        {
            title: 'Backend',
            icon: <Server className="text-green-500" />,
            skills: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'Prisma', 'Twilio'],
        },
        {
            title: 'AI & Data Science',
            icon: <Brain className="text-purple-500" />,
            skills: ['PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'LangChain', 'LLM APIs', 'OpenAI', 'Vector Databases'],
        },
        {
            title: 'Tools & DevOps',
            icon: <Wrench className="text-orange-500" />,
            skills: ['Git', 'GitHub', 'GitLab', 'Docker', 'Jenkins', 'Postman', 'Sentry', 'Jira', 'Prettier', 'NPM'],
        },
    ]

    return (
        <section id="skills" className="py-24 bg-white dark:bg-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                        Technical <span className="text-primary-500">Skills</span>
                    </h2>
                    <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400">
                        A comprehensive set of tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary-500/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {category.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 underline decoration-primary-500/30 decoration-4 underline-offset-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIdx) => (
                                    <span
                                        key={sIdx}
                                        className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
