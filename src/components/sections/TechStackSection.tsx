'use client';

const technologies = [
  {
    name: 'MongoDB',
    category: 'Database',
    icon: '🍃',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: '▲',
    color: 'from-neutral-800 to-neutral-600',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: '⚡',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: '✦',
    color: 'from-yellow-400 to-yellow-600',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    name: 'Redux Toolkit',
    category: 'State Management',
    icon: '📦',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    name: 'ShadCN UI',
    category: 'UI Library',
    icon: '▲',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    icon: '🌬️',
    color: 'from-sky-400 to-blue-500',
  },
  {
    name:'React Router',
    category: 'Routing',
    icon: '🧭',
    color: 'from-green-400 to-green-600',
  }
];

export default function TechStackSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-16 animate-fade-in-up">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern, scalable applications
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative p-6 rounded-2xl bg-white border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 cursor-pointer"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${tech.color}`} />

              <div className="relative space-y-4">
                {/* Icon and Name */}
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold group-hover:text-accent text-black">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{tech.category}</p>
                  </div>
                  <span className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {tech.icon}
                  </span>
                </div>

                {/* Bottom accent line */}
                <div className="pt-2">
                  <div className="h-1 w-0 group-hover:w-12 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats or description */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-border">
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-primary">6+</h3>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-white">Full-Stack</h3>
            <p className="text-muted-foreground">Development</p>
          </div>
          <div className="text-center space-y-2">
            <h3 className="text-3xl font-bold text-white">Modern</h3>
            <p className="text-muted-foreground">Architecture</p>
          </div>
        </div>
      </div>
    </section>
  );
}
