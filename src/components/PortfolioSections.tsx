import { useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  link: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "An interactive 3D portfolio built with React Three Fiber and TypeScript",
    tech: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX",
    tech: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
    link: "#"
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application with real-time features",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/api/placeholder/400/300",
    link: "#"
  }
]

function PortfolioSections() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Navigation */}
      <nav className="absolute top-6 left-6 pointer-events-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-4">
          <div className="flex flex-col space-y-2">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === section
                    ? 'bg-white text-black'
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content Panels */}
      <div className="absolute top-6 right-6 w-96 pointer-events-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-6 text-white">
          {activeSection === 'about' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="text-gray-200 leading-relaxed">
                I'm a passionate full-stack developer with expertise in modern web technologies. 
                I love creating immersive digital experiences that combine functionality with 
                beautiful design.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Three.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-white/20 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Projects</h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors"
                  >
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-500/30 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-block mt-2 text-blue-400 hover:text-blue-300 text-sm"
                    >
                      View Project →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Skills</h2>
              <div className="space-y-3">
                {[
                  { name: 'Frontend Development', level: 90 },
                  { name: 'Backend Development', level: 85 },
                  { name: '3D Graphics', level: 75 },
                  { name: 'UI/UX Design', level: 80 },
                  { name: 'Mobile Development', level: 70 }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'contact' && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Contact</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">@</span>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-300 text-sm">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">in</span>
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-gray-300 text-sm">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">gh</span>
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-gray-300 text-sm">github.com/yourusername</p>
                  </div>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-colors">
                Send Message
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-6 left-6 pointer-events-auto">
        <div className="bg-black/20 backdrop-blur-md rounded-lg p-4 text-white">
          <p className="text-sm">
            Use mouse to rotate • Hover over shapes for interaction
          </p>
        </div>
      </div>
    </div>
  )
}

export default PortfolioSections