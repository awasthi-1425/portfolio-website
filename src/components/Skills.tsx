const skillGroups = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript (ES6+)', 'C++', 'SQL'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'Node.js', 'Express.js', 'Flask'],
  },
  {
    category: 'Frontend & Mobile',
    skills: ['React.js', 'React Native', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Tools & DevOps',
    skills: ['Git', 'Docker', 'MongoDB', 'MySQL', ],
  },
  {
    category: 'AI / ML',
    skills: ['TensorFlow', 'OpenCV', 'MediaPipe', , 'CNN', 'Flask APIs'],
  },
  {
    category: 'Core Concepts',
    skills: ['Data Structures', 'OOP', 'DBMS', 'Operating Systems'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-6xl mx-auto">
        <div className="section-divider mb-16" />

        <div className="text-center mb-14">
          <p className="text-sky-400 text-sm font-medium tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Stack</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ category, skills }) => (
            <div
              key={category}
              className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 card-glow"
            >
              <p className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
