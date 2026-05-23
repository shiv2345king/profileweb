'use client';

import Image from 'next/image';

const projects = [
  {
    id: 1,
    name: 'Secret Messaging App',
    description:
      'A secure, end-to-end encrypted messaging platform with real-time communication and privacy-first design.',
    technologies: [
      'Next.js ▲',
      'Typescript 🌬️',
      'MongoDB 🍃',
      'ShadCN UI ▲',
      'Tailwind CSS 🌬️',
      'Resend',
    ],
    image: '/images/secret-messaging-image.png',
    link: 'https://a-mystery-message-app-a7gj.onrender.com/',
    featured: true,
  },
  {
    id: 2,
    name: 'AI Blogging Platform',
    description:
      'An AI-powered blogging platform with secure JWT cookie-based authentication, smart post reviews, likes, comments, and seamless content publishing.',
    technologies: [
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT Authentication',
      'Gemini API',
      'Tailwind CSS',
    ],
    image: '/images/Blog-app.png',
    link:
      'https://blog-git-main-shivam-guptas-projects-cd5190e3.vercel.app/',
    featured: true,
  },
  {
  id: 3,
  name: 'Unified Social Media Backend API (Twitter + YouTube System)',
  description:
    'A scalable backend system that combines Twitter-like and YouTube-like functionalities into a single API. It supports authentication, post creation, video uploads, and cloud-based media storage with a modular architecture.',
  technologies: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT Authentication',
    'Multer',
    'Cloudinary',
  ],
  image: '/images/backend-api.png',
  link: 'https://github.com/shiv2345king/BackendYtit',
  featured: true,
}
];

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-8 py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-5">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explore some of my recent work, creative builds, and technical
            contributions.
          </p>
        </div>

        {/* Project Cards */}
        <div className="space-y-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-pink-500/10 via-cyan-500/10 to-purple-500/10" />

              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-5 gap-10 items-center">
                  {/* Left Content */}
                  <div className="lg:col-span-2 space-y-6">
                    {project.featured && (
                      <span className="inline-block px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-white shadow-lg">
                        ✨ Featured Project
                      </span>
                    )}

                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.name}
                    </h3>

                    <p className="text-slate-300 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-400/20 text-cyan-200 font-medium hover:scale-105 transition-transform"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="pt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
                      >
                        View Project
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Right Image */}
                  <div className="lg:col-span-3 flex justify-center lg:justify-end">
                    <div className="relative h-80 w-full max-w-md overflow-hidden rounded-[28px] border border-cyan-400/20 shadow-[0_0_50px_rgba(0,255,255,0.12)]">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Accent Borders */}
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-slate-400 text-lg">
            More exciting projects coming soon 🚀
          </p>

          <p className="mt-2 text-slate-500 text-sm">
            Explore my GitHub for more experiments and contributions
          </p>
        </div>
      </div>
    </section>
  );
}