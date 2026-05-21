import { motion } from 'framer-motion'
import { Code2, Brain, Rocket, Users } from 'lucide-react'
import { aboutData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { GlassCard } from '../components/GlassCard'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const highlights = [
  { icon: Brain, title: 'AI & ML Focus', desc: 'Deep expertise in ML algorithms and neural networks' },
  { icon: Code2, title: 'Full-Stack Dev', desc: 'End-to-end application development experience' },
  { icon: Rocket, title: 'Deployment', desc: 'Production deployments on Hugging Face & cloud' },
  { icon: Users, title: 'Team Leader', desc: 'Led 5-member hackathon team to success' },
]

export const About = () => {
  const [ref, isInView] = useInView()

  // Split summary by double newlines to create paragraphs
  const paragraphs = aboutData.summary.split(/\n\n/)

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="About Me"
          title="Passionate About AI & Innovation"
          description="Driven by curiosity and a commitment to building intelligent solutions"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Text Content */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="prose prose-invert max-w-none">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-base lg:text-lg mb-4 last:mb-0">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {['Machine Learning', 'Generative AI', 'Python', 'React', 'LLM Integration', 'Team Leadership'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-lg bg-dark-card border border-dark-border text-gray-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeInUp}
                custom={index}
              >
                <GlassCard className="h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center mb-4">
                    <item.icon size={24} className="text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
