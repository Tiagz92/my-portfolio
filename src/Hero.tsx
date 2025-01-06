import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
	<motion.section
   		className="hero">
		initial={{ opacity: 0, y: -50 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0,8 }}
		
      <h1>Hey, I’m Tiago Gonçalves De Almeida</h1>
      <p>I build cool web experiences.</p>
      <button onClick={() => alert('Let’s connect!')}>Contact Me</button>
    </motion.section>
  );
};

export default Hero;
