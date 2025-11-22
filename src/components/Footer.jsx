import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto text-lg leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:nikhithabeeraka2000@gmail.com"
              className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-primary-400"
            >
              <FaEnvelope className="text-primary-400" />
              <span className="font-medium">Email Me</span>
            </a>
            <a
              href="tel:+918919473207"
              className="group flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-primary-400"
            >
              <FaPhone className="text-primary-400" />
              <span className="font-medium">+91 89194 73207</span>
            </a>
            <a
              href="https://linkedin.com/in/nikhitha-beeraka"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <FaLinkedin />
              <span className="font-medium">LinkedIn</span>
            </a>
          </div>
          <div className="border-t border-gray-700/50 pt-8">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Nikhitha Beeraka. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

