import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProfessionalSummary from './components/ProfessionalSummary'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProfessionalSummary />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Footer />
    </div>
  )
}

export default App

