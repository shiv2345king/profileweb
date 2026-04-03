'use client';

import { useEffect, useState } from 'react';
import HeroSection from '@/components/sections/HeroSection';
import TechStackSection from '@/components/sections/TechStackSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SocialsSection from '@/components/sections/SocialsSection';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  const [activeSection, setActiveSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrolledHeight = window.scrollY;
      const totalScrollableHeight = documentHeight - windowHeight;
      const progress = (scrolledHeight / totalScrollableHeight) * 100;
      setScrollProgress(progress);

      // Determine which section is in view
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      {/* Animated scroll progress bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-accent z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Scroll indicator - hide after some scroll */}
      {scrollProgress < 5 && <ScrollIndicator />}

      {/* Sections */}
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <SocialsSection />
    </main>
  );
}
