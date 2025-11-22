import React from 'react'
import { FaCertificate, FaAward } from 'react-icons/fa'

const Certifications = () => {
  const certifications = [
    'Frontend Developer Program — Meta',
    'Full Stack Development Training — Cuvette Tech Pvt. Ltd.',
    'Google Analytics Individual Qualification',
    'JavaScript, SQL — HackerRank'
  ]

  const achievements = [
    'First Place — LINGUAVITAE competition (2021)',
    'Participant — District-level classical dance competition'
  ]

  return (
    <section id="certifications" className="bg-gradient-to-br from-sky-50/40 via-cyan-50/30 to-blue-50/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(14,165,233,0.1),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.08),transparent_50%)]"></div>
      <div className="section-container relative z-10">
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Continuous learning and recognition of excellence
        </p>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div className="card card-hover fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
                  <FaCertificate className="text-4xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Certifications</h3>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Achievements */}
            <div className="card card-hover fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
                  <FaAward className="text-4xl text-primary-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Achievements</h3>
              </div>
              <ul className="space-y-4">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-white text-xs">🏆</span>
                    </div>
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications

