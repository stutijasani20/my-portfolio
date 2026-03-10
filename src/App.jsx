import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AIChatbot from './components/AIChatbot'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 selection:bg-primary-500/30 selection:text-primary-900 dark:selection:text-primary-100">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  )
}

export default App
