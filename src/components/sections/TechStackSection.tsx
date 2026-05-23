'use client';

const technologies = [
  {
    name: 'MongoDB',
    category: 'Database',
    icon: '🍃',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    icon: '▲',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    icon: '⚡',
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    icon: '✦',
    gradient: 'from-yellow-300 to-amber-500',
  },
  {
    name: 'React',
    category: 'Frontend',
    icon: '⚛️',
    gradient: 'from-cyan-400 to-sky-500',
  },
  {
    name: 'Redux Toolkit',
    category: 'State Management',
    icon: '📦',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'ShadCN UI',
    category: 'UI Library',
    icon: '▲',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Tailwind CSS',
    category: 'CSS Framework',
    icon: '🌬️',
    gradient: 'from-sky-400 to-cyan-500',
  },
  {
    name: 'React Router',
    category: 'Routing',
    icon: '🧭',
    gradient: 'from-emerald-400 to-teal-500',
  },
];

export default function TechStackSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-8 py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-5">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            My{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-3xl mx-auto">
            Technologies and tools I use to build scalable, high-performance,
            and visually engaging digital experiences.
          </p>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-500 hover:scale-[1.03] hover:border-cyan-400/30 hover:shadow-[0_0_50px_rgba(0,255,255,0.12)]"
              style={{
                animation: `fadeInUp 0.6s ease-out ${
                  index * 0.08
                }s backwards`,
              }}
            >
              {/* Gradient Hover Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Top Section */}
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-400 uppercase tracking-wider mb-2">
                      {tech.category}
                    </p>

                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {tech.name}
                    </h3>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {tech.icon}
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-8 flex items-center justify-between">
                  <div
                    className={`h-1 w-0 rounded-full bg-gradient-to-r ${tech.gradient} group-hover:w-24 transition-all duration-500`}
                  />

                  <span className="text-slate-500 text-sm group-hover:text-cyan-300 transition-colors">
                    Explore →
                  </span>
                </div>
              </div>

              {/* Top Border Accent */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${tech.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10">
          <div className="rounded-[28px] border border-cyan-400/20 bg-white/10 backdrop-blur-xl p-8 text-center">
            <h3 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              9+
            </h3>
            <p className="text-slate-300 mt-3 text-lg">
              Technologies Mastered
            </p>
          </div>

          <div className="rounded-[28px] border border-pink-400/20 bg-white/10 backdrop-blur-xl p-8 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Full-Stack
            </h3>
            <p className="text-slate-300 mt-3 text-lg">
              Development Experience
            </p>
          </div>

          <div className="rounded-[28px] border border-emerald-400/20 bg-white/10 backdrop-blur-xl p-8 text-center">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
              Modern
            </h3>
            <p className="text-slate-300 mt-3 text-lg">
              Architecture & UI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}