import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experienceData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

export const Experience = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Professional Journey"
          title="Work Experience"
          description="Hands-on experience in AI development and team leadership"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-accent-purple to-transparent" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeInUp}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-bg shadow-lg shadow-primary-500/50 z-10" />

              {/* Content */}
              <div className={`ml-12 lg:ml-0 lg:w-1/2 ${
                index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12'
              }`}>
                <div className="glass-card p-6 sm:p-8 hover-lift">
                  <div className={`flex items-center gap-3 mb-4 ${
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  }`}>
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
                      <Briefcase size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-primary-400 text-sm font-medium">{exp.program}</p>
                    </div>
                  </div>

                  <div className={`flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400 ${
                    index % 2 === 0 ? 'lg:justify-end' : ''
                  }`}>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      Remote
                    </span>
                  </div>

                  <h4 className="text-lg font-semibold text-gray-200 mb-3">{exp.role}</h4>

                  <ul className={`space-y-2 ${
                    index % 2 === 0 ? 'lg:text-right' : ''
                  }`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className={`flex items-start gap-2 text-gray-400 text-sm ${
                        index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                      }`}>
                        <ChevronRight size={16} className="text-primary-500 mt-0.5 shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden lg:block lg:w-1/2" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}