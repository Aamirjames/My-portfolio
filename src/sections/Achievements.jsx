import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Award, Trophy, Zap, Target, Users, Cpu } from 'lucide-react'
import { achievementsData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const iconMap = {
  Award,
  Trophy,
  Zap,
  Target,
  Users,
  Cpu,
}

const AnimatedCounter = ({ value, suffix, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const numValue = parseInt(value)
    const controls = animate(0, numValue, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (latest) => setCount(Math.round(latest)),
    })

    return () => controls.stop()
  }, [isInView, value])

  return (
    <span className="text-4xl sm:text-5xl font-bold gradient-text">
      {count}{suffix}
    </span>
  )
}

export const Achievements = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="achievements" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Milestones"
          title="Achievements & Impact"
          description="Key accomplishments that define my journey in AI and development"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievementsData.map((achievement, index) => {
            const IconComponent = iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length]]

            return (
              <motion.div
                key={achievement.title}
                variants={fadeInUp}
                custom={index}
              >
                <div className="group relative h-full">
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary-500/50 via-accent-purple/50 to-accent-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

                  <div className="relative h-full glass-card p-8 text-center group-hover:bg-dark-card/80 transition-all duration-500">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent size={28} className="text-primary-400" />
                    </div>

                    <AnimatedCounter 
                      value={achievement.value} 
                      suffix={achievement.suffix}
                      isInView={isInView}
                    />

                    <h3 className="text-lg font-semibold text-white mt-3 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {achievement.description}
                    </p>
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