'use client';

import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (sectionIndex: number) => {
    const sections = document.querySelectorAll('section');

    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-4 md:px-8 py-20 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-10 animate-fade-in-up">
        {/* Profile Image */}
        <div className="relative mx-auto w-fit">
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 blur-2xl opacity-40 scale-110" />

          <div className="relative w-44 h-44 mx-auto rounded-full overflow-hidden border-[5px] border-cyan-400/30 shadow-[0_0_40px_rgba(0,255,255,0.25)] backdrop-blur-md">
            <Image
              src="/images/profilepic.jpeg"
              alt="Shivam Gupta"
              width={220}
              height={220}
              className="object-cover scale-150 hover:scale-[1.65] transition-transform duration-700"
              priority
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </div>

        {/* Hero Text */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight text-white">
            Shivam{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Gupta
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack developer crafting modern, scalable and visually
            stunning digital experiences using cutting-edge technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center pt-4">
          <button
            onClick={() => scrollToSection(1)}
            className="group rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-cyan-500/40 transition-all duration-300"
          >
            View Tech Stack
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </button>

          <button
            onClick={() => scrollToSection(3)}
            className="rounded-full border border-cyan-400/30 bg-white/10 backdrop-blur-xl px-8 py-4 text-cyan-200 font-semibold hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300"
          >
            Get in Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 flex flex-col items-center gap-2">
          <div className="w-6 h-10 rounded-full border border-cyan-400/30 flex justify-center p-1">
            <div className="w-1.5 h-3 rounded-full bg-cyan-400 animate-bounce" />
          </div>

          <p className="text-sm text-slate-400 tracking-wide">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}