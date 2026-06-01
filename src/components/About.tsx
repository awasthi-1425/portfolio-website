import { GraduationCap, MapPin, Code2, Brain } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Building the future,<br />one commit at a time.
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">
              I'm a third-year Computer Science student at Pranveer Singh Institute of Technology, Kanpur — passionate about building AI-driven products and solving hard engineering problems.
            </p>
            <p className="text-gray-400 leading-relaxed text-[15px]">
              With a CGPA of 8.5 and a top 6% global LeetCode ranking, I combine academic rigor with hands-on project experience in full-stack development, machine learning, and competitive programming.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: GraduationCap,
                label: 'Education',
                value: 'B.Tech CS, PSIT',
                sub: '2024 – 2028 ',
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Kanpur, UP',
                sub: 'India',
              },
              {
                icon: Code2,
                label: 'LeetCode',
                value: '1905+ Rating',
                sub: 'Top 5% Globally',
              },
              {
                icon: Brain,
                label: 'Focus',
                value: 'AI & Full Stack',
                sub: 'ML Integration',
              },
            ].map(({ icon: Icon, label, value, sub }) => (
              <div
                key={label}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 card-glow"
              >
                <div className="w-9 h-9 rounded-xl bg-sky-500/10 flex items-center justify-center mb-3">
                  <Icon size={18} className="text-sky-400" />
                </div>
                <p className="text-xs text-gray-500 mb-1">{label}</p>
                <p className="text-white font-semibold text-sm">{value}</p>
                <p className="text-gray-500 text-xs mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
