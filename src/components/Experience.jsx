import React from 'react'
import { FaBriefcase, FaCode, FaDatabase, FaRocket, FaShieldAlt, FaUsers } from 'react-icons/fa'

const Experience = () => {
  const experiences = [
    {
      title: 'Career Break — Health Recovery',
      company: '',
      period: 'Oct 2023 – Present',
      icon: <FaRocket className="text-primary-600" />,
      description: 'Focused on full recovery while simultaneously upskilling through hands-on projects, certifications, and continuous practice in React.js, JavaScript, Golang, and PostgreSQL. Fully available and ready to contribute immediately.',
      highlights: []
    },
    {
      title: 'System Engineer',
      company: 'IndiaMART Intermesh Ltd',
      period: 'Jun 2022 – Sep 2023',
      icon: <FaBriefcase className="text-primary-600" />,
      description: 'Worked on critical revenue-driving systems including BuyLead (BL) Search and LEAP (Lead Enrichment and Approval Process).',
      highlights: [
        { icon: <FaCode />, text: 'Worked on BuyLead (BL) Search module, IndiaMART\'s most critical revenue-driving system' },
        { icon: <FaCode />, text: 'Enhanced BLSearch with advanced filtering (price-range, "Not Interested", dynamic prioritization)' },
        { icon: <FaCode />, text: 'Improved LEAP workflow for validating, enriching, and approving buyer requirements' },
        { icon: <FaShieldAlt />, text: 'Strengthened lead quality with rule-based enrichment (blacklisted countries, banned products)' },
        { icon: <FaShieldAlt />, text: 'Prevented duplicate/low-quality leads (blocking repeated posts, stricter validation)' },
        { icon: <FaCode />, text: 'Developed scalable REST APIs in Golang (Gin), reducing response times by 30%' },
        { icon: <FaCode />, text: 'Migrated PHP cron scripts to Golang, increasing reliability by 35% and reducing time by 45%' },
        { icon: <FaRocket />, text: 'Migrated LEAP/LMS APIs from PHP to Golang, deployed to GKE' },
        { icon: <FaCode />, text: 'Accelerated frontend development with Cursor AI, achieving 80% faster UI development' },
        { icon: <FaDatabase />, text: 'Optimized PostgreSQL queries, reducing execution time by 40%' },
        { icon: <FaShieldAlt />, text: 'Strengthened platform security by identifying and resolving vulnerabilities' },
        { icon: <FaUsers />, text: 'Collaborated with product and QA teams for seamless integration' }
      ]
    },
    {
      title: 'Software Engineer Intern',
      company: 'Hexagon Capability Center',
      period: 'Sep 2021 – May 2022',
      icon: <FaBriefcase className="text-primary-600" />,
      description: 'Engineered software upgrades and developed REST APIs for enterprise projects.',
      highlights: [
        { icon: <FaRocket />, text: 'Upgraded Luciad software version, improving system stability by 50%' },
        { icon: <FaCode />, text: 'Developed REST APIs for Petrobras project, increasing coverage by 33%' },
        { icon: <FaCode />, text: 'Built PoC for Technip project, reducing cloud resource consumption by 15%' }
      ]
    }
  ]

  return (
    <section id="experience" className="bg-gradient-to-b from-amber-50/40 via-orange-50/30 to-yellow-50/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.1),transparent_50%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Building impactful solutions and driving technical excellence
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-300 via-primary-400 to-primary-500 rounded-full"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-6 top-6 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className={`card card-hover ml-0 md:ml-16 ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                    <div className="flex items-start gap-4 mb-6">
                      <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg">
                        <div className="text-2xl text-primary-700">{exp.icon}</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                        {exp.company && (
                          <p className="text-xl text-primary-600 font-semibold mb-2">{exp.company}</p>
                        )}
                        <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed text-lg">{exp.description}</p>
                    
                    {exp.highlights.length > 0 && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                            <span className="text-primary-600 mt-1 flex-shrink-0">{highlight.icon}</span>
                            <span className="text-gray-700 text-sm">{highlight.text}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

