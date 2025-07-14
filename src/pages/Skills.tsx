
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Server, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 85 },
        { name: "Next.js", level: 87 },
        { name: "JavaScript", level: 92 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server size={24} />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
        { name: "Express.js", level: 88 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "Design & Tools",
      icon: <Palette size={24} />,
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe Creative Suite", level: 88 },
        { name: "Git", level: 95 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 85 }
      ]
    },
    {
      title: "Mobile & Other",
      icon: <Smartphone size={24} />,
      skills: [
        { name: "React Native", level: 80 },
        { name: "Flutter", level: 75 },
        { name: "GraphQL", level: 82 },
        { name: "Firebase", level: 85 },
        { name: "Redux", level: 88 },
        { name: "SASS", level: 90 }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-cream-50 to-warm-brown-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-warm-brown-800 mb-4">
              Skills & Expertise
            </h1>
            <div className="w-24 h-px bg-warm-brown-400 mx-auto mb-6"></div>
            <p className="text-lg text-warm-brown-600 max-w-2xl mx-auto">
              A comprehensive toolkit built through years of dedicated learning and practical application
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-cream-50 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-warm-brown-100 rounded-full flex items-center justify-center mr-4">
                    <div className="text-warm-brown-600">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-warm-brown-700">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-warm-brown-600 font-medium">{skill.name}</span>
                        <span className="text-warm-brown-500 text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-warm-brown-200 rounded-full h-2">
                        <div 
                          className="bg-warm-brown-600 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className="mb-20">
            <h3 className="text-2xl font-light text-warm-brown-800 mb-8 text-center">
              Additional Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'HTML5', 'CSS3', 'SASS', 'Bootstrap', 'Material-UI', 'Styled Components',
                'Webpack', 'Vite', 'Jest', 'Cypress', 'Storybook', 'ESLint',
                'Prettier', 'Postman', 'Jira', 'Slack', 'Notion', 'Linear'
              ].map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-warm-brown-100 text-warm-brown-700 rounded-full text-sm font-medium hover:bg-warm-brown-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-20">
            <h3 className="text-2xl font-light text-warm-brown-800 mb-8 text-center">
              Certifications & Education
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-cream-50 rounded-lg">
                <h4 className="font-semibold text-warm-brown-700 mb-2">AWS Certified Developer</h4>
                <p className="text-warm-brown-600 mb-2">Amazon Web Services</p>
                <p className="text-warm-brown-500 text-sm">2023</p>
              </div>
              
              <div className="p-6 bg-cream-50 rounded-lg">
                <h4 className="font-semibold text-warm-brown-700 mb-2">React Developer Certification</h4>
                <p className="text-warm-brown-600 mb-2">Meta (Facebook)</p>
                <p className="text-warm-brown-500 text-sm">2022</p>
              </div>
              
              <div className="p-6 bg-cream-50 rounded-lg">
                <h4 className="font-semibold text-warm-brown-700 mb-2">Bachelor of Computer Science</h4>
                <p className="text-warm-brown-600 mb-2">University of California</p>
                <p className="text-warm-brown-500 text-sm">2019</p>
              </div>
              
              <div className="p-6 bg-cream-50 rounded-lg">
                <h4 className="font-semibold text-warm-brown-700 mb-2">Google UX Design Certificate</h4>
                <p className="text-warm-brown-600 mb-2">Google</p>
                <p className="text-warm-brown-500 text-sm">2021</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-warm-brown-50 p-12 rounded-lg">
            <h2 className="text-3xl font-light text-warm-brown-800 mb-4">
              See My Skills in Action
            </h2>
            <p className="text-lg text-warm-brown-600 mb-8 max-w-2xl mx-auto">
              Explore my portfolio to see how I apply these skills to create exceptional digital experiences.
            </p>
            <Link 
              to="/projects"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-warm-brown-600 text-cream-50 rounded-sm hover:bg-warm-brown-700 transition-all duration-300 font-medium"
            >
              <span>View Projects</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;