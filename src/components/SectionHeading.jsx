import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { fadeInUp } from '../animations/variants'

export const SectionHeading = ({ 
  subtitle, 
  title, 
  description = null,
  align = 'center',
  className = '' 
}) => {
  const [ref, isInView] = useInView()

  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      className={`${alignClasses[align]} ${className}`}
    >
      {subtitle && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider uppercase rounded-full bg-primary-500/10 text-primary-400 border border-primary-500/20">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {description && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <div className={`mt-6 flex ${align === 'center' ? 'justify-center' : ''}`}>
        <div className="h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-purple" />
      </div>
    </motion.div>
  )
}