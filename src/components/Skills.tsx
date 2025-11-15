import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiVite } from 'react-icons/si';

const skills = [
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <FaJs />, name: 'JavaScript' },
  { icon: <SiTypescript />, name: 'TypeScript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <SiVite />, name: 'Vite' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaFigma />, name: 'Figma' },
];

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="card flex flex-col items-center justify-center p-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.1, y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
        >
          <div className="text-6xl text-accent mb-4">{skill.icon}</div>
          <p className="text-lg font-semibold">{skill.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
