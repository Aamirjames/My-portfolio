import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageSquare, CheckCircle } from 'lucide-react'
import { contactData, personalInfo } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: contactData.email,
    href: `mailto:${contactData.email}`,
    color: 'from-primary-500 to-primary-600',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: contactData.phone,
    href: `tel:${contactData.phone}`,
    color: 'from-accent-emerald to-accent-cyan',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: contactData.location,
    href: '#',
    color: 'from-accent-purple to-accent-pink',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Aamirjames',
    href: contactData.github,
    color: 'from-gray-500 to-gray-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/aamir-khan',
    href: contactData.linkedin,
    color: 'from-blue-500 to-blue-600',
  },
]

export const Contact = () => {
  const [ref, isInView] = useInView()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = () => {
    setTimeout(() => {
      setIsSubmitted(true)
    }, 500)
  }

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Open to AI/ML internships, generative AI roles, and collaborative projects"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-primary-400" />
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-dark-surface/50 border border-dark-border hover:border-primary-500/30 hover:bg-primary-500/5 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} bg-opacity-20 flex items-center justify-center shrink-0`}>
                      <method.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{method.label}</p>
                      <p className="text-white font-medium group-hover:text-primary-400 transition-colors">
                        {method.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="glass-card p-6 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-accent-emerald animate-pulse" />
              <div>
                <p className="text-white font-medium">Available for Opportunities</p>
                <p className="text-sm text-gray-400">Open to AI/ML internships and full-time roles</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInUp}>
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <Send size={20} className="text-primary-400" />
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent-emerald/20 flex items-center justify-center">
                    <CheckCircle size={32} className="text-accent-emerald" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form
                  action="https://formspree.io/f/mbdboake"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      placeholder="Project inquiry / Job opportunity"
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      required
                      className="w-full px-4 py-3 rounded-xl bg-dark-surface border border-dark-border text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}