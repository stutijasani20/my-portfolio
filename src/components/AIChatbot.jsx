import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, Send, Bot, User } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const AIChatbot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { role: 'bot', text: "Hi there! I'm Stuti's AI assistant. Ask me anything about her skills or projects!" }
    ])
    const [input, setInput] = useState('')
    const scrollRef = useRef(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg = { role: 'user', text: input }
        setMessages(prev => [...prev, userMsg])
        setInput('')

        // Simple simulated response logic
        setTimeout(() => {
            let response = "That's a great question! Stuti has extensive experience in AI, Python, and React, currently working at Lanet Team Software Solution. You can see her projects like the 'AI Medical Image Analyzer', 'FAQ Search Engine', or 'Task Management App' above for more details."

            const lowerInput = input.toLowerCase()
            if (lowerInput.includes('skills')) {
                response = "Stuti is proficient in Python (FastAPI/Django), React, AI (LangChain/LLMs), and DevOps tools like Docker and Jenkins."
            } else if (lowerInput.includes('project')) {
                response = "Her featured projects include an AI Medical Image Analyzer, an FAQ Search Engine, a Meeting Summarizer using LLMs, and a Task Management Application."
            } else if (lowerInput.includes('contact')) {
                response = "You can reach Stuti via the contact form on this page, or through her LinkedIn and GitHub links in the navigation bar."
            } else if (lowerInput.includes('experience') || lowerInput.includes('work')) {
                response = "Stuti is currently a Python, React and AI Developer at Lanet Team Software Solution, where she builds intelligent web applications and AI systems."
            }

            setMessages(prev => [...prev, { role: 'bot', text: response }])
        }, 1000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-[100]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-6 bg-gradient-to-r from-primary-600 to-indigo-600 text-white flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <Bot size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold">Stuti's AI Assistant</h3>
                                    <p className="text-xs opacity-75">Online & Ready to help</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 scroll-smooth">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user'
                                        ? 'bg-primary-500 text-white rounded-tr-none shadow-lg'
                                        : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-100 dark:border-slate-700'
                                        }`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                    placeholder="Ask something..."
                                    className="w-full pl-5 pr-12 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white"
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-all"
                                >
                                    <Send size={20} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-indigo-600 text-white flex items-center justify-center shadow-2xl hover:shadow-primary-500/50 transition-all"
            >
                <MessageSquare size={30} />
            </motion.button>
        </div>
    )
}

export default AIChatbot
