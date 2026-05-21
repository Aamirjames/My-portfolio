import { motion } from 'framer-motion'
import { ArrowRight, Download, ExternalLink } from 'lucide-react'

const iconMap = {
  arrow: ArrowRight,
  download: Download,
  external: ExternalLink,
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  href = null,
  onClick = null,
  className = '',
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500/50'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:shadow-lg hover:shadow-primary-500/25 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-dark-card border border-dark-border text-white hover:border-primary-500/50 hover:bg-dark-surface active:scale-[0.98]',
    outline: 'border-2 border-primary-500 text-primary-400 hover:bg-primary-500/10 active:scale-[0.98]',
    ghost: 'text-gray-400 hover:text-white hover:bg-white/5 active:scale-[0.98]',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const IconComponent = icon ? iconMap[icon] : null

  const Component = href ? motion.a : motion.button

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
      {IconComponent && <IconComponent size={size === 'lg' ? 20 : size === 'md' ? 18 : 16} />}
    </Component>
  )
}