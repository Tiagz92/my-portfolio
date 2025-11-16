import NavItem from './NavItem';
import { sections } from '../data/sections';
// import ThemeToggle from './ThemeToggle'; // Commenté pour l'instant

interface NavBarProps {
  activeSection: string;
}

const NavBar: React.FC<NavBarProps> = ({ activeSection }) => {
  return (
    <nav className="flex items-center space-x-4">
      <ul className="hidden md:flex items-center space-x-1">
        {sections.map(section => (
          <li key={section.id}>
            <NavItem 
              section={section} 
              isActive={activeSection === section.name} 
            />
          </li>
        ))}
      </ul>
      {/* <ThemeToggle /> */}
    </nav>
  );
};

export default NavBar;
