import React from 'react';
import { Trophy, Award, Target, Zap, ShieldCheck, Flag } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'EUREKA Startup Competition — Winner (1st Prize)',
      org: 'College-Level Innovation Summit',
      desc: 'Formulated and pitched a technologically viable AI startup solution that secured First Place among multi-disciplinary engineering teams.',
      highlight: '1st Prize Winner',
      color: 'border-[#9d4edd] text-[#c084fc]',
      bgGlow: 'bg-[#9d4edd]/10',
      icon: <Trophy className="text-[#c084fc]" size={26} />,
    },
    {
      title: '1000+ Algorithmic Problems Solved Milestone',
      org: 'CodeChef & Competitive Coding Platforms',
      desc: 'Achieved an extraordinary milestone by solving over 1,000 algorithmic, mathematical, and data structure challenges with optimal time/space complexity.',
      highlight: '1000+ Problems',
      color: 'border-[#00f0ff] text-[#00f0ff]',
      bgGlow: 'bg-[#00f0ff]/10',
      icon: <Target className="text-[#00f0ff]" size={26} />,
    },
    {
      title: 'Smart India Hackathon (SIH 2026)',
      org: 'Government of India / National Level',
      desc: 'Competed with high-caliber teams tackling national engineering problem statements with scalable architecture and rapid prototyping.',
      highlight: 'National Participant',
      color: 'border-[#00f0ff] text-[#00f0ff]',
      bgGlow: 'bg-[#00f0ff]/10',
      icon: <Flag className="text-[#00f0ff]" size={26} />,
    },
    {
      title: 'Adobe University Hackathon Contender',
      org: 'Adobe Student Tech Initiative',
      desc: 'Selected to develop digital creativity and software solutions under intensive timed hackathon rounds evaluating design thinking and code quality.',
      highlight: 'Hackathon Contender',
      color: 'border-[#9d4edd] text-[#c084fc]',
      bgGlow: 'bg-[#9d4edd]/10',
      icon: <Award className="text-[#c084fc]" size={26} />,
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-3">
            <Zap size={14} />
            Milestones & Competitions
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Honors & Competitive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">Achievements</span>
          </h2>
          <p className="max-w-xl text-zinc-300 text-sm sm:text-base">
            Demonstrated excellence across competitive coding tournaments, national hackathons, and technology startup showcases.
          </p>
        </div>

        {/* Achievement Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className={`p-3.5 rounded-xl border border-white/10 ${item.bgGlow} transition-transform group-hover:scale-105`}>
                  {item.icon}
                </div>
                <span className={`text-xs font-mono px-3 py-1 rounded-full border bg-white/[0.03] ${item.color}`}>
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#00f0ff] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mb-3">
                {item.org}
              </p>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
