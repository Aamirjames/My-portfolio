import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ChevronDown, Sparkles } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { useTypingEffect } from '../hooks/useTypingEffect'
import { Button } from '../components/Button'

export const Hero = () => {
  const phrases = [
    'Aspiring AI/ML Engineer',
    'Generative AI Developer',
    'LLM Integration Specialist',
    'Python Developer',
    'Problem Solver',
  ]
  const { displayText: titleText } = useTypingEffect(phrases)

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-[128px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[128px] animate-pulse-glow animate-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 section-padding max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium"
            >
              <Sparkles size={16} />
              <span>Available for AI/ML Opportunities</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            <div className="h-8 sm:h-10 mb-6">
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-mono">
                {titleText}
                <span className="inline-block w-[3px] h-6 bg-primary-500 ml-1 animate-blink" />
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
            >
              {personalInfo.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <a
                href={personalInfo.resume}
                download="Aamir_Khan_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-dark-card border border-dark-border text-white font-medium hover:border-primary-500/50 hover:bg-dark-surface active:scale-[0.98] transition-all duration-300"
              >
                Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-xl bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Glow rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/30 via-accent-purple/30 to-accent-cyan/30 blur-2xl animate-pulse-glow" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-500/20 to-accent-purple/20 blur-xl animate-pulse-glow animate-delay-300" />

              {/* Profile container */}
              <div className="relative w-full h-full rounded-full bg-gradient-to-br from-dark-card to-dark-surface border-2 border-dark-border overflow-hidden">
                <img
                  src="/profile.jpeg"
                  alt="Aamir Khan"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg bg-dark-card border border-primary-500/30 text-primary-400 text-xs font-medium shadow-lg"
              >
                Python
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg bg-dark-card border border-accent-purple/30 text-accent-purple text-xs font-medium shadow-lg"
              >
                Generative AI
              </motion.div>


              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-dark-card border border-accent-cyan/30 text-accent-cyan text-xs font-medium shadow-lg">
                ML
              </motion.div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 hover:text-primary-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll Down</span>
        <ChevronDown size={20} className="animate-scroll-down" />
      </motion.button>
    </section>
  )
}