import React, { useState } from 'react';
import MagneticButton from './MagneticButton';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Please include a message';
    } else if (formData.message.trim().length < 8) {
      errors.message = 'Message must be at least 8 characters';
    }

    return errors;
  };

  const errors = validate();

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (Object.keys(errors).length === 0) {
      // Trigger festive canvas confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f0ff', '#9d4edd', '#ffffff', '#c084fc']
        });
      } catch (err) {
        // Fallback silently if canvas-confetti is not loaded
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
      }, 4000);
    }
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-3">
            <Send size={14} />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] to-[#9d4edd]">Remarkable</span>
          </h2>
          <p className="max-w-xl text-zinc-300 text-sm sm:text-base">
            Open for AI & Machine Learning internships, collaborative research, full-stack projects, and hackathon teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>
              <p className="text-sm text-zinc-400 mb-6">
                Feel free to email directly, call, or drop a quick inquiry via the form.
              </p>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-[#00f0ff]/50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">EMAIL ME</span>
                      <a href="mailto:pranjalibhavsar@gmail.com" className="text-sm font-semibold text-white hover:text-[#00f0ff] transition-colors">
                        pranjalibhavsar@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('pranjalibhavsar@gmail.com', 'email')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={16} className="text-[#00f0ff]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between group hover:border-[#9d4edd]/50 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-[#9d4edd]/10 text-[#c084fc]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-zinc-400 block">CALL / WHATSAPP</span>
                      <a href="tel:+919270345727" className="text-sm font-semibold text-white hover:text-[#c084fc] transition-colors">
                        +91 9270345727
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+919270345727', 'phone')}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={16} className="text-[#00f0ff]" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-white/10 text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-zinc-400 block">LOCATION</span>
                    <span className="text-sm font-semibold text-white">
                      Shirpur, Maharashtra, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Status pill */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-zinc-300">
                  Response turnaround time: &lt; 24 Hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Minimal Form with Animated Underlines and Floating Validation */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative">
              
              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#9d4edd] to-[#00f0ff] p-0.5 mb-6">
                    <div className="w-full h-full bg-[#0a0d14] rounded-full flex items-center justify-center text-[#00f0ff]">
                      <CheckCircle2 size={36} />
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h4>
                  <p className="text-zinc-300 text-sm max-w-md">
                    Thank you, <span className="text-[#00f0ff] font-semibold">{formData.name}</span>. Your inquiry has been received. I'll get back to your email ({formData.email}) shortly.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-xs font-mono px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-7">
                  
                  {/* Name field with animated underline */}
                  <div className="relative group">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Your Name <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. Alex Morgan"
                      className="w-full bg-transparent text-white px-0 py-2.5 text-base border-b border-white/20 focus:border-transparent focus:outline-none placeholder-zinc-600 transition-colors"
                    />
                    {/* Animated Neon Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] transition-all duration-300 group-focus-within:w-full" />
                    
                    {/* Floating Validation Feedback */}
                    {touched.name && errors.name && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono animate-fadeIn">
                        <AlertCircle size={13} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  {/* Email field with animated underline */}
                  <div className="relative group">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#00f0ff]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      placeholder="alex@organization.com"
                      className="w-full bg-transparent text-white px-0 py-2.5 text-base border-b border-white/20 focus:border-transparent focus:outline-none placeholder-zinc-600 transition-colors"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] transition-all duration-300 group-focus-within:w-full" />

                    {touched.email && errors.email && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono animate-fadeIn">
                        <AlertCircle size={13} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>

                  {/* Subject field */}
                  <div className="relative group">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project collaboration / Internship inquiry"
                      className="w-full bg-transparent text-white px-0 py-2.5 text-base border-b border-white/20 focus:border-transparent focus:outline-none placeholder-zinc-600 transition-colors"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] transition-all duration-300 group-focus-within:w-full" />
                  </div>

                  {/* Message field */}
                  <div className="relative group">
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">
                      Message <span className="text-[#00f0ff]">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={() => handleBlur('message')}
                      placeholder="Tell me about your idea, role requirements, or challenge..."
                      className="w-full bg-transparent text-white px-0 py-2.5 text-base border-b border-white/20 focus:border-transparent focus:outline-none placeholder-zinc-600 transition-colors resize-none"
                    />
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00f0ff] to-[#9d4edd] transition-all duration-300 group-focus-within:w-full" />

                    {touched.message && errors.message && (
                      <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-1.5 font-mono animate-fadeIn">
                        <AlertCircle size={13} />
                        <span>{errors.message}</span>
                      </div>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <MagneticButton
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#9d4edd] via-[#6a00f4] to-[#00f0ff] text-white font-bold text-sm tracking-wider uppercase transition-all duration-300 shadow-[0_0_20px_rgba(157,78,221,0.4)] hover:shadow-[0_0_35px_rgba(0,240,255,0.5)] flex items-center justify-center gap-2"
                    >
                      <span>Transmit Message</span>
                      <Send size={16} />
                    </MagneticButton>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
