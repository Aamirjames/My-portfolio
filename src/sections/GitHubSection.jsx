import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, BookOpen, AlertCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

const GITHUB_USERNAME = 'Aamirjames'

export const GitHubSection = () => {
  const [ref, isInView] = useInView()
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchGitHub = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
        ])

        if (!profileRes.ok || !reposRes.ok) throw new Error('GitHub API error')

        const profileData = await profileRes.json()
        const reposData = await reposRes.json()

        setProfile(profileData)
        setRepos(reposData.filter(r => !r.fork).slice(0, 6))
      } catch {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchGitHub()
  }, [])

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
          {/* Profile Stats */}
          {loading && (
            <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="glass-card p-6 text-center animate-pulse">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-dark-surface" />
                  <div className="h-8 w-16 mx-auto mb-2 rounded bg-dark-surface" />
                  <div className="h-4 w-20 mx-auto rounded bg-dark-surface" />
                </div>
              ))}
            </motion.div>
          )}

          {error && (
            <motion.div variants={fadeInUp} className="glass-card p-8 text-center">
              <AlertCircle size={32} className="text-gray-500 mx-auto mb-3" />
              <p className="text-gray-400">Couldn't load GitHub data right now.</p>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 transition-colors text-sm"
              >
                Visit GitHub Profile <ExternalLink size={14} />
              </a>
            </motion.div>
          )}

          {!loading && !error && profile && (
            <>
              {/* Stats Cards */}
              <motion.div variants={fadeInUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: 'Public Repos', value: profile.public_repos },
                  { label: 'Followers', value: profile.followers },
                  { label: 'Following', value: profile.following },
                  { label: 'Gists', value: profile.public_gists },
                ].map((stat) => (
                  <div key={stat.label} className="glass-card p-6 text-center hover-lift">
                    <p className="text-3xl sm:text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* Repos Grid */}
              {repos.length > 0 && (
                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {repos.map((repo) => (
                    <a
                      key={repo.id}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-5 flex flex-col gap-3 hover:border-primary-500/30 hover:bg-dark-card/80 transition-all duration-300 group"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <BookOpen size={16} className="text-primary-400 shrink-0" />
                          <span className="text-white font-medium text-sm truncate group-hover:text-primary-400 transition-colors">
                            {repo.name}
                          </span>
                        </div>
                        <ExternalLink size={14} className="text-gray-600 group-hover:text-primary-400 transition-colors shrink-0 mt-0.5" />
                      </div>

                      {repo.description && (
                        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">{repo.description}</p>
                      )}

                      <div className="flex items-center gap-4 mt-auto pt-2 border-t border-dark-border">
                        {repo.language && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-primary-500" />
                            {repo.language}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <Star size={11} /> {repo.stargazers_count}
                        </span>
                        <span className="text-xs text-gray-500 flex items-center gap-1">
                          <GitFork size={11} /> {repo.forks_count}
                        </span>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </>
          )}

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
