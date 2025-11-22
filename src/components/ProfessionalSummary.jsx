import React from 'react'
import { FaCode, FaRocket, FaBrain } from 'react-icons/fa'

const ProfessionalSummary = () => {
  const highlights = [
    { icon: <FaCode />, text: '2+ years building scalable applications' },
    { icon: <FaRocket />, text: 'Revenue-critical systems at IndiaMART' },
    { icon: <FaBrain />, text: 'AI-assisted development expertise' }
  ]

  return (
    <section id="summary" className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_50%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A passionate Full Stack Engineer dedicated to building exceptional digital experiences
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="card card-hover fade-in">
            <div className="flex flex-wrap gap-4 mb-6">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-lg border border-primary-100">
                  <span className="text-primary-600">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Full Stack Software Engineer with <strong className="text-primary-700">2+ years of experience</strong> building scalable UI components, 
              optimizing REST APIs, and improving database performance using <strong className="text-primary-700">React.js, JavaScript, Golang, and PostgreSQL</strong>. 
              Previously contributed to high-impact, revenue-critical modules at <strong className="text-primary-700">IndiaMART</strong> including BuyLead (BL) Search 
              and LEAP systems. Post recovery from a health break, strengthened technical expertise through certifications, 
              hands-on projects, and AI-assisted development using <strong className="text-primary-700">Cursor AI</strong>. Ready to bring strong problem-solving, 
              clean code practices, and fast-learning abilities to engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSummary

