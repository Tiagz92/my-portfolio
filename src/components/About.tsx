import React from 'react';
import { motion } from 'framer-motion';
import CV from '../assets/images/Cv alternance.pdf'; // Import direct du fichier PDF

const About: React.FC = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>About Me</h2>
      <p>
        I'm a passionate web developer who loves creating interactive and modern web experiences. I love to learn new
        technologies and frameworks to improve my skills. I have experience in front-end & back-end development and a
        keen interest in building user-friendly, responsive applications.
      </p>
      <a href={CV} target="_blank" rel="noopener noreferrer">
        Download my CV
      </a>
    </motion.section>
  );
};

export default About;
