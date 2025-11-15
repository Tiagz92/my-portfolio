import { motion } from "framer-motion";
import CV from "../assets/images/CV alternance tiago.pdf";
import { FiDownload } from 'react-icons/fi';

const aboutVariants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
};

const About = () => {
	return (
		<motion.div
			variants={aboutVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.6 }}
			className="text-center"
		>
			<p className="text-lg sm:text-xl text-light-foreground/80 dark:text-dark-foreground/80 mb-10 leading-relaxed max-w-3xl mx-auto">
                After a decade in the social sector, I've redirected my career toward web development. 
                Following an intensive bootcamp at Wild Code School, I'm now seeking a 15-month apprenticeship in Toulouse to apply my new skills in a professional environment.
			</p>

			<motion.a
				href={CV}
				download
				className="btn-primary py-3 px-8 text-lg font-semibold inline-flex items-center gap-2"
				whileHover={{ scale: 1.05, y: -5 }}
				whileTap={{ scale: 0.95 }}
				aria-label="Download my CV in PDF format"
			>
				Télécharger mon CV <FiDownload />
			</motion.a>
		</motion.div>
	);
};

export default About;
