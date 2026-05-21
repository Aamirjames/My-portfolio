import { motion } from 'framer-motion'
import { Brain, Code2, Globe, Wrench, Users } from 'lucide-react'
import { skillsData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const iconMap = {
  Brain,
  Code2,
  Globe,
  Wrench,
  Users,
}

export const Skills = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Technical Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit for building AI-powered applications"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillsData.map((category, index) => {
            const IconComponent = iconMap[category.icon]

            return (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                custom={index}
              >
                <div className="group relative h-full">
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                  <div className="relative h-full glass-card p-6 sm:p-8 group-hover:bg-dark-card/80 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20 flex items-center justify-center`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-dark-surface border border-dark-border text-gray-300 text-sm font-medium hover:border-primary-500/30 hover:text-primary-400 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}