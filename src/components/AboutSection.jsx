import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Code2,
  Database,
  Cpu,
  GraduationCap,
  Award,
  Layers,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

export const AboutSection = () => {
  const [activeMatrixTab, setActiveMatrixTab] = useState(0);

  const matrixQuadrants = [
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      tag: 'Core Domain',
      accentColor: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30 hover:border-cyan-400',
      textColor: 'text-cyan-400',
      description:
        'Focused on machine intelligence foundations, algorithms, and applied mathematical modelling.',
      skills: ['NumPy & Pandas', 'Data Preprocessing', 'Predictive Modeling', 'Feature Engineering', 'Colab Workflows'],
      highlight: 'Aiming to build scalable intelligent applications with real-world clinical & societal utility.',
    },
    {
      id: 'software-dev',
      title: 'Full-Stack & Backend',
      icon: Code2,
      tag: 'Development',
      accentColor: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30 hover:border-purple-400',
      textColor: 'text-purple-400',
      description:
        'Translating complex problem statements into robust web services, API backends, and responsive user interfaces.',
      skills: ['Python & Java', 'C Programming', 'Flask Web Services', 'HTML5 / Modern CSS', 'Modular Architecture'],
      highlight: 'Engineered full-stack donor management system backed by relational integrity.',
    },
    {
      id: 'databases',
      title: 'Databases & Storage',
      icon: Database,
      tag: 'Data Architecture',
      accentColor: 'from-blue-500/20 to-indigo-500/20',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      textColor: 'text-blue-400',
      description:
        'Relational data design, normalized schemas, optimal SQL query formulations, and fast indexed lookups.',
      skills: ['MySQL RDBMS', 'Schema Normalization', 'Complex Queries', 'Transaction Integrity', 'Data Pipelines'],
      highlight: 'Designed emergency-response lookup schemas with low query overhead.',
    },
    {
      id: 'engineering-practices',
      title: 'Tools & Problem Solving',
      icon: Cpu,
      tag: 'Practices & Tools',
      accentColor: 'from-emerald-500/20 to-cyan-500/20',
      borderColor: 'border-emerald-500/30 hover:border-emerald-400',
      textColor: 'text-emerald-400',
      description:
        'Fast algorithmic reasoning, clean coding conventions, Git version control, and collaborative agile thinking.',
      skills: ['Git & GitHub', 'VS Code Workflows', 'Problem Solving (1000+ solved)', 'Analytical Thinking', 'Team Collaboration'],
      highlight: 'Active competitive coder solving challenging algorithmic constraints daily.',
    },
  ];

  const educationTimeline = [
    {
      degree: 'B.Tech in Artificial Intelligence & Machine Learning',
      institute: 'R. C. Patel Institute of Technology, Shirpur',
      period: '2025 – 2029',
      score: 'CGPA: 8.76 / 10.0',
      active: true,
      badge: 'Current Pursuit',
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C. 12th)',
      institute: 'Rashtriya Vidyalaya, Chalisgaon',
      period: '2023 – 2025',
      score: '82.00%',
      active: false,
      badge: 'Science Stream',
    },
    {
      degree: 'Secondary School Certificate (S.S.C. 10th)',
      institute: 'A. B. Girls Highschool, Chalisgaon',
      period: '2023',
      score: '92.00%',
      active: false,
      badge: 'Distinction',
    },
  ];

  return (
    <section id="about" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT & EXPERTISE MATRIX</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Engineering Mindset, Driven by AI.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-base"
        >
          Bridging computational logic with algorithmic machine learning. A snapshot of my focus areas, technical foundations, and academic trajectory.
        </motion.p>
      </div>

      {/* 2x2 Interactive Expertise Matrix Grid */}
      <div className="mb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" />
            Core Capabilities 2×2 Matrix
          </h3>
          <span className="text-xs font-mono text-gray-400 hidden sm:inline">
            Interactive hover & click to explore
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {matrixQuadrants.map((quad, index) => {
            const Icon = quad.icon;
            const isHovered = activeMatrixTab === index;
            return (
              <motion.div
                key={quad.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setActiveMatrixTab(index)}
                className={`relative p-8 rounded-2xl glass-panel border transition-all duration-300 group cursor-pointer ${
                  isHovered
                    ? `${quad.borderColor} bg-gradient-to-br ${quad.accentColor} shadow-[0_0_30px_rgba(0,240,255,0.15)] -translate-y-1`
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Glowing Top Pill */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/10 ${quad.textColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {quad.tag}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {quad.title}
                </h4>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {quad.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {quad.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-lg bg-black/40 border border-white/10 text-gray-200 group-hover:border-cyan-400/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Highlight note */}
                <div className="pt-4 border-t border-white/10 flex items-start gap-2 text-xs text-gray-400 font-mono">
                  <span className={`${quad.textColor} font-bold`}>★</span>
                  <span>{quad.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Education & Academic Pathway */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Bio Summary Card */}
        <div className="p-8 rounded-2xl glass-panel border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-bold text-lg">Philosophy</h4>
              <p className="text-xs text-gray-400 font-mono">Pranjali Bhavsar</p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            "I am driven by deep curiosity in Artificial Intelligence and Machine Learning. I take pride in combining logical problem solving with pragmatic software architecture—building tools that serve vital needs like healthcare donor networks."
          </p>
          <div className="space-y-2 pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Location:</span>
              <span className="text-white">Shirpur, Maharashtra</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Email:</span>
              <span className="text-cyan-400">pranjalibhavsar@gmail.com</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-gray-400">Phone:</span>
              <span className="text-white">+91 9270345727</span>
            </div>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2 mb-2">
            <GraduationCap className="w-5 h-5 text-purple-400" />
            Academic Progression
          </h3>

          <div className="space-y-4">
            {educationTimeline.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl glass-panel border transition-all duration-300 ${
                  item.active
                    ? 'border-cyan-400/40 bg-cyan-950/10 shadow-[0_0_20px_rgba(0,240,255,0.1)]'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-white">{item.degree}</span>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                    {item.period}
                  </span>
                </div>
                <div className="text-gray-300 text-sm mb-3">{item.institute}</div>
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <span className="text-xs font-mono text-gray-400">{item.badge}</span>
                  <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/50 px-3 py-0.5 rounded border border-cyan-400/30">
                    {item.score}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
