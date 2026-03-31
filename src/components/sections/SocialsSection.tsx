'use client';

const socials = [
  {
    name: 'GitHub',
    icon: '🐙',
    url: '#',
    color: 'hover:text-neutral-400',
    bgColor: 'hover:bg-neutral-900/50',
  },
  {
    name: 'Twitter',
    icon: '𝕏',
    url: '#',
    color: 'hover:text-neutral-300',
    bgColor: 'hover:bg-neutral-800/50',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    url: '#',
    color: 'hover:text-blue-400',
    bgColor: 'hover:bg-blue-900/20',
  },
  {
    name: 'Instagram',
    icon: '📷',
    url: '#',
    color: 'hover:text-pink-400',
    bgColor: 'hover:bg-pink-900/20',
  },
  {
    name: 'Email',
    icon: '✉️',
    url: 'mailto:your-email@example.com',
    color: 'hover:text-primary',
    bgColor: 'hover:bg-primary/20',
  },
];

export default function SocialsSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-secondary/5" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto w-full space-y-16 animate-fade-in-up">
        {/* Section Header */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find me on social media or reach out directly via email
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target={social.name !== 'Email' ? '_blank' : undefined}
              rel={social.name !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`group relative p-8 rounded-2xl border border-border transition-all duration-300 hover:border-accent/50 flex flex-col items-center justify-center gap-4 hover:shadow-lg hover:shadow-accent/20 ${social.bgColor}`}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 to-secondary/10" />

              <div className="relative z-10 space-y-3 text-center">
                <div className="text-5xl group-hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${social.color}`}>
                  {social.name}
                </h3>
              </div>

              {/* Animated arrow on hover */}
              <div className="absolute inset-0 rounded-2xl flex items-end justify-center pb-4">
                <span className="text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  ↗️
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Contact Form / Message */}
        <div className="max-w-2xl mx-auto w-full space-y-6 pt-12 border-t border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground">
              Whether you&apos;re interested in discussing a project or just want to say hello, feel free to reach out!
            </p>
          </div>

          {/* Email Card */}
          <div className="p-8 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-colors space-y-4">
            <p className="text-muted-foreground text-center">📧 Email me at:</p>
            <a
              href="mailto:your-email@example.com"
              className="inline-block w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              your-email@example.com
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center pt-12 border-t border-border">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} All rights reserved. Built with Next.js & React.
          </p>
        </div>
      </div>
    </section>
  );
}
