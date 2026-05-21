import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { useInView } from '../hooks/useInView'
import { fadeInUp } from '../animations/variants'

export const Footer = () => {
  const [ref, isInView] = useInView()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-dark-border/50 bg-dark-surface/50">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={fadeInUp}
        className="section-padding max-w-7xl mx-auto py-12 lg:py-16"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Aamir Khan</h3>
            <p className="text-gray-400 text-sm">Aspiring AI/ML Engineer & Generative AI Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
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
          </div>

          {/* Scroll to top */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-dark-card border border-dark-border text-gray-400 hover:text-white hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border/50 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            Built with React, Tailwind CSS, and{' '}
            <Heart size={14} className="text-accent-pink fill-accent-pink" />{' '}
            passion for AI.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            © {new Date().getFullYear()} Aamir Khan. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}