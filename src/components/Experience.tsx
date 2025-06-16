
import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Bluconn",
      companyLink: "https://www.bluconn.ai",
      duration: "2025, JAN - PRESENT",
      location: "Remote",
      description: [
        "Designed and developed a production-grade mock server to simulate WhatsApp Business API flows, enabling robust testing of enterprise messaging workflows before deployment",
        "Engineered key business modules including Menu Management System for interactive automated customer service flows",
        "Implemented Leave Management and Overtime Tracking with approval logic via conversational UI",
        "Built Support Ticketing System allowing users to send text, voice, and image-based queries, automatically routed to manager email inboxes for resolution",
        "Developed Payroll Management System with end-to-end submission and approval workflows",
        "Implemented webhook listeners and real-time message processing to emulate authentic WhatsApp behavior",
        "Developed RESTful APIs to support seamless integration with multiple business processes",
        "Significantly reduced deployment risks by allowing pre-production validation of WhatsApp-based enterprise automations"
      ],
      technologies: ["NestJS", "FastAPI", "PostgreSQL", "MongoDB", "TypeScript", "Playwright", "WhatsApp Business API", "REST APIs", "Webhooks"]
    },
    {
      title: "Software Engineer Intern",
      company: "Bizcraft Advisors",
      companyLink: "https://www.linkedin.com/company/bizcraftadvisors/",
      duration: "2024, MAY - 2024, DEC",
      location: "Remote",
      description: [
        "Implemented automated UI tests using the Playwright framework with TypeScript, improving test coverage and reliability",
        "Developed and executed comprehensive Jest tests for 15+ Express.js endpoints, ensuring robust backend functionality and data integrity",
        "Optimized AI-powered scripts using OpenAI and Azure Form Recognizer to automate data extraction from over 1,000 Form 16 tax documents, achieving 95% accuracy and reducing processing time by 80%",
        "Developed a sophisticated Machine Learning model leveraging Large Language Models (LLMs) to classify 60+ file categories by integrating textual and visual features, utilized OpenAI's API to create quality file embeddings, and sentence transformers, Hugging Face models for embeddings, and stored them efficiently in ChromaDB while testing with Pinecone for performance evaluation; trained a logistic regression classifier on combined embeddings, achieving an accuracy of 87.5% in diverse file classification tasks",
        "Developed and served as a tester for a ledger prediction system for invoices, bank statements and receipts leveraging OpenAI embeddings for high-quality feature extraction and ChromaDB for efficient storage and retrieval, ensuring accurate and scalable classification"
      ],
      technologies: ["Playwright", "TypeScript", "Jest", "Express.js", "OpenAI", "Azure", "Machine Learning", "ChromaDB", "Pinecone", "Hugging Face"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey in software engineering, working with cutting-edge technologies and building impactful solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-gray-800 hidden md:block"></div>

                {/* Content */}
                <div className="md:ml-16 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <a
                          href={exp.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-blue-600 dark:text-blue-400 font-semibold mb-2 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                        >
                          <ExternalLink size={16} className="mr-2" />
                          {exp.company}
                        </a>
                      </div>
                      <div className="flex flex-col md:items-end space-y-2">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <Calendar size={16} className="mr-2" />
                          {exp.duration}
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                          <MapPin size={16} className="mr-2" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <ul className="space-y-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-600 dark:text-gray-300">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
