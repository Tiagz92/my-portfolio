
import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavBar from './NavBar';
import { useActiveSection } from '../context/ActiveSectionContext';
import { useTranslation } from 'react-i18next';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const { activeSection } = useActiveSection();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const { i18n } = useTranslation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const selectedLanguageClasses = "text-light-primary dark:text-dark-primary font-semibold";
  const unselectedLanguageClasses = "text-light-secondary dark:text-dark-secondary";

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'border-b border-gray-200 dark:border-gray-800 bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm' : ''}`}
      aria-label="En-tête de la page"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <a href="#home" className="text-2xl font-bold text-light-text dark:text-dark-text tracking-tight">
          TDA
        </a>
        <div className="hidden md:flex items-center">
          <NavBar activeSection={activeSection} />
        </div>
        <div className="flex items-center space-x-6">
          <ThemeSwitcher />
          <div className="flex items-center space-x-4 text-sm">
            <button onClick={() => changeLanguage('fr')} className={`${i18n.language === 'fr' ? selectedLanguageClasses : unselectedLanguageClasses} transition-colors duration-300`}>FR</button>
            <span>|</span>
            <button onClick={() => changeLanguage('en')} className={`${i18n.language === 'en' ? selectedLanguageClasses : unselectedLanguageClasses} transition-colors duration-300`}>EN</button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
