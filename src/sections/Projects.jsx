import { motion } from 'framer-motion'
import { ExternalLink, Github, Layers, CheckCircle2 } from 'lucide-react'
import { projectsData } from '../data/portfolioData'
import { SectionHeading } from '../components/SectionHeading'
import { useInView } from '../hooks/useInView'
import { fadeInUp, staggerContainer } from '../animations/variants'

export const Projects = () => {
  const [ref, isInView] = useInView()

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-padding max-w-7xl mx-auto">
        <SectionHeading
          subtitle="Featured Work"
          title="Projects & Applications"
          description="Real-world applications built with cutting-edge technologies"
        />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={staggerContainer}
          className="mt-16 grid lg:grid-cols-2 gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.name}
              variants={fadeInUp}
              custom={index}
            >
              <div className="group relative h-full">
                {/* Gradient border */}
                <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm`} />

                <div className="relative h-full glass-card overflow-hidden group-hover:bg-dark-card/80 transition-all duration-500">
                  {/* Project Banner */}
                  <div className={`h-48 sm:h-56 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none' }}
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-dark-bg/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <Layers size={48} className="text-white/80 mx-auto mb-3" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{project.name}</h3>
                        <p className="text-white/70 text-sm mt-1">{project.type}</p>
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/10 blur-xl" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-white/10 blur-xl" />
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-md bg-dark-surface border border-dark-border text-gray-300 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Features</h4>
                      <ul className="space-y-1.5">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-gray-400 text-sm">
                            <CheckCircle2 size={14} className="text-primary-500 shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-surface border border-dark-border text-gray-300 text-sm font-medium hover:border-primary-500/30 hover:text-white transition-all duration-300"
                      >
                        <Github size={16} />
                        Source Code
                      </a>
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