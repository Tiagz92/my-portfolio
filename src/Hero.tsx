import type React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
	  useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Hi, I’m Tiago Gonçalves De Almeida</h1>
      <p>For over ten years, I worked as a social coordinator and later as a coordination manager, serving elderly and disabled people. Now, approaching the age of 40 and driven by my passion for new technologies, I decided to take a leap and, in September 2024, I completed a Full Stack web development bootcamp at Wild Code School. I am currently looking for a 15-month apprenticeship in Toulouse to solidify my knowledge. 
		It's never too late...</p>
    </motion.section>
  );
};

export default Hero;
