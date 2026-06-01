import { Mail, Linkedin, ExternalLink, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-5">Let's work together.</h2>
          <p className="text-gray-400 text-[15px] leading-relaxed mb-10">
            I'm open to internships, research roles, and exciting projects. Feel free to reach out — I respond promptly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:sddhntawasthi@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-sm font-semibold transition-all duration-200"
            >
              <Mail size={15} />
              sddhntawasthi@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/siddhant-awasthi-153779316/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-white/20 text-sm font-semibold transition-all duration-200"
            >
              <Linkedin size={15} />
              LinkedIn
              <ExternalLink size={12} className="text-gray-600" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/siddhant-awasthi-153779316/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/awasthi-1425"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-sky-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="mailto:sddhntawasthi@gmail.com"
              className="text-gray-600 hover:text-sky-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="section-divider mt-16 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-600 text-xs">
          <p>© 2026 Siddhant Awasthi. All rights reserved.</p>
          <p>Kanpur, Uttar Pradesh, India · +91-9695338347</p>
        </div>
      </div>
    </section>
  );
}
