interface NavbarProps {
  scrolled: boolean;
}

const links = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];

export default function Navbar({ scrolled }: NavbarProps) {
  const handleNav = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <span className="text-sky-400 font-bold text-xl tracking-tight font-['Space_Grotesk']">
          SA
        </span>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => handleNav(link)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
        <a
          href="mailto:sddhntawasthi@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all duration-200"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
