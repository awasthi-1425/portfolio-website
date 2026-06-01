import { Trophy, Code, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Code,
    title: 'LeetCode — Top 5% Globally',
    period: 'Jan 2024 – Present',
    badge: 'Rating: 1900+',
    badgeColor: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    points: [
      'Solved 440+ problems across Dynamic Programming, Graphs, and HashMaps.',
      'Consistently ranked in the top percentile in weekly global coding contests.',
    ],
  },
  {
    icon: Zap,
    title: 'EY Techathon 2025',
    period: 'Nov 2025',
    badge: 'Round 2 Qualifier',
    badgeColor: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
    points: [
      'Qualified Round 1 and shortlisted for Round 2 from a competitive national pool.',
      'Demonstrated strong technical aptitude and innovative problem-solving under constraints.',
    ],
  },
  {
    icon: Trophy,
    title: 'Smart India Hackathon 2025',
    period: 'Aug 2025',
    badge: 'Top Finalist — PSIT',
    badgeColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    points: [
      'Led a team of 6 to build KrishiRakshak; coordinated Flask backend and ML model integration.',
      'Presented to industry experts and secured selection for the regional level.',
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Achievements</p>
          <h2 className="text-3xl md:text-4xl font-bold">Recognition & Awards</h2>
        </div>

        <div className="space-y-5">
          {achievements.map((a) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 card-glow flex gap-5"
              >
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mt-0.5">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-1">
                    <h3 className="text-white font-semibold">{a.title}</h3>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${a.badgeColor}`}
                    >
                      {a.badge}
                    </span>
                  </div>
                  <p className="text-gray-500 text-xs mb-3">{a.period}</p>
                  <ul className="space-y-1.5">
                    {a.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="w-1 h-1 rounded-full bg-sky-400 mt-2 shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
