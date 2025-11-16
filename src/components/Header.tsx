import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import NavBar from './NavBar';
import { useActiveSection } from '../context/ActiveSectionContext';

const Header = () => {
  const { activeSection } = useActiveSection(); // On récupère la section active depuis le contexte
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 0);
  });

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
      aria-label="En-tête de la page"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <a href="#accueil" className="text-xl font-bold text-light-text dark:text-dark-text">Tiago De Almeida</a>
        </div>
        <NavBar activeSection={activeSection} />
      </div>
    </motion.header>
  );
};

export default Header;
