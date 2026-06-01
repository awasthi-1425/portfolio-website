import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code } from 'lucide-react';
// 1. Updated to a relative import path
import profilePic from './WhatsApp Image 2026-06-01 at 21.33.38.jpeg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-12">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(56,189,248,1) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sky-500/5 blur-3xl pointer-events-none" />

      {/* Main Content Container - Split screen layout */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 pt-20 md:pt-0">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-medium mb-6 tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-5 tracking-tight leading-none">
            Siddhant{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">
              Awasthi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-4 font-light">
            Full Stack Developer &amp; AI/ML Engineer
          </p>

          <p className="text-sm text-gray-500 mb-10 max-w-lg leading-relaxed">
            CS sophomore at PSIT Kanpur — building intelligent systems, crafting full-stack products, and competing in the top 6% globally on LeetCode.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-4 mb-10 flex-wrap">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            >
              View Projects <ExternalLink size={14} />
            </a>
            <a
              href="mailto:sddhntawasthi@gmail.com"
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-sm font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <Mail size={14} /> Get in Touch
            </a>
          </div>

          {/* Social Links with Updated URLs */}
          <div className="flex items-center justify-center md:justify-start gap-6">
            <a
              href="https://www.linkedin.com/in/siddhant-awasthi-153779316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/awasthi-1425"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://leetcode.com/u/awasthii_siddhant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
              aria-label="LeetCode"
              title="LeetCode"
            >
              <Code size={22} />
            </a>
            <a
              href="mailto:sddhntawasthi@gmail.com"
              className="text-gray-500 hover:text-sky-400 transition-colors duration-200"
              aria-label="Email"
              title="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* Right Side: Circular Profile Section */}
        <div className="flex-1 flex justify-center md:justify-end items-center w-full">
          <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-[340px] lg:h-[340px]">
            
            {/* Animated border circle */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-sky-500/30 via-sky-400/10 to-sky-500/30 bg-clip-border" />
            <div className="absolute inset-0 rounded-full border border-sky-500/20" />

            {/* Profile image container */}
            <div className="absolute inset-3 rounded-full bg-gradient-to-br from-sky-500/20 to-cyan-500/10 flex items-center justify-center border border-sky-500/30 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-sky-600/40 via-blue-600/20 to-cyan-600/30 flex items-center justify-center text-6xl md:text-8xl font-bold text-sky-300">
                {/* 2. Updated img tag to use the imported variable and object-cover */}
                <img 
                  src={profilePic}
                  alt="Siddhant Awasthi"
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Animated glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-sky-500/0 via-sky-500/20 to-sky-500/0 blur-2xl opacity-50 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 hover:text-sky-400 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}