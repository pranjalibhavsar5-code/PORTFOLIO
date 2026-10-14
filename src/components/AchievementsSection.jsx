import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Target, Zap, Sparkles, CheckCircle2 } from 'lucide-react';

const achievements = [
  {
    title: 'Smart India Hackathon (SIH)',
    year: '2026',
    role: 'Participant & Solution Architect',
    type: 'National Hackathon',
    description:
      'Participated in India’s premier open innovation hackathon, collaborating under tight deadlines to prototype technology-backed solutions for real societal challenges.',
    accent: 'border-cyan-500/30 text-cyan-400',
    icon: Trophy,
  },
  {
    title: 'Adobe University Hackathon',
    year: '2026',
    role: 'Participant & Developer',
    type: 'Corporate Hackathon',
    description:
      'Engaged in prestigious collegiate hackathon focused on engineering creative digital experiences and data intelligence.',
    accent: 'border-purple-500/30 text-purple-400',
    icon: Zap,
  },
  {
    title: 'EUREKA Startup College Competition',
    year: '2025 – 2026',
    role: 'Winner Certificate',
    type: 'Innovation & Pitch Contest',
    description:
      'Awarded 1st place / Winner certificate in the collegiate entrepreneurship summit for pitching a technically viable product solution with a clear problem-market fit.',
    accent: 'border-yellow-500/30 text-yellow-400',
    icon: Award,
  },
  {
    title: '1000+ Problem Solving Milestone',
    year: 'Continuous',
    role: 'CodeChef & LeetCode Practice',
    type: 'Algorithmic Proficiency',
    description:
      'Earned milestone certificate by successfully solving 1000+ programming challenges, honing mastery across arrays, strings, searching, sorting, and algorithmic logic.',
    accent: 'border-emerald-500/30 text-emerald-400',
    icon: Target,
  },
];

const areasOfInterest = [
  'Artificial Intelligence & Deep Learning',
  'Full-Stack Web Development (Python / Flask / React)',
  'Data Science, Analytics & Visual Exploration',
  'Database Design & Query Optimization (MySQL)',
  'Algorithmic Problem Solving & Data Structures',
  'HealthTech & Civic Impact Engineering',
];

export const AchievementsSection = () => {
  return (
    <section id="experience" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>HONORS & INTERESTS</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Achievements & Vision
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-base"
        >
          Recognition in national hackathons, startup competitions, and dedication to continuous competitive learning.
        </motion.p>
      </div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {achievements.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`p-7 rounded-2xl glass-panel border ${item.accent} hover:shadow-[0_0_30px_rgba(0,240,255,0.15)] transition-all duration-300 relative group overflow-hidden`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-mono text-gray-400">{item.year}</span>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-cyan-300 mt-1">
                    {item.type}
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs font-mono text-cyan-400 mb-3">{item.role}</p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Areas of Interest Pill Cloud */}
      <div className="p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-white">Areas of Deep Exploration</h3>
            <p className="text-xs text-gray-400 font-mono mt-1">
              Curated domains of active learning and engineering curiosity
            </p>
          </div>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
            Current Focus
          </span>
        </div>

        <div className="flex flex-wrap gap-3">
          {areasOfInterest.map((interest, i) => (
            <motion.div
              key={interest}
              whileHover={{ scale: 1.03 }}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 text-sm text-gray-200 transition-all flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>{interest}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
