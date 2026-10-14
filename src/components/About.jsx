import React, { useState } from 'react';
import { 
  BrainCircuit, 
  Code, 
  Database, 
  TerminalSquare, 
  Sparkles, 
  GraduationCap, 
  Trophy, 
  CheckCircle2,
  Cpu,
  Layers,
  LineChart,
  Boxes
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Interactive 2x2 Matrix Grid Items
  const matrixQuadrants = [
    {
      id: 0,
      title: 'AI & Data Intelligence',
      tagline: 'Modeling, Statistical Inference & Predictive Insights',
      icon: <BrainCircuit className="text-[#00f0ff]" size={28} />,
      color: 'from-[#00f0ff]/20 to-transparent',
      borderColor: 'group-hover:border-[#00f0ff]',
      accentColor: '#00f0ff',
      skills: ['Pandas & NumPy', 'Data Analytics', 'Feature Engineering', 'Predictive Modeling', 'Google Colab Pipelines'],
      description: 'Architecting end-to-end data processing workflows, statistical exploratory analysis, and building machine learning models for real-world automated problem solving.'
    },
    {
      id: 1,
      title: 'Core Programming & DSA',
      tagline: '1000+ Algorithmic Challenges Solved',
      icon: <Cpu className="text-[#9d4edd]" size={28} />,
      color: 'from-[#9d4edd]/20 to-transparent',
      borderColor: 'group-hover:border-[#9d4edd]',
      accentColor: '#9d4edd',
      skills: ['Python 3', 'C Language', 'Java Fundamentals', 'Time & Space Optimization', 'CodeChef (1000+ solved)'],
      description: 'Solid foundation in data structures, graph algorithms, dynamic programming, and computational logic tested rigorously through competitive coding challenges.'
    },
    {
      id: 2,
      title: 'Full Stack & APIs',
      tagline: 'Production-ready Web Applications & Services',
      icon: <Layers className="text-[#00f0ff]" size={28} />,
      color: 'from-[#00f0ff]/20 to-transparent',
      borderColor: 'group-hover:border-[#00f0ff]',
      accentColor: '#00f0ff',
      skills: ['Python Flask', 'JavaScript (ES6+)', 'HTML5 & Responsive CSS3', 'RESTful API Design', 'Vite & React'],
      description: 'Designing full-fledged web interfaces, backend service routing, session handling, and seamless integration between frontend experiences and backend logic.'
    },
    {
      id: 3,
      title: 'Database Architecture & Tooling',
      tagline: 'Relational Schemas, Version Control & DevOps',
      icon: <Database className="text-[#9d4edd]" size={28} />,
      color: 'from-[#9d4edd]/20 to-transparent',
      borderColor: 'group-hover:border-[#9d4edd]',
      accentColor: '#9d4edd',
      skills: ['MySQL Relational Schema', 'Query Optimization', 'Git & GitHub Collaboration', 'VS Code & Linux Environment', 'Database Normalization'],
      description: 'Designing normalized schema architectures, relational integrity, complex queries, and version-controlled collaborative environments for reliable deployments.'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-3">
            <Sparkles size={14} />
            About Me & Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Specialized In Problem Solving & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">Applied Intelligence</span>
          </h2>
          <p className="max-w-2xl text-zinc-300 text-base sm:text-lg">
            Second Year AI & Machine Learning Engineering scholar with a 8.76 CGPA, passionate about constructing intelligent software, competitive algorithmic challenges, and real-time data solutions.
          </p>
        </div>

        {/* 2x2 Grid Matrix Layout */}
        <div className="mb-16">
          <div className="text-sm font-mono text-zinc-400 mb-4 flex items-center justify-between">
            <span>// INTERACTIVE 2x2 DOMAIN MATRIX (CLICK TO INSPECT)</span>
            <span className="text-[#00f0ff] hidden sm:inline text-xs">● Active Quad: {matrixQuadrants[activeTab].title}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {matrixQuadrants.map((quad) => {
              const isActive = activeTab === quad.id;
              return (
                <div
                  key={quad.id}
                  onClick={() => setActiveTab(quad.id)}
                  className={`group relative p-8 rounded-2xl cursor-pointer transition-all duration-300 glass-panel border ${
                    isActive 
                      ? 'border-[#00f0ff] shadow-[0_0_30px_rgba(0,240,255,0.2)] bg-[#0c1017]' 
                      : 'border-white/10 hover:border-white/30 bg-[#080a0f]'
                  }`}
                >
                  {/* Top quadrant banner */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3.5 rounded-xl bg-white/[0.05] border border-white/10 transition-transform duration-300 group-hover:scale-110">
                      {quad.icon}
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] text-zinc-400 border border-white/5">
                      QUAD [0{quad.id + 1}]
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                    {quad.title}
                  </h3>
                  <p className="text-sm font-mono text-[#00f0ff] mb-4">
                    {quad.tagline}
                  </p>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                    {quad.description}
                  </p>

                  {/* Skills tags inside quadrant */}
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {quad.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-md bg-white/[0.04] text-white border border-white/10 hover:border-[#9d4edd] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Active Indicator Pin */}
                  {isActive && (
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-mono text-[#00f0ff]">
                      <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
                      SELECTED
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Academic Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">B.Tech in AI & ML</h4>
                <p className="text-xs text-zinc-400">2025 – 2029 (Ongoing)</p>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-2">
              R. C. Patel Institute of Technology, Shirpur
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-[#00f0ff]/15 border border-[#00f0ff]/40 text-[#00f0ff] font-mono text-xs font-bold">
                CGPA: 8.76 / 10.0
              </span>
              <span className="text-xs text-zinc-400">Top Tier Academic Standing</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-[#9d4edd]/10 text-[#9d4edd]">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">H.S.C. (12th Science)</h4>
                <p className="text-xs text-zinc-400">2023 – 2025</p>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-2">
              Rashtriya Vidyalaya, Chalisgaon
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-[#9d4edd]/15 border border-[#9d4edd]/40 text-[#c084fc] font-mono text-xs font-bold">
                Score: 82.00%
              </span>
              <span className="text-xs text-zinc-400">Science Stream</span>
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-lg bg-white/10 text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">S.S.C. (10th Standard)</h4>
                <p className="text-xs text-zinc-400">Completed 2023</p>
              </div>
            </div>
            <p className="text-sm text-white font-medium mb-2">
              A. B. Girls Highschool, Chalisgaon
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="px-3 py-1 rounded-full bg-white/15 border border-white/40 text-white font-mono text-xs font-bold">
                Score: 92.00%
              </span>
              <span className="text-xs text-zinc-400">Academic Distinction</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
