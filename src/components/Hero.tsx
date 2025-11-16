
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-80px)]">
            <motion.h1 
                className="text-5xl md:text-7xl font-extrabold text-light-text dark:text-dark-text tracking-tighter mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {t('hero.title')}
            </motion.h1>
            <motion.p 
                className="max-w-2xl text-lg md:text-xl text-light-secondary dark:text-dark-secondary mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {t('hero.subtitle')}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <a href="#projects" className="px-8 py-4 text-lg font-bold text-white bg-light-primary rounded-full dark:bg-dark-primary hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-all duration-300 shadow-lg">
                    {t('hero.button')}
                </a>
            </motion.div>
            <motion.div 
              className="flex space-x-6 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="https://github.com/TiagoGDeAlmeida" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/tiago-goncalves-de-almeida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
                <FaLinkedin size={28} />
              </a>
          </motion.div>
        </div>
    );
};

export default Hero;
