import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaDownload, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-50"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="section-container relative z-10">
        <div className="text-center fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
              Full Stack Software Engineer
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 bg-clip-text text-transparent">
              Nikhitha
            </span>
            <br />
            <span className="text-gray-800">Beeraka</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-8 max-w-3xl mx-auto">
            Building scalable applications with <span className="text-primary-600">React.js</span>, 
            <span className="text-primary-600"> JavaScript</span>, <span className="text-primary-600">Golang</span>, 
            and <span className="text-primary-600">PostgreSQL</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            <strong className="text-primary-700">2+ years</strong> of experience in developing high-impact, 
            revenue-critical systems. Specialized in optimizing performance, enhancing user experiences, 
            and building robust full-stack solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:nikhithabeeraka2000@gmail.com"
              className="group flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-700 hover:text-primary-600 transition-all duration-300 border border-gray-200 hover:border-primary-300"
            >
              <FaEnvelope className="text-primary-600" />
              <span className="font-medium">Email Me</span>
            </a>
            <a
              href="tel:+918919473207"
              className="group flex items-center gap-3 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl text-gray-700 hover:text-primary-600 transition-all duration-300 border border-gray-200 hover:border-primary-300"
            >
              <FaPhone className="text-primary-600" />
              <span className="font-medium">+91 89194 73207</span>
            </a>
            <a
              href="https://linkedin.com/in/nikhitha-beeraka"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300"
            >
              <FaLinkedin />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>

          <a
            href="#summary"
            className="inline-flex flex-col items-center text-gray-600 hover:text-primary-600 transition-colors group"
          >
            <span className="mb-2 text-sm font-medium">Scroll to explore</span>
            <FaArrowDown className="animate-bounce text-primary-600" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

