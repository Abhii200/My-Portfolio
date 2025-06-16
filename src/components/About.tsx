
import React from 'react';
import { Code, Briefcase, GraduationCap, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Software Engineer with expertise in full-stack development, AI/ML, and enterprise solutions.
            Currently pursuing Computer Science & Design while building production-ready applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-600 rounded-lg mr-4">
                  <Code className="text-white" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Software Engineer Intern at <strong>Blucom</strong> - Working on enterprise messaging workflows, 
                WhatsApp Business API integrations, and production-grade deployment systems.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-600 rounded-lg mr-4">
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

            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-green-900 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-600 rounded-lg mr-4">
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
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p>Full-stack web development with modern frameworks like React, Node.js, and Express</p>
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
                <div className="text-2xl font-bold text-blue-600 mb-2">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Coding</div>
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
