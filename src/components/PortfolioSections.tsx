
interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "3D Portfolio Website",
    description: "An interactive 3D portfolio built with React Three Fiber and TypeScript",
    tech: ["React", "Three.js", "TypeScript", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
    link: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX",
    tech: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    image: "/api/placeholder/400/300",
    link: "#",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application with real-time features",
    tech: ["React Native", "Firebase", "Redux", "TypeScript"],
    image: "/api/placeholder/400/300",
    link: "#",
  },
];

function PortfolioSections() {
  return (
    <div className="min-h-screen  text-gray-100">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-gray-800/95 backdrop-blur-md border-b border-gray-700">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex space-x-6">
            {["about", "projects", "skills", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 transition-all duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-20">
        {/* About Section */}
        <section id="about" className="min-h-screen flex items-center">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8 text-white">About Me</h2>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 border border-gray-700">
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                I'm a passionate full-stack developer with expertise in modern web technologies. I
                love creating immersive digital experiences that combine functionality with
                beautiful design.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "Python", "Three.js"].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm border border-gray-600">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <h2 className="text-4xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800/50 backdrop-blur-md rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors"
              >
                <h3 className="font-semibold text-2xl text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded border border-blue-800">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen">
          <h2 className="text-4xl font-bold mb-8 text-white">Skills</h2>
          <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 border border-gray-700">
            <div className="space-y-6">
              {[
                { name: "Frontend Development", level: 90 },
                { name: "Backend Development", level: 85 },
                { name: "3D Graphics", level: 75 },
                { name: "UI/UX Design", level: 80 },
                { name: "Mobile Development", level: 70 },
              ].map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3 border border-gray-600">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen flex items-center">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8 text-white">Contact</h2>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-lg p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
                    <span className="text-gray-300 text-lg">@</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">Email</p>
                    <p className="text-gray-400">your.email@example.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
                    <span className="text-gray-300 text-lg">in</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">LinkedIn</p>
                    <p className="text-gray-400">linkedin.com/in/yourprofile</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center border border-gray-600">
                    <span className="text-gray-300 text-lg">gh</span>
                  </div>
                  <div>
                    <p className="font-medium text-white text-lg">GitHub</p>
                    <p className="text-gray-400">github.com/yourusername</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 bg-gradient-to-r from-gray-700 to-gray-600 text-white py-3 px-6 rounded-lg hover:from-gray-600 hover:to-gray-500 transition-colors border border-gray-600">
                Send Message
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Info */}
      <div className="fixed bottom-6 left-6 z-40">
        <div className="bg-gray-800/90 backdrop-blur-md rounded-lg p-4 text-gray-300 border border-gray-700">
          <p className="text-sm">Use mouse to rotate • Hover over shapes for interaction</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioSections;
