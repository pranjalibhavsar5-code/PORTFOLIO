import React, { useEffect, useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#07090e] text-[#ffffff] selection:bg-cyan-400 selection:text-black">
      {/* Subtle Custom Interactive Glowing Cursor Trail (Desktop) */}
      <div
        className="hidden md:block fixed pointer-events-none z-50 rounded-full transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 border border-cyan-400/50"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: isPointer ? '48px' : '24px',
          height: isPointer ? '48px' : '24px',
          backgroundColor: isPointer ? 'rgba(0, 240, 255, 0.15)' : 'transparent',
          boxShadow: isPointer ? '0 0 25px rgba(0, 240, 255, 0.4)' : 'none',
        }}
      />

      {/* Interactive 3D particle canvas background */}
      <ParticleBackground />

      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Flow Content */}
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
