
import React from 'react';
import { Code2, Github, Linkedin, Mail, ExternalLink, Terminal, Database, Layout } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-green-400 font-mono text-xl">{'<DevPortfolio />'}</div>
          <div className="flex gap-6">
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </nav>
        
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Expert Developer for a Connected <span className="text-green-400">{'{World}'}</span>
          </h1>
          <p className="text-gray-400 text-xl mb-8">
            Full-stack web developer specializing in building exceptional digital experiences.
            Turning ideas into elegant, functional solutions.
          </p>
          <div className="flex gap-4">
            <a href="#contact" 
               className="bg-green-400 text-black px-6 py-3 rounded-md hover:bg-green-500 transition-colors">
              Get in touch
            </a>
            <a href="#projects" 
               className="border border-green-400 text-green-400 px-6 py-3 rounded-md hover:bg-green-400/10 transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="bg-black/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors">
              <Code2 className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-400">React, TypeScript, Tailwind CSS, Next.js</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors">
              <Terminal className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-400">Node.js, Express, Python, RESTful APIs</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-colors">
              <Database className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Database & DevOps</h3>
              <p className="text-gray-400">PostgreSQL, MongoDB, Docker, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80" 
                alt="Project 1" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
                <p className="text-gray-400 mb-4">Full-stack e-commerce solution with React, Node.js, and PostgreSQL</p>
                <div className="flex gap-4">
                  <a href="#" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a href="#" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80" 
                alt="Project 2" 
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-black/80 flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold mb-2">Task Management App</h3>
                <p className="text-gray-400 mb-4">Real-time collaboration tool built with React and Firebase</p>
                <div className="flex gap-4">
                  <a href="#" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                    <Github className="w-5 h-5" /> Code
                  </a>
                  <a href="#" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                    <ExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Let's Work Together</h2>
          <div className="flex justify-center gap-8 mb-8">
            <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Mail className="w-5 h-5" />
              Email
            </a>
            <a href="https://github.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a href="https://linkedin.com" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;