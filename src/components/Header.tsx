import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    localStorage.setItem('isDarkMode', newIsDarkMode.toString());
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className={`py-4 px-6 z-50 transition-shadow ${isSticky ? 'sticky top-0 shadow-md bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-lg' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-accent">Mon Portfolio</a>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#projects" className="hover:text-accent transition-colors">Projets</a>
          <a href="#skills" className="hover:text-accent transition-colors">Compétences</a>
          <a href="#about" className="hover:text-accent transition-colors">À propos</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </nav>
        <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-light-border dark:hover:bg-dark-border transition-colors">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </header>
  );
};

export default Header;