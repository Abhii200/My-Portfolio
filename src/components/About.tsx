
import React from 'react';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <style>{`
        @keyframes spectral-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes spectral-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(147, 51, 234, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 51, 234, 0.5), 0 0 60px rgba(59, 130, 246, 0.3);
          }
        }

        @keyframes spectral-pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }

        .spectral-title {
          background: linear-gradient(270deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          background-size: 400% 400%;
          animation: spectral-shift 8s ease infinite;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .spectral-card {
          animation: spectral-glow 4s ease-in-out infinite;
          transition: transform 0.3s ease;
        }

        .spectral-card:hover {
          animation: spectral-glow 2s ease-in-out infinite, spectral-pulse 1s ease-in-out infinite;
        }

        .spectral-icon {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          animation: spectral-shift 6s ease infinite;
          background-size: 200% 200%;
        }
      `}</style>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 spectral-title">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Senior Software Developer with expertise in full-stack development, AI/ML, and enterprise solutions.
            Specialized in building scalable, production-ready applications with modern tech stacks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 p-6 rounded-xl spectral-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-lg mr-4 spectral-icon">
                  <Code className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Senior Software Developer at <strong>Blucom</strong> - Leading enterprise messaging workflows,
                WhatsApp Business API integrations, and architecting production-grade deployment systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900 p-6 rounded-xl spectral-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-600 rounded-lg mr-4 spectral-icon">
                  <GraduationCap className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Bachelor of Computer Science & Design</strong><br />
                SRKR Engineering College (2022-2026)<br />
                Intermediate from Adithya Junior College (2020-2022)
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-green-900 p-6 rounded-xl spectral-card">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-600 rounded-lg mr-4 spectral-icon">
                  <Award className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Certifications</h3>
              </div>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <p>• HTML, CSS, JavaScript</p>
                <p>• Java and Python</p>
                <p>• Postman API</p>
                <p>• NIT Startup Expo</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-white spectral-card">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Full-stack web development with modern frameworks like React, Node.js,fastapi and Express</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>AI/ML model development for classification and automation tasks</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Database design and optimization with MongoDB, PostgreSQL, and MySQL</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Enterprise automation and WhatsApp Business API integrations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Computer vision applications using OpenCV and PyAutoGUI</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">Functional Team</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">SWECHA</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Built</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-2">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Technologies</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <div className="text-2xl font-bold text-red-600 mb-2">2</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Internships</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
