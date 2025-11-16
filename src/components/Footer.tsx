
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 bg-light-background dark:bg-dark-background border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        
        <div className="flex space-x-6 mb-6 md:mb-0 md:order-2">
          <a href="https://github.com/TiagoGDeAlmeida" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/tiago-goncalves-de-almeida/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-light-primary dark:hover:text-dark-primary transition-colors duration-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        <motion.p
          className="text-sm text-light-secondary dark:text-dark-secondary text-center md:text-left md:order-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Tiago De Almeida. Tous droits réservés.
        </motion.p>
        
      </div>
    </footer>
  );
};

export default Footer;
