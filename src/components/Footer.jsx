import React from 'react';
import { Terminal, Heart, ArrowUp } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#05070a]/90 backdrop-blur-md py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <div>
            <span className="text-white font-mono font-bold text-sm">
              Pranjali Bhavsar
            </span>
            <span className="text-gray-400 text-xs block">
              AI & Machine Learning Engineering Student
            </span>
          </div>
        </div>

        <div className="text-xs font-mono text-gray-400 text-center md:text-left">
          Crafted with pure white contrast (#FFFFFF), dark aesthetics & modern web standards.
        </div>

        <MagneticButton onClick={scrollToTop}>
          <div className="p-3 rounded-xl glass-panel border border-white/10 hover:border-cyan-400 text-gray-300 hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] flex items-center gap-1.5 text-xs font-mono">
            <ArrowUp className="w-4 h-4" />
            <span>Top</span>
          </div>
        </MagneticButton>
      </div>
    </footer>
  );
};
