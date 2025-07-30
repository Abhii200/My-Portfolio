import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Software Engineer', 'Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;

    const typeText = () => {
      if (charIndex < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex + 1));
        charIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    };

    setDisplayText('');
    charIndex = 0;
    typeText();
  }, [currentIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 pt-20 md:pt-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 dark:bg-purple-800 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 dark:bg-blue-800 rounded-full opacity-30 animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-38 h-38 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-500/20 hover:ring-blue-500/40 transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/82867db7-4170-4c1c-8a97-0e35519bc2cb.png"
                alt="Abhinay Gedela"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Abhinay Gedela
          </h1>

          <div className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 h-8">
            <span className="border-r-2 border-blue-500 animate-pulse pr-1">
              {displayText}
            </span>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span className="text-sm">saiabhinaygedela@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span className="text-sm">9618882624</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              <span className="text-sm">Rajahmundry, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/Abhi200"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/gedela-abhinay-65836628b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900"
            >
              <Linkedin size={24} className="text-blue-600" />
            </a>
            <a
              href="mailto:saiabhinaygedela@gmail.com"
              className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900"
            >
              <Mail size={24} className="text-red-600" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Resume and Contact Me Buttons */}
          <div className="flex justify-center items-center mt-8">
            {/* Resume Button */}
            <a
              href="/ABHINAY-GEDELA-FULLSTACK.pdf"
              download
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
