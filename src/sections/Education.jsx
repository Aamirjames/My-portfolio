import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, BookOpen } from 'lucide-react'
import { educationData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

export const Education = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="education" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Academic Background"
          title="Education"
          description="Building a strong foundation in software engineering and AI"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 max-w-3xl mx-auto"
        >
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              variants={fadeInUp}
              custom={index}
            >
              <div className="relative glass-card p-8 sm:p-10 hover-lift">
                {/* Decorative gradient line */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-full bg-gradient-to-r from-primary-500 via-accent-purple to-accent-cyan" />

                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={32} className="text-primary-400" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="text-lg text-primary-400 font-medium mb-4">{edu.institute}</p>

                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={14} />
                        Remote Learning
                      </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed">{edu.description}</p>

                    <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                      <BookOpen size={16} />
                      <span>Focus: AI/ML, Software Engineering, Web Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}