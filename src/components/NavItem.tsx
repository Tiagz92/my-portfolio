import { motion } from 'framer-motion';

interface NavItemProps {
  section: { id: string; name: string };
  isActive: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ section, isActive }) => {
  return (
    <a 
      href={`#${section.id}`}
      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${isActive ? 'text-light-primary dark:text-dark-primary' : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'}`}
    >
      {section.name}
      {isActive && (
        <motion.span
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-light-primary dark:bg-dark-primary"
          layoutId="underline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </a>
  );
};

export default NavItem;
