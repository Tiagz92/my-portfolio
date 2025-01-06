import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2>Contact Me</h2>
      <p>
        I'm always open to discussing new projects or ideas. Feel free to reach out to me via email.
      </p>
      <motion.a
        href="mailto:tdealmeida85@gmail.com"
        whileHover={{ scale: 1.1, color: '#61dafb' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        tdealmeida85@gmail.com
      </motion.a>
    </motion.section>
  );
};

export default Contact;
