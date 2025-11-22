import React from 'react'
import { FaReact, FaNode, FaDatabase, FaFlask, FaTools, FaRobot, FaCode } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <FaReact className="text-primary-600" />,
      skills: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <FaNode className="text-primary-600" />,
      skills: ['Node.js', 'Express.js', 'Golang', 'Java']
    },
    {
      title: 'Database',
      icon: <FaDatabase className="text-primary-600" />,
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Testing',
      icon: <FaFlask className="text-primary-600" />,
      skills: ['Manual Testing', 'API Testing']
    },
    {
      title: 'Tools & Platforms',
      icon: <FaTools className="text-primary-600" />,
      skills: ['Git', 'GitHub', 'Jira', 'CI/CD basics', 'REST APIs', 'VS Code', 'Postman', 'Kibana', 'Docker', 'Agile']
    },
    {
      title: 'Automation & AI Tools',
      icon: <FaRobot className="text-primary-600" />,
      skills: ['Cursor.ai', 'n8n (Automation)', 'Prompt Engineering']
    },
    {
      title: 'Core Concepts',
      icon: <FaCode className="text-primary-600" />,
      skills: ['Data Structures and Algorithms (DSA)', 'DBMS', 'Performance Optimization']
    }
  ]

  return (
    <section id="skills" className="bg-gradient-to-br from-emerald-50/40 via-teal-50/30 to-cyan-50/20 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">
          A comprehensive toolkit for building modern, scalable applications
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="card card-hover fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
                  <div className="text-2xl text-primary-700">{category.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

