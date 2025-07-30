
import React, { useEffect, useState } from 'react';
import { Code, Database, Cloud, Brain, Wrench, Award } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["C", "Java", "Python"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Web Development", 
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Node.js", "MySQL", "MongoDB", "PostgreSQL"],
      gradient: "from-green-500 to-teal-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["FastAPI", "Playwright", "React.js", "Express.js", "TensorFlow", "PyTorch", "Scikit-learn"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Natural Language Processing",
      icon: <Brain className="w-6 h-6" />,
      skills: ["OpenAI GPT", "Hugging Face Transformers"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Git", "Docker", "VS Code", "Jupyter Notebook", "Google Colab", "Blender", "3D Maya", "ChatGPT", "Claude", "Mistral", "Azure"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const SkillBadge = ({ skill, gradient, index }: { skill: string, gradient: string, index: number }) => (
    <div 
      className={`
        group relative px-4 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-md 
        hover:shadow-lg transition-all duration-300 cursor-pointer
        transform hover:scale-105 hover:-translate-y-1
        ${isVisible ? 'animate-fade-in' : 'opacity-0'}
      `}
      style={{ 
        animationDelay: isVisible ? `${index * 0.1}s` : '0s'
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
      <span className="relative z-10 text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
        {skill}
      </span>
      <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r ${gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise and core competencies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className={`h-16 bg-gradient-to-r ${category.gradient} flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                <div className="text-white transform group-hover:rotate-12 transition-transform duration-300">
                  {category.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-6 text-gray-900 dark:text-white text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBadge 
                      key={skillIndex} 
                      skill={skill} 
                      gradient={category.gradient}
                      index={skillIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center justify-center gap-2">
              <Award className="w-6 h-6" />
              Certifications
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Html, Css, JavaScript', 'Java and Python', 'Postman API', 'NIT Startup Expo'].map((cert, index) => (
              <div 
                key={index}
                className={`
                  bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl 
                  transition-all duration-300 text-center hover:scale-105 group
                  ${isVisible ? 'animate-fade-in' : 'opacity-0'}
                `}
                style={{ 
                  animationDelay: isVisible ? `${(index + 5) * 0.1}s` : '0s'
                }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">{cert}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
