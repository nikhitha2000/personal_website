import React from 'react'
import { FaReact, FaCode, FaRocket, FaCheckCircle } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Assisted UI Development with Cursor AI',
      tech: 'React.js, Node.js, Cursor AI, JavaScript',
      icon: <FaCode className="text-primary-600" />,
      highlights: [
        'Accelerated UI development by leveraging Cursor AI, achieving 75–85% code generation through natural language prompts',
        'Built and migrated 3 complete React UI screens along with corresponding Node.js backend logic entirely through prompt-driven development',
        'Utilized Cursor\'s multi-file editing, inline completions, and refactoring tools to streamline development workflow',
        'Applied project-specific coding standards using .cursorrules to ensure consistent architecture and high-quality output',
        'Implemented YOLO test generation mode for quick unit test creation, improving validation cycles and debugging efficiency',
        'Improved developer onboarding and collaboration through natural language explanations and AI-assisted code understanding'
      ]
    },
    {
      title: 'Performance-Optimized Task & Notes Platform',
      tech: 'React.js, JavaScript, Local Storage',
      icon: <FaReact className="text-primary-600" />,
      highlights: [
        'Developed a highly responsive notes and task management interface with improved usability',
        'Resulted in noticeably faster interactions on low-end devices',
        'Integrated color-coded categorization, instant search, and optimized local caching to enhance user workflow efficiency'
      ]
    }
  ]

  return (
    <section id="projects" className="bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-rose-50/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_60%,rgba(168,85,247,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(236,72,153,0.08),transparent_50%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Innovative solutions showcasing technical expertise and problem-solving skills
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`card card-hover fade-in ${index % 2 === 0 ? 'lg:mt-8' : ''}`}>
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
                  <div className="text-3xl text-primary-700">{project.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(', ').map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ul className="space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                    <FaCheckCircle className="text-primary-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

