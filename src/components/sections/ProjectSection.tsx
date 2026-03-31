'use client';

import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Secret Messaging App',
    description: 'A secure, end-to-end encrypted messaging platform with real-time communication and privacy-first design.',
    technologies: ['React', 'Express.js', 'MongoDB', 'WebSockets'],
    image: '/secret-messaging-logo.jpg',
    link: '#',
    featured: true,
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-16 animate-fade-in-up">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore some of my recent work and contributions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border border-border hover:border-accent/50 transition-all duration-300"
            >
              {/* Project Card Background */}
              <div className="relative bg-gradient-to-br from-card to-muted/30 p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                  {/* Left side - Content */}
                  <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-2">
                      {project.featured && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                          Featured Project
                        </span>
                      )}
                      <h3 className="text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-secondary border border-secondary/30 hover:border-secondary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-6">
                      <a
                        href={project.link}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn"
                      >
                        View Project
                        <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                      </a>
                    </div>
                  </div>

                  {/* Right side - Logo/Image */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-sm h-80 rounded-2xl overflow-hidden border border-accent/30 shadow-2xl shadow-accent/20 group-hover:shadow-accent/40 transition-all duration-300">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Accent lines */}
                <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center pt-8 border-t border-border">
          <p className="text-muted-foreground mb-4">More projects coming soon...</p>
          <p className="text-sm text-muted-foreground">Check my GitHub for more work and contributions</p>
        </div>
      </div>
    </section>
  );
}
