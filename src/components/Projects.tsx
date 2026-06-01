// Fixed: Added 'Plane' to the import list here 👇
import { ExternalLink, Cpu, Plane, Leaf, Smartphone } from 'lucide-react';

const projects = [
  {
    icon: Leaf,
    name: 'KrishiRakshak',
    date: 'Aug 2025',
    stack: ['Python', 'TensorFlow', 'OpenCV', 'Flask'],
    description:
      'CNN model trained on 10,000+ images achieving 92% accuracy in real-time crop disease detection. Deployed via Flask REST API to serve diagnostic predictions to a mobile frontend.',
    highlight: '92% Accuracy',
    color: 'emerald',
  },
  {
    icon: Cpu,
    name: 'Sign Language Detector',
    date: 'Sept 2025',
    stack: ['Python', 'MediaPipe'],
    description:
      'Real-time gesture recognition system using MediaPipe for hand tracking with sub-100ms latency, enabling seamless communication for the hearing impaired.',
    highlight: '<100ms Latency',
    color: 'sky',
  },
  {
    icon: Plane, // This icon will now work correctly!
    name: 'Skyway',
    date: 'Early 2026',
    stack: ['Next.js', 'Supabase', 'PostgreSQL', 'PWA'],
    description:
      'Full-stack flight booking platform featuring a glassmorphic design, real-time seat synchronization, and secure atomic booking operations with offline functionality.',
    highlight: 'Real-Time Sync',
    color: 'rose',
  },
];

const colorMap: Record<string, { badge: string; bg: string; icon: string }> = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    bg: 'bg-emerald-500/5',
    icon: 'text-emerald-400',
  },
  sky: {
    badge: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    bg: 'bg-sky-500/5',
    icon: 'text-sky-400',
  },
  rose: {
    badge: 'bg-rose-500/10 text-rose-400 border-rose-500/20',
    bg: 'bg-rose-500/5',
    icon: 'text-rose-400',
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Work</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => {
            const c = colorMap[p.color];
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 card-glow flex flex-col"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl ${c.bg} flex items-center justify-center`}>
                    <Icon size={20} className={c.icon} />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${c.badge}`}
                  >
                    {p.highlight}
                  </span>
                </div>

                <h3 className="text-white font-semibold text-lg mb-1">{p.name}</h3>
                <p className="text-gray-600 text-xs mb-3">{p.date}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-gray-400 text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          {/* Also updated this link to your actual GitHub profile */}
          <a
            href="https://github.com/awasthi-1425"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-sky-400 text-sm transition-colors"
          >
            More on GitHub <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}