import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'
import { ParticleBackground } from './components/ParticleBackground'
import { Hero } from './sections/Hero'
import { About } from './sections/About'
import { Skills } from './sections/Skills'
import { Experience } from './sections/Experience'
import { Projects } from './sections/Projects'
import { Education } from './sections/Education'
import { Achievements } from './sections/Achievements'
import { GitHubSection } from './sections/GitHubSection'
import { Contact } from './sections/Contact'

const LoadingScreen = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[100] bg-dark-bg flex flex-col items-center justify-center"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
    >
      <Loader2 size={48} className="text-primary-500" />
    </motion.div>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mt-4 text-gray-400 font-medium"
    >
      Loading Portfolio...
    </motion.p>
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: 200 }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      className="mt-4 h-1 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple"
    />
  </motion.div>
)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {!isLoading && (
        <div className="relative min-h-screen bg-dark-bg text-white overflow-x-hidden">
          {/* Background Effects */}
          <ParticleBackground />

          {/* Ambient gradient orbs */}
          <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-purple/5 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[200px]" />
          </div>

          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="relative z-10">
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Achievements />
            <GitHubSection />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Custom cursor glow (desktop only) */}
          <CustomCursor />
        </div>
      )}
    </>
  )
}

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 })

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const handleMove = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) return null

  return (
    <>
      {/* Small solid dot — follows cursor exactly */}
      <div
        className="custom-cursor"
        style={{ left: pos.x - 5, top: pos.y - 5 }}
        aria-hidden="true"
      />
      {/* Larger hollow ring — trails slightly */}
      <div
        className="cursor-follower"
        style={{ left: pos.x - 18, top: pos.y - 18 }}
        aria-hidden="true"
      />
    </>
  )
}

export default App