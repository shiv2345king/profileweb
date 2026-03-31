'use client';

export default function HeroSection() {
  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll('section');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-8 py-20">
      {/* Background gradient effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-32 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-pretty leading-tight tracking-tight">
            Developer <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Full-stack developer crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={() => scrollToSection(1)}
            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            View Tech Stack
          </button>
          <button
            onClick={() => scrollToSection(3)}
            className="px-8 py-3 rounded-full border border-accent text-accent hover:bg-accent/10 font-semibold transition-colors"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll indicator text */}
        <div className="pt-12">
          <p className="text-sm text-muted-foreground animate-scroll-indicator">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}
