import { useState } from 'react';
import { Menu } from 'lucide-react';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="text-white text-lg tracking-widest font-medium">
            Тот самый
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm text-zinc-400">
            <a href="#about" className="hover:text-white transition">
              О мастере
            </a>
            <a href="#works" className="hover:text-white transition">
              Работы
            </a>
            <a href="#process" className="hover:text-white transition">
              Процесс
            </a>
            <a
              href="#contact"
              className="px-8 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded-3xl"
            >
              Записаться
            </a>
          </nav>

          <Menu
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-900">
          <div className="flex flex-col px-6 py-6 space-y-6 text-zinc-400">
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              О мастере
            </a>
            <a
              href="#works"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              Работы
            </a>
            <a
              href="#process"
              onClick={() => setIsOpen(false)}
              className="hover:text-white transition"
            >
              Процесс
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 px-5 py-3 border border-white text-white text-center hover:bg-white hover:text-black transition rounded-3xl"
            >
              Записаться
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
