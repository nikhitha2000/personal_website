import React from 'react'
import { FaGraduationCap, FaTrophy } from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'M.Tech Integrated in Software Engineering',
      institution: 'Vellore Institute of Technology (VIT), Vellore',
      period: 'Aug 2017 – May 2022',
      cgpa: '8.81',
      icon: <FaGraduationCap className="text-primary-600" />
    },
    {
      degree: 'Higher Secondary Education (MPC)',
      institution: 'Narayana Institute, Nellore',
      period: 'Jun 2015 – Apr 2017',
      cgpa: '9.70',
      icon: <FaTrophy className="text-primary-600" />
    }
  ]

  return (
    <section id="education" className="bg-gradient-to-br from-violet-50/40 via-indigo-50/30 to-blue-50/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(139,92,246,0.12),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Strong academic foundation in software engineering
        </p>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className={`card card-hover text-center fade-in`} style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl">
                  <div className="text-5xl text-primary-700">{edu.icon}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
              <p className="text-primary-600 font-semibold mb-3 text-lg">{edu.institution}</p>
              <p className="text-gray-500 mb-4">{edu.period}</p>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3 rounded-full font-bold shadow-lg">
                <span>CGPA:</span>
                <span className="text-2xl">{edu.cgpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

