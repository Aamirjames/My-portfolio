import { motion } from 'framer-motion'

export const GlassCard = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      className={`glass-card p-6 sm:p-8 ${hover ? 'hover-lift' : ''} ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      {...props}
    >
      {children}
    </motion.div>
  )
}