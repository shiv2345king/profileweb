'use client';

const socials = [
  {
    name: 'GitHub',
    icon: '🐙',
    url: 'https://github.com/shiv2345king',
    gradient: 'from-slate-700 to-slate-900',
    glow: 'group-hover:shadow-slate-500/30',
  },
  {
    name: 'Twitter',
    icon: '𝕏',
    url: 'https://x.com/ShivamGupt49034',
    gradient: 'from-sky-500 to-cyan-500',
    glow: 'group-hover:shadow-cyan-500/30',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: 'https://www.linkedin.com/in/shivam-gupta-77a31630b/',
    gradient: 'from-blue-500 to-indigo-600',
    glow: 'group-hover:shadow-blue-500/30',
  },
  {
    name: 'Instagram',
    icon: '📷',
    url: 'https://www.instagram.com/shiv2345gupta?igsh=dDUweXdlYjV6MDE0',
    gradient: 'from-pink-500 via-purple-500 to-orange-400',
    glow: 'group-hover:shadow-pink-500/30',
  },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:shivam.gupta19112003@gmail.com',
    gradient: 'from-emerald-500 to-cyan-500',
    glow: 'group-hover:shadow-emerald-500/30',
  },
];

export default function SocialsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 md:px-8 py-24 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-24 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[150px]" />
      </div>

      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-5">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white">
            Let&apos;s{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Find me across social platforms or reach out directly. I’m always
            open to collaborations, ideas, and interesting conversations.
          </p>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={
                social.name !== 'Email'
                  ? 'noopener noreferrer'
                  : undefined
              }
              className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl p-8 transition-all duration-500 hover:scale-105 hover:border-cyan-400/40 hover:shadow-2xl ${social.glow}`}
            >
              {/* Gradient Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col items-center text-center gap-5">
                {/* Icon */}
                <div className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:-translate-y-2">
                  {social.icon}
                </div>

                {/* Name */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {social.name}
                </h3>

                {/* Arrow */}
                <div className="text-cyan-300 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  ↗ Connect
                </div>
              </div>

              {/* Top Accent Border */}
              <div
                className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </a>
          ))}
        </div>

        {/* Contact Card */}
        <div className="max-w-3xl mx-auto pt-16 border-t border-white/10">
          <div className="rounded-[32px] border border-cyan-400/20 bg-white/10 backdrop-blur-xl p-10 text-center shadow-[0_0_40px_rgba(0,255,255,0.08)]">
            <h3 className="text-3xl font-bold text-white mb-4">
              Get in Touch
            </h3>

            <p className="text-slate-300 text-lg mb-8">
              Have a project idea, collaboration, or opportunity? Feel free to
              reach out anytime.
            </p>

            <a
              href="mailto:shivam.gupta19112003@gmail.com"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
            >
              ✉️ Contact Me
            </a>

            <p className="mt-6 text-cyan-200 text-sm">
              shivam.gupta19112003@gmail.com
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-10 border-t border-white/10">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Shivam Gupta — Built with Next.js &
            React
          </p>
        </div>
      </div>
    </section>
  );
}