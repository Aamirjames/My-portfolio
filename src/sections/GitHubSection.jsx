import { motion } from 'framer-motion'
import { Github, GitCommit, GitPullRequest, Star, Activity, ExternalLink } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const contributionData = [
  { day: 'Mon', commits: 4, color: 'bg-primary-500' },
  { day: 'Tue', commits: 7, color: 'bg-primary-400' },
  { day: 'Wed', commits: 3, color: 'bg-primary-600' },
  { day: 'Thu', commits: 8, color: 'bg-primary-300' },
  { day: 'Fri', commits: 5, color: 'bg-primary-500' },
  { day: 'Sat', commits: 2, color: 'bg-primary-700' },
  { day: 'Sun', commits: 6, color: 'bg-primary-400' },
]

const stats = [
  { label: 'Repositories', value: '12+', icon: GitCommit },
  { label: 'Contributions', value: '200+', icon: Activity },
  { label: 'Pull Requests', value: '15+', icon: GitPullRequest },
  { label: 'Stars Earned', value: '8+', icon: Star },
]

export const GitHubSection = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="github" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Open Source"
          title="GitHub Activity"
          description="Contributing to the developer community and building in public"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 space-y-8"
        >
          {/* Stats Cards */}
          <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card p-6 text-center hover-lift">
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-purple/20 flex items-center justify-center">
                  <stat.icon size={24} className="text-primary-400" />
                </div>
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Contribution Graph */}
          <motion.div variants={fadeInUp} className="glass-card p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Activity size={20} className="text-primary-400" />
                Weekly Activity
              </h3>
              <span className="text-sm text-gray-400">Last 7 days</span>
            </div>

            <div className="flex items-end gap-3 h-48">
              {contributionData.map((day, index) => (
                <div key={day.day} className="flex-1 flex flex-col items-center gap-2">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={isInView ? { height: `${(day.commits / 8) * 100}%` } : { height: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`w-full rounded-t-lg ${day.color} opacity-80 hover:opacity-100 transition-opacity`}
                  />
                  <span className="text-xs text-gray-500 font-medium">{day.day}</span>
                  <span className="text-xs text-primary-400 font-semibold">{day.commits}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-dark-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <span className="w-3 h-3 rounded-sm bg-primary-700" />
                <span>Less</span>
                <span className="w-3 h-3 rounded-sm bg-primary-600" />
                <span className="w-3 h-3 rounded-sm bg-primary-500" />
                <span className="w-3 h-3 rounded-sm bg-primary-400" />
                <span className="w-3 h-3 rounded-sm bg-primary-300" />
                <span>More</span>
              </div>
              <p className="text-sm text-gray-500">
                <span className="text-primary-400 font-semibold">35</span> commits this week
              </p>
            </div>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-dark-card border border-dark-border text-white font-medium hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 group"
            >
              <Github size={22} className="text-gray-400 group-hover:text-primary-400 transition-colors" />
              <span>View Full GitHub Profile</span>
              <ExternalLink size={16} className="text-gray-500 group-hover:text-primary-400 transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}