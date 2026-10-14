import React from 'react';
import TypewriterText from './TypewriterText';
import MagneticButton from './MagneticButton';
import { ArrowDown, Mail, FileText, Sparkles, Terminal, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './CustomIcons';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-6 sm:px-8 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-[#9d4edd]/15 via-[#00f0ff]/10 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9d4edd]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center z-10 relative">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-[#00f0ff]/40 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f0ff] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00f0ff]"></span>
          </span>
          <span className="text-xs font-mono text-white/90 tracking-wide">
            AVAILABLE FOR AI/ML & SOFTWARE ROLES
          </span>
        </div>

        {/* Catchy headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
          Engineering Intelligent Systems &{' '}
          <span className="block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-[#9d4edd]">
              Data-Driven Solutions
            </span>
          </span>
        </h1>

        {/* Dynamic sub-headline with typewriter */}
        <div className="text-lg sm:text-2xl font-normal text-white max-w-3xl mb-10 h-14 flex items-center justify-center">
          <p className="flex flex-wrap items-center justify-center gap-2">
            <span>Hi, I'm</span>
            <strong className="text-white font-bold underline decoration-[#00f0ff]/60 underline-offset-4">
              Pranjali Bhavsar
            </strong>
            <span className="text-zinc-400">— Specialized in</span>
            <TypewriterText
              words={[
                'Artificial Intelligence',
                'Machine Learning Pipelines',
                'Predictive Analytics',
                'Algorithmic Problem Solving',
                'Full Stack Applications'
              ]}
              typingSpeed={75}
              deletingSpeed={40}
              pauseTime={1800}
            />
          </p>
        </div>

        {/* Key Stats Pill Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-12">
          <div className="glass-panel p-3.5 rounded-xl border border-white/10 text-center hover:border-[#00f0ff]/40 transition-all">
            <div className="text-2xl font-bold font-mono text-white">8.76</div>
            <div className="text-xs text-zinc-400 mt-0.5">B.Tech CGPA (AI&ML)</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10 text-center hover:border-[#9d4edd]/40 transition-all">
            <div className="text-2xl font-bold font-mono text-[#00f0ff]">1000+</div>
            <div className="text-xs text-zinc-400 mt-0.5">Problems Solved</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10 text-center hover:border-[#00f0ff]/40 transition-all">
            <div className="text-2xl font-bold font-mono text-[#c084fc]">1st Prize</div>
            <div className="text-xs text-zinc-400 mt-0.5">EUREKA Startup Win</div>
          </div>
          <div className="glass-panel p-3.5 rounded-xl border border-white/10 text-center hover:border-[#9d4edd]/40 transition-all">
            <div className="text-2xl font-bold font-mono text-white">SIH & Adobe</div>
            <div className="text-xs text-zinc-400 mt-0.5">Hackathon Contender</div>
          </div>
        </div>

        {/* Action Buttons with magnetic physics */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-16">
          <MagneticButton
            href="#projects"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] text-black font-bold text-sm tracking-wide shadow-[0_0_25px_rgba(0,240,255,0.4)] hover:shadow-[0_0_40px_rgba(157,78,221,0.6)] transition-all duration-300 transform hover:scale-[1.02]"
          >
            Explore Projects
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="px-8 py-3.5 rounded-xl bg-white/[0.05] border border-white/20 hover:border-[#00f0ff] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all duration-300"
          >
            Get In Touch
          </MagneticButton>

          <MagneticButton
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#00f0ff] text-white hover:text-[#00f0ff] transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={20} />
          </MagneticButton>

          <MagneticButton
            href="mailto:pranjalibhavsar@gmail.com"
            className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 hover:border-[#9d4edd] text-white hover:text-[#9d4edd] transition-all"
            aria-label="Send Email"
          >
            <Mail size={20} />
          </MagneticButton>
        </div>

        {/* Animated Scroll Down Indicator */}
        <a
          href="#about"
          className="group flex flex-col items-center gap-2 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-xs font-mono tracking-widest uppercase text-zinc-400 group-hover:text-[#00f0ff] transition-colors">
            Scroll to explore
          </span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 group-hover:border-[#00f0ff] flex items-start justify-center p-1.5 transition-colors">
            <div className="w-1.5 h-2.5 bg-[#00f0ff] rounded-full animate-bounce" />
          </div>
          <ArrowDown size={14} className="text-white/40 group-hover:text-[#00f0ff] animate-pulse" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
