import { motion } from "framer-motion";
import CV from "../assets/images/CV alternance tiago.pdf"; // Adjust the path as necessary

const aboutVariants = {
	initial: { opacity: 0, y: 40 },
	animate: { opacity: 1, y: 0 },
};

const About = () => {
	return (
		<motion.section
			variants={aboutVariants}
			initial="initial"
			animate="animate"
			transition={{ duration: 0.6 }}
			className="py-20 px-6 bg-gray-100 dark:bg-gray-800"
		>
			<div className="max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
					À propos
				</h2>
				<p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
					For over ten years, I worked as a social coordinator and later as a
					coordination manager, serving elderly and disabled people. Driven by
					my passion for new technologies, I decided to take a leap and, in
					September 2024, I completed a Full Stack web development bootcamp at
					Wild Code School. I am currently looking for a 15-month apprenticeship
					in Toulouse to solidify my knowledge. It's never too late...
				</p>

				<motion.a
					href={CV}
					download
					className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label="Download my CV in PDF format"
				>
					Télécharger mon CV
				</motion.a>
			</div>
		</motion.section>
	);
};

export default About;
