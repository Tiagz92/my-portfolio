import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'The Plant Spot',
    description:
      'A site where you can find the perfect plant for your home with the help of filters like brightness, watering, etc...',
    link: 'https://github.com/WildCodeSchool-2024-09/JS-Paris-P2-ThePlantSpot',
  },
  {
    title: 'DysWay',
    description:
      'A site that helps people to know more about dyslexia and shows a list of celebrities that have dyslexia.',
    link: 'https://tiagz92.github.io/wcs-project1/',
  },
];

const Projects: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      className="projects"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: '#61dafb' }}
            >
              View Project
            </motion.a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
