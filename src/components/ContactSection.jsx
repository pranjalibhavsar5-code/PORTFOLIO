import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import { Icons } from './CustomIcons';

import confetti from 'canvas-confetti';
import { MagneticButton } from './MagneticButton';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [activeField, setActiveField] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate real network submission with animated completion
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00f0ff', '#a855f7', '#3b82f6', '#ffffff'],
      });
    }, 1200);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('pranjalibhavsar@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-6 relative z-10 max-w-7xl mx-auto">
      {/* Background radial lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/20 text-xs font-mono text-cyan-400 mb-3"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>CONTACT & COLLABORATION</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-5xl font-bold text-white tracking-tight"
        >
          Let’s Build Something Meaningful.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mt-4 text-base"
        >
          Have an internship opportunity, project collaboration, or just want to chat about AI/ML? Drop a message below!
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Info & Coordinates */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-white mb-3">Direct Contact</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              I am actively seeking software engineering and AI/ML internship roles. Always responsive via email and telephone.
            </p>

            <div className="space-y-4">
              {/* Email item */}
              <div
                onClick={copyEmail}
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:bg-cyan-950/20 transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block">Email Address</span>
                    <span className="text-sm font-mono text-white group-hover:text-cyan-300 transition-colors">
                      pranjalibhavsar@gmail.com
                    </span>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-cyan-400 transition-colors">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </div>
              </div>

              {/* Phone item */}
              <a
                href="tel:+919270345727"
                className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-950/20 transition-all group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-gray-400 block">Phone</span>
                    <span className="text-sm font-mono text-white group-hover:text-purple-300 transition-colors">
                      +91 9270345727
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono text-purple-400">Call</span>
              </a>

              {/* Location item */}
              <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-gray-400 block">Location</span>
                  <span className="text-sm text-white">Shirpur / Chalisgaon, Maharashtra, India</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-3">
                Developer Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 text-white flex items-center gap-2 text-xs font-mono transition-all hover:bg-cyan-950/30"
                >
                  <Icons.Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400 text-white flex items-center gap-2 text-xs font-mono transition-all hover:bg-purple-950/30"
                >
                  <Icons.Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Animated Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-cyan-400/20 border border-cyan-400 flex items-center justify-center text-cyan-300 mx-auto mb-6 shadow-[0_0_30px_rgba(0,240,255,0.4)]">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Transmitted!</h3>
                  <p className="text-gray-300 text-sm max-w-md mx-auto mb-6">
                    Thank you for reaching out, {formData.name}. I've received your note and will get back to you promptly at {formData.email}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono border border-white/20 transition-all cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onFocus={() => setActiveField('name')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                      placeholder="e.g. Alex Rivera"
                      className="w-full bg-black/40 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-600 text-sm"
                    />
                    {/* Animated Underline */}
                    <div
                      className={`h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 rounded-full ${
                        activeField === 'name' ? 'w-full mt-1' : 'w-0'
                      }`}
                    />
                    {/* Floating Validation Notice */}
                    {errors.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-xs text-red-400 font-mono mt-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.name}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onFocus={() => setActiveField('email')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: null });
                      }}
                      placeholder="e.g. alex@example.com"
                      className="w-full bg-black/40 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-600 text-sm"
                    />
                    <div
                      className={`h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 rounded-full ${
                        activeField === 'email' ? 'w-full mt-1' : 'w-0'
                      }`}
                    />
                    {errors.email && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-xs text-red-400 font-mono mt-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Subject Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onFocus={() => setActiveField('subject')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Collaboration"
                      className="w-full bg-black/40 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-600 text-sm"
                    />
                    <div
                      className={`h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 rounded-full ${
                        activeField === 'subject' ? 'w-full mt-1' : 'w-0'
                      }`}
                    />
                  </div>

                  {/* Message Input */}
                  <div className="relative">
                    <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onFocus={() => setActiveField('message')}
                      onBlur={() => setActiveField(null)}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: null });
                      }}
                      placeholder="Type your message here..."
                      className="w-full bg-black/40 text-white px-4 py-3 rounded-xl border border-white/10 focus:border-cyan-400 outline-none transition-all placeholder:text-gray-600 text-sm resize-none"
                    />
                    <div
                      className={`h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 rounded-full ${
                        activeField === 'message' ? 'w-full mt-1' : 'w-0'
                      }`}
                    />
                    {errors.message && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-xs text-red-400 font-mono mt-1"
                      >
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <MagneticButton
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:opacity-95 text-white font-bold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(0,240,255,0.3)] flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Dispatch Message
                      </span>
                    )}
                  </MagneticButton>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
