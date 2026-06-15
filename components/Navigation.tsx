import { motion } from 'motion/react';
import { Brain } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Blog', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-2 rounded-lg">
              <Brain className="w-6 h-6" />
            </div>
            <span className="font-semibold text-lg">AI/ML Engineer</span>
          </div>

          <div className="hidden md:flex gap-8">
           {navItems.map((item) => (
  <button
    key={item}
    onClick={() => {
      setActiveSection(item.toLowerCase());

      const section = document.getElementById(item.toLowerCase());

      if (section) {
        section.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }}
    className={`text-sm transition-colors ${
      activeSection === item.toLowerCase()
        ? 'text-indigo-400'
        : 'text-slate-300 hover:text-white'
    }`}
  >
    {item}
  </button>
))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
