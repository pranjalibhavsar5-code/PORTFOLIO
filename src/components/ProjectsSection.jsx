import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2,
  ExternalLink,
  HeartHandshake,
  Database,
  Brain,
  Code,
  Sparkles,
  Layers,
  ArrowUpRight,
  CheckCircle,
  Activity,
  Search,
} from 'lucide-react';
import { Icons } from './CustomIcons';

import { MagneticButton } from './MagneticButton';

const projects = [
  {
    id: 'blood-donor-system',
    title: 'Blood Donor Management System',
    category: 'Full-Stack',
    featured: true,
    tagline: 'Life-saving donor registry with rapid emergency lookup and location indexing',
    technologies: ['Python', 'MySQL', 'Flask', 'HTML5', 'CSS3', 'REST API'],
    icon: HeartHandshake,
    accent: 'from-red-500/20 via-purple-500/20 to-cyan-500/10',
    borderGlow: 'hover:border-cyan-400',
    overview:
      'A comprehensive web application designed to eliminate donor search delays during hospital emergencies by indexing registered donors by blood group and geographic coordinates.',
    highlights: [
      'Engineered an emergency lookup system allowing immediate matching by blood group and proximity.',
      'Designed secure relational schemas in MySQL to manage donor registration, availability flags, and updates.',
      'Developed responsive RESTful backend endpoints in Python Flask with input validation and query sanitation.',
      'Constructed intuitive front-end views facilitating real-time status toggles and record maintenance.',
    ],
    metrics: [
      { label: 'Query Response', val: '< 60ms' },
      { label: 'Relational Safety', val: '100% ACID' },
      { label: 'Emergency Focus', val: 'Instant Lookup' },
    ],
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'ai-predictive-analytics',
    title: 'Algorithmic Data Analytics Lab',
    category: 'AI & ML',
    featured: true,
    tagline: 'Exploratory data analysis & predictive statistical modelling suite in Python',
    technologies: ['Python', 'Pandas', 'NumPy', 'Google Colab', 'Matplotlib'],
    icon: Brain,
    accent: 'from-cyan-500/20 via-blue-500/20 to-indigo-500/10',
    borderGlow: 'hover:border-cyan-400',
    overview:
      'Curated repository of machine learning and mathematical data models, experimenting with vector operations, predictive pipelines, and high-dimensional dataset preprocessing.',
    highlights: [
      'Benchmarked vectorized dataset transformations against iterative loops for 10x throughput.',
      'Implemented clean data imputation, one-hot encoding, and min-max normalization pipelines.',
      'Automated visual reporting workflows via Jupyter notebooks and Google Colaboratory environments.',
    ],
    metrics: [
      { label: 'Vectorized Speedup', val: '10x' },
      { label: 'Data Cleaning', val: 'Automated' },
      { label: 'Environment', val: 'Colab Cloud' },
    ],
    github: 'https://github.com',
    live: '#',
  },
  {
    id: 'codechef-problem-solver',
    title: 'Competitive Algorithmic Solutions',
    category: 'Algorithms',
    featured: false,
    tagline: 'Over 1000+ solved algorithmic and data structure problems with optimized complexity',
    technologies: ['Python', 'Java', 'C', 'Data Structures', 'Time Complexity'],
    icon: Code,
    accent: 'from-purple-500/20 via-pink-500/20 to-purple-500/10',
    borderGlow: 'hover:border-purple-400',
    overview:
      'Extensive portfolio of verified competitive coding solutions demonstrating proficiency in dynamic programming, graph traversal, greedy heuristics, and space-time optimization.',
    highlights: [
      'Milestone certification: 1000+ problems conquered across CodeChef and competitive platforms.',
      'Implemented optimal algorithmic solutions strictly maintaining O(N log N) and O(N) constraints.',
      'Practiced clean code documentation, edge-case coverage, and unit assertion tests.',
    ],
    metrics: [
      { label: 'Problems Solved', val: '1000+' },
      { label: 'Languages Used', val: 'Python / Java / C' },
      { label: 'Focus', val: 'Optimal O(1)/O(N)' },
    ],
    github: 'https://github.com',
    live: '#',
  },
];

const categories = ['All', 'Full-Stack', 'AI & ML', 'Algorithms'];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>PROJECTS SHOWCASE</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Featured Engineering Work
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-base"
        >
          Practical software applications built with modern engineering practices, clean database modeling, and algorithmic precision.
        </motion.p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                : 'glass-panel text-gray-400 hover:text-white border-white/10 hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Interactive Project Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Project Cards */}
        <div className="lg:col-span-5 space-y-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj) => {
              const Icon = proj.icon;
              const isSelected = selectedProject.id === proj.id;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onClick={() => setSelectedProject(proj)}
                  className={`p-6 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer group relative overflow-hidden ${
                    isSelected
                      ? 'border-cyan-400 bg-cyan-950/20 shadow-[0_0_30px_rgba(0,240,255,0.2)]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {proj.title}
                        </h4>
                        <span className="text-xs font-mono text-cyan-400">{proj.category}</span>
                      </div>
                    </div>
                    {isSelected && (
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
                        Active View
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
                    {proj.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                        +{proj.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right Column: Detailed Interactive Inspect View */}
        <div className="lg:col-span-7">
          <motion.div
            key={selectedProject.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="p-8 sm:p-10 rounded-3xl glass-panel border border-cyan-500/30 bg-gradient-to-br from-[#0c1220]/90 to-[#07090e]/95 shadow-[0_0_40px_rgba(0,240,255,0.15)] relative overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-cyan-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Top metadata */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 block">
                  Detailed Blueprint
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
              </div>
              <div className="flex gap-3">
                <a
                  href="mailto:pranjalibhavsar@gmail.com?subject=Inquiry about Blood Donor System"
                  className="p-2.5 rounded-xl bg-white/5 border border-white/15 hover:border-cyan-400 hover:text-cyan-400 text-gray-300 transition-all flex items-center gap-1.5 text-xs font-mono"
                  title="Contact Author"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Request Demo</span>
                </a>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-6">
              <h5 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">Architecture Overview</h5>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                {selectedProject.overview}
              </p>
            </div>

            {/* Technical Highlights list */}
            <div className="mb-8">
              <h5 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-3">Key Implementations</h5>
              <div className="space-y-3">
                {selectedProject.highlights.map((hl, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metric counters */}
            <div className="grid grid-cols-3 gap-3 mb-8 pt-4 border-t border-white/10">
              {selectedProject.metrics.map((m, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5 text-center">
                  <div className="text-base sm:text-lg font-bold font-mono text-cyan-400">{m.val}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-mono mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Stack Tags */}
            <div>
              <h5 className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2.5">Tech Stack</h5>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-black/60 border border-cyan-500/30 text-cyan-300"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
