import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Clock } from 'lucide-react'

const Blog = () => {
    const posts = [
        {
            title: 'LLMs Revolutionize Software Development',
            excerpt: "Large Language Models (LLMs) are no longer just concepts; they are revolutionizing how we solve complex problems and enhance developer productivity.",
            date: 'February 2026',
            readTime: '6 min read',
            tag: 'AI & LLM',
            url: 'https://www.linkedin.com/posts/stuti-jasani25_large-language-models-llms-are-no-longer-activity-7415979030832738304-WSre'
        },
        {
            title: 'Reducing Global Latency with CDNs & Edge Computing',
            excerpt: "An exploration of how CDNs and Edge Computing can significantly reduce global latency and improve the performance of web applications.",
            date: 'January 2026',
            readTime: '5 min read',
            tag: 'Cloud Computing',
            url: 'https://www.linkedin.com/posts/stuti-jasani25_globallatency-cloudcomputing-performanceengineering-activity-7403051227778908160-20Nx'
        },
        {
            title: 'Experimenting with NiceGUI',
            excerpt: "Surprised at how quickly I can build functional web interfaces using only Python. A great tool for rapid UI development.",
            date: 'December 2025',
            readTime: '4 min read',
            tag: 'Python',
            url: 'https://www.linkedin.com/posts/stuti-jasani25_python-nicegui-webdevelopment-activity-7398014072266330112-AhzD'
        },
        {
            title: 'The Power of __init__.py in FastAPI Apps',
            excerpt: "In FastAPI apps, __init__.py is crucial for package organization, relative imports, and setup logic. The quiet hero of modular design.",
            date: 'November 2025',
            readTime: '4 min read',
            tag: 'FastAPI',
            url: 'https://www.linkedin.com/posts/stuti-jasani25_fastapi-python-backenddevelopment-activity-7392367594638295040-jonh'
        },
        {
            title: 'How I learned to love AI and software development',
            excerpt: "A personal reflection on integrating AI tools into development workflows and how it enhances the overall developer experience.",
            date: 'October 2025',
            readTime: '5 min read',
            tag: 'AI',
            url: 'https://www.linkedin.com/posts/stuti-jasani25_softwaredevelopment-ai-llm-activity-7365368638914158595-7hgi'
        }
    ]

    return (
        <section id="blog" className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Blog & <span className="text-primary-500">Thoughts</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
                            Sharing my findings and insights on AI, backend development, and system design.
                        </p>
                    </motion.div>

                    <motion.a
                        href="https://www.linkedin.com/in/stuti-jasani25/recent-activity/all/"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-bold hover:underline"
                    >
                        View all articles <ArrowRight size={20} />
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, idx) => (
                        <motion.a
                            key={idx}
                            href={post.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="group bg-white dark:bg-slate-800 rounded-3xl p-8 border border-slate-100 dark:border-slate-700 hover:shadow-2xl transition-all cursor-pointer block h-full flex flex-col"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider">
                                    {post.tag}
                                </span>
                                <div className="flex items-center gap-2 text-slate-400 text-xs font-medium">
                                    <Clock size={14} />
                                    {post.readTime}
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors">
                                {post.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-2 flex-grow">
                                {post.excerpt}
                            </p>

                            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-700 mt-auto">
                                <span className="text-sm text-slate-400 font-medium">{post.date}</span>
                                <span className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all transform group-hover:rotate-45">
                                    <ArrowRight size={20} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog
