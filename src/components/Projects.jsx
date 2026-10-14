import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import { 
  HeartHandshake, 
  LineChart, 
  Code2, 
  ExternalLink, 
  RotateCw, 
  Sparkles, 
  Layers, 
  Database, 
  ArrowRight, 
  Cpu 
} from 'lucide-react';
import { GithubIcon } from './CustomIcons';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [flippedCards, setFlippedCards] = useState({});

  const toggleFlip = (id) => {
    setFlippedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const projectList = [
    {
      id: 'blood-donor',
      category: 'web',
      badge: 'Full Stack & Healthcare',
      title: 'Blood Donor Management System',
      shortDesc: 'Emergency blood match finder and secure donor registry system with real-time availability filters.',
      fullDesc: 'A mission-critical medical platform engineered using Python Flask and MySQL. Enables instant emergency blood group matching sorted by city and proximity. Implements relational database normalization, donor verification cycles, request status tracking, and intuitive UI dashboards.',
      tags: ['Python', 'Flask', 'MySQL', 'HTML5/CSS3', 'Relational DB', 'REST API'],
      metrics: ['Zero latency city lookup', 'Structured schema', 'Role-based access'],
      icon: <HeartHandshake className="text-[#00f0ff]" size={32} />,
      gradient: 'from-[#00f0ff]/20 to-[#9d4edd]/10',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      id: 'predictive-modeling',
      category: 'ml',
      badge: 'AI & Data Science',
      title: 'EDA & Predictive Modeling Engine',
      shortDesc: 'Automated statistical exploratory pipelines, feature engineering, and predictive regression/classification.',
      fullDesc: 'End-to-end Machine Learning exploratory data analysis framework created in Google Colab using Pandas and NumPy. Features automated outlier detection, distribution analysis, multi-variate correlations, imputation workflows, and validated predictive algorithms for business intelligence.',
      tags: ['Python', 'Pandas', 'NumPy', 'Google Colab', 'Scikit-Learn', 'EDA'],
      metrics: ['Comprehensive feature engineering', 'Multi-variate stats', 'Data visualization'],
      icon: <LineChart className="text-[#9d4edd]" size={32} />,
      gradient: 'from-[#9d4edd]/20 to-[#00f0ff]/10',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      id: 'dsa-tracker',
      category: 'algorithms',
      badge: 'Competitive Programming',
      title: 'Algorithmic Problem Engine (1000+)',
      shortDesc: 'A benchmark repository of 1000+ solved algorithmic and data structure problems with time complexity audits.',
      fullDesc: 'High-performance algorithmic solutions written across Python, C, and Java. Spans graph algorithms (Dijkstra, BFS/DFS), dynamic programming, binary search variations, trees, and bit manipulation. Benchmarked on CodeChef and competitive coding platforms.',
      tags: ['Python', 'C', 'Java', 'Data Structures', 'Algorithms', 'CodeChef'],
      metrics: ['1000+ Verified Solutions', 'Optimal Time Complexity', 'Clean Modular Code'],
      icon: <Cpu className="text-[#00f0ff]" size={32} />,
      gradient: 'from-[#00f0ff]/20 to-[#9d4edd]/10',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    },
    {
      id: 'eureka-innovator',
      category: 'ml',
      badge: '1st Prize Winner',
      title: 'EUREKA AI Startup Prototype',
      shortDesc: 'Award-winning startup technology prototype recognized at college-level innovation summit.',
      fullDesc: 'Engineered a scalable prototype combining real-world AI efficiency with automated user workflows. Secured First Prize among inter-college teams for technical viability, business feasibility, and high-impact machine learning architecture.',
      tags: ['AI Innovation', 'Product Strategy', 'Python', 'Prototype', 'SIH 2026'],
      metrics: ['1st Place Trophy', 'Pitch & Tech Validation', 'Hackathon Tested'],
      icon: <Sparkles className="text-[#c084fc]" size={32} />,
      gradient: 'from-[#c084fc]/20 to-transparent',
      demoUrl: '#',
      githubUrl: 'https://github.com',
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectList 
    : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#9d4edd] uppercase tracking-wider mb-3">
              <Code2 size={14} />
              Featured Engineering Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9d4edd] to-[#00f0ff]">Innovations</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-xl">
              Interactive 3D flip cards. Click <span className="text-[#00f0ff] font-mono">"Flip Card"</span> or click anywhere on the card to inspect architecture, metrics, and source code.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-[#090c13] p-1.5 rounded-xl border border-white/10">
            {['all', 'ml', 'web', 'algorithms'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] text-black font-bold shadow-md shadow-[#00f0ff]/20'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat === 'all' ? 'All Systems' : cat === 'ml' ? 'AI & Data' : cat === 'web' ? 'Full Stack' : 'Algorithms'}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Flip Card Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isFlipped = !!flippedCards[project.id];

            return (
              <div
                key={project.id}
                className="perspective-1000 h-[420px] w-full"
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                  onClick={() => toggleFlip(project.id)}
                >
                  {/* FRONT OF CARD */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl glass-panel p-8 border border-white/10 flex flex-col justify-between overflow-hidden group hover:border-[#00f0ff]/60 transition-colors">
                    {/* Background accent glow */}
                    <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${project.gradient} blur-3xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`} />

                    <div>
                      {/* Card Header */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-white">
                          {project.icon}
                        </div>
                        <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-[#00f0ff] border border-white/10">
                          {project.badge}
                        </span>
                      </div>

                      {/* Title & Short Description */}
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                        {project.shortDesc}
                      </p>

                      {/* Tech stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-300 border border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 4 && (
                          <span className="text-xs font-mono px-2 py-1 rounded-md bg-white/[0.04] text-zinc-400">
                            +{project.tags.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Footer */}
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                        <RotateCw size={14} className="animate-spin text-[#00f0ff]" style={{ animationDuration: '6s' }} />
                        <span>Click card to inspect deep specs</span>
                      </div>
                      <span className="p-2 rounded-lg bg-white/[0.05] text-zinc-400 group-hover:text-[#00f0ff] transition-colors">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </div>

                  {/* BACK OF CARD (Flipped Details) */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl glass-panel p-8 border border-[#9d4edd]/60 bg-[#090c14] flex flex-col justify-between overflow-hidden shadow-[0_0_35px_rgba(157,78,221,0.25)]">
                    <div>
                      {/* Back Card Top */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono text-[#00f0ff] tracking-wider uppercase">
                          // TECHNICAL DEEP DIVE & METRICS
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleFlip(project.id);
                          }}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-zinc-300 hover:text-white flex items-center gap-1"
                        >
                          <RotateCw size={12} /> Flip Back
                        </button>
                      </div>

                      <h4 className="text-xl font-bold text-white mb-2">{project.title}</h4>
                      <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4">
                        {project.fullDesc}
                      </p>

                      {/* Performance / Highlights metrics */}
                      <div className="mb-4">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">Key Highlights:</span>
                        <div className="space-y-1.5">
                          {project.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-white">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00f0ff]" />
                              <span>{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Full Stack list */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-[#9d4edd]/15 text-[#c084fc] border border-[#9d4edd]/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* External Project Links */}
                    <div className="pt-4 border-t border-white/10 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
                      <MagneticButton
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 py-2.5 rounded-lg bg-white/10 hover:bg-[#00f0ff] text-white hover:text-black font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <GithubIcon size={15} /> Source Code
                      </MagneticButton>
                      <MagneticButton
                        href="mailto:pranjalibhavsar@gmail.com"
                        className="flex-1 py-2.5 rounded-lg bg-gradient-to-r from-[#9d4edd] to-[#00f0ff] text-black font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                      >
                        <ExternalLink size={15} /> Discuss Tech
                      </MagneticButton>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
