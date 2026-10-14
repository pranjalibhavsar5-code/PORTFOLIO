import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Code2, BrainCircuit, Sparkles, Terminal, Mail, MapPin } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const roles = [
  'AI & Machine Learning Engineer',
  'Python Full-Stack Developer',
  'Data Science Enthusiast',
  'Analytical Problem Solver',
];

export const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentFullText = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);

        if (displayText.length + 1 === currentFullText.length) {
          // Pause at full word
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        // Deleting
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(45);

        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-xs font-mono text-cyan-300 mb-8 shadow-[0_0_20px_rgba(0,240,255,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span>AVAILABLE FOR INTERNSHIPS & COLLABORATIONS</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-300 flex items-center gap-1">
            <MapPin className="w-3 h-3 text-cyan-400 inline" /> Shirpur, MH
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Hi, I'm{' '}
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400">
            Pranjali Bhavsar
            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-80" />
          </span>
        </motion.h1>

        {/* Dynamic Typewriter Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="h-14 sm:h-16 flex items-center justify-center font-mono text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8"
        >
          <span className="text-purple-400 mr-3">&gt;</span>
          <span className="text-white font-semibold">{displayText}</span>
          <span className="inline-block w-2.5 h-7 ml-1 bg-cyan-400 animate-pulse align-middle" />
        </motion.div>

        {/* Crisp Sub-headline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          S.Y. Artificial Intelligence & Machine Learning engineering scholar at <span className="text-white font-medium">RCPIT Shirpur</span> (CGPA: 8.76).
          Passionate about architecting smart algorithms, full-stack systems, and engineering clean, high-impact technology.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <MagneticButton
            href="#projects"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] flex items-center gap-2 group"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200 text-black" />
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-7 py-3.5 rounded-xl glass-panel border-white/20 hover:border-cyan-400/80 text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] flex items-center gap-2 group"
          >
            <Mail className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform duration-200" />
            <span>Get in Touch</span>
          </MagneticButton>
        </motion.div>

        {/* Quick Highlights Counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10"
        >
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">8.76</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">B.Tech CGPA</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">1000+</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">CodeChef Problems</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-cyan-400">SIH & Adobe</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Hackathons</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-purple-400">Winner</div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mt-1">Eureka Startup Fest</div>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-20"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="text-[11px] font-mono tracking-widest text-gray-400 uppercase hover:text-cyan-400 transition-colors">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5 hover:border-cyan-400 transition-colors"
        >
          <div className="w-1.5 h-2.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f0ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
